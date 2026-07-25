"use client";
import { EditorialServicePage, type EditorialServiceData } from "@/components/ui/editorial-service-page";
import { useLanguage } from "@/app/context/LanguageContext";

const WA =
  "https://wa.me/5356999599?text=Estoy%20interesado%20en%20WhatsApp%20Automatizado%20de%20EPICS%20AI";
const WA_EN =
  "https://wa.me/5356999599?text=I'm%20interested%20in%20Automated%20WhatsApp%20from%20EPICS%20AI";

/* Real photos (Unsplash, free license):
   - Hero: hand holding a smartphone — Priscilla Du Preez — photo-1488509082528-cefbba5ad692
   - Supporting: selective-focus shot of someone using a smartphone — freestocks — photo-1526045612212-70caf35c14df */
const IMG_HERO = "https://images.unsplash.com/photo-1488509082528-cefbba5ad692?auto=format&fit=crop&w=1600&q=80";
const IMG_SUPPORT = "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1600&q=80";

const dataEs: EditorialServiceData = {
  badge: "WhatsApp Automatizado — EPICS AI",
  accentHex: "#22C55E",
  waLink: WA,

  hero: {
    headline: "Tus clientes escriben a cualquier hora.\nTu negocio no debería detenerse.",
    subheadline:
      "Atención inmediata las 24 horas, directamente en tu WhatsApp. Información, precios, horarios y preguntas frecuentes respondidas al instante, incluso cuando no estás disponible.",
    imgLabel: "GIF o imagen — conversación automatizada en WhatsApp",
    imgSrc: IMG_HERO,
    imgAlt: "Mano sosteniendo un teléfono móvil con una conversación de WhatsApp",
  },

  problem: {
    sectionLabel: "El problema",
    headline: "Cada mensaje que llega a tu WhatsApp es una oportunidad de venta.",
    paragraphs: [
      "El problema es que no siempre puedes responder al instante. Mientras atiendes clientes, trabajas o incluso duermes, muchas personas preguntan precios, piden información o intentan comprar.",
      "Si no reciben respuesta rápido, terminan contactando a la competencia.",
    ],
    imgLabel: "GIF o imagen — mensajes sin responder acumulados",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Persona revisando mensajes en su teléfono móvil",
    imgRight: true,
  },

  bridge: {
    text: "Un mensaje sin respuesta es una venta perdida.",
    subtext: "24 horas atendiendo. Cero horas pegado al teléfono.",
  },

  solution: {
    sectionLabel: "La solución",
    headline: "Responde en segundos, incluso cuando no estás disponible.",
    paragraphs: [
      "Con nuestro sistema de WhatsApp Automatizado, tus clientes reciben atención inmediata las 24 horas del día.",
      "Información, preguntas frecuentes, servicios, productos, horarios y mucho más — todo gestionado de forma automática para que ninguna oportunidad se quede sin respuesta.",
    ],
    imgLabel: "GIF o imagen — el sistema respondiendo en tiempo real",
    imgSrc: IMG_HERO,
    imgAlt: "Teléfono móvil mostrando una conversación de atención al cliente",
    imgRight: false,
  },

  benefitBlocks: [
    {
      headline: "Convierte conversaciones en ventas.",
      body: "La mayoría de las ventas comienzan con una simple pregunta: ¿cuánto cuesta?, ¿tienen disponibilidad?, ¿cómo puedo comprar? Ahora esas preguntas se responden automáticamente, guiando al cliente hasta el siguiente paso sin que tengas que intervenir en cada conversación.",
      imgLabel: "GIF o imagen — flujo de pregunta a venta",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Persona escribiendo un mensaje de consulta desde su teléfono",
    },
    {
      headline: "Menos tiempo respondiendo. Más tiempo creciendo.",
      body: "Las mismas preguntas se repiten decenas de veces cada semana. En lugar de responder siempre lo mismo, deja que el sistema lo haga por ti mientras te enfocas en las tareas que realmente hacen crecer tu negocio.",
      imgLabel: "GIF o imagen — preguntas frecuentes automatizadas",
      imgSrc: IMG_HERO,
      imgAlt: "Mano sosteniendo un teléfono móvil con mensajes automatizados",
    },
    {
      headline: "Atención profesional desde el primer mensaje.",
      body: "Cuando un cliente recibe respuestas rápidas, claras y organizadas, la percepción de tu negocio cambia por completo. Generas confianza, transmites profesionalismo y aumentas las probabilidades de cerrar la venta.",
      imgLabel: "GIF o imagen — experiencia del cliente",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Cliente satisfecho consultando información desde su teléfono",
    },
  ],

  authority: {
    sectionLabel: "Para quién es",
    headline: "Diseñado para negocios de cualquier tamaño.",
    body: "Ya sea que vendas productos, ofrezcas servicios, gestiones reservas o atiendas consultas a diario, el sistema se adapta a la forma en que trabaja tu negocio. Porque cada empresa es diferente, pero todas tienen algo en común: necesitan responder rápido.",
    imgLabel: "GIF o imagen — distintos tipos de negocio usándolo",
    imgSrc: IMG_HERO,
    imgAlt: "Persona gestionando la atención al cliente de su negocio por teléfono",
    imgRight: true,
  },

  urgency: {
    headline: "Nunca pierdas una oportunidad por no contestar a tiempo.",
    body: "Mientras otros negocios dejan mensajes sin responder durante horas, tú puedes estar atendiendo clientes automáticamente, captando información importante y generando nuevas oportunidades de venta.",
  },

  cta: {
    headline: "Tu WhatsApp trabajando,\nincluso cuando tú no lo haces.",
    body: "Automatiza respuestas, organiza consultas y ofrece una mejor experiencia a cada cliente desde el primer contacto. Más velocidad. Más organización. Más ventas.",
    btnText: "Quiero WhatsApp Automatizado",
  },

  banners: [
    "Un mensaje sin respuesta es una venta perdida.",
    "24 horas atendiendo. 0 horas pegado al teléfono.",
    "Responde antes que la competencia, sin estar disponible.",
    "Deja de perder clientes mientras duermes.",
  ],
};

