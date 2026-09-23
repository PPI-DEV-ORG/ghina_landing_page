import React from "react";
import Link from "next/link";
import { ProductItem } from "@/shared/types";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { Button } from "@/shared/ui/button";
import { ArrowRight, Video } from "lucide-react";

interface CatalogPreviewSectionProps {
  products: ProductItem[];
}

export function CatalogPreviewSection({ products }: CatalogPreviewSectionProps) {
  // Show a balanced selection of 4 packages on the landing page preview
  const featuredIds = [
    "prod-ho-4ch",
    "prod-sec-8ch",
    "prod-babycam-1",
    "prod-smartbox-edge",
  ];
  const previewProducts =
    products.filter((p) => featuredIds.includes(p.id)).length === 4
      ? featuredIds.map((id) => products.find((p) => p.id === id)!)
      : products.slice(0, 4);

  return (
    <section id="catalog" className="py-20 sm:py-24 bg-[#F0F5F4] border-b border-[#E2ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#426A5A] mb-2">
              Katalog Pilihan
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Paket CCTV Siap Pasang &amp; Bergaransi
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B66] mt-2 max-w-2xl leading-relaxed">
              Paket kamera CCTV Home Office, Security Office, dan Smart Baby Cam dengan garansi 1 tahun, gratis survei lokasi, serta sudah termasuk instalasi &amp; training teknisi.
            </p>
          </div>

          <Button asChild variant="outline" className="shrink-0 self-start md:self-auto font-bold h-11 px-6 rounded-lg border-[#E2ECE8] hover:bg-white text-xs sm:text-sm">
            <Link href="/services" className="flex items-center gap-2">
              Lihat Semua Paket Lengkap
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-brand-textMuted mb-3">
            Butuh kustomisasi jumlah kamera atau spesifikasi khusus gedung/pabrik?
          </p>
          <Button asChild variant="secondary" size="lg" className="font-bold">
            <Link href="/contact">
              Konsultasikan Rencana Pemasangan Anda
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

