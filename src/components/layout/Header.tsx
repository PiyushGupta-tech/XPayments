"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/lib/constants";

const productCategorySubtitles: Record<string, string> = {
  "Payments": "Manage PAs & build native checkouts",
  "UPI Stack": "Solutions for merchants & banks",
  "Affordability": "Embed credit across purchase journeys",
  "Customer Experience": "Enhance experience to bring in revenue",
};

const productItemDescriptions: Record<string, string> = {
  "HyperCheckout": "Native checkout & payment orchestration",
  "Express Checkout": "Unified Payment APIs for enterprises",
  "Payouts": "Instant payouts with IMPS, UPI, cards",
  "Payment Links & Forms": "Create & send links without code",
  "Offers": "PA-agnostic offers engine",
  "NACH Payments": "Simplified NACH Debit eMandates",
  "HyperUPI": "1-click UPI with 90%+ success rates",
  "UPI Issuing Stack": "Full UPI issuing for banks & PPIs",
  "UPI TPAP Stack": "TPAP solutions for merchants",
  "UPI Acquiring Stack": "UPI acquiring for banks",
  "For Merchants": "Embed credit for merchants",
  "For Lenders": "Lender integrations & infrastructure",
  "QuickPay": "3x faster checkouts, native OTP",
  "Retry": "Smart retry for failed payments",
  "Native OTP": "Native OTP for higher success",
  "Third Party Validation": "TPV for smoother checkouts",
};

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedProducts, setExpandedProducts] = useState<string | null>(null);
  const [hoveredProductCategory, setHoveredProductCategory] = useState<string>(navLinks.products[0].label);

  const activeCategory = navLinks.products.find((p) => p.label === hoveredProductCategory) || navLinks.products[0];

  return (
    <header className="sticky top-0 z-50 bg-sky-50/80 border-b border-sky-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo: 1x Rupee - larger, enhanced styling */}
        <Link href="/" className="group flex items-center transition-all duration-200 hover:opacity-95 hover:scale-[1.02]">
          <Image
            src="/logo.png"
            alt="1x Rupee"
            width={200}
            height={50}
            quality={100}
            className="h-16 w-auto object-contain drop-shadow-sm"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-gray-800 hover:text-primary font-medium transition-all duration-200 hover:scale-[1.02]">
              Products
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "products" && (
              <div className="absolute left-1/2 top-full z-50 pt-2 -translate-x-1/2">
                <div className="w-[720px] max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
                  <div className="flex gap-8">
                    {/* Left: Category list - one active with bg */}
                    <div className="w-56 flex-shrink-0 space-y-0.5">
                      {navLinks.products.map((cat) => (
                        <div
                          key={cat.label}
                          onMouseEnter={() => setHoveredProductCategory(cat.label)}
                          className="rounded-lg"
                        >
                          <Link
                            href={cat.href}
                            className={`block rounded-lg px-4 py-3 transition-colors ${
                              hoveredProductCategory === cat.label
                                ? "bg-primary text-white"
                                : "text-gray-700 hover:bg-sky-50 hover:text-primary"
                            }`}
                          >
                            <span className="font-medium">{cat.label}</span>
                            <p className={`mt-0.5 text-xs ${hoveredProductCategory === cat.label ? "text-white/90" : "text-gray-500"}`}>
                              {productCategorySubtitles[cat.label] || ""}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                    {/* Right: Product grid for active category - icon, title, description */}
                    <div className="min-w-0 flex-1 grid grid-cols-2 gap-4">
                      {activeCategory.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-sky-50"
                        >
                          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2z" />
                            </svg>
                          </span>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-gray-900 group-hover:text-primary">{sub.label}</h4>
                            <p className="mt-0.5 text-xs text-gray-500">{productItemDescriptions[sub.label] || ""}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("resources")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-gray-800 hover:text-primary font-medium transition-all duration-200 hover:scale-[1.02]">
              Resources
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "resources" && (
              <div className="absolute right-0 top-full z-50 pt-2">
                <div className="min-w-[320px] w-[400px] max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-200 bg-white py-5 px-5 shadow-xl">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                    {/* Left column */}
                    <Link href="/resources/dashboard" className="group flex min-h-[52px] items-center gap-3 rounded-xl px-3 py-3 text-gray-900 transition-colors hover:bg-sky-50 hover:text-primary">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2z" /></svg>
                      </span>
                      <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">Dashboard</span>
                    </Link>
                    <Link href="/resources/newsroom" className="group flex min-h-[52px] items-center gap-3 rounded-xl px-3 py-3 text-gray-900 transition-colors hover:bg-sky-50 hover:text-primary">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13a3 3 0 100-6M12 8c0-1.657-.895-3-2-3s-2 1.343-2 3 1 3 2 3 2-1.343 2-3z" /></svg>
                      </span>
                      <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">Newsroom</span>
                    </Link>
                    <Link href="/resources/about" className="group flex min-h-[52px] items-center gap-3 rounded-xl px-3 py-3 text-gray-900 transition-colors hover:bg-sky-50 hover:text-primary">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </span>
                      <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">About</span>
                    </Link>
                    {/* Right column */}
                    <Link href="/resources/blog" className="group flex min-h-[52px] items-center gap-3 rounded-xl px-3 py-3 text-gray-900 transition-colors hover:bg-sky-50 hover:text-primary">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </span>
                      <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">Blog</span>
                    </Link>
                    <Link href="/resources/careers" className="group flex min-h-[52px] items-center gap-3 rounded-xl px-3 py-3 text-gray-900 transition-colors hover:bg-sky-50 hover:text-primary">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      </span>
                      <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">Careers</span>
                    </Link>
                    <Link href="/resources/case-studies" className="group flex min-h-[52px] items-center gap-3 rounded-xl px-3 py-3 text-gray-900 transition-colors hover:bg-sky-50 hover:text-primary">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      </span>
                      <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">Case Studies</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href={navLinks.docs.href} className="text-gray-800 hover:text-primary font-medium transition-all duration-200 hover:scale-[1.02]">
            Docs
          </Link>
        </div>

        {/* Right side: Contact us */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex h-9 items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Contact us
            <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sky-100 bg-white px-6 py-4">
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase text-gray-500">Products</p>
              <div className="space-y-1">
                {navLinks.products.map((p) => (
                  <div key={p.label}>
                    <div className="flex items-center justify-between">
                      <Link href={p.href} onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-primary font-medium">
                        {p.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setExpandedProducts(expandedProducts === p.label ? null : p.label)}
                        className="p-2 -m-2 text-gray-500 hover:text-primary"
                        aria-expanded={expandedProducts === p.label}
                      >
                        <svg className={`h-4 w-4 transition-transform ${expandedProducts === p.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {expandedProducts === p.label && (
                      <div className="pl-4 space-y-1 border-l-2 border-sky-100">
                        {p.subItems.map((sub) => (
                          <Link key={sub.label} href={sub.href} onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-primary">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase text-gray-500">Resources</p>
              <div className="space-y-1">
                {navLinks.resources.map((r) => (
                  <Link key={r.label} href={r.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-primary">
                    {r.label}
                  </Link>
                ))}
                <Link href={navLinks.docs.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-primary">
                  Docs
                </Link>
              </div>
            </div>
            <div className="flex gap-2 pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex flex-1 items-center justify-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-medium text-white h-9">
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
