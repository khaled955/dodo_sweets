"use client";

import { X, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LocaleSwitcher } from "@/components/common/locale-switcher";
import { useLocale } from "@/hooks/use-locale";
import type { NavItem } from "@/lib/types/nav";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const { t } = useLocale();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-y-0 inset-s-0 z-50 flex w-72 flex-col bg-background shadow-2xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo showSlogan />
              <Button variant="ghost" size="icon" onClick={onClose} aria-label={t("common.close")}>
                <X className="size-5" />
              </Button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="space-y-1" role="list">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                ))}

                {/* Dashboard link */}
                <li>
                  <Link
                    href="/dashboard"
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                  >
                    <LayoutDashboard className="size-4.5" />
                    {t("nav.dashboard")}
                  </Link>
                </li>
              </ul>

              {/* Login button */}
              <div className="mt-6">
                <Button asChild className="w-full rounded-xl" size="default">
                  <Link href="/login" onClick={onClose}>
                    {t("auth.login.submit")}
                  </Link>
                </Button>
              </div>
            </nav>

            {/* Footer — theme + locale */}
            <div className="flex items-center justify-between border-t border-border px-5 py-4">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
