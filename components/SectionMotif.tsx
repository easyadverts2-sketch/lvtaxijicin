"use client";

import { useId } from "react";

/**
 * Jemný opakující se motiv (trasa / pohyb) – nízká opacity.
 * Light: šedá/černá, dark: taxi oranžová.
 */
export function SectionMotif() {
  const pid = useId().replace(/:/g, "");
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.035] dark:opacity-[0.06]"
      aria-hidden
    >
      <svg className="h-full w-full text-neutral-900 dark:text-orange-500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`taxi-route-${pid}`} width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M10 60 Q40 20 70 60 T130 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="opacity-80"
            />
            <circle cx="10" cy="60" r="3" fill="currentColor" />
            <circle cx="110" cy="60" r="3" fill="currentColor" />
            <path d="M60 10 L65 25 L55 25 Z" fill="currentColor" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#taxi-route-${pid})`} />
      </svg>
    </div>
  );
}
