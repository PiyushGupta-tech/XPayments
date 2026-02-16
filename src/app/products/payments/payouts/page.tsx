import Link from "next/link";
import Image from "next/image";
import DarkSolutionsSection from "@/components/sections/DarkSolutionsSection";
import {
  RefundIcon,
  CreditCardIcon,
  RewardIcon,
  VendorIcon,
  SalaryIcon,
} from "@/components/sections/payout-icons";

const payoutCards = [
  { title: "Instant Refund", icon: <RefundIcon className="h-8 w-8" /> },
  { title: "Credit Card Bill Repayment", icon: <CreditCardIcon className="h-8 w-8" /> },
  { title: "Reward Disbursement", icon: <RewardIcon className="h-8 w-8" /> },
  { title: "Vendor Payment", icon: <VendorIcon className="h-8 w-8" /> },
  { title: "Salary Disbursement", icon: <SalaryIcon className="h-8 w-8" /> },
];

const advantageItems = [
  {
    title: "Connect your own banking setup",
    desc: "Seamlessly connect your existing banking setup to manage payouts via XPayments.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Diversify your Payout stack",
    desc: "Mitigate gateway & beneficiary bank downtimes for seamless payouts.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    title: "80% reduction in Pending Orders",
    desc: "Reduce pending orders due to beneficiary bank issues with intelligent scheduling.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
];

const validationMethods = [
  { title: "Penny drop", desc: "Traditional validation of users bank account via a penny payout", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { title: "Penniless", desc: "Validate without actual penny transfer", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { title: "Reverse Penny drop", desc: "Alternate validation flow for bank accounts", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
];

const trustedBy = ["Swiggy", "Amazon", "Postpe", "Flipkart", "Meesho"];

export default function PayoutsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <Link href="/products/payments" className="text-sm font-medium text-primary hover:underline">
            ← Payments
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            <span className="text-primary">Instant and Seamless</span>
            <br />
            payouts for your Business
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            From refunds, vendor payments, loans to salary payments, XPayments&apos; direct integrations with Networks, banks and PGs make your payouts frictionless.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-lg bg-primary px-8 py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* Payout system diagram - Central XPayments logo */}
      <section className="relative mx-4 md:mx-6 mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-sky-50/50 px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#003087 1px, transparent 1px), linear-gradient(90deg, #003087 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative flex flex-col items-center">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900">Beneficiary Bank Health</h3>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900">Gateway Health</h3>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900">Success Rate Optimisation</h3>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900">Custom Business Routes</h3>
            </div>
          </div>
          {/* Central XPayments logo */}
          <div className="relative mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-primary">
            <Image src="/logo.png?v=3" alt="XPayments" width={64} height={64} className="object-contain" />
          </div>
        </div>
      </section>

      {/* XPayments Advantage */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          XPayments Advantage
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {advantageItems.map((item, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payout Modes - Bank Account & UPI with central logo */}
      <section className="relative overflow-hidden mx-4 md:mx-6 mt-8 rounded-2xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <span className="relative inline-block rounded-lg border border-primary-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light">
          Payout Modes
        </span>
        <div className="relative mt-8 grid gap-12 lg:grid-cols-3 lg:items-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-primary-light">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white">Bank Account</h3>
            <p className="mt-3 text-gray-400">Payout to users bank accounts via IMPS, NEFT, RTGS instantly#, 24*7</p>
          </div>
          {/* Central XPayments logo */}
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-primary">
              <Image src="/logo.png?v=3" alt="XPayments" width={56} height={56} className="object-contain" />
            </div>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-primary-light">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white">UPI</h3>
            <p className="mt-3 text-gray-400">Enable lightning-fast payments directly to users&apos; UPI IDs with our efficient payouts</p>
          </div>
        </div>
      </section>

      {/* Cards & Payout Links - dark section */}
      <section className="relative overflow-hidden mx-4 md:mx-6 mt-8 rounded-2xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative grid gap-12 md:grid-cols-2">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white">Cards</h3>
            <p className="mt-3 text-gray-400">24/7 disbursals to debit / credit cards via IMPS, UPI, Visa Direct & Mastercard Send</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white">Payout Links</h3>
            <p className="mt-3 text-gray-400">Collect user details and process payouts instantly</p>
          </div>
        </div>
      </section>

      {/* Instant Refunds & Payouts Links */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-xl font-bold text-gray-900">Instant Refunds</h3>
              <p className="mt-3 text-gray-600">Process COD refunds instantly via UPI ID or user bank account.</p>
            </div>
          </div>
          <div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-xl font-bold text-gray-900">Payouts Links</h3>
              <p className="mt-3 text-gray-600">Capture, validate, and complete the payout in a single flow using XPayments&apos; Payout Links.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Validation suite */}
      <section className="relative overflow-hidden mx-4 md:mx-6 mt-8 rounded-2xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Validation suite</h2>
            <p className="mt-4 text-gray-400">XPayments stack powers you to accept credit card bill payments, end to end, with one of the highest card coverage rates.</p>
            <div className="mt-8 space-y-6">
              {validationMethods.map((v, i) => (
                <div key={i} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary-light">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={v.icon} /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{v.title}</h4>
                    <p className="mt-1 text-sm text-gray-400">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-semibold text-white">Bank Account Verification</h4>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-400">Bank account number</label>
                <input type="text" placeholder="Enter account number" className="mt-2 w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-500" readOnly />
              </div>
              <div>
                <label className="block text-sm text-gray-400">IFSC code of the bank branch</label>
                <input type="text" placeholder="Enter IFSC" className="mt-2 w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-500" readOnly />
              </div>
              <button className="w-full rounded-lg bg-primary py-3 font-medium text-white hover:bg-primary-dark transition-colors">
                Verify
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Card Bill Payments */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Credit Card Bill Payments</h2>
            <p className="mt-4 text-gray-600">XPayments stack powers you to accept credit card bill payments, end to end, with one of the highest card coverage rates.</p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-2">• Accept credit card payments</li>
              <li className="flex items-center gap-2">• Tokenize user&apos;s card to provide repeat bill payment</li>
              <li className="flex items-center gap-2">• Complete payout to users card</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-[260px] rounded-2xl border-4 border-gray-700 bg-white p-4 shadow-xl">
              <p className="text-sm font-medium text-gray-700">Payment methods</p>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p>UPI Apps</p>
                <p>Net banking</p>
                <p>Wallets</p>
              </div>
              <p className="mt-6 text-center text-xs text-gray-500">powered by XPayments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk payouts */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <h2 className="text-2xl font-bold text-gray-900">Bulk payouts</h2>
        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">Name</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Account Number</th>
                <th className="px-4 py-3 font-semibold text-gray-900">IFSC Number</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="px-4 py-3 text-gray-600">—</td>
                  <td className="px-4 py-3 text-gray-600">—</td>
                  <td className="px-4 py-3 text-gray-600">—</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end border-t border-gray-200 bg-gray-50 p-4">
            <button className="rounded-lg bg-primary px-6 py-2 font-medium text-white hover:bg-primary-dark transition-colors">
              Pay All
            </button>
          </div>
        </div>
      </section>

      {/* Analyse payouts - KPIs */}
      <section className="mx-4 md:mx-6 mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
        <h2 className="text-2xl font-bold text-gray-900">Analyse payouts</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Success Rate", value: "74.4%", change: "+3%" },
            { label: "Success Orders", value: "20.82L", change: "+11.89%" },
            { label: "Average Ticket Size", value: "₹1.65K", change: null },
            { label: "Order with Transaction(s)", value: "23.96L", change: "+8.94%" },
          ].map((kpi, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-6">
              <p className="text-sm text-gray-600">{kpi.label}</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">{kpi.value}</p>
              {kpi.change && <p className="mt-1 text-sm text-emerald-600">↑ {kpi.change}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Dark solutions - existing */}
      <div className="mx-4 md:mx-6 mt-8 mb-12">
        <DarkSolutionsSection
          headline="Payouts solutions for every use case"
          description="Make Instant Refunds, Credit Card Repayments, Reward and Salary disbursement & vendor payments with an industry-best success rate of 99.99%."
          cards={payoutCards}
          ctaText="Get Started"
          ctaHref="/contact"
        />
      </div>

      {/* Trusted by */}
      <section className="mx-4 md:mx-6 mb-12 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-12">
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
