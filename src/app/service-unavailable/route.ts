import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/site-config';

export const dynamic = 'force-static';

export function GET() {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Service temporarily unavailable | ${siteConfig.name}</title>
    <style>
      body { margin: 0; font-family: Inter, Arial, sans-serif; color: #241f1b; background: #f7f2eb; }
      main { min-height: 100vh; display: grid; place-items: center; padding: 32px; }
      section { max-width: 640px; }
      p { line-height: 1.7; color: #5f574f; }
      a { color: #241f1b; font-weight: 600; }
    </style>
  </head>
  <body>
    <main>
      <section>
        <p>Silk Beauty Salon in Batumi, Georgia</p>
        <h1>Service temporarily unavailable</h1>
        <p>We are updating the booking and salon website experience. Please try again shortly, or contact us directly at <a href="mailto:${siteConfig.contact.email}">${siteConfig.contact.email}</a>.</p>
      </section>
    </main>
  </body>
</html>`;

  return new NextResponse(html, {
    status: 503,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'retry-after': '600',
    },
  });
}
