import Link from "next/link";
import Image from "next/image";

const steps = [
  { num: 1, label: "Checkout" },
  { num: 2, label: "Design Studio" },
  { num: 3, label: "Orchestration" },
  { num: 4, label: "Analytics" },
];

const featureBoxes = [
  {
    title: "1-click card Checkout",
    desc: "Frictionless checkout for tokenised cards, with a CVV-less flow",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Auto Retry",
    desc: "Recover failed payments with a dynamic & configurable retry engine.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Outage",
    desc: "Real-time alerts in the event of payment downtimes",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    title: "Offers",
    desc: "Configurable Offers for customer nudges & better conversions",
    icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
  },
];

const testimonialHighlights = [
  { name: "Kaushal Singh", role: "PRODUCT LEAD, ONECARD", quote: "The platform is user-friendly and has made a significant impact on streamlining our repayments and driving key success metrics.", bg: "bg-gray-900" },
  { name: "Mohsin Batla", role: "DIRECTOR, TRAVCLAN", quote: "We admire XPayments for its great UI and consistent experience across our Web, Android, and iOS platforms!", bg: "bg-amber-50" },
  { name: "Amol Nahar", role: "HEAD OF PAYMENTS PRODUCTS, TATACLIQ", quote: "XPayments continues to offer a range of payment solutions with ease of integration which helps us provide seamless & choiceful payment options to our customers.", bg: "bg-white", company: "TATA CLIQ" },
  { name: "Ashish Jadhav", role: "DIRECTOR OF PRODUCT MANAGEMENT", quote: "Ease of handling Payment Integrations and onboarding of PGs. Using its dynamic routing logic we achieved nearly 20% lift in payment success.", bg: "bg-white", company: "THE GOOD GLAMM GROUP" },
  { name: "Prashant Aiyar", role: "PRODUCT, BIGBASKET", quote: "XPayments has been more of a partner than just a vendor. The breadth of knowledge in the payments space has been impressive!", bg: "bg-emerald-50" },
];

