import React from "react";
import { ContactForm } from "@/features/contact/ui/ContactForm";
import { SITE_CONFIG } from "@/shared/config/site";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageSquare,
  Building,
} from "lucide-react";
import { Button } from "@/shared/ui/button";

export const metadata = {
  title: "Hubungi Kami — CV. Ghina Multiprima",
  description:
    "Konsultasikan kebutuhan pemasangan CCTV, pengadaan perangkat kamera, dan lisensi SAMTEK VMS bersama tim teknis CV. Ghina Multiprima.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-secondary-bg py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-secondary mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            Layanan Pelanggan & Konsultasi
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Hubungi CV. Ghina Multiprima
          </h1>
          <p className="text-base sm:text-lg text-brand-textMuted mt-4 leading-relaxed">
            Punya pertanyaan mengenai paket CCTV, instalasi perkantoran/pabrik, atau integrasi SAMTEK VMS? Kirimkan pesan atau hubungi kami langsung.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on the Left, Company Info & Map on the Right */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: My Company Info & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-secondary-bg rounded-2xl border border-border p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Kantor Pusat & Operasional
                  </span>
                  <h3 className="text-xl font-extrabold text-foreground mt-1">
                    CV. Ghina Multiprima
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1">
                    Spesialis CCTV, Jasa Pasang & Distributor Resmi SAMTEK VMS
                  </p>
                </div>

                <div className="space-y-4 text-xs text-foreground">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white border border-border text-secondary shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-secondary mb-0.5">Alamat:</div>
                      <p className="text-brand-textMuted leading-relaxed">
                        {SITE_CONFIG.contact.address}
                      </p>
                      <a
                        href={SITE_CONFIG.contact.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary hover:text-primary mt-1"
                      >
                        Buka Petunjuk Arah di Google Maps
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white border border-border text-secondary shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-secondary mb-0.5">WhatsApp / Telepon:</div>
                      <a
                        href={SITE_CONFIG.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm font-semibold text-foreground hover:text-secondary"
                      >
                        {SITE_CONFIG.contact.phoneDisplay}
                      </a>
                      <p className="text-[11px] text-brand-textMuted mt-0.5">
                        Respon cepat via WhatsApp chat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white border border-border text-secondary shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-secondary mb-0.5">Email Resmi:</div>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="font-mono text-sm font-semibold text-foreground hover:text-secondary"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white border border-border text-secondary shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-secondary mb-0.5">Jam Operasional:</div>
                      <p className="text-brand-textMuted">
                        Senin – Jumat: 08:30 – 17:30 WIB
                        <br />
                        Sabtu: 08:30 – 14:00 WIB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button asChild variant="whatsapp" className="w-full font-bold">
                    <a
                      href={SITE_CONFIG.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Chat WhatsApp Langsung
                    </a>
                  </Button>
                </div>
              </div>

              {/* Embedded Google Maps */}
              <div className="rounded-2xl border border-border overflow-hidden bg-secondary-bg aspect-[16/10] relative shadow-card">
                <iframe
                  src={SITE_CONFIG.contact.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi CV. Ghina Multiprima"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

