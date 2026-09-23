import React from "react";
import { HeroSection } from "@/widgets/hero/ui/HeroSection";
import { ServicesSection } from "@/widgets/services-highlight/ui/ServicesSection";
import { WhyUsSection } from "@/widgets/why-us/ui/WhyUsSection";
import { CatalogPreviewSection } from "@/widgets/catalog-preview/ui/CatalogPreviewSection";
import { SamtekVmsSection } from "@/widgets/samtek-vms/ui/SamtekVmsSection";
import { ClientCarouselSection } from "@/widgets/client-carousel/ui/ClientCarouselSection";
import { ContactCtaSection } from "@/widgets/contact-cta/ui/ContactCtaSection";
import { getProducts } from "@/shared/lib/storage";

export default function HomePage() {
  const products = getProducts();

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <CatalogPreviewSection products={products} />
      <SamtekVmsSection />
      <ClientCarouselSection />
      <ContactCtaSection />
    </div>
  );
}

