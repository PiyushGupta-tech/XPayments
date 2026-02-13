import Link from "next/link";
import { navLinks } from "@/lib/constants";

export default function PaymentsPage() {
  const products = navLinks.products.find((p) => p.label === "Payments");
  if (!products) return null;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-gray-900">Payments</h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-600">
          Manage PAs & build native checkouts. Route payments, create unified
          APIs, and power seamless payouts for enterprises and startups.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
