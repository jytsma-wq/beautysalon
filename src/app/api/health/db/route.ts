import { NextResponse } from 'next/server';
import { getBookingStoreHealth } from '@/lib/booking-store';

type BookingStoreHealth = Awaited<ReturnType<typeof getBookingStoreHealth>>;

interface HealthCheckResult {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  checks: {
    database: {
      status: 'healthy' | 'unhealthy';
      responseTime: number;
      message?: string;
    };
    bookingStore: BookingStoreHealth;
  };
}

function databaseHealthFromBookingStore(
  bookingStoreHealth: BookingStoreHealth
): HealthCheckResult['checks']['database'] {
  if (bookingStoreHealth.mode === 'database') {
    return {
      status: 'healthy',
      responseTime: bookingStoreHealth.responseTime,
    };
  }

  return {
    status: 'unhealthy',
    responseTime: bookingStoreHealth.responseTime,
    message: 'Database is unavailable; booking fallback storage is active.',
  };
}

function overallStatusFromBookingStore(
  bookingStoreHealth: BookingStoreHealth
): HealthCheckResult['status'] {
  return bookingStoreHealth.mode === 'database' ? 'healthy' : 'degraded';
}

/**
 * GET /api/health/db
 * Reports the effective booking persistence health without issuing repeated
 * database probes. On Hostinger, bad MySQL credentials can make many concurrent
 * Prisma checks expensive; one guarded booking-store probe is enough here.
 */
export async function GET(): Promise<Response> {
  const startedAt = Date.now();

  try {
    const bookingStoreHealth = await getBookingStoreHealth();
    const healthCheck: HealthCheckResult = {
      status: overallStatusFromBookingStore(bookingStoreHealth),
      timestamp: new Date().toISOString(),
      checks: {
        database: databaseHealthFromBookingStore(bookingStoreHealth),
        bookingStore: bookingStoreHealth,
      },
    };

    return NextResponse.json(healthCheck, {
      status: healthCheck.status === 'unhealthy' ? 503 : 200,
      headers: {
        'X-Health-Check-Response-Time': `${Date.now() - startedAt}ms`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        checks: {
          database: {
            status: 'unhealthy',
            responseTime: Date.now() - startedAt,
            message: error instanceof Error ? error.message : 'Health check failed',
          },
        },
      },
      {
        status: 503,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    );
  }
}

/**
 * HEAD /api/health/db
 * Lightweight liveness check. A degraded booking fallback still means the app
 * is serving bookings, so load balancers should not mark the app down.
 */
export async function HEAD(): Promise<Response> {
  try {
    const bookingStoreHealth = await getBookingStoreHealth();

    return new Response(null, {
      status: 200,
      headers: {
        'X-Health-Status': bookingStoreHealth.status,
        'X-Booking-Store': bookingStoreHealth.mode,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch {
    return new Response(null, {
      status: 503,
      headers: {
        'X-Health-Status': 'unhealthy',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  }
}
