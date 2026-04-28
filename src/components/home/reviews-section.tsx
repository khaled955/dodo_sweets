"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { useLocale } from "@/hooks/use-locale";

const REVIEWS = [
  {
    rating: 5,
    text: "The most exquisite chocolates I've ever tasted. The packaging was just as beautiful as the treats themselves. A truly premium experience.",
    author: "Eleanor V.",
    role: "Verified Gourmet",
    initials: "EV",
    color: "bg-rose",
  },
  {
    rating: 5,
    text: "Delivered a customized cake for my sister's birthday and it was the star of the night. Moist, perfectly balanced flavors, and stunning design.",
    author: "Julian R.",
    role: "Loyal Customer",
    initials: "JR",
    color: "bg-caramel",
  },
  {
    rating: 5,
    text: "DodoSweets has become my go-to for gifting. The artisanal quality and prompt delivery are unmatched in the city.",
    author: "Simon M.",
    role: "Food Enthusiast",
    initials: "SM",
    color: "bg-gold",
  },
];

export function ReviewsSection() {
  // Context
  const { t } = useLocale();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge={t("reviews.badge")}
          title={t("reviews.title")}
          center
          className="mx-auto mb-12 max-w-xl"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <GlassCard hover className="h-full">
                <Quote className="mb-4 size-6 text-primary/40" />
                {/* Stars */}
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`flex size-9 shrink-0 items-center justify-center rounded-full ${review.color} text-xs font-bold text-white`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
