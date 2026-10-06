"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import rawFaqs from "@/data/faqs.json";

interface FaqItem {
  q: string;
  a: string;
}

export function ServiceFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = rawFaqs as FaqItem[];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F0F5F4]/60 border-b border-[#E2ECE8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2ECE8] text-xs font-bold text-[#426A5A] mb-3 shadow-2xs">
            <MessageCircleQuestion className="w-4 h-4 text-[#70CB97]" />
            FAQ &amp; Informasi Layanan
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6B66] mt-2 leading-relaxed">
            Jawaban lengkap seputar sistem kamera, instalasi, akses pemantauan mobile, hingga garansi layanan.
          </p>
        </div>

        {/* Dropdown / Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border bg-white ${
                  isOpen
                    ? "border-[#70CB97] shadow-md ring-1 ring-[#70CB97]/30"
                    : "border-[#E2ECE8] hover:border-[#70CB97]/60 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#111827] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen
                        ? "bg-[#152E26] text-white rotate-180"
                        : "bg-[#F0F5F4] text-gray-500 hover:bg-[#E8F8F0] hover:text-[#152E26]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-[#E2ECE8]/70">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
