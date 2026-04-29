"use client";

import { Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/hooks/use-locale";

const SAMPLE_CUSTOMERS = [
  { name: "Sarah Mitchell", email: "sarah.m@example.com", orders: 8, spent: "EGP 2,640", joined: "Jan 2026" },
  { name: "Omar Khalil", email: "omar.k@example.com", orders: 5, spent: "EGP 1,100", joined: "Feb 2026" },
  { name: "Lena Adel", email: "lena.a@example.com", orders: 3, spent: "EGP 720", joined: "Mar 2026" },
  { name: "Karim Taha", email: "karim.t@example.com", orders: 12, spent: "EGP 3,480", joined: "Dec 2025" },
  { name: "Nour Hassan", email: "nour.h@example.com", orders: 2, spent: "EGP 460", joined: "Apr 2026" },
];

export default function CustomersPage() {
  const { t } = useLocale();

  return (
    <div className="space-y-8">
      <SectionHeading
        title={t("dashboard.customers")}
        subtitle={t("dashboard.customersDesc")}
      />

      {SAMPLE_CUSTOMERS.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Users className="size-8" />
            </div>
            <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">No customers yet</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">{t("dashboard.customersDesc")}</p>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Customer</th>
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Email</th>
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Orders</th>
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Total Spent</th>
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Member Since</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {SAMPLE_CUSTOMERS.map((c) => (
                  <tr key={c.email} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {c.name.charAt(0)}
                        </div>
                        <span className="font-medium text-foreground">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">{c.email}</td>
                    <td className="px-5 py-4 text-foreground">{c.orders}</td>
                    <td className="px-5 py-4 font-medium text-foreground">{c.spent}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
