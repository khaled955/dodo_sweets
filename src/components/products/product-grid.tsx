"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/product-card";
import { ProductCardSkeleton } from "@/components/ui/skeleton";
import { useLocale } from "@/hooks/use-locale";
import { useGetCakes } from "@/hooks/use-get-cakes";
import { AlertCircle, PackageOpen, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface ProductGridProps {
  limit?: number;
}

export function ProductGrid({ limit }: ProductGridProps) {
  // Context
  const { locale, t } = useLocale();

  // Queries
  const { data: cakes, isLoading, isError, refetch } = useGetCakes(locale);

  // Variables
  const displayed = limit ? cakes?.slice(0, limit) : cakes;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: limit ?? 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <AlertCircle className="size-12 text-destructive" />
        <p className="text-base font-medium text-foreground">{t("common.error")}</p>
        <Button variant="outline" onClick={() => refetch()} className="gap-2">
          <RefreshCw className="size-4" />
          {t("common.retry")}
        </Button>
      </div>
    );
  }

  if (!displayed?.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <PackageOpen className="size-12 text-muted-foreground" />
        <p className="text-base font-medium text-muted-foreground">{t("common.noProducts")}</p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {displayed.map((cake) => (
        <motion.div key={cake.ID} variants={itemVariants}>
          <ProductCard cake={cake} />
        </motion.div>
      ))}
    </motion.div>
  );
}
