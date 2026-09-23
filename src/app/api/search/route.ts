import { NextResponse } from "next/server";
import { getBlogs, getProducts } from "@/shared/lib/storage";

export async function GET() {
  const blogs = getBlogs();
  const products = getProducts();

  return NextResponse.json({
    blogs,
    products,
  });
}

