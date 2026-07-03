'use client';

import { useEffect, useState } from 'react';

export async function fetchClientCsrfToken(): Promise<string | null> {
  const response = await fetch('/api/csrf', {
    cache: 'no-store',
    credentials: 'same-origin',
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json().catch(() => null)) as { token?: unknown } | null;
  return typeof data?.token === 'string' && data.token ? data.token : null;
}

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

    fetchClientCsrfToken()
      .then((csrfToken) => {
        if (!cancelled && csrfToken) {
          setToken(csrfToken);
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
