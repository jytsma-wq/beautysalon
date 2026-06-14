import { afterEach, describe, expect, it } from 'vitest';
import {
  createDashboardSessionValue,
  getDashboardPasswordFromEnv,
  isValidDashboardPassword,
  verifyDashboardSessionValue,
} from '../dashboard-auth';

describe('dashboard auth helpers', () => {
  const originalEnv = { ...process.env };

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  it('prefers the dedicated dashboard password over the API secret', () => {
    process.env.ADMIN_DASHBOARD_PASSWORD = 'salon-team-password';
    process.env.API_SECRET_KEY = 'api-secret-key-that-is-long-enough';

    expect(getDashboardPasswordFromEnv()).toBe('salon-team-password');
  });

  it('falls back to API_SECRET_KEY when no dashboard password is configured', () => {
    delete process.env.ADMIN_DASHBOARD_PASSWORD;
    delete process.env.DASHBOARD_PASSWORD;
    process.env.API_SECRET_KEY = 'api-secret-key-that-is-long-enough';

    expect(getDashboardPasswordFromEnv()).toBe('api-secret-key-that-is-long-enough');
  });

  it('signs and verifies an unexpired dashboard session', () => {
    const now = new Date('2026-06-14T08:00:00.000Z');
    const session = createDashboardSessionValue('session-secret', now);

    expect(verifyDashboardSessionValue(session, 'session-secret', now)).toBe(true);
  });

  it('validates submitted dashboard passwords without trimming intentional characters', () => {
    expect(isValidDashboardPassword('salon-team-password', 'salon-team-password')).toBe(true);
    expect(isValidDashboardPassword(' salon-team-password ', 'salon-team-password')).toBe(false);
    expect(isValidDashboardPassword('', 'salon-team-password')).toBe(false);
  });

  it('rejects expired or tampered dashboard sessions', () => {
    const now = new Date('2026-06-14T08:00:00.000Z');
    const session = createDashboardSessionValue('session-secret', now);
    const expiredAt = new Date(now.getTime() + 13 * 60 * 60 * 1000);

    expect(verifyDashboardSessionValue(session, 'wrong-secret', now)).toBe(false);
    expect(verifyDashboardSessionValue(session, 'session-secret', expiredAt)).toBe(false);
    expect(verifyDashboardSessionValue(`${session}tampered`, 'session-secret', now)).toBe(false);
  });
});
