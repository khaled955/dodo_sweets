"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Heart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LocaleSwitcher } from "@/components/common/locale-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils/tailwind-merge";
import type { NavItem } from "@/lib/types/nav";

const NAV_ITEMS: NavItem[] = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.shop", href: "/shop" },
  { labelKey: "nav.collections", href: "/collections" },
  { labelKey: "nav.about", href: "/about" },
];

export function Navbar() {
  // State
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Context
  const { t } = useLocale();

  // Effects
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "glass border-b border-glass-border shadow-sm"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Logo showSlogan={false} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Button asChild variant="outline" size="sm" className="hidden rounded-full px-4 sm:flex">
              <Link href="/login">{t("auth.login.submit")}</Link>
            </Button>
            <Button variant="ghost" size="icon" aria-label={t("common.cart")}>
              <Search className="size-4.5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label={t("common.wishlist")}>
              <Heart className="size-4.5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label={t("common.cart")}>
              <ShoppingBag className="size-4.5" />
            </Button>
            <div className="hidden sm:flex items-center gap-1">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
            {/* Mobile menu trigger */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={t("common.menu")}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
