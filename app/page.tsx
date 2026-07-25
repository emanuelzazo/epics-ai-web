"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import {
  // Nav
  Menu, X, ArrowRight,
  // Hero & checklist
  Check, MessageSquare,
  // Problems
  TrendingDown, Package, Clock, RefreshCcw,
  // Products
  Share2, BarChart2, LayoutDashboard, Globe,
  // Process
  Search, Lightbulb, Settings, HeartHandshake,
  // Sectors
  Store, UtensilsCrossed, Stethoscope, GraduationCap,
  HardHat, Truck, Building2, Briefcase, ShoppingCart,
  // CTA
  Smartphone, Mail,
} from "lucide-react";
import { DropdownNavigation, type NavItem } from "@/components/ui/dropdown-navigation";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";
import { Footer, AnimatedContainer } from "@/components/ui/footer-section";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/app/context/LanguageContext";
import type { Translations } from "@/app/i18n/translations";

/* ===== TESTIMONIAL AUTHORS (name/photo are language-independent) ===== */
const TESTIMONIAL_AUTHORS = [
  { image: "https://randomuser.me/api/portraits/men/32.jpg", name: "Carlos Rodríguez" },
  { image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Yanelis Fernández" },
  { image: "https://randomuser.me/api/portraits/men/55.jpg", name: "Roberto Hernández" },
  { image: "https://randomuser.me/api/portraits/women/67.jpg", name: "Laura Pérez" },
  { image: "https://randomuser.me/api/portraits/men/78.jpg", name: "Miguel Rodríguez" },
  { image: "https://randomuser.me/api/portraits/women/23.jpg", name: "Daniela Martínez" },
  { image: "https://randomuser.me/api/portraits/men/41.jpg", name: "Ariel Suárez" },
  { image: "https://randomuser.me/api/portraits/women/56.jpg", name: "Rosario López" },
  { image: "https://randomuser.me/api/portraits/men/63.jpg", name: "Ernesto Castillo" },
];

/* ===== PRODUCT STRUCTURE (icon/href/id — language-independent) ===== */
const PRODUCT_META = [
  { id: "fb", href: "/servicios/fb-publisher", icon: Share2 },
  { id: "tpv", href: "/servicios/tpv-woocommerce", icon: ShoppingCart },
  { id: "wa", href: "/servicios/whatsapp-ia", icon: MessageSquare },
  { id: "inv", href: "/servicios/inventario-digital", icon: BarChart2 },
  { id: "sys", href: "/servicios/sistema-mipymes", icon: LayoutDashboard },
  { id: "web", href: "/servicios/desarrollo-web", icon: Globe },
] as const;

/* ===== SECTOR STRUCTURE (icon/key — language-independent) ===== */
const SECTOR_META = [
  { key: "comercios", icon: Store },
  { key: "restaurantes", icon: UtensilsCrossed },
  { key: "clinicas", icon: Stethoscope },
  { key: "academias", icon: GraduationCap },
  { key: "constructoras", icon: HardHat },
  { key: "distribuidores", icon: Truck },
  { key: "mipymes", icon: Building2 },
  { key: "tcp", icon: Briefcase },
  { key: "ecommerce", icon: ShoppingCart },
] as const;

/* ===== PROCESS STEP STRUCTURE (num/icon — language-independent) ===== */
const PROCESS_META = [
  { num: "01", key: "analyze", icon: Search },
  { num: "02", key: "design", icon: Lightbulb },
  { num: "03", key: "implement", icon: Settings },
  { num: "04", key: "support", icon: HeartHandshake },
] as const;

/* CEO summary chips shown on the home page (subset — full list on /fundador) */
const CEO_CHIP_KEYS = [
  "googleAiEssentials",
  "claudeCertifiedArchitect",
  "githubFoundations",
  "hubspotMarketing",
  "googleCloudDeveloper",
  "appleDeveloper",
  "ibmCybersecurity",
  "ibmDataAnalytics",
] as const;

/* ===== DARK SECTION STYLE ===== */
/* Dark sections slightly lighter than base bg + radial glow top edge */
const darkSection = "relative section-glow-top bg-card/80 backdrop-blur-sm";

/* ===== COUNT-UP HOOK ===== */
function useCountUp(target: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const dur = 1300;
    function tick(now: number) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [target, trigger]);
  return count;
}

