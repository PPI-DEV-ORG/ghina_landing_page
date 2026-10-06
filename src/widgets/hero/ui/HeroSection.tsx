import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { SITE_CONFIG } from "@/shared/config/site";
import { ShieldCheck, PhoneCall, ArrowRight, Server, Shield, Cpu, Layers } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 border-b border-[#E2ECE8]">
      {/* Background Image: public/images/cctv.jpg */}
      <Image
        src="/images/cctv.jpg"
        alt="Sistem Pengawasan CCTV CV. Ghina Multiprima"
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
          <span>System Integrator &amp; Konsultan Teknologi Keamanan Sejak 2013</span>
        </div>

        {/* Clear, Editorial Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] max-w-4xl mx-auto">
          Solusi Terpadu CCTV, Security System &amp;{" "}
          <span className="text-[#70CB97]">IT Infrastructure</span>
        </h1>

        {/* Natural, Professional Subcopy */}
        <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto mt-6">
          CV. Ghina Multiprima melayani perancangan sistem keamanan, integrasi surveillance tingkat lanjut, infrastruktur jaringan data, serta implementasi <strong>SAMTEK Edge AI Solutions</strong> untuk korporasi, manufaktur, dan instansi.
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
              Konsultasi Proyek &amp; Penawaran
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-semibold text-sm h-12 px-7 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
          >
            <Link href="/services" className="flex items-center gap-2">
              Lihat Solusi Layanan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Key Competence Pillars */}
        <div className="mt-14 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3.5 border border-white/10">
            <div className="flex items-center gap-2 text-[#70CB97] mb-1">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">CCTV &amp; Security</span>
            </div>
            <p className="text-[11px] text-gray-300">Surveillance, Access Control &amp; Alarm System</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3.5 border border-white/10">
            <div className="flex items-center gap-2 text-[#70CB97] mb-1">
              <Server className="w-4 h-4" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">IT Infrastructure</span>
            </div>
            <p className="text-[11px] text-gray-300">Networking, Server Rack &amp; Cabling System</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3.5 border border-white/10">
            <div className="flex items-center gap-2 text-[#70CB97] mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">AI &amp; Software</span>
            </div>
            <p className="text-[11px] text-gray-300">SAMTEK Edge Computing &amp; Video Analytics</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3.5 border border-white/10">
            <div className="flex items-center gap-2 text-[#70CB97] mb-1">
              <Layers className="w-4 h-4" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">M &amp; E Maintenance</span>
            </div>
            <p className="text-[11px] text-gray-300">Instalasi Mekanikal Elektrikal &amp; SLA Rutin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
