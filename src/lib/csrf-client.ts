'use client';

import { useEffect, useState } from 'react';

/**
 * Hook for client-side CSRF token retrieval.
 * Prefer the server-rendered meta tag, then request a token and matching cookie.
 */
export function useClientCsrfToken(): string | null {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof document === 'undefined') {
      return null;
    }

    return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? null;
  });

  useEffect(() => {
    if (token) {
      return;
    }

    let cancelled = false;

    fetch('/api/csrf', {
      cache: 'no-store',
      credentials: 'same-origin',
    })
      .then(async (response) => {
        if (!response.ok) {
          return null;
        }

        return (await response.json()) as { token?: string };
      })
      .then((data) => {
        if (!cancelled && data?.token) {
          setToken(data.token);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setToken(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  return token;
}
