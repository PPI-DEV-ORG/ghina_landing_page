import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { formatDate } from "@/shared/lib/utils";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full border border-border hover:border-primary/50 hover:shadow-cardHover transition-all duration-300">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary-bg">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary-bg text-brand-textMuted font-mono text-sm">
            Ghina Security Blog
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="brand">{post.category}</Badge>
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-brand-textMuted mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-secondary" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-secondary" />
            {post.readTime}
          </span>
        </div>

        <h3 className="font-bold text-lg text-foreground group-hover:text-brand-textSecondary transition-colors line-clamp-2 mb-2 leading-snug">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-sm text-brand-textMuted line-clamp-3 mb-6 flex-1 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="pt-4 border-t border-border flex items-center justify-between text-xs mt-auto">
          <span className="flex items-center gap-1.5 text-brand-textMuted font-medium">
            <User className="w-3.5 h-3.5 text-secondary" />
            {post.author}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary transition-colors"
          >
            Baca Selengkapnya
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

