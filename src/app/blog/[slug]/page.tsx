import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogs } from "@/shared/lib/storage";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { formatDate } from "@/shared/lib/utils";
import { SITE_CONFIG } from "@/shared/config/site";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const blogs = getBlogs();
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) {
    return { title: "Artikel Tidak Ditemukan — PT Ghina Multi Prima" };
  }
  return {
    title: `${post.title} — PT Ghina Multi Prima`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const blogs = getBlogs();
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts
  const relatedPosts = blogs.filter((b) => b.id !== post.id).slice(0, 2);

  return (
    <article className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Blog
          </Link>
        </div>

        {/* Header metadata */}
        <div className="space-y-4 mb-8">
          <Badge variant="brand">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-brand-textMuted pt-2 border-y border-border py-3">
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <User className="w-3.5 h-3.5 text-secondary" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-secondary" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-secondary" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border mb-10 shadow-sm bg-secondary-bg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Excerpt Lead */}
        <p className="text-lg sm:text-xl font-medium text-secondary leading-relaxed mb-8 border-l-4 border-primary pl-4 py-1 italic bg-secondary-bg/30 rounded-r-lg">
          {post.excerpt}
        </p>

        {/* Content Body */}
        <div className="prose max-w-none text-foreground text-sm sm:text-base leading-relaxed space-y-5">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n- ").map((item) => item.replace("- ", ""));
              return (
                <ul key={index} className="list-disc pl-5 space-y-1.5 text-brand-textPrimary">
                  {items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-gray-700">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Consultation Callout Box */}
        <div className="my-14 p-6 sm:p-8 rounded-2xl bg-secondary-bg border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-foreground">
              Butuh Konsultasi Pemasangan CCTV untuk Fasilitas Anda?
            </h4>
            <p className="text-xs sm:text-sm text-brand-textMuted">
              Dapatkan survei gratis dan rekomendasi teknis terbaik dari PT Ghina Multi Prima.
            </p>
          </div>
          <Button asChild variant="whatsapp" className="shrink-0 font-bold">
            <a
              href={SITE_CONFIG.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Tanya Tim Teknis Kami
            </a>
          </Button>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 border-t border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Artikel Terkait Lainnya
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <div
                  key={related.id}
                  className="p-5 rounded-xl border border-border bg-white hover:border-primary/50 transition-all"
                >
                  <Badge variant="brand" className="mb-2">
                    {related.category}
                  </Badge>
                  <h4 className="font-bold text-sm text-foreground line-clamp-2 hover:text-secondary">
                    <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                  </h4>
                  <p className="text-xs text-brand-textMuted line-clamp-2 mt-2">
                    {related.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

