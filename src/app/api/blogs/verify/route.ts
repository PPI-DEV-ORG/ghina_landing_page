import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const adminPass = process.env.BLOG_ADMIN_PASSWORD || "ghinaadmin2026";

    if (password === adminPass) {
      return NextResponse.json({ success: true, message: "Autentikasi berhasil" });
    }

    return NextResponse.json(
      { success: false, message: "Password admin tidak cocok." },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Terjadi kesalahan" },
      { status: 500 }
    );
  }
}

