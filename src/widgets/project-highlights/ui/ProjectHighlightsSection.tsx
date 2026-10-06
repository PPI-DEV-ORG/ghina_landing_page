"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, CheckCircle2, ArrowRight, Eye, Play, Images, Video as VideoIcon } from "lucide-react";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import rawProjects from "@/data/projects.json";

interface ProjectMedia {
  type: "image" | "video";
  url: string;
}

interface ProjectItem {
  year: string;
  client: string;
  category: string;
  scope: string;
  badge: string;
  cover?: string;
  media?: ProjectMedia[];
}

export function ProjectHighlightsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeMedia, setActiveMedia] = useState<ProjectMedia | null>(null);
  const projects = rawProjects as ProjectItem[];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E2ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#426A5A] mb-2">
              Portofolio Rekayasa Proyek
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Jejak Pengalaman &amp; Proyek Pengerjaan
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B66] mt-3 leading-relaxed">
              Daftar rangkuman proyek nyata dengan dokumentasi lapangan (foto &amp; video) instalasi CCTV, infrastruktur IT, dan pengawasan industri yang telah kami selesaikan.
            </p>
          </div>

          <Button asChild variant="outline" className="border-[#E2ECE8] hover:bg-[#F0F5F4] text-xs font-bold h-10 px-4 self-start md:self-auto">
            <Link href="/contact" className="flex items-center gap-2">
              Konsultasikan Proyek Serupa
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#F0F5F4]/40 hover:bg-white rounded-2xl border border-[#E2ECE8] hover:border-[#70CB97]/80 overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Photo / Media Cover */}
                {proj.cover && (
                  <div
                    onClick={() => {
                      setSelectedProject(proj);
                      if (proj.media && proj.media.length > 0) {
                        setActiveMedia(proj.media[0]);
                      }
                    }}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900 cursor-pointer"
                  >
                    <Image
                      src={proj.cover}
                      alt={proj.client}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    {/* Media Badge Count */}
                    {proj.media && proj.media.length > 0 && (
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1.5">
                        {proj.media.some((m) => m.type === "video") ? (
                          <VideoIcon className="w-3.5 h-3.5 text-[#70CB97]" />
                        ) : (
                          <Images className="w-3.5 h-3.5 text-[#70CB97]" />
                        )}
                        <span>{proj.media.length} Dokumentasi</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#426A5A] bg-[#E8F8F0] px-2.5 py-0.5 rounded-full border border-[#70CB97]/30">
                      <Calendar className="w-3 h-3 text-[#70CB97]" />
                      {proj.year}
                    </span>
                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                      {proj.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-[#111827] mb-1 group-hover:text-[#426A5A] transition-colors leading-snug">
                    {proj.client}
                  </h3>
                  <div className="text-xs font-semibold text-[#152E26] mb-3">
                    {proj.category}
                  </div>

                  <p className="text-xs text-[#5A6B66] leading-relaxed line-clamp-3">
                    {proj.scope}
                  </p>
                </div>
              </div>

              {/* Card Footer: Action button to inspect media */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#E2ECE8]/70 flex items-center justify-between">
                  {proj.media && proj.media.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProject(proj);
                        setActiveMedia(proj.media![0]);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#426A5A] hover:text-[#152E26] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Lihat Foto &amp; Video ({proj.media.length})
                    </button>
                  ) : (
                    <span className="text-[11px] text-gray-500">Pengerjaan Selesai</span>
                  )}
                  <CheckCircle2 className="w-4 h-4 text-[#70CB97]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Inspection Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl w-[95vw] p-5 sm:p-7 bg-white rounded-2xl border border-[#E2ECE8]">
            <DialogHeader className="mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#E8F8F0] text-[#152E26]">
                  {selectedProject.badge}
                </span>
                <span className="text-xs text-gray-500">{selectedProject.year}</span>
              </div>
              <DialogTitle className="text-lg sm:text-xl font-extrabold text-[#111827] mt-1">
                {selectedProject.client} — Dokumentasi Proyek
              </DialogTitle>
              <p className="text-xs text-[#5A6B66]">{selectedProject.scope}</p>
            </DialogHeader>

            {/* Main Player / Active Media Viewer */}
            {activeMedia && (
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-black my-2 flex items-center justify-center">
                {activeMedia.type === "video" ? (
                  <video
                    src={activeMedia.url}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={activeMedia.url}
                    alt="Dokumentasi Proyek"
                    fill
                    className="object-contain"
                  />
                )}
              </div>
            )}

            {/* Thumbnails Picker if multiple items */}
            {selectedProject.media && selectedProject.media.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto py-2">
                {selectedProject.media.map((med, mIdx) => (
                  <button
                    key={mIdx}
                    type="button"
                    onClick={() => setActiveMedia(med)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      activeMedia?.url === med.url
                        ? "border-[#70CB97] ring-2 ring-[#70CB97]/30 scale-105"
                        : "border-gray-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    {med.type === "video" ? (
                      <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">
                        <Play className="w-4 h-4 fill-white" />
                      </div>
                    ) : (
                      <Image
                        src={med.url}
                        alt="Thumbnail"
                        fill
                        className="object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

