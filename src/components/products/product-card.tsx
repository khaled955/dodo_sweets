"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils/tailwind-merge";
import type { Cake } from "@/lib/types/cake";

interface ProductCardProps {
  cake: Cake;
  className?: string;
}

export function ProductCard({ cake, className }: ProductCardProps) {
  // Context
  const { t } = useLocale();

  // Variables
  const hasDiscount = Boolean(cake.NewPrice);

  // Functions
  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    toast.success(t("common.addedToCart"), {
      description: cake.Name,
    });
  }

  function handleWishlist(e: React.MouseEvent) {
    e.preventDefault();
    toast(t("common.addedToWishlist"), {
      description: cake.Name,
      icon: "♥",
    });
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("group", className)}
    >
      <Link href={`/products/${cake.ID}`} className="block">
        <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-brand">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <Image
              src={cake.Image}
              alt={cake.Name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Wishlist button */}
            <button
              onClick={handleWishlist}
              aria-label={t("product.addToWishlist")}
              className="absolute end-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground"
            >
              <Heart className="size-4" />
            </button>

            {/* Sale badge */}
            {hasDiscount && (
              <span className="absolute start-3 top-3 rounded-full bg-rose px-2.5 py-0.5 text-xs font-semibold text-white">
                {t("product.sale")}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="p-4">
            <div className="mb-1 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={cn("size-3", i < 4 ? "fill-gold text-gold" : "text-muted-foreground")} />
              ))}
            </div>

            <h3 className="font-serif text-base font-semibold text-foreground line-clamp-1">
              {cake.Name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
              {cake.Description}
            </p>

            <div className="mt-3 flex items-center justify-between">
              {/* Price */}
              <div className="flex items-baseline gap-2">
                {hasDiscount ? (
                  <>
                    <span className="text-base font-bold text-primary">
                      {t("product.currency")} {cake.NewPrice}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {cake.Price}
                    </span>
                  </>
                ) : (
                  <span className="text-base font-bold text-foreground">
                    {t("product.currency")} {cake.Price}
                  </span>
                )}
              </div>

              {/* Add to cart */}
              <Button
                size="sm"
                onClick={handleAddToCart}
                className="gap-1.5"
              >
                <ShoppingBag className="size-3.5" />
                {t("product.quickAdd")}
              </Button>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
