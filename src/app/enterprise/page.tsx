import Link from "next/link";

export default function EnterprisePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">XPayments for Enterprise</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Scalable payment solutions for marketplaces, platforms, and large enterprises.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Link href="/enterprise/marketplaces" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Marketplaces & Partners</h3>
        </Link>
        <Link href="/enterprise/platforms" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Platforms & Solutions</h3>
        </Link>
        <Link href="/enterprise/accept-paypal" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Accept XPayments</h3>
        </Link>
        <Link href="/enterprise/make-payments" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Make Payments</h3>
        </Link>
      </div>
    </div>
  );
}
