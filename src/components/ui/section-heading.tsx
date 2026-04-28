import { cn } from "@/lib/utils/tailwind-merge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  titleAccent,
  subtitle,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", center && "text-center", className)}>
      {badge && (
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {badge}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
        {title}{" "}
        {titleAccent && (
          <span className="gradient-text italic">{titleAccent}</span>
        )}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
