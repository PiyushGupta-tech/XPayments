import Link from "next/link";

const advantageCards = [
  {
    title: "Improve your Average Ticket Size",
    desc: "Grow your sales with tailor-made offers that boost conversion.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Acquire new customers and retain existing ones",
    desc: "With exclusive & loyalty based offers.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Simplify reconciliation, analytics, and manage offers",
    desc: "Across all PAs at one place.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const offerTypes = [
  { title: "Club multiple offers", desc: "Customers can club multiple offers together during checkout." },
  { title: "Auto Apply Offers", desc: "Best offer is auto applied basis the Payment method." },
  { title: "Coupon Offers", desc: "Create Coupon offers basis time, product, customers, and more fields." },
];

const featureCards = [
  { title: "Complete control", desc: "of what offers to apply and how", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" },
  { title: "Scalable", desc: "to handle high traffic", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
  { title: "Real Time Analytics", desc: "to drive business decisions", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { title: "Easy User Interface", desc: "to create and update offers", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
];

const offerConfigFeatures = [
  "Coupons & auto-apply offers",
  "Cashback-type offers",
  "Bin-fencing via offers",
  "Payment Locking",
];

const discountOffers = [
  { text: "Get ₹500 discount on your rent payment.", color: "bg-sky-100 text-sky-600" },
  { text: "Assured cashback up to ₹400 on paying via UPI", color: "bg-purple-100 text-purple-600" },
  { text: "Get ₹180 discount on your electricity bill.", color: "bg-amber-100 text-amber-600" },
];

const paymentMethods = ["Google Pay UPI", "Credit / Debit Cards", "Amazon wallet", "Buy now, pay later"];

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Catalyse Conversions */}
      <section className="relative overflow-hidden bg-sky-50 px-6 py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#003087 1px, transparent 1px), linear-gradient(90deg, #003087 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Link href="/products/payments" className="text-sm font-medium text-primary hover:underline">
              ← Payments
            </Link>
            <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Catalyse Conversions with <span className="text-primary">Offers</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              PA agnostic offers engine to create and manage customer offers.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-lg bg-primary px-8 py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Contact us
            </Link>
          </div>
          {/* Offer cards mockup */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="font-semibold text-gray-900">Upto ₹200 off on RuPay Cards</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-primary">30% OFF</p>
              <p className="text-sm text-gray-600">On your first order only</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="font-semibold text-gray-900">Any Burger at just: ₹99 Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* XPayments Advantage */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          The XPayments Advantage
        </h2>
        <p className="mt-2 text-center text-gray-500">OFFER BENEFITS</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {advantageCards.map((c, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} /></svg>
              </div>
              <h3 className="font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personalised Coupons & Targeted Offers */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Personalised Coupons</h2>
            <p className="mt-2 text-gray-600">Delight and retain customers with personalised offers.</p>
            <input type="search" placeholder="Search coupons" className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400" readOnly />
            <Link href="/contact" className="mt-4 inline-flex text-primary hover:underline">Contact us →</Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Targeted Offers</h2>
            <p className="mt-2 text-gray-600">Create offers targeted to a product, cohort, or user.</p>
            <Link href="/contact" className="mt-4 inline-flex text-primary hover:underline">Contact us →</Link>
          </div>
        </div>
      </section>

      {/* Club multiple / Auto Apply / Coupon Offers */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <h2 className="text-center text-2xl font-bold text-gray-900">Customer Offers</h2>
        <p className="mt-2 text-center text-gray-600">Offers experience that your customers will love</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {offerTypes.map((o, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">{o.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Create Offers - dark section */}
      <section className="relative overflow-hidden mx-4 md:mx-6 mt-8 rounded-2xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-lg border border-primary-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light">
              Supportable
            </span>
            <h2 className="mt-8 text-3xl font-bold text-white md:text-4xl">
              Create <span className="text-primary-light">Offers</span> across all Payment Methods
            </h2>
            <p className="mt-6 text-gray-400">
              Build offers on all Payment methods - Cards, UPI, wallets, and more.
            </p>
            <Link href="/contact" className="mt-6 inline-flex text-primary-light hover:underline">
              Contact us →
            </Link>
          </div>
          <div className="space-y-3">
            {paymentMethods.map((pm, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary-light">•</span>
                {pm}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Engine - Maximum Flexibility */}
      <section className="relative overflow-hidden mx-4 md:mx-6 mt-8 rounded-2xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Offers Engine for Maximum Flexibility & Minimal Operations.
            </h2>
            <p className="mt-6 text-gray-400">
              Create, Run, and Manage Offers without extensive manual operations.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map((f, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary-light">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} /></svg>
                </div>
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Offers & Validity Checks */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Discount Offers</h2>
            <p className="mt-2 text-gray-600">Create Discount offers for better customer conversions.</p>
            <Link href="/contact" className="mt-4 inline-flex text-primary hover:underline">
              Contact us →
            </Link>
            <div className="mt-6 space-y-4">
              {discountOffers.map((o, i) => (
                <div key={i} className={`flex items-center gap-3 rounded-xl px-4 py-3 ${o.color}`}>
                  <span className="text-lg font-bold">%</span>
                  <p className="font-medium">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Validity Checks</h2>
            <p className="mt-2 text-gray-600">
              Implement velocity checks basis Payment methods, Customers, time, platform, custom fields, and more.
            </p>
            <Link href="/contact" className="mt-4 inline-flex text-primary hover:underline">
              Contact us →
            </Link>
            <div className="mt-6 rounded-xl border border-gray-200 p-4">
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 1234 5678"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400"
                readOnly
              />
              <p className="mt-2 text-sm text-red-600">Already exhausted offer for this card!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans - Offer Configurations */}
      <section className="mx-4 md:mx-6 mt-8 mb-12 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Plans built for your <span className="text-primary">Business & Scale</span>
        </h2>
        <div className="mt-12 overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 font-semibold text-gray-900">Product Features</th>
                <th className="border-l border-gray-200 px-6 py-4 text-center font-semibold text-gray-900">Basic</th>
                <th className="border-l border-gray-200 px-6 py-4 text-center font-semibold text-gray-900">Standard</th>
                <th className="border-l border-gray-200 px-6 py-4 text-center font-semibold text-gray-900">Advanced</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td colSpan={4} className="bg-primary/5 px-6 py-3 font-semibold text-primary">
                  Offer Configurations
                </td>
              </tr>
              {offerConfigFeatures.map((f, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-700">{f}</td>
                  <td className="border-l border-gray-200 px-6 py-4 text-center text-emerald-600">✓</td>
                  <td className="border-l border-gray-200 px-6 py-4 text-center text-emerald-600">✓</td>
                  <td className="border-l border-gray-200 px-6 py-4 text-center text-emerald-600">✓</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
