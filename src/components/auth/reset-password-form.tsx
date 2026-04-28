"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocale } from "@/hooks/use-locale";

export function ResetPasswordForm() {
  // Context
  const { t } = useLocale();

  // State
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Functions
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success(t("auth.resetPassword.successMessage"));
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-2xl font-bold text-foreground">{t("auth.resetPassword.title")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t("auth.resetPassword.subtitle")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label htmlFor="new-pass" className="text-sm font-medium text-foreground">
            {t("auth.resetPassword.password")}
          </label>
          <Input
            id="new-pass"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <label htmlFor="confirm-new-pass" className="text-sm font-medium text-foreground">
            {t("auth.resetPassword.confirmPassword")}
          </label>
          <Input
            id="confirm-new-pass"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            required
            startIcon={<Lock className="size-4" />}
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          {t("auth.resetPassword.submit")}
        </Button>
      </form>
    </div>
  );
}
