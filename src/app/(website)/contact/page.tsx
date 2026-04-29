"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";

export default function ContactPage() {
  const { t } = useLocale();

  const INFO_CARDS = [
    {
      icon: <Mail className="size-5" />,
      label: t("contact.emailLabel"),
      value: t("contact.emailValue"),
      href: `mailto:${t("contact.emailValue")}`,
    },
    {
      icon: <Phone className="size-5" />,
      label: t("contact.phoneLabel"),
      value: t("contact.phoneValue"),
      href: `tel:${t("contact.phoneValue").replace(/\s/g, "")}`,
    },
    {
      icon: <MapPin className="size-5" />,
      label: t("contact.locationLabel"),
      value: t("contact.locationValue"),
      href: undefined,
    },
    {
      icon: <Clock className="size-5" />,
      label: t("contact.hoursLabel"),
      value: t("contact.hoursValue"),
      href: undefined,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-muted/40 pt-32 pb-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {t("contact.badge")}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              {t("contact.title")}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t("contact.description")}
            </p>
          </div>
        </Container>
      </section>

      {/* Info cards + form */}
      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left — info cards */}
            <div className="space-y-4 lg:col-span-2">
              {INFO_CARDS.map((card) => (
                <GlassCard key={card.label} className="flex items-start gap-4 p-5">
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {card.label}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="mt-1 block text-sm font-medium text-foreground break-words hover:text-primary transition-colors"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-foreground">{card.value}</p>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Right — contact form */}
            <div className="lg:col-span-3">
              <GlassCard className="p-7">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  {t("contact.form.title")}
                </h2>

                <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-foreground"
                      >
                        {t("contact.form.name")}
                      </label>
                      <Input
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        placeholder={t("contact.form.namePlaceholder")}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-foreground"
                      >
                        {t("contact.form.email")}
                      </label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder={t("contact.form.emailPlaceholder")}
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-foreground"
                    >
                      {t("contact.form.subject")}
                    </label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      placeholder={t("contact.form.subjectPlaceholder")}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-foreground"
                    >
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder={t("contact.form.messagePlaceholder")}
                      required
                      className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2 sm:w-auto">
                    <Send className="size-4" />
                    {t("contact.form.submit")}
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
