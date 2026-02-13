import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">Shop and Buy</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Shop with your 1x Rupee account at millions of brands worldwide. Rest easy knowing 1x Rupee Buyer Protection has your back while shopping.
      </p>
      <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-dark">
        Check Out With 1x Rupee
      </Link>
    </div>
  );
}
