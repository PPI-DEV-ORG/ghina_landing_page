import React from "react";
import Image from "next/image";

export function BrandPartnersSection() {
  const brandLogos = [
    { name: "Hikvision", path: "/images/brands/hikvision.png" },
    { name: "Uniview", path: "/images/brands/uniview.png" },
    { name: "Bosch Security", path: "/images/brands/bosch.png" },
    { name: "Hanwha Vision", path: "/images/brands/hanwha.png" },
    { name: "Tiandy", path: "/images/brands/tiandy.png" },
    { name: "CP Plus", path: "/images/brands/cpplus.png" },
    { name: "Hi-Side", path: "/images/brands/hiside.webp" },
    { name: "Hiview", path: "/images/brands/hiview.webp" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E2ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#426A5A] mb-2">
            Principal &amp; Brand Hardware
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            Didukung Brand Surveillance Terkemuka Dunia
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6B66] mt-2">
            Kami mengintegrasikan perangkat bergaransi resmi dari produsen surveillance global untuk menjamin ketahanan dan keandalan sistem jangka panjang.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center">
          {brandLogos.map((brand, idx) => (
            <div
              key={idx}
              className="h-16 p-3 rounded-xl border border-[#E2ECE8] bg-[#F0F5F4]/40 hover:bg-white hover:border-[#70CB97]/70 hover:shadow-xs transition-all duration-200 flex items-center justify-center group"
              title={brand.name}
            >
              <Image
                src={brand.path}
                alt={brand.name}
                width={110}
                height={40}
                className="max-h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
