"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/hooks/use-locale";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function HeroSection() {
  // Context
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-chocolate">
      {/* Background image — editorial chocolate sweets */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1600&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      <Container className="relative z-10 py-32">
        <div className="max-w-xl">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm"
          >
            <Sparkles className="size-3.5 text-gold" />
            {t("hero.badge")}
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            {t("hero.title")}
            <br />
            <span className="gradient-text italic">{t("hero.titleAccent")}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-sm text-base leading-relaxed text-white/80"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="gap-2 rounded-full px-7">
              <Link href="/shop">
                {t("hero.cta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/40 bg-white/10 px-7 text-white backdrop-blur-sm hover:bg-white/20"
            >
              <Link href="/collections">{t("hero.ctaSecondary")}</Link>
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Decorative scroll indicator */}
      <motion.div
        className="absolute bottom-8 inset-s-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1">
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
