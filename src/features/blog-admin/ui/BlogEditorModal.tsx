"use client";

import React, { useState, useEffect } from "react";
import { BlogPost } from "@/shared/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { Upload, Loader2, Image as ImageIcon, CheckCircle2, X } from "lucide-react";

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
    image: "",
    readTime: "5 min baca",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  // Selected local file to be uploaded upon publishing
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  useEffect(() => {
    if (post) {
      setFormData(post);
      setPreviewUrl(post.image || "");
      setSelectedFile(null);
    } else {
      setFormData({
        title: "",
        slug: "",
        category: "Keamanan & Tips",
        excerpt: "",
        content: "",
        author: "Tim CV. Ghina Multiprima",
        image: "",
        readTime: "5 min baca",
      });
      setPreviewUrl("");
      setSelectedFile(null);
    }
    setError("");
  }, [post, open]);

  // Clean up object URL when component unmounts or changes
  useEffect(() => {
    return () => {
      if (previewUrl && previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

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

  const handleFileSelect = (file: File) => {
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

    setError("");
    setSelectedFile(file);

    // Create local object URL for preview without uploading to server yet
    if (previewUrl && previewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }
    const localUrl = URL.createObjectURL(file);
    setPreviewUrl(localUrl);
    setFormData((prev) => ({ ...prev, image: localUrl }));
  };

  const handleRemoveImage = () => {
    if (previewUrl && previewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl("");
    setFormData((prev) => ({ ...prev, image: "" }));
  };

  const handleCancel = () => {
    handleRemoveImage();
    onOpenChange(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      let finalImageUrl = formData.image || "";

      // Only upload to server when user actually clicks "Publikasikan Artikel" / "Simpan Perubahan"
      if (selectedFile) {
        const uploadData = new FormData();
        uploadData.append("file", selectedFile);

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "x-admin-password": adminPassword,
          },
          body: uploadData,
        });

        const uploadResult = await uploadRes.json();
        if (!uploadRes.ok) {
          throw new Error(uploadResult.message || "Gagal mengunggah file gambar ke server.");
        }

        finalImageUrl = uploadResult.url;
      }

      const postPayload = {
        ...formData,
        image: finalImageUrl,
      };

      const isEdit = !!post?.id;
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch("/api/blogs", {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": adminPassword,
        },
        body: JSON.stringify(postPayload),
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

          {/* File Upload Component */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-secondary">
                Foto / Media Header Blog *
              </label>
              <span className="text-[11px] text-brand-textMuted">
                PNG, JPG, JPEG, WEBM (Maks. 2 MB)
              </span>
            </div>

            {previewUrl ? (
              /* Uploaded Media Preview & Status Card */
              <div className="relative rounded-xl border border-border bg-[#F8FAFA] p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden bg-white border border-border shrink-0">
                  <img
                    src={previewUrl}
                    alt="Preview Header"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 text-center sm:text-left space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>File siap digunakan (lokal)</span>
                  </div>
                  <p className="text-[11px] text-brand-textMuted truncate font-mono">
                    {selectedFile ? selectedFile.name : previewUrl}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-border text-foreground hover:bg-secondary-bg hover:border-secondary/40 transition-colors shadow-xs">
                    <Upload className="w-3.5 h-3.5 text-secondary" />
                    Ganti File
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg,.webm,image/png,image/jpeg,video/webm"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleFileSelect(e.target.files[0]);
                          e.target.value = "";
                        }
                      }}
                    />
                  </label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleRemoveImage}
                    className="h-8 px-2.5 text-xs text-rose-600 border-rose-200 hover:bg-rose-50 hover:text-rose-700"
                    title="Hapus media ini"
                  >
                    <X className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ) : (
              /* Drag & Drop Upload Zone */
              <label
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    handleFileSelect(e.dataTransfer.files[0]);
                  }
                }}
                className="relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border-2 border-dashed border-border bg-[#F8FAFA]/80 hover:bg-white hover:border-secondary hover:shadow-xs transition-all cursor-pointer group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-bg group-hover:bg-[#E2ECE8] flex items-center justify-center mb-3 text-secondary transition-colors">
                  <Upload className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">
                    Klik untuk upload atau drag and drop
                  </p>
                  <p className="text-xs text-brand-textMuted">
                    Mendukung format PNG, JPG, JPEG, atau WEBM (maksimal 2 MB)
                  </p>
                </div>

                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.webm,image/png,image/jpeg,video/webm"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileSelect(e.target.files[0]);
                      e.target.value = "";
                    }
                  }}
                />
              </label>
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
              onClick={handleCancel}
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

