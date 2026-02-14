"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Stats() {
  const { ref, isInView } = useScrollReveal(0.1);
  const cards = [
    { title: "Lightning Fast, 1-Click UPI Checkout", desc: "HyperUPI is an industry-first 1-click UPI payment experience with 90%+ Success Rates—powered by XPayments.", href: "/products/upi-stack/hyperupi", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "End-to-End UPI Stack for TPAPs and PPIs", desc: "UPI SDK to power industry best UPI experience for your customers—built by XPayments.", href: "/products/upi-stack", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "UPI Acquiring Stack", desc: "First UPI Stack on Cloud with 99.99% Uptime and 90% Success Rates—zero technical declines with XPayments.", href: "/products/upi-stack/acquiring", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
          End to end UPI stack — XPayments
        </p>
        <h2 className="mt-4 text-center text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          UPI 360
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-600">
          XPayments powers India&apos;s UPI pulse, from pioneering customer experience solutions 
          to tailored UPI stacks for TPAPs & PPIs and custom bank solutions.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`group block rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm transition-all duration-500 ease-out hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${cards.indexOf(card) * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
              <p className="mt-4 text-gray-600">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
