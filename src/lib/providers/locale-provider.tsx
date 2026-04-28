"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { CakeLocale } from "@/lib/types/cake";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

type Messages = typeof en;

/** All valid dot-notation keys that exist in en.json */
type Leaves<T extends Record<string, unknown>, P extends string = ""> = {
  [K in keyof T & string]: T[K] extends Record<string, unknown>
    ? Leaves<T[K], `${P}${K}.`>
    : `${P}${K}`;
}[keyof T & string];

export type MessageKey = Leaves<Messages>;

interface LocaleContextValue {
  locale: CakeLocale;
  dir: "ltr" | "rtl";
  t: (key: MessageKey) => string;
  setLocale: (locale: CakeLocale) => void;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  dir: "ltr",
  t: (k) => k,
  setLocale: () => {},
});

const messages: Record<CakeLocale, Messages> = { en, ar };

/* Resolves a dot-notation key like "nav.home" from the messages object */
function resolve(obj: Record<string, unknown>, path: string): string {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[key];
    return undefined;
  }, obj) as string ?? path;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // State
  const [locale, setLocaleState] = useState<CakeLocale>("en");

  // Effects
  useEffect(() => {
    const stored = (localStorage.getItem("locale") as CakeLocale) ?? "en";
    setLocaleState(stored);
    document.documentElement.lang = stored;
    document.documentElement.dir = stored === "ar" ? "rtl" : "ltr";
  }, []);

  // Functions
  const setLocale = useCallback((next: CakeLocale) => {
    setLocaleState(next);
    localStorage.setItem("locale", next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }, []);

  const t = useCallback(
    (key: MessageKey) => resolve(messages[locale] as unknown as Record<string, unknown>, key),
    [locale],
  );

  return (
    <LocaleContext value={{ locale, dir: locale === "ar" ? "rtl" : "ltr", t, setLocale }}>
      {children}
    </LocaleContext>
  );
}
