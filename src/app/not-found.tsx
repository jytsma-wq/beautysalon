import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#241f1b] px-6 text-sm font-medium text-white transition-colors hover:bg-[#8d6f58]"
          >
            Go Home
          </Link>
          <Link
            href="/en/contact-us"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#d9cec1] px-6 text-sm font-medium text-[#241f1b] transition-colors hover:bg-[#f3ece3]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
