"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  MessageSquare,
  ArrowRight,
  X,
  Eye,
  Sparkles,
  Bot,
  Github,
  Megaphone,
  ShieldCheck,
  BarChart3,
  Cloud,
  Apple,
  Workflow,
  Zap,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/language-toggle";
import type { Translations } from "@/app/i18n/translations";

const WA =
  "https://wa.me/5356999599?text=Estoy%20interesado%20en%20los%20servicios%20de%20EPICS%20AI";

/* ===== FADE-UP ===== */
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
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ===== CERTIFICACIONES =====
   Para mostrar la foto del diploma: coloca el archivo en
   public/certificados/<img> (mismo nombre que aquí) y ya aparece al pulsar
   "Ver en detalle". Si el archivo no existe, se muestra un placeholder. */
interface Cert {
  icon: React.ElementType;
  name: string;
  issuer: string;
  desc: string;
  img: string; // ruta dentro de /public
}

/* Icon + image path are structural (language-independent); name/issuer/desc
   come from the translation dictionary (t.fundador.certifications). */
const CERT_META: { key: keyof Translations["fundador"]["certifications"]; icon: React.ElementType; img: string }[] = [
  { key: "googleAiEssentials", icon: Sparkles, img: "/certificados/google-ai-essentials.jpg" },
  { key: "claudeCertifiedArchitect", icon: Bot, img: "/certificados/claude-certified-architect.jpg" },
  { key: "githubFoundations", icon: Github, img: "/certificados/github-foundations.jpg" },
  { key: "hubspotMarketing", icon: Megaphone, img: "/certificados/hubspot-marketing.jpg" },
  { key: "ibmCybersecurity", icon: ShieldCheck, img: "/certificados/ibm-ciberseguridad.jpg" },
  { key: "ibmDataAnalytics", icon: BarChart3, img: "/certificados/ibm-data-analytics.jpg" },
  { key: "googleCloudDeveloper", icon: Cloud, img: "/certificados/google-cloud-developer.jpg" },
  { key: "appleDeveloper", icon: Apple, img: "/certificados/apple-developer.jpg" },
  { key: "tribuDivisual", icon: Workflow, img: "/certificados/tribu-divisual.jpg" },
  { key: "businessAutomation", icon: Zap, img: "/certificados/automatizacion-negocios.jpg" },
  { key: "digitalSolutions", icon: Building2, img: "/certificados/soluciones-digitales.jpg" },
];

