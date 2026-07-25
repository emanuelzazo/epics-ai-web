"use client";
import { EditorialServicePage, type EditorialServiceData } from "@/components/ui/editorial-service-page";
import { useLanguage } from "@/app/context/LanguageContext";

const WA =
  "https://wa.me/5356999599?text=Estoy%20interesado%20en%20Desarrollo%20Web%20Profesional%20de%20EPICS%20AI";
const WA_EN =
  "https://wa.me/5356999599?text=I'm%20interested%20in%20Professional%20Web%20Development%20from%20EPICS%20AI";

/* Real photos (Unsplash, free license):
   - Hero: close-up of HTML code — Florian Olivo — photo-1542831371-29b0f74f9713
   - Supporting: monitor displaying a finished website — Safar Safarov — photo-1614741118887-7a4ee193a5fa */
const IMG_HERO = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=80";
const IMG_SUPPORT = "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1600&q=80";

const dataEs: EditorialServiceData = {
  badge: "Desarrollo Web Profesional — EPICS AI",
  accentHex: "#F43F5E",
  waLink: WA,

  hero: {
    headline: "Tu web es tu mejor vendedor.\nO tu peor carta de presentación.",
    subheadline:
      "Sitios modernos, rápidos y pensados para convertir visitantes en clientes. No es solo diseño bonito: es tu negocio trabajando las 24 horas.",
    imgLabel: "GIF o imagen — sitio web terminado, vista desktop",
    imgSrc: IMG_HERO,
    imgAlt: "Líneas de código HTML en la pantalla de un desarrollador web",
  },

  problem: {
    sectionLabel: "El problema",
    headline: "Los clientes juzgan tu negocio por tu web antes de hablar contigo.",
    paragraphs: [
      "Una web lenta, desactualizada o que se ve mal en el teléfono comunica exactamente lo contrario de lo que quieres transmitir. La mayoría de tus visitantes llega desde el móvil, decide en segundos y no da segundas oportunidades.",
    ],
    imgLabel: "GIF o imagen — web antigua vs. web moderna",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Monitor mostrando un sitio web terminado y moderno",
    imgRight: false,
  },

  bridge: {
    text: "No necesitas una web más. Necesitas una que venda.",
  },

  solution: {
    sectionLabel: "La solución",
    headline: "Diseño que genera confianza. Velocidad que retiene.",
    paragraphs: [
      "Construimos sitios con diseño premium, carga en menos de dos segundos y adaptación perfecta a cualquier dispositivo. Cada sección está pensada para guiar al visitante hacia una acción: escribirte, comprar o reservar.",
    ],
    imgLabel: "GIF o imagen — la web en móvil y desktop",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Pantalla de computadora mostrando un sitio web moderno y responsive",
    imgRight: true,
  },

  benefitBlocks: [
    {
      headline: "Aparece cuando te buscan.",
      body: "Optimización para Google desde el primer día, para que tus clientes te encuentren cuando buscan lo que vendes. Con analítica integrada para saber cuántos te visitan y qué hacen en tu sitio.",
      imgLabel: "GIF o imagen — resultados en Google / analítica",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Pantalla de computadora con un sitio web y métricas de tráfico",
    },
    {
      headline: "Una imagen que vende sola.",
      body: "Cuando tu web se ve profesional, el cliente asume que tu negocio también lo es. Esa primera impresión abre conversaciones, justifica precios y cierra ventas.",
      imgLabel: "GIF o imagen — diseño premium en pantalla",
      imgSrc: IMG_HERO,
      imgAlt: "Código fuente de un sitio web con diseño cuidado",
    },
  ],

  authority: {
    sectionLabel: "Cómo trabajamos",
    headline: "Estrategia primero. Código después.",
    body: "Antes de diseñar definimos contigo los objetivos, la audiencia y el contenido que mejor comunica tu valor. Luego construimos, publicamos y te entregamos todo funcionando: dominio, SEO y analítica incluidos.",
    imgLabel: "GIF o imagen — proceso de diseño y entrega",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Pantalla mostrando el sitio web ya publicado y funcionando",
    imgRight: false,
  },

  urgency: {
    headline: "Cada día sin una web profesional, alguien elige a tu competencia.",
    body: "Los clientes que no te encuentran o no confían en lo que ven, no te escriben. Simplemente compran en otro lado, y nunca sabes que los perdiste.",
  },

  cta: {
    headline: "Dale a tu negocio la presencia que merece.",
    body: "Cuéntanos qué haces y te proponemos la web ideal para tu caso: diseño, contenido y posicionamiento, todo resuelto por un solo equipo.",
    btnText: "Quiero mi web profesional",
  },

  banners: [
    "Tu web trabaja 24 horas. Haz que trabaje bien.",
    "Primera impresión solo hay una.",
    "Diseño que convierte visitas en clientes.",
    "Si no te encuentran en Google, no existes.",
  ],
};

