"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, Phone, User, Camera } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocale } from "@/hooks/use-locale";

export function RegisterForm() {
  // Context
  const { t } = useLocale();

  // Ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State
  const [showPassword, setShowPassword] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", password: "", confirmPassword: "",
  });

  // Functions
  function handleField(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Account created!", { description: "Welcome to DodoSweets." });
  }

  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <h1 className="font-serif text-2xl font-bold text-foreground">{t("auth.register.title")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t("auth.register.subtitle")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Profile picture */}
        <div>
          <p className="mb-3 text-sm font-medium text-foreground">{t("auth.register.profilePicture")}</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="relative flex size-16 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-border bg-muted transition-colors hover:border-primary"
              aria-label={t("auth.register.uploadPhoto")}
            >
              {preview ? (
                <Image src={preview} alt="Preview" fill className="object-cover" />
              ) : (
                <Camera className="size-5 text-muted-foreground" />
              )}
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-sm font-medium text-primary hover:underline"
            >
              {t("auth.register.uploadPhoto")}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhoto}
            />
          </div>
        </div>

        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="text-sm font-medium text-foreground">{t("auth.register.firstName")}</label>
            <Input id="firstName" value={form.firstName} onChange={handleField("firstName")} placeholder={t("auth.register.firstNamePlaceholder")} required startIcon={<User className="size-4" />} />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="text-sm font-medium text-foreground">{t("auth.register.lastName")}</label>
            <Input id="lastName" value={form.lastName} onChange={handleField("lastName")} placeholder={t("auth.register.lastNamePlaceholder")} required />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label htmlFor="reg-email" className="text-sm font-medium text-foreground">{t("auth.register.email")}</label>
            <Input id="reg-email" type="email" value={form.email} onChange={handleField("email")} placeholder={t("auth.register.emailPlaceholder")} required startIcon={<Mail className="size-4" />} />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">{t("auth.register.phone")}</label>
            <Input id="phone" type="tel" value={form.phone} onChange={handleField("phone")} placeholder={t("auth.register.phonePlaceholder")} startIcon={<Phone className="size-4" />} />
          </div>
        </div>

        {/* Password + Confirm */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label htmlFor="reg-pass" className="text-sm font-medium text-foreground">{t("auth.register.password")}</label>
            <Input
              id="reg-pass"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleField("password")}
              placeholder="••••••••"
              required
              startIcon={<Lock className="size-4" />}
              endIcon={
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              }
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="confirm-pass" className="text-sm font-medium text-foreground">{t("auth.register.confirmPassword")}</label>
            <Input id="confirm-pass" type="password" value={form.confirmPassword} onChange={handleField("confirmPassword")} placeholder="••••••••" required startIcon={<Lock className="size-4" />} />
          </div>
        </div>

        {/* Terms */}
        <label className="flex cursor-pointer items-start gap-2.5 text-sm text-muted-foreground">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required className="mt-0.5 size-4 rounded border-border accent-primary" />
          <span>
            {t("auth.register.terms")}{" "}
            <Link href="#" className="text-primary hover:underline">{t("auth.register.termsLink")}</Link>{" "}
            {t("auth.register.and")}{" "}
            <Link href="#" className="text-primary hover:underline">{t("auth.register.privacyLink")}</Link>.
          </span>
        </label>

        <Button type="submit" className="w-full" size="lg">{t("auth.register.submit")}</Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        {t("auth.register.haveAccount")}{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">{t("auth.register.loginLink")}</Link>
      </p>

      {/* Social register */}
      <div className="space-y-4">
        <div className="relative text-center text-xs text-muted-foreground">
          <span className="relative z-10 bg-background px-3">{t("auth.register.orRegisterWith")}</span>
          <hr className="absolute inset-x-0 top-1/2 border-border" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="gap-2">
            <svg className="size-4" viewBox="0 0 24 24" aria-hidden><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            {t("auth.register.google")}
          </Button>
          <Button variant="outline" className="gap-2">
            <svg className="size-4" viewBox="0 0 24 24" aria-hidden fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            {t("auth.register.apple")}
          </Button>
        </div>
      </div>
    </div>
  );
}
