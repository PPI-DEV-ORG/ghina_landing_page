import React from "react";
import { getBlogs } from "@/shared/lib/storage";
import { BlogListClient } from "./BlogListClient";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog & Wawasan Keamanan — CV. Ghina Multiprima",
  description:
    "Artikel, panduan instalasi CCTV, tips pemeliharaan kamera pengawas, dan pemanfaatan teknologi AI surveillance SAMTEK VMS.",
};

export default function BlogPage() {
  const blogs = getBlogs();

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-secondary-bg py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-secondary mb-4">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            Wawasan & Artikel Edukasi
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Pusat Informasi & Blog Keamanan
          </h1>
          <p className="text-base sm:text-lg text-brand-textMuted mt-4 leading-relaxed">
            Dapatkan panduan memilih CCTV, tips perawatan sistem pengawasan, dan berita seputar integrasi SAMTEK AI VMS langsung dari praktisi lapangan.
          </p>
        </div>
      </section>

      {/* Interactive Blog Grid with searchbar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogListClient initialBlogs={blogs} />
        </div>
      </section>
    </div>
  );
}

