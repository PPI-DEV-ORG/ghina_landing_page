"use client";

import React, { useState, useMemo } from "react";
import { BlogPost } from "@/shared/types";
import { BlogCard } from "@/entities/blog/ui/BlogCard";
import { Input } from "@/shared/ui/input";
import { Search, X } from "lucide-react";

interface BlogListClientProps {
  initialBlogs: BlogPost[];
}

export function BlogListClient({ initialBlogs }: BlogListClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

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
      const matchSearch =
        search.trim() === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "Semua" || post.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [initialBlogs, search, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Searchbar Above Grid & Category Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-secondary-bg/60 border border-border">
        {/* Searchbar */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari artikel, tips CCTV, analitik AI..."
            className="pl-10 pr-9 bg-white border-border"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
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
              onClick={() => setSelectedCategory(cat)}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

