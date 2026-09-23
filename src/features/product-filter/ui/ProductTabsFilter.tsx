"use client";

import React, { useState } from "react";
import { ProductItem } from "@/shared/types";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui/tabs";
import { Building2, Home, Eye, Cpu, ShieldCheck, Briefcase } from "lucide-react";

interface ProductTabsFilterProps {
  products: ProductItem[];
}

export function ProductTabsFilter({ products }: ProductTabsFilterProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const homeOfficeProducts = products.filter(
    (p) => p.category === "office" && p.subCategory === "home_office"
  );
  const securityOfficeProducts = products.filter(
    (p) => p.category === "office" && p.subCategory === "security_office"
  );
  const officeProducts = products.filter((p) => p.category === "office");
  const babycamProducts = products.filter((p) => p.category === "babycam");
  const smartboxProducts = products.filter((p) => p.category === "smartbox");

  return (
    <div className="w-full">
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <TabsList className="h-auto p-1.5 flex flex-wrap gap-1 bg-secondary-bg border border-border rounded-xl">
            <TabsTrigger
              value="all"
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg"
            >
              Semua Paket ({products.length})
            </TabsTrigger>
            <TabsTrigger
              value="office"
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg"
            >
              <Briefcase className="w-4 h-4 text-secondary" />
              Paket Office ({officeProducts.length})
            </TabsTrigger>
            <TabsTrigger
              value="babycam"
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg"
            >
              <Eye className="w-4 h-4 text-secondary" />
              Baby Cam (1 - 8 Kamera) ({babycamProducts.length})
            </TabsTrigger>
            <TabsTrigger
              value="smartbox"
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg"
            >
              <Cpu className="w-4 h-4 text-secondary" />
              SAMTEK Smartbox ({smartboxProducts.length})
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab 1: Semua Paket */}
        <TabsContent value="all" className="mt-0 space-y-16">
          {/* Section Home Office */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded bg-[#E8F8F0] text-secondary">
                <Home className="w-4 h-4 text-secondary" />
              </span>
              <h3 className="text-xl font-extrabold text-foreground">
                Home Office Packages
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-textMuted mb-6 max-w-2xl">
              Paket pengawasan esensial dan praktis untuk ruko, rumah kantor, studio kerja, dan usaha ritel mandiri (2 hingga 6 Kamera).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeOfficeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Section Security Office */}
          <div className="pt-8 border-t border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded bg-[#E8F8F0] text-secondary">
                <Building2 className="w-4 h-4 text-secondary" />
              </span>
              <h3 className="text-xl font-extrabold text-foreground">
                Security Office &amp; Enterprise Packages
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-textMuted mb-6 max-w-2xl">
              Sistem CCTV terpadu berstandar industri untuk gedung perkantoran, perbankan, kawasan pergudangan, dan korporasi (8 hingga 32 Kamera).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityOfficeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Section Baby Cam */}
          <div className="pt-8 border-t border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded bg-[#E8F8F0] text-secondary">
                <Eye className="w-4 h-4 text-secondary" />
              </span>
              <h3 className="text-xl font-extrabold text-foreground">
                Smart Baby Cam &amp; Wireless Packages (1 - 8 Kamera)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-textMuted mb-6 max-w-2xl">
              Kamera pintar nirkabel tanpa instalasi kabel yang rumit. Dilengkapi pan-tilt 360°, audio dua arah, dan notifikasi deteksi tangisan bayi/gerakan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {babycamProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Section Smartbox */}
          <div className="pt-8 border-t border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded bg-[#E8F8F0] text-secondary">
                <Cpu className="w-4 h-4 text-secondary" />
              </span>
              <h3 className="text-xl font-extrabold text-foreground">
                SAMTEK AI Smartbox Appliance
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-textMuted mb-6 max-w-2xl">
              Perangkat komputasi cerdas berbasis edge processor untuk menyuntikkan kapabilitas analitik AI ke CCTV eksisting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {smartboxProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Office (Satu tab office, beda section: Home Office & Security Office) */}
        <TabsContent value="office" className="mt-0 space-y-14">
          {/* Section 1: Home Office */}
          <div className="bg-secondary-bg/40 p-6 sm:p-8 rounded-3xl border border-border">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-1.5 rounded-lg bg-white text-secondary shadow-sm">
                <Home className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground">
                  Home Office Packages
                </h3>
                <span className="text-xs text-secondary font-semibold">
                  Solusi Praktis Ruko &amp; Kantor Mandiri
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-brand-textMuted mb-6 max-w-2xl">
              Didesain khusus untuk efisiensi ruko, rumah kantor (SOHO), klinik, dan studio kerja dengan jumlah kamera 2 hingga 6 titik.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeOfficeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Section 2: Security Office */}
          <div className="bg-secondary-bg/40 p-6 sm:p-8 rounded-3xl border border-border">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-1.5 rounded-lg bg-white text-secondary shadow-sm">
                <Building2 className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground">
                  Security Office &amp; Enterprise Packages
                </h3>
                <span className="text-xs text-secondary font-semibold">
                  Skala Korporat, Gedung Perkantoran &amp; Industri
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-brand-textMuted mb-6 max-w-2xl">
              Sistem pengawasan skala menengah hingga enterprise dengan kapasitas 8 hingga 32 titik kamera, manajemen penyimpanan NVR aman, dan kesiapan integrasi control room.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityOfficeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab 3: Baby Cam (1 Kamera sampai 8 Kamera) */}
        <TabsContent value="babycam" className="mt-0">
          <div className="mb-6">
            <h3 className="text-xl font-extrabold text-foreground">
              Paket Smart Baby Cam &amp; Wireless PTZ
            </h3>
            <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
              Tersedia pilihan 1 kamera, 2 kamera, 4 kamera hingga 8 kamera untuk hunian keluarga, daycare, dan sekolah.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {babycamProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        {/* Tab 4: Smartbox */}
        <TabsContent value="smartbox" className="mt-0">
          <div className="mb-6">
            <h3 className="text-xl font-extrabold text-foreground">
              SAMTEK AI Smartbox Appliance
            </h3>
            <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
              Perangkat appliance cerdas untuk mentransformasi CCTV konvensional menjadi AI Camera.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartboxProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
