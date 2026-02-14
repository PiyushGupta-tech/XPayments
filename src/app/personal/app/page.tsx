import Link from "next/link";

export default function AppPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">Get the App</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        The XPayments app—pay easy, fast, and secure. Checkout with a few clicks, confidently send payments, and create your XPayments.Me link.
      </p>
      <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-dark">
        Get the App
      </Link>
    </div>
  );
}
