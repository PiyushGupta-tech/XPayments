"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HyperCheckoutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 md:py-32">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        ref={sectionRef}
        className="relative mx-auto max-w-7xl px-6 text-center transition-all duration-700 ease-out"
        style={{
          transform: isInView ? "scale(1)" : "scale(0.92)",
          opacity: isInView ? 1 : 0.6,
        }}
      >
        <div className="mb-6 inline-block rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-white">
            Full stack solution
          </span>
        </div>
        <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          1x Rupee HyperCheckout
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          HyperCheckout combines the power of native checkout experiences, robust payment 
          orchestration & advanced analytics.
        </p>
        <Link
          href="/products/payments/hypercheckout"
          className="mt-10 inline-flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
