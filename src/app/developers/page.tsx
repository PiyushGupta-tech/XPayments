import Link from "next/link";

const resources = [
  {
    title: "API Reference",
    description: "REST APIs for payments, UPI, and orchestration",
    href: "/docs",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "SDKs & Libraries",
    description: "JavaScript, Android, iOS, and server SDKs",
    href: "/docs",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
      </svg>
    ),
  },
  {
    title: "Quick Start",
    description: "Get live in minutes with step-by-step guides",
    href: "/docs",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Webhooks",
    description: "Real-time payment events and retries",
    href: "/docs",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

const sdks = [
  "JavaScript", "Android", "iOS", "Node.js", "React", "Python", "PHP", "Go",
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
            Developer Portal
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Build with{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              XPayments
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
            Integrate XPayments into your application. Find API documentation, SDKs, and everything you need to ship payments at scale.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-primary/30 hover:scale-[1.02]"
            >
              View API Docs
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-primary/50"
            >
              Get API Keys
            </Link>
          </div>
          {/* SDK pills */}
          <div className="mt-12 flex flex-wrap gap-2">
            {sdks.map((sdk) => (
              <span
                key={sdk}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm"
              >
                {sdk}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Developer resources</h2>
        <p className="mt-2 text-gray-400">
          Everything you need to integrate and go live.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => (
            <Link
              key={i}
              href={r.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary-light transition-colors group-hover:bg-primary/30">
                {r.icon}
              </span>
              <h3 className="mt-4 font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {r.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-light group-hover:gap-2 transition-all">
                Learn more
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Code teaser */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-6 font-mono text-sm backdrop-blur-sm md:p-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
          </div>
          <pre className="overflow-x-auto text-gray-300">
            <code>{`// Initialize XPayments SDK
const xpayments = await XPayments.init({ apiKey: 'pk_live_xxx' });

// Create a payment session
const session = await xpayments.payments.create({
  amount: 50000,  // ₹500.00 (in paise)
  currency: 'INR',
  customerId: 'cust_123',
});

// Redirect to checkout or embed HyperCheckout
window.location.href = session.checkoutUrl;`}</code>
          </pre>
          <Link
            href="/docs"
            className="mt-6 inline-flex items-center gap-2 text-primary-light hover:underline"
          >
            Full API reference
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
