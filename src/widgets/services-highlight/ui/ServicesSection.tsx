import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Video, Wrench, Server, Cpu, CheckCircle2 } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "CCTV & Integrated Security System",
      subtitle: "Surveillance & Access Control",
      tag: "Security System",
      description:
        "Perancangan dan pengadaan sistem pengawasan IP Camera & HD-Analog skala industri, Command Center / Control Room, sistem deteksi intrusi, serta akses kontrol gedung.",
      image: "/images/places/warehouse.jpg",
      icon: Video,
      highlights: [
        "Kamera surveillance high-resolution & low-light",
        "Setup control room & wall monitor display",
        "Integrasi sistem alarm perimeter & fire alert",
      ],
    },
    {
      title: "IT Infrastructure & Networking",
      subtitle: "Konektivitas & Server Architecture",
      tag: "IT Infrastructure",
      description:
        "Instalasi infrastruktur jaringan kabel terstruktur (LAN/Fiber Optic), penataan rack server, konfigurasi manageable switch, router, serta pengamanan transmisi data.",
      image: "/images/places/gedung.jpg",
      icon: Server,
      highlights: [
        "Structured cabling LAN Cat6 & Fiber Optic",
        "Pemasangan & perapihan rack server data",
        "Segmentasi VLAN & QoS traffic surveillance",
      ],
    },
    {
      title: "AI Video Analytics & Custom Software",
      subtitle: "Edge Computing & Smart Detection",
      tag: "Software & AI",
      description:
        "Integrasi SAMTEK Smartbox AI Server untuk mentransformasi kamera eksisting menjadi analitik cerdas: People Counting, LPR (Plat Nomor), Deteksi APD (K3), hingga Face Recognition.",
      image: "/images/places/bank.jpg",
      icon: Cpu,
      highlights: [
        "SAMTEK Smartbox 4 / 8 / 256 channel scale",
        "Deteksi APD, Smoke/Fire & Fall Detection",
        "License Plate Recognition & Vehicle Counting",
      ],
    },
    {
      title: "General Mechanical Electrical & Maintenance",
      subtitle: "Perawatan Berkala & Kontrak Servis",
      tag: "M & E Service",
      description:
        "Pekerjaan kelistrikan pendukung, pemasangan pelindung pipa conduit standar industri, serta kontrak preventive & corrective maintenance berkala dengan jaminan SLA respons cepat.",
      image: "/images/places/pabrik.jpg",
      icon: Wrench,
      highlights: [
        "Pipa conduit pelindung kabel standar industri",
        "Preventive maintenance berkala & audit sistem",
        "Dukungan teknisi tersertifikasi & suku cadang",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#F0F5F4] border-b border-[#E2ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#426A5A] mb-2">
            Layanan Terpadu
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Layanan Rekayasa Sistem, Integrasi Teknologi &amp; Keamanan
          </h2>
          <p className="text-sm sm:text-base text-[#5A6B66] mt-3 leading-relaxed">
            Dari perencanaan arsitektur jaringan, instalasi fisik bersertifikasi, hingga integrasi kecerdasan buatan, kami menghadirkan solusi menyeluruh untuk kebutuhan operasional perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-[#E2ECE8] overflow-hidden shadow-xs hover:shadow-md hover:border-[#70CB97]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#152E26] shadow-xs">
                        <Icon className="w-3.5 h-3.5 text-[#426A5A]" />
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="text-xs font-semibold text-[#426A5A] mb-1">
                      {item.subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-3 leading-snug group-hover:text-[#426A5A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6B66] leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Highlights Checklist */}
                    <div className="space-y-2 pt-2 border-t border-[#E2ECE8]/70">
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#70CB97] shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#152E26] hover:text-[#426A5A] transition-colors group/link"
                  >
                    Pelajari Detail Solusi
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
