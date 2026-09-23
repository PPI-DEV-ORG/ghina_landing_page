import React from "react";
import Image from "next/image";

export function ClientCarouselSection() {
  const brandLogos = [
    { name: "Hikvision", path: "/images/brands/hikvision.png" },
    { name: "Dahua Technology", path: "/images/brands/dahua.svg" },
    { name: "Uniview", path: "/images/brands/uniview.png" },
    { name: "Bosch Security", path: "/images/brands/bosch.png" },
    { name: "Axis Communications", path: "/images/brands/axis.png" },
    { name: "Hanwha Vision", path: "/images/brands/hanwha.png" },
    { name: "Tiandy", path: "/images/brands/tiandy.png" },
    { name: "CP Plus", path: "/images/brands/cpplus.png" },
  ];

  const partnerLogos = [
    "/images/partners/1.webp",
    "/images/partners/2.webp",
    "/images/partners/3.webp",
    "/images/partners/4.webp",
    "/images/partners/5.webp",
    "/images/partners/6.webp",
    "/images/partners/7.webp",
    "/images/partners/8.webp",
    "/images/partners/9.webp",
    "/images/partners/10.webp",
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E2ECE8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#426A5A] mb-2">
            Kemitraan Resmi &amp; Klien
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Didukung Principal Brand Dunia &amp; Dipercaya Berbagai Industri
          </h2>
          <p className="text-sm sm:text-base text-[#5A6B66] mt-3 leading-relaxed">
            Kami memasang produk bergaransi resmi dari produsen surveillance global dan telah melayani beragam kebutuhan keamanan fasilitas korporasi dan komersial di Indonesia.
          </p>
        </div>

        {/* Brand Principal Strip */}
        <div className="mb-14">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-5">
            Authorized Camera Brand Partners
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center">
            {brandLogos.map((brand, idx) => (
              <div
                key={idx}
                className="h-20 p-4 rounded-xl border border-[#E2ECE8] bg-[#F0F5F4]/40 hover:bg-white hover:border-[#70CB97]/60 hover:shadow-xs transition-all duration-200 flex items-center justify-center group"
                title={brand.name}
              >
                <Image
                  src={brand.path}
                  alt={brand.name}
                  width={110}
                  height={45}
                  className="max-h-9 w-auto object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos Strip */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-5">
            Klien &amp; Fasilitas Pengguna Layanan Kami
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 items-center">
            {partnerLogos.map((logo, idx) => (
              <div
                key={idx}
                className="h-16 p-3 rounded-xl bg-white border border-[#E2ECE8] hover:border-[#426A5A] transition-colors flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Klien Mitra PT Ghina Multi Prima ${idx + 1}`}
                  width={90}
                  height={36}
                  className="max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
