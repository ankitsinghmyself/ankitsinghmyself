import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-20">
      <div className="w-full max-w-xl text-center">
        <p className="text-sm font-medium text-secondary">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-secondary">
          This page does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Back home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-border"
          >
            Contact me
          </Link>
        </div>
      </div>
    </main>
  );
}

