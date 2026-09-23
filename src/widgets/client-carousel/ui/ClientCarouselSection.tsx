"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface CarouselItem {
  name: string;
  image: string;
}

function AutoDragCarousel({
  items,
  speed = 0.8,
  cardWidth = "w-36 sm:w-44",
  cardHeight = "h-20 sm:h-24",
}: {
  items: CarouselItem[];
  speed?: number;
  cardWidth?: string;
  cardHeight?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;

    const step = () => {
      if (!isHovered && !isDraggingRef.current && container) {
        container.scrollLeft += speed;
        // Loop when half of scroll content is traversed
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, speed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  // Triplicate array for smooth continuous looping
  const displayItems = [...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUpOrLeave();
      }}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Left and Right Smooth Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Draggable Track */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        className="flex gap-3 sm:gap-4 overflow-x-auto select-none py-2 px-6 scroll-smooth cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            className={`shrink-0 ${cardWidth} ${cardHeight} rounded-2xl border border-[#E2ECE8] bg-[#F0F5F4]/60 hover:bg-white hover:border-[#70CB97]/70 hover:shadow-sm transition-all duration-200 p-3 sm:p-4 flex items-center justify-center`}
            title={item.name}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={45}
              className="max-h-9 sm:max-h-11 w-auto object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

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

  const partnerLogos: CarouselItem[] = [
    { name: "Pertamina", image: "/images/partners/Pertamina.png" },
    { name: "Telkom Indonesia", image: "/images/partners/Telkom.png" },
    { name: "Kementerian Agama", image: "/images/partners/Kemenag.webp" },
    { name: "Kawasan Berikat Nusantara", image: "/images/partners/LogoKBN.webp" },
    { name: "Plaza Cibubur", image: "/images/partners/Plaza Cibubur.png" },
    { name: "Grand Wisata Bekasi", image: "/images/partners/grand Wisata Bekasi.webp" },
    { name: "IPC Marine Pelindo", image: "/images/partners/IPC Marine.png" },
    { name: "SEA Today", image: "/images/partners/SEA Today.jpeg" },
    { name: "UIN Syarif Hidayatullah Jakarta", image: "/images/partners/UIN Jakarta.jpeg" },
    { name: "TPI Grab", image: "/images/partners/TPI grab.webp" },
    { name: "UTAC Indonesia", image: "/images/partners/UTac Indo.jpeg" },
    { name: "Bakti Mulya 400", image: "/images/partners/LOGO-BAKTI-MULYA-400.webp" },
    { name: "At Taqwa", image: "/images/partners/At Taqwa.jpeg" },
    { name: "SMAN 3 Jakarta", image: "/images/partners/Logo SMAN 3 Jakarta.jpeg" },
    { name: "SMAN 50 Jakarta", image: "/images/partners/SMA 50 Jakarta.jpeg" },
    { name: "SMAN 59 Jakarta", image: "/images/partners/SAM 59 Jakarta.jpeg" },
    { name: "Insan Cendekia Nusantara", image: "/images/partners/insan_cendekia_nusantara.jpeg" },
    { name: "Pondok Pesantren Annur", image: "/images/partners/Pondok Annur.png" },
    { name: "PT CIN", image: "/images/partners/PT CIN.png" },
    { name: "Yayasan Endan", image: "/images/partners/Yayasan Endan.png" },
    { name: "Mitra Klien 1", image: "/images/partners/1.webp" },
    { name: "Mitra Klien 2", image: "/images/partners/2.webp" },
    { name: "Mitra Klien 3", image: "/images/partners/3.webp" },
    { name: "Mitra Klien 4", image: "/images/partners/4.webp" },
    { name: "Mitra Klien 5", image: "/images/partners/5.webp" },
    { name: "Mitra Klien 6", image: "/images/partners/6.webp" },
    { name: "Mitra Klien 7", image: "/images/partners/7.webp" },
    { name: "Mitra Klien 8", image: "/images/partners/8.webp" },
    { name: "Mitra Klien 9", image: "/images/partners/9.webp" },
    { name: "Mitra Klien 10", image: "/images/partners/10.webp" },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E2ECE8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
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

        {/* Brand Principal: Static Compact Grid with Full Color */}
        <div className="mb-14">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-4 px-1">
            Authorized Camera Brand Partners
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 items-center">
            {brandLogos.map((brand, idx) => (
              <div
                key={idx}
                className="h-14 sm:h-16 p-2 rounded-xl border border-[#E2ECE8] bg-[#F0F5F4]/40 hover:bg-white hover:border-[#70CB97]/70 hover:shadow-xs transition-all duration-200 flex items-center justify-center group"
                title={brand.name}
              >
                <Image
                  src={brand.path}
                  alt={brand.name}
                  width={100}
                  height={38}
                  className="max-h-7 sm:max-h-8 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Client Partner: Interactive Auto-Scroll & Draggable Carousel with Full Logo Collection */}
        <div>
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Klien &amp; Fasilitas Pengguna Layanan Kami
            </span>
            <span className="text-[11px] text-[#5A6B66] hidden sm:inline">
              Geser untuk melihat semua klien →
            </span>
          </div>
          <AutoDragCarousel items={partnerLogos} speed={0.6} />
        </div>
      </div>
    </section>
  );
}
