"use client";

export default function AboutUsSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Label, heading, paragraph */}
        <div className="max-w-2xl flex-shrink-0">
          <span
            className="inline-block rounded-lg border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
            style={{ borderColor: "#003087", backgroundColor: "rgba(0, 48, 135, 0.2)" }}
          >
            About Us
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            We Engineer Payments{" "}
            <span className="text-primary-light">for Global Scale</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Trusted by leading enterprises worldwide, XPayments simplifies payment orchestration and global coverage, boosts conversions, reduces fraud, and delivers seamless customer experiences.
          </p>
        </div>

        {/* Right: Network graphic with currency icons */}
        <div className="relative flex-1 lg:min-h-[380px]">
          <svg
            viewBox="0 0 400 380"
            className="mx-auto h-auto w-full max-w-[400px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Connection lines */}
            <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
              <line x1="200" y1="190" x2="120" y2="80" />
              <line x1="200" y1="190" x2="280" y2="80" />
              <line x1="200" y1="190" x2="320" y2="180" />
              <line x1="200" y1="190" x2="300" y2="280" />
              <line x1="200" y1="190" x2="100" y2="280" />
              <line x1="200" y1="190" x2="80" y2="180" />
              <line x1="120" y1="80" x2="200" y2="60" />
              <line x1="280" y1="80" x2="200" y2="60" />
              <line x1="100" y1="280" x2="140" y2="320" />
              <line x1="300" y1="280" x2="260" y2="320" />
            </g>
            {/* Small nodes */}
            {[
              [120, 80], [200, 60], [280, 80], [320, 180], [300, 280], [260, 320],
              [100, 280], [140, 320], [80, 180],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="rgba(255,255,255,0.25)" />
            ))}
            {/* Central circle with rings and XPayments logo */}
            <circle cx="200" cy="190" r="70" fill="rgba(30,41,59,0.9)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <circle cx="200" cy="190" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <circle cx="200" cy="190" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            {/* Logo backdrop: white disc for contrast */}
            <circle cx="200" cy="190" r="44" fill="white" opacity="0.98" />
            {/* Subtle outer glow */}
            <circle cx="200" cy="190" r="44" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
            {/* Primary blue ring around logo */}
            <circle cx="200" cy="190" r="44" fill="none" stroke="#003087" strokeWidth="2.5" />
            <clipPath id="centerLogoClip">
              <circle cx="200" cy="190" r="40" />
            </clipPath>
            <image
              href="/logo.png?v=3"
              x="158"
              y="148"
              width="84"
              height="84"
              clipPath="url(#centerLogoClip)"
              preserveAspectRatio="xMidYMid meet"
            />
            {/* Currency / payment icons in circles */}
            <g>
              {/* ₹ Rupee - top right */}
              <circle cx="300" cy="100" r="28" fill="#003087" />
              <text x="300" y="108" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">₹</text>
              {/* £ Pound - right */}
              <circle cx="340" cy="200" r="28" fill="#003087" />
              <text x="340" y="208" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">£</text>
              {/* $ Dollar - left */}
              <circle cx="60" cy="200" r="28" fill="#003087" />
              <text x="60" y="208" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">$</text>
              {/* € Euro - bottom left */}
              <circle cx="80" cy="300" r="28" fill="#003087" />
              <text x="80" y="308" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">€</text>
              {/* Cart - top */}
              <circle cx="200" cy="35" r="26" fill="#003087" />
              <path d="M188 38h4l1.5-5 7-.5-1.5 7h-11l-1 2zm1.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="white" />
              {/* Lock - bottom right */}
              <circle cx="320" cy="300" r="28" fill="#5b21b6" />
              <rect x="308" y="288" width="24" height="18" rx="2" fill="white" />
              <path d="M314 288v-4a6 6 0 0 1 12 0v4" stroke="white" strokeWidth="2" fill="none" />
              {/* Lightning - bottom center */}
              <circle cx="200" cy="340" r="24" fill="rgba(30,41,59,0.95)" stroke="rgba(34,197,94,0.6)" strokeWidth="1.5" />
              <path d="M200 323l-5 8h3l-3 11 8-9h-3l5-10z" fill="#22c55e" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
