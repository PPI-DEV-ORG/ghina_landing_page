import React from "react";
import { getBlogs } from "@/shared/lib/storage";
import { AdminBlogClient } from "./AdminBlogClient";
import { Lock } from "lucide-react";

export const metadata = {
  title: "Admin Portal — Manajemen Blog PT Ghina Multi Prima",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminBlogPage() {
  const blogs = getBlogs();

  return (
    <div className="bg-secondary-bg min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-secondary mb-2">
            <Lock className="w-3.5 h-3.5 text-primary" />
            Portal Terproteksi
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Manajemen Konten Blog & Berita
          </h1>
          <p className="text-sm text-brand-textMuted mt-1">
            Tambah artikel baru, edit konten, atau hapus artikel. Data langsung disimpan dalam file lokal JSON di server.
          </p>
        </div>

        <AdminBlogClient initialBlogs={blogs} />
      </div>
    </div>
  );
}

