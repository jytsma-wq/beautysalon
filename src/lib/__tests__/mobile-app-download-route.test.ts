import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { GET, HEAD } from '@/app/api/download/android/route';
import { androidApkDefaultUrl } from '../mobile-app-download';

const routeUrl = 'https://silkbeautysalon.online/api/download/android';

function apkResponse(status = 200) {
  const body = status === 200 ? new Uint8Array([80, 75, 3, 4]) : null;

  return new Response(body, {
    status,
    headers: {
      'accept-ranges': 'bytes',
      'content-length': '86733754',
      'content-range': 'bytes 0-1023/86733754',
      'content-type': 'application/vnd.android.package-archive',
      etag: '"apk-etag"',
      'last-modified': 'Sun, 14 Jun 2026 10:00:00 GMT',
    },
  });
}

describe('Android APK download route', () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('streams the APK from the configured upstream source through the salon domain', async () => {
    fetchMock.mockResolvedValue(apkResponse());

    const response = await GET(
      new Request(routeUrl, {
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 14) Chrome Mobile',
        },
      })
    );

    expect(fetchMock).toHaveBeenCalledWith(
      androidApkDefaultUrl,
      expect.objectContaining({
        method: 'GET',
        redirect: 'follow',
      })
    );
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('application/vnd.android.package-archive');
    expect(response.headers.get('content-disposition')).toBe('attachment; filename="silk-beauty-salon.apk"');
    expect(response.headers.get('content-length')).toBe('86733754');
    const body = await response.arrayBuffer();
    expect(body.byteLength).toBe(4);
  });

  it('passes byte-range requests through for mobile browser resume support', async () => {
    fetchMock.mockResolvedValue(apkResponse(206));

    const response = await GET(
      new Request(routeUrl, {
        headers: {
          range: 'bytes=0-1023',
        },
      })
    );

    const [, init] = fetchMock.mock.calls[0];

    expect(init.headers.Range).toBe('bytes=0-1023');
    expect(response.status).toBe(206);
    expect(response.headers.get('content-range')).toBe('bytes 0-1023/86733754');
    expect(response.headers.get('accept-ranges')).toBe('bytes');
  });

  it('supports HEAD checks without downloading the file body', async () => {
    fetchMock.mockResolvedValue(apkResponse());

    const response = await HEAD(new Request(routeUrl));
    const [, init] = fetchMock.mock.calls[0];

    expect(init.method).toBe('HEAD');
    expect(response.status).toBe(200);
    expect(response.body).toBeNull();
    expect(response.headers.get('content-length')).toBe('86733754');
  });

  it('returns a stable temporary failure when the upstream asset cannot be fetched', async () => {
    fetchMock.mockResolvedValue(new Response('not found', { status: 404 }));

    const response = await GET(new Request(routeUrl));

    expect(response.status).toBe(502);
    await expect(response.text()).resolves.toBe('APK download is temporarily unavailable.');
  });
});
