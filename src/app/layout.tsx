import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { QueryProvider } from "@/lib/providers/query-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { LocaleProvider } from "@/lib/providers/locale-provider";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DodoSweets — Fine Patisserie",
    template: "%s | DodoSweets",
  },
  description: "Where every bite feels like a celebration. Artisan sweets & patisserie delivered to your door.",
  keywords: ["sweets", "patisserie", "chocolates", "cakes", "artisan", "luxury"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* lang/dir are set dynamically by LocaleProvider on the client */
    <html lang="en" suppressHydrationWarning className={`${notoSerif.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <LocaleProvider>
            <QueryProvider>
              {children}
              <Toaster richColors position="top-right" />
            </QueryProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
