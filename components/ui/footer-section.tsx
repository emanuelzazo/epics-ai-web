"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageSquare,
  Mail,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

/* Structural href/icon data — labels come from the translation dictionary
   (app/i18n/translations.ts → home.footer.sections) by matching index. */
const footerHrefs: { key: "services" | "company" | "sectors" | "contact"; links: { href: string; icon?: React.ComponentType<{ className?: string }> }[] }[] = [
  {
    key: "services",
    links: [
      { href: "#productos" },
      { href: "#productos" },
      { href: "#productos" },
      { href: "#productos" },
      { href: "#productos" },
    ],
  },
  {
    key: "company",
    links: [
      { href: "#nosotros" },
      { href: "/fundador" },
      { href: "#testimonios" },
      { href: "#proceso" },
    ],
  },
  {
    key: "sectors",
    links: [
      { href: "#sectores" },
      { href: "#sectores" },
      { href: "#sectores" },
      { href: "#sectores" },
    ],
  },
  {
    key: "contact",
    links: [
      { href: "https://wa.me/5356999599", icon: MessageSquare },
      { href: "#", icon: Facebook },
      { href: "#", icon: Instagram },
      { href: "#", icon: Linkedin },
    ],
  },
];

export function Footer() {
  const { t } = useLanguage();
  const sections = t.home.footer.sections;

  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),transparent)] px-6 py-12 lg:py-16">
      {/* top glow line */}
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <img src="/logo.svg" alt="EPICS AI" className="h-6 w-auto invert" />
          <p className="text-muted-foreground text-sm mt-4 whitespace-pre-line">
            {t.common.footerTagline}
          </p>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} {t.common.footerCopyright}
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerHrefs.map((section, index) => {
            const sectionText = sections[section.key];
            return (
              <AnimatedContainer key={section.key} delay={0.1 + index * 0.1}>
                <div className="mb-10 md:mb-0">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    {sectionText.label}
                  </h3>
                  <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                    {section.links.map((link, i) => {
                      const title = sectionText.links[i]?.title ?? "";
                      return (
                        <li key={title || i}>
                          <a
                            href={link.href}
                            className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors duration-200"
                          >
                            {link.icon && <link.icon className="size-3.5" />}
                            {title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </AnimatedContainer>
            );
          })}
        </div>
      </div>

      {/* Social links row */}
      <AnimatedContainer delay={0.5} className="mt-12 pt-8 border-t border-border/40 w-full flex flex-wrap justify-center gap-6">
        {[
          { href: "#", icon: Facebook, label: "Facebook" },
          { href: "#", icon: Instagram, label: "Instagram" },
          { href: "#", icon: Youtube, label: "YouTube" },
          { href: "#", icon: Linkedin, label: "LinkedIn" },
          { href: "https://wa.me/5356999599", icon: MessageSquare, label: "WhatsApp" },
          { href: "mailto:info@epicsai.cu", icon: Mail, label: t.common.emailAria },
        ].map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Icon className="size-5" />
          </a>
        ))}
      </AnimatedContainer>
    </footer>
  );
}

/* Animated blur-in container — reused throughout page */
type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

export function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ filter: "blur(6px)", translateY: -10, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
