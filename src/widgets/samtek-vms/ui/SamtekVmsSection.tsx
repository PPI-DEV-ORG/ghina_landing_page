import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { CheckCircle2, ExternalLink, Sparkles, Shield, Cpu } from "lucide-react";

export function SamtekVmsSection() {
  const features = [
    {
      title: "AI Object & Human Detection",
      desc: "Deteksi otomatis pergerakan manusia, kendaraan, dan anomali perimeter secara real-time.",
    },
    {
      title: "Kompatibilitas Multi-Brand Kamera",
      desc: "Mendukung protokol ONVIF & RTSP untuk kamera Hikvision, Dahua, Uniview, Bosch, dan Axis.",
    },
    {
      title: "Pusat Kendali Video Terpusat",
      desc: "Satu platform kendali untuk memantau puluhan titik kamera dari berbagai cabang lokasi.",
    },
    {
      title: "Pencarian Rekaman Pintar",
      desc: "Temukan rekaman video penting dalam hitungan detik berdasarkan filter waktu dan pergerakan objek.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden border-b border-[#0C6791]/30 bg-[#06090A] text-[#E6F1F0]">
      {/* Background Gradient Mesh blending #06090A, #B62C2C, and #0C6791 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 25%, rgba(182, 44, 44, 0.28) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(12, 103, 145, 0.35) 0%, transparent 50%), linear-gradient(135deg, #06090A 0%, #081116 50%, #12090c 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Product Positioning */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C6791]/25 border border-[#0C6791]/50 text-xs font-semibold text-[#E6F1F0]">
              <span className="w-2 h-2 rounded-full bg-[#B62C2C] animate-pulse" />
              <span>Produk Software Unggulan</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#E6F1F0] leading-tight">
              SAMTEK VMS — Video Management System Berbasis{" "}
              <span className="text-[#B62C2C]">Artificial Intelligence</span>
            </h2>

            <p className="text-sm sm:text-base text-[#E6F1F0]/80 leading-relaxed">
              Selain pengadaan perangkat kamera dan jasa instalasi, PT Ghina Multi Prima menghadirkan <strong className="text-white">SAMTEK VMS</strong>. Software pengawasan generasi baru yang mengubah kamera CCTV konvensional menjadi sistem monitoring cerdas dengan analitik video real-time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#06090A]/70 backdrop-blur-sm border border-[#0C6791]/40 hover:border-[#B62C2C]/70 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-[#E6F1F0] mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#0C6791] group-hover:text-[#B62C2C] transition-colors shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#E6F1F0]/70 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="font-bold shadow-md h-12 px-6 rounded-lg text-xs sm:text-sm bg-[#B62C2C] hover:bg-[#992222] text-[#E6F1F0] border border-[#B62C2C]"
              >
                <a
                  href="https://samtek.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Kunjungi Website Resmi SAMTEK
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-[#0C6791]/15 hover:bg-[#0C6791]/30 text-[#E6F1F0] border-[#0C6791]/60 h-12 px-6 rounded-lg text-xs sm:text-sm backdrop-blur-sm"
              >
                <a
                  href="https://wa.me/6287744488999?text=Halo%20Ghina%20Multi%20Prima,%20saya%20ingin%20jadwalkan%20Live%20Demo%20SAMTEK%20VMS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jadwalkan Live Demo
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Software Preview Frame */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#0C6791]/40 shadow-2xl bg-[#06090A]/90 backdrop-blur-md">
              {/* Window Header Bar */}
              <div className="px-4 py-3 bg-[#06090A] border-b border-[#0C6791]/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B62C2C]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0C6791]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-[#E6F1F0]/60 ml-2">
                    samtek-vms.enterprise.local
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="text-[10px] bg-[#0C6791]/25 text-[#E6F1F0] border-[#0C6791]/60"
                >
                  AI Edge Active
                </Badge>
              </div>

              {/* Software Screen */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src="/images/samtek/demo.png"
                  alt="Interface SAMTEK VMS Software"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Metadata Bar */}
              <div className="p-4 bg-[#06090A] border-t border-[#0C6791]/30 flex items-center justify-between text-xs text-[#E6F1F0]/80">
                <div>
                  <span className="font-semibold text-[#E6F1F0] block">
                    SAMTEK Intelligent Surveillance Platform
                  </span>
                  <span className="text-[11px] text-[#E6F1F0]/60">
                    ONVIF / RTSP Protocol Compliant
                  </span>
                </div>
                <span className="text-xs font-mono text-[#B62C2C] font-semibold">
                  Multi-Stream Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
