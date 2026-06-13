import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/lib/db', () => ({
  db: {
    $queryRaw: vi.fn(),
  },
}));

import { db } from '@/lib/db';
import { GET as getDbHealth, HEAD as headDbHealth } from '../health/db/route';
import { GET as getV1Health } from '../v1/health/route';

describe('Health APIs', () => {
  const mockQueryRaw = vi.mocked(db.$queryRaw);
  const originalBookingDatabaseEnabled = process.env.BOOKING_DATABASE_ENABLED;

  beforeEach(() => {
    mockQueryRaw.mockReset();
    process.env.BOOKING_DATABASE_ENABLED = '0';
  });

  it('keeps v1 health live when booking fallback storage is active', async () => {
    const response = await getV1Health();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data.status).toBe('degraded');
    expect(data.data.checks.database).toBe('degraded');
    expect(data.data.checks.bookingStore).toMatchObject({
      mode: 'file',
      status: 'degraded',
    });
  });

  it('reports healthy v1 status when the database booking store is healthy', async () => {
    process.env.BOOKING_DATABASE_ENABLED = '1';
    mockQueryRaw.mockResolvedValueOnce([{ health: 1 }]);

    const response = await getV1Health();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data.status).toBe('healthy');
    expect(data.data.checks.database).toBe('ok');
    expect(data.data.checks.bookingStore.mode).toBe('database');
    expect(mockQueryRaw).toHaveBeenCalledTimes(1);
  });

  it('keeps v1 health live when the configured database is unavailable', async () => {
    process.env.BOOKING_DATABASE_ENABLED = '1';
    const error = new Error('Database operation timed out') as Error & { code: string };
    error.code = 'P1002';
    mockQueryRaw.mockRejectedValueOnce(error);

    const response = await getV1Health();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data.status).toBe('degraded');
    expect(data.data.checks.database).toBe('degraded');
    expect(data.data.checks.bookingStore).toMatchObject({
      mode: 'file',
      status: 'degraded',
    });
  });

  it('returns a graceful v1 503 only when the health check itself fails', async () => {
    process.env.BOOKING_DATABASE_ENABLED = '1';
    mockQueryRaw.mockRejectedValueOnce(new Error('Unexpected health check failure'));

    const response = await getV1Health();
    const data = await response.json();

    expect(response.status).toBe(503);
    expect(response.headers.get('Retry-After')).toBe('60');
    expect(data.success).toBe(false);
    expect(data.error.code).toBe('SERVICE_UNAVAILABLE');
    expect(data.error.message).toBe('Health check failed');
  });

  it('keeps database health live when booking fallback storage is active', async () => {
    const response = await getDbHealth();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.status).toBe('degraded');
    expect(data.checks.database.status).toBe('unhealthy');
    expect(data.checks.bookingStore.mode).toBe('file');
  });

  it('adds Retry-After when database health cannot be evaluated', async () => {
    process.env.BOOKING_DATABASE_ENABLED = '1';
    mockQueryRaw.mockRejectedValueOnce(new Error('Health check failed'));

    const response = await getDbHealth();

    expect(response.status).toBe(503);
    expect(response.headers.get('Retry-After')).toBe('60');
  });

  it('keeps HEAD liveness live while the booking fallback is active', async () => {
    const response = await headDbHealth();

    expect(response.status).toBe(200);
    expect(response.headers.get('X-Health-Status')).toBe('degraded');
    expect(response.headers.get('X-Booking-Store')).toBe('file');
  });

  it('adds Retry-After to failed HEAD liveness checks', async () => {
    process.env.BOOKING_DATABASE_ENABLED = '1';
    mockQueryRaw.mockRejectedValueOnce(new Error('Health check failed'));

    const response = await headDbHealth();

    expect(response.status).toBe(503);
    expect(response.headers.get('Retry-After')).toBe('60');
  });

  afterEach(() => {
    if (originalBookingDatabaseEnabled === undefined) {
      delete process.env.BOOKING_DATABASE_ENABLED;
      return;
    }

    process.env.BOOKING_DATABASE_ENABLED = originalBookingDatabaseEnabled;
  });
});
