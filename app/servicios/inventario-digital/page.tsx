"use client";
import { EditorialServicePage, type EditorialServiceData } from "@/components/ui/editorial-service-page";
import { useLanguage } from "@/app/context/LanguageContext";

const WA =
  "https://wa.me/5356999599?text=Estoy%20interesado%20en%20Inventario%20para%20Mipymes%20de%20EPICS%20AI";
const WA_EN =
  "https://wa.me/5356999599?text=I'm%20interested%20in%20Inventory%20for%20MSMEs%20from%20EPICS%20AI";

/* Real photos (Unsplash, free license):
   - Hero: warehouse staff checking stock with a clipboard — Centre for Ageing Better — photo-1664382953403-fc1ac77073a0
   - Supporting: warehouse shelving full of boxes on pallets — Arum Visuals — photo-1672552226380-486fe900b322 */
const IMG_HERO = "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?auto=format&fit=crop&w=1600&q=80";
const IMG_SUPPORT = "https://images.unsplash.com/photo-1672552226380-486fe900b322?auto=format&fit=crop&w=1600&q=80";

const dataEs: EditorialServiceData = {
  badge: "Inventario para Mipymes — EPICS AI",
  accentHex: "#8B5CF6",
  waLink: WA,

  hero: {
    headline: "Tu negocio está creciendo.\n¿Tu control también?",
    subheadline:
      "Toda tu mercancía organizada en un solo lugar, con movimientos registrados y existencias siempre actualizadas. Sin libretas, sin Excel interminables, sin depender de la memoria.",
    imgLabel: "GIF o imagen — panel de inventario en acción",
    imgSrc: IMG_HERO,
    imgAlt: "Personal de almacén revisando existencias con una tablilla",
  },

  problem: {
    sectionLabel: "El problema",
    headline: "El inventario no debería ser una preocupación diaria.",
    paragraphs: [
      "Muchos emprendedores empiezan gestionando su inventario de memoria, en una libreta o en varias hojas de Excel. Funciona durante un tiempo... hasta que aparecen los problemas: productos perdidos, faltantes que nadie puede explicar, compras duplicadas, mercancía vencida o dinero que simplemente no se sabe dónde quedó.",
      "Cuando no tienes una visión clara de lo que entra y sale, cada decisión se convierte en una apuesta. ¿Debes volver a comprar ese producto? ¿Quedan suficientes unidades? ¿Se vendió realmente todo lo que falta? Sin información precisa, es imposible saberlo.",
    ],
    imgLabel: "GIF o imagen — libreta y Excel vs. sistema digital",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Estantería de almacén llena de cajas sobre tarimas",
    imgRight: true,
  },

  bridge: {
    text: "Lo que no controlas, te cuesta.",
    subtext: "Deja de adivinar lo que tienes. Empieza a saberlo.",
  },

  solution: {
    sectionLabel: "La solución",
    headline: "Control real sobre tu negocio.",
    paragraphs: [
      "Inventario para Mipymes organiza toda tu mercancía en un solo lugar, con movimientos registrados y existencias actualizadas para que siempre sepas qué tienes disponible.",
      "Sin depender de la memoria. Sin revisar papeles. Sin perder horas buscando información.",
    ],
    imgLabel: "GIF o imagen — registro de entradas y salidas",
    imgSrc: IMG_HERO,
    imgAlt: "Trabajadores de almacén revisando el inventario disponible",
    imgRight: false,
  },

  benefitBlocks: [
    {
      headline: "Toma decisiones con datos, no con suposiciones.",
      body: "Cuando sabes exactamente qué productos se venden más, cuáles se mueven lento y qué cantidades tienes disponibles, administrar tu negocio se vuelve mucho más sencillo. Menos improvisación. Más control. Más tranquilidad.",
      imgLabel: "GIF o imagen — reporte de productos más vendidos",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Cajas organizadas en estanterías de un almacén",
    },
    {
      headline: "Encuentra cualquier producto en segundos.",
      body: "Olvídate de revisar almacenes completos o buscar entre hojas de cálculo interminables. Con toda la información organizada, localizar productos, consultar existencias y revisar movimientos toma segundos.",
      imgLabel: "GIF o imagen — búsqueda instantánea de productos",
      imgSrc: IMG_HERO,
      imgAlt: "Personal de almacén localizando productos con ayuda de una tablilla",
    },
  ],

  authority: {
    sectionLabel: "Para quién es",
    headline: "Diseñado para la realidad de las mipymes.",
    body: "Sabemos cómo funcionan los negocios porque trabajamos con ellos todos los días. Por eso desarrollamos una solución práctica, sencilla y pensada para resolver los problemas reales que enfrentan las mipymes, los trabajadores por cuenta propia y los comercios de cualquier tamaño.",
    imgLabel: "GIF o imagen — el sistema en un comercio real",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Almacén de un negocio real con mercancía organizada",
    imgRight: true,
  },

  urgency: {
    headline: "Cada producto cuenta.",
    body: "Una unidad perdida aquí, otra sin registrar allá y, al final del mes, las diferencias pueden representar una cantidad importante de dinero. Un inventario bien controlado protege tu inversión y te ayuda a crecer con confianza.",
  },

  cta: {
    headline: "Más orden. Más control.\nMás crecimiento.",
    body: "Mantén tu negocio organizado para enfocarte en lo realmente importante: vender más, atender mejor a tus clientes y seguir creciendo. Porque cuando sabes exactamente lo que tienes, puedes planificar mejor lo que viene.",
    btnText: "Quiero organizar mi inventario",
  },

  banners: [
    "Lo que no controlas, te cuesta.",
    "Tu inventario organizado. Tu negocio protegido.",
    "Deja de adivinar lo que tienes. Empieza a saberlo.",
    "Un negocio que sabe lo que vende, crece más rápido.",
  ],
};

