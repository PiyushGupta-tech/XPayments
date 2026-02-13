import Link from "next/link";
import AboutUsSection from "@/components/sections/AboutUsSection";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <AboutUsSection />
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              From seamless payment experiences and managing multiple PAs/PGs, to routing transactions and end-to-end UPI infrastructure—everything that accelerates your 10x growth.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To be the trusted payments infrastructure layer for every business—enabling superior UX, higher conversions, and minimal payment operations at scale.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Why 1x Rupee</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6">
              <p className="text-2xl font-bold text-primary">300 Mn+</p>
              <p className="mt-2 text-gray-600">Transactions processed every day</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <p className="text-2xl font-bold text-primary">99.999%</p>
              <p className="mt-2 text-gray-600">Uptime best in class</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <p className="text-2xl font-bold text-primary">₹1 Lakh Cr+</p>
              <p className="mt-2 text-gray-600">Annual TPV</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-primary px-8 py-3 font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
