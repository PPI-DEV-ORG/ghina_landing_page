"use client";

import React, { useState, useMemo } from "react";
import { BlogPost } from "@/shared/types";
import { BlogCard } from "@/entities/blog/ui/BlogCard";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Search, X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

interface BlogListClientProps {
  initialBlogs: BlogPost[];
}

const BLOGS_PER_PAGE = 6;

export function BlogListClient({ initialBlogs }: BlogListClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add("Semua");
    initialBlogs.forEach((b) => {
      if (b.category) set.add(b.category);
    });
    return Array.from(set);
  }, [initialBlogs]);

  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((post) => {
      const q = search.toLowerCase().trim();
      const matchSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q);

      const matchCategory =
        selectedCategory === "Semua" || post.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [initialBlogs, search, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);

  const paginatedBlogs = useMemo(() => {
    const startIndex = (activePage - 1) * BLOGS_PER_PAGE;
    return filteredBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);
  }, [filteredBlogs, activePage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Searchbar Above Grid & Category Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-secondary-bg/60 border border-border">
        {/* Searchbar */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
          <Input
            value={search}
            onChange={handleSearchChange}
            placeholder="Cari artikel, tips CCTV, analitik AI..."
            className="pl-10 pr-9 bg-white border-border"
          />
          {search && (
            <button
              onClick={() => {
                setSearch("");
                setCurrentPage(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-brand-textMuted hover:text-foreground"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary hover:bg-border/60 border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Blogs */}
      {filteredBlogs.length === 0 ? (
        <div className="py-20 text-center bg-secondary-bg/30 rounded-2xl border border-border">
          <p className="text-base font-semibold text-foreground">
            Tidak ada artikel yang cocok dengan &quot;{search}&quot;
          </p>
          <p className="text-xs text-brand-textMuted mt-1">
            Coba gunakan kata kunci lain atau pilih kategori &quot;Semua&quot;.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Left Arrow & Right Arrow Pagination */}
          {totalPages > 1 && (
            <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-brand-textMuted">
                Menampilkan halaman <span className="font-semibold text-foreground">{activePage}</span> dari{" "}
                <span className="font-semibold text-foreground">{totalPages}</span> ({filteredBlogs.length} total artikel)
              </div>

              <div className="flex items-center gap-2">
                {/* Left Arrow Button */}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={activePage <= 1}
                  onClick={() => {
                    setCurrentPage((p) => Math.max(1, p - 1));
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="h-10 px-3.5 text-xs font-bold text-foreground border-border hover:bg-secondary-bg hover:text-secondary disabled:opacity-40"
                  aria-label="Halaman Sebelumnya"
                >
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  Sebelumnya
                </Button>

                {/* Numbered Page Buttons */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }}
                      className={`h-10 w-10 rounded-xl text-xs font-bold transition-all ${
                        activePage === page
                          ? "bg-secondary text-white shadow-xs"
                          : "bg-white border border-border text-foreground hover:bg-secondary-bg hover:border-secondary/40"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Right Arrow Button */}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={activePage >= totalPages}
                  onClick={() => {
                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="h-10 px-3.5 text-xs font-bold text-foreground border-border hover:bg-secondary-bg hover:text-secondary disabled:opacity-40"
                  aria-label="Halaman Selanjutnya"
                >
                  Selanjutnya
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

