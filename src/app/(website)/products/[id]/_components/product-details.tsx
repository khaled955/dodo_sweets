"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  Star,
  ArrowLeft,
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProductGrid } from "@/components/products/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCardSkeleton } from "@/components/ui/skeleton";
import { useGetCakes } from "@/hooks/use-get-cakes";
import { useLocale } from "@/hooks/use-locale";

type ProductDetailsClientProps = {
  productId: string;
};

export default function ProductDetailsClient({
  productId,
}: ProductDetailsClientProps) {
  // Context
  const { locale, t } = useLocale();

  // State
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Queries
  const { data: cakes, isLoading } = useGetCakes(locale);

  // Variables
  const cake = cakes?.find((c) => c.ID === Number(productId));
  const hasDiscount = Boolean(cake?.NewPrice);

  // Functions
  function handleAddToCart() {
    toast.success(t("common.addedToCart"), {
      description: `${quantity}x ${cake?.Name}`,
    });
  }

  function handleWishlist() {
    toast(t("common.addedToWishlist"), {
      description: cake?.Name,
      icon: "♥",
    });
  }

  if (isLoading) {
    return (
      <Container className="pt-28 pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ProductCardSkeleton />

          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 rounded bg-muted animate-pulse" />
            ))}
          </div>
        </div>
      </Container>
    );
  }

  if (!cake) {
    return (
      <Container className="pt-28 pb-20 text-center">
        <p className="text-lg font-medium text-muted-foreground">
          {t("common.noProducts")}
        </p>

        <Button asChild className="mt-6">
          <Link href="/">{t("common.backHome")}</Link>
        </Button>
      </Container>
    );
  }

  const images = [cake.Image, cake.Image, cake.Image];

  return (
    <main className="pt-20">
      <Container className="py-12">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          {t("common.backHome")}
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted">
              <Image
                src={images[selectedImage]}
                alt={cake.Name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {hasDiscount && (
                <span className="absolute inset-s-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {t("product.sale")}
                </span>
              )}
            </div>

            <div className="mt-4 flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImage(i)}
                  className={`relative size-20 overflow-hidden rounded-xl border-2 transition-colors ${
                    selectedImage === i ? "border-primary" : "border-border"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}

              <span className="text-sm text-muted-foreground">
                (124 Reviews)
              </span>
            </div>

            <h1 className="font-serif text-4xl font-bold text-foreground">
              {cake.Name}
            </h1>

            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl font-bold text-primary">
                {t("product.currency")}{" "}
                {hasDiscount ? cake.NewPrice : cake.Price}
              </span>

              {hasDiscount && (
                <span className="text-lg text-muted-foreground line-through">
                  {t("product.currency")} {cake.Price}
                </span>
              )}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                The Experience
              </p>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cake.Description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Artisanal", "Nut Free", "Freshly Baked"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-foreground">
                {t("product.quantity")}
              </p>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="size-4" />
                </Button>

                <span className="w-8 text-center font-semibold text-foreground">
                  {quantity}
                </span>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="size-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button size="lg" onClick={handleAddToCart} className="gap-2">
                <ShoppingBag className="size-5" />
                {t("product.addToCart")}
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleWishlist}
                className="gap-2"
              >
                <Heart className="size-5" />
                {t("product.addToWishlist")}
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-border p-3">
                <Truck className="size-5 text-primary" />

                <p className="text-xs font-medium text-foreground">
                  {t("product.fastDelivery")}
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-border p-3">
                <ShieldCheck className="size-5 text-primary" />

                <p className="text-xs font-medium text-foreground">
                  {t("product.qualityGuaranteed")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <section className="mt-20">
          <SectionHeading
            title={t("product.relatedProducts")}
            className="mb-8"
          />

          <ProductGrid limit={4} />
        </section>
      </Container>
    </main>
  );
}
