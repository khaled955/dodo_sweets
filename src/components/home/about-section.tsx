"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/hooks/use-locale";

export function AboutSection() {
  // Context
  const { t } = useLocale();

  const stats = [
    { value: t("about.stat1Value"), label: t("about.stat1Label") },
    { value: t("about.stat2Value"), label: t("about.stat2Label") },
    { value: t("about.stat3Value"), label: t("about.stat3Label") },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=80"
                alt="Artisan patisserie kitchen"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -end-6 glass rounded-2xl p-5 shadow-brand">
              <div className="flex gap-6">
                {stats.slice(0, 2).map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-serif text-2xl font-bold gradient-text">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <SectionHeading
              badge={t("about.badge")}
              title={t("about.title")}
            />
            <p className="text-base leading-relaxed text-muted-foreground">
              {t("about.description")}
            </p>
            {/* Third stat */}
            <div className="inline-flex flex-col rounded-2xl border border-border bg-card p-5">
              <p className="font-serif text-3xl font-bold gradient-text">{stats[2].value}</p>
              <p className="text-sm text-muted-foreground">{stats[2].label}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
