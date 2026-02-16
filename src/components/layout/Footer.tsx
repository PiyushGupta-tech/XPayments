import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-gray-900">
      {/* Subtle light gray grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Logo + columns row - XPayments style: logo left, nav columns right */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Logo - XPayments image, larger & enhanced */}
          <Link href="/" className="group flex-shrink-0 transition-all duration-200 hover:opacity-95 hover:scale-[1.02]">
            <Image
              src="/logo.png?v=3"
              alt="XPayments"
              width={210}
              height={64}
              quality={100}
              className="h-16 w-auto object-contain drop-shadow-md"
            />
          </Link>

          {/* Four columns */}
        <div className="grid flex-1 grid-cols-2 gap-10 md:grid-cols-4 md:gap-12">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary transition-all duration-200 no-underline hover:translate-x-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Products
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary transition-all duration-200 no-underline hover:translate-x-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Compliances
            </h3>
            <ul className="space-y-2">
              {footerLinks.compliances.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary transition-all duration-200 no-underline hover:translate-x-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary transition-all duration-200 no-underline hover:translate-x-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>

        {/* Bottom bar: Privacy | FAQ | Terms | Badges | Social */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-10 md:flex-row md:flex-wrap">
          <div className="flex flex-wrap items-center justify-center gap-6 order-1 md:order-none">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary no-underline transition-all duration-200 hover:scale-105">
              Privacy Policy
            </Link>
            <Link href="/help" className="text-sm text-gray-600 hover:text-primary no-underline transition-all duration-200 hover:scale-105">
              FAQ
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-primary no-underline transition-all duration-200 hover:scale-105">
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 order-2 md:ml-auto">
            {/* Blue circular certification badges */}
            <Link
              href="/compliances/soc2"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white hover:bg-primary-dark hover:scale-110 transition-all duration-200 no-underline"
              title="SOC 2 Type 2"
            >
              SOC 2
            </Link>
            <Link
              href="/compliances/iso"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white hover:bg-primary-dark hover:scale-110 transition-all duration-200 no-underline"
              title="ISO 27001:2022"
            >
              ISO
            </Link>
            <Link
              href="/compliances/pci"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white hover:bg-primary-dark hover:scale-110 transition-all duration-200 no-underline"
              title="PCI DSS"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </Link>
            {/* Social icons - white on light gray square */}
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <span className="text-sm font-bold">in</span>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="X (Twitter)"
            >
              <span className="text-sm font-bold">X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
