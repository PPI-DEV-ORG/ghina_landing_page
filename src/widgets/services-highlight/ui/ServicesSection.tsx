import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Video, Wrench, Server } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "24-Hour Surveillance Systems",
      subtitle: "Monitoring Tanpa Henti",
      tag: "Surveillance",
      description:
        "Sistem pengawasan kamera berkeandalan tinggi dengan kemampuan night-vision cerdas dan penyimpanan aman untuk mendokumentasikan setiap detik operasional.",
      image: "/images/places/warehouse.jpg",
      icon: Video,
    },
    {
      title: "Perencanaan & Desain Keamanan",
      subtitle: "Analisis Titik Buta (Blindspot)",
      tag: "Security Design",
      description:
        "Pemilihan lensa sudut lebar, kalkulasi jarak fokus, dan penempatan strategis untuk perlindungan perimeter fasilitas industri, ruko, gedung, dan pertokoan.",
      image: "/images/places/gedung.jpg",
      icon: Shield,
    },
    {
      title: "Instalasi Profesional & Maintenance",
      subtitle: "Pengkabelan Standar Industri",
      tag: "Installation",
      description:
        "Penarikan kabel pelindung conduit rapi, penataan rak server, kalibrasi fokus lensa, serta kontrak servis berkala untuk memastikan keandalan 24/7.",
      image: "/images/places/pabrik.jpg",
      icon: Wrench,
    },
    {
      title: "Security Command Center & SAMTEK VMS",
      subtitle: "Integrasi Sistem Terpusat",
      tag: "AI Software",
      description:
        "Setup control room interaktif dengan wall monitor dan software SAMTEK AI VMS untuk deteksi plat nomor, intrusi perimeter, dan peringatan instan.",
      image: "/images/places/bank.jpg",
      icon: Server,
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#F0F5F4] border-b border-[#E2ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#426A5A] mb-2">
            Layanan Terpadu
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Solusi Menyeluruh untuk Pengawasan Aset &amp; Fasilitas
          </h2>
          <p className="text-sm sm:text-base text-[#5A6B66] mt-3 leading-relaxed">
            Mulai dari pengadaan hardware CCTV, penarikan kabel berstandar rapi, hingga integrasi analitik AI berbasis software SAMTEK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-[#E2ECE8] overflow-hidden shadow-xs hover:shadow-md hover:border-[#70CB97]/60 transition-all duration-300 flex flex-col"
              >
                {/* 16:10 Photo Aspect */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#152E26]/95 via-[#152E26]/40 to-transparent" />

                  {/* Clean Category Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-bold text-[#152E26] shadow-xs">
                    {item.tag}
                  </div>

                  {/* Over-Image Content */}
                  <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
                    <span className="text-xs font-semibold text-[#70CB97] tracking-wide block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-[#E2ECE8] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#426A5A]">
                      Garansi Pemasangan Resmi
                    </span>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#152E26] group-hover:text-[#426A5A] transition-colors"
                    >
                      Pelajari Layanan
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
