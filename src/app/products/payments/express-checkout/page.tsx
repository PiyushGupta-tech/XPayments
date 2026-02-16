import Link from "next/link";
import Image from "next/image";

const expressFeatures = [
  {
    title: "Managing Multiple Integrations",
    desc: "Add & Manage multiple PAs with a few clicks, not code",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Advanced Checkouts",
    desc: "Checkout experiences that delight users and maximise conversions",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Reduce Operations Burden by 80%",
    desc: "Centralise your Payments stack and streamline Payment operations",
    icon: "M19 14l-7 7m0 0l-7-7m7 7V3",
  },
  {
    title: "Quick TATs for new Integrations",
    desc: "Integrate a new PA/PG or payment method in a few minutes, not days",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const orchestrationItems = [
  "PAYMENT GATEWAY CONFIGURATION",
  "OWN FRONTEND UI",
  "PAYMENT EXPERIENCE",
  "OUTAGES",
];

const paymentGateways = ["Stripe", "PayPal", "FSS", "Cybersource", "PhonePe", "PayU"];
const trustedBy = ["Amazon", "Swiggy", "IndiGo", "BookMyShow", "Urban Company"];

export default function ExpressCheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Unified Payment APIs */}
      <section className="relative overflow-hidden bg-sky-50 px-6 py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#003087 1px, transparent 1px), linear-gradient(90deg, #003087 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <Link href="/products/payments" className="text-sm font-medium text-primary hover:underline">
            ← Payments
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Unified Payment APIs for Enterprises
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Easily add and manage payment gateways. Utilize intelligent routing and custom rules for frictionless transactions.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-lg bg-primary px-8 py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* Four feature cards - dark section with central logo */}
      <section className="relative overflow-hidden mx-4 md:mx-6 mt-8 rounded-2xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {expressFeatures.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} /></svg>
              </div>
              <h3 className="font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
        {/* Central XPayments logo */}
        <div className="relative mt-12 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-primary">
            <Image src="/logo.png" alt="XPayments" width={56} height={56} className="object-contain" />
          </div>
        </div>
      </section>

      {/* Payment Orchestration - dark section */}
      <section className="relative overflow-hidden mx-4 md:mx-6 mt-8 rounded-2xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-lg border border-primary-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light">
              Payment Orchestration
            </span>
            <h2 className="mt-8 text-3xl font-bold text-white md:text-4xl">
              Never miss a transaction with <span className="text-primary-light">Payment Routing</span>
            </h2>
            <p className="mt-6 text-gray-400">
              XPayments merchant partners add significant revenue to their top line. Built on 2 years of fintech expertise, XPayments&apos; intelligent orchestration engine always finds a way for your Payments.
            </p>
            <div className="mt-8 space-y-4">
              {orchestrationItems.map((item, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Rule-based UI mockup */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-4 font-semibold text-white">Payment Solutions built for your Business Model</h4>
            <div className="space-y-4">
              <div className="rounded-lg border border-white/10 bg-gray-800/50 p-4">
                <p className="text-xs font-semibold uppercase text-gray-400">Rule 1</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded bg-primary/20 px-3 py-1.5 text-sm text-primary-light">if</span>
                  <select className="rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-sm text-white">
                    <option>Select Field</option>
                  </select>
                  <select className="rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-sm text-white">
                    <option>=</option>
                  </select>
                  <select className="rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-sm text-white">
                    <option>Select Value</option>
                  </select>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-sm text-gray-400">then</span>
                  <select className="rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-sm text-white">
                    <option>Add Gateways</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment ecosystem diagram - gateways connected to central hub */}
      <section className="relative mx-4 md:mx-6 mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-sky-50/50 px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#003087 1px, transparent 1px), linear-gradient(90deg, #003087 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative flex flex-col items-center">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-600">
            Integrated Payment Ecosystem
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {paymentGateways.map((gw, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white px-6 py-4 text-center shadow-sm"
              >
                <p className="font-semibold text-gray-900">{gw}</p>
              </div>
            ))}
          </div>
          {/* Central XPayments logo */}
          <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-primary">
            <Image src="/logo.png" alt="XPayments" width={56} height={56} className="object-contain" />
          </div>
        </div>
      </section>

      {/* We partner with the best */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          We partner with the best
        </p>
        <h2 className="mt-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          You&apos;re in good company
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {trustedBy.map((name, i) => (
            <span key={i} className="text-lg font-bold text-gray-700">
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Trusted by the giants */}
      <section className="mx-4 md:mx-6 mt-8 mb-12 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-12">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          Trusted by the giants
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
          {trustedBy.map((name, i) => (
            <span key={i} className="text-lg font-bold text-gray-700">
              {name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
