"use client";

import { Settings } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";

function SettingsSection({ title, description, children }: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
      <div className="border-b border-border pb-4">
        <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}

export default function SettingsPage() {
  const { t } = useLocale();

  return (
    <div className="space-y-8">
      <SectionHeading
        title={t("dashboard.settings")}
        subtitle={t("dashboard.settingsDesc")}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Store Info */}
          <SettingsSection
            title="Store Information"
            description="Basic details about your store displayed to customers."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="store-name">
                  Store Name
                </label>
                <Input id="store-name" defaultValue="DodoSweets" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="store-email">
                  Contact Email
                </label>
                <Input id="store-email" type="email" defaultValue="hello@dodosweets.com" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="store-phone">
                  Phone Number
                </label>
                <Input id="store-phone" defaultValue="+20 100 000 0000" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="store-currency">
                  Currency
                </label>
                <Input id="store-currency" defaultValue="EGP – Egyptian Pound" readOnly className="text-muted-foreground" />
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <Button size="sm">Save Changes</Button>
            </div>
          </SettingsSection>

          {/* Delivery */}
          <SettingsSection
            title="Delivery Settings"
            description="Configure delivery zones and working hours."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="delivery-fee">
                  Delivery Fee (EGP)
                </label>
                <Input id="delivery-fee" type="number" defaultValue="30" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="min-order">
                  Minimum Order (EGP)
                </label>
                <Input id="min-order" type="number" defaultValue="100" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="working-hours">
                  Working Hours
                </label>
                <Input id="working-hours" defaultValue="Sat – Thu, 9:00 AM – 9:00 PM" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="delivery-area">
                  Delivery Area
                </label>
                <Input id="delivery-area" defaultValue="Cairo, Egypt" />
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <Button size="sm">Save Changes</Button>
            </div>
          </SettingsSection>
        </div>

        {/* Status sidebar */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Settings className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Store Status</p>
                <p className="text-xs text-muted-foreground">Currently accepting orders</p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border bg-muted/30 px-4 py-3">
              <span className="text-sm text-foreground">Store Online</span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                <span className="size-2 rounded-full bg-emerald-500 inline-block" />
                Active
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
            <p className="text-sm font-semibold text-foreground">Quick Actions</p>
            <Button variant="outline" className="w-full justify-start text-sm" size="sm">
              Export Product List
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm" size="sm">
              Download Order Report
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm text-destructive hover:text-destructive" size="sm">
              Clear Cache
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
