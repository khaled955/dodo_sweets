"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Heart, Search, Menu, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LocaleSwitcher } from "@/components/common/locale-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { useLocale } from "@/hooks/use-locale";
import type { NavItem } from "@/lib/types/nav";

const NAV_ITEMS: NavItem[] = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.shop", href: "/shop" },
  { labelKey: "nav.collections", href: "/collections" },
  { labelKey: "nav.about", href: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLocale();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 glass border-b border-glass-border shadow-sm">
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
            {/* Login — desktop/tablet */}
            <Button asChild variant="outline" size="sm" className="hidden rounded-full px-4 sm:flex">
              <Link href="/login">{t("auth.login.submit")}</Link>
            </Button>

            {/* Icon actions */}
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="size-4.5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label={t("common.wishlist")}>
              <Heart className="size-4.5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label={t("common.cart")}>
              <ShoppingBag className="size-4.5" />
            </Button>

            {/* Dashboard icon */}
            <Button variant="ghost" size="icon" asChild aria-label="Dashboard">
              <Link href="/dashboard">
                <LayoutDashboard className="size-4.5" />
              </Link>
            </Button>

            {/* Theme + locale — desktop/tablet */}
            <div className="hidden items-center gap-1 sm:flex">
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
