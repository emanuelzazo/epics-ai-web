"use client";
import { EditorialServicePage, type EditorialServiceData } from "@/components/ui/editorial-service-page";
import { useLanguage } from "@/app/context/LanguageContext";

const WA =
  "https://wa.me/5356999599?text=Estoy%20interesado%20en%20el%20Sistema%20para%20MIPYMES%20de%20EPICS%20AI";
const WA_EN =
  "https://wa.me/5356999599?text=I'm%20interested%20in%20the%20MSME%20System%20from%20EPICS%20AI";

/* Real photos (Unsplash, free license), same photographer/shoot for visual cohesion:
   - Hero: two small business/cafe owners together in their shop — Vitaly Gariev — photo-1753351052617-62818ffc9173
   - Supporting: small business owner smiling in her shop — Vitaly Gariev — photo-1753351052363-53ce102830eb */
const IMG_HERO = "https://images.unsplash.com/photo-1753351052617-62818ffc9173?auto=format&fit=crop&w=1600&q=80";
const IMG_SUPPORT = "https://images.unsplash.com/photo-1753351052363-53ce102830eb?auto=format&fit=crop&w=1600&q=80";

const dataEs: EditorialServiceData = {
  badge: "Sistema para MIPYMES y TCP — EPICS AI",
  accentHex: "#06B6D4",
  waLink: WA,

  hero: {
    headline: "Toda tu empresa,\nen una sola plataforma.",
    subheadline:
      "Clientes, ventas, inventario y estadísticas en tiempo real. Deja atrás las hojas de cálculo dispersas y administra tu negocio desde un solo lugar.",
    imgLabel: "GIF o imagen — dashboard principal del sistema",
    imgSrc: IMG_HERO,
    imgAlt: "Dos emprendedores de un pequeño negocio posando juntos en su local",
  },

  problem: {
    sectionLabel: "El problema",
    headline: "La información de tu empresa no debería vivir en diez lugares distintos.",
    paragraphs: [
      "Un cuaderno para clientes, un Excel para ventas, otro archivo para inventario y notas sueltas por todas partes. Cuando alguien falta, nadie sabe dónde están los datos. Y generar un simple reporte del mes puede tomar horas.",
    ],
    imgLabel: "GIF o imagen — información dispersa vs. centralizada",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Dueña de un pequeño negocio sonriendo en su local comercial",
    imgRight: true,
  },

  bridge: {
    text: "Lo que no puedes ver, no lo puedes dirigir.",
    subtext:
      "Cuando toda la operación está en un solo lugar, dirigir el negocio deja de ser un acto de fe.",
  },

  solution: {
    sectionLabel: "La solución",
    headline: "Un sistema que crece contigo.",
    paragraphs: [
      "Gestión de clientes, ventas, facturación, inventario y empleados, todo conectado. Cada venta actualiza el inventario, cada cliente queda registrado con su historial y las estadísticas se generan solas.",
    ],
    imgLabel: "GIF o imagen — módulos del sistema en acción",
    imgSrc: IMG_HERO,
    imgAlt: "Socios de un pequeño negocio trabajando juntos en su local",
    imgRight: false,
  },

  benefitBlocks: [
    {
      headline: "Decisiones con datos reales, no con intuición.",
      body: "Ventas del día, productos más vendidos, clientes activos y tendencias del negocio, siempre actualizados. Termina el mes sabiendo exactamente cómo te fue y por qué.",
      imgLabel: "GIF o imagen — estadísticas en tiempo real",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Propietaria de un negocio revisando su operación diaria",
    },
    {
      headline: "Tu equipo trabajando en orden, no en el caos.",
      body: "Cada persona accede a lo que necesita según su rol. Sin doble entrada de datos, sin versiones distintas del mismo archivo, sin depender de la memoria de nadie.",
      imgLabel: "GIF o imagen — gestión de equipo y roles",
      imgSrc: IMG_HERO,
      imgAlt: "Equipo de un pequeño negocio trabajando de forma organizada",
    },
  ],

  authority: {
    sectionLabel: "Para quién es",
    headline: "Hecho para la realidad de las MIPYMES y los TCP.",
    body: "Trabajamos con negocios cubanos todos los días y conocemos sus retos. Por eso el sistema es simple de usar, se adapta a tus procesos y entra en funcionamiento con acompañamiento de nuestro equipo desde el primer día.",
    imgLabel: "GIF o imagen — el sistema en un negocio real",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Emprendedora cubana en su negocio comercial",
    imgRight: true,
  },

  urgency: {
    headline: "Cada mes desorganizado cuesta dinero.",
    body: "Horas perdidas buscando información, errores de facturación y decisiones tomadas a ciegas. Un negocio ordenado no solo ahorra tiempo: protege sus ganancias.",
  },

  cta: {
    headline: "Administra tu empresa con claridad.",
    body: "Centraliza tu operación, dale orden a tu equipo y ten siempre una visión clara de cómo va el negocio. Todo desde una sola plataforma.",
    btnText: "Quiero el sistema para mi empresa",
  },

  banners: [
    "Una sola plataforma. Todo el negocio.",
    "Menos hojas de cálculo. Más control.",
    "La información donde la necesitas, cuando la necesitas.",
    "Un negocio ordenado crece más rápido.",
  ],
};

