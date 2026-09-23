import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/shared/lib/storage";
import { ProductTabsFilter } from "@/features/product-filter/ui/ProductTabsFilter";
import { Button } from "@/shared/ui/button";
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  HelpCircle,
  Video,
  Award,
  BadgePercent,
  Cpu,
} from "lucide-react";
import { SITE_CONFIG } from "@/shared/config/site";

export const metadata = {
  title: "Katalog Paket CCTV & Jasa Pasang — PT Ghina Multi Prima",
  description:
    "Pilihan paket kamera CCTV Home Office, Security Office, Smart Baby Cam (1-8 kamera), dan SAMTEK AI Smartbox dengan garansi 1 tahun dan gratis training.",
};

export default function ServicesPage() {
  const products = getProducts();

  const faqs = [
    {
      q: "Apakah harga paket sudah termasuk biaya pemasangan?",
      a: "Ya! Seluruh paket CCTV kami sudah termasuk jasa instalasi standar, penarikan kabel hingga batas meter paket, konektor, setting rekaman, serta konfigurasi aplikasi pemantauan online via smartphone.",
    },
    {
      q: "Berapa lama masa garansi yang diberikan?",
      a: "Kami memberikan jaminan garansi resmi unit dan sparepart selama 1 (satu) tahun penuh, ditambah pendampingan teknis jika terjadi kendala operasional.",
    },
    {
      q: "Bagaimana jika kabel instalasi kurang panjang?",
      a: "Jika lokasi pemasangan membutuhkan penambahan kabel melebihi jatah paket, kami menyediakan kabel tambahan standar outdoor/indoor dengan biaya per meter yang transparan dan terjangkau.",
    },
    {
      q: "Apakah CCTV dapat diintegrasikan dengan software SAMTEK VMS?",
      a: "Tentu! Perangkat CCTV yang kami sediakan mendukung protokol ONVIF & RTSP, sehingga sangat kompatibel dan siap diintegrasikan langsung ke SAMTEK VMS untuk analitik AI canggih.",
    },
    {
      q: "Apakah melayani survei lokasi sebelum pemasangan?",
      a: "Ya, kami menyediakan layanan survei lokasi untuk area Jabodetabek dan sekitarnya guna menghitung estimasi jalur kabel dan sudut pandang kamera yang paling optimal.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-secondary-bg py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-secondary mb-4">
            <Video className="w-3.5 h-3.5 text-primary" />
            Katalog Paket & Layanan
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Paket CCTV Komplit & Jasa Pasang Profesional
          </h1>
          <p className="text-base sm:text-lg text-brand-textMuted mt-4 leading-relaxed">
            Pilihan paket pengawasan visual terlengkap untuk kantor, toko, pergudangan, maupun tempat tinggal. Praktis, berkualitas, dan bergaransi 1 tahun penuh.
          </p>
        </div>
      </section>

      {/* Catalog Grid with Tabs Filter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductTabsFilter products={products} />
        </div>
      </section>

      {/* Why Us Section: 1 Year Guarantee & Affordable with Image on the Right */}
      <section className="py-20 bg-secondary-bg border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-secondary">
                <Award className="w-3.5 h-3.5 text-primary" />
                Jaminan Kualitas & Efisiensi Biaya
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Garansi 1 Tahun Penuh & Harga Paling Rasional di Kelasnya
              </h2>

              <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                Kami memahami bahwa investasi keamanan harus memberikan rasa tenang jangka panjang. Oleh karena itu, setiap pembelian paket CCTV dan perangkat di PT Ghina Multi Prima dilindungi garansi resmi sparepart 1 tahun dengan dukungan teknisi sigap.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border">
                  <ShieldCheck className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">
                      Garansi 1 Tahun Resmi (Unit & Servis)
                    </h4>
                    <p className="text-xs text-brand-textMuted mt-0.5">
                      Perlindungan penggantian komponen apabila terjadi kerusakan pabrikasi tanpa prosedur yang berbelit-belit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border">
                  <BadgePercent className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">
                      Harga Terjangkau & Transparan
                    </h4>
                    <p className="text-xs text-brand-textMuted mt-0.5">
                      Spesifikasi unit original principal dengan harga kompetitif tanpa markup komponen yang tidak perlu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border">
                  <Cpu className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">
                      Gratis Training Penggunaan & Akomodasi
                    </h4>
                    <p className="text-xs text-brand-textMuted mt-0.5">
                      Tim teknisi kami memberikan panduan operasional lengkap ke user atau petugas keamanan di lokasi tanpa biaya tambahan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start">
                <Button asChild variant="whatsapp" size="lg" className="font-bold h-11 px-6 rounded-lg text-xs sm:text-sm">
                  <a
                    href={SITE_CONFIG.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Konsultasi Penawaran Khusus
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Image on the Right */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-card bg-white p-3">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/places/gedung.jpg"
                    alt="Pemasangan CCTV Gedung dan Fasilitas"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-primary block">
                      STANDAR INSTALASI PROFESIONAL
                    </span>
                    <span className="text-sm font-bold">
                      Keamanan Maksimal untuk Gedung & Kantor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Pertanyaan Umum
            </span>
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight mt-1">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-sm text-brand-textMuted mt-2">
              Informasi seputar proses pemesanan, survei lokasi, dan garansi instalasi kami.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-secondary-bg/50 rounded-xl border border-border p-5 transition-colors hover:bg-secondary-bg"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-textMuted mt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-brand-textMuted mb-3">
              Ada pertanyaan lain yang belum terjawab?
            </p>
            <Button asChild variant="outline" className="font-bold">
              <Link href="/contact">Hubungi Tim Kami Langsung</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

