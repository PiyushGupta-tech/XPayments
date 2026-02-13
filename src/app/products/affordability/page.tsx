import Link from "next/link";
import { navLinks } from "@/lib/constants";

export default function AffordabilityPage() {
  const products = navLinks.products.find((p) => p.label === "Affordability");
  if (!products) return null;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-gray-900">HyperCredit</h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-600">
          Drive growth with an all-in-one Credit Engine. Embed credit across
          purchase journeys—for merchants and lenders alike.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {products.subItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900">{item.label}</h3>
              <span className="mt-2 inline-flex items-center text-sm text-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
