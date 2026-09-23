import { NextRequest, NextResponse } from "next/server";
import { getBlogs, saveBlogs } from "@/shared/lib/storage";
import { BlogPost } from "@/shared/types";

function verifyPassword(req: NextRequest): boolean {
  const adminPass = process.env.BLOG_ADMIN_PASSWORD || "ghinaadmin2026";
  const authHeader = req.headers.get("x-admin-password");
  return authHeader === adminPass;
}

export async function GET() {
  const blogs = getBlogs();
  return NextResponse.json(blogs);
}

export async function POST(req: NextRequest) {
  if (!verifyPassword(req)) {
    return NextResponse.json(
      { message: "Akses ditolak. Password admin salah." },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const blogs = getBlogs();

    const newPost: BlogPost = {
      id: `blog-${Date.now()}`,
      slug:
        body.slug ||
        body.title
          ?.toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-") ||
        `post-${Date.now()}`,
      title: body.title || "Judul Artikel",
      excerpt: body.excerpt || "",
      content: body.content || "",
      category: body.category || "Keamanan & Tips",
      author: body.author || "Tim PT Ghina Multi Prima",
      date: new Date().toISOString().split("T")[0],
      image: body.image || "/images/places/warehouse.jpg",
      readTime: body.readTime || "5 min baca",
    };

    blogs.unshift(newPost);
    saveBlogs(blogs);

    return NextResponse.json(
      { message: "Artikel berhasil ditambahkan", post: newPost },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Gagal membuat artikel" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  if (!verifyPassword(req)) {
    return NextResponse.json(
      { message: "Akses ditolak. Password admin salah." },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const blogs = getBlogs();

    const index = blogs.findIndex((b) => b.id === body.id);
    if (index === -1) {
      return NextResponse.json(
        { message: "Artikel tidak ditemukan" },
        { status: 404 }
      );
    }

    blogs[index] = {
      ...blogs[index],
      ...body,
    };

    saveBlogs(blogs);

    return NextResponse.json({
      message: "Artikel berhasil diperbarui",
      post: blogs[index],
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Gagal memperbarui artikel" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  if (!verifyPassword(req)) {
    return NextResponse.json(
      { message: "Akses ditolak. Password admin salah." },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "ID artikel wajib disertakan" },
        { status: 400 }
      );
    }

    let blogs = getBlogs();
    const initialLen = blogs.length;
    blogs = blogs.filter((b) => b.id !== id);

    if (blogs.length === initialLen) {
      return NextResponse.json(
        { message: "Artikel tidak ditemukan" },
        { status: 404 }
      );
    }

    saveBlogs(blogs);

    return NextResponse.json({ message: "Artikel berhasil dihapus" });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Gagal menghapus artikel" },
      { status: 500 }
    );
  }
}

