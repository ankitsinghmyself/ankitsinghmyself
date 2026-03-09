import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#040915] px-4 py-20">
      <div className="neo-panel w-full max-w-2xl rounded-[28px] px-6 py-10 text-center sm:px-10">
        <p className="neo-kicker">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/58">
          This portfolio uses a single-page layout. The page you tried to open
          does not exist.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="neo-button-primary inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold"
          >
            Back home
          </Link>
          <Link
            href="/#contact"
            className="neo-button-secondary inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold"
          >
            Contact me
          </Link>
        </div>
      </div>
    </main>
  );
}
