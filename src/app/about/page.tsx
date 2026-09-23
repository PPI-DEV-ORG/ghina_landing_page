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
  Star,
  Camera,
  Layers,
} from "lucide-react";
import { SITE_CONFIG } from "@/shared/config/site";

export const metadata = {
  title: "Tentang Kami — PT Ghina Multi Prima",
  description:
    "Profil PT Ghina Multi Prima, perusahaan solusi pengawasan CCTV, jasa instalasi andal, dan distributor SAMTEK VMS terpercaya sejak 2019.",
};

export default function AboutPage() {
  const achievements = [
    { label: "Tahun Berdiri", value: "2019", icon: Building2 },
    { label: "Titik CCTV Terpasang", value: "3.500+", icon: Camera },
    { label: "Proyek Selesai", value: "450+", icon: Award },
    { label: "Klien & Mitra Korporat", value: "120+", icon: Users },
  ];

  const testimonies = [
    {
      name: "Hendrik Wijaya",
      role: "Operations Manager, PT Mitra Logistik Sentosa",
      content:
        "Instalasi 32 kamera outdoor di area warehouse kami sangat rapi dan tepat waktu. Pipa konduit dan grounding terpasang dengan standar tinggi.",
      rating: 5,
    },
    {
      name: "Ibu Ratna Dewi",
      role: "Property Manager, Grand View Residence",
      content:
        "Layanan after sales PT Ghina Multi Prima sangat responsif. Integrasi software SAMTEK VMS mempermudah pemantauan gerbang cluster secara otomatis.",
      rating: 5,
    },
    {
      name: "Drs. Ahmad Fauzi",
      role: "Kepala Fasilitas, RS Medika Pratama",
      content:
        "Pelatihan penggunaan sistem kepada tim security internal kami diberikan secara lengkap dan sabar. Sangat direkomendasikan!",
      rating: 5,
    },
  ];

  const certificates = [
    {
      title: "Bosch Video Systems Expert",
      issuer: "Bosch Security Systems",
      image: "/images/certificate/01.webp",
    },
    {
      title: "Certified Surveillance Engineer",
      issuer: "Authorized Principal",
      image: "/images/certificate/02.webp",
    },
    {
      title: "Advanced Network & VMS Integration",
      issuer: "Security Systems Specialist",
      image: "/images/certificate/03.webp",
    },
    {
      title: "CCTV Systems Design & Configuration",
      issuer: "Technical Training Academy",
      image: "/images/certificate/04.webp",
    },
  ];

  const galleryImages = [
    {
      title: "Instalasi Perimeter Gudang",
      category: "Outdoor Deployment",
      image: "/images/places/warehouse.jpg",
    },
    {
      title: "Control Room & Command Center",
      category: "SAMTEK VMS Setup",
      image: "/images/samtek/dashboard.png",
    },
    {
      title: "Pengkabelan Gedung Perkantoran",
      category: "Structured Cabling",
      image: "/images/places/gedung.jpg",
    },
    {
      title: "Surveillance Sektor Keuangan",
      category: "High Security",
      image: "/images/places/bank.jpg",
    },
    {
      title: "Pemasangan CCTV Pabrik Industri",
      category: "Industrial Standard",
      image: "/images/places/pabrik.jpg",
    },
    {
      title: "Hardware Edge Smartbox",
      category: "AI Integration",
      image: "/images/products/smartbox.png",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-secondary-bg py-16 sm:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-secondary mb-4">
            <Shield className="w-3.5 h-3.5 text-primary" />
            Profil Perusahaan
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Mengenal Lebih Dekat PT Ghina Multi Prima
          </h1>
          <p className="text-base sm:text-lg text-brand-textMuted mt-4 leading-relaxed">
            Mitra tepercaya untuk pengadaan sistem keamanan visual, jasa instalasi profesional, dan integrasi software surveillance cerdas di Indonesia.
          </p>
        </div>
      </section>

      {/* History & Identity Section */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Logo Badge & Identity Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-10 bg-secondary-bg rounded-3xl border border-border text-center max-w-sm w-full shadow-card">
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <Image
                    src="/images/logo-dark.png"
                    alt="Logo PT Ghina Multi Prima"
                    fill
                    className="rounded-full object-cover shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">
                  PT GHINA MULTI PRIMA
                </h3>
                <p className="text-xs text-secondary font-semibold uppercase tracking-widest mt-1">
                  Surveillance & AI Systems
                </p>
                <div className="mt-6 pt-6 border-t border-border/80 text-xs text-brand-textMuted space-y-1">
                  <p>Legalitas Resmi Perusahaan</p>
                  <p className="font-mono text-foreground font-semibold">
                    Berdiri Sejak Tahun 2019
                  </p>
                </div>
              </div>
            </div>

            {/* History Text */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Sejarah & Perjalanan Kami
              </span>
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-snug">
                Solusi Keamanan yang Tumbuh Bersama Perkembangan Teknologi Digital
              </h2>
              <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                PT Ghina Multi Prima didirikan pada tahun 2019 dengan visi menjadi penyedia sistem keamanan terintegrasi yang andal, transparan, dan berstandar internasional. Berawal dari layanan instalasi CCTV konvensional, kami terus berinovasi menjawab tantangan keamanan modern.
              </p>
              <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                Kini, PT Ghina Multi Prima tidak hanya menyediakan unit kamera CCTV ternama (seperti Hikvision, Dahua, Uniview, Bosch, Axis) dan jasa pemasangan kabel berstandar tinggi, melainkan juga memperluas portofolio sebagai distributor dan integrator resmi <strong>SAMTEK VMS</strong> — sistem manajemen video pintar berbasis Artificial Intelligence.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-tertiary">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Teknisi Berpengalaman & Tersertifikasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Garansi Resmi & Komponen Original</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Pendampingan & Training Pemakaian</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Kesiapan Integrasi AI & IoT Cerdas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Counter Section */}
      <section className="py-16 bg-secondary-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-border p-6 text-center shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary-bg flex items-center justify-center text-secondary mx-auto mb-3">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-tertiary">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-brand-textMuted mt-1">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Kepuasan Pelanggan
            </span>
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight mt-1">
              Apa Kata Klien Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonies.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#F0F5F4]/40 rounded-2xl border border-[#E2ECE8] p-7 flex flex-col justify-between hover:bg-white hover:border-[#70CB97]/60 hover:shadow-sm transition-all duration-200"
              >
                <div>
                  <div className="text-2xl font-serif text-[#426A5A] mb-3 leading-none">
                    &ldquo;
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">
                    {t.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2ECE8]">
                  <div className="font-bold text-sm text-[#111827]">{t.name}</div>
                  <div className="text-xs text-[#5A6B66] mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Certificate Section */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Sertifikasi &amp; Standar Industri
            </span>
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight mt-1">
              Sertifikasi Resmi Keahlian Teknisi
            </h2>
            <p className="text-sm text-brand-textMuted mt-2">
              Bukti kompetensi dan keahlian teknis tim PT Ghina Multi Prima yang telah tersertifikasi langsung oleh manufaktur dan principal surveillance kelas dunia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="group relative bg-secondary-bg/40 rounded-2xl border border-border p-4 hover:bg-white hover:border-primary/60 hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-white border border-border/80 shadow-sm mb-3.5">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="pt-1 text-center">
                  <h4 className="font-bold text-sm text-foreground group-hover:text-secondary transition-colors line-clamp-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-brand-textMuted mt-0.5 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Gallery: "Our Talent / Dokumentasi" */}
      <section className="py-20 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Dokumentasi & Portofolio
            </span>
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight mt-1">
              Our Talent & Lapangan
            </h2>
            <p className="text-sm text-brand-textMuted mt-2">
              Dokumentasi implementasi nyata dari teknisi dan engineer PT Ghina Multi Prima di berbagai lokasi instalasi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-border bg-white shadow-card"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold leading-snug mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center px-2 flex flex-col items-center justify-center">
            <Button asChild variant="secondary" size="lg" className="font-bold h-11 px-6 rounded-lg text-xs sm:text-sm">
              <Link href="/contact">Konsultasi Proyek Anda</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

