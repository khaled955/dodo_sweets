"use client";

import { ShoppingCart } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/hooks/use-locale";

const STATUS_COLORS: Record<string, string> = {
  Pending: "bg-gold/15 text-gold",
  Processing: "bg-primary/10 text-primary",
  Delivered: "bg-emerald-500/10 text-emerald-600",
  Cancelled: "bg-destructive/10 text-destructive",
};

const SAMPLE_ORDERS = [
  { id: "#DS-1042", customer: "Sarah M.", product: "Red Velvet Cake", total: "EGP 320", date: "Apr 28, 2026", status: "Delivered" },
  { id: "#DS-1043", customer: "Omar K.", product: "Chocolate Truffle Box", total: "EGP 180", date: "Apr 29, 2026", status: "Processing" },
  { id: "#DS-1044", customer: "Lena A.", product: "Assorted Cupcakes × 12", total: "EGP 240", date: "Apr 30, 2026", status: "Pending" },
  { id: "#DS-1045", customer: "Karim T.", product: "Pistachio Kunafa", total: "EGP 150", date: "Apr 30, 2026", status: "Pending" },
];

export default function OrdersPage() {
  const { t } = useLocale();

  return (
    <div className="space-y-8">
      <SectionHeading
        title={t("dashboard.orders")}
        subtitle={t("dashboard.ordersDesc")}
      />

      {SAMPLE_ORDERS.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ShoppingCart className="size-8" />
            </div>
            <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">No orders yet</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">{t("dashboard.ordersDesc")}</p>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Order</th>
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Customer</th>
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Product</th>
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Total</th>
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Date</th>
                  <th className="px-5 py-3.5 text-start font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {SAMPLE_ORDERS.map((order) => (
                  <tr key={order.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-4 font-mono font-medium text-foreground">{order.id}</td>
                    <td className="px-5 py-4 text-foreground">{order.customer}</td>
                    <td className="px-5 py-4 text-muted-foreground">{order.product}</td>
                    <td className="px-5 py-4 font-medium text-foreground">{order.total}</td>
                    <td className="px-5 py-4 text-muted-foreground">{order.date}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_COLORS[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
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
