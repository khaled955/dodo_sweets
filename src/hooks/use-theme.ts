"use client";

import { use } from "react";
import { ThemeContext } from "@/lib/providers/theme-provider";

export function useTheme() {
  return use(ThemeContext);
}
