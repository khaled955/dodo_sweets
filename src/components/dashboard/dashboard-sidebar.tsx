"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Package, ShoppingCart,
  Users, Settings, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils/tailwind-merge";
import type { MessageKey } from "@/lib/providers/locale-provider";

interface SidebarItem {
  labelKey: MessageKey;
  href: string;
  icon: React.ReactNode;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { labelKey: "dashboard.overview", href: "/dashboard", icon: <LayoutDashboard className="size-4.5" /> },
  { labelKey: "dashboard.products", href: "/dashboard/products", icon: <Package className="size-4.5" /> },
  { labelKey: "dashboard.orders", href: "/dashboard/orders", icon: <ShoppingCart className="size-4.5" /> },
  { labelKey: "dashboard.customers", href: "/dashboard/customers", icon: <Users className="size-4.5" /> },
  { labelKey: "dashboard.settings", href: "/dashboard/settings", icon: <Settings className="size-4.5" /> },
];

interface DashboardSidebarProps {
  onClose?: () => void;
}

export function DashboardSidebar({ onClose }: DashboardSidebarProps) {
  // Context
  const { t } = useLocale();

  // Navigation
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-e border-border bg-sidebar">
      <div className="flex items-center justify-between px-5 py-4">
        <Logo />
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="size-4.5" />
          </Button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-2">
        <ul className="space-y-0.5" role="list">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                  )}
                >
                  {item.icon}
                  {t(item.labelKey)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