export default function FundadorPage() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Cert | null>(null);

  const CERTIFICATIONS: Cert[] = CERT_META.map(({ key, icon, img }) => {
    const c = t.fundador.certifications[key];
    return { icon, img, name: c.name, issuer: c.issuer, desc: c.desc };
  });

  const TECHNOLOGIES = t.fundador.technologies.items;

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
            <img src="/logo.svg" alt="EPICS AI" className="h-5 w-auto invert" />
          </Link>
          <div className="flex items-center gap-3">
            <LanguageToggle className="hidden sm:inline-flex" />
            <a
              href={WA}
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

      {/* HERO — FOTO + PRESENTACIÓN */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 text-center overflow-hidden">
        {/* Glow ambiental */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-white/[0.04] blur-[150px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-3xl mx-auto">
          <FadeUp>
            <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto mb-9">
              {/* Halo de glow */}
              <div className="absolute -inset-6 rounded-full bg-white/15 blur-3xl opacity-70 pointer-events-none" />
              {/* Anillo de gradiente */}
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-white/70 via-white/10 to-white/50 pointer-events-none" />
              {/* Aro interior */}
              <div className="absolute inset-0 rounded-full ring-2 ring-white/20 z-20 pointer-events-none" />
              <img
                src="/ceo.png"
                alt="Emanuel Villa López"
                className="relative w-full h-full rounded-full object-cover object-center z-10"
                onError={(e) => {
                  const imgEl = e.currentTarget;
                  imgEl.style.display = "none";
                  const fb = imgEl.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = "flex";
                }}
              />
              <div
                className="relative w-full h-full rounded-full bg-white items-center justify-center text-black font-black text-4xl tracking-tighter z-10"
                style={{ display: "none" }}
              >
                EV
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40 mb-4">
              {t.fundador.hero.roleLabel}
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.04] mb-6 glow-hero">
              Emanuel Villa López
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              {t.fundador.hero.bio}
            </p>
            <a
              href="#certificaciones"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full font-bold text-sm hover:bg-foreground/85 transition-all hover:-translate-y-0.5"
            >
              {t.fundador.hero.ctaViewCerts} <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.055)" }} />

      {/* CERTIFICACIONES */}
      <section id="certificaciones" className="py-28 md:py-36 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3 text-center">
              {t.fundador.certs.kicker}
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-center mb-4 glow-title whitespace-pre-line">
              {t.fundador.certs.title}
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
              {t.fundador.certs.subtitle}{" "}
              <span className="text-foreground font-medium">{t.fundador.certs.subtitleHighlight}</span>
              {t.fundador.certs.subtitleSuffix}
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <FadeUp key={cert.name} delay={0.04 * (i % 3)}>
                  <div className="glass-tile rounded-2xl p-6 h-full flex flex-col hover:bg-white/[0.06] transition-colors duration-300">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-white leading-tight">{cert.name}</h3>
                        <p className="text-[11px] uppercase tracking-wider text-white/30 mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-white/45 leading-relaxed flex-1 mb-5">
                      {cert.desc}
                    </p>
                    <button
                      onClick={() => setSelected(cert)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/12 text-sm font-semibold text-foreground hover:bg-white/[0.06] transition-all w-full mt-auto"
                    >
                      <Eye className="w-4 h-4" /> {t.fundador.certs.ctaViewDetail}
                    </button>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.055)" }} />

      {/* TECNOLOGÍAS */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-8">
              {t.fundador.technologies.kicker}
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {TECHNOLOGIES.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-sm font-medium text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.055)" }} />

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <FadeUp className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 glow-hero">
            {t.fundador.cta.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            {t.fundador.cta.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full font-bold text-sm hover:bg-foreground/85 transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" /> {t.common.whatsappCtaShort}
            </a>
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-foreground rounded-full font-semibold text-sm hover:bg-white/[0.05] transition-all hover:-translate-y-0.5"
            >
              {t.common.freeDiagnostic} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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

      {/* ===== MODAL: foto del certificado ===== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
            style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-5 md:p-7 w-full max-w-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label={t.fundador.certs.modalCloseAria}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-1 pr-12">
                <h3 className="text-xl font-black tracking-tight text-white">{selected.name}</h3>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-white/35 mb-5">
                {selected.issuer}
              </p>

              {/* Imagen del certificado (con placeholder si aún no existe) */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/[0.025] border border-white/[0.08]">
                <img
                  src={selected.img}
                  alt={`${selected.name} — ${selected.issuer}`}
                  className="absolute inset-0 w-full h-full object-contain"
                  onError={(e) => {
                    const imgEl = e.currentTarget;
                    imgEl.style.display = "none";
                    const fb = imgEl.nextElementSibling as HTMLElement;
                    if (fb) fb.style.display = "flex";
                  }}
                />
                <div
                  className="absolute inset-0 flex-col items-center justify-center gap-2 text-center px-6"
                  style={{ display: "none" }}
                >
                  <span className="text-sm text-white/30 font-medium">
                    {t.fundador.certs.placeholderText}
                  </span>
                  <span className="text-[11px] text-white/20">
                    {t.fundador.certs.placeholderPathPrefix}{" "}
                    <code className="text-white/35">public{selected.img}</code>
                  </span>
                </div>
              </div>

              <p className="text-sm text-white/45 leading-relaxed mt-5">{selected.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
