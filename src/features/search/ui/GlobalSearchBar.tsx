"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Search, X, BookOpen, Video, ArrowRight, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Badge } from "@/shared/ui/badge";
import { SearchResultItem } from "@/shared/types";

export function GlobalSearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [allData, setAllData] = useState<{
    blogs: any[];
    products: any[];
  }>({ blogs: [], products: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Keyboard shortcut CMD+K or CTRL+K
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Fetch search index when modal opens
  useEffect(() => {
    if (open && allData.blogs.length === 0) {
      setLoading(true);
      fetch("/api/search")
        .then((res) => res.json())
        .then((data) => {
          setAllData({
            blogs: data.blogs || [],
            products: data.products || [],
          });
        })
        .catch((err) => console.error("Search fetch error", err))
        .finally(() => setLoading(false));
    }
  }, [open, allData.blogs.length]);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return { blogs: [], products: [] };
    const q = query.toLowerCase().trim();

    const matchedBlogs = allData.blogs
      .filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          b.category?.toLowerCase().includes(q)
      )
      .slice(0, 4);

    const matchedProducts = allData.products
      .filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.channels?.toLowerCase().includes(q)
      )
      .slice(0, 4);

    return { blogs: matchedBlogs, products: matchedProducts };
  }, [query, allData]);

  const totalResults =
    filteredResults.blogs.length + filteredResults.products.length;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg border border-[#E2ECE8] bg-[#F0F5F4]/70 hover:bg-[#F0F5F4] hover:border-[#70CB97]/60 text-[#5A6B66] hover:text-[#111827] text-xs font-medium transition-all group max-w-[210px] w-full"
      >
        <Search className="w-3.5 h-3.5 text-[#426A5A] group-hover:text-[#152E26] transition-colors shrink-0" />
        <span className="truncate">Cari paket / blog...</span>
        <kbd className="hidden sm:inline-block ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white border border-[#E2ECE8] font-mono text-gray-500">
          ⌘K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl p-0 overflow-hidden bg-white border-[#E2ECE8] shadow-xl rounded-2xl">
          <DialogHeader className="p-4 border-b border-[#E2ECE8]">
            <DialogTitle className="sr-only">Cari Produk dan Blog</DialogTitle>
            <div className="relative flex items-center pr-10">
              <Search className="absolute left-3 w-5 h-5 text-[#426A5A] pointer-events-none" />
              <Input
                placeholder="Cari CCTV 4 Channel, Home Office, SAMTEK VMS..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-4 h-12 text-sm border-0 focus-visible:ring-0 focus-visible:border-0 rounded-none placeholder:text-gray-400"
                autoFocus
              />
            </div>
          </DialogHeader>

          <div className="p-4 max-h-[60vh] overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center py-10 text-brand-textMuted text-sm gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-secondary" />
                Memuat data pencarian...
              </div>
            ) : !query.trim() ? (
              <div className="py-8 text-center text-sm text-brand-textMuted">
                Ketik kata kunci untuk mencari paket CCTV, smartbox, atau artikel blog Ghina Multi Prima.
              </div>
            ) : totalResults === 0 ? (
              <div className="py-8 text-center text-sm text-brand-textMuted">
                Tidak ada hasil ditemukan untuk &quot;{query}&quot;
              </div>
            ) : (
              <div className="space-y-6">
                {filteredResults.products.length > 0 && (
                  <div>
                    <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5 text-primary" />
                      Produk & Paket CCTV ({filteredResults.products.length})
                    </div>
                    <div className="space-y-2">
                      {filteredResults.products.map((item: any) => (
                        <Link
                          key={item.id}
                          href="/services"
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-secondary-bg/50 transition-all group"
                        >
                          <div>
                            <div className="text-sm font-semibold text-foreground group-hover:text-secondary">
                              {item.name}
                            </div>
                            <div className="text-xs text-brand-textMuted">
                              {item.channels} • {item.price}
                            </div>
                          </div>
                          <Badge variant="brand" className="text-[10px]">
                            Lihat Paket
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {filteredResults.blogs.length > 0 && (
                  <div>
                    <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-primary" />
                      Artikel & Panduan Blog ({filteredResults.blogs.length})
                    </div>
                    <div className="space-y-2">
                      {filteredResults.blogs.map((item: any) => (
                        <Link
                          key={item.id}
                          href={`/blog/${item.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-secondary-bg/50 transition-all group"
                        >
                          <div>
                            <div className="text-sm font-semibold text-foreground group-hover:text-secondary line-clamp-1">
                              {item.title}
                            </div>
                            <div className="text-xs text-brand-textMuted line-clamp-1">
                              {item.excerpt}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-brand-textMuted group-hover:text-secondary group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