/* ===== STAT ITEM ===== */
function StatItem({ prefix = "", target, suffix = "", label, trigger }: {
  prefix?: string; target: number; suffix?: string; label: string; trigger: boolean;
}) {
  const count = useCountUp(target, trigger);
  return (
    <AnimatedContainer className="glass-tile text-center px-6 py-8 border-r border-white/[0.06] last:border-r-0">
      <span className="block text-4xl md:text-5xl font-black tracking-tighter text-white mb-1 glow-stat">
        {prefix}{count}{suffix}
      </span>
      <span className="text-sm text-white/40">{label}</span>
    </AnimatedContainer>
  );
}

/* ===== PROBLEM CARD ===== */
function ProblemCard({ icon: Icon, title, desc, delay }: {
  icon: React.ElementType; title: string; desc: string; delay: number;
}) {
  return (
    <AnimatedContainer delay={delay}>
      <div className="glass p-10 cursor-default group transition-all duration-300 hover:bg-white/10 h-full">
        <Icon className="w-7 h-7 mb-5 text-foreground group-hover:text-background transition-colors duration-200" strokeWidth={1.5} />
        <h3 className="text-base font-bold mb-3 text-foreground group-hover:text-foreground transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground transition-colors duration-200">
          {desc}
        </p>
      </div>
    </AnimatedContainer>
  );
}

/* Build the mega-menu nav data from translated strings */
function buildNavItems(t: Translations): NavItem[] {
  const p = t.nav.products;
  const s = t.nav.sectors;
  return [
    {
      id: 1,
      label: t.nav.servicesLabel,
      subMenus: [
        {
          title: t.nav.productsTitle,
          items: [
            { label: p.fb.label, description: p.fb.description, icon: Share2, link: "/servicios/fb-publisher" },
            { label: p.tpv.label, description: p.tpv.description, icon: ShoppingCart, link: "/servicios/tpv-woocommerce" },
            { label: p.wa.label, description: p.wa.description, icon: MessageSquare, link: "/servicios/whatsapp-ia" },
            { label: p.inv.label, description: p.inv.description, icon: BarChart2, link: "/servicios/inventario-digital" },
            { label: p.sys.label, description: p.sys.description, icon: LayoutDashboard, link: "/servicios/sistema-mipymes" },
            { label: p.web.label, description: p.web.description, icon: Globe, link: "/servicios/desarrollo-web" },
          ],
        },
      ],
    },
    {
      id: 2,
      label: t.nav.solutionsLabel,
      subMenus: [
        {
          title: t.nav.bySectorTitle,
          items: [
            { label: s.mipymes.label, description: s.mipymes.description, icon: Building2 },
            { label: s.restaurantes.label, description: s.restaurantes.description, icon: UtensilsCrossed },
            { label: s.comercios.label, description: s.comercios.description, icon: Store },
            { label: s.clinicas.label, description: s.clinicas.description, icon: Stethoscope },
          ],
        },
      ],
    },
    { id: 3, label: t.nav.processLabel, link: "#proceso" },
    { id: 4, label: t.nav.aboutLabel, link: "#nosotros" },
    { id: 5, label: t.nav.testimonialsLabel, link: "#testimonios" },
  ];
}

