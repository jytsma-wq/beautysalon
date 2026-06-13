/**
 * Health Check API
 * GET /api/v1/health
 */

import {
  ApiErrorCodes,
  createErrorResponse,
  createSuccessResponse,
  createJsonResponse,
  generateRequestId,
} from '@/lib/api/types';
import {
  getLightweightBookingStoreHealth,
  type BookingStoreHealth,
} from '@/lib/booking-health';

type HealthStatus = 'healthy' | 'degraded' | 'unhealthy';
type HealthChecks = {
  database: 'ok' | 'degraded' | 'error';
  dbLatencyMs?: number;
  bookingStore: BookingStoreHealth;
};

function getHealthStatus(bookingStoreHealth: BookingStoreHealth): HealthStatus {
  return bookingStoreHealth.mode === 'database' && bookingStoreHealth.status === 'healthy'
    ? 'healthy'
    : 'degraded';
}

function getHealthChecks(bookingStoreHealth: BookingStoreHealth): HealthChecks {
  return {
    database: bookingStoreHealth.mode === 'database' ? 'ok' : 'degraded',
    dbLatencyMs: bookingStoreHealth.mode === 'database'
      ? bookingStoreHealth.responseTime
      : undefined,
    bookingStore: bookingStoreHealth,
  };
}

/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns the health status of the API and its dependencies
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: string
 *                       enum: [healthy, degraded, unhealthy]
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     version:
 *                       type: string
 *                     checks:
 *                       type: object
 *                       properties:
 *                         database:
 *                           type: string
 *                           enum: [ok, degraded, error]
 *       503:
 *         description: Service is unhealthy
 */
export async function GET(): Promise<Response> {
  const requestId = generateRequestId();

  try {
    const bookingStoreHealth = await getLightweightBookingStoreHealth();
    const status = getHealthStatus(bookingStoreHealth);
    const checks = getHealthChecks(bookingStoreHealth);

    const response = createSuccessResponse(
      {
        status,
        timestamp: new Date().toISOString(),
        version: process.env.NEXT_PUBLIC_APP_VERSION
          ?? process.env.npm_package_version
          ?? '0.2.0',
        checks,
      },
      { requestId }
    );

    return createJsonResponse(response, 200, {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    });
  } catch (error) {
    console.error('Health check failed:', error);

    const response = createErrorResponse(
      ApiErrorCodes.SERVICE_UNAVAILABLE,
      'Health check failed',
      {
        message: error instanceof Error ? error.message : 'Unknown health check failure',
      },
      { requestId }
    );

    return createJsonResponse(response, 503, {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Retry-After': '60',
    });
  }
}
