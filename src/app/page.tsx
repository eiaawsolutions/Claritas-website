import { Hero } from "@/components/hero";
import { ThreeCards } from "@/components/three-cards";
import { ClientLogos } from "@/components/client-logos";
import { ProductsSection } from "@/components/products-section";
import { Testimonials } from "@/components/testimonials";
import { JobOpenings } from "@/components/job-openings";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeCards />
      <ClientLogos />
      <ProductsSection />
      <Testimonials />
      <JobOpenings />
      <ContactSection />
    </>
  );
}
