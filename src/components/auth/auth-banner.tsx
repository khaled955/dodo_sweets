"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { useLocale } from "@/hooks/use-locale";

const STATS = [
  { value: "5+", label: "Years" },
  { value: "200+", label: "Recipes" },
  { value: "10K+", label: "Clients" },
];

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80";

export function AuthBanner({ imageSrc = DEFAULT_IMAGE }: { imageSrc?: string }) {
  const { t } = useLocale();

  return (
    <div className="relative hidden h-full flex-col overflow-hidden rounded-3xl lg:flex">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt="Artisan sweets"
        fill
        sizes="50vw"
        className="object-cover"
        priority
      />

      {/* Overlay layers — depth + vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-chocolate/75 via-chocolate/55 to-cocoa/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      {/* Decorative floating shapes */}
      <motion.div
        className="absolute -top-28 -end-28 size-80 rounded-full border border-white/10 bg-white/5"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="absolute top-1/2 -start-16 size-44 rounded-full border border-white/10 bg-white/5"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-48 -end-4 size-20 rounded-full bg-primary/30"
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        aria-hidden
      />
      <motion.div
        className="absolute top-1/3 end-12 size-8 rounded-full bg-caramel/50"
        animate={{ y: [0, 10, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8">

        {/* Top — logo + subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo light showSlogan />
        </motion.div>

        {/* Middle — stars + social proof */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.09, duration: 0.28, type: "spring", stiffness: 300 }}
              >
                <Star className="size-4 fill-gold text-gold" />
              </motion.div>
            ))}
            <span className="ms-2 text-sm font-medium text-white/80">5.0</span>
          </div>
          <p className="text-sm text-white/65">
            Trusted by{" "}
            <span className="font-semibold text-white">10,000+</span> sweet lovers
          </p>
        </motion.div>

        {/* Bottom — quote card + stats */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          {/* Quote card */}
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
            <Quote className="mb-3 size-5 text-primary" />
            <p className="font-serif text-base italic leading-relaxed text-white">
              &ldquo;{t("auth.banner.quote")}&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-caramel text-sm font-bold text-white shadow-lg ring-2 ring-white/20">
                {t("auth.banner.quoteAuthor").charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {t("auth.banner.quoteAuthor")}
                </p>
                <p className="text-xs text-white/55">
                  {t("auth.banner.quoteAuthorTitle")}
                </p>
              </div>
              {/* Verified badge */}
              <div className="ms-auto flex items-center gap-1 rounded-full bg-primary/20 px-2.5 py-1 backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-medium text-white/80">Verified</span>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 divide-x divide-white/15 overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
            {STATS.map((s) => (
              <div key={s.label} className="py-3.5 text-center">
                <p className="font-serif text-xl font-bold text-white">{s.value}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
