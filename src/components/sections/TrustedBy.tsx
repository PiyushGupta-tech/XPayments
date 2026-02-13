"use client";

import { stats, trustedBy } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TrustedBy() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section className="relative bg-sky-50 py-16 md:py-24">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#003087 1px, transparent 1px), linear-gradient(90deg, #003087 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        {/* Trusted logos - white section */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustedBy.map((brand, index) => (
            <div
              key={index}
              className={`flex h-12 items-center justify-center rounded-lg bg-white px-8 text-lg font-bold text-gray-600 shadow-sm transition-all duration-500 ease-out hover:shadow-md hover:scale-105 hover:-translate-y-1 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Stats - Paper/tape style */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative rounded-lg border-2 border-dashed border-gray-300 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Tape effect at top */}
              <div className="absolute -top-2 left-1/2 h-6 w-16 -translate-x-1/2 rounded bg-sky-200/60" />
              <p className="mt-4 text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
