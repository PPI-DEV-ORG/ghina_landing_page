import React from "react";
import { Star } from "lucide-react";
import rawTestimonials from "@/data/testimonials.json";

interface TestimonialItem {
  quote: string;
  name: string;
  business: string;
  role: string;
}

export function TestimonialsSection() {
  const testimonials = rawTestimonials as TestimonialItem[];

  return (
    <section className="py-20 sm:py-24 bg-[#F0F5F4] border-b border-[#E2ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#426A5A] mb-2">
            Testimoni Nyata
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Kepuasan Pelanggan Adalah Bukti Dedikasi Kami
          </h2>
          <p className="text-sm sm:text-base text-[#5A6B66] mt-3 leading-relaxed">
            Pengalaman nyata para pelaku usaha dan mitra yang mempercayakan kebutuhan pengawasan sistem keamanan kepada CV. Ghina Multiprima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E2ECE8] p-6 shadow-xs hover:border-[#70CB97]/70 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#70CB97] mb-4">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2ECE8]">
                <div className="font-bold text-sm text-[#111827]">{item.name}</div>
                <div className="text-[11px] font-semibold text-[#426A5A]">
                  {item.business}
                </div>
                <div className="text-[10px] text-gray-400">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
