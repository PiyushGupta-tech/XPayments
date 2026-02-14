import Link from "next/link";

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">Become a Partner</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Partner with XPayments to reach more customers and grow your business.
      </p>
      <div className="mt-12 flex gap-4">
        <Link href="/partners/become-partner" className="rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-dark">
          Become a Partner
        </Link>
        <Link href="/partners/directory" className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:border-primary">
          Partner Directory
        </Link>
      </div>
    </div>
  );
}
