"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { BlogEditorModal } from "./BlogEditorModal";
import { formatDate } from "@/shared/lib/utils";
import {
  Plus,
  Pencil,
  Trash2,
  ExternalLink,
  Loader2,
  FileText,
} from "lucide-react";

interface BlogAdminTableProps {
  initialBlogs: BlogPost[];
  adminPassword: string;
}

export function BlogAdminTable({
  initialBlogs,
  adminPassword,
}: BlogAdminTableProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [editorOpen, setEditorOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreate = () => {
    setSelectedPost(null);
    setEditorOpen(true);
  };

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setEditorOpen(true);
  };

  const handleDelete = async (id: string, title: string) => {
    if (
      !confirm(`Apakah Anda yakin ingin menghapus artikel: "${title}"?`)
    ) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await fetch(`/api/blogs?id=${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-password": adminPassword,
        },
      });

      if (res.ok) {
        setBlogs((prev) => prev.filter((b) => b.id !== id));
      } else {
        const err = await res.json();
        alert(err.message || "Gagal menghapus artikel.");
      }
    } catch (e) {
      console.error(e);
      alert("Terjadi kesalahan saat menghapus artikel.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-border">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Daftar Artikel Blog ({blogs.length})
          </h2>
          <p className="text-xs text-brand-textMuted mt-1">
            Data tersimpan secara lokal di server dalam format JSON (<span className="font-mono">data/blogs.json</span>).
          </p>
        </div>
        <Button onClick={handleCreate} variant="default" className="font-bold">
          <Plus className="w-4 h-4 mr-1.5" />
          Tulis Blog Baru
        </Button>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-border">
          <FileText className="w-12 h-12 text-brand-textMuted mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-foreground">
            Belum ada artikel blog
          </h3>
          <p className="text-sm text-brand-textMuted mb-4">
            Mulai tulis artikel edukasi CCTV, tips keamanan, atau update SAMTEK VMS pertama Anda.
          </p>
          <Button onClick={handleCreate} variant="default">
            <Plus className="w-4 h-4 mr-1.5" />
            Tulis Artikel Pertama
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-foreground">
              <thead className="bg-secondary-bg text-secondary text-xs uppercase font-bold tracking-wider border-b border-border">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Artikel
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Kategori
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Penulis & Tanggal
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {blogs.map((post) => (
                  <tr
                    key={post.id}
                    className="hover:bg-secondary-bg/40 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-14 h-10 rounded-lg overflow-hidden bg-secondary-bg shrink-0">
                          {post.image ? (
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[9px] text-brand-textMuted">
                              No Pic
                            </div>
                          )}
                        </div>
                        <div>
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="font-semibold text-foreground hover:text-secondary line-clamp-1 flex items-center gap-1 group"
                          >
                            {post.title}
                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <span className="text-xs text-brand-textMuted font-mono">
                            /{post.slug}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="brand">{post.category}</Badge>
                    </td>
                    <td className="px-6 py-4 text-xs text-brand-textMuted">
                      <div className="font-medium text-foreground">
                        {post.author}
                      </div>
                      <div>{formatDate(post.date)}</div>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(post)}
                          className="h-8 px-2.5 text-xs text-secondary border-secondary/20 hover:bg-secondary-bg"
                        >
                          <Pencil className="w-3.5 h-3.5 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={deletingId === post.id}
                          onClick={() => handleDelete(post.id, post.title)}
                          className="h-8 px-2.5 text-xs text-rose-600 border-rose-200 hover:bg-rose-50"
                        >
                          {deletingId === post.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <>
                              <Trash2 className="w-3.5 h-3.5 mr-1" />
                              Hapus
                            </>
                          )}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <BlogEditorModal
        open={editorOpen}
        onOpenChange={setEditorOpen}
        post={selectedPost}
        adminPassword={adminPassword}
        onSaved={fetchBlogs}
      />
    </div>
  );
}

