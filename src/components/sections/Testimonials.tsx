"use client";

import { useState } from "react";
import { testimonials } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
          Trusted by the best — XPayments
        </p>
        <h2 className="mt-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          The Wall of Words
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          What leading businesses say about XPayments
        </p>
        <div className="mt-16">
          <div className={`mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 shadow-card transition-all duration-500 ease-out hover:shadow-xl hover:border-primary/10 md:p-12 ${isInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-6"}`}>
            <blockquote className="text-xl font-medium text-gray-800 md:text-2xl">
              &ldquo;{testimonials[active].quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-gray-600">— {testimonials[active].author}</p>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400 hover:scale-125"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
