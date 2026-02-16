"use client";

import Link from "next/link";

const products = [
  {
    title: "HyperCheckout",
    description:
      "Effortlessly Collect Payments on your App or Website with our Pre-Built, Customizable Payment Page UI",
    href: "/products/payments/hypercheckout",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Express Checkout SDK",
    description:
      "Collect Payments on your App with our robust SDK. Ideal if you want to build your own custom UI",
    href: "/products/payments/express-checkout",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z",
  },
  {
    title: "Express Checkout API",
    description: "Collect Payments on your App & Website using our REST APIs",
    href: "/products/payments/express-checkout",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0v-1a2.5 2.5 0 00-2.5-2.5H16M12 12a2 2 0 104 0 2 2 0 00-4 0",
  },
  {
    title: "HyperCredit",
    description:
      "Lender orchestration system to finance your customer's purchase, tailored to simplify end to end loan operations",
    href: "/products/affordability",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Payment Forms",
    description:
      "Promote your product/service/event even without a website & collect payments without any integration",
    href: "/products/payments/payment-links",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "NACH Mandates (LotusPay)",
    description: "Collect recurring payments with 99% success using our REST APIs or Dashboard",
    href: "/products/payments/nach",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

const moreResources = {
  payments: [
    {
      title: "Payment Method Integrations",
      desc: "Widen your payment selections for added customer flexibility. Explore New Payment Method Integrations",
      href: "/docs",
    },
    {
      title: "Payment Forms",
      desc: "Streamline your payment process, enhance the customer experience, and boost your business's success.",
      href: "/products/payments/payment-links",
    },
    {
      title: "Card Network Tokenization",
      desc: "Tokenization shields your card details with tokens, ensuring secure and worry-free digital payments.",
      href: "/docs",
    },
    {
      title: "3DS 2.0 Protocol for Card Payments",
      desc: "Overview of 3DS 2.0 Protocol Readiness for card transactions across XPayments' Partner Ecosystem.",
      href: "/docs",
    },
    {
      title: "Pay-V3",
      desc: "Power your card checkout experience with Pay-V3, a secure and customizable JavaScript integration designed for non-PCI DSS compliant merchants.",
      href: "/docs",
    },
    {
      title: "Refunds",
      desc: "A comprehensive guide on processing refunds across payment methods and gateways.",
      href: "/docs",
    },
  ],
  dashboard: [
    {
      title: "Error Codes",
      desc: "Gain insights into the error codes associated with our SDK, empowering you to troubleshoot and resolve issues effectively.",
      href: "/docs",
    },
    {
      title: "Dashboard",
      desc: "Simplify payment ops with our intuitive dashboard. Manage transactions, access analytics, and optimize your checkout process with ease.",
      href: "/resources/dashboard",
    },
    {
      title: "Gateways & Aggregators",
      desc: "Explore our supported gateways and aggregators, enabling you to choose the right partners for your payment processing needs.",
      href: "/docs",
    },
    {
      title: "Gateway Onboarding Guide",
      desc: "Launch new gateways and aggregators with easy step-by-step guides for setup, testing, and go-live.",
      href: "/docs",
    },
    {
      title: "Dynamic Routing",
      desc: "Optimize gateway selection with XPayments' dynamic routing. Boost success rates and conversions by considering gateway performance, health and costs.",
      href: "/docs",
    },
  ],
  miscellaneous: [
    {
      title: "Release Notes",
      desc: "Stay up to date with our product enhancements, new features, bug fixes, and improvements through our comprehensive release notes.",
      href: "/docs",
    },
    {
      title: "Test Resources",
      desc: "Access a range of resources and tools specifically designed for testing and validating your integrations, ensuring a robust and reliable system.",
      href: "/docs",
    },
  ],
};

const paymentSuiteV2 = [
  { title: "Product Summary", desc: "Concise & informative overview of the order during payments", icon: "document" },
  { title: "Payment Locking", desc: "Block or allow certain methods based on custom conditions", icon: "lock" },
  { title: "Quick Pay", desc: "3X faster checkout: Now collect payments from Cart Page!", icon: "bolt" },
  { title: "Outages", desc: "Uninterrupted payments with real-time system health updates", icon: "alert" },
  { title: "CRED Pay", desc: "Payment experience, cashback & offers- powered by CRED!", icon: "shield" },
  { title: "Card Mandates", desc: "Recurring payments with standing instruction on cards", icon: "card" },
  { title: "Surcharge", desc: "Manage collection of additional fee effortlessly!", icon: "gear" },
  { title: "Retry", desc: "Fight churn—retain enthusiastic customers with high purchase intent!", icon: "refresh" },
  { title: "UPI Intent on mWeb", desc: "UPI payment using apps, now available on mobile web!", icon: "phone" },
  { title: "TPV", desc: "Validate the payment from the authorized user effortlessly!", icon: "check" },
  { title: "Scan & Pay", desc: "Simplified payments with UPI QR Code for easy and fast transactions", icon: "qr" },
  { title: "eNACH", desc: "The smarter way to manage high ticket recurring payments at scale!", icon: "enach" },
  { title: "UPI Autopay", desc: "Most convenient option for your customers' repeat payments", icon: "recurring" },
  { title: "Amazon Pay Balance", desc: "Boost your sales with Amazon Pay's smooth checkout experience!", icon: "cart" },
  { title: "Smart Convert", desc: "Intelligently retarget failed transactions to unlock higher conversions!", icon: "chart" },
  { title: "One Time Mandate", desc: "Simplify Payments with Smart Fund Holding block, relax, debit!", icon: "document" },
];

const nextGenCards = [
  { title: "XPayments Native OTP", desc: "Frictionless OTP flow, powered natively by XPayments", href: "/products/customer-experience/native-otp" },
  { title: "CVV Less Payments", desc: "Enable safe, secure 1-click payments for your customers", href: "/products/customer-experience/quickpay" },
  { title: "Tap & Pay", desc: "Contactless card payments using NFC, offering fast and secure transactions", href: "/docs" },
  { title: "C2P with Passkeys", desc: "A passkey secured card authentication payment solution for online checkout experience", href: "/docs" },
];

const affordability = [
  { title: "Offers Engine", desc: "Create tailored campaigns, track performance & enhanced payments", href: "/products/payments/offers" },
  { title: "Standard EMI Suite", desc: "Let your users pay later with easy monthly instalments!", href: "/products/affordability" },
  { title: "Advance EMI Suite", desc: "Let your users explore offers & discounts available on EMI options!", href: "/products/affordability" },
];

const expandLandscape = [
  { title: "Payment Links", desc: "Align payment process with your brand & share links without code", href: "/products/payments/payment-links" },
  { title: "Split Settlements", desc: "Split amounts into multiple accounts in real-time", href: "/docs" },
  { title: "Merchant's in-house Wallet", desc: "Seamlessly integrate in-house wallet with your checkout", href: "/docs" },
  { title: "Part Payment", desc: "Break your orders into multiple parts as per your business needs", href: "/docs" },
];

const posts = [
  { title: "Building 1-click UPI checkout at scale", excerpt: "How we achieved 90%+ success rates with HyperUPI.", date: "Feb 2025", category: "Engineering" },
  { title: "Payment orchestration: Why it matters", excerpt: "Route payments to the best performing gateway for higher conversions.", date: "Jan 2025", category: "Product" },
  { title: "The future of checkout experiences", excerpt: "Native checkout vs redirect—what works for your business.", date: "Dec 2024", category: "Product" },
  { title: "NACH eMandates: Simplified recurring payments", excerpt: "Enable subscriptions and EMI with bank-backed mandates.", date: "Nov 2024", category: "Payments" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Build Fast & Secure Payments */}
      <section className="relative overflow-hidden bg-sky-50 px-6 py-16 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#003087 1px, transparent 1px), linear-gradient(90deg, #003087 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                Build Fast & Secure Payments
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                All the guides & references you&apos;ll need to integrate and build with XPayments
              </p>
              <Link
                href="/docs"
                className="mt-8 inline-flex rounded-lg bg-primary px-8 py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Integrate XPayments Checkout
              </Link>
            </div>
            <div className="flex h-48 w-64 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-2 text-primary/60">
                <div className="rounded bg-primary/10 p-2">📁</div>
                <div className="rounded bg-primary/10 p-2">⚙</div>
                <div className="rounded bg-primary/10 p-2">{`</>`}</div>
                <div className="rounded bg-primary/10 p-2">☁</div>
                <div className="rounded bg-primary/10 p-2">📄</div>
                <div className="rounded bg-primary/10 p-2">◆</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-primary">Products</h2>
        <p className="mt-2 text-gray-600">Explore our suite of payment products & integrations</p>
        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-gray-400">Checkout</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Link
              key={i}
              href={product.href}
              className="group rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.icon} />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{product.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* More Resources */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900">More Resources</h2>
          <p className="mt-2 text-gray-600">Get reading on here</p>
          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Payments</h3>
              <ul className="mt-4 space-y-4">
                {moreResources.payments.map((r, i) => (
                  <li key={i}>
                    <Link href={r.href} className="group flex items-start gap-2 text-primary hover:underline">
                      <span className="font-medium text-gray-900 group-hover:text-primary">{r.title}</span>
                      <span className="text-gray-400">→</span>
                    </Link>
                    <p className="mt-0.5 text-sm text-gray-600">{r.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Dashboard</h3>
              <ul className="mt-4 space-y-4">
                {moreResources.dashboard.map((r, i) => (
                  <li key={i}>
                    <Link href={r.href} className="group flex items-start gap-2 text-primary hover:underline">
                      <span className="font-medium text-gray-900 group-hover:text-primary">{r.title}</span>
                      <span className="text-gray-400">→</span>
                    </Link>
                    <p className="mt-0.5 text-sm text-gray-600">{r.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Miscellaneous</h3>
              <ul className="mt-4 space-y-4">
                {moreResources.miscellaneous.map((r, i) => (
                  <li key={i}>
                    <Link href={r.href} className="group flex items-start gap-2 text-primary hover:underline">
                      <span className="font-medium text-gray-900 group-hover:text-primary">{r.title}</span>
                      <span className="text-gray-400">→</span>
                    </Link>
                    <p className="mt-0.5 text-sm text-gray-600">{r.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Suite V2 */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">Payment Suite V2</h2>
        <p className="mt-2 text-gray-600">Complete payment capabilities at your fingertips</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {paymentSuiteV2.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-primary/50 hover:shadow-sm transition-all"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Amazon Pay Later - standalone */}
      <section className="bg-gray-50 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Amazon Pay Later</h3>
                <p className="mt-2 text-gray-600">
                  Empower your customers to pay later with seamless credit by Amazon Pay!
                </p>
              </div>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Gen Cards Experience */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Next Gen Cards Experience</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {nextGenCards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              className="rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Improve Affordability */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Improve Affordability</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {affordability.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Expand Your Payment Landscape */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Expand Your Payment Landscape</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expandLandscape.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles / Blog Posts */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          <p className="mt-2 text-gray-600">
            Insights on payments, fintech, and building better checkout experiences.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map((post, i) => (
              <article
                key={i}
                className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                <p className="mt-4 text-xs text-gray-500">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
