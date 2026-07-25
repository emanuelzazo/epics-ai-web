"use client";
import { EditorialServicePage, type EditorialServiceData } from "@/components/ui/editorial-service-page";
import { useLanguage } from "@/app/context/LanguageContext";

const WA =
  "https://wa.me/5356999599?text=Estoy%20interesado%20en%20FB%20Publisher%20de%20EPICS%20AI";
const WA_EN =
  "https://wa.me/5356999599?text=I'm%20interested%20in%20FB%20Publisher%20from%20EPICS%20AI";

/* Real photos (Unsplash, free license):
   - Hero: professional managing laptop + phone with social/analytics — Austin Distel — photo-1563986768494-4dee2763ff3f
   - Supporting: iPhone beside MacBook, cross-device workflow — Timothy Hales Bennett — photo-1517292987719-0369a794ec0f */
const IMG_HERO = "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1600&q=80";
const IMG_SUPPORT = "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1600&q=80";

const dataEs: EditorialServiceData = {
  badge: "FB Publisher — EPICS AI",
  accentHex: "#D97706",
  waLink: WA,

  hero: {
    headline: "Publica más. Vende más.\nSin perder horas.",
    subheadline:
      "FB Publisher mantiene tu Facebook activo con publicaciones constantes y ordenadas. Para negocios que quieren verse presentes, vender más y dejar de depender del trabajo manual cada día.",
    imgLabel: "GIF o imagen — vista general de FB Publisher",
    imgSrc: IMG_HERO,
    imgAlt: "Persona gestionando redes sociales desde laptop y teléfono al mismo tiempo",
  },

  problem: {
    sectionLabel: "El problema",
    headline:
      "Publicar a mano todos los días cansa. Y te hace perder sin darte cuenta.",
    paragraphs: [
      "Publicar a mano quita tiempo y requiere una constancia que pocas personas pueden mantener. Cuando un negocio deja de publicar con frecuencia, desaparece del radar de sus clientes.",
      "No es falta de ganas. Es falta de sistema. FB Publisher nació exactamente para resolver eso.",
    ],
    imgLabel: "GIF o imagen — publicación manual vs. automatizada",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Teléfono junto a laptop mostrando la gestión de redes sociales en varios dispositivos",
    imgRight: true,
  },

  bridge: {
    text: "Tu negocio no necesita más esfuerzo. Necesita constancia.",
    subtext:
      "Convierte tu perfil en una máquina de visibilidad. Mientras otros publican cuando pueden, tú mantienes tu negocio presente todos los días.",
  },

  solution: {
    sectionLabel: "La solución",
    headline: "Organiza, automatiza y mantén tu marca siempre activa.",
    paragraphs: [
      "Con FB Publisher organizas y sostienes tus publicaciones de forma simple, para que tu marca se vea activa, profesional y confiable todos los días — sin estar pegado a la pantalla.",
    ],
    imgLabel: "GIF o imagen — panel principal de FB Publisher",
    imgSrc: IMG_HERO,
    imgAlt: "Profesional revisando el rendimiento de sus publicaciones en redes sociales",
    imgRight: false,
  },

  benefitBlocks: [
    {
      headline: "Más presencia. Más orden. Más tiempo libre.",
      body: "Tu contenido se publica de forma más ágil. Tu negocio se mantiene visible. Y tú puedes enfocarte en lo que realmente mueve tu empresa: vender, atender clientes y crecer.",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Dispositivos móviles usados para gestionar publicaciones de un negocio",
    },
    {
      headline: "Una presencia bien trabajada se nota desde el primer vistazo.",
      body: "Contenido constante, mensajes claros, negocio siempre visible. Una marca que no desaparece entre publicaciones sueltas. FB Publisher te ayuda a construir exactamente eso.",
      imgSrc: IMG_HERO,
      imgAlt: "Persona organizando el calendario de publicaciones de su negocio",
    },
    {
      headline: "De publicar cuando puedes a estar siempre presente.",
      body: "Con una sola herramienta le das continuidad a tu comunicación, proyectas una imagen más seria y construyes una presencia que inspira confianza desde el primer contacto.",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Flujo de trabajo de redes sociales entre teléfono y computadora",
    },
  ],

  authority: {
    sectionLabel: "Para quién es",
    headline: "Para negocios que ya no quieren improvisar.",
    body: "FB Publisher no es para publicar \"cuando haya tiempo\". Es para quienes entienden que la visibilidad constante vende, fortalece la marca y abre puertas nuevas todos los días.",
    imgLabel: "GIF o imagen — ejemplo de publicaciones programadas",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Emprendedor revisando su estrategia de contenido en varios dispositivos",
    imgRight: true,
  },

  urgency: {
    headline: "Tu marca merece verse activa todos los días.",
    body: "No se trata solo de publicar. Se trata de proyectar orden, movimiento y profesionalismo para que tu negocio inspire confianza y atraiga más atención — sin esfuerzo extra de tu parte.",
  },

  cta: {
    headline: "Haz que tu negocio aparezca más, se recuerde más y venda mejor.",
    body: "FB Publisher te da una forma más inteligente de mantener tu Facebook activo. Empieza a publicar con orden, constancia y estrategia.",
    btnText: "Quiero FB Publisher",
  },

  banners: [
    "Deja de publicar manualmente. Empieza a publicar con sistema.",
    "Si tu negocio no aparece, no existe. FB Publisher cambia eso.",
    "Más publicaciones. Más presencia. Más oportunidades.",
    "Deja de improvisar. Empieza a construir presencia real.",
  ],
};

