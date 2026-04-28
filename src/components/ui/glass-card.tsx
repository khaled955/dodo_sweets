import { cn } from "@/lib/utils/tailwind-merge";
import type { ReactNode } from "react";

interface GlassCardProps {
  className?: string;
  children: ReactNode;
  hover?: boolean;
}

export function GlassCard({ className, children, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 shadow-brand",
        hover && "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
