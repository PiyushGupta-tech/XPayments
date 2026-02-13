import Link from "next/link";

export interface SolutionCard {
  title: string;
  href?: string;
  icon: React.ReactNode;
}

interface DarkSolutionsSectionProps {
  headline: string;
  description: string;
  cards: SolutionCard[];
  ctaText?: string;
  ctaHref?: string;
}

export default function DarkSolutionsSection({
  headline,
  description,
  cards,
  ctaText = "Get Started",
  ctaHref = "/contact",
}: DarkSolutionsSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 p-8 md:p-12 lg:p-16">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Sparkles */}
      <span className="absolute right-[15%] top-[20%] text-white/20" aria-hidden>✦</span>
      <span className="absolute bottom-[25%] left-[10%] text-white/15" aria-hidden>✦</span>
      <span className="absolute right-[25%] bottom-[30%] text-white/10" aria-hidden>✦</span>

      <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: Headline + description */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {description}
          </p>
          {ctaHref && (
            <Link
              href={ctaHref}
              className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            >
              {ctaText}
            </Link>
          )}
        </div>

        {/* Right: Feature cards grid */}
        <div className="grid flex-1 grid-cols-2 gap-4 sm:gap-6 lg:max-w-2xl">
          {cards.map((card, i) => {
            const content = (
              <div className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-white/[0.08]">
                <span className="flex h-12 w-12 items-center justify-center text-primary">
                  {card.icon}
                </span>
                <span className="mt-3 text-sm font-semibold uppercase tracking-wide text-white">
                  {card.title}
                </span>
              </div>
            );
            return card.href ? (
              <Link key={i} href={card.href}>
                {content}
              </Link>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
