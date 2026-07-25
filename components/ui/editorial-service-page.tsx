"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/language-toggle";

/* ── Fade-up scroll animation ── */
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── Image / GIF slot ──
   Si `src` está definido, muestra la imagen real.
   Si no, muestra un recuadro placeholder con la etiqueta. */
function ImgSlot({
  label,
  accentHex,
  src,
  alt,
  aspect = "aspect-[16/10]",
  className = "",
}: {
  label: string;
  accentHex: string;
  src?: string;
  alt?: string;
  aspect?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative ${aspect} ${className} rounded-3xl overflow-hidden`}
        style={{ border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <img
          src={src}
          alt={alt ?? label}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative ${aspect} ${className} rounded-3xl overflow-hidden`}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 40%, ${accentHex}20 0%, transparent 65%)`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: 99,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.25)",
            fontSize: 10,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            textAlign: "center",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/* ── Data shape ── */
export interface EditorialServiceData {
  badge: string;
  accentHex: string;
  waLink: string;

  hero: {
    headline: string;
    subheadline: string;
    imgLabel: string;
    imgSrc?: string;
    imgAlt?: string;
  };

  problem: {
    sectionLabel?: string;
    headline: string;
    paragraphs: string[];
    imgLabel: string;
    imgSrc?: string;
    imgAlt?: string;
    imgRight?: boolean;
  };

  bridge: {
    text: string;
    subtext?: string;
  };

  solution: {
    sectionLabel?: string;
    headline: string;
    paragraphs: string[];
    imgLabel: string;
    imgSrc?: string;
    imgAlt?: string;
    imgRight?: boolean;
  };

  benefitBlocks: Array<{
    headline: string;
    body: string;
    imgLabel?: string;
    imgSrc?: string;
    imgAlt?: string;
  }>;

  authority: {
    sectionLabel?: string;
    headline: string;
    body: string;
    imgLabel: string;
    imgSrc?: string;
    imgAlt?: string;
    imgRight?: boolean;
  };

  urgency: {
    headline: string;
    body?: string;
  };

  cta: {
    headline: string;
    body: string;
    btnText?: string;
  };

  banners?: string[];
}

/* ── Section divider (subtle) ── */
const Divider = () => (
  <div style={{ borderTop: "1px solid rgba(255,255,255,0.055)" }} />
);

/* ── Split block: text one side, image other ── */
function SplitBlock({
  label,
  headline,
  paragraphs,
  imgLabel,
  imgSrc,
  imgAlt,
  accentHex,
  imgRight = true,
  imgAspect = "aspect-[4/3]",
}: {
  label?: string;
  headline: string;
  paragraphs: string[];
  imgLabel: string;
  imgSrc?: string;
  imgAlt?: string;
  accentHex: string;
  imgRight?: boolean;
  imgAspect?: string;
}) {
  return (
    <div
      className={`flex flex-col ${
        imgRight ? "md:flex-row" : "md:flex-row-reverse"
      } gap-12 lg:gap-20 items-center`}
    >
      <FadeUp className="flex-1 min-w-0">
        {label && (
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em] mb-5"
            style={{ color: accentHex + "B0" }}
          >
            {label}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.08] mb-6 text-foreground">
          {headline}
        </h2>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0"
          >
            {p}
          </p>
        ))}
      </FadeUp>
      <FadeUp delay={0.1} className="flex-1 min-w-0 w-full">
        <ImgSlot label={imgLabel} src={imgSrc} alt={imgAlt} accentHex={accentHex} aspect={imgAspect} />
      </FadeUp>
    </div>
  );
}

/* ── Main template ── */
export function EditorialServicePage({ data }: { data: EditorialServiceData }) {
  const { accentHex } = data;
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="glass-nav fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground/40 hover:text-foreground transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            {t.common.back}
          </Link>
          <Link href="/">
            <img
              src="/logo.svg"
              alt="EPICS AI"
              className="h-5 w-auto invert"
            />
          </Link>
          <div className="flex items-center gap-3">
            <LanguageToggle className="hidden sm:inline-flex" />
            <a
              href={data.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-foreground text-background hover:bg-foreground/85 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {t.common.talkToUs}
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6">
        <div className="w-full max-w-5xl mx-auto text-center">
          <FadeUp delay={0.05}>
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] mb-7"
              style={{ color: accentHex + "C0" }}
            >
              {data.badge}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.02] mb-7 text-foreground whitespace-pre-line">
              {data.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {data.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
              <a
                href={data.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold text-sm hover:bg-foreground/85 transition-all hover:-translate-y-0.5 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                {t.editorial.ctaWhatsappHero}
              </a>
              <Link
                href="/diagnostico"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-foreground rounded-full font-semibold text-sm hover:bg-white/[0.05] transition-all hover:-translate-y-0.5"
              >
                {t.common.freeDiagnostic} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <ImgSlot
              label={data.hero.imgLabel}
              src={data.hero.imgSrc}
              alt={data.hero.imgAlt}
              accentHex={accentHex}
              aspect="aspect-[16/9]"
              className="w-full"
            />
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* ── PROBLEM ── */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <SplitBlock
            label={data.problem.sectionLabel}
            headline={data.problem.headline}
            paragraphs={data.problem.paragraphs}
            imgLabel={data.problem.imgLabel}
            imgSrc={data.problem.imgSrc}
            imgAlt={data.problem.imgAlt}
            accentHex={accentHex}
            imgRight={data.problem.imgRight !== false}
          />
        </div>
      </section>

      <Divider />

      {/* ── BRIDGE ── */}
      <section className="py-32 px-6">
        <FadeUp className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-5xl font-black tracking-tighter text-foreground leading-[1.1]">
            {data.bridge.text}
          </p>
          {data.bridge.subtext && (
            <p className="text-lg md:text-xl text-muted-foreground mt-7 max-w-2xl mx-auto leading-relaxed">
              {data.bridge.subtext}
            </p>
          )}
        </FadeUp>
      </section>

      <Divider />

      {/* ── SOLUTION ── */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <SplitBlock
            label={data.solution.sectionLabel}
            headline={data.solution.headline}
            paragraphs={data.solution.paragraphs}
            imgLabel={data.solution.imgLabel}
            imgSrc={data.solution.imgSrc}
            imgAlt={data.solution.imgAlt}
            accentHex={accentHex}
            imgRight={data.solution.imgRight === true}
          />
        </div>
      </section>

      <Divider />

      {/* ── BENEFIT BLOCKS ── */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto space-y-28">
          {data.benefitBlocks.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 lg:gap-20 items-center`}
            >
              <FadeUp className="flex-1 min-w-0">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter leading-[1.1] mb-5 text-foreground">
                  {item.headline}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </FadeUp>
              <FadeUp delay={0.12} className="flex-1 min-w-0 w-full">
                <ImgSlot
                  label={item.imgLabel ?? t.editorial.imgFallbackLabel}
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  accentHex={accentHex}
                  aspect="aspect-[4/3]"
                />
              </FadeUp>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── AUTHORITY ── */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <SplitBlock
            label={data.authority.sectionLabel}
            headline={data.authority.headline}
            paragraphs={[data.authority.body]}
            imgLabel={data.authority.imgLabel}
            imgSrc={data.authority.imgSrc}
            imgAlt={data.authority.imgAlt}
            accentHex={accentHex}
            imgRight={data.authority.imgRight !== false}
          />
        </div>
      </section>

      <Divider />

      {/* ── URGENCY ── */}
      <section
        className="py-36 px-6 text-center"
        style={{ background: "rgba(255,255,255,0.018)" }}
      >
        <FadeUp className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-5">
            {data.urgency.headline}
          </h2>
          {data.urgency.body && (
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {data.urgency.body}
            </p>
          )}
        </FadeUp>
      </section>

      {/* ── BANNERS (marquee) ── */}
      {data.banners && data.banners.length > 0 && (
        <>
          <Divider />
          <div
            className="overflow-hidden py-6"
            style={{ background: accentHex + "09" }}
          >
            <div className="editorial-marquee flex gap-12 whitespace-nowrap">
              {[...data.banners, ...data.banners, ...data.banners, ...data.banners].map(
                (b, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold uppercase tracking-[0.18em] flex-shrink-0"
                    style={{ color: accentHex + "70" }}
                  >
                    {b}
                    <span
                      className="mx-6"
                      style={{ color: accentHex + "35" }}
                    >
                      ·
                    </span>
                  </span>
                )
              )}
            </div>
          </div>
        </>
      )}

      <Divider />

      {/* ── CTA ── */}
      <section className="py-40 px-6 text-center">
        <FadeUp className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-7">
            {data.cta.headline}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            {data.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={data.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold text-sm hover:bg-foreground/85 transition-all hover:-translate-y-0.5 shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              {data.cta.btnText ?? t.editorial.ctaWhatsappCta}
            </a>
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-foreground rounded-full font-semibold text-sm hover:bg-white/[0.05] transition-all hover:-translate-y-0.5"
            >
              {t.common.freeDiagnostic} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground/35 mt-7">
            {t.editorial.footNote}
          </p>
        </FadeUp>
      </section>

      {/* Footer minimal */}
      <div
        className="py-8 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.055)" }}
      >
        <p className="text-xs text-muted-foreground/35">
          © {new Date().getFullYear()} {t.common.footerMinimalLine}
        </p>
      </div>

      <style>{`
        .editorial-marquee {
          animation: editorial-scroll 28s linear infinite;
        }
        @keyframes editorial-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
