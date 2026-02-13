import Link from "next/link";

export default function RecurringPaymentsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">Recurring Payments</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Accept subscriptions and recurring payments. Set it once and get paid automatically.
      </p>
      <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-dark">
        Get Started
      </Link>
    </div>
  );
}