const dataEn: EditorialServiceData = {
  badge: "Automated WhatsApp — EPICS AI",
  accentHex: "#22C55E",
  waLink: WA_EN,

  hero: {
    headline: "Your customers message any time.\nYour business shouldn't stop.",
    subheadline:
      "Immediate 24-hour service, straight in your WhatsApp. Information, prices, hours, and FAQs answered instantly, even when you're not available.",
    imgLabel: "GIF or image — automated WhatsApp conversation",
    imgSrc: IMG_HERO,
    imgAlt: "Hand holding a mobile phone with a WhatsApp conversation",
  },

  problem: {
    sectionLabel: "The problem",
    headline: "Every message that lands in your WhatsApp is a sales opportunity.",
    paragraphs: [
      "The problem is you can't always reply instantly. While you're serving customers, working, or even sleeping, plenty of people are asking prices, requesting information, or trying to buy.",
      "If they don't get a fast reply, they end up contacting your competition instead.",
    ],
    imgLabel: "GIF or image — piling up unanswered messages",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Person checking messages on their mobile phone",
    imgRight: true,
  },

  bridge: {
    text: "An unanswered message is a lost sale.",
    subtext: "24 hours serving customers. Zero hours glued to the phone.",
  },

  solution: {
    sectionLabel: "The solution",
    headline: "Respond in seconds, even when you're not available.",
    paragraphs: [
      "With our Automated WhatsApp system, your customers get immediate service 24 hours a day.",
      "Information, FAQs, services, products, hours, and much more — all handled automatically so no opportunity goes unanswered.",
    ],
    imgLabel: "GIF or image — the system replying in real time",
    imgSrc: IMG_HERO,
    imgAlt: "Mobile phone showing a customer service conversation",
    imgRight: false,
  },

  benefitBlocks: [
    {
      headline: "Turn conversations into sales.",
      body: "Most sales start with a simple question: how much does it cost, do you have it in stock, how can I buy it? Now those questions get answered automatically, guiding the customer to the next step without you having to jump into every conversation.",
      imgLabel: "GIF or image — question-to-sale flow",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Person typing an inquiry message on their phone",
    },
    {
      headline: "Less time replying. More time growing.",
      body: "The same questions repeat dozens of times every week. Instead of answering the same thing over and over, let the system do it for you while you focus on the tasks that actually grow your business.",
      imgLabel: "GIF or image — automated FAQs",
      imgSrc: IMG_HERO,
      imgAlt: "Hand holding a mobile phone with automated messages",
    },
    {
      headline: "Professional service from the very first message.",
      body: "When a customer gets fast, clear, organized replies, the perception of your business changes completely. You build trust, project professionalism, and increase the odds of closing the sale.",
      imgLabel: "GIF or image — the customer experience",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Satisfied customer checking information on their phone",
    },
  ],

  authority: {
    sectionLabel: "Who it's for",
    headline: "Built for businesses of any size.",
    body: "Whether you sell products, offer services, manage bookings, or handle daily inquiries, the system adapts to the way your business works. Because every business is different, but they all have one thing in common: they need to respond fast.",
    imgLabel: "GIF or image — different types of businesses using it",
    imgSrc: IMG_HERO,
    imgAlt: "Person managing customer service for their business by phone",
    imgRight: true,
  },

  urgency: {
    headline: "Never lose an opportunity because you didn't answer in time.",
    body: "While other businesses leave messages unanswered for hours, you can be serving customers automatically, capturing important information, and generating new sales opportunities.",
  },

  cta: {
    headline: "Your WhatsApp working,\neven when you're not.",
    body: "Automate replies, organize inquiries, and offer a better experience to every customer from the very first contact. More speed. More organization. More sales.",
    btnText: "I want Automated WhatsApp",
  },

  banners: [
    "An unanswered message is a lost sale.",
    "24 hours serving customers. 0 hours glued to the phone.",
    "Reply before your competition, without being available.",
    "Stop losing customers while you sleep.",
  ],
};

export default function WhatsAppAutomatizadoPage() {
  const { language } = useLanguage();
  return <EditorialServicePage data={language === "en" ? dataEn : dataEs} />;
}
