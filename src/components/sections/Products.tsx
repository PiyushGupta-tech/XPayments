"use client";

import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const productDescriptions: Record<string, string> = {
  "HyperCheckout": "Native checkout experiences & payment orchestration for higher conversions.",
  "Express Checkout": "Unified Payment APIs for enterprises and startups.",
  "Payouts": "Instant payouts with IMPS, UPI, cards, and more.",
  "Payment Links & Forms": "Create & send payment links & forms without code.",
  "Offers": "PA-agnostic offers engine to create & manage offers.",
  "NACH Payments": "Simplified NACH Debit eMandates.",
  "HyperUPI": "1-click UPI payments with 90%+ success rates.",
  "UPI Issuing Stack": "Full UPI issuing stack for banks and PPIs.",
  "UPI TPAP Stack": "TPAP solutions for merchants and platforms.",
  "UPI Acquiring Stack": "UPI acquiring stack for banks and merchants.",
  "For Merchants": "Embed credit across purchase journeys for merchants.",
  "For Lenders": "Seamless lender integrations and credit infrastructure.",
  "QuickPay": "3x faster checkouts with native OTP and instant retries.",
  "Retry": "Smart retry logic for failed payments.",
  "Native OTP": "Native OTP experience for higher success rates.",
  "Third Party Validation": "TPV support for smoother checkouts.",
};

const iconColors: Record<string, string> = {
  "HyperCheckout": "bg-emerald-100 text-emerald-700",
  "Express Checkout": "bg-rose-100 text-rose-700",
  "Payouts": "bg-amber-100 text-amber-700",
  "Payment Links & Forms": "bg-blue-100 text-blue-700",
  "Offers": "bg-violet-100 text-violet-700",
  "NACH Payments": "bg-teal-100 text-teal-700",
  "HyperUPI": "bg-amber-100 text-amber-700",
  "UPI Issuing Stack": "bg-indigo-100 text-indigo-700",
  "UPI TPAP Stack": "bg-sky-100 text-sky-700",
  "UPI Acquiring Stack": "bg-cyan-100 text-cyan-700",
  "For Merchants": "bg-emerald-100 text-emerald-700",
  "For Lenders": "bg-violet-100 text-violet-700",
  "QuickPay": "bg-amber-100 text-amber-700",
  "Retry": "bg-rose-100 text-rose-700",
  "Native OTP": "bg-blue-100 text-blue-700",
  "Third Party Validation": "bg-indigo-100 text-indigo-700",
};

const categoryLabels: Record<string, string> = {
  "Payments": "CHECKOUT",
  "UPI Stack": "UPI SOLUTIONS",
  "Affordability": "AFFORDABILITY",
  "Customer Experience": "CUSTOMER EXPERIENCE",
};

export default function Products() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section className="bg-white py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Heading & Subtitle - 1x Rupee style */}
        <div className={`mb-16 transition-all duration-600 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Products
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Explore our suite of payment products & integrations.
          </p>
        </div>

        {/* Products by category - Grid layout */}
        <div className="space-y-12">
          {navLinks.products.map((category, catIndex) => (
            <div
              key={category.label}
              className={`transition-all duration-600 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              {/* Category heading - uppercase, light gray */}
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
                {categoryLabels[category.label] || category.label}
              </h3>

              {/* Product cards grid - 3 columns */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.subItems.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="group flex items-start gap-4 rounded-2xl bg-white p-6 transition-all duration-300 hover:bg-gray-50/80 hover:shadow-md"
                    >
                      {/* Icon - pastel background, left aligned */}
                      <span
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${iconColors[product.label] || "bg-gray-100 text-gray-600"}`}
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                          />
                        </svg>
                      </span>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {product.label}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">
                          {productDescriptions[product.label] || product.label}
                        </p>
                      </div>
                    </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs - clean, minimal */}
        <div
          className={`mt-16 flex flex-wrap gap-4 transition-all duration-600 ease-out delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-md"
          >
            Start Now
          </Link>
          <Link
            href="/products/payments"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:border-primary hover:text-primary hover:bg-gray-50"
          >
            Explore all products
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
