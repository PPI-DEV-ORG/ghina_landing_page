"use client";

import React, { useState, useEffect } from "react";
import { BlogPost } from "@/shared/types";
import { BlogAdminTable } from "@/features/blog-admin/ui/BlogAdminTable";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/ui/card";
import { Lock, KeyRound, LogOut, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface AdminBlogClientProps {
  initialBlogs: BlogPost[];
}

export function AdminBlogClient({ initialBlogs }: AdminBlogClientProps) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check session storage
    const saved = sessionStorage.getItem("ghina_admin_pass");
    if (saved) {
      setPassword(saved);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setChecking(true);
    setError("");

    try {
      // Test the password against the API
      const res = await fetch("/api/blogs/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Password salah.");
      }

      sessionStorage.setItem("ghina_admin_pass", password);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message || "Gagal masuk. Periksa kembali password Anda.");
    } finally {
      setChecking(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("ghina_admin_pass");
    setPassword("");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center py-12">
        <Card className="max-w-md w-full border-border shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="w-14 h-14 rounded-2xl bg-secondary-bg text-secondary flex items-center justify-center mx-auto mb-4 border border-border">
              <KeyRound className="w-7 h-7 text-secondary" />
            </div>
            <CardTitle className="text-2xl font-extrabold text-foreground">
              Autentikasi Admin Blog
            </CardTitle>
            <CardDescription className="text-xs text-brand-textMuted pt-1">
              Halaman ini dilindungi. Masukkan password admin yang tersimpan di environment server (<span className="font-mono">.env</span>) untuk mengelola artikel blog.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-4">
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-secondary mb-1.5">
                  Password Admin
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password admin..."
                  required
                  autoFocus
                />
              </div>

              <Button
                type="submit"
                variant="secondary"
                disabled={checking}
                className="w-full font-bold"
              >
                {checking ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Memverifikasi...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Masuk ke Dashboard
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-5 py-3 rounded-xl text-emerald-900 text-xs">
        <div className="flex items-center gap-2 font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Sesi Admin Aktif. Perubahan akan disimpan ke <strong className="font-mono">data/blogs.json</strong>.</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="h-8 text-xs text-rose-600 border-rose-200 hover:bg-rose-50"
        >
          <LogOut className="w-3.5 h-3.5 mr-1" />
          Keluar
        </Button>
      </div>

      <BlogAdminTable
        initialBlogs={initialBlogs}
        adminPassword={password}
      />
    </div>
  );
}

