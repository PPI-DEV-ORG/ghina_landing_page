import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const galleryBase = path.join(process.cwd(), "public", "images", "gallery");
    const photosDir = path.join(galleryBase, "photos");
    const videosDir = path.join(galleryBase, "videos");

    const imageExts = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
    const videoExts = [".mp4", ".webm", ".mov"];

    let photos: string[] = [];
    let videos: string[] = [];

    if (fs.existsSync(photosDir)) {
      photos = fs
        .readdirSync(photosDir)
        .filter((file) => imageExts.includes(path.extname(file).toLowerCase()))
        .sort()
        .map((file) => `/images/gallery/photos/${file}`);
    }

    if (fs.existsSync(videosDir)) {
      videos = fs
        .readdirSync(videosDir)
        .filter((file) => videoExts.includes(path.extname(file).toLowerCase()))
        .sort()
        .map((file) => `/images/gallery/videos/${file}`);
    }

    return NextResponse.json({ photos, videos });
  } catch (error) {
    console.error("Error reading gallery directories:", error);
    return NextResponse.json({ photos: [], videos: [] }, { status: 500 });
  }
}
