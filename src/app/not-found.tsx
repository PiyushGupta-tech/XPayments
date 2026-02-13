import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">This page could not be found.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark"
      >
        Go to Home
      </Link>
    </div>
  );
}
