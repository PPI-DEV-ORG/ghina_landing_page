import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import {
  Shield,
  Award,
  Users,
  Building2,
  CheckCircle2,
  Camera,
  Target,
  Compass,
  Star,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { GalleryModalSection } from "@/widgets/gallery-modal/ui/GalleryModalSection";
import { ContactCtaSection } from "@/widgets/contact-cta/ui/ContactCtaSection";

export const metadata = {
  title: "Tentang Kami — CV. Ghina Multiprima",
  description:
    "Profil perusahaan, sejarah sejak 2013, visi misi, sertifikasi profesional, dan dokumentasi pekerjaan CV. Ghina Multiprima.",
};

export default function AboutPage() {
  const achievements = [
    { label: "Tahun Berdiri", value: "2013", icon: Building2 },
    { label: "Titik CCTV Terpasang", value: "1.000+", icon: Camera },
    { label: "Proyek Selesai", value: "100+", icon: Award },
    { label: "Klien & Rekanan Korporat", value: "50+", icon: Users },
    { label: "Indeks Kepuasan Klien", value: "9/10", icon: Star },
  ];

  const certificates = [
    {
      title: "Bosch Video Systems Expert",
      issuer: "Bosch Security Systems",
      image: "/images/certificate/01.webp",
      desc: "Sertifikasi keahlian konfigurasi dan integrasi video surveillance kelas dunia.",
    },
    {
      title: "Bosch Building Integration System",
      issuer: "Bosch Security Systems",
      image: "/images/certificate/02.webp",
      desc: "Keahlian sistem integrasi otomasi pengawasan gedung & kontrol akses.",
    },
    {
      title: "Access Modular Controller (AMC)",
      issuer: "Bosch Security Systems",
      image: "/images/certificate/03.webp",
      desc: "Pengujian menyeluruh arsitektur controller modul akses terpusat.",
    },
    {
      title: "Technical Training Specialist",
      issuer: "Hanwha Techwin (Wisenet)",
      image: "/images/certificate/04.webp",
      desc: "Kompetensi instalasi perangkat dan solusi analitik Hanwha Techwin.",
    },
  ];

  const missions = [
    "Menyediakan barang dan jasa yang berkualitas, serta senantiasa menjunjung tinggi profesionalisme dalam memberikan pelayanan prima bagi seluruh pemangku kepentingan (stakeholders) perusahaan.",
    "Membangun sinergi kemitraan yang saling menguntungkan dan berkelanjutan bersama para klien dan mitra usaha.",
    "Membangun budaya kerja yang positif, berintegritas, dan penuh tanggung jawab, baik yang berhubungan dengan internal maupun eksternal perusahaan.",
    "Mendukung program pembangunan infrastruktur nasional sekaligus meningkatkan kepedulian dan tanggung jawab terhadap lingkungan sosial.",
  ];

  const coreValues = [
    {
      title: "Profeus",
      subtitle: "Profesionalisme Tinggi",
      desc: "Menjalankan setiap tugas instalasi dan perancangan sistem dengan kompetensi teknis terbaik dan standar operasional baku.",
    },
    {
      title: "Etichus",
      subtitle: "Etika & Tata Kelola",
      desc: "Menjaga kejujuran, komitmen transparansi, dan etika bisnis yang sehat dalam setiap kerja sama proyek.",
    },
    {
      title: "Integer",
      subtitle: "Integritas Tanpa Kompromi",
      desc: "Konsisten memberikan produk original, kualitas pengerjaan rapi, dan tanggung jawab purna jual yang nyata.",
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Header */}
      <section className="bg-[#F0F5F4] py-16 sm:py-20 border-b border-[#E2ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2ECE8] text-xs font-bold text-[#426A5A] mb-4 shadow-2xs">
            <Shield className="w-3.5 h-3.5 text-[#70CB97]" />
            Profil Perusahaan CV. Ghina Multiprima
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Dedikasi Menghadirkan Rekayasa Keamanan &amp; Solusi Teknologi Andal
          </h1>
          <p className="text-sm sm:text-base text-[#5A6B66] mt-4 leading-relaxed">
            Mitra tepercaya untuk perancangan sistem pengawasan CCTV, integrasi infrastruktur IT jaringan, serta solusi AI surveillance sejak tahun 2013.
          </p>
        </div>
      </section>

      {/* 2. History & Profile Narrative */}
      <section className="py-20 border-b border-[#E2ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Card: Company Identity */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-8 sm:p-10 bg-[#F0F5F4]/60 rounded-3xl border border-[#E2ECE8] text-center max-w-sm w-full shadow-xs">
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <Image
                    src="/images/logo-dark.png"
                    alt="Logo CV. Ghina Multiprima"
                    fill
                    className="rounded-full object-cover shadow-sm border-2 border-white"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827]">
                  CV. GHINA MULTIPRIMA
                </h3>
                <p className="text-xs text-[#426A5A] font-bold uppercase tracking-widest mt-1">
                  System Integrator &amp; Security Consultant
                </p>
                <div className="mt-6 pt-6 border-t border-[#E2ECE8] text-xs text-gray-600 space-y-1.5">
                  <p className="text-gray-500 font-medium">Pengalaman Lebih Dari 1 Dekade</p>
                  <p className="font-semibold text-[#152E26]">
                    Didirikan di Bekasi Sejak 2013
                  </p>
                </div>
              </div>
            </div>

            {/* Right: History Text */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#426A5A]">
                Sejarah &amp; Perjalanan Perusahaan
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-snug">
                Bertransformasi Menjadi Konsultan &amp; Integrator Sistem Keamanan Matang
              </h2>
              <p className="text-sm sm:text-base text-[#5A6B66] leading-relaxed">
                CV Ghina Multiprima berdiri sejak tahun 2013 di Kota Bekasi, Jawa Barat. Seiring berjalannya waktu dan tuntutan perkembangan teknologi digital, perusahaan terus berekspansi serta memperluas kapabilitas layanannya ke bidang pengadaan, konsultasi, dan instalasi sistem CCTV serta sistem keamanan terintegrasi.
              </p>
              <p className="text-sm sm:text-base text-[#5A6B66] leading-relaxed">
                Kini CV Ghina Multiprima dikenal sebagai mitra penyedia solusi surveillance yang prima, didukung tenaga ahli profesional bersertifikat, kemitraan resmi dengan principal kamera global, dan penyediaan software cerdas generasi baru <strong>SAMTEK AI VMS</strong>. Komitmen kami terbukti dari terjalinnya kerja sama jangka panjang dengan Pertamina, Telkom Indonesia, UTAC Indonesia, IPC Marine Service, hingga institusi pendidikan.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-gray-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#70CB97] shrink-0" />
                  <span>Teknisi Berpengalaman &amp; Bersertifikasi Internasional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#70CB97] shrink-0" />
                  <span>Jaminan Unit Original &amp; Garansi Resmi Principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#70CB97] shrink-0" />
                  <span>Standar Pengkabelan Conduit Standar Industri Rapi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#70CB97] shrink-0" />
                  <span>Purna Jual Terjamin &amp; Training Operasional Klien</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visi, Misi & Values Section */}
      <section className="py-20 bg-[#F0F5F4]/40 border-b border-[#E2ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#426A5A]">
              Landasan &amp; Prinsip Kami
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mt-1">
              Visi, Misi &amp; Nilai Perusahaan
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            {/* Vision Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E2ECE8] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E8F8F0] text-[#152E26] flex items-center justify-center mb-5">
                  <Target className="w-5 h-5 text-[#426A5A]" />
                </div>
                <span className="text-xs font-bold text-[#426A5A] uppercase tracking-wider block mb-2">
                  Visi Perusahaan
                </span>
                <p className="text-base sm:text-lg font-bold text-[#111827] leading-relaxed">
                  &ldquo;Menjadi perusahaan yang terpercaya, terdepan, terkemuka, dan berkualitas di bidang konsultan CCTV, Security System, General Mechanical Electrical, serta Manajemen Transportasi di Indonesia.&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2ECE8] text-xs text-gray-500">
                Fokus menghadirkan solusi teknologi mutakhir dengan keandalan jangka panjang.
              </div>
            </div>

            {/* Mission Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2ECE8] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E8F8F0] text-[#152E26] flex items-center justify-center mb-5">
                  <Compass className="w-5 h-5 text-[#426A5A]" />
                </div>
                <span className="text-xs font-bold text-[#426A5A] uppercase tracking-wider block mb-3">
                  Misi Perusahaan
                </span>
                <div className="space-y-3.5">
                  {missions.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#F0F5F4] text-[#426A5A] font-bold text-[11px] flex items-center justify-center shrink-0 border border-[#E2ECE8]">
                        {idx + 1}
                      </div>
                      <p>{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Values: Profeus, Etichus, Integer */}
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Corporate Core Values
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E2ECE8] p-6 text-center shadow-xs hover:border-[#70CB97] transition-colors"
                >
                  <div className="text-lg font-extrabold text-[#152E26]">
                    {val.title}
                  </div>
                  <div className="text-xs font-bold text-[#426A5A] mt-0.5 mb-2">
                    {val.subtitle}
                  </div>
                  <p className="text-xs text-[#5A6B66] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Certification Section */}
      <section className="py-20 bg-white border-b border-[#E2ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#426A5A]">
              Kompetensi &amp; Sertifikasi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mt-1">
              Sertifikasi Profesional Tenaga Ahli
            </h2>
            <p className="text-sm text-[#5A6B66] mt-2">
              Bukti validitas kompetensi teknis tim engineer CV. Ghina Multiprima yang telah tersertifikasi resmi oleh principal manufaktur surveillance global.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="group bg-[#F0F5F4]/40 rounded-2xl border border-[#E2ECE8] p-4 hover:bg-white hover:border-[#70CB97] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-white border border-[#E2ECE8] shadow-2xs mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center pt-1">
                  <h4 className="font-bold text-sm text-[#111827] group-hover:text-[#426A5A] transition-colors line-clamp-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#426A5A] mt-0.5">
                    {cert.issuer}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Track Record Metrics Section (Tepat di bawah Sertifikat & di atas Gallery) */}
      <section className="py-14 sm:py-16 bg-[#F0F5F4] border-b border-[#E2ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#426A5A]">
              Pencapaian &amp; Rekam Jejak
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mt-1">
              Statistik Kinerja &amp; Kepercayaan Klien
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E2ECE8] p-5 text-center shadow-2xs hover:border-[#70CB97] hover:shadow-xs transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#F0F5F4] flex items-center justify-center text-[#426A5A] mx-auto mb-2.5 border border-[#E2ECE8]">
                    <Icon className="w-4 h-4 text-[#70CB97]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#152E26]">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-600 mt-1">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Field Documentation Gallery (Modal + Grid) - Berada di bawah Track Record */}
      <GalleryModalSection />

      {/* 7. Contact CTA */}
      <ContactCtaSection />
    </div>
  );
}
