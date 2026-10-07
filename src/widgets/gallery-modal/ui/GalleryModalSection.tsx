"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Camera, Eye, Images } from "lucide-react";

export function GalleryModalSection() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.images)) {
          setImages(data.images);
        }
      })
      .catch((err) => console.error("Failed to load gallery images:", err));
  }, []);

  return (
    <section className="py-20 bg-[#F0F5F4] border-b border-[#E2ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#426A5A] mb-2 flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-[#70CB97]" />
              Dokumentasi Lapangan
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Galeri Dokumentasi Pekerjaan
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B66] mt-3 leading-relaxed">
              Dokumentasi nyata hasil kerja tim teknisi dan engineer CV. Ghina Multiprima dalam penarikan kabel, instalasi kamera, dan commissioning di lapangan.
            </p>
          </div>

          {/* Modal Trigger Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-bold text-xs sm:text-sm h-11 px-6 rounded-xl bg-[#152E26] hover:bg-[#426A5A] text-white shadow-sm flex items-center gap-2 self-start md:self-auto">
                <Images className="w-4 h-4 text-[#70CB97]" />
                Buka Semua Galeri ({images.length})
              </Button>
            </DialogTrigger>

            {/* Modal Dialog Content */}
            <DialogContent className="max-w-5xl w-[95vw] p-6 sm:p-8 max-h-[88vh] overflow-y-auto rounded-2xl bg-white border border-[#E2ECE8]">
              <DialogHeader className="mb-4 pb-4 border-b border-[#E2ECE8]">
                <DialogTitle className="text-xl sm:text-2xl font-extrabold text-[#111827] flex items-center gap-2.5">
                  <Images className="w-6 h-6 text-[#426A5A]" />
                  Dokumentasi Lapangan
                </DialogTitle>
                <p className="text-xs sm:text-sm text-[#5A6B66] mt-1">
                  Koleksi foto otentik implementasi sistem surveillance CV. Ghina Multiprima.
                </p>
              </DialogHeader>

              {/* Grid Inside Modal: Pure Images */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(src)}
                    className="group relative aspect-square w-full rounded-xl overflow-hidden border border-[#E2ECE8] bg-gray-900 shadow-2xs hover:shadow-md hover:border-[#70CB97] transition-all cursor-pointer"
                  >
                    <Image
                      src={src}
                      alt={`Dokumentasi Lapangan ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-2 right-2 p-1.5 rounded-md bg-white/90 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Preview Cards on Page: Pure Images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {images.slice(0, 4).map((src, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(src)}
              className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#E2ECE8] bg-gray-900 shadow-xs hover:border-[#70CB97] hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <Image
                src={src}
                alt={`Dokumentasi ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/50 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs font-semibold">
                <Eye className="w-3.5 h-3.5" />
                <span>Perbesar</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Single Image Preview Dialog */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-[95vw] p-3 sm:p-4 bg-white rounded-2xl border border-[#E2ECE8]">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-black">
              <Image
                src={selectedImage}
                alt="Dokumentasi Full Size"
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
