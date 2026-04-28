"use client";

import { Package, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";
import { ProductsTable } from "@/components/dashboard/products-table";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/hooks/use-locale";
import { useGetCakes } from "@/hooks/use-get-cakes";

export default function DashboardPage() {
  // Context
  const { locale, t } = useLocale();

  // Queries
  const { data: cakes } = useGetCakes(locale);

  const stats = [
    {
      title: t("dashboard.totalProducts"),
      value: cakes?.length ?? "—",
      icon: <Package className="size-5" />,
      trend: "Updated just now",
    },
    {
      title: t("dashboard.totalRevenue"),
      value: "EGP 48,200",
      icon: <DollarSign className="size-5" />,
      trend: "+12% from last month",
    },
    {
      title: t("dashboard.totalOrders"),
      value: "384",
      icon: <ShoppingCart className="size-5" />,
      trend: "+8% from last week",
    },
    {
      title: t("dashboard.bestSellers"),
      value: "Red Velvet",
      icon: <TrendingUp className="size-5" />,
      trend: "Top performer",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <SectionHeading
          title={t("dashboard.title")}
          subtitle={`${t("dashboard.welcome")} 👋`}
        />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <StatsCard key={s.title} {...s} />
        ))}
      </div>

      {/* Products table */}
      <div className="space-y-4">
        <SectionHeading title={t("dashboard.products")} />
        <ProductsTable />
      </div>
    </div>
  );
}
