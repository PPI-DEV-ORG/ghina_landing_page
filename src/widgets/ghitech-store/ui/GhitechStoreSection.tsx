import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { ShoppingBag, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";

export function GhitechStoreSection() {
  const storeHighlights = [
    "Katalog Kamera Lengkap (IP Cam, Analog, PTZ, Babycam)",
    "Pilihan Paket Hemat Siap Pasang untuk Rumah & Toko",
    "Aksesori Surveillance, DVR/NVR, Hard Disk & Kabel",
    "Konsultasi Retail Cepat via WhatsApp Store",
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-blue-50/40 to-white border-b border-[#E2ECE8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Container with subtle border & shadow */}
        <div className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          {/* Very Subtle Blue Light Corner Accents */}
          <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-sky-100/30 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#0f4c81]">
                <div className="relative h-4 w-14 flex items-center">
                  <Image
                    src="/images/ghitech/ghitech.png"
                    alt="Ghitech"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-blue-300">|</span>
                <span className="flex items-center gap-1.5 text-[#0f4c81]">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#0f4c81]" />
                  Toko Resmi &amp; E-Katalog CCTV
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug">
                Butuh Paket CCTV Siap Pasang? <br />
                Kunjungi Toko Retail Kami di{" "}
                <span className="text-[#0f4c81]">Ghitech</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6B66] leading-relaxed">
                Untuk kebutuhan rumah tangga, toko, ruko, maupun pembelian paket kamera mandiri, kunjungi platform retail resmi kami di <strong>cctvpurwakarta.com</strong> dengan spesifikasi lengkap dan harga terjangkau.
              </p>

              {/* Highlights 2x2 compact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {storeHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0f4c81] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="sm"
                  className="font-bold text-xs h-10 px-5 rounded-lg bg-[#0f4c81] hover:bg-[#0c3c66] text-white shadow-xs"
                >
                  <a
                    href="https://cctvpurwakarta.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Buka Website Ghitech
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </Button>

                <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#70CB97]" />
                  <span>Garansi Resmi &amp; Unit Original</span>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-blue-100 bg-[#f8fbfe] p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                  <div className="relative h-9 w-36">
                    <Image
                      src="/images/ghitech/ghitech.png"
                      alt="Ghitech CCTV Purwakarta"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-blue-100/70 text-[#0f4c81]">
                    Online Store
                  </span>
                </div>

                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Domain Resmi:</span>
                    <strong className="text-[#0f4c81] font-mono">cctvpurwakarta.com</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Kategori:</span>
                    <span className="font-medium text-gray-700">Paket Kamera &amp; Aksesori</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Layanan:</span>
                    <span className="font-medium text-gray-700">Survei &amp; Pasang Cepat</span>
                  </div>
                </div>

                <a
                  href="https://cctvpurwakarta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold py-2.5 px-4 rounded-lg bg-[#0f4c81] text-white hover:bg-[#0c3c66] transition-colors"
                >
                  Kunjungi cctvpurwakarta.com
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
