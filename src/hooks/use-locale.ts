"use client";

import { use } from "react";
import { LocaleContext } from "@/lib/providers/locale-provider";

export function useLocale() {
  return use(LocaleContext);
}