const dataEn: EditorialServiceData = {
  badge: "Professional Web Development — EPICS AI",
  accentHex: "#F43F5E",
  waLink: WA_EN,

  hero: {
    headline: "Your website is your best salesperson.\nOr your worst first impression.",
    subheadline:
      "Modern, fast sites built to convert visitors into customers. It's not just pretty design — it's your business working around the clock.",
    imgLabel: "GIF or image — finished website, desktop view",
    imgSrc: IMG_HERO,
    imgAlt: "Lines of HTML code on a web developer's screen",
  },

  problem: {
    sectionLabel: "The problem",
    headline: "Customers judge your business by your website before they ever talk to you.",
    paragraphs: [
      "A slow, outdated site — or one that looks broken on a phone — sends exactly the opposite message you want. Most of your visitors arrive from mobile, decide in seconds, and rarely give second chances.",
    ],
    imgLabel: "GIF or image — old website vs. modern website",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Computer monitor displaying a finished, modern website",
    imgRight: false,
  },

  bridge: {
    text: "You don't need another website. You need one that sells.",
  },

  solution: {
    sectionLabel: "The solution",
    headline: "Design that builds trust. Speed that keeps people around.",
    paragraphs: [
      "We build sites with premium design, sub-two-second load times, and flawless adaptation to any device. Every section is designed to guide the visitor toward one action: messaging you, buying, or booking.",
    ],
    imgLabel: "GIF or image — the site on mobile and desktop",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Computer screen showing a modern, responsive website",
    imgRight: true,
  },

  benefitBlocks: [
    {
      headline: "Show up when people search for you.",
      body: "Google optimization from day one, so your customers find you when they search for what you sell. With built-in analytics so you know how many people visit and what they do on your site.",
      imgLabel: "GIF or image — Google results / analytics",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Computer screen showing a website and traffic metrics",
    },
    {
      headline: "An image that sells on its own.",
      body: "When your website looks professional, customers assume your business is too. That first impression opens conversations, justifies prices, and closes sales.",
      imgLabel: "GIF or image — premium design on screen",
      imgSrc: IMG_HERO,
      imgAlt: "Source code of a carefully designed website",
    },
  ],

  authority: {
    sectionLabel: "How we work",
    headline: "Strategy first. Code second.",
    body: "Before we design anything, we define goals, audience, and the content that best communicates your value with you. Then we build, publish, and hand over everything working: domain, SEO, and analytics included.",
    imgLabel: "GIF or image — design and delivery process",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Screen showing the published, working website",
    imgRight: false,
  },

  urgency: {
    headline: "Every day without a professional website, someone chooses your competitor.",
    body: "Customers who can't find you, or don't trust what they see, don't write to you. They simply buy elsewhere — and you never even know you lost them.",
  },

  cta: {
    headline: "Give your business the presence it deserves.",
    body: "Tell us what you do and we'll propose the ideal website for your case: design, content, and search positioning, all handled by one team.",
    btnText: "I want my professional website",
  },

  banners: [
    "Your website works 24 hours. Make it work well.",
    "You only get one first impression.",
    "Design that turns visits into customers.",
    "If Google can't find you, you don't exist.",
  ],
};

export default function DesarrolloWebPage() {
  const { language } = useLanguage();
  return <EditorialServicePage data={language === "en" ? dataEn : dataEs} />;
}