const dataEn: EditorialServiceData = {
  badge: "FB Publisher — EPICS AI",
  accentHex: "#D97706",
  waLink: WA_EN,

  hero: {
    headline: "Post more. Sell more.\nWithout losing hours.",
    subheadline:
      "FB Publisher keeps your Facebook active with consistent, organized posting. For businesses that want to stay visible, sell more, and stop depending on manual work every single day.",
    imgLabel: "GIF or image — FB Publisher overview",
    imgSrc: IMG_HERO,
    imgAlt: "Person managing social media from a laptop and phone at the same time",
  },

  problem: {
    sectionLabel: "The problem",
    headline:
      "Posting by hand every day is exhausting. And it makes you lose more than you realize.",
    paragraphs: [
      "Posting manually eats up time and demands a consistency few people can keep up. When a business stops posting regularly, it disappears from its customers' radar.",
      "It's not a lack of will. It's a lack of a system. FB Publisher was built exactly to solve that.",
    ],
    imgLabel: "GIF or image — manual vs. automated posting",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Phone next to a laptop showing social media managed across multiple devices",
    imgRight: true,
  },

  bridge: {
    text: "Your business doesn't need more effort. It needs consistency.",
    subtext:
      "Turn your profile into a visibility machine. While others post when they can, you keep your business present every single day.",
  },

  solution: {
    sectionLabel: "The solution",
    headline: "Organize, automate, and keep your brand always active.",
    paragraphs: [
      "With FB Publisher you organize and sustain your posts in a simple way, so your brand looks active, professional, and trustworthy every day — without being glued to the screen.",
    ],
    imgLabel: "GIF or image — FB Publisher main dashboard",
    imgSrc: IMG_HERO,
    imgAlt: "Professional reviewing the performance of their social media posts",
    imgRight: false,
  },

  benefitBlocks: [
    {
      headline: "More presence. More order. More free time.",
      body: "Your content gets published more efficiently. Your business stays visible. And you get to focus on what actually moves your company forward: selling, serving customers, and growing.",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Mobile devices used to manage a business's social media posts",
    },
    {
      headline: "A well-managed presence shows from the very first glance.",
      body: "Consistent content, clear messaging, a business that's always visible. A brand that doesn't disappear among scattered posts. FB Publisher helps you build exactly that.",
      imgSrc: IMG_HERO,
      imgAlt: "Person organizing their business's content calendar",
    },
    {
      headline: "From posting whenever you can to always being present.",
      body: "With a single tool you give your communication continuity, project a more serious image, and build a presence that inspires trust from the very first contact.",
      imgSrc: IMG_SUPPORT,
      imgAlt: "Social media workflow between phone and computer",
    },
  ],

  authority: {
    sectionLabel: "Who it's for",
    headline: "For businesses that don't want to improvise anymore.",
    body: "FB Publisher isn't for posting \"whenever there's time.\" It's for those who understand that consistent visibility sells, strengthens the brand, and opens new doors every day.",
    imgLabel: "GIF or image — scheduled posts example",
    imgSrc: IMG_SUPPORT,
    imgAlt: "Entrepreneur reviewing their content strategy across devices",
    imgRight: true,
  },

  urgency: {
    headline: "Your brand deserves to look active every single day.",
    body: "It's not just about posting. It's about projecting order, momentum, and professionalism so your business inspires trust and attracts more attention — without extra effort on your part.",
  },

  cta: {
    headline: "Make your business appear more, be remembered more, and sell better.",
    body: "FB Publisher gives you a smarter way to keep your Facebook active. Start posting with order, consistency, and strategy.",
    btnText: "I want FB Publisher",
  },

  banners: [
    "Stop posting manually. Start posting with a system.",
    "If your business doesn't show up, it doesn't exist. FB Publisher changes that.",
    "More posts. More presence. More opportunities.",
    "Stop improvising. Start building real presence.",
  ],
};

export default function FBPublisherPage() {
  const { language } = useLanguage();
  return <EditorialServicePage data={language === "en" ? dataEn : dataEs} />;
}
