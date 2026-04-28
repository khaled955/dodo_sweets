"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocale } from "@/hooks/use-locale";

export function ForgotPasswordForm() {
  // Context
  const { t } = useLocale();

  // State
  const [email, setEmail] = useState("");

  // Functions
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success(t("auth.forgotPassword.successMessage"));
    setEmail("");
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-2xl font-bold text-foreground">{t("auth.forgotPassword.title")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t("auth.forgotPassword.subtitle")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label htmlFor="forgot-email" className="text-sm font-medium text-foreground">
            {t("auth.forgotPassword.email")}
          </label>
          <Input
            id="forgot-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("auth.forgotPassword.emailPlaceholder")}
            required
            startIcon={<Mail className="size-4" />}
          />
        </div>
        <Button type="submit" className="w-full" size="lg">
          {t("auth.forgotPassword.submit")}
        </Button>
      </form>

      <Link
        href="/login"
        className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        {t("auth.forgotPassword.backToLogin")}
      </Link>
    </div>
  );
}
