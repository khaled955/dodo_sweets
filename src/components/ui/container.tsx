import { cn } from "@/lib/utils/tailwind-merge";
import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
  as?: "div" | "section" | "main" | "article";
}

export function Container({ className, children, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}
