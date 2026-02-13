import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Products from "@/components/sections/Products";
import HyperCheckoutSection from "@/components/sections/HyperCheckoutSection";
import Stats from "@/components/sections/Stats";
import DeveloperSection from "@/components/sections/DeveloperSection";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Products />
      <HyperCheckoutSection />
      <Stats />
      <DeveloperSection />
      <Testimonials />
      <CTA />
    </>
  );
}