const dataEn: EditorialServiceData = {
  badge: "System for MSMEs & Self-Employed — EPICS AI",
  accentHex: "#06B6D4",
  waLink: WA_EN,

  hero: {
    headline: "Your whole business,\non a single platform.",
    subheadline:
      "Customers, sales, inventory, and real-time statistics. Leave scattered spreadsheets behind and run your business from one place.",
    imgLabel: "GIF or image — main system dashboard",
    imgSrc: IMG_HERO,
    imgAlt: "Two small business owners posing together in their shop",
  },

  problem: {
    sectionLabel: "The problem",
    headline: "Your company's information shouldn't live in ten different places.",
    paragraphs: [
      "A notebook for customers, a spreadsheet for sales, another file for inventory, and loose notes everywhere. When someone's out, nobody knows where the data is. And producing a simple monthly report can take hours.",
    ],
    imgLabel: "GIF or image — scattered vs. centralized information",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Small business owner smiling in her shop",
    imgRight: true,
  },

  bridge: {
    text: "What you can't see, you can't manage.",
    subtext:
      "When your whole operation lives in one place, running the business stops being an act of faith.",
  },

  solution: {
    sectionLabel: "The solution",
    headline: "A system that grows with you.",
    paragraphs: [
      "Customer management, sales, invoicing, inventory, and staff — all connected. Every sale updates inventory, every customer is logged with their history, and statistics generate themselves.",
    ],
    imgLabel: "GIF or image — system modules in action",
    imgSrc: IMG_HERO,
    imgAlt: "Small business partners working together in their shop",
    imgRight: false,
  },

  benefitBlocks: [
    {
      headline: "Decisions based on real data, not guesswork.",
      body: "Daily sales, best-selling products, active customers, and business trends, always up to date. End the month knowing exactly how you did and why.",
      imgLabel: "GIF or image — real-time statistics",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Business owner reviewing her daily operations",
    },
    {
      headline: "Your team working in order, not chaos.",
      body: "Each person accesses what they need based on their role. No duplicate data entry, no different versions of the same file, no relying on anyone's memory.",
      imgLabel: "GIF or image — team and role management",
      imgSrc: IMG_HERO,
      imgAlt: "Small business team working in an organized way",
    },
  ],

  authority: {
    sectionLabel: "Who it's for",
    headline: "Built for the reality of MSMEs and self-employed workers.",
    body: "We work with Cuban businesses every day and know their challenges. That's why the system is simple to use, adapts to your processes, and goes live with hands-on support from our team from day one.",
    imgLabel: "GIF or image — the system in a real business",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Cuban entrepreneur in her retail business",
    imgRight: true,
  },

  urgency: {
    headline: "Every disorganized month costs money.",
    body: "Hours lost searching for information, invoicing errors, and decisions made blindly. An organized business doesn't just save time — it protects its profits.",
  },

  cta: {
    headline: "Run your business with clarity.",
    body: "Centralize your operation, bring order to your team, and always have a clear view of how the business is doing. All from a single platform.",
    btnText: "I want the system for my business",
  },

  banners: [
    "One platform. The whole business.",
    "Fewer spreadsheets. More control.",
    "Information where you need it, when you need it.",
    "An organized business grows faster.",
  ],
};

export default function SistemaMipymesPage() {
  const { language } = useLanguage();
  return <EditorialServicePage data={language === "en" ? dataEn : dataEs} />;
}