const dataEn: EditorialServiceData = {
  badge: "Inventory for MSMEs — EPICS AI",
  accentHex: "#8B5CF6",
  waLink: WA_EN,

  hero: {
    headline: "Your business is growing.\nIs your control keeping up?",
    subheadline:
      "All your merchandise organized in one place, with every movement logged and stock always up to date. No notebooks, no endless spreadsheets, no relying on memory.",
    imgLabel: "GIF or image — inventory dashboard in action",
    imgSrc: IMG_HERO,
    imgAlt: "Warehouse staff checking stock with a clipboard",
  },

  problem: {
    sectionLabel: "The problem",
    headline: "Inventory shouldn't be a daily worry.",
    paragraphs: [
      "Many entrepreneurs start out managing inventory from memory, in a notebook, or across several spreadsheets. It works for a while... until the problems show up: lost products, shortages nobody can explain, duplicate purchases, expired stock, or money that simply can't be accounted for.",
      "When you don't have a clear view of what comes in and goes out, every decision becomes a gamble. Should you reorder that product? Are there enough units left? Did everything that's missing actually sell? Without accurate information, there's no way to know.",
    ],
    imgLabel: "GIF or image — notebook and spreadsheets vs. digital system",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Warehouse shelving full of boxes on pallets",
    imgRight: true,
  },

  bridge: {
    text: "What you don't control costs you.",
    subtext: "Stop guessing what you have. Start knowing it.",
  },

  solution: {
    sectionLabel: "The solution",
    headline: "Real control over your business.",
    paragraphs: [
      "Inventory for MSMEs organizes all your merchandise in one place, with logged movements and up-to-date stock so you always know what's available.",
      "No relying on memory. No digging through papers. No wasting hours looking for information.",
    ],
    imgLabel: "GIF or image — logging inbound and outbound stock",
    imgSrc: IMG_HERO,
    imgAlt: "Warehouse workers reviewing available inventory",
    imgRight: false,
  },

  benefitBlocks: [
    {
      headline: "Make decisions with data, not guesswork.",
      body: "When you know exactly which products sell the most, which move slowly, and how much you have available, running your business becomes much simpler. Less improvisation. More control. More peace of mind.",
      imgLabel: "GIF or image — best-selling products report",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Boxes organized on warehouse shelving",
    },
    {
      headline: "Find any product in seconds.",
      body: "Forget searching entire warehouses or scrolling through endless spreadsheets. With all your information organized, locating products, checking stock, and reviewing movements takes seconds.",
      imgLabel: "GIF or image — instant product search",
      imgSrc: IMG_HERO,
      imgAlt: "Warehouse staff locating products with the help of a clipboard",
    },
  ],

  authority: {
    sectionLabel: "Who it's for",
    headline: "Built for the reality of small businesses.",
    body: "We know how businesses work because we work with them every day. That's why we developed a practical, simple solution designed to solve the real problems faced by MSMEs, self-employed workers, and shops of any size.",
    imgLabel: "GIF or image — the system in a real shop",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Warehouse of a real business with organized merchandise",
    imgRight: true,
  },

  urgency: {
    headline: "Every product counts.",
    body: "One lost unit here, another unlogged there, and by the end of the month the differences can add up to a significant amount of money. A well-controlled inventory protects your investment and helps you grow with confidence.",
  },

  cta: {
    headline: "More order. More control.\nMore growth.",
    body: "Keep your business organized so you can focus on what really matters: selling more, serving your customers better, and continuing to grow. Because when you know exactly what you have, you can plan what's next much better.",
    btnText: "I want to organize my inventory",
  },

  banners: [
    "What you don't control costs you.",
    "Your inventory organized. Your business protected.",
    "Stop guessing what you have. Start knowing it.",
    "A business that knows what it sells grows faster.",
  ],
};

export default function InventarioMipymesPage() {
  const { language } = useLanguage();
  return <EditorialServicePage data={language === "en" ? dataEn : dataEs} />;
}
