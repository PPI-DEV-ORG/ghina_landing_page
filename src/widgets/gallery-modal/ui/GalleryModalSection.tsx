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
import { Camera, Eye, Images, Play, Video as VideoIcon } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  url: string;
}

export function GalleryModalSection() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (Array.isArray(data.photos)) setPhotos(data.photos);
          if (Array.isArray(data.videos)) setVideos(data.videos);
        }
      })
      .catch((err) => console.error("Failed to load gallery items:", err));
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
              Galeri Pekerjaan &amp; Dokumentasi Nyata
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B66] mt-3 leading-relaxed">
              Melihat dedikasi teknisi dan engineer CV. Ghina Multiprima dalam instalasi rapi, penarikan kabel standar industri, serta pengujian sistem CCTV di lapangan.
            </p>
          </div>

          {/* Modal Trigger Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-bold text-xs sm:text-sm h-11 px-6 rounded-xl bg-[#152E26] hover:bg-[#426A5A] text-white shadow-sm flex items-center gap-2 self-start md:self-auto">
                <Images className="w-4 h-4 text-[#70CB97]" />
                Buka Semua Galeri ({photos.length} Foto &bull; {videos.length} Video)
              </Button>
            </DialogTrigger>

            {/* Modal Dialog Content with 2 Sections / Tabs */}
            <DialogContent className="max-w-5xl w-[95vw] p-6 sm:p-8 max-h-[88vh] overflow-y-auto rounded-2xl bg-white border border-[#E2ECE8]">
              <DialogHeader className="mb-4 pb-4 border-b border-[#E2ECE8]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <DialogTitle className="text-xl sm:text-2xl font-extrabold text-[#111827] flex items-center gap-2.5">
                      <Images className="w-6 h-6 text-[#426A5A]" />
                      Dokumentasi Pekerjaan Teknisi di Lapangan
                    </DialogTitle>
                    <p className="text-xs sm:text-sm text-[#5A6B66] mt-1">
                      Koleksi foto dan video otentik proses instalasi, pengkabelan conduit, dan kalibrasi sistem surveillance.
                    </p>
                  </div>

                  {/* 2 Tabs: Foto & Video */}
                  <div className="inline-flex items-center p-1 bg-[#F0F5F4] rounded-xl border border-[#E2ECE8] self-start sm:self-auto shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveTab("photos")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        activeTab === "photos"
                          ? "bg-white text-[#152E26] shadow-xs"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <Images className="w-3.5 h-3.5 text-[#70CB97]" />
                      Foto ({photos.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("videos")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        activeTab === "videos"
                          ? "bg-white text-[#152E26] shadow-xs"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <VideoIcon className="w-3.5 h-3.5 text-[#70CB97]" />
                      Video ({videos.length})
                    </button>
                  </div>
                </div>
              </DialogHeader>

              {/* SECTION 1: PHOTOS GRID */}
              {activeTab === "photos" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 animate-in fade-in-50 duration-200">
                  {photos.map((src, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedMedia({ type: "image", url: src })}
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
              )}

              {/* SECTION 2: VIDEOS GRID */}
              {activeTab === "videos" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in-50 duration-200">
                  {videos.map((src, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedMedia({ type: "video", url: src })}
                      className="group relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E2ECE8] bg-black shadow-xs hover:border-[#70CB97] hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                    >
                      <video
                        src={src}
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-white/90 text-[#152E26] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-[#152E26] ml-0.5" />
                        </div>
                        <span className="text-white text-xs font-semibold px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-xs">
                          Putar Video {idx + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Preview Cards on Page (Hybrid: First 3 Photos + 1 Video Preview) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {photos.slice(0, 3).map((src, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMedia({ type: "image", url: src })}
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

          {/* Video Preview card */}
          {videos.length > 0 && (
            <div
              onClick={() => setSelectedMedia({ type: "video", url: videos[0] })}
              className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#E2ECE8] bg-black shadow-xs hover:border-[#70CB97] hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              <video
                src={videos[0]}
                muted
                playsInline
                className="w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-xs text-white text-xs font-semibold">
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Lihat Video</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox / Video Player Dialog */}
      {selectedMedia && (
        <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent className="max-w-4xl w-[95vw] p-3 sm:p-5 bg-white rounded-2xl border border-[#E2ECE8]">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={selectedMedia.url}
                  alt="Dokumentasi Full Size"
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
