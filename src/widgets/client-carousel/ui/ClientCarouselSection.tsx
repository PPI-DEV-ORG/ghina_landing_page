"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import rawPartners from "@/data/partners.json";

interface CarouselItem {
  name: string;
  image: string;
  row?: number;
}

function DualTrackCarousel({
  items,
  speed = 0.5,
  reverse = false,
}: {
  items: CarouselItem[];
  speed?: number;
  reverse?: boolean;
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
        if (reverse) {
          container.scrollLeft -= speed;
          if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth / 2;
          }
        } else {
          container.scrollLeft += speed;
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, speed, reverse]);

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

  // Duplicate items for seamless infinite loop
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
      {/* Smooth Gradient Edge Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F0F5F4] via-[#F0F5F4]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F0F5F4] via-[#F0F5F4]/80 to-transparent z-10" />

      {/* Draggable & Auto-Scroll Track */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        className="flex gap-3 sm:gap-4 overflow-x-auto select-none py-3 px-6 scroll-smooth cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            className="relative group shrink-0 w-40 sm:w-48 h-20 sm:h-24 rounded-2xl border border-[#E2ECE8] bg-white hover:border-[#70CB97] hover:shadow-md transition-all duration-200 p-3 sm:p-4 flex items-center justify-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={45}
              className="max-h-9 sm:max-h-11 w-auto object-contain pointer-events-none group-hover:scale-105 transition-transform"
            />

            {/* Hover Floating Tooltip Badge with Client Name */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 whitespace-nowrap bg-[#152E26] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-md border border-[#70CB97]/40">
              {item.name}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#152E26]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientCarouselSection() {
  const partners = rawPartners as CarouselItem[];

  // Dynamic split by row property (default row 1 or half split)
  const row1Partners = partners.filter((p) => (p.row ?? 1) === 1);
  const row2Partners = partners.filter((p) => p.row === 2);

  return (
    <section className="py-20 sm:py-24 bg-[#F0F5F4] border-b border-[#E2ECE8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#426A5A] mb-2">
            Klien &amp; Rekanan Terpercaya
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Dipercaya BUMN, Korporasi Multinasional &amp; Institusi Publik
          </h2>
          <p className="text-sm sm:text-base text-[#5A6B66] mt-3 leading-relaxed">
            Berbagai instansi terkemuka telah mempercayakan pengadaan, implementasi, dan pemeliharaan sistem keamanan serta infrastruktur teknologi kepada CV. Ghina Multiprima. Geser manual atau arahkan kursor pada logo untuk melihat nama rekanan.
          </p>
        </div>

        {/* Dual Track Carousel: Row 1 & Row 2 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Mitra Korporasi, BUMN &amp; Fasilitas Publik ({partners.length} Mitra)
            </span>
            <span className="text-[11px] text-[#5A6B66] hidden sm:inline">
              ← Geser / drag untuk navigasi manual →
            </span>
          </div>

          {/* Track 1: Scroll Kanan */}
          <DualTrackCarousel items={row1Partners} speed={0.55} reverse={false} />

          {/* Track 2: Scroll Kiri (Reverse direction) */}
          <DualTrackCarousel items={row2Partners} speed={0.55} reverse={true} />
        </div>
      </div>
    </section>
  );
}
