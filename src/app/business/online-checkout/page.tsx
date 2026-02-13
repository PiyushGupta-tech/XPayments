import Link from "next/link";

export default function OnlineCheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">Online Checkout</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Let your customers pay with 1x Rupee at checkout. Simplified online checkout at millions of brands worldwide.
      </p>
      <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-dark">
        Get Started
      </Link>
    </div>
  );
}
