import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/tailwind-merge";

interface LogoProps {
  showSlogan?: boolean;
  className?: string;
  href?: string;
  /** Use on dark/image backgrounds — renders slogan in white */
  light?: boolean;
}

export function Logo({ showSlogan = false, className, href = "/", light = false }: LogoProps) {
  return (
    <Link href={href} className={cn("group inline-flex shrink-0 flex-col items-start gap-0.5", className)}>
      <Image
        src="/images/logo.png"
        alt="DodoSweets logo"
        width={140}
        height={56}
        className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
        priority
      />
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
