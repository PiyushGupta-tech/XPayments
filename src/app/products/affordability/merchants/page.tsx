import Link from "next/link";

const businessLoanCards = [
  {
    title: "Finance High-Value Transactions",
    desc: "Offer credit for large-ticket, recurring purchases like inventory, equipment, and working capital with strong utilization potential.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Expand Customer & Partner Base",
    desc: "Onboard SMEs and channel partners who struggle with large upfront payments, and improve customer & partner loyalty.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Enable Recurring Sales",
    desc: "Extend term loans to commercial buyers with dynamic repayment options.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Integrated into Workflows",
    desc: "Integrate within CRM, invoicing, or B2B checkout for higher engagement and pull-through.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
];

const personalLoanCards = [
  {
    title: "Maximize Conversions",
    desc: "Offer your customers a completely digital, seamless loan journey from discovery to disbursal with intelligent routing based on eligibility, success rate, TAT, or your own preferences.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Integrate Once, Increase Earnings",
    desc: "Plug into a wide lender network with no-code integration to boost earnings and cut overhead.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Boost Customer Engagement",
    desc: "Utilize eligibility checks across all lenders and effectively retarget customers via WhatsApp, SMS or email.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Empower Sales Teams",
    desc: "Guide customers through fast-track loan journeys and increase high-value conversions by up to 35% with SmartConvert Dashboard.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const hyperCreditQRCards = [
  { title: "Omnichannel Payment Experience", desc: "Standardize EMI offerings across all sales channels.", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" },
  { title: "Dynamic SKU based QRs", desc: "Enable product specific offers, EMIs and promotions.", icon: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" },
  { title: "Self Eligibility Check", desc: "Let customers Scan and Discover their perfect EMI fit.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const smartConvertFeatures = [
  { title: "Credit Console for Assisted Sales", desc: "Check eligibility across all lenders for your customers", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { title: "Collect Payment without Restrictions", desc: "Enable every option - one-shot, split/partial payments, subscriptions, EMIs, and loans", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { title: "Zero Time to Market", desc: "Roll out HyperCredit to sales units across geographies instantly", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "360 Degree Control", desc: "Full visibility and control over credit operations", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
];

const dashboardMetrics = [
  { label: "Orders Created", value: "6.12L", change: "+188.83%" },
  { label: "Successful Orders", value: "4.25K", change: "-512.67%" },
  { label: "Settled Orders", value: "2.39K", change: "-1584.33%" },
  { label: "Total Number Of Refunds", value: "875", change: "+27736%" },
  { label: "Qualification Rate", value: "83.72%", change: "+4.91%" },
  { label: "Lender Approval Rate", value: "54.91%", change: "+5.27%" },
];

export default function AffordabilityMerchantsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - India's biggest businesses */}
      <section className="relative overflow-hidden bg-sky-50 px-6 py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "linear-gradient(#003087 1px, transparent 1px), linear-gradient(90deg, #003087 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="/products/affordability" className="text-sm font-medium text-primary hover:underline">
              ← Affordability
            </Link>
            <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              India&apos;s biggest businesses streamline{" "}
              <span className="text-primary">Credit Operations</span> with{" "}
              <span className="text-primary">HyperCredit.</span>
            </h1>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-8 py-3.5 font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Contact us
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
          {/* Pixelated India map placeholder - grid pattern */}
          <div className="relative h-64 w-full max-w-md rounded-2xl bg-sky-100 lg:h-80">
            <div
              className="absolute inset-0 opacity-30"
              style={{ backgroundImage: "linear-gradient(#003087 2px, transparent 2px), linear-gradient(90deg, #003087 2px, transparent 2px)", backgroundSize: "16px 16px" }}
            />
          </div>
        </div>
      </section>

      {/* Data-driven Business Loans */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Data-driven <span className="text-primary">Business Loans</span>
            </h2>
            <p className="mt-6 text-gray-600">
              Expand into high-value SME lending with contextual, data-driven business loans embedded directly into merchant workflows.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {businessLoanCards.map((c, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} /></svg>
                </div>
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual Personal Loans */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Contextual <span className="text-primary">Personal Loans</span>
            </h2>
            <p className="mt-6 text-gray-600">
              Drive customer conversion, affordability, and higher ticket purchases by delivering real-time, personalized loans across high-intent touch points.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {personalLoanCards.map((c, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} /></svg>
                </div>
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HyperCredit on QR */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            HyperCredit <span className="text-primary">on QR</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Bolster your in-store sales through HyperCredit on QR.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {hyperCreditQRCards.map((c, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} /></svg>
              </div>
              <h3 className="font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Smart Convert */}
      <section className="relative overflow-hidden mx-4 md:mx-6 mt-8 rounded-2xl bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Smart Convert</h2>
            <p className="mt-4 text-gray-300">
              Empower your sales heroes to drive revenue through assisted financing.
            </p>
            <div className="mt-8 space-y-6">
              {smartConvertFeatures.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{f.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dashboard metrics card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm text-gray-400">Sep 22, 2025 00:00 - Sep 22, 2025 23:59</span>
              <div className="flex gap-2">
                <button className="rounded-lg border border-white/20 px-3 py-1.5 text-xs text-white">Compare with</button>
                <button className="rounded-lg border border-white/20 px-3 py-1.5 text-xs text-white">Filters</button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {dashboardMetrics.map((m, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-gray-400">{m.label}</p>
                  <p className="mt-2 text-2xl font-bold text-white">{m.value}</p>
                  <p className={`mt-1 text-sm ${m.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{m.change}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-4 border-t border-white/10 pt-4">
              <span className="text-sm text-gray-400">Merchant id</span>
              <span className="text-sm text-gray-400">Industry</span>
              <span className="text-sm text-gray-400">Lender</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
