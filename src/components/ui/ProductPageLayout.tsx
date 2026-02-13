import Link from "next/link";

interface ProductPageLayoutProps {
  title: string;
  category: string;
  categoryHref: string;
  description: string;
  features?: { title: string; description: string }[];
  children?: React.ReactNode;
}

export default function ProductPageLayout({
  title,
  category,
  categoryHref,
  description,
  features = [],
  children,
}: ProductPageLayoutProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <nav className="mb-8">
          <Link
            href={categoryHref}
            className="text-sm font-medium text-primary hover:underline"
          >
            ← {category}
          </Link>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-600">{description}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark transition-colors"
        >
          Get Started
        </Link>
        {features.length > 0 && (
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
