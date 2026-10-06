import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), "public", "images", "gallery");
    if (!fs.existsSync(galleryDir)) {
      return NextResponse.json({ images: [] });
    }

    const files = fs.readdirSync(galleryDir);
    // Filter only image extensions
    const imageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
    const images = files
      .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
      .map((file) => `/images/gallery/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}

