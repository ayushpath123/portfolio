import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/20",
        outline: "border-white/30 text-white hover:bg-white/10",
        accent:
          "border-indigo-400/40 bg-indigo-500/20 text-indigo-100 hover:bg-indigo-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn("select-none", badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

