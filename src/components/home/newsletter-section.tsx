"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/hooks/use-locale";

export function NewsletterSection() {
  // Context
  const { t } = useLocale();

  // State
  const [email, setEmail] = useState("");

  // Functions
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed!", { description: `Welcome to our Sweet Society, ${email}` });
    setEmail("");
  }

  return (
    <section className="gradient-brand py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            {t("newsletter.title")}
          </h2>
          <p className="mt-3 text-base text-white/75">
            {t("newsletter.description")}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("newsletter.placeholder")}
              required
              className="border-white/30 bg-white/15 text-white placeholder:text-white/50 focus:border-white"
            />
            <Button
              type="submit"
              variant="secondary"
              className="shrink-0 gap-2"
            >
              <Send className="size-4" />
              {t("newsletter.cta")}
            </Button>
          </form>

          <p className="mt-4 text-xs text-white/50">{t("newsletter.disclaimer")}</p>
        </motion.div>
      </Container>
    </section>
  );
}
