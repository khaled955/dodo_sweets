"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/products/product-grid";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";

export function FeaturedSection() {
  // Context
  const { t } = useLocale();

  return (
    <section className="bg-muted/40 py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionHeading
            badge={t("featured.badge")}
            title={t("featured.title")}
            subtitle={t("featured.subtitle")}
          />
          <Button asChild variant="outline" className="hidden shrink-0 sm:flex gap-2">
            <Link href="/shop">
              {t("common.seeAll")} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <ProductGrid limit={8} />
      </Container>
    </section>
  );
}
