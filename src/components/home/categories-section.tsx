"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/hooks/use-locale";
import type { MessageKey } from "@/lib/providers/locale-provider";

interface Category {
  key: MessageKey;
  href: string;
  image: string;
  color: string;
}

const CATEGORIES: Category[] = [
  {
    key: "categories.cakes",
    href: "/shop?category=cakes",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
    color: "from-chocolate/60",
  },
  {
    key: "categories.cupcakes",
    href: "/shop?category=cupcakes",
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=400&q=80",
    color: "from-rose/60",
  },
  {
    key: "categories.chocolates",
    href: "/shop?category=chocolates",
    image: "https://images.unsplash.com/photo-1610450949065-1f2841536c88?w=400&q=80",
    color: "from-cocoa/60",
  },
  {
    key: "categories.cookies",
    href: "/shop?category=cookies",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80",
    color: "from-caramel/60",
  },
];

export function CategoriesSection() {
  // Context
  const { t } = useLocale();

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionHeading
            title={t("categories.title")}
            subtitle={t("categories.subtitle")}
          />
          <Link
            href="/shop"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex"
          >
            {t("categories.browseAll")} <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={cat.href} className="group block overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={t(cat.key)}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent`} />
                  <span className="absolute bottom-4 start-4 font-serif text-lg font-bold text-white">
                    {t(cat.key)}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
