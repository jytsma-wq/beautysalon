import { androidApkFileName, androidApkSourceUrl } from '@/lib/mobile-app-download';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const APK_CONTENT_TYPE = 'application/vnd.android.package-archive';

function attachmentDisposition() {
  return `attachment; filename="${androidApkFileName}"`;
}

function buildDownloadHeaders(upstreamHeaders: Headers) {
  const headers = new Headers({
    'Content-Type': upstreamHeaders.get('content-type') || APK_CONTENT_TYPE,
    'Content-Disposition': attachmentDisposition(),
    'Cache-Control': 'no-store',
    'Accept-Ranges': upstreamHeaders.get('accept-ranges') || 'bytes',
    'X-Content-Type-Options': 'nosniff',
  });

  const passThroughHeaders = [
    'content-length',
    'content-range',
    'etag',
    'last-modified',
  ];

  for (const header of passThroughHeaders) {
    const value = upstreamHeaders.get(header);
    if (value) {
      headers.set(header, value);
    }
  }

  return headers;
}

async function fetchApk(request: Request, method: 'GET' | 'HEAD') {
  const requestHeaders: Record<string, string> = {
    'User-Agent':
      request.headers.get('user-agent') ||
      'SilkBeautySalon/1.0 APK download proxy',
  };

  const range = request.headers.get('range');
  if (range) {
    requestHeaders.Range = range;
  }

  return fetch(androidApkSourceUrl, {
    method,
    headers: requestHeaders,
    redirect: 'follow',
    cache: 'no-store',
  });
}

function upstreamErrorResponse(status: number) {
  return new Response('APK download is temporarily unavailable.', {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

export async function GET(request: Request): Promise<Response> {
  try {
    const upstream = await fetchApk(request, 'GET');

    if (!upstream.ok && upstream.status !== 206 && upstream.status !== 416) {
      return upstreamErrorResponse(502);
    }

    return new Response(upstream.body, {
      status: upstream.status,
      headers: buildDownloadHeaders(upstream.headers),
    });
  } catch (error) {
    console.error('Android APK download proxy failed:', error);
    return upstreamErrorResponse(502);
  }
}

export async function HEAD(request: Request): Promise<Response> {
  try {
    const upstream = await fetchApk(request, 'HEAD');

    if (!upstream.ok && upstream.status !== 206 && upstream.status !== 416) {
      return upstreamErrorResponse(502);
    }

    return new Response(null, {
      status: upstream.status,
      headers: buildDownloadHeaders(upstream.headers),
    });
  } catch (error) {
    console.error('Android APK download HEAD failed:', error);
    return upstreamErrorResponse(502);
  }
}
