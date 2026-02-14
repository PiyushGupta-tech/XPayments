import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">How XPayments Works</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Sign up for free, add your payment methods, and start shopping or sending money. XPayments keeps your financial info secure.
      </p>
      <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-dark">
        Sign Up
      </Link>
    </div>
  );
}
