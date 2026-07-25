"use client";

import { useLanguage } from "@/app/context/LanguageContext";

/**
 * Compact ES/EN switch. Reused across the main nav, service pages and /fundador.
 * `variant="light"` is for use on dark/glass nav bars (default foreground/background
 * tokens already work on both themes since the site is dark-first).
 */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.common.langToggleAria}
      className={`inline-flex items-center gap-0.5 rounded-full border border-white/15 p-0.5 text-[11px] font-bold tracking-wide ${className}`}
    >
      <span
        className={`px-2 py-1 rounded-full transition-colors duration-200 ${
          language === "es" ? "bg-foreground text-background" : "text-muted-foreground"
        }`}
      >
        ES
      </span>
      <span
        className={`px-2 py-1 rounded-full transition-colors duration-200 ${
          language === "en" ? "bg-foreground text-background" : "text-muted-foreground"
        }`}
      >
        EN
      </span>
    </button>
  );
}
