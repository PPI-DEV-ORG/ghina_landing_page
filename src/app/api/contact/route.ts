import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, company, subject, question } =
      await req.json();

    if (!name || !phone || !email || !question) {
      return NextResponse.json(
        { message: "Semua kolom wajib (*) harus diisi." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || "contact@samtek.id";

    // If SMTP credentials are configured, send email via nodemailer
    if (user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from: `"CV. Ghina Web Inquiry" <${user}>`,
        to: receiver,
        subject: `[Web Inquiry] ${subject || "Permintaan Penawaran CCTV"} - ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;">
            <h2 style="color: #426A5A; margin-top: 0;">Permintaan Penawaran Baru</h2>
            <p>Ada pesan masuk dari formulir website CV. Ghina Multiprima:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 8px; font-weight: bold; width: 140px; border-bottom: 1px solid #edf2f7;">Nama:</td>
                <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Telepon / WA:</td>
                <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Perusahaan:</td>
                <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${company || "-"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Subjek:</td>
                <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;" valign="top">Pesan/Kebutuhan:</td>
                <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${question.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 12px;">
              Formulir Website CV. Ghina Multiprima
            </div>
          </div>
        `,
      });
    } else {
      // Log for development / fallback when SMTP is not configured
      console.log("Contact form submission received:", {
        name,
        phone,
        email,
        company,
        subject,
        question,
      });
    }

    return NextResponse.json({
      message: "Pesan Anda berhasil terkirim. Terima kasih!",
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: error.message || "Gagal mengirim pesan" },
      { status: 500 }
    );
  }
}

