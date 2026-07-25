"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageSquare, ChevronLeft, Camera } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/language-toggle";

export interface ServiceFeature {
  icon: React.ElementType;
  title: string;
  desc: string;
}
export interface ServiceStep {
  num: string;
  title: string;
  desc: string;
}
export interface ServiceBenefit {
  value: string;
  label: string;
}
export interface ServicePageData {
  badge: string;
  headline: string;
  subheadline: string;
  pain: string;
  painPoints: string[];
  description: string;
  features: ServiceFeature[];
  steps: ServiceStep[];
  benefits: ServiceBenefit[];
  screenshots: { label: string; desc: string }[];
  waLink: string; // full wa.me URL with pre-filled message
}

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export function ServicePage({ data }: { data: ServicePageData }) {
  const { t } = useLanguage();
  const s = t.servicePageLegacy;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== NAV ===== */}
      <header className="glass-nav fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors text-sm">
            <ChevronLeft className="w-4 h-4" />
            {t.common.back}
          </Link>
          <Link href="/">
            <img src="/logo.svg" alt="EPICS AI" className="h-5 w-auto invert" />
          </Link>
          <div className="flex items-center gap-3">
            <LanguageToggle className="hidden sm:inline-flex" />
            <a
              href={data.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-foreground text-background hover:bg-foreground/85 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" /> {s.reserveYours}
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden section-divider">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp delay={0.05}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              {data.badge}
            </span>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.0] mb-6 glow-hero">
              {data.headline}
            </h1>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              {data.subheadline}
            </p>
            <p className="text-base text-muted-foreground/60 max-w-xl mx-auto mb-10">
              {s.personalizeNote}
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={data.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold text-sm hover:bg-foreground/85 transition-all hover:-translate-y-0.5 shadow-lg"
              >
                {s.reserveMine} <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/diagnostico"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-foreground rounded-full font-semibold text-sm hover:bg-white/[0.06] transition-all hover:-translate-y-0.5"
              >
                {t.common.freeDiagnostic}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="py-24 bg-muted/40 backdrop-blur-sm section-divider relative">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{s.problemLabel}</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10 glow-title">{data.pain}</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-4">
            {data.painPoints.map((point, i) => (
              <FadeUp key={i} delay={0.08 * i}>
                <div className="glass p-5 rounded-xl flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">
                    ×
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-24 bg-background/50 backdrop-blur-sm section-divider relative">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{s.solutionLabel}</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12 glow-title">{data.description}</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-5">
            {data.features.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeUp key={i} delay={0.08 * i}>
                  <div className="glass p-6 rounded-2xl group hover:bg-white/[0.07] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="glass-tile w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1.5">{f.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SCREENSHOTS ===== */}
      <section className="py-24 bg-muted/40 backdrop-blur-sm section-divider relative">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{s.previewLabel}</p>
            <h2 className="text-3xl font-black tracking-tighter mb-10">{s.previewTitle}</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6">
            {data.screenshots.map((s, i) => (
              <FadeUp key={i} delay={0.1 * i}>
                <div className="glass rounded-2xl overflow-hidden">
                  {/* Screenshot placeholder — replace with real <img> */}
                  <div className="aspect-video flex flex-col items-center justify-center gap-3 border-b border-white/[0.06]">
                    <Camera className="w-8 h-8 text-white/10" />
                    <p className="text-xs text-white/15 font-medium uppercase tracking-widest">
                      Captura de pantalla
                    </p>
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold text-sm text-foreground mb-1">{s.label}</h4>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 bg-background/50 backdrop-blur-sm section-divider relative">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{s.processLabel}</p>
            <h2 className="text-3xl font-black tracking-tighter mb-12">{s.processTitle}</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {data.steps.map((s, i) => (
              <FadeUp key={i} delay={0.1 * i}>
                <div className="glass-tile rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
                  <span className="block text-3xl font-black text-white/10 mb-4 tracking-tighter">{s.num}</span>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-24 bg-muted/40 backdrop-blur-sm section-divider relative">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl font-black tracking-tighter mb-12 text-center glow-title">{s.benefitsTitle}</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.benefits.map((b, i) => (
              <FadeUp key={i} delay={0.07 * i}>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-2xl font-black text-foreground glow-stat mb-2 tracking-tighter">{b.value}</div>
                  <div className="text-xs text-muted-foreground leading-snug">{b.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PERSONALIZATION ===== */}
      <section className="py-20 bg-background/50 backdrop-blur-sm section-divider relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{s.personalizationLabel}</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-5 whitespace-pre-line">
              {s.personalizationTitle}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
              {s.personalizationBody}
            </p>
            <div className="grid md:grid-cols-3 gap-3 mb-10">
              {s.personalizationPoints.map((p, i) => (
                <div key={i} className="glass-tile rounded-xl p-4 flex items-center gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-foreground/50 flex-shrink-0" />
                  <span className="text-muted-foreground">{p}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-32 section-divider overflow-hidden glass-nav">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-5 glow-hero whitespace-pre-line">
              {s.finalCtaTitle}
            </h2>
            <p className="text-white/50 mb-3 max-w-lg mx-auto leading-relaxed">
              {s.finalCtaBody1}
            </p>
            <p className="text-white/30 text-sm mb-10">
              {s.finalCtaBody2}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={data.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-xl"
              >
                <MessageSquare className="w-4 h-4" /> {t.editorial.ctaWhatsappCta}
              </a>
              <Link
                href="/diagnostico"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/[0.08] transition-all hover:-translate-y-0.5"
              >
                {t.common.freeDiagnostic} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== FOOTER MINIMAL ===== */}
      <div className="py-8 text-center border-t border-white/[0.06]">
        <p className="text-xs text-muted-foreground/40">© {new Date().getFullYear()} {t.common.footerMinimalLine}</p>
      </div>
    </div>
  );
}
