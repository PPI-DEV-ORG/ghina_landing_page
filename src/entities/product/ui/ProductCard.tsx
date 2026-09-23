import React from "react";
import Image from "next/image";
import { ProductItem } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { SITE_CONFIG } from "@/shared/config/site";
import { Check, ShieldCheck, Video, PhoneCall } from "lucide-react";

interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const waUrl = `${SITE_CONFIG.contact.whatsapp}&text=${encodeURIComponent(
    `Halo PT Ghina Multi Prima, saya ingin konsultasi dan pemesanan: ${product.name} (${product.price})`
  )}`;

  return (
    <div className="group bg-white rounded-2xl border border-[#E2ECE8] p-6 flex flex-col justify-between hover:border-[#70CB97]/70 hover:shadow-md transition-all duration-300">
      <div>
        {/* Top Channel & Category Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F0F5F4] text-[#426A5A] border border-[#E2ECE8]">
            <Video className="w-3.5 h-3.5 text-[#70CB97]" />
            {product.channels}
          </span>
          {product.badge && (
            <Badge variant="brand" className="font-semibold text-[11px] bg-[#E8F8F0] text-[#152E26] border-[#70CB97]/40">
              {product.badge}
            </Badge>
          )}
        </div>

        {/* High-Resolution Hardware Presentation */}
        <div className="relative w-full h-44 mb-4 rounded-xl bg-[#F0F5F4]/40 border border-[#E2ECE8]/70 flex items-center justify-center overflow-hidden group-hover:bg-[#F0F5F4]/80 transition-colors">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 group-hover:scale-[1.04] transition-transform duration-300"
          />
        </div>

        {/* Product Title & Short Overview */}
        <h3 className="font-bold text-base sm:text-lg text-[#111827] mb-1 leading-snug group-hover:text-[#426A5A] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Price Section */}
        <div className="mb-4 pb-4 border-b border-[#E2ECE8]">
          <div className="text-[11px] text-gray-500 font-medium">
            Mulai dari / Estimasi:
          </div>
          <div className="text-2xl font-extrabold text-[#152E26] tracking-tight">
            {product.price}
          </div>
        </div>

        {/* Inclusions Checklist */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#426A5A]">
            Paket Termasuk:
          </div>
          <ul className="space-y-2">
            {product.includes.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-gray-700 leading-normal"
              >
                <div className="mt-0.5 rounded-full p-0.5 bg-[#E8F8F0] text-[#152E26] shrink-0">
                  <Check className="w-3 h-3 text-[#426A5A] stroke-[3]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Clear Deliverable Note */}
        <div className="mb-4 rounded-lg bg-[#F0F5F4] border border-[#E2ECE8] p-2.5 flex items-center gap-2 text-[11px] text-[#426A5A] font-medium">
          <ShieldCheck className="w-4 h-4 text-[#70CB97] shrink-0" />
          <span>Sudah Termasuk Training Pemakaian &amp; Akomodasi Teknisi</span>
        </div>

        {/* Direct Action Button */}
        <Button asChild variant="default" className="w-full font-bold h-11 rounded-lg text-xs sm:text-sm">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Pesan &amp; Konsultasi Paket
          </a>
        </Button>
      </div>
    </div>
  );
}
