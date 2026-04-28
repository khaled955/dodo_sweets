import * as React from "react";
import { cn } from "@/lib/utils/tailwind-merge";

export interface InputProps extends React.ComponentProps<"input"> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

function Input({ className, startIcon, endIcon, ...props }: InputProps) {
  return (
    <div className="relative flex items-center w-full">
      {startIcon && (
        <span className="absolute start-3 text-muted-foreground pointer-events-none">
          {startIcon}
        </span>
      )}
      <input
        data-slot="input"
        className={cn(
          "w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground",
          "outline-none transition-all",
          "focus:border-primary focus:ring-2 focus:ring-primary/20",
          "disabled:pointer-events-none disabled:opacity-50",
          "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20",
          startIcon && "ps-9",
          endIcon && "pe-9",
          className,
        )}
        {...props}
      />
      {endIcon && (
        <span className="absolute end-3 text-muted-foreground">
          {endIcon}
        </span>
      )}
    </div>
  );
}

export { Input };
