import Link from "next/link";

export default function PersonalPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">XPayments for You</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Shop, send, and manage your money with ease. Your way to pay, with XPayments.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/personal/shop" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Shop with XPayments</h3>
          <p className="mt-2 text-sm text-gray-600">Shop at millions of brands worldwide</p>
        </Link>
        <Link href="/personal/how-it-works" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">How XPayments Works</h3>
          <p className="mt-2 text-sm text-gray-600">Learn how to get started</p>
        </Link>
        <Link href="/personal/app" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Get the App</h3>
          <p className="mt-2 text-sm text-gray-600">Pay easy, fast, and secure</p>
        </Link>
        <Link href="/personal/buyer-protection" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Buyer Protection</h3>
          <p className="mt-2 text-sm text-gray-600">Shop with confidence</p>
        </Link>
      </div>
    </div>
  );
}