/* ===== MAIN PAGE ===== */
export default function Home() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("fb");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [statsTrigger, setStatsTrigger] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  const NAV_ITEMS = useMemo(() => buildNavItems(t), [t]);

  const PRODUCTS = useMemo(
    () =>
      PRODUCT_META.map(({ id, href, icon }) => {
        const item = t.home.products.items[id];
        return { id, href, icon, label: item.label, badge: item.badge, title: item.title, desc: item.desc, features: item.features };
      }),
    [t]
  );

  const SECTORS = useMemo(
    () => SECTOR_META.map(({ key, icon }) => ({ icon, label: t.home.sectors.items[key] })),
    [t]
  );

  const STEPS = useMemo(
    () => PROCESS_META.map(({ num, key, icon }) => ({ num, icon, ...t.home.process.steps[key] })),
    [t]
  );

  const testimonials: Testimonial[] = useMemo(
    () =>
      TESTIMONIAL_AUTHORS.map((author, i) => ({
        ...author,
        text: t.home.testimonials.items[i].text,
        role: t.home.testimonials.items[i].role,
      })),
    [t]
  );
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const ceoChips = CEO_CHIP_KEYS.map((key) => t.fundador.certifications[key].name);

  /* Trigger stats count-up on scroll */
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsTrigger(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const activeProduct = PRODUCTS.find((p) => p.id === activeTab)!;
  const ActiveIcon = activeProduct.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* ===== NAV ===== */}
      <header className="glass-nav fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
          {/* Logo */}
          <a href="#hero">
            <img src="/logo.svg" alt="EPICS AI" className="h-6 w-auto invert" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <DropdownNavigation navItems={NAV_ITEMS} />
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <a
              href="/diagnostico"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-foreground text-background hover:bg-foreground/85 transition-all duration-200"
            >
              {t.nav.requestDemo} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.common.menuAria}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg md:hidden">
            <nav className="flex flex-col py-4 px-6 gap-1">
              <div className="flex justify-end pb-2">
                <LanguageToggle />
              </div>
              <p className="pt-2 pb-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                {t.nav.mobileServicesHeading}
              </p>
              {NAV_ITEMS[0].subMenus?.[0].items.map((item) => (
                <a
                  key={item.label}
                  href={item.link ?? "#"}
                  className="py-2.5 text-base font-medium text-foreground border-b border-border/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {NAV_ITEMS.filter((item) => item.link).map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="py-3 text-base font-medium text-foreground border-b border-border/50 last:border-0"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/diagnostico"
                className="mt-4 py-3 px-5 bg-foreground text-background rounded-full text-center font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.requestDemo}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
      >
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6 flex items-center justify-center gap-3"
          >
            <span className="w-5 h-px bg-border" />
            {t.home.hero.kicker}
            <span className="w-5 h-px bg-border" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.0] mb-6 glow-hero"
          >
            <span className="text-foreground">{t.home.hero.titleLine1}</span><br />
            <span className="text-accent-glow">{t.home.hero.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            {t.home.hero.subtitle}
          </motion.p>

          {/* Checklist */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
            className="flex flex-col items-center gap-2 mb-10"
          >
            {t.home.hero.checklist.map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <Check className="w-4 h-4 text-foreground/40 shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full font-semibold text-sm hover:bg-foreground/85 transition-all duration-200 hover:-translate-y-0.5"
            >
              {t.home.hero.ctaDemo} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/5356999599?text=${encodeURIComponent(t.common.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-foreground rounded-full font-semibold text-sm hover:bg-muted transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" /> {t.home.hero.ctaWhatsapp}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section
        id="stats"
        ref={statsRef}
        className={`${darkSection} relative overflow-hidden section-divider`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <StatItem prefix="+" target={3} suffix={t.home.stats.experience.suffix} label={t.home.stats.experience.label} trigger={statsTrigger} />
            <StatItem prefix="+" target={50} suffix={t.home.stats.projects.suffix} label={t.home.stats.projects.label} trigger={statsTrigger} />
            <StatItem target={24} suffix={t.home.stats.automation.suffix} label={t.home.stats.automation.label} trigger={statsTrigger} />
            <StatItem target={100} suffix={t.home.stats.solutions.suffix} label={t.home.stats.solutions.label} trigger={statsTrigger} />
          </div>
        </div>
      </section>

      {/* ===== PROBLEMS ===== */}
      <section id="servicios" className="py-28 bg-muted/40 backdrop-blur-sm relative section-divider">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <AnimatedContainer>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {t.home.problems.kicker}
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight glow-title whitespace-pre-line">
                {t.home.problems.title}
              </h2>
            </AnimatedContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <ProblemCard delay={0.1} icon={TrendingDown} title={t.home.problems.cards.sales.title} desc={t.home.problems.cards.sales.desc} />
            <ProblemCard delay={0.2} icon={Package} title={t.home.problems.cards.inventory.title} desc={t.home.problems.cards.inventory.desc} />
            <ProblemCard delay={0.3} icon={Clock} title={t.home.problems.cards.service.title} desc={t.home.problems.cards.service.desc} />
            <ProblemCard delay={0.4} icon={RefreshCcw} title={t.home.problems.cards.repetitive.title} desc={t.home.problems.cards.repetitive.desc} />
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="productos" className="py-28 bg-background/50 backdrop-blur-sm relative section-divider">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <AnimatedContainer>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{t.home.products.kicker}</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter whitespace-pre-line">
                {t.home.products.title}
              </h2>
            </AnimatedContainer>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-border mb-10 overflow-x-auto scrollbar-none">
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-5 py-3 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors duration-150 ${
                  activeTab === p.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-8 grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-foreground text-background text-[11px] font-bold uppercase tracking-wider rounded-full mb-5">
                {activeProduct.badge}
              </span>
              <ActiveIcon className="w-8 h-8 mb-4 text-foreground" strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4">
                {activeProduct.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{activeProduct.desc}</p>
              <ul className="space-y-2.5 mb-8">
                {activeProduct.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground">
                    <span className="text-muted-foreground flex-shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={activeProduct.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-semibold text-sm hover:bg-foreground/85 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {t.home.products.ctaKnowMore} <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/5356999599?text=${encodeURIComponent(`${t.common.whatsappDefaultMessage} — ${activeProduct.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-semibold text-sm hover:bg-muted transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" /> {t.home.products.ctaWriteUs}
                </a>
              </div>
            </div>
            <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center">
              <ActiveIcon className="w-20 h-20 text-muted-foreground/30" strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="proceso" className={`${darkSection} py-28 relative overflow-hidden section-divider`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <AnimatedContainer>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">
                {t.home.process.kicker}
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white glow-title whitespace-pre-line">
                {t.home.process.title}
              </h2>
            </AnimatedContainer>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedContainer key={step.num} delay={0.1 + i * 0.1}>
                  <div className="glass-tile rounded-xl p-6 group hover:bg-white/[0.07] transition-all duration-300">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mb-5 group-hover:bg-white group-hover:border-white transition-all duration-300">
                      <span className="text-xs font-bold text-white/40 group-hover:text-black transition-colors duration-300">
                        {step.num}
                      </span>
                    </div>
                    <Icon className="w-5 h-5 text-white/30 mb-4 group-hover:text-white/60 transition-colors duration-300" strokeWidth={1.5} />
                    <h3 className="font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedContainer>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTORS ===== */}
      <section id="sectores" className="py-28 bg-background/50 backdrop-blur-sm relative section-divider">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <AnimatedContainer>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{t.home.sectors.kicker}</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter whitespace-pre-line">
                {t.home.sectors.title}
              </h2>
            </AnimatedContainer>
          </div>
          <div className="grid grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {SECTORS.map(({ icon: Icon, label }, i) => (
              <AnimatedContainer key={label} delay={0.05 * i}>
                <div className="glass-tile hover:bg-white/[0.08] group transition-all duration-200 flex flex-col items-center gap-3 p-7 text-center">
                  <Icon className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors duration-200" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    {label}
                  </span>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="nosotros" className="py-28 bg-muted/40 backdrop-blur-sm relative section-divider">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <AnimatedContainer>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{t.home.about.kicker}</p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 whitespace-pre-line">
                  {t.home.about.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t.home.about.paragraph}
                </p>
              </AnimatedContainer>
              <div className="space-y-4">
                <AnimatedContainer delay={0.2}>
                  <div className="border-l-2 border-foreground pl-5 py-1 bg-background">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{t.home.about.mission.label}</p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {t.home.about.mission.text}
                    </p>
                  </div>
                </AnimatedContainer>
                <AnimatedContainer delay={0.3}>
                  <div className="border-l-2 border-foreground pl-5 py-1 bg-background">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{t.home.about.vision.label}</p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {t.home.about.vision.text}
                    </p>
                  </div>
                </AnimatedContainer>
              </div>
            </div>
            <AnimatedContainer delay={0.2}>
              <div className="glass rounded-2xl aspect-[4/5] overflow-hidden relative flex items-center justify-center">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 48px)",
                  }}
                />
                <span className="text-8xl font-black tracking-tighter text-white/10 select-none relative z-10">AI</span>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </section>

      {/* ===== CEO — SECCIÓN DEDICADA ===== */}
      <section id="ceo" className={`${darkSection} py-32 relative overflow-hidden section-divider`}>
        {/* Glow ambiental de fondo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-white/[0.035] blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Encabezado */}
          <AnimatedContainer>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4 text-center">
              {t.home.ceo.kicker}
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white text-center glow-title mb-16">
              {t.home.ceo.title}
            </h2>
          </AnimatedContainer>

          {/* Foto + presentación */}
          <div className="flex flex-col items-center text-center mb-20">
            <AnimatedContainer>
              <div className="relative w-44 h-44 md:w-56 md:h-56 mb-9">
                {/* Halo de glow */}
                <div className="absolute -inset-6 rounded-full bg-white/15 blur-3xl opacity-70 pointer-events-none" />
                {/* Anillo de gradiente alrededor */}
                <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-white/70 via-white/10 to-white/50 pointer-events-none" />
                {/* Aro interior nítido */}
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 z-20 pointer-events-none" />
                {/* Foto */}
                <img
                  src="/ceo.png"
                  alt="Emanuel Villa López"
                  className="relative w-full h-full rounded-full object-cover object-center z-10"
                  onError={(e) => {
                    /* Fallback a iniciales si falta la foto */
                    const imgEl = e.currentTarget;
                    imgEl.style.display = "none";
                    const fallback = imgEl.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Iniciales fallback */}
                <div
                  className="relative w-full h-full rounded-full bg-white items-center justify-center text-black font-black text-4xl tracking-tighter z-10"
                  style={{ display: "none" }}
                >
                  EV
                </div>
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.12}>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-2">
                Emanuel Villa López
              </h3>
              <p className="text-sm md:text-base text-white/40 mb-6">
                {t.home.ceo.role}
              </p>
              <p className="text-sm md:text-base text-white/55 leading-relaxed max-w-2xl mx-auto">
                {t.home.ceo.bio}
              </p>
            </AnimatedContainer>
          </div>

          {/* Certificaciones — vista resumida con enlace a la página dedicada */}
          <AnimatedContainer>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6 text-center">
              {t.home.ceo.certsKicker}
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto mb-10">
              {ceoChips.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-sm font-medium text-white/60"
                >
                  {name}
                </span>
              ))}
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-sm font-medium text-white/40">
                {t.home.ceo.certPlusMore}
              </span>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1}>
            <div className="flex justify-center">
              <a
                href="/fundador"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5"
              >
                {t.home.ceo.ctaKnowFounder} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonios" className="py-28 bg-muted/40 backdrop-blur-sm relative section-divider">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <AnimatedContainer>
              <div className="inline-block border border-border px-4 py-1 rounded-lg text-xs font-medium mb-4 text-muted-foreground">
                {t.home.testimonials.kicker}
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter whitespace-pre-line">
                {t.home.testimonials.title}
              </h2>
              <p className="text-muted-foreground mt-4 text-sm max-w-sm mx-auto">
                {t.home.testimonials.subtitle}
              </p>
            </AnimatedContainer>
          </div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[680px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={18} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={16} />
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="cta-final" className={`${darkSection} py-32 text-center relative overflow-hidden section-divider`}>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <AnimatedContainer>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">{t.home.ctaFinal.kicker}</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-5 glow-hero whitespace-pre-line">
              {t.home.ctaFinal.title}
            </h2>
            <p className="text-white/50 mb-3 leading-relaxed">
              {t.home.ctaFinal.text1}
            </p>
            <p className="text-white/30 text-sm mb-10">
              {t.home.ctaFinal.text2}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/5356999599?text=${encodeURIComponent(t.common.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5"
              >
                <Smartphone className="w-4 h-4" /> {t.home.ctaFinal.ctaWhatsapp}
              </a>
              <a
                href="mailto:info@epicsai.cu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" /> {t.home.ctaFinal.ctaEmail}
              </a>
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <div className="bg-[#111] px-4">
        <Footer />
      </div>
    </div>
  );
}
