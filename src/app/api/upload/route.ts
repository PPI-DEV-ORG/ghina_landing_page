import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function verifyPassword(req: NextRequest): boolean {
  const adminPass = process.env.BLOG_ADMIN_PASSWORD || "ghinaadmin2026";
  const authHeader = req.headers.get("x-admin-password");
  return authHeader === adminPass;
}

export async function POST(req: NextRequest) {
  if (!verifyPassword(req)) {
    return NextResponse.json(
      { message: "Akses ditolak. Password admin salah." },
      { status: 401 }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { message: "File tidak ditemukan" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Clean safe filename
    const ext = path.extname(file.name) || ".jpg";
    const baseName = path
      .basename(file.name, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-");
    const filename = `${baseName}-${Date.now()}${ext}`;
    const filePath = path.join(uploadsDir, filename);

    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      message: "Gambar berhasil diunggah",
      url: `/uploads/${filename}`,
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { message: error.message || "Gagal mengunggah file" },
      { status: 500 }
    );
  }
}

