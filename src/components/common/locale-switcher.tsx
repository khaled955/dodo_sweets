"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";

export function LocaleSwitcher() {
  // Context
  const { locale, setLocale } = useLocale();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      aria-label="Switch language"
      className="gap-1.5 font-medium"
    >
      <Globe className="size-4" />
      {locale === "en" ? "العربية" : "English"}
    </Button>
  );
}
