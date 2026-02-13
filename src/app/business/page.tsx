import Link from "next/link";

export default function BusinessPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">1x Rupee for Business</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Accept payments online and grow your business. Online checkout, payment links, invoicing, and recurring payments.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/business/online-checkout" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Online Checkout</h3>
          <p className="mt-2 text-sm text-gray-600">Accept payments on your website</p>
        </Link>
        <Link href="/business/payment-links" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Payment Links</h3>
          <p className="mt-2 text-sm text-gray-600">Create and share payment links</p>
        </Link>
        <Link href="/business/invoicing" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Invoicing</h3>
          <p className="mt-2 text-sm text-gray-600">Send professional invoices</p>
        </Link>
        <Link href="/business/recurring-payments" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Recurring Payments</h3>
          <p className="mt-2 text-sm text-gray-600">Subscriptions and repeat billing</p>
        </Link>
        <Link href="/business/checkout-integration" className="rounded-xl border border-gray-200 p-6 hover:border-primary">
          <h3 className="font-semibold text-gray-900">Checkout Integration</h3>
          <p className="mt-2 text-sm text-gray-600">Integrate 1x Rupee into your site</p>
        </Link>
      </div>
    </div>
  );
}
