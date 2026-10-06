import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { SITE_CONFIG } from "@/shared/config/site";
import {
  Video,
  Server,
  Cpu,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Car,
  HardHat,
  Eye,
  PhoneCall,
  Mail,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { ServiceFaqSection } from "@/widgets/faq/ui/ServiceFaqSection";

export const metadata = {
  title: "Layanan Rekayasa Sistem & Solusi Teknologi — CV. Ghina Multiprima",
  description:
    "Solusi B2B konsultan CCTV & sistem keamanan, infrastruktur IT jaringan, integrasi software SAMTEK AI Edge computing, dan kontrak perawatan mekanikal elektrikal.",
};

export default function ServicesPage() {
  const coreServices = [
    {
      title: "CCTV & Integrated Security System",
      tagline: "Surveillance, Command Center & Access Control",
      icon: Video,
      description:
        "Perancangan menyeluruh sistem proteksi visual mulai dari kamera IP/HD-Analog industrial-grade, integrasi sistem alarm perimeter, kontrol akses pintu (RFID/Biometrik), hingga pembangunan Security Operation Center (SOC) / Control Room 24/7.",
      capabilities: [
        "Pemasangan IP Camera & PTZ High-Speed Zoom",
        "Setup Video Wall & Command Center Ruang Kontrol",
        "Integrasi Access Control & Mesin Absensi Terpusat",
        "Sistem Deteksi Intrusi Perimeter & Sensor Keamanan",
      ],
    },
    {
      title: "IT Infrastructure & Networking",
      tagline: "Konektivitas Handal & Server Architecture",
      icon: Server,
      description:
        "Pembangunan infrastruktur transmisi data berkinerja tinggi untuk mendukung operasional gedung dan lalu lintas video pengawasan tanpa latensi, dirancang dengan sistem redundansi dan keamanan berlapis.",
      capabilities: [
        "Structured Cabling LAN Cat6/Cat6A & Fiber Optic (Backbone)",
        "Pemasangan Rack Server, Cable Management & Patch Panel",
        "Konfigurasi Manageable Switch, Router Enterprise & Firewall",
        "Penyediaan Akses Point Wi-Fi Skala Gedung & Pabrik",
      ],
    },
    {
      title: "AI Video Analytics & Custom Software",
      tagline: "SAMTEK Edge Computing & Kecerdasan Buatan",
      icon: Cpu,
      description:
        "Transformasi infrastruktur kamera eksisting menjadi pusat analitik cerdas berbasis Edge AI Server (SAMTEK Smartbox). Menghadirkan wawasan data operasional dan peringatan otomatis tanpa perlu pengawasan manual terus-menerus.",
      capabilities: [
        "People Counting & Analisis Kepadatan Pengunjung",
        "License Plate Recognition (LPR) & Klasifikasi Kendaraan",
        "Deteksi Pelanggaran APD K3 (Helm, Rompi, Masker) & Fall Detection",
        "Face Recognition, VIP Whitelist & Pencarian Wajah Multi-Kamera",
      ],
    },
    {
      title: "General Mechanical Electrical & Maintenance",
      tagline: "Perawatan Rutin, SLA Responsif & Keandalan 24/7",
      icon: Wrench,
      description:
        "Layanan pemeliharaan berkala (Preventive Maintenance) dan penanganan insiden darurat (Corrective Maintenance) didukung suku cadang original, peralatan kalibrasi presisi, dan perjanjian tingkat layanan (SLA) ketat.",
      capabilities: [
        "Instalasi Pipa Conduit Pelindung Kabel Standar Industri",
        "Audit Kelistrikan, Grounding & Proteksi Tegangan (Surge Protection)",
        "Kontrak Perawatan Berkala (SLA Respons Cepat & Laporan Audit)",
        "Pelatihan Operasional & Pendampingan Teknisi Internal",
      ],
    },
  ];

  const industrySolutions = [
    {
      title: "Retail, Komersial & Gedung",
      badge: "Retail & Commercial",
      icon: Building2,
      desc: "Optimalkan keamanan toko dan pemahaman perilaku pengunjung dengan analitik People Counting, dwelling time, dan deteksi lalu lintas area masuk/keluar.",
      points: ["People Counting & Trafik Pengunjung", "Dwelling Time di Depan Display", "Pengawasan Kasir & Area Transaksi"],
    },
    {
      title: "Lalu Lintas & Transportasi",
      badge: "Traffic & Parking",
      icon: Car,
      desc: "Solusi otomatisasi kontrol akses kendaraan, identifikasi nomor plat otomatis (LPR), deteksi parkir liar di area terlarang, dan pemantauan arus logistik.",
      points: ["License Plate Recognition (ANPR)", "Vehicle Counting & Klasifikasi Jenis", "Deteksi Parkir Sembarangan"],
    },
    {
      title: "Manufaktur & Keselamatan Kerja (K3)",
      badge: "Industrial & Factory",
      icon: HardHat,
      desc: "Otomasi pengawasan standar keselamatan kerja di area berisiko tinggi dengan algoritma AI deteksi APD, perimeter bahaya, serta respons cepat deteksi asap & api.",
      points: ["Deteksi Pelanggaran Helm & Rompi K3", "Deteksi Pekerja Terjatuh (Fall Detection)", "Fire & Smoke Early Warning Alert"],
    },
    {
      title: "Keamanan Publik & Kawasan Terbatas",
      badge: "Public Safety & Zone",
      icon: Eye,
      desc: "Perlindungan zona berkeamanan tinggi, perkantoran, dan fasilitas vital nasional dengan pencocokan identitas wajah dan peringatan pelanggaran garis batas virtual.",
      points: ["Face Recognition & Log Kehadiran", "CrossLine & Restricted Area Intrusion", "Pencarian Jejak Objek via Peta"],
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#F0F5F4] py-16 sm:py-20 border-b border-[#E2ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2ECE8] text-xs font-bold text-[#426A5A] mb-4 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#70CB97]" />
            Layanan Rekayasa Sistem B2B &amp; Korporat
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Solusi Menyeluruh Keamanan &amp; Infrastruktur Teknologi
          </h1>
          <p className="text-base sm:text-lg text-[#5A6B66] mt-4 leading-relaxed">
            Dari perencanaan blueprint teknis, instalasi fisik standar industri, hingga implementasi kecerdasan buatan terpusat untuk fasilitas bisnis Anda.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="font-bold text-xs sm:text-sm h-11 px-6 rounded-lg bg-[#152E26] hover:bg-[#426A5A] text-white">
              <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Konsultasi &amp; Request Proposal (RFP)
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#E2ECE8] hover:bg-white text-xs font-bold h-11 px-5 rounded-lg text-[#152E26]">
              <Link href="/contact" className="flex items-center gap-2">
                Formulir Penawaran Resmi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. 4 Pilar Layanan Solutif */}
      <section className="py-20 border-b border-[#E2ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#426A5A]">
              Pilar Layanan Utama
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mt-1">
              4 Pilar Solusi Sistem Terintegrasi
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B66] mt-2">
              Layanan profesional yang dirancang untuk menjawab standarisasi keamanan, ketahanan jaringan, dan otomasi operasional bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F0F5F4]/40 hover:bg-white rounded-2xl border border-[#E2ECE8] hover:border-[#70CB97] p-7 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white text-[#426A5A] flex items-center justify-center mb-5 border border-[#E2ECE8] shadow-2xs group-hover:bg-[#E8F8F0] transition-colors">
                      <Icon className="w-6 h-6 text-[#70CB97]" />
                    </div>

                    <span className="text-xs font-bold text-[#426A5A] uppercase tracking-wider block mb-1">
                      {srv.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] mb-3 leading-snug group-hover:text-[#426A5A] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6B66] leading-relaxed mb-6">
                      {srv.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#E2ECE8]/70">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Cakupan Pekerjaan:
                      </div>
                      {srv.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-gray-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#70CB97] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E2ECE8]/70">
                    <a
                      href={`${SITE_CONFIG.contact.whatsapp}&text=${encodeURIComponent(`Halo CV. Ghina Multiprima, saya ingin konsultasi mengenai layanan: ${srv.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#152E26] hover:text-[#426A5A] transition-colors"
                    >
                      Konsultasikan Kebutuhan Ini
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Sektor Solusi Terapan (Industry Solutions) */}
      <section className="py-20 bg-[#F0F5F4]/50 border-b border-[#E2ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#426A5A]">
              Sektor &amp; Aplikasi Terapan
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mt-1">
              Solusi Khusus Sesuai Karakteristik Industri
            </h2>
            <p className="text-sm text-[#5A6B66] mt-2">
              Setiap industri memiliki tantangan unik. Kami mengintegrasikan teknologi surveillance dan AI untuk menjawab kebutuhan spesifik fasilitas Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E2ECE8] p-6 shadow-xs hover:border-[#70CB97] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F0F5F4] text-[#426A5A] flex items-center justify-center mb-4 border border-[#E2ECE8]">
                      <Icon className="w-5 h-5 text-[#70CB97]" />
                    </div>

                    <span className="text-[10px] font-bold text-[#426A5A] uppercase tracking-wider block mb-1">
                      {sol.badge}
                    </span>
                    <h3 className="text-base font-extrabold text-[#111827] mb-2 leading-snug">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-[#5A6B66] leading-relaxed mb-4">
                      {sol.desc}
                    </p>

                    <ul className="space-y-1.5 border-t border-[#E2ECE8]/70 pt-3">
                      {sol.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-[11px] text-gray-700 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#70CB97]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section Dropdown Accordion */}
      <ServiceFaqSection />

      {/* 5. Konsultasi Teknis & RFP Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#152E26] via-[#1b3d32] to-[#152E26] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden">
            <div className="max-w-2xl relative z-10 space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#70CB97]">
                <Sparkles className="w-3.5 h-3.5" />
                Dukungan Sales Engineering &amp; Survei Lapangan
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Punya Kebutuhan Pengadaan Proyek atau Tender Resmi?
              </h2>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                Tim sales engineering CV. Ghina Multiprima siap membantu penyusunan Rencana Anggaran Biaya (RAB), spesifikasi teknis (TOR/RFP), survei lokasi gratis, hingga live demo software analitik SAMTEK.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="font-bold text-xs sm:text-sm h-11 px-6 rounded-lg bg-[#70CB97] text-[#152E26] hover:bg-[#85d6a7]">
                  <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" />
                    Hubungi via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold text-xs sm:text-sm h-11 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <Link href="/contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Kirim Form Penawaran Proyek
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
