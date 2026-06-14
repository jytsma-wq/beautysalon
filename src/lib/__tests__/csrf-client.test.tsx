import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useClientCsrfToken } from '../csrf-client';

function TokenProbe() {
  const token = useClientCsrfToken();

  return <div data-testid="csrf-token">{token ?? 'missing'}</div>;
}

describe('useClientCsrfToken', () => {
  afterEach(() => {
    cleanup();
    document.head.innerHTML = '';
    vi.unstubAllGlobals();
  });

  it('reads an existing meta token immediately', () => {
    document.head.innerHTML = '<meta name="csrf-token" content="meta-token">';
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    render(<TokenProbe />);

    expect(screen.getByTestId('csrf-token')).toHaveTextContent('meta-token');
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('fetches a csrf token when the meta tag is absent', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ token: 'fetched-token' }),
    });
    vi.stubGlobal('fetch', fetchMock);

    render(<TokenProbe />);

    await waitFor(() => {
      expect(screen.getByTestId('csrf-token')).toHaveTextContent('fetched-token');
    });
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/csrf',
      expect.objectContaining({
        cache: 'no-store',
        credentials: 'same-origin',
      })
    );
  });
});
