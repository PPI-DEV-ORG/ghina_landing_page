import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function ContactCtaSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#F0F5F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E2ECE8] p-8 sm:p-12 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F5F4] border border-[#E2ECE8] text-xs font-semibold text-[#426A5A]">
                <ShieldCheck className="w-4 h-4 text-[#70CB97]" />
                Konsultasi &amp; Survei Lokasi Gratis
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Rencanakan Sistem Keamanan Gedung &amp; Properti Anda
              </h2>

              <p className="text-sm sm:text-base text-[#5A6B66] leading-relaxed">
                Hubungi tim teknis PT Ghina Multi Prima sekarang. Kami siap membantu survei lokasi untuk menentukan titik pasang kamera optimal, penarikan jalur kabel efisien, serta simulasi demo software SAMTEK VMS.
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Button asChild size="lg" variant="whatsapp" className="font-bold h-12 px-6 rounded-lg text-xs sm:text-sm shadow-xs">
                  <a
                    href={SITE_CONFIG.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Chat WhatsApp Langsung ({SITE_CONFIG.contact.phoneDisplay})
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold h-12 px-6 rounded-lg text-xs sm:text-sm border-[#E2ECE8] hover:bg-[#F0F5F4]">
                  <Link href="/contact" className="flex items-center gap-2">
                    Form Permintaan Penawaran
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Office Fast Facts */}
            <div className="lg:col-span-5 bg-[#F0F5F4] rounded-2xl p-6 border border-[#E2ECE8] space-y-4">
              <h3 className="font-bold text-sm text-[#152E26] uppercase tracking-wide">
                Kantor Operasional &amp; Workshop
              </h3>

              <div className="space-y-3 text-xs text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#426A5A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {SITE_CONFIG.contact.address}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#426A5A] shrink-0" />
                  <span className="font-mono text-gray-900">{SITE_CONFIG.contact.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#426A5A] shrink-0" />
                  <span>Senin – Sabtu: 08:30 – 17:30 WIB</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E2ECE8]">
                <a
                  href={SITE_CONFIG.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#426A5A] hover:text-[#152E26] transition-colors inline-flex items-center gap-1"
                >
                  Buka Petunjuk Arah di Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
