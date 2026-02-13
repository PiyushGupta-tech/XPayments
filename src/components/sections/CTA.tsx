"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-primary py-24 md:py-32">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/5" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-700 ease-out ${isInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Discover even more ways to 1x Rupee
        </h2>
        <p className="mt-8 text-lg text-blue-100 md:text-xl">
          From seamless Payment Experiences to end-to-end UPI infrastructure—everything 
          that accelerates your 10x growth. Powered by 1x Rupee.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:scale-[1.03] sm:w-auto"
          >
            Start Now
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/docs"
            className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white/50 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:border-white/70 sm:w-auto"
          >
            Docs
          </Link>
        </div>
      </div>
    </section>
  );
}
