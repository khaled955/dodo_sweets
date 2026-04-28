"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/products/product-grid";
import { useLocale } from "@/hooks/use-locale";

export default function ShopPage() {
  const { t } = useLocale();

  return (
    <section className="pt-28 pb-20">
      <Container>
        <SectionHeading
          badge={t("featured.badge")}
          title={t("featured.title")}
          subtitle={t("featured.subtitle")}
          className="mb-10"
        />
        <ProductGrid />
      </Container>
    </section>
  );
}
