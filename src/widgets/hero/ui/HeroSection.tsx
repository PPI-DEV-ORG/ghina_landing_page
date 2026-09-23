import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { SITE_CONFIG } from "@/shared/config/site";
import { ShieldCheck, PhoneCall, ArrowRight, Wrench, Cpu, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 border-b border-[#E2ECE8]">
      {/* Background Image: public/images/cctv.jpg */}
      <Image
        src="/images/cctv.jpg"
        alt="Sistem Pengawasan CCTV PT Ghina Multi Prima"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Cinematic Dark Overlay tailored to brand palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#152E26]/90 via-[#152E26]/85 to-[#152E26]/95" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Company Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-medium text-white mb-6">
          <span className="w-2 h-2 rounded-full bg-[#70CB97]" />
          <span>Pengadaan CCTV &amp; Integrator Resmi SAMTEK VMS</span>
        </div>

        {/* Clear, Editorial Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] max-w-4xl mx-auto">
          Solusi CCTV Andal, Jasa Pasang Rapi &amp;{" "}
          <span className="text-[#70CB97]">Teknologi Cerdas</span>
        </h1>

        {/* Natural, Professional Subcopy */}
        <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto mt-6">
          Kami menyediakan kamera CCTV bergaransi resmi, pemasangan kabel berstandar industri untuk kantor, pabrik &amp; hunian, serta integrasi <strong>SAMTEK AI VMS</strong> untuk pemantauan cerdas terpusat.
        </p>

        {/* Clear Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-8">
          <Button
            asChild
            size="lg"
            variant="default"
            className="font-bold text-sm h-12 px-7 rounded-lg shadow-sm"
          >
            <a
              href={SITE_CONFIG.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Konsultasi &amp; Survei Lokasi
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-semibold bg-white/10 hover:bg-white/15 text-white border-white/20 backdrop-blur-sm text-sm h-12 px-7 rounded-lg"
          >
            <Link href="/services" className="flex items-center gap-2">
              Katalog Paket CCTV
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Authentic Trust Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-12 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-left">
            <div className="p-2 rounded-lg bg-[#70CB97]/20 text-[#70CB97] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">Garansi Resmi 1 Tahun</div>
              <div className="text-xs text-gray-300 mt-0.5">Jaminan unit &amp; sparepart original</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-left">
            <div className="p-2 rounded-lg bg-[#70CB97]/20 text-[#70CB97] shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">Teknisi Berpengalaman</div>
              <div className="text-xs text-gray-300 mt-0.5">Standar instalasi conduit rapi</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-left">
            <div className="p-2 rounded-lg bg-[#70CB97]/20 text-[#70CB97] shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">Integrasi SAMTEK VMS</div>
              <div className="text-xs text-gray-300 mt-0.5">Kompatibel AI video analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
