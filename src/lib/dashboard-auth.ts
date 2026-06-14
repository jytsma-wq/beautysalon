import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

export const DASHBOARD_COOKIE_NAME = 'silk-dashboard-session';
export const DASHBOARD_SESSION_MAX_AGE_SECONDS = 12 * 60 * 60;

function getSigningSecret(): string | null {
  return process.env.DASHBOARD_SESSION_SECRET
    || process.env.ADMIN_DASHBOARD_PASSWORD
    || process.env.DASHBOARD_PASSWORD
    || process.env.API_SECRET_KEY
    || null;
}

function signSessionPayload(payload: string, secret: string): string {
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

export function getDashboardPasswordFromEnv(): string | null {
  return process.env.ADMIN_DASHBOARD_PASSWORD
    || process.env.DASHBOARD_PASSWORD
    || process.env.API_SECRET_KEY
    || null;
}

export function createDashboardSessionValue(secret: string, now = new Date()): string {
  const issuedAt = String(now.getTime());
  const signature = signSessionPayload(issuedAt, secret);

  return `${issuedAt}.${signature}`;
}

export function isValidDashboardPassword(candidate: string, expected: string): boolean {
  if (!candidate || !expected) {
    return false;
  }

  const candidateBuffer = Buffer.from(candidate);
  const expectedBuffer = Buffer.from(expected);

  return candidateBuffer.length === expectedBuffer.length
    && timingSafeEqual(candidateBuffer, expectedBuffer);
}

export function verifyDashboardSessionValue(value: string | undefined, secret: string, now = new Date()): boolean {
  if (!value) {
    return false;
  }

  const [issuedAt, signature, extra] = value.split('.');
  if (!issuedAt || !signature || extra) {
    return false;
  }

  const issuedAtTime = Number(issuedAt);
  if (!Number.isFinite(issuedAtTime)) {
    return false;
  }

  const ageMs = now.getTime() - issuedAtTime;
  if (ageMs < 0 || ageMs > DASHBOARD_SESSION_MAX_AGE_SECONDS * 1000) {
    return false;
  }

  const expected = signSessionPayload(issuedAt, secret);
  const expectedBuffer = Buffer.from(expected);
  const signatureBuffer = Buffer.from(signature);

  return expectedBuffer.length === signatureBuffer.length
    && timingSafeEqual(expectedBuffer, signatureBuffer);
}

export async function isDashboardAuthenticated(): Promise<boolean> {
  const secret = getSigningSecret();
  if (!secret) {
    return false;
  }

  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(DASHBOARD_COOKIE_NAME)?.value;

  return verifyDashboardSessionValue(sessionValue, secret);
}

export async function setDashboardSessionCookie(): Promise<void> {
  const secret = getSigningSecret();
  if (!secret) {
    throw new Error('Dashboard authentication is not configured');
  }

  const cookieStore = await cookies();
  cookieStore.set(DASHBOARD_COOKIE_NAME, createDashboardSessionValue(secret), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: DASHBOARD_SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearDashboardSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(DASHBOARD_COOKIE_NAME);
}
