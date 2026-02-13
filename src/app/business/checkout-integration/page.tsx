import Link from "next/link";

export default function CheckoutIntegrationPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">Checkout Integration</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Integrate 1x Rupee into your website or app. Developers can use our APIs and SDKs for seamless checkout.
      </p>
      <Link href="/developers" className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-dark">
        Developer Documentation
      </Link>
    </div>
  );
}
