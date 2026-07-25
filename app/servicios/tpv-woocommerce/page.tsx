"use client";
import { EditorialServicePage, type EditorialServiceData } from "@/components/ui/editorial-service-page";
import { useLanguage } from "@/app/context/LanguageContext";

const WA =
  "https://wa.me/5356999599?text=Estoy%20interesado%20en%20el%20TPV%20para%20WooCommerce%20de%20EPICS%20AI";
const WA_EN =
  "https://wa.me/5356999599?text=I'm%20interested%20in%20the%20POS%20for%20WooCommerce%20from%20EPICS%20AI";

/* Real photos (Unsplash, free license), same photographer/shoot for visual cohesion:
   - Hero: close-up hands processing a sale on a POS machine — Simon Kadula — photo-1647427017067-8f33ccbae493
   - Supporting: tablet-based POS terminal at a checkout counter — Simon Kadula — photo-1647427017458-f6df91d046eb */
const IMG_HERO = "https://images.unsplash.com/photo-1647427017067-8f33ccbae493?auto=format&fit=crop&w=1600&q=80";
const IMG_SUPPORT = "https://images.unsplash.com/photo-1647427017458-f6df91d046eb?auto=format&fit=crop&w=1600&q=80";

const dataEs: EditorialServiceData = {
  badge: "TPV para WooCommerce — EPICS AI",
  accentHex: "#3B82F6",
  waLink: WA,

  hero: {
    headline: "Convierte el caos\nen control.",
    subheadline:
      "Cuando las ventas se apuntan en papeles, libretas o WhatsApp, los problemas aparecen solos. Nuestro TPV conecta tus ventas con tu inventario para que cada movimiento quede registrado automáticamente.",
    imgLabel: "GIF o imagen — el TPV registrando una venta",
    imgSrc: IMG_HERO,
    imgAlt: "Manos procesando una venta en una terminal de punto de venta",
  },

  problem: {
    sectionLabel: "El problema",
    headline: "El problema no es vender más. Es controlar lo que ya estás vendiendo.",
    paragraphs: [
      "Muchos negocios empiezan gestionando sus ventas a mano: un papel aquí, una libreta allá, una nota en el teléfono y varios mensajes de WhatsApp. Al principio parece suficiente. Pero cuando las ventas aumentan, también aumentan los errores.",
      "Productos vendidos dos veces. Inventarios que no coinciden. Cuentas que no cuadran al final del día. Horas perdidas intentando descubrir qué pasó.",
    ],
    imgLabel: "GIF o imagen — apuntes manuales desordenados",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Terminal de punto de venta con tablet en un mostrador de tienda",
    imgRight: true,
  },

  bridge: {
    text: "Cada venta genera información valiosa. No la pierdas en una libreta.",
    subtext:
      "Qué se vendió, cuánto se cobró, quién atendió, qué queda disponible. Cuando todo se registra a mano, encontrar esa información agota. Y mientras buscas datos, pierdes tiempo que podrías dedicar a vender.",
  },

  solution: {
    sectionLabel: "La solución",
    headline: "Recupera el control de tu negocio.",
    paragraphs: [
      "Nuestro TPV para WooCommerce conecta tus ventas con tu inventario para que cada movimiento quede registrado automáticamente.",
      "Ya no necesitas revisar papeles, hojas de cálculo ni conversaciones antiguas para saber qué ocurrió. Toda la información queda organizada y disponible cuando la necesites.",
    ],
    imgLabel: "GIF o imagen — venta sincronizada con el inventario",
    imgSrc: IMG_HERO,
    imgAlt: "Vendedora procesando el pago de un cliente en la terminal de venta",
    imgRight: false,
  },

  benefitBlocks: [
    {
      headline: "Menos confusión. Más claridad.",
      body: "Imagina terminar el día sabiendo exactamente cuánto vendiste, qué productos salieron, qué artículos quedan en inventario y cuáles son tus más vendidos. Sin cálculos manuales. Sin revisar decenas de notas. Sin adivinar.",
      imgLabel: "GIF o imagen — resumen de cierre del día",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Terminal de venta con tablet mostrando el resumen de una transacción",
    },
    {
      headline: "Cada venta registrada. Cada producto controlado.",
      body: "El inventario se actualiza solo con cada venta. Se acabaron los productos vendidos dos veces, las existencias fantasma y las sorpresas al hacer el conteo. Tu tienda física y tu tienda online, siempre en sintonía.",
      imgLabel: "GIF o imagen — stock actualizándose en tiempo real",
      imgSrc: IMG_HERO,
      imgAlt: "Cierre de una venta en una terminal de punto de venta",
    },
  ],

  authority: {
    sectionLabel: "Para quién es",
    headline: "Diseñado para negocios reales.",
    body: "Tiendas de ropa, calzado, perfumerías, ferreterías, minimercados y pequeños comercios enfrentan el mismo desafío: mantener el control mientras siguen creciendo. Por eso creamos una solución simple de usar y potente para administrar ventas e inventario desde un solo lugar.",
    imgLabel: "GIF o imagen — el TPV en un comercio real",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Terminal de punto de venta en funcionamiento dentro de una tienda",
    imgRight: true,
  },

  urgency: {
    headline: "Cada error de inventario cuesta dinero.",
    body: "Cuando un producto desaparece sin explicación, cuando una venta no queda registrada o cuando los números no coinciden, el negocio pierde. Un sistema organizado no solo ahorra tiempo: protege tus ganancias y te permite tomar mejores decisiones.",
  },

  cta: {
    headline: "Deja atrás las libretas\ny los apuntes improvisados.",
    body: "Gestiona tus ventas con confianza, mantén tu inventario actualizado y obtén una visión clara de todo lo que ocurre en tu negocio. Porque un negocio que sabe exactamente lo que vende, puede crecer mucho más rápido.",
    btnText: "Quiero el TPV para mi negocio",
  },

  banners: [
    "Deja de adivinar. Empieza a saber.",
    "Cada venta registrada. Cada producto controlado. Cero sorpresas.",
    "Tu inventario no debería ser un misterio.",
    "Vende más. Controla todo. Invierte tu tiempo en otra cosa.",
  ],
};

