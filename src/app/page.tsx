import React from "react";
import { HeroSection } from "@/widgets/hero/ui/HeroSection";
import { ServicesSection } from "@/widgets/services-highlight/ui/ServicesSection";
import { WhyUsSection } from "@/widgets/why-us/ui/WhyUsSection";
import { SamtekVmsSection } from "@/widgets/samtek-vms/ui/SamtekVmsSection";
import { GhitechStoreSection } from "@/widgets/ghitech-store/ui/GhitechStoreSection";
import { BrandPartnersSection } from "@/widgets/brand-partners/ui/BrandPartnersSection";
import { ClientCarouselSection } from "@/widgets/client-carousel/ui/ClientCarouselSection";
import { ContactCtaSection } from "@/widgets/contact-cta/ui/ContactCtaSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <SamtekVmsSection />
      <GhitechStoreSection />
      <BrandPartnersSection />
      <ClientCarouselSection />
      <ContactCtaSection />
    </div>
  );
}
