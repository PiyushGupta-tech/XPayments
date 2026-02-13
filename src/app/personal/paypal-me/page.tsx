import Link from "next/link";

export default function OnexRupeeMePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-gray-900">Get paid quickly with a link</h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Your personalized 1x Rupee.Me link simplifies getting paid. Share your link and get paid quickly—no invoicing required.
      </p>
      <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-dark">
        Learn More About 1x Rupee.Me
      </Link>
    </div>
  );
}
