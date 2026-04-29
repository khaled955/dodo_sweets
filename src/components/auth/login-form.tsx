"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocale } from "@/hooks/use-locale";

export function LoginForm() {
  // Context
  const { t } = useLocale();

  // State
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Functions
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Welcome back!", { description: "You have been signed in." });
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-2xl font-bold text-foreground">
          {t("auth.login.title")}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("auth.login.subtitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {t("auth.login.email")}
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="amryakout@yahoo.com"
            required
            autoComplete="email"
            startIcon={<Mail className="size-4" />}
          />
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              {t("auth.login.password")}
            </label>
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-primary hover:underline"
            >
              {t("auth.login.forgotPassword")}
            </Link>
          </div>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            autoComplete="current-password"
            startIcon={<Lock className="size-4" />}
            endIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            }
          />
        </div>

        {/* Remember me */}
        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="size-4 rounded border-border accent-primary"
          />
          {t("auth.login.rememberMe")}
        </label>

        <Button type="submit" className="w-full" size="lg">
          {t("auth.login.submit")}
        </Button>
      </form>

      {/* Social login */}
      <div className="space-y-4">
        <div className="relative text-center text-xs text-muted-foreground">
          <span className="relative z-10 bg-background px-3">{t("auth.login.orContinueWith")}</span>
          <hr className="absolute inset-x-0 top-1/2 border-border" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="gap-2">
            <svg className="size-4" viewBox="0 0 24 24" aria-hidden><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            {t("auth.login.google")}
          </Button>
          <Button variant="outline" className="gap-2">
            <svg className="size-4" viewBox="0 0 24 24" fill="#1877F2" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            {t("auth.login.facebook")}
          </Button>
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        {t("auth.login.noAccount")}{" "}
        <Link href="/register" className="font-semibold text-primary hover:underline">
          {t("auth.login.registerLink")}
        </Link>
      </p>
    </div>
  );
}
