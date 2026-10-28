import * as React from "react";

// Adapted from the MIT-licensed shadcn Card listed on 21st.dev.
// https://21st.dev/@shadcn/components/card
export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`rounded-2xl border bg-white text-[#482721] shadow-sm ${className}`} {...props} />
  ),
);
Card.displayName = "Card";
