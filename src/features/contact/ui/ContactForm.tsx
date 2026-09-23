"use client";

import React, { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    question: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Gagal mengirim pesan.");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        subject: "",
        question: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message || "Terjadi kesalahan. Silakan hubungi kami via WhatsApp."
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-card">
      <h3 className="text-xl font-bold text-foreground mb-2">
        Kirim Pesan / Permintaan Penawaran
      </h3>
      <p className="text-sm text-brand-textMuted mb-6">
        Tim ahli CV. Ghina Multiprima akan merespons pertanyaan dan memberikan solusi spesifikasi kebutuhan Anda dalam 1x24 jam.
      </p>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Terima Kasih! Pesan Anda telah terkirim.</p>
            <p className="text-emerald-700 text-xs mt-1">
              Tim representatif kami akan segera menghubungi email atau WhatsApp Anda.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Pesan gagal dikirim</p>
            <p className="text-rose-700 text-xs mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-secondary mb-1.5">
              Nama Lengkap *
            </label>
            <Input
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Contoh: Budi Santoso"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-secondary mb-1.5">
              Nomor WhatsApp / Telepon *
            </label>
            <Input
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contoh: 081234567890"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-secondary mb-1.5">
              Alamat Email *
            </label>
            <Input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@perusahaan.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-secondary mb-1.5">
              Nama Perusahaan / Organisasi
            </label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Contoh: PT Sumber Makmur"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-secondary mb-1.5">
            Subjek / Kebutuhan *
          </label>
          <Input
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Contoh: Penawaran Pemasangan CCTV Pabrik / Lisensi SAMTEK"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-secondary mb-1.5">
            Pertanyaan / Detail Kebutuhan *
          </label>
          <Textarea
            name="question"
            required
            value={formData.question}
            onChange={handleChange}
            placeholder="Tuliskan estimasi jumlah titik kamera, lokasi pemasangan, atau konsultasi spesifikasi teknis..."
            rows={4}
          />
        </div>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          disabled={status === "loading"}
          className="w-full font-bold"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Mengirim Pesan...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Kirim Pertanyaan
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}

