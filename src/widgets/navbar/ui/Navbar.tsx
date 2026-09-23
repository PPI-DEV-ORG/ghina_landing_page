"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/shared/config/site";
import { GlobalSearchBar } from "@/features/search/ui/GlobalSearchBar";
import { Button } from "@/shared/ui/button";
import { Menu, X, Phone, Lock } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full max-w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2ECE8]"
          : "bg-white border-b border-[#E2ECE8]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink min-w-0 pr-1">
            <div className="relative h-9 w-9 sm:h-11 sm:w-11 rounded-lg overflow-hidden flex items-center justify-center shrink-0 border border-[#E2ECE8] bg-white shadow-xs group-hover:border-[#70CB97] transition-colors">
              <Image
                src="/images/logo-light.jpg"
                alt="Logo CV. Ghina Multiprima"
                width={44}
                height={44}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <div className="min-w-0 flex flex-col justify-center">
              <span className="text-sm sm:text-base lg:text-lg font-extrabold tracking-tight text-[#111827] block leading-tight whitespace-nowrap">
                GHINA <span className="text-[#426A5A] font-bold">MULTIPRIMA</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#5A6B66] tracking-wide block leading-tight whitespace-nowrap">
                Solusi CCTV &amp; SAMTEK VMS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {SITE_CONFIG.navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-[13px] font-semibold rounded-md transition-colors ${
                    isActive
                      ? "text-[#152E26] bg-[#F0F5F4] font-bold"
                      : "text-gray-700 hover:text-[#426A5A] hover:bg-[#F0F5F4]/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center gap-3">
            <GlobalSearchBar />

            <Button asChild variant="whatsapp" size="sm" className="font-semibold text-xs h-9 px-4 rounded-lg shadow-xs">
              <a
                href={SITE_CONFIG.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Konsultasi Cepat</span>
              </a>
            </Button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-1.5 lg:hidden shrink-0">
            <GlobalSearchBar />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 flex items-center justify-center rounded-lg text-gray-700 hover:bg-[#F0F5F4] transition-colors border border-transparent hover:border-[#E2ECE8]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2ECE8] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in-50 duration-150">
          {SITE_CONFIG.navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[#F0F5F4] text-[#152E26] font-bold"
                    : "text-gray-700 hover:bg-[#F0F5F4]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#E2ECE8] space-y-2">
            <Button asChild variant="whatsapp" className="w-full justify-center text-sm font-semibold h-11">
              <a
                href={SITE_CONFIG.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Chat via WhatsApp
              </a>
            </Button>
            <Link
              href="/admin/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 text-xs text-gray-500 hover:text-[#426A5A] pt-1"
            >
              <Lock className="w-3 h-3" />
              Portal Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

