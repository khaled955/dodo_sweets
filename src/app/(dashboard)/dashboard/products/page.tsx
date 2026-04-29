"use client";

import { Package, Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";

export default function ProductsPage() {
  const { t } = useLocale();

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <SectionHeading
          title={t("dashboard.products")}
          subtitle={t("dashboard.productsDesc")}
        />
        <Button className="shrink-0 gap-2">
          <Plus className="size-4" />
          Add Product
        </Button>
      </div>

      {/* Empty state */}
      <div className="rounded-2xl border border-border bg-card p-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Package className="size-8" />
          </div>
          <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
            No products yet
          </h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {t("dashboard.productsDesc")}
          </p>
          <Button className="mt-6 gap-2">
            <Plus className="size-4" />
            Add your first product
          </Button>
        </div>
      </div>
    </div>
  );
}
