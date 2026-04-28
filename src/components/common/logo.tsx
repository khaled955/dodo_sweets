import Link from "next/link";
import { cn } from "@/lib/utils/tailwind-merge";

interface LogoProps {
  showSlogan?: boolean;
  className?: string;
  href?: string;
  /** Use on dark/image backgrounds — renders dodo + separator in white */
  light?: boolean;
}

export function Logo({ showSlogan = false, className, href = "/", light = false }: LogoProps) {
  return (
    <Link href={href} className={cn("group inline-flex shrink-0 flex-col gap-0.5", className)}>
      <span className="flex items-baseline gap-0.5 leading-none">
        <span
          className={cn(
            "font-sans text-[17px] font-light tracking-[0.12em] transition-colors sm:text-[19px]",
            light
              ? "text-white/90 group-hover:text-white"
              : "text-foreground/80 group-hover:text-foreground",
          )}
        >
          dodo
        </span>
        <span className={cn("mx-0.5 text-[9px]", light ? "text-white/40" : "text-primary/60")}>
          ◆
        </span>
        {/* gradient-text looks great on both light and dark backgrounds */}
        <span className="font-serif text-[19px] font-bold italic gradient-text sm:text-[21px]">
          Sweets
        </span>
      </span>

      {showSlogan && (
        <span
          className={cn(
            "font-sans text-[9px] font-medium uppercase tracking-[0.22em]",
            light ? "text-white/50" : "text-muted-foreground",
          )}
        >
          Artisan Confections
        </span>
      )}
    </Link>
  );
}
