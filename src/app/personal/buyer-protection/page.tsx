import Link from "next/link";

export default function BuyerProtectionPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">XPayments Buyer Protection</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Buyer protection is available on eligible purchases. Time limits and other terms apply. Shop with confidence knowing XPayments has your back.
      </p>
      <Link href="/personal/shop" className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-dark">
        Shop with XPayments
      </Link>
    </div>
  );
}
