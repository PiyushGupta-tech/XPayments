"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const { ref, isInView } = useScrollReveal(0.1, "0px 0px -40px 0px", true);
  return (
    <section className="relative bg-sky-50">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#003087 1px, transparent 1px), linear-gradient(90deg, #003087 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-7xl px-6 py-12 md:py-20 transition-all duration-700 ease-out"
        style={{
          transform: isInView ? "scale(1)" : "scale(0.92)",
          opacity: isInView ? 1 : 0.6,
        }}
      >
        {/* Announcement banner */}
        <div className="mx-auto mb-8 max-w-2xl rounded-2xl bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:shadow-md">
          <p className="text-center text-gray-800 font-medium">
            Powering payments across India.
          </p>
          <Link href="/resources/newsroom" className="mt-2 block text-center text-primary font-medium hover:underline transition-colors hover:text-primary-dark">
            Click here to read more
          </Link>
        </div>

        {/* Main heading: "Global Payments" blue, "Operating System" dark */}
        <div
          className={`text-center transition-all duration-700 ease-out delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-primary">Global Payments</span>
            <br />
            <span className="text-gray-900">Operating System</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-600 md:text-2xl">
            Superior UX, Higher conversions, and Minimal payment operations
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 ease-out delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-primary-dark hover:scale-[1.02] hover:shadow-lg transition-all duration-300 sm:w-auto"
          >
            Start Now
          </Link>
          <Link
            href="/products/payments"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-300 hover:border-primary hover:text-primary hover:scale-[1.02] hover:shadow-md sm:w-auto"
          >
            LEARN MORE
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
