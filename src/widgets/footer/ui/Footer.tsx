import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/shared/config/site";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Lock,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-tertiary text-white border-t border-secondary/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-white/15 shadow-sm">
                <Image
                  src="/images/logo-dark.png"
                  alt="Logo CV. Ghina Multiprima"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white block">
                  GHINA <span className="text-primary">MULTIPRIMA</span>
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                  Security &amp; Surveillance Solutions
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Penyedia solusi terpadu pengadaan kamera CCTV, jasa instalasi berpengalaman, maintenance sistem keamanan, dan distributor resmi SAMTEK Video Management System.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-primary font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Berpengalaman sejak 2013</span>
            </div>
          </div>

          {/* Column 2: Layanan & Produk */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Layanan & Produk
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Paket CCTV Home Office (2 - 8 Channel)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Paket CCTV Security Office &amp; Enterprise
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Smart Baby Cam (1 - 8 Kamera)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Jasa Instalasi &amp; Pengkabelan Standar Industri
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Preventive Maintenance & Kontrak Servis
                </Link>
              </li>
              <li>
                <a
                  href="https://samtek.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                >
                  SAMTEK AI VMS Software
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigasi Cepat / Helpful Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Beranda (Home)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Tentang Kami (About)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Katalog Paket & Layanan
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog & Tips Keamanan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Hubungi Kami & Lokasi
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/blog"
                  className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  Admin Portal Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak & Alamat */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Kontak & Alamat Kantor
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a
                  href={SITE_CONFIG.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors leading-relaxed"
                >
                  {SITE_CONFIG.contact.address}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={SITE_CONFIG.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors font-mono"
                >
                  {SITE_CONFIG.contact.phoneDisplay} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-primary transition-colors font-mono"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-semibold"
                >
                  Buka di Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} CV. Ghina Multiprima. Seluruh hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-white transition-colors">
              Paket CCTV
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Artikel & Berita
            </Link>
            <a
              href="https://samtek.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              SAMTEK VMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

