import type { MessageKey } from "@/lib/providers/locale-provider";

export interface NavItem {
  labelKey: MessageKey;
  href: string;
  icon?: string;
}
