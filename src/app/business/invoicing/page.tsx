import Link from "next/link";

export default function InvoicingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">Invoicing</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Send professional invoices and get paid faster. Track payments and manage your billing.
      </p>
      <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-dark">
        Get Started
      </Link>
    </div>
  );
}
