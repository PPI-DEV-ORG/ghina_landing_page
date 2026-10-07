import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { CheckCircle2, ExternalLink } from "lucide-react";

export function SamtekVmsSection() {
  const features = [
    {
      title: "AI Object & Human Detection",
      desc: "Deteksi otomatis manusia, kendaraan, dan anomali secara real-time.",
    },
    {
      title: "Kompatibilitas Multi-Brand",
      desc: "Mendukung ONVIF & RTSP untuk Hikvision, Dahua, Uniview, Bosch, dll.",
    },
    {
      title: "Pusat Kendali Video Terpusat",
      desc: "Platform sentral pemantauan puluhan kamera multi-lokasi.",
    },
    {
      title: "Pencarian Rekaman Cepat",
      desc: "Temukan rekaman spesifik berdasarkan filter waktu & objek.",
    },
  ];

  return (
    <section className="py-14 sm:py-16 relative overflow-hidden border-b border-[#0C6791]/30 bg-[#06090A] text-[#E6F1F0]">
      {/* Background Gradient Mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 25%, rgba(182, 44, 44, 0.22) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(12, 103, 145, 0.28) 0%, transparent 50%), linear-gradient(135deg, #06090A 0%, #081116 50%, #12090c 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#E6F1F0]">
              <Image
                src="/images/samtek/samtek.svg"
                alt="SAMTEK Logo"
                width={65}
                height={18}
                className="h-3.5 w-auto object-contain"
              />
              <span className="text-[#0C6791] font-bold">|</span>
              <span className="flex items-center gap-1.5 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B62C2C] animate-pulse" />
                Edge AI &amp; Video Management System
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#E6F1F0] leading-snug">
              SAMTEK VMS — Surveillance Berbasis{" "}
              <span className="text-[#B62C2C]">Artificial Intelligence</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#E6F1F0]/80 leading-relaxed">
              Software generasi baru yang mengubah kamera CCTV konvensional menjadi sistem monitoring cerdas dengan analitik video real-time dan manajemen terpusat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#06090A]/70 backdrop-blur-sm border border-[#0C6791]/30 hover:border-[#B62C2C]/60 transition-all duration-200"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#E6F1F0] mb-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0C6791] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-[#E6F1F0]/70 leading-normal pl-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                asChild
                size="sm"
                className="font-bold text-xs h-10 px-5 rounded-lg bg-[#B62C2C] hover:bg-[#992222] text-[#E6F1F0] border border-[#B62C2C]"
              >
                <a
                  href="https://samtek.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Kunjungi Website SAMTEK
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="bg-[#0C6791]/15 hover:bg-[#0C6791]/30 text-[#E6F1F0] border-[#0C6791]/60 h-10 px-5 rounded-lg text-xs backdrop-blur-sm"
              >
                <a
                  href="https://wa.me/6287744488999?text=Halo%20CV.%20Ghina%20Multiprima,%20saya%20ingin%20jadwalkan%20Live%20Demo%20SAMTEK%20VMS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jadwalkan Demo
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Software Preview Frame */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-[#0C6791]/40 shadow-xl bg-[#06090A]/90 backdrop-blur-md">
              <div className="px-3 py-2 bg-[#06090A] border-b border-[#0C6791]/30 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#B62C2C]" />
                  <div className="w-2 h-2 rounded-full bg-[#0C6791]" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  <span className="text-[10px] font-mono text-[#E6F1F0]/60 ml-2">
                    samtek-vms.enterprise.local
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="text-[9px] py-0 px-2 bg-[#0C6791]/25 text-[#E6F1F0] border-[#0C6791]/60"
                >
                  AI Edge Active
                </Badge>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src="/images/samtek/demo.png"
                  alt="Interface SAMTEK VMS Software"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="px-3 py-2 bg-[#06090A] border-t border-[#0C6791]/30 flex items-center justify-between text-[11px] text-[#E6F1F0]/80">
                <span className="font-semibold">
                  SAMTEK Intelligent Surveillance Platform
                </span>
                <span className="font-mono text-[#B62C2C] font-semibold text-[10px]">
                  ONVIF Multi-Stream
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