const dataEn: EditorialServiceData = {
  badge: "POS for WooCommerce — EPICS AI",
  accentHex: "#3B82F6",
  waLink: WA_EN,

  hero: {
    headline: "Turn chaos\ninto control.",
    subheadline:
      "When sales get jotted down on paper, in notebooks, or over WhatsApp, problems show up on their own. Our POS connects your sales to your inventory so every movement gets logged automatically.",
    imgLabel: "GIF or image — the POS logging a sale",
    imgSrc: IMG_HERO,
    imgAlt: "Hands processing a sale at a point-of-sale terminal",
  },

  problem: {
    sectionLabel: "The problem",
    headline: "The problem isn't selling more. It's controlling what you're already selling.",
    paragraphs: [
      "Many businesses start out managing sales by hand: a piece of paper here, a notebook there, a note on the phone, and several WhatsApp messages. At first it seems like enough. But as sales grow, so do the errors.",
      "Products sold twice. Inventory that doesn't add up. Accounts that don't balance at the end of the day. Hours lost trying to figure out what happened.",
    ],
    imgLabel: "GIF or image — messy manual notes",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Tablet-based point-of-sale terminal on a store counter",
    imgRight: true,
  },

  bridge: {
    text: "Every sale generates valuable information. Don't lose it in a notebook.",
    subtext:
      "What sold, how much was charged, who served the customer, what's left in stock. When everything is logged by hand, finding that information is exhausting. And while you search for data, you lose time you could spend selling.",
  },

  solution: {
    sectionLabel: "The solution",
    headline: "Take back control of your business.",
    paragraphs: [
      "Our POS for WooCommerce connects your sales to your inventory so every movement gets logged automatically.",
      "You no longer need to dig through papers, spreadsheets, or old conversations to know what happened. All the information stays organized and available whenever you need it.",
    ],
    imgLabel: "GIF or image — sale synced with inventory",
    imgSrc: IMG_HERO,
    imgAlt: "Salesperson processing a customer's payment at the checkout terminal",
    imgRight: false,
  },

  benefitBlocks: [
    {
      headline: "Less confusion. More clarity.",
      body: "Imagine ending the day knowing exactly how much you sold, which products went out, what's left in inventory, and what your best sellers are. No manual calculations. No digging through dozens of notes. No guessing.",
      imgLabel: "GIF or image — end-of-day summary",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Tablet-based POS terminal displaying a transaction summary",
    },
    {
      headline: "Every sale logged. Every product tracked.",
      body: "Inventory updates itself with every sale. No more products sold twice, phantom stock, or surprises when you do the count. Your physical store and your online store, always in sync.",
      imgLabel: "GIF or image — stock updating in real time",
      imgSrc: IMG_HERO,
      imgAlt: "Closing out a sale at a point-of-sale terminal",
    },
  ],

  authority: {
    sectionLabel: "Who it's for",
    headline: "Built for real businesses.",
    body: "Clothing stores, shoe shops, perfumeries, hardware stores, mini-markets, and small shops all face the same challenge: staying in control while they keep growing. That's why we built a solution that's simple to use and powerful enough to manage sales and inventory from one place.",
    imgLabel: "GIF or image — the POS in a real shop",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Point-of-sale terminal in operation inside a store",
    imgRight: true,
  },

  urgency: {
    headline: "Every inventory error costs money.",
    body: "When a product disappears without explanation, when a sale doesn't get logged, or when the numbers don't add up, the business loses. An organized system doesn't just save time — it protects your profits and lets you make better decisions.",
  },

  cta: {
    headline: "Leave behind the notebooks\nand improvised notes.",
    body: "Manage your sales with confidence, keep your inventory up to date, and get a clear view of everything happening in your business. Because a business that knows exactly what it sells can grow much faster.",
    btnText: "I want the POS for my business",
  },

  banners: [
    "Stop guessing. Start knowing.",
    "Every sale logged. Every product tracked. Zero surprises.",
    "Your inventory shouldn't be a mystery.",
    "Sell more. Control everything. Spend your time on something else.",
  ],
};

export default function TPVWooCommercePage() {
  const { language } = useLanguage();
  return <EditorialServicePage data={language === "en" ? dataEn : dataEs} />;
}
