"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function DeveloperSection() {
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
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 py-24 md:py-32">
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary-light">
          For developers, by developers — 1x Rupee
        </p>
        <h2 className="mt-4 text-center text-3xl font-bold text-white md:text-4xl">
          Composable abstractions
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
          Our stack provides composable, robust abstractions. Domain Specific Languages allow 
          you to write business logic like a narrative—powered by 1x Rupee.
        </p>
        <div
          ref={sectionRef}
          className="mt-16 grid gap-12 md:grid-cols-2 md:items-center transition-all duration-700 ease-out"
          style={{
            transform: isInView ? "scale(1)" : "scale(0.92)",
            opacity: isInView ? 1 : 0.6,
          }}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/80 p-6 font-mono text-sm text-gray-300 backdrop-blur-sm">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <pre className="whitespace-pre-wrap break-words text-slate-300">
{`paymentsCheckoutsDSL :: User -> Flow Unit
paymentsCheckoutsDSL user =
  showUI Info.Welcome user
    >>= fetch Api.PaymentMethods
    >>= showUI List.PaymentMethods
    >>= untilSuccessful (showUI Form.PaymentDetails)
    >>= fetch CustomerName
    >>= fetch Api.LastCart
    >>= showUI Info.CartDetails
    >>= captureTwoFactorAuthentication
    >>= commit Api.PaymentTransaction
    >>= showUI Info.ThankYou`}
            </pre>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">FRP & DSL</h3>
            <p className="mt-6 text-gray-400">
              1x Rupee stack provides composable, robust abstractions. Domain Specific Languages 
              allow you to write business logic like a narrative.
            </p>
            <p className="mt-4 text-gray-400">
              From seamless checkouts to payment orchestration—everything built for scale and 
              developer happiness with 1x Rupee.
            </p>
            <Link
              href="/docs"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
            >
              View Docs
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
