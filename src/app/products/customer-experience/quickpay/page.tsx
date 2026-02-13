"use client";

import Link from "next/link";

export default function QuickPayPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Build & Customise your Payment Stack */}
      <section className="relative overflow-hidden bg-sky-50 px-6 py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#003087 1px, transparent 1px), linear-gradient(90deg, #003087 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <Link
            href="/products/customer-experience"
            className="text-sm font-medium text-primary hover:underline"
          >
            ← Customer Experience
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            <span className="text-primary">Build & Customise</span>
            <br />
            your Payment Stack
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Features that boost your success rate, elevate your customer experience,
            and reduce payment operations.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-lg bg-primary px-8 py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </section>

      {/* One click checkouts - White card on light blue */}
      <section className="bg-sky-50 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10 lg:flex lg:items-center lg:gap-16">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                One click checkouts
              </h2>
              <p className="mt-4 text-gray-600">
                A frictionless 1-click checkout experience with CVV less card
                Payments and auto-otp read and submit. What&apos;s more? Quickpay for
                3 second payments!
              </p>
              <ul className="mt-6 space-y-3">
                {["Auto OTP Read and Submit", "CVV Less Card Payments", "Quickpay"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="h-1 w-1.5 rounded-full bg-primary" />
                      <span className="font-medium text-gray-900">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="relative mt-10 flex justify-center lg:mt-0 lg:w-[340px]">
              <div className="relative">
                <div className="absolute -top-4 right-8 h-8 w-8 text-gray-600 opacity-60">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 4.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                    <path d="M12 14.5c-3 0-5.5 1.5-7 4 1.5 2.5 4 4 7 4s5.5-1.5 7-4c-1.5-2.5-4-4-7-4Z" />
                  </svg>
                </div>
                <div className="relative h-[380px] w-[200px] rounded-[2rem] border-[8px] border-gray-800 bg-gray-900">
                  <div className="absolute left-2 right-2 top-3 rounded-lg bg-white/10 px-3 py-2 text-xs text-white">
                    <p className="text-gray-400">AD-HDFC-ZEPTO</p>
                    <p className="mt-1">
                      OTP for online purchase of Rs. 1000 at app through HDFC Bank
                      2810****9820 is <strong>998301</strong>. Do not share.
                    </p>
                    <div className="mt-2 flex gap-2 text-primary-light text-[10px]">
                      <span>Mark as read</span>
                      <span>Reply</span>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-4 right-4 rounded-xl bg-white p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Submitting OTP</span>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-primary" />
                    </div>
                    <p className="mt-2 text-2xl font-bold text-gray-900">998301</p>
                    <p className="text-xs text-gray-500">Stop auto-submit</p>
                    <p className="mt-3 text-xs text-gray-600">
                      Pay on the bank page
                      <span className="ml-1 font-semibold text-gray-900">HDFC BANK</span>
                    </p>
                  </div>
                </div>
                <div className="absolute -right-4 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-primary p-2 text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Better Success Rates */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10 lg:flex lg:items-center lg:gap-16">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Unlock Better Success Rates
              </h2>
              <p className="mt-4 text-gray-600">
                Native OTP flow for customers across all PA/PGs, VPA suggestions to
                minimise UPI failures, and Payment retries to improve SR.
              </p>
              <ul className="mt-6 space-y-3">
                {["SAFE 2.0", "VPA Suggestions", "Payment Retries"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-1 w-1.5 rounded-full bg-primary" />
                    <span className="font-medium text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-10 flex justify-center lg:mt-0 lg:w-[340px]">
              <div className="relative h-[320px] w-[200px] rounded-[2rem] border-[8px] border-gray-800 bg-gray-900">
                <div className="absolute left-2 right-2 top-3 rounded-lg bg-white/10 px-3 py-2 text-xs text-white">
                  <p className="text-gray-400">AD-HDFC-ZEPTO</p>
                  <p className="mt-1">
                    OTP for online purchase of Rs. 1000 at app through HDFC Bank
                    2810****9820 is <strong>998301</strong>.
                  </p>
                </div>
                <div className="absolute bottom-8 left-4 right-4 rounded-xl bg-white p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Submitting OTP</span>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-primary" />
                  </div>
                  <p className="mt-2 text-2xl font-bold text-gray-900">998301</p>
                  <p className="text-xs text-gray-500">Stop auto-submit</p>
                  <p className="mt-3 text-xs text-gray-600">
                    Pay on the bank page
                    <span className="ml-1 font-semibold text-gray-900">HDFC BANK</span>
                  </p>
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-primary p-2 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers + Simplify Subscriptions - Two columns */}
      <section className="bg-gray-50 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Offers */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold text-gray-900">Offers</h2>
              <p className="mt-4 text-gray-600">
                Drive higher conversions and ticket sizes with the only PA Agnostic
                Offers engine in the industry.
              </p>
              <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-gray-900">Offers & Coupons</h4>
                  <span className="text-sm font-medium text-gray-600">Cart Value ₹699</span>
                </div>
                <input
                  type="text"
                  placeholder="Apply discount coupon codes here"
                  className="mt-4 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                  readOnly
                />
                <button className="mt-2 rounded bg-primary px-4 py-2 text-sm font-medium text-white">
                  Apply
                </button>
                <div className="mt-4 flex gap-2 text-xs">
                  {["All", "Coupons", "Wallets", "Cards", "UPI"].map((tab) => (
                    <span
                      key={tab}
                      className="rounded border border-gray-200 px-2 py-1 text-gray-600"
                    >
                      {tab}
                    </span>
                  ))}
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-3">
                    <p className="text-sm font-medium">Up to ₹100 Paytm Cashb...</p>
                    <p className="text-xs text-gray-600">20% off upto ₹200 on transactions above ₹249</p>
                    <button className="mt-2 text-xs text-primary">Apply</button>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-3">
                    <p className="text-sm font-medium">Get Flat ₹120 off</p>
                    <p className="text-xs text-gray-600">ICICI Credit Card</p>
                    <button className="mt-2 text-xs text-primary">Apply</button>
                  </div>
                  <p className="text-sm text-green-600">You will get ₹25 off with this order.</p>
                </div>
              </div>
            </div>

            {/* Simplify Subscriptions */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold text-gray-900">Simplify Subscriptions</h2>
              <p className="mt-4 text-gray-600">
                Debit + Enach, Batch Mandates Execution, UPI Autopay, SI on cards, and
                intelligent retries to optimise subscriptions
              </p>
              <div className="mt-8 flex justify-center">
                <div className="relative rounded-2xl border border-gray-200 bg-sky-50 p-12">
                  <div className="rounded-xl border-2 border-green-500 bg-white px-8 py-6 text-center shadow-lg">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-900">AutoPay set Successfully</p>
                  </div>
                  <div className="absolute -left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-yellow-400" />
                  <div className="absolute -right-2 top-4 h-8 w-8 rounded-full bg-purple-400" />
                  <div className="absolute bottom-6 -left-2 h-8 w-8 rounded-full bg-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recover Lost Revenue + Payment Links */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Recover Lost Revenue */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold text-gray-900">Recover Lost Revenue</h2>
              <p className="mt-4 text-gray-600">
                Retry failed payments, retarget customers with SMS/Whatsapp, along with
                sales assisted conversions.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex-1 rounded-xl border border-gray-200 bg-white p-4">
                  <div className="flex gap-2 border-b border-gray-200">
                    <span className="border-b-2 border-primary px-3 pb-2 text-sm font-medium">
                      Whatsapp Template
                    </span>
                    <span className="px-3 pb-2 text-sm text-gray-500">SMS Template</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Template content..."
                      className="w-full rounded border border-gray-200 px-3 py-2 text-sm"
                      readOnly
                    />
                    <button className="rounded bg-primary px-4 py-2 text-sm font-medium text-white">
                      Save Template
                    </button>
                  </div>
                </div>
                <div className="h-[220px] w-[120px] flex-shrink-0 rounded-[1.5rem] border-4 border-gray-800 bg-gray-900">
                  <div className="p-2 text-[10px] text-white">
                    <p className="text-gray-400">Whatsapp - now</p>
                    <p className="mt-1">
                      Payment Failed! Your purchase has failed please try again.
                    </p>
                    <div className="mt-2 flex gap-1">
                      <span className="rounded bg-green-500 px-2 py-1">Pay now</span>
                      <span className="rounded border border-gray-600 px-2 py-1">close</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Links */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold text-gray-900">Payment Links</h2>
              <p className="mt-4 text-gray-600">
                Create a payment link in just a few clicks and share the link with your
                customers—no code required.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex-1 rounded-xl border border-gray-200 bg-white p-4">
                  <h4 className="font-semibold text-gray-900">UPI Payment Link</h4>
                  <p className="mt-1 text-sm text-gray-600">Ask your friend to pay</p>
                  <p className="text-xs text-gray-500">Don&apos;t have UPI apps? Ask a friend to pay</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Generate link & share with your friend/family</li>
                    <li>• Inform them to open link & approve payment</li>
                    <li>• Wait for confirmation</li>
                  </ul>
                  <button className="mt-4 rounded bg-primary px-4 py-2 text-sm font-medium text-white">
                    Generate Payment Link
                  </button>
                </div>
                <div className="h-[220px] w-[120px] flex-shrink-0 rounded-[1.5rem] border-4 border-gray-800 bg-gray-900">
                  <div className="flex flex-col items-center justify-center p-3 text-center text-white">
                    <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <p className="mt-2 text-[10px] font-medium">Payment link for ₹499 is ready!</p>
                    <p className="mt-1 text-[8px] text-gray-400">Share link using the button below</p>
                    <div className="mt-2 flex gap-1">
                      <span className="rounded bg-primary px-2 py-1 text-[8px]">Share Link</span>
                      <span className="rounded border border-gray-600 px-2 py-1 text-[8px]">Copy Link</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Forms + TPV */}
      <section className="bg-gray-50 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Payment Forms */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold text-gray-900">Payment Forms</h2>
              <p className="mt-4 text-gray-600">
                Build beautiful payment forms to collect information and capture
                payments from customers.
              </p>
              <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Enrollment Form
                </h4>
                <div className="mt-4 space-y-3">
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm"
                    readOnly
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm"
                    readOnly
                  />
                </div>
                <button className="mt-4 w-full rounded bg-primary py-2.5 font-medium text-white">
                  Pay amount
                </button>
              </div>
            </div>

            {/* TPV - secured by 1x Rupee */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold text-gray-900">TPV</h2>
              <p className="mt-4 text-gray-600">
                Ensure that the payment is processed only from your customer&apos;s
                registered bank account. UPI & Netbanking supported.
              </p>
              <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="mx-auto flex h-[320px] w-[180px] flex-col rounded-[1.5rem] border-4 border-gray-800 bg-gray-900">
                  <div className="flex-1 overflow-hidden p-3 text-white">
                    <p className="text-xs text-gray-400">&lt; Payment methods</p>
                    <div className="mt-4 rounded-lg border border-amber-400/50 bg-amber-500/20 p-3">
                      <p className="font-semibold">HDFC *****3091</p>
                      <p className="mt-1 text-[10px] text-gray-400">
                        Please use the same bank account on the UPI app or Netbanking
                        page to pay successfully.
                      </p>
                    </div>
                    <p className="mt-3 text-xs font-medium">UPI</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["PhonePe", "Paytm", "BHIM", "GPay"].map((app) => (
                        <span
                          key={app}
                          className="rounded bg-gray-700 px-2 py-1 text-[9px]"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 text-[10px] text-primary-light">Enter UPI ID &gt;</p>
                    <p className="mt-3 text-xs font-medium">NetBanking</p>
                    <p className="mt-1 text-[10px] text-gray-400">HDFC Bank Entity 1 &gt;</p>
                  </div>
                  <div className="border-t border-gray-700 px-3 py-2 text-center">
                    <p className="flex items-center justify-center gap-1 text-[10px] text-gray-400">
                      <span>secured by</span>
                      <span className="font-semibold text-primary-light">1x Rupee</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Ready to build your payment stack?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-light/90">
          Features that boost your success rate, elevate your customer experience, and
          reduce payment operations.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-lg bg-white px-8 py-3.5 font-semibold text-primary hover:bg-gray-100 transition-colors"
        >
          Sign Up
        </Link>
      </section>
    </div>
  );
}
