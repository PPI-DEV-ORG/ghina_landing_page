import React from "react";
import { CheckCircle2 } from "lucide-react";

export function WhyUsSection() {
  const pillars = [
    {
      num: "01",
      title: "Transparansi Biaya Sejak Awal",
      detail: "Rincian Biaya Jelas Tanpa Biaya Tersembunyi",
      description:
        "Kami memberikan estimasi biaya penarikan kabel, konektor, bracket, dan perangkat keras secara terbuka. Anda hanya membayar apa yang disetujui dalam penawaran resmi.",
    },
    {
      num: "02",
      title: "Garansi Resmi 1 Tahun Penuh",
      detail: "Jaminan Unit Pengganti & Sparepart",
      description:
        "Seluruh produk kamera, NVR/DVR, dan switch berasal dari principal distributor resmi di Indonesia dengan garansi servis dan suku cadang terpercaya.",
    },
    {
      num: "03",
      title: "Instalasi Standar Industri",
      detail: "Teknisi Tersertifikasi & Jalur Kabel Rapi",
      description:
        "Pemasangan kabel dilindungi pipa conduit, penataan kabel di plafon aman dari gigitan hama, serta grounding kelistrikan yang sesuai standar keselamatan.",
    },
    {
      num: "04",
      title: "Kesiapan Integrasi SAMTEK AI",
      detail: "Mendukung Analitik Cerdas Masa Depan",
      description:
        "Sistem kamera yang kami pasang mendukung standar ONVIF/RTSP sehingga sewaktu-waktu dapat diintegrasikan dengan software SAMTEK AI VMS tanpa perlu mengganti kamera.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E2ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#426A5A] mb-2">
            Standar Kerja Kami
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Keamanan Adalah Kunci Ketenangan Bisnis &amp; Hunian
          </h2>
          <p className="text-sm sm:text-base text-[#5A6B66] mt-3 leading-relaxed">
            Empat prinsip utama yang mendasari setiap pekerjaan instalasi dan pengadaan oleh tim PT Ghina Multi Prima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#F0F5F4]/50 rounded-2xl border border-[#E2ECE8] p-7 flex flex-col justify-between hover:bg-white hover:border-[#70CB97]/60 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="text-2xl font-mono font-extrabold text-[#426A5A]/40 mb-4">
                  {pillar.num}
                </div>
                <h3 className="text-lg font-bold text-[#111827] leading-snug mb-1">
                  {pillar.title}
                </h3>
                <div className="text-xs font-semibold text-[#426A5A] mb-3">
                  {pillar.detail}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2ECE8]/80 flex items-center gap-1.5 text-xs text-[#152E26] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#70CB97]" />
                <span>Standar Ghina Multi Prima</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
