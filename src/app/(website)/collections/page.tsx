"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/products/product-grid";
import { CategoriesSection } from "@/components/home/categories-section";
import { useLocale } from "@/hooks/use-locale";

export default function CollectionsPage() {
  const { t } = useLocale();

  return (
    <div className="pt-16">
      <CategoriesSection />
      <section className="pb-20">
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
    </div>
  );
}