export default function HyperCheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb + Intro */}
      <div className="border-b border-gray-200 bg-sky-50/50">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <Link href="/products/payments" className="text-sm font-medium text-primary hover:underline">
            ← Payments
          </Link>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">HyperCheckout</h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            HyperCheckout combines the power of native checkout experiences, robust payment orchestration & advanced analytics.
          </p>
          <p className="mt-4 max-w-3xl text-gray-500">
            HyperCheckout is not a PA/PG, it is an Experience and Orchestration/Routing layer that connects with 300+ PA/PGs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Step indicator */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-wrap gap-6 md:gap-12">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${i === 0 ? "bg-primary text-white" : "bg-gray-100 text-gray-600"}`}>
                  {s.num}
                </span>
                <span className={`font-medium ${i === 0 ? "text-primary" : "text-gray-600"}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section: Advanced Checkout Experiences */}
      <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-6 mt-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary-light/50 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-light">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            What is HyperCheckout?
          </span>
          <h2 className="mt-8 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Advanced Checkout Experiences
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Deliver delight to your customers with seamless <strong className="text-white">1-click checkout experiences</strong>, configurable with the click of a button.
          </p>
        </div>
      </section>

      {/* Section: No-Code Design Studio */}
      <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-6 mt-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative text-center">
          <span className="inline-block rounded-lg border border-primary-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light">
            Native Payment Experience
          </span>
          <h2 className="mt-8 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            No-Code Design Studio
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Design custom branded native experiences across Android, iOS and Web. Customise elements to the look and feel of your brand (100+ customisations).
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-lg bg-primary px-8 py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Try XPayments Studio
          </Link>
        </div>
      </section>

      {/* Section: Phone mockup + Feature boxes */}
      <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-6 mt-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Phone mockup placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-[280px] rounded-3xl border-4 border-gray-700 bg-white p-4 shadow-2xl">
              <div className="rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white">PROCEED TO PAY</div>
              <p className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                No CVV required
              </p>
              <p className="mt-4 text-sm font-medium text-gray-700">More Options</p>
              <div className="mt-2 space-y-2">
                {["UPI", "Credit/Debit Cards", "NetBanking"].map((opt, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700">
                    {opt}
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Feature boxes */}
          <div className="grid gap-6 sm:grid-cols-2">
            {featureBoxes.map((f, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <svg className="h-8 w-8 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} /></svg>
                <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-gray-500">Fueled by XPayments</p>
      </section>

      {/* Section: Robust Payment Routing */}
      <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-6 mt-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-lg border border-primary-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light">
              Orchestration
            </span>
            <h2 className="mt-8 text-3xl font-bold text-white md:text-4xl">
              Robust Payment Routing
            </h2>
            <p className="mt-6 text-gray-300">
              Engineered for Scale, Reliability and Performance, XPayments&apos; enterprise grade orchestration routes payments to the best performing payment gateway, while adhering to the business rules set by you.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </span>
                <p className="text-gray-300">Route transactions to improve success rates by upto 10% and reduce processing costs</p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary-light">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </span>
                <p className="text-gray-300">PCI-DSS Compliant out of the box</p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary-light">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z" clipRule="evenodd" /><path fillRule="evenodd" d="M3.707 6.293a1 1 0 010 1.414l-2 2a1 1 0 11-1.414-1.414l2-2a1 1 0 011.414 0zm14 0a1 1 0 010 1.414l-2 2a1 1 0 11-1.414-1.414l2-2a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </span>
                <p className="text-gray-300">No-code Integrations with 300+ Payment Gateways / Aggregators globally</p>
              </div>
            </div>
          </div>
          {/* Maze/routing visual with XPayments logo in center */}
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-14 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-3 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
              {/* Central XPayments logo */}
              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-primary">
                <Image
                  src="/logo.png?v=3"
                  alt="XPayments"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Outcomes - Payments Data */}
      <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-6 mt-8 bg-white border border-gray-200 px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <span className="inline-block rounded-lg border border-gray-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-600">
          Outcomes
        </span>
        <h2 className="mt-8 text-3xl font-bold text-gray-900 md:text-4xl">
          <span className="text-primary">Payments</span> Data
        </h2>
        <p className="mt-6 max-w-2xl text-gray-600">
          Unlock true power of your payments data with actionable insights to drive smarter decisions.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Success rate", value: "86%", change: "-4%" },
            { label: "Successful Transactions", value: "11.2k", change: "+2%" },
            { label: "Processed Amount", value: "₹23 Cr", change: "+6%" },
          ].map((kpi, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm text-gray-600">{kpi.label}</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">{kpi.value}</p>
              <p className="mt-1 text-sm text-emerald-600">{kpi.change}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Testimonials */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          People <span className="text-primary">love</span> us and it shows
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialHighlights.slice(0, 6).map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 ${t.bg} ${t.bg.includes("white") || t.bg.includes("amber") || t.bg.includes("emerald") ? "border-gray-200 text-gray-900" : "border-gray-800 text-white"}`}
            >
              {t.company && <p className="mb-4 text-sm font-semibold text-gray-500">{t.company}</p>}
              <p className={`text-sm leading-relaxed ${t.bg.includes("gray-900") ? "text-gray-300" : "text-gray-700"}`}>
                {t.quote}
              </p>
              <p className={`mt-4 font-semibold ${t.bg.includes("gray-900") ? "text-white" : "text-gray-900"}`}>{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 md:mx-6 mt-8 mb-12 rounded-2xl border border-gray-200 bg-sky-50 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Ready to get started?</h2>
          <p className="mt-4 text-gray-600">
            Improve success rates by upto 10% and reduce processing costs. PCI-DSS Compliant out of the box.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-primary px-8 py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Try HyperCheckout
          </Link>
        </div>
      </section>
    </div>
  );
}
