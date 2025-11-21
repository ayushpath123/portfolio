import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "subtle-border min-h-[140px] w-full rounded-2xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 shadow-inner shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

