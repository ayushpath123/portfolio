import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "subtle-border flex h-12 w-full rounded-2xl bg-white/5 px-4 text-sm text-white placeholder:text-white/40 shadow-inner shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

