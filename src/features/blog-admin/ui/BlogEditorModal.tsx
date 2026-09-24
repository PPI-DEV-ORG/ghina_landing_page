"use client";

import React, { useState, useEffect } from "react";
import { BlogPost } from "@/shared/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { Upload, Loader2, Image as ImageIcon } from "lucide-react";

import { RichTextEditor } from "./RichTextEditor";

interface BlogEditorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  post: BlogPost | null;
  adminPassword: string;
  onSaved: () => void;
}

export function BlogEditorModal({
  open,
  onOpenChange,
  post,
  adminPassword,
  onSaved,
}: BlogEditorModalProps) {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    slug: "",
    category: "Keamanan & Tips",
    excerpt: "",
    content: "",
    author: "Tim CV. Ghina Multiprima",
    image: "/images/places/warehouse.jpg",
    readTime: "5 min baca",
  });

  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (post) {
      setFormData(post);
    } else {
      setFormData({
        title: "",
        slug: "",
        category: "Keamanan & Tips",
        excerpt: "",
        content: "",
        author: "Tim CV. Ghina Multiprima",
        image: "/images/places/warehouse.jpg",
        readTime: "5 min baca",
      });
    }
    setError("");
  }, [post, open]);

  // Auto-generate slug from title if creating new
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    if (!post) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      setFormData((prev) => ({ ...prev, title, slug: generatedSlug }));
    } else {
      setFormData((prev) => ({ ...prev, title }));
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset input agar file yang sama bisa dipilih ulang jika perlu
    e.target.value = "";

    // 1. Validasi Ukuran File (< 2 MB)
    const MAX_SIZE = 2 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      setError(
        `Ukuran file terlalu besar (${(file.size / (1024 * 1024)).toFixed(2)} MB). Maksimal ukuran file adalah 2 MB.`
      );
      return;
    }

    // 2. Validasi Format File (PNG, JPG, JPEG, WEBM)
    const allowedExtensions = [".png", ".jpg", ".jpeg", ".webm"];
    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    const allowedMimes = ["image/png", "image/jpeg", "image/jpg", "video/webm", "image/webm"];

    if (!allowedExtensions.includes(ext) && !allowedMimes.includes(file.type.toLowerCase())) {
      setError(
        "Format file tidak didukung. Hanya file PNG, JPG, JPEG, dan WEBM yang diperbolehkan."
      );
      return;
    }

    setUploading(true);
    setError("");

    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "x-admin-password": adminPassword,
        },
        body: data,
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Gagal mengupload file media.");
      }

      setFormData((prev) => ({ ...prev, image: result.url }));
    } catch (err: any) {
      setError(err.message || "Gagal upload file media.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const isEdit = !!post?.id;
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch("/api/blogs", {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": adminPassword,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Gagal menyimpan artikel blog.");
      }

      onSaved();
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat menyimpan.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-5xl max-h-[92vh] overflow-y-auto p-4 sm:p-7">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            {post ? "Edit Artikel Blog" : "Tulis Artikel Blog Baru"}
          </DialogTitle>
        </DialogHeader>

        {error && (
          <div className="p-3 text-xs bg-rose-50 text-rose-800 border border-rose-200 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-secondary mb-1">
              Judul Artikel *
            </label>
            <Input
              required
              value={formData.title || ""}
              onChange={handleTitleChange}
              placeholder="Contoh: Tips Merawat Kamera CCTV Agar Berumur Panjang"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-secondary mb-1">
                Slug URL (otomatis) *
              </label>
              <Input
                required
                value={formData.slug || ""}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, slug: e.target.value }))
                }
                placeholder="tips-merawat-kamera-cctv"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-secondary">
                  Kategori *
                </label>
                {formData.category && !["Keamanan & Tips", "Teknologi & VMS", "Layanan & Maintenance", "Edukasi CCTV", "Berita Perusahaan"].includes(formData.category) && (
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium border border-emerald-200">
                    Kategori Kustom
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <select
                  value={
                    ["Keamanan & Tips", "Teknologi & VMS", "Layanan & Maintenance", "Edukasi CCTV", "Berita Perusahaan"].includes(formData.category || "")
                      ? formData.category
                      : "__custom__"
                  }
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "__custom__") {
                      // Switch to custom: keep current if not empty or initialize empty
                      if (["Keamanan & Tips", "Teknologi & VMS", "Layanan & Maintenance", "Edukasi CCTV", "Berita Perusahaan"].includes(formData.category || "")) {
                        setFormData((p) => ({ ...p, category: "" }));
                      }
                    } else {
                      setFormData((p) => ({ ...p, category: val }));
                    }
                  }}
                  className="w-full h-10 px-3 rounded-lg border border-border bg-white text-xs sm:text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary cursor-pointer"
                >
                  <option value="Keamanan & Tips">Keamanan &amp; Tips</option>
                  <option value="Teknologi & VMS">Teknologi &amp; VMS</option>
                  <option value="Layanan & Maintenance">Layanan &amp; Maintenance</option>
                  <option value="Edukasi CCTV">Edukasi CCTV</option>
                  <option value="Berita Perusahaan">Berita Perusahaan</option>
                  <option value="__custom__">+ Tulis Kategori Sendiri...</option>
                </select>

                {/* Muncul jika memilih 'Tulis Kategori Sendiri' atau kategori bukan dari opsi default */}
                {(!["Keamanan & Tips", "Teknologi & VMS", "Layanan & Maintenance", "Edukasi CCTV", "Berita Perusahaan"].includes(formData.category || "")) && (
                  <Input
                    required
                    value={formData.category || ""}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, category: e.target.value }))
                    }
                    placeholder="Ketik nama kategori baru di sini..."
                    className="h-9 text-xs sm:text-sm bg-[#F8FAFA] border-border"
                    autoFocus
                  />
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-secondary mb-1">
                Penulis (Author) *
              </label>
              <Input
                required
                value={formData.author || ""}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, author: e.target.value }))
                }
                placeholder="Tim CV. Ghina Multiprima"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-secondary mb-1">
                Estimasi Waktu Baca
              </label>
              <Input
                value={formData.readTime || ""}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, readTime: e.target.value }))
                }
                placeholder="5 min baca"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-secondary mb-1">
              Gambar Artikel (Path Lokal atau Upload File)
            </label>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-secondary">
                Media Gambar / Video Header Artikel *
              </label>
              <span className="text-[11px] text-brand-textMuted">
                Format: PNG, JPG, JPEG, WEBM (Maks. 2 MB)
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Input
                value={formData.image || ""}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, image: e.target.value }))
                }
                placeholder="/images/blog/nama-file.jpg atau klik Upload dari PC"
              />
              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 bg-secondary-bg hover:bg-border text-secondary rounded-lg text-xs font-semibold shrink-0 border border-border">
                {uploading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Upload className="w-4 h-4" />
                )}
                Upload
                Upload dari PC
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.webm,image/png,image/jpeg,video/webm"
                  className="hidden"
                  onChange={handleFileUpload}
                  disabled={uploading}
                />
              </label>
            </div>
            {formData.image && (
              <p className="text-[11px] text-brand-textMuted mt-1">
                Path gambar tersimpan: <span className="font-mono">{formData.image}</span>
                Lokasi file tersimpan: <span className="font-mono text-emerald-700 font-semibold">{formData.image}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-secondary mb-1">
              Ringkasan Singkat (Excerpt) *
            </label>
            <Textarea
              required
              rows={2}
              value={formData.excerpt || ""}
              onChange={(e) =>
                setFormData((p) => ({ ...p, excerpt: e.target.value }))
              }
              placeholder="Deskripsi singkat artikel yang tampil di katalog blog..."
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-secondary mb-1">
              Konten Lengkap Artikel (Format Visual / Rich Text Editor) *
            </label>
            <RichTextEditor
              value={formData.content || ""}
              onChange={(newHtml) =>
                setFormData((p) => ({ ...p, content: newHtml }))
              }
              placeholder="Tuliskan isi artikel lengkap di sini. Anda bisa mengubah warna font, bold, italic, heading, list, dll..."
              minHeight="340px"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Batal
            </Button>
            <Button type="submit" variant="default" disabled={saving}>
              {saving ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Menyimpan...
                </span>
              ) : post ? (
                "Simpan Perubahan"
              ) : (
                "Publikasikan Artikel"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

