"use client";

import { useState } from "react";
import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LocaleSwitcher } from "@/components/common/locale-switcher";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { useLocale } from "@/hooks/use-locale";

export function DashboardTopbar() {
  // Context
  const { t } = useLocale();

  // State
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      <header className="flex h-14 items-center justify-between border-b border-border bg-background px-4 lg:px-6">
        {/* Mobile sidebar trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileSidebarOpen(true)}
        >
          <Menu className="size-5" />
        </Button>

        {/* Search */}
        <div className="hidden w-72 sm:block">
          <Input placeholder={t("dashboard.search")} className="h-8 text-xs" />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 ms-auto">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="size-4.5" />
          </Button>
          <LocaleSwitcher />
          <ThemeToggle />
          <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            A
          </div>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-50 flex lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative z-10 flex h-full">
            <DashboardSidebar onClose={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
