"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ProductCardSkeleton } from "@/components/ui/skeleton";
import { useLocale } from "@/hooks/use-locale";
import { useGetCakes } from "@/hooks/use-get-cakes";

export function ProductsTable() {
  // Context
  const { locale, t } = useLocale();

  // Queries
  const { data: cakes, isLoading } = useGetCakes(locale);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-sm">
        <thead className="border-b border-border bg-muted/50">
          <tr>
            <th className="px-4 py-3 text-start font-medium text-muted-foreground">{t("dashboard.productId")}</th>
            <th className="px-4 py-3 text-start font-medium text-muted-foreground">{t("dashboard.productName")}</th>
            <th className="px-4 py-3 text-start font-medium text-muted-foreground">{t("dashboard.productPrice")}</th>
            <th className="px-4 py-3 text-end font-medium text-muted-foreground">{t("dashboard.actions")}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {cakes?.map((cake) => (
            <tr key={cake.ID} className="transition-colors hover:bg-muted/30">
              <td className="px-4 py-3 text-muted-foreground">#{cake.ID}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image src={cake.Image} alt={cake.Name} fill sizes="40px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{cake.Name}</p>
                    <p className="line-clamp-1 text-xs text-muted-foreground">{cake.Description}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 font-medium text-foreground">
                {t("product.currency")} {cake.NewPrice || cake.Price}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => toast.info(`Edit: ${cake.Name}`)}
                    aria-label={t("dashboard.edit")}
                  >
                    <Pencil className="size-3.5" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon-sm"
                    onClick={() => toast.error(`Delete: ${cake.Name}`)}
                    aria-label={t("dashboard.delete")}
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
