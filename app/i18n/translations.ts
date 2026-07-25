/* ============================================================================
 * EPICS AI — i18n dictionaries (es / en)
 * ----------------------------------------------------------------------------
 * Single source of truth for every translatable UI string used across the
 * site's shared chrome, the home page, the diagnostic tool and /fundador.
 *
 * NOTE on the 6 service pages (app/servicios/<slug>/page.tsx): their long-form
 * marketing copy (hero/problem/solution/benefits/etc.) is translated directly
 * inside each page.tsx as `dataEs` / `dataEn` (both typed as
 * `EditorialServiceData`), because that copy is tightly coupled to that data
 * shape. `EditorialServicePage` (components/ui/editorial-service-page.tsx)
 * picks the right one via `useLanguage()`. Only the *shared chrome* around
 * those pages (nav "Volver"/"Hablemos", CTA buttons, footer line) lives here,
 * under `editorial`.
 *
 * IMPORTANT: both `es` and `en` are declared as plain objects typed against
 * the `Translations` interface below — NOT `as const` — so that differing
 * literal strings between languages don't produce a type error.
 * ============================================================================ */

export type Language = "es" | "en";

/* ---------------------------------------------------------------------- */
/* Types                                                                  */
/* ---------------------------------------------------------------------- */

interface NavProductItem {
  label: string;
  description: string;
}

interface NavSectorItem {
  label: string;
  description: string;
}

interface StatItemText {
  suffix: string;
  label: string;
}

interface ProblemCardText {
  title: string;
  desc: string;
}

interface ProductText {
  label: string;
  badge: string;
  title: string;
  desc: string;
  features: string[];
}

interface ProcessStepText {
  title: string;
  desc: string;
}

interface TestimonialText {
  text: string;
  role: string;
}

interface FooterLinkText {
  title: string;
}

interface FooterSectionText {
  label: string;
  links: FooterLinkText[];
}

interface DiagnosticFieldText {
  q: string;
  options: Record<string, string>;
}

interface DiagnosticStepText {
  title: string;
  subtitle: string;
  fields: Record<string, DiagnosticFieldText>;
}

interface DiagnosticRecText {
  title: string;
  desc: string;
}

interface CertificationText {
  name: string;
  issuer: string;
  desc: string;
}

export interface Translations {
  meta: {
    home: { title: string; description: string };
    diagnostico: { title: string; description: string };
    fundador: { title: string; description: string };
  };

  common: {
    langToggleAria: string;
    menuAria: string;
    closeAria: string;
    whatsappFloatAria: string;
    whatsappDefaultMessage: string;
    back: string;
    talkToUs: string;
    freeDiagnostic: string;
    whatsappCtaLong: string;
    whatsappCtaShort: string;
    footerCopyright: string;
    footerTagline: string;
    footerMinimalLine: string;
    emailAria: string;
  };

  nav: {
    servicesLabel: string;
    productsTitle: string;
    solutionsLabel: string;
    bySectorTitle: string;
    processLabel: string;
    aboutLabel: string;
    testimonialsLabel: string;
    requestDemo: string;
    mobileServicesHeading: string;
    products: {
      fb: NavProductItem;
      tpv: NavProductItem;
      wa: NavProductItem;
      inv: NavProductItem;
      sys: NavProductItem;
      web: NavProductItem;
    };
    sectors: {
      mipymes: NavSectorItem;
      restaurantes: NavSectorItem;
      comercios: NavSectorItem;
      clinicas: NavSectorItem;
    };
  };

  home: {
    hero: {
      kicker: string;
      titleLine1: string;
      titleLine2: string;
      subtitle: string;
      checklist: string[];
      ctaDemo: string;
      ctaWhatsapp: string;
    };
    stats: {
      experience: StatItemText;
      projects: StatItemText;
      automation: StatItemText;
      solutions: StatItemText;
    };
    problems: {
      kicker: string;
      title: string;
      cards: {
        sales: ProblemCardText;
        inventory: ProblemCardText;
        service: ProblemCardText;
        repetitive: ProblemCardText;
      };
    };
    products: {
      kicker: string;
      title: string;
      ctaKnowMore: string;
      ctaWriteUs: string;
      items: {
        fb: ProductText;
        tpv: ProductText;
        wa: ProductText;
        inv: ProductText;
        sys: ProductText;
        web: ProductText;
      };
    };
    process: {
      kicker: string;
      title: string;
      steps: {
        analyze: ProcessStepText;
        design: ProcessStepText;
        implement: ProcessStepText;
        support: ProcessStepText;
      };
    };
    sectors: {
      kicker: string;
      title: string;
      items: Record<
        "comercios" | "restaurantes" | "clinicas" | "academias" | "constructoras" | "distribuidores" | "mipymes" | "tcp" | "ecommerce",
        string
      >;
    };
    about: {
      kicker: string;
      title: string;
      paragraph: string;
      mission: { label: string; text: string };
      vision: { label: string; text: string };
    };
    ceo: {
      kicker: string;
      title: string;
      role: string;
      bio: string;
      certsKicker: string;
      certPlusMore: string;
      ctaKnowFounder: string;
    };
    testimonials: {
      kicker: string;
      title: string;
      subtitle: string;
      items: TestimonialText[];
    };
    ctaFinal: {
      kicker: string;
      title: string;
      text1: string;
      text2: string;
      ctaWhatsapp: string;
      ctaEmail: string;
    };
    footer: {
      sections: {
        services: FooterSectionText;
        company: FooterSectionText;
        sectors: FooterSectionText;
        contact: FooterSectionText;
      };
    };
  };

  diagnostico: {
    intro: {
      badge: string;
      title: string;
      desc1: string;
      desc2: string;
      statsRow: { v: string; l: string }[];
      ctaStart: string;
      backLink: string;
    };
    progress: {
      completedLabel: string;
    };
    multiSelectHint: string;
    buttons: {
      back: string;
      continue: string;
      viewDiagnosis: string;
    };
    steps: {
      perfil: DiagnosticStepText;
      operaciones: DiagnosticStepText;
      ventas: DiagnosticStepText;
      marketing: DiagnosticStepText;
      soporte: DiagnosticStepText;
      fundador: DiagnosticStepText;
      urgencia: DiagnosticStepText;
    };
    results: {
      badge: string;
      title: string;
      subtitle: string;
      scoreLabels: {
        chaos: string;
        ventas: string;
        ai: string;
        soporte: string;
      };
      metrics: {
        timeWaste: { label: string; sub: string };
        monthlyCost: { label: string; sub: string };
        recovery: { label: string; sub: string };
      };
      recPriorityLabel: string;
      viewSolution: string;
      talkToSpecialist: string;
      sessionQuestion: string;
      sendReportWa: string;
    };
    recs: {
      chaos: DiagnosticRecText;
      ventas: DiagnosticRecText;
      mktg: DiagnosticRecText;
      soporte: DiagnosticRecText;
      fundador: DiagnosticRecText;
    };
  };

  fundador: {
    hero: {
      roleLabel: string;
      bio: string;
      ctaViewCerts: string;
    };
    certs: {
      kicker: string;
      title: string;
      subtitle: string;
      subtitleHighlight: string;
      subtitleSuffix: string;
      ctaViewDetail: string;
      placeholderText: string;
      placeholderPathPrefix: string;
      modalCloseAria: string;
    };
    certifications: {
      googleAiEssentials: CertificationText;
      claudeCertifiedArchitect: CertificationText;
      githubFoundations: CertificationText;
      hubspotMarketing: CertificationText;
      ibmCybersecurity: CertificationText;
      ibmDataAnalytics: CertificationText;
      googleCloudDeveloper: CertificationText;
      appleDeveloper: CertificationText;
      tribuDivisual: CertificationText;
      businessAutomation: CertificationText;
      digitalSolutions: CertificationText;
    };
    technologies: {
      kicker: string;
      items: string[];
    };
    cta: {
      title: string;
      text: string;
    };
  };

  editorial: {
    ctaWhatsappHero: string;
    ctaWhatsappCta: string;
    footNote: string;
    imgFallbackLabel: string;
  };

  /* Legacy `ServicePage` template (components/ui/service-page.tsx). Not
     currently used by any route — the 6 live service pages render through
     `EditorialServicePage` instead — but kept translated for completeness. */
  servicePageLegacy: {
    reserveMine: string;
    reserveYours: string;
    personalizeNote: string;
    problemLabel: string;
    solutionLabel: string;
    previewLabel: string;
    previewTitle: string;
    processLabel: string;
    processTitle: string;
    benefitsTitle: string;
    personalizationLabel: string;
    personalizationTitle: string;
    personalizationBody: string;
    personalizationPoints: string[];
    finalCtaTitle: string;
    finalCtaBody1: string;
    finalCtaBody2: string;
  };
}

/* ---------------------------------------------------------------------- */
/* Spanish (source / default)                                            */
/* ---------------------------------------------------------------------- */

const es: Translations = {
  meta: {
    home: {
      title: "EPICS AI — Tecnología Inteligente para Empresas Inteligentes",
      description:
        "EPICS AI ayuda a empresas cubanas a vender más mediante IA, automatización de WhatsApp, inventario digital y desarrollo web para MIPYMES y TCP.",
    },
    diagnostico: {
      title: "Diagnóstico gratuito — EPICS AI",
      description:
        "Descubre en 7 minutos cuánto dinero está perdiendo tu empresa por procesos manuales y desorganización.",
    },
    fundador: {
      title: "Emanuel Villa López — Fundador de EPICS AI",
      description:
        "Conoce al fundador de EPICS AI, sus certificaciones y su experiencia en inteligencia artificial y automatización empresarial.",
    },
  },

  common: {
    langToggleAria: "Cambiar idioma",
    menuAria: "Menú",
    closeAria: "Cerrar",
    whatsappFloatAria: "Escribirnos por WhatsApp",
    whatsappDefaultMessage: "Estoy interesado en los servicios de EPICS AI",
    back: "Volver",
    talkToUs: "Hablemos",
    freeDiagnostic: "Diagnóstico gratuito",
    whatsappCtaLong: "Escribirnos por WhatsApp",
    whatsappCtaShort: "Hablar por WhatsApp",
    footerCopyright: "EPICS AI. Todos los derechos reservados.",
    footerTagline: "Tecnología Inteligente para\nEmpresas Inteligentes.",
    footerMinimalLine: "EPICS AI — Tecnología Inteligente para Empresas Inteligentes",
    emailAria: "Correo",
  },

  nav: {
    servicesLabel: "Servicios",
    productsTitle: "Productos",
    solutionsLabel: "Soluciones",
    bySectorTitle: "Por sector",
    processLabel: "Proceso",
    aboutLabel: "Nosotros",
    testimonialsLabel: "Testimonios",
    requestDemo: "Solicitar Demo",
    mobileServicesHeading: "Servicios",
    products: {
      fb: { label: "FB Publisher", description: "Automatiza tu presencia en Facebook" },
      tpv: { label: "TPV para WooCommerce", description: "Control de ventas e inventario" },
      wa: { label: "WhatsApp Automatizado", description: "Atención al cliente 24/7" },
      inv: { label: "Inventario para Mipymes", description: "Control total en tiempo real" },
      sys: { label: "Sistema MIPYMES", description: "Gestión empresarial completa" },
      web: { label: "Desarrollo Web", description: "Sitios que convierten visitas" },
    },
    sectors: {
      mipymes: { label: "MIPYMES y TCP", description: "Automatización empresarial" },
      restaurantes: { label: "Restaurantes", description: "Gestión y atención" },
      comercios: { label: "Comercios", description: "Inventario y ventas" },
      clinicas: { label: "Clínicas", description: "Sistemas de salud" },
    },
  },

  home: {
    hero: {
      kicker: "EPICS AI · Agencia de IA para Cuba",
      titleLine1: "Impulsamos el crecimiento",
      titleLine2: "de tu negocio con IA",
      subtitle:
        "Automatizamos procesos, optimizamos ventas y digitalizamos operaciones para que tu empresa trabaje más rápido y venda más.",
      checklist: [
        "Automatización de WhatsApp con IA",
        "Gestión inteligente de inventarios",
        "Sistemas para MIPYMES y TCP",
        "Automatización de ventas en Facebook con IA",
      ],
      ctaDemo: "Solicitar Demostración",
      ctaWhatsapp: "Hablar por WhatsApp",
    },
    stats: {
      experience: { suffix: " años", label: "de experiencia" },
      projects: { suffix: " proyectos", label: "digitales entregados" },
      automation: { suffix: "/7", label: "automatización inteligente" },
      solutions: { suffix: "%", label: "soluciones adaptadas a Cuba" },
    },
    problems: {
      kicker: "El problema",
      title: "Tu negocio no debería\ndepender de procesos manuales",
      cards: {
        sales: {
          title: "Ventas desorganizadas",
          desc: "Pierdes clientes por falta de seguimiento y no tienes visibilidad del proceso de ventas en tiempo real.",
        },
        inventory: {
          title: "Inventario sin control",
          desc: "No sabes exactamente qué productos tienes. Vendes lo que no hay o pierdes ventas por desconocer el stock.",
        },
        service: {
          title: "Atención lenta",
          desc: "Tus clientes esperan demasiado por una respuesta en WhatsApp o Facebook. La competencia responde en segundos.",
        },
        repetitive: {
          title: "Procesos repetitivos",
          desc: "Tu equipo pierde horas diarias haciendo tareas que la Inteligencia Artificial puede realizar automáticamente.",
        },
      },
    },
    products: {
      kicker: "Soluciones",
      title: "Diseñadas para\nempresas cubanas",
      ctaKnowMore: "Conocer más",
      ctaWriteUs: "Escribirnos",
      items: {
        fb: {
          label: "FB Publisher",
          badge: "Más solicitado",
          title: "FB Publisher",
          desc: "Automatiza tu presencia en Facebook. Publica más, vende más, sin perder horas.",
          features: [
            "Publicación automática de contenido",
            "Gestión de conversaciones con IA",
            "Captación de clientes las 24 horas",
            "Organización de prospectos",
            "Respuestas inteligentes personalizadas",
          ],
        },
        tpv: {
          label: "TPV para WooCommerce",
          badge: "Punto de venta",
          title: "TPV para WooCommerce",
          desc: "Control total de ventas e inventario. Desde papeles a sistema digital.",
          features: [
            "Gestión completa de ventas",
            "Control de inventario en tiempo real",
            "Historial detallado de transacciones",
            "Integración con WooCommerce",
            "Reportes automáticos de ventas",
          ],
        },
        wa: {
          label: "WhatsApp Automatizado",
          badge: "Popular",
          title: "WhatsApp Automatizado",
          desc: "Tus clientes escriben a cualquier hora. Tu negocio responde siempre.",
          features: [
            "Respuestas automáticas 24/7",
            "Atención inmediata sin espera",
            "Preguntas frecuentes automatizadas",
            "Captura automática de datos",
            "Agendamiento de citas automático",
          ],
        },
        inv: {
          label: "Inventario para Mipymes",
          badge: "Control total",
          title: "Inventario para Mipymes",
          desc: "Tu negocio está creciendo. Tu control también. Organiza tu inventario en un solo lugar.",
          features: [
            "Gestión completa de productos",
            "Control de entradas y salidas",
            "Alertas de stock bajo",
            "Reportes automáticos",
            "Multiusuario · Acceso desde móvil",
          ],
        },
        sys: {
          label: "Sistema MIPYMES",
          badge: "Empresarial",
          title: "Sistema para MIPYMES y TCP",
          desc: "Administra toda tu empresa desde una sola plataforma. Clientes, ventas, inventario y estadísticas en tiempo real.",
          features: [
            "Gestión completa de clientes",
            "Inventario integrado",
            "Ventas y facturación",
            "Estadísticas en tiempo real",
            "Gestión de empleados",
          ],
        },
        web: {
          label: "Desarrollo Web",
          badge: "Diseño",
          title: "Desarrollo Web Profesional",
          desc: "Sitios modernos, rápidos y optimizados que convierten visitantes en clientes.",
          features: [
            "Landing Pages y sitios corporativos",
            "Tiendas online y catálogos digitales",
            "Sistemas web personalizados",
            "Optimización SEO",
            "Diseño responsive · Carga rápida",
          ],
        },
      },
    },
    process: {
      kicker: "Cómo trabajamos",
      title: "Un proceso simple\ny efectivo",
      steps: {
        analyze: { title: "Analizamos tu negocio", desc: "Estudiamos tus procesos y detectamos las principales oportunidades de mejora." },
        design: { title: "Diseñamos la solución", desc: "Creamos una estrategia tecnológica adaptada a tus necesidades y al contexto cubano." },
        implement: { title: "Implementamos", desc: "Configuramos todas las herramientas, integramos sistemas y entrenamos a tu equipo." },
        support: { title: "Acompañamos", desc: "Soporte continuo, monitoreo y optimizaciones para maximizar tus resultados." },
      },
    },
    sectors: {
      kicker: "Sectores",
      title: "Soluciones para\ncualquier sector",
      items: {
        comercios: "Comercios",
        restaurantes: "Restaurantes",
        clinicas: "Clínicas",
        academias: "Academias",
        constructoras: "Constructoras",
        distribuidores: "Distribuidores",
        mipymes: "MIPYMES",
        tcp: "TCP",
        ecommerce: "E-commerce",
      },
    },
    about: {
      kicker: "Sobre EPICS AI",
      title: "Tecnología,\ninnovación\ny resultados",
      paragraph:
        "EPICS AI es una agencia especializada en Inteligencia Artificial, automatización empresarial y transformación digital. Ayudamos a organizaciones cubanas a optimizar procesos, aumentar ventas, mejorar la atención al cliente y tomar decisiones basadas en datos.",
      mission: {
        label: "Misión",
        text: "Ayudar a empresas y MIPYMES cubanas a aprovechar el poder de la IA para crecer, competir y prosperar en la nueva economía digital.",
      },
      vision: {
        label: "Visión",
        text: "Convertirnos en la agencia líder de soluciones de Inteligencia Artificial para Cuba y Latinoamérica.",
      },
    },
    ceo: {
      kicker: "Liderazgo",
      title: "La mente detrás de EPICS AI",
      role: "CEO y Fundador · Especialista en IA · Automatización empresarial · Desarrollo digital",
      bio: "Más de 3 años de experiencia trabajando con herramientas de IA, automatización comercial y transformación digital. Ha colaborado con clientes de Cuba, México, Estados Unidos, Francia, Suiza y Dubái en proyectos de marketing digital, desarrollo de software, diseño y automatización.",
      certsKicker: "11 certificaciones y formaciones verificadas",
      certPlusMore: "+3 más",
      ctaKnowFounder: "Conocer al fundador y ver certificados",
    },
    testimonials: {
      kicker: "Testimonios",
      title: "Lo que dicen\nnuestros clientes",
      subtitle: "Empresas cubanas que ya están creciendo con IA.",
      items: [
        {
          text: "Antes perdíamos muchas oportunidades por no responder a tiempo. Con EPICS AI logramos atender a todos nuestros clientes y aumentar significativamente nuestras ventas.",
          role: "Director Comercial",
        },
        {
          text: "El sistema de inventario nos permitió tener control total del negocio. Ahora sabemos exactamente qué tenemos y qué necesitamos comprar.",
          role: "Propietaria de MIPYME",
        },
        {
          text: "Nos desarrollaron una web profesional y automatizaron nuestro WhatsApp. La diferencia en imagen y organización fue inmediata.",
          role: "Empresario",
        },
        {
          text: "FB Publisher se convirtió en nuestra principal fuente de clientes. El retorno de inversión fue muy rápido.",
          role: "Administradora",
        },
        {
          text: "La automatización de procesos redujo drásticamente el tiempo en tareas repetitivas. Ahora nos enfocamos en crecer.",
          role: "Gerente Operativo",
        },
        {
          text: "El soporte de EPICS AI es excepcional. Siempre disponibles y con soluciones que realmente funcionan para Cuba.",
          role: "CEO de Startup",
        },
        {
          text: "La automatización de WhatsApp cambió completamente cómo atendemos a nuestros clientes. Más rápido, más profesional.",
          role: "Propietario TCP",
        },
        {
          text: "Teníamos miedo de la tecnología pero EPICS AI lo hizo simple. Hoy tenemos control total de nuestro inventario.",
          role: "Dueña de Tienda",
        },
        {
          text: "La web que nos hicieron convierte visitantes en clientes. Nuestras ventas online crecieron un 40% en el primer mes.",
          role: "Gerente de Ventas",
        },
      ],
    },
    ctaFinal: {
      kicker: "El siguiente paso",
      title: "El futuro de tu negocio\ncomienza hoy",
      text1: "No pierdas clientes por procesos manuales. Digitaliza tu empresa con EPICS AI.",
      text2: "Solicita una demostración gratuita y descubre cómo la IA puede ayudarte a crecer.",
      ctaWhatsapp: "Hablar por WhatsApp",
      ctaEmail: "Enviar Correo",
    },
    footer: {
      sections: {
        services: {
          label: "Servicios",
          links: [
            { title: "FB Publisher AI" },
            { title: "WhatsApp con IA" },
            { title: "Inventario Digital" },
            { title: "Sistema MIPYMES" },
            { title: "Desarrollo Web" },
          ],
        },
        company: {
          label: "Empresa",
          links: [
            { title: "Sobre Nosotros" },
            { title: "Liderazgo" },
            { title: "Testimonios" },
            { title: "Proceso" },
          ],
        },
        sectors: {
          label: "Sectores",
          links: [
            { title: "MIPYMES y TCP" },
            { title: "Restaurantes" },
            { title: "Comercios" },
            { title: "Clínicas" },
          ],
        },
        contact: {
          label: "Contacto",
          links: [
            { title: "WhatsApp" },
            { title: "Facebook" },
            { title: "Instagram" },
            { title: "LinkedIn" },
          ],
        },
      },
    },
  },

  diagnostico: {
    intro: {
      badge: "Diagnóstico gratuito",
      title: "Descubre cuánto dinero\nestá perdiendo tu empresa",
      desc1:
        "En 7 minutos, este diagnóstico estratégico identifica exactamente dónde están tus fugas de ingresos, las horas que se pierden cada semana y las oportunidades de automatización que podrías activar esta misma semana.",
      desc2:
        "Más de 50 empresas cubanas han completado este diagnóstico. El 94% implementó al menos una solución en los siguientes 30 días.",
      statsRow: [
        { v: "~7 min", l: "para completarlo" },
        { v: "7 secciones", l: "de diagnóstico" },
        { v: "100% gratis", l: "sin compromiso" },
      ],
      ctaStart: "Comenzar diagnóstico",
      backLink: "EPICS AI",
    },
    progress: {
      completedLabel: "completado",
    },
    multiSelectHint: "Selección múltiple — elige todas las que aplican",
    buttons: {
      back: "Atrás",
      continue: "Continuar",
      viewDiagnosis: "Ver mi diagnóstico",
    },
    steps: {
      perfil: {
        title: "Perfil de tu empresa",
        subtitle: "Cuéntanos sobre tu negocio para personalizar el diagnóstico",
        fields: {
          ingresos: {
            q: "¿Cuál es el rango de ingresos mensuales de tu empresa?",
            options: {
              a: "Menos de $2,000 USD",
              b: "$2,000 – $10,000 USD",
              c: "$10,000 – $50,000 USD",
              d: "Más de $50,000 USD",
            },
          },
          equipo: {
            q: "¿Cuántas personas trabajan en tu empresa?",
            options: {
              a: "Solo yo (TCP / autónomo)",
              b: "2 – 5 personas",
              c: "6 – 20 personas",
              d: "Más de 20 personas",
            },
          },
          bloqueo: {
            q: "¿Cuál es tu principal obstáculo para crecer hoy?",
            options: {
              a: "No llegan suficientes clientes",
              b: "Los procesos son lentos o caóticos",
              c: "Mi equipo no escala con la demanda",
              d: "Falta de información para tomar decisiones",
            },
          },
        },
      },
      operaciones: {
        title: "Diagnóstico operativo",
        subtitle: "Identifiquemos dónde está el caos en tu operación diaria",
        fields: {
          dependencia: {
            q: "¿Qué tan dependiente es tu negocio de personas clave específicas?",
            options: {
              a: "Totalmente — si falta alguien, todo para",
              b: "Bastante — varias cosas dependen de una persona",
              c: "Algo — hay redundancia en la mayoría de áreas",
              d: "Poco — los procesos están documentados y son replicables",
            },
          },
          horas_tareas: {
            q: "¿Cuántas horas semanales estima tu equipo que pierde en tareas repetitivas?",
            options: {
              a: "Menos de 5 horas",
              b: "5 – 15 horas",
              c: "15 – 30 horas",
              d: "Más de 30 horas",
            },
          },
          colapso: {
            q: "¿Qué le pasa a tu operación cuando aumenta la demanda?",
            options: {
              a: "Todo colapsa — no podemos manejar el volumen",
              b: "Hay retrasos y errores pero sobrevivimos",
              c: "Se estira pero funciona aceptablemente",
              d: "Escala bien — los procesos lo soportan",
            },
          },
          manual: {
            q: "¿Qué procesos críticos siguen haciéndose manualmente hoy?",
            options: {
              a: "Seguimiento de clientes y ventas",
              b: "Control de inventario",
              c: "Respuesta a mensajes y consultas",
              d: "Facturación y registros contables",
              e: "Reportes y análisis de datos",
            },
          },
        },
      },
      ventas: {
        title: "Fugas en tus ventas",
        subtitle: "El dinero que se pierde antes de que el cliente llegue a pagar",
        fields: {
          respuesta_leads: {
            q: "¿Cuánto tiempo tarda tu empresa en responder a un nuevo lead o consulta?",
            options: {
              a: "Más de 24 horas",
              b: "Entre 1 y 24 horas",
              c: "Menos de 1 hora",
              d: "En minutos (automatizado)",
            },
          },
          sin_seguimiento: {
            q: "¿Qué porcentaje de leads interesados nunca recibe un seguimiento posterior?",
            options: {
              a: "Más del 60% — casi nadie recibe seguimiento",
              b: "Entre 30% y 60%",
              c: "Entre 10% y 30%",
              d: "Menos del 10% — seguimiento consistente",
            },
          },
          donde_pierde: {
            q: "¿Dónde se pierden más clientes potenciales?",
            options: {
              a: "WhatsApp — mensajes sin responder",
              b: "Redes sociales — comentarios y DMs ignorados",
              c: "Correo electrónico — bandejas desbordadas",
              d: "Llamadas perdidas que nadie devuelve",
              e: "Web — sin formulario o CTA claro",
            },
          },
          ventas_potenciales: {
            q: "Si respondieras en segundos las 24h, ¿cuántas más ventas cerrarías mensualmente?",
            options: {
              a: "Pocas — el volumen de leads es bajo",
              b: "Entre 5 y 15 ventas adicionales",
              c: "Entre 15 y 40 ventas adicionales",
              d: "Más de 40 — hay un enorme volumen sin atender",
            },
          },
        },
      },
      marketing: {
        title: "Ineficiencia en marketing",
        subtitle: "Lo que gastas en tiempo y lo que deberías estar generando",
        fields: {
          horas_contenido: {
            q: "¿Cuántas horas semanales dedica tu equipo a crear contenido para redes?",
            options: {
              a: "Más de 15 horas",
              b: "Entre 8 y 15 horas",
              c: "Entre 3 y 8 horas",
              d: "Menos de 3 horas (automatizado en parte)",
            },
          },
          reusa_contenido: {
            q: "¿Reutilizan contenido existente o recrean todo desde cero cada vez?",
            options: {
              a: "Todo desde cero — nunca reutilizamos nada",
              b: "Casi todo desde cero con mínima reutilización",
              c: "Reutilizamos algo pero de forma no sistemática",
              d: "Sistema claro de reutilización y repropósito",
            },
          },
          canales_rentables: {
            q: "¿Qué canales te generan ingresos reales actualmente?",
            options: {
              a: "Facebook / Instagram (orgánico)",
              b: "WhatsApp Business",
              c: "Sitio web",
              d: "Referidos / boca a boca",
              e: "No tengo claridad de qué canal convierte",
            },
          },
        },
      },
      soporte: {
        title: "Carga de soporte al cliente",
        subtitle: "El tiempo que se va en responder lo que ya respondiste antes",
        fields: {
          preguntas_repetidas: {
            q: "¿Cuántas preguntas repetidas recibe tu equipo por semana?",
            options: {
              a: "Más de 100",
              b: "Entre 50 y 100",
              c: "Entre 20 y 50",
              d: "Menos de 20",
            },
          },
          tiempo_soporte: {
            q: "¿Cuál es el tiempo de respuesta promedio en soporte al cliente?",
            options: {
              a: "Más de 24 horas",
              b: "Entre 4 y 24 horas",
              c: "Entre 1 y 4 horas",
              d: "Menos de 1 hora",
            },
          },
          automatizable: {
            q: "¿Qué porcentaje de las consultas que recibes podría resolverse automáticamente?",
            options: {
              a: "Más del 70%",
              b: "Entre 40% y 70%",
              c: "Entre 20% y 40%",
              d: "Menos del 20%",
            },
          },
        },
      },
      fundador: {
        title: "Fuga de tiempo del fundador",
        subtitle: "Las horas que deberías invertir en hacer crecer el negocio",
        fields: {
          horas_operacion: {
            q: "¿Cuántas horas semanales dedicas a operaciones que otro debería manejar?",
            options: {
              a: "Más de 25 horas",
              b: "Entre 15 y 25 horas",
              c: "Entre 5 y 15 horas",
              d: "Menos de 5 horas",
            },
          },
          sin_datos: {
            q: "¿Con qué frecuencia tomas decisiones importantes sin datos suficientes?",
            options: {
              a: "Siempre — casi todo es intuición",
              b: "Con frecuencia — los datos son difíciles de obtener",
              c: "A veces — tengo algunos datos pero no suficientes",
              d: "Rara vez — tengo buena visibilidad del negocio",
            },
          },
        },
      },
      urgencia: {
        title: "Urgencia y decisión",
        subtitle: "El último paso — evaluemos la preparación para actuar",
        fields: {
          urgencia: {
            q: "¿Con qué urgencia necesitas resolver los problemas identificados?",
            options: {
              a: "Crítico — cada día que pasa es dinero perdido",
              b: "Alta — quiero resolverlo en los próximos 30 días",
              c: "Media — en los próximos 60-90 días",
              d: "Baja — explorando opciones por ahora",
            },
          },
          presupuesto: {
            q: "¿Cuál es tu presupuesto mensual disponible para automatización e IA?",
            options: {
              a: "Menos de $200 USD/mes",
              b: "$200 – $500 USD/mes",
              c: "$500 – $1,500 USD/mes",
              d: "Más de $1,500 USD/mes",
            },
          },
          implementar: {
            q: "¿Estás dispuesto a implementar sistemas de IA en los próximos 30-90 días?",
            options: {
              a: "Sí, estoy listo para empezar esta semana",
              b: "Sí, en cuanto tenga mayor claridad del ROI",
              c: "Probablemente, necesito ver resultados primero",
              d: "No estoy seguro todavía",
            },
          },
        },
      },
    },
    results: {
      badge: "Tu reporte de eficiencia empresarial",
      title: "Hemos identificado tus fugas principales",
      subtitle: "Basado en tus respuestas, este es el diagnóstico de EPICS AI para tu empresa.",
      scoreLabels: {
        chaos: "Caos operativo",
        ventas: "Fuga de ventas",
        ai: "Potencial de IA",
        soporte: "Carga de soporte",
      },
      metrics: {
        timeWaste: { label: "Horas perdidas por semana", sub: "en tareas que la IA puede eliminar" },
        monthlyCost: { label: "Costo mensual de ineficiencia", sub: "estimado a $25/h de costo de oportunidad" },
        recovery: { label: "Potencial de recuperación", sub: "en ingresos mensuales con la solución adecuada" },
      },
      recPriorityLabel: "Solución prioritaria recomendada",
      viewSolution: "Ver solución",
      talkToSpecialist: "Hablar con especialista",
      sessionQuestion: "¿Quieres que analicemos estos resultados contigo en una sesión de 30 minutos?",
      sendReportWa: "Enviar reporte por WhatsApp",
    },
    recs: {
      chaos: {
        title: "Automatización de flujos internos",
        desc: "Tu operación necesita sistemas que eliminen la dependencia de personas clave y automaticen tareas repetitivas.",
      },
      ventas: {
        title: "Sistema de captura y seguimiento de leads",
        desc: "Estás perdiendo ventas por respuesta lenta y falta de seguimiento. Un sistema de automatización de ventas puede recuperar ese ingreso.",
      },
      mktg: {
        title: "Automatización de marketing en Facebook",
        desc: "Tu marketing consume demasiadas horas sin resultados proporcionales. La automatización puede triplicar el alcance a una fracción del costo.",
      },
      soporte: {
        title: "Asistente de IA para WhatsApp",
        desc: "Tu equipo responde las mismas preguntas decenas de veces al día. Un asistente de IA puede manejar el 70% de esas consultas automáticamente.",
      },
      fundador: {
        title: "Sistema de gestión empresarial completo",
        desc: "Estás operando sin datos y sin sistemas. Un sistema central liberará tu tiempo y te dará la visibilidad que necesitas para crecer.",
      },
    },
  },

  fundador: {
    hero: {
      roleLabel: "CEO y Fundador de EPICS AI",
      bio: "Especialista en IA, automatización empresarial y desarrollo digital. Más de 3 años trabajando con herramientas de inteligencia artificial, automatización comercial y transformación digital, con clientes de Cuba, México, Estados Unidos, Francia, Suiza y Dubái en proyectos de marketing, software, diseño y automatización.",
      ctaViewCerts: "Ver certificaciones",
    },
    certs: {
      kicker: "Formación y certificaciones",
      title: "Credenciales que respaldan\ncada proyecto",
      subtitle: "Cada certificación está verificada. Pulsa",
      subtitleHighlight: "Ver en detalle",
      subtitleSuffix: " para revisar el diploma o certificado.",
      ctaViewDetail: "Ver en detalle",
      placeholderText: "Aquí irá la foto del certificado",
      placeholderPathPrefix: "Coloca el archivo en",
      modalCloseAria: "Cerrar",
    },
    certifications: {
      googleAiEssentials: {
        name: "Google AI Essentials",
        issuer: "Google",
        desc: "Uso profesional de la inteligencia artificial: cómo funcionan los modelos, prompting efectivo y aplicación responsable de la IA en tareas reales de negocio.",
      },
      claudeCertifiedArchitect: {
        name: "Claude Certified Architect",
        issuer: "Anthropic",
        desc: "Certificación práctica y supervisada (proctored). Evalúa el diseño de agentes de IA, el uso de herramientas y la arquitectura de sistemas multi-modelo. Reconocida por empresas que despliegan Claude a escala.",
      },
      githubFoundations: {
        name: "GitHub Foundations",
        issuer: "GitHub",
        desc: "Dominio de Git y GitHub: commits, ramas, pull requests, GitHub Actions, flujos de colaboración en producción y desarrollo asistido con IA (Copilot).",
      },
      hubspotMarketing: {
        name: "Diploma en Marketing Digital",
        issuer: "HubSpot Academy",
        desc: "Credencial de marketing reconocida por agencias y empresas: SEO, marketing de contenidos, redes sociales y email marketing con secuencias de captación.",
      },
      ibmCybersecurity: {
        name: "Analista de Ciberseguridad",
        issuer: "IBM SkillsBuild",
        desc: "Seguridad de redes, análisis de amenazas y respuesta a incidentes. Certificado con créditos universitarios transferibles (ACE).",
      },
      ibmDataAnalytics: {
        name: "Análisis de Datos",
        issuer: "IBM SkillsBuild",
        desc: "Visualización de datos, fundamentos de SQL y reportes con datasets reales. Certificado con créditos universitarios transferibles (ACE).",
      },
      googleCloudDeveloper: {
        name: "Google Cloud Developer",
        issuer: "Google Cloud",
        desc: "Programa oficial para desarrolladores: construir, desplegar y escalar aplicaciones sobre infraestructura en la nube de nivel empresarial.",
      },
      appleDeveloper: {
        name: "Apple Developer Program",
        issuer: "Apple",
        desc: "Membresía oficial de Apple para crear y publicar aplicaciones en el ecosistema iOS y macOS, bajo sus estándares de calidad y seguridad.",
      },
      tribuDivisual: {
        name: "La Tribu Divisual 2026",
        issuer: "Formación especializada",
        desc: "Formación avanzada en n8n, Claude Code y automatizaciones. Diseño de flujos y agentes que conectan herramientas y eliminan tareas repetitivas.",
      },
      businessAutomation: {
        name: "Automatización de negocios",
        issuer: "Formación especializada",
        desc: "Automatización comercial e integración de sistemas, CRM y procesos para escalar operaciones sin aumentar el trabajo manual.",
      },
      digitalSolutions: {
        name: "Soluciones digitales empresariales",
        issuer: "Formación especializada",
        desc: "Transformación digital de MIPYMES: sistemas de gestión, ventas, inventario y datos puestos al servicio del crecimiento del negocio.",
      },
    },
    technologies: {
      kicker: "Tecnologías dominadas",
      items: [
        "ChatGPT", "Claude", "Gemini", "Llama",
        "WhatsApp Business API", "Automatización con IA",
        "Agentes IA", "Integración CRM",
        "Automatización Facebook", "Highfield",
        "n8n", "Claude Code",
      ],
    },
    cta: {
      title: "¿Listo para digitalizar tu negocio?",
      text: "Trabaja directamente con el equipo de EPICS AI. Escríbenos y empecemos hoy.",
    },
  },

  editorial: {
    ctaWhatsappHero: "Escribirnos por WhatsApp",
    ctaWhatsappCta: "Escribirnos por WhatsApp",
    footNote: "Podemos personalizarlo completamente para el caso de tu empresa.",
    imgFallbackLabel: "GIF o imagen aquí",
  },

  servicePageLegacy: {
    reserveMine: "Reservar el mío",
    reserveYours: "Reservar el tuyo",
    personalizeNote: "Podemos personalizarlo completamente para el caso específico de tu empresa.",
    problemLabel: "El problema real",
    solutionLabel: "La solución",
    previewLabel: "Vista previa",
    previewTitle: "El sistema en acción",
    processLabel: "El proceso",
    processTitle: "Cómo lo implementamos",
    benefitsTitle: "Lo que consigues",
    personalizationLabel: "Personalización total",
    personalizationTitle: "Cada empresa es única.\nTu solución también debería serlo.",
    personalizationBody:
      "No vendemos software genérico. Analizamos tu negocio, tus procesos y tus objetivos específicos para entregarte una solución que funcione exactamente como la necesitas.",
    personalizationPoints: [
      "Adaptado a tus flujos de trabajo",
      "Integración con tus herramientas actuales",
      "Soporte continuo post-implementación",
    ],
    finalCtaTitle: "¿Listo para implementarlo\nen tu empresa?",
    finalCtaBody1: "Escríbenos hoy. Analizamos tu caso sin compromiso y te decimos exactamente qué resultados puedes esperar.",
    finalCtaBody2: "Podemos personalizarlo completamente para tu caso.",
  },
};

/* ---------------------------------------------------------------------- */
/* English                                                                */
/* ---------------------------------------------------------------------- */

const en: Translations = {
  meta: {
    home: {
      title: "EPICS AI — Smart Technology for Smart Businesses",
      description:
        "EPICS AI helps Cuban businesses sell more through AI, WhatsApp automation, digital inventory, and web development for MSMEs and self-employed workers (TCP).",
    },
    diagnostico: {
      title: "Free Diagnostic — EPICS AI",
      description:
        "Discover in 7 minutes how much money your business is losing to manual processes and disorganization.",
    },
    fundador: {
      title: "Emanuel Villa López — Founder of EPICS AI",
      description:
        "Meet the founder of EPICS AI, his certifications, and his experience in artificial intelligence and business automation.",
    },
  },

  common: {
    langToggleAria: "Switch language",
    menuAria: "Menu",
    closeAria: "Close",
    whatsappFloatAria: "Message us on WhatsApp",
    whatsappDefaultMessage: "I'm interested in EPICS AI's services",
    back: "Back",
    talkToUs: "Let's talk",
    freeDiagnostic: "Free diagnostic",
    whatsappCtaLong: "Message us on WhatsApp",
    whatsappCtaShort: "Chat on WhatsApp",
    footerCopyright: "EPICS AI. All rights reserved.",
    footerTagline: "Smart Technology for\nSmart Businesses.",
    footerMinimalLine: "EPICS AI — Smart Technology for Smart Businesses",
    emailAria: "Email",
  },

  nav: {
    servicesLabel: "Services",
    productsTitle: "Products",
    solutionsLabel: "Solutions",
    bySectorTitle: "By sector",
    processLabel: "Process",
    aboutLabel: "About",
    testimonialsLabel: "Testimonials",
    requestDemo: "Request a Demo",
    mobileServicesHeading: "Services",
    products: {
      fb: { label: "FB Publisher", description: "Automate your Facebook presence" },
      tpv: { label: "POS for WooCommerce", description: "Sales and inventory control" },
      wa: { label: "Automated WhatsApp", description: "24/7 customer service" },
      inv: { label: "Inventory for MSMEs", description: "Total control in real time" },
      sys: { label: "MSME System", description: "Complete business management" },
      web: { label: "Web Development", description: "Sites that convert visits" },
    },
    sectors: {
      mipymes: { label: "MSMEs & Self-Employed", description: "Business automation" },
      restaurantes: { label: "Restaurants", description: "Management and service" },
      comercios: { label: "Shops", description: "Inventory and sales" },
      clinicas: { label: "Clinics", description: "Health systems" },
    },
  },

  home: {
    hero: {
      kicker: "EPICS AI · AI Agency for Cuba",
      titleLine1: "We drive the growth",
      titleLine2: "of your business with AI",
      subtitle:
        "We automate processes, optimize sales, and digitize operations so your company works faster and sells more.",
      checklist: [
        "AI-powered WhatsApp automation",
        "Smart inventory management",
        "Systems for MSMEs and self-employed workers",
        "AI-powered Facebook sales automation",
      ],
      ctaDemo: "Request a Demo",
      ctaWhatsapp: "Chat on WhatsApp",
    },
    stats: {
      experience: { suffix: " years", label: "of experience" },
      projects: { suffix: " projects", label: "digitally delivered" },
      automation: { suffix: "/7", label: "smart automation" },
      solutions: { suffix: "%", label: "solutions adapted to Cuba" },
    },
    problems: {
      kicker: "The problem",
      title: "Your business shouldn't\ndepend on manual processes",
      cards: {
        sales: {
          title: "Disorganized sales",
          desc: "You lose customers due to lack of follow-up and have no real-time visibility into your sales process.",
        },
        inventory: {
          title: "Inventory out of control",
          desc: "You don't know exactly what products you have. You sell what's out of stock or lose sales from not knowing your stock.",
        },
        service: {
          title: "Slow response",
          desc: "Your customers wait too long for a reply on WhatsApp or Facebook. The competition responds in seconds.",
        },
        repetitive: {
          title: "Repetitive processes",
          desc: "Your team loses hours every day doing tasks that Artificial Intelligence can perform automatically.",
        },
      },
    },
    products: {
      kicker: "Solutions",
      title: "Designed for\nCuban businesses",
      ctaKnowMore: "Learn more",
      ctaWriteUs: "Message us",
      items: {
        fb: {
          label: "FB Publisher",
          badge: "Most requested",
          title: "FB Publisher",
          desc: "Automate your Facebook presence. Post more, sell more, without losing hours.",
          features: [
            "Automatic content publishing",
            "AI-powered conversation management",
            "24-hour customer acquisition",
            "Prospect organization",
            "Personalized smart replies",
          ],
        },
        tpv: {
          label: "POS for WooCommerce",
          badge: "Point of sale",
          title: "POS for WooCommerce",
          desc: "Total control of sales and inventory. From paper to a digital system.",
          features: [
            "Complete sales management",
            "Real-time inventory control",
            "Detailed transaction history",
            "WooCommerce integration",
            "Automatic sales reports",
          ],
        },
        wa: {
          label: "Automated WhatsApp",
          badge: "Popular",
          title: "Automated WhatsApp",
          desc: "Your customers message any time. Your business always responds.",
          features: [
            "24/7 automatic replies",
            "Immediate service, no waiting",
            "Automated FAQs",
            "Automatic data capture",
            "Automatic appointment scheduling",
          ],
        },
        inv: {
          label: "Inventory for MSMEs",
          badge: "Total control",
          title: "Inventory for MSMEs",
          desc: "Your business is growing. So should your control. Organize your inventory in one place.",
          features: [
            "Complete product management",
            "Inbound/outbound tracking",
            "Low-stock alerts",
            "Automatic reports",
            "Multi-user · Mobile access",
          ],
        },
        sys: {
          label: "MSME System",
          badge: "Enterprise",
          title: "System for MSMEs & Self-Employed",
          desc: "Manage your entire company from a single platform. Customers, sales, inventory, and real-time statistics.",
          features: [
            "Complete customer management",
            "Integrated inventory",
            "Sales and invoicing",
            "Real-time statistics",
            "Employee management",
          ],
        },
        web: {
          label: "Web Development",
          badge: "Design",
          title: "Professional Web Development",
          desc: "Modern, fast, and optimized sites that convert visitors into customers.",
          features: [
            "Landing pages and corporate sites",
            "Online stores and digital catalogs",
            "Custom web systems",
            "SEO optimization",
            "Responsive design · Fast loading",
          ],
        },
      },
    },
    process: {
      kicker: "How we work",
      title: "A simple\nand effective process",
      steps: {
        analyze: { title: "We analyze your business", desc: "We study your processes and identify the main opportunities for improvement." },
        design: { title: "We design the solution", desc: "We create a technology strategy tailored to your needs and the Cuban context." },
        implement: { title: "We implement", desc: "We set up all the tools, integrate systems, and train your team." },
        support: { title: "We support you", desc: "Ongoing support, monitoring, and optimizations to maximize your results." },
      },
    },
    sectors: {
      kicker: "Sectors",
      title: "Solutions for\nany sector",
      items: {
        comercios: "Shops",
        restaurantes: "Restaurants",
        clinicas: "Clinics",
        academias: "Academies",
        constructoras: "Construction firms",
        distribuidores: "Distributors",
        mipymes: "MSMEs",
        tcp: "Self-employed (TCP)",
        ecommerce: "E-commerce",
      },
    },
    about: {
      kicker: "About EPICS AI",
      title: "Technology,\ninnovation,\nand results",
      paragraph:
        "EPICS AI is an agency specialized in Artificial Intelligence, business automation, and digital transformation. We help Cuban organizations optimize processes, increase sales, improve customer service, and make data-driven decisions.",
      mission: {
        label: "Mission",
        text: "Help Cuban businesses and MSMEs harness the power of AI to grow, compete, and thrive in the new digital economy.",
      },
      vision: {
        label: "Vision",
        text: "To become the leading Artificial Intelligence solutions agency for Cuba and Latin America.",
      },
    },
    ceo: {
      kicker: "Leadership",
      title: "The mind behind EPICS AI",
      role: "CEO & Founder · AI Specialist · Business Automation · Digital Development",
      bio: "More than 3 years of experience working with AI tools, business automation, and digital transformation. He has collaborated with clients from Cuba, Mexico, the United States, France, Switzerland, and Dubai on digital marketing, software development, design, and automation projects.",
      certsKicker: "11 verified certifications and trainings",
      certPlusMore: "+3 more",
      ctaKnowFounder: "Meet the founder and see certificates",
    },
    testimonials: {
      kicker: "Testimonials",
      title: "What our\nclients say",
      subtitle: "Cuban businesses that are already growing with AI.",
      items: [
        {
          text: "We used to lose many opportunities by not responding in time. With EPICS AI we managed to serve all our customers and significantly increase our sales.",
          role: "Commercial Director",
        },
        {
          text: "The inventory system let us have total control of the business. Now we know exactly what we have and what we need to buy.",
          role: "MSME Owner",
        },
        {
          text: "They built us a professional website and automated our WhatsApp. The difference in image and organization was immediate.",
          role: "Business Owner",
        },
        {
          text: "FB Publisher became our main source of customers. The return on investment was very fast.",
          role: "Administrator",
        },
        {
          text: "Process automation drastically reduced the time spent on repetitive tasks. Now we focus on growing.",
          role: "Operations Manager",
        },
        {
          text: "EPICS AI's support is exceptional. Always available, with solutions that really work for Cuba.",
          role: "Startup CEO",
        },
        {
          text: "WhatsApp automation completely changed how we serve our customers. Faster, more professional.",
          role: "Self-Employed Business Owner",
        },
        {
          text: "We were afraid of technology, but EPICS AI made it simple. Today we have total control of our inventory.",
          role: "Shop Owner",
        },
        {
          text: "The website they built for us converts visitors into customers. Our online sales grew 40% in the first month.",
          role: "Sales Manager",
        },
      ],
    },
    ctaFinal: {
      kicker: "The next step",
      title: "The future of your business\nstarts today",
      text1: "Don't lose customers to manual processes. Digitize your business with EPICS AI.",
      text2: "Request a free demonstration and discover how AI can help you grow.",
      ctaWhatsapp: "Chat on WhatsApp",
      ctaEmail: "Send an Email",
    },
    footer: {
      sections: {
        services: {
          label: "Services",
          links: [
            { title: "FB Publisher AI" },
            { title: "AI WhatsApp" },
            { title: "Digital Inventory" },
            { title: "MSME System" },
            { title: "Web Development" },
          ],
        },
        company: {
          label: "Company",
          links: [
            { title: "About Us" },
            { title: "Leadership" },
            { title: "Testimonials" },
            { title: "Process" },
          ],
        },
        sectors: {
          label: "Sectors",
          links: [
            { title: "MSMEs & Self-Employed" },
            { title: "Restaurants" },
            { title: "Shops" },
            { title: "Clinics" },
          ],
        },
        contact: {
          label: "Contact",
          links: [
            { title: "WhatsApp" },
            { title: "Facebook" },
            { title: "Instagram" },
            { title: "LinkedIn" },
          ],
        },
      },
    },
  },

  diagnostico: {
    intro: {
      badge: "Free diagnostic",
      title: "Discover how much money\nyour business is losing",
      desc1:
        "In 7 minutes, this strategic diagnostic identifies exactly where your revenue leaks are, the hours lost every week, and the automation opportunities you could activate this very week.",
      desc2:
        "More than 50 Cuban businesses have completed this diagnostic. 94% implemented at least one solution within the following 30 days.",
      statsRow: [
        { v: "~7 min", l: "to complete" },
        { v: "7 sections", l: "of diagnostic" },
        { v: "100% free", l: "no obligation" },
      ],
      ctaStart: "Start diagnostic",
      backLink: "EPICS AI",
    },
    progress: {
      completedLabel: "completed",
    },
    multiSelectHint: "Multiple choice — select all that apply",
    buttons: {
      back: "Back",
      continue: "Continue",
      viewDiagnosis: "See my diagnostic",
    },
    steps: {
      perfil: {
        title: "Your company profile",
        subtitle: "Tell us about your business to personalize the diagnostic",
        fields: {
          ingresos: {
            q: "What is your company's monthly revenue range?",
            options: {
              a: "Less than $2,000 USD",
              b: "$2,000 – $10,000 USD",
              c: "$10,000 – $50,000 USD",
              d: "More than $50,000 USD",
            },
          },
          equipo: {
            q: "How many people work at your company?",
            options: {
              a: "Just me (self-employed / freelancer)",
              b: "2 – 5 people",
              c: "6 – 20 people",
              d: "More than 20 people",
            },
          },
          bloqueo: {
            q: "What is your main obstacle to growth today?",
            options: {
              a: "Not enough customers coming in",
              b: "Processes are slow or chaotic",
              c: "My team doesn't scale with demand",
              d: "Lack of information to make decisions",
            },
          },
        },
      },
      operaciones: {
        title: "Operational diagnostic",
        subtitle: "Let's identify where the chaos is in your daily operation",
        fields: {
          dependencia: {
            q: "How dependent is your business on specific key people?",
            options: {
              a: "Completely — if someone is out, everything stops",
              b: "A lot — several things depend on one person",
              c: "Somewhat — there's redundancy in most areas",
              d: "Not much — processes are documented and replicable",
            },
          },
          horas_tareas: {
            q: "How many hours a week does your team estimate it loses on repetitive tasks?",
            options: {
              a: "Less than 5 hours",
              b: "5 – 15 hours",
              c: "15 – 30 hours",
              d: "More than 30 hours",
            },
          },
          colapso: {
            q: "What happens to your operation when demand increases?",
            options: {
              a: "Everything collapses — we can't handle the volume",
              b: "There are delays and errors, but we survive",
              c: "It stretches but works acceptably",
              d: "It scales well — the processes support it",
            },
          },
          manual: {
            q: "Which critical processes are still done manually today?",
            options: {
              a: "Customer and sales follow-up",
              b: "Inventory control",
              c: "Responding to messages and inquiries",
              d: "Invoicing and accounting records",
              e: "Reports and data analysis",
            },
          },
        },
      },
      ventas: {
        title: "Leaks in your sales",
        subtitle: "The money lost before the customer even gets to pay",
        fields: {
          respuesta_leads: {
            q: "How long does your company take to respond to a new lead or inquiry?",
            options: {
              a: "More than 24 hours",
              b: "Between 1 and 24 hours",
              c: "Less than 1 hour",
              d: "Within minutes (automated)",
            },
          },
          sin_seguimiento: {
            q: "What percentage of interested leads never receives follow-up?",
            options: {
              a: "More than 60% — almost no one gets follow-up",
              b: "Between 30% and 60%",
              c: "Between 10% and 30%",
              d: "Less than 10% — consistent follow-up",
            },
          },
          donde_pierde: {
            q: "Where do you lose the most potential customers?",
            options: {
              a: "WhatsApp — unanswered messages",
              b: "Social media — ignored comments and DMs",
              c: "Email — overflowing inboxes",
              d: "Missed calls no one returns",
              e: "Website — no form or clear CTA",
            },
          },
          ventas_potenciales: {
            q: "If you responded within seconds, 24/7, how many more sales would you close monthly?",
            options: {
              a: "Few — lead volume is low",
              b: "Between 5 and 15 additional sales",
              c: "Between 15 and 40 additional sales",
              d: "More than 40 — there's a huge unattended volume",
            },
          },
        },
      },
      marketing: {
        title: "Marketing inefficiency",
        subtitle: "What you spend in time vs. what you should be generating",
        fields: {
          horas_contenido: {
            q: "How many hours a week does your team spend creating content for social media?",
            options: {
              a: "More than 15 hours",
              b: "Between 8 and 15 hours",
              c: "Between 3 and 8 hours",
              d: "Less than 3 hours (partly automated)",
            },
          },
          reusa_contenido: {
            q: "Do you reuse existing content, or recreate everything from scratch every time?",
            options: {
              a: "Everything from scratch — we never reuse anything",
              b: "Almost everything from scratch with minimal reuse",
              c: "We reuse some, but not systematically",
              d: "Clear system for reuse and repurposing",
            },
          },
          canales_rentables: {
            q: "Which channels currently generate real revenue for you?",
            options: {
              a: "Facebook / Instagram (organic)",
              b: "WhatsApp Business",
              c: "Website",
              d: "Referrals / word of mouth",
              e: "I'm not clear on which channel converts",
            },
          },
        },
      },
      soporte: {
        title: "Customer support load",
        subtitle: "The time spent answering what you've already answered before",
        fields: {
          preguntas_repetidas: {
            q: "How many repeated questions does your team receive per week?",
            options: {
              a: "More than 100",
              b: "Between 50 and 100",
              c: "Between 20 and 50",
              d: "Less than 20",
            },
          },
          tiempo_soporte: {
            q: "What is the average response time in customer support?",
            options: {
              a: "More than 24 hours",
              b: "Between 4 and 24 hours",
              c: "Between 1 and 4 hours",
              d: "Less than 1 hour",
            },
          },
          automatizable: {
            q: "What percentage of the inquiries you receive could be resolved automatically?",
            options: {
              a: "More than 70%",
              b: "Between 40% and 70%",
              c: "Between 20% and 40%",
              d: "Less than 20%",
            },
          },
        },
      },
      fundador: {
        title: "Founder's time drain",
        subtitle: "The hours you should be investing in growing the business",
        fields: {
          horas_operacion: {
            q: "How many hours a week do you spend on operations someone else should handle?",
            options: {
              a: "More than 25 hours",
              b: "Between 15 and 25 hours",
              c: "Between 5 and 15 hours",
              d: "Less than 5 hours",
            },
          },
          sin_datos: {
            q: "How often do you make important decisions without enough data?",
            options: {
              a: "Always — it's almost all intuition",
              b: "Frequently — data is hard to get",
              c: "Sometimes — I have some data but not enough",
              d: "Rarely — I have good visibility into the business",
            },
          },
        },
      },
      urgencia: {
        title: "Urgency and decision",
        subtitle: "The last step — let's assess your readiness to act",
        fields: {
          urgencia: {
            q: "How urgently do you need to solve the problems identified?",
            options: {
              a: "Critical — every day that passes is money lost",
              b: "High — I want to solve it in the next 30 days",
              c: "Medium — in the next 60-90 days",
              d: "Low — just exploring options for now",
            },
          },
          presupuesto: {
            q: "What is your available monthly budget for automation and AI?",
            options: {
              a: "Less than $200 USD/month",
              b: "$200 – $500 USD/month",
              c: "$500 – $1,500 USD/month",
              d: "More than $1,500 USD/month",
            },
          },
          implementar: {
            q: "Are you willing to implement AI systems in the next 30-90 days?",
            options: {
              a: "Yes, I'm ready to start this week",
              b: "Yes, as soon as I have more clarity on the ROI",
              c: "Probably, I need to see results first",
              d: "I'm not sure yet",
            },
          },
        },
      },
    },
    results: {
      badge: "Your business efficiency report",
      title: "We've identified your main leaks",
      subtitle: "Based on your answers, this is the EPICS AI diagnostic for your business.",
      scoreLabels: {
        chaos: "Operational chaos",
        ventas: "Sales leakage",
        ai: "AI potential",
        soporte: "Support load",
      },
      metrics: {
        timeWaste: { label: "Hours lost per week", sub: "on tasks AI can eliminate" },
        monthlyCost: { label: "Monthly cost of inefficiency", sub: "estimated at $25/hr opportunity cost" },
        recovery: { label: "Recovery potential", sub: "in monthly revenue with the right solution" },
      },
      recPriorityLabel: "Recommended priority solution",
      viewSolution: "See solution",
      talkToSpecialist: "Talk to a specialist",
      sessionQuestion: "Want us to walk through these results with you in a 30-minute session?",
      sendReportWa: "Send report via WhatsApp",
    },
    recs: {
      chaos: {
        title: "Internal workflow automation",
        desc: "Your operation needs systems that eliminate dependence on key people and automate repetitive tasks.",
      },
      ventas: {
        title: "Lead capture and follow-up system",
        desc: "You're losing sales due to slow response and lack of follow-up. A sales automation system can recover that revenue.",
      },
      mktg: {
        title: "Facebook marketing automation",
        desc: "Your marketing consumes too many hours without proportional results. Automation can triple your reach at a fraction of the cost.",
      },
      soporte: {
        title: "AI assistant for WhatsApp",
        desc: "Your team answers the same questions dozens of times a day. An AI assistant can handle 70% of those inquiries automatically.",
      },
      fundador: {
        title: "Complete business management system",
        desc: "You're operating without data and without systems. A central system will free up your time and give you the visibility you need to grow.",
      },
    },
  },

  fundador: {
    hero: {
      roleLabel: "CEO & Founder of EPICS AI",
      bio: "AI specialist, business automation, and digital development. More than 3 years working with artificial intelligence tools, commercial automation, and digital transformation, with clients from Cuba, Mexico, the United States, France, Switzerland, and Dubai on marketing, software, design, and automation projects.",
      ctaViewCerts: "View certifications",
    },
    certs: {
      kicker: "Education and certifications",
      title: "Credentials that back\nevery project",
      subtitle: "Every certification is verified. Press",
      subtitleHighlight: "View in detail",
      subtitleSuffix: " to review the diploma or certificate.",
      ctaViewDetail: "View in detail",
      placeholderText: "The certificate photo will go here",
      placeholderPathPrefix: "Place the file in",
      modalCloseAria: "Close",
    },
    certifications: {
      googleAiEssentials: {
        name: "Google AI Essentials",
        issuer: "Google",
        desc: "Professional use of artificial intelligence: how models work, effective prompting, and responsible application of AI in real business tasks.",
      },
      claudeCertifiedArchitect: {
        name: "Claude Certified Architect",
        issuer: "Anthropic",
        desc: "Practical, proctored certification. Assesses AI agent design, tool use, and multi-model system architecture. Recognized by companies deploying Claude at scale.",
      },
      githubFoundations: {
        name: "GitHub Foundations",
        issuer: "GitHub",
        desc: "Mastery of Git and GitHub: commits, branches, pull requests, GitHub Actions, production collaboration workflows, and AI-assisted development (Copilot).",
      },
      hubspotMarketing: {
        name: "Digital Marketing Diploma",
        issuer: "HubSpot Academy",
        desc: "Marketing credential recognized by agencies and companies: SEO, content marketing, social media, and email marketing with lead-capture sequences.",
      },
      ibmCybersecurity: {
        name: "Cybersecurity Analyst",
        issuer: "IBM SkillsBuild",
        desc: "Network security, threat analysis, and incident response. Certified with transferable university credits (ACE).",
      },
      ibmDataAnalytics: {
        name: "Data Analytics",
        issuer: "IBM SkillsBuild",
        desc: "Data visualization, SQL fundamentals, and reporting with real datasets. Certified with transferable university credits (ACE).",
      },
      googleCloudDeveloper: {
        name: "Google Cloud Developer",
        issuer: "Google Cloud",
        desc: "Official developer program: build, deploy, and scale applications on enterprise-grade cloud infrastructure.",
      },
      appleDeveloper: {
        name: "Apple Developer Program",
        issuer: "Apple",
        desc: "Official Apple membership to create and publish applications in the iOS and macOS ecosystem, under its quality and security standards.",
      },
      tribuDivisual: {
        name: "La Tribu Divisual 2026",
        issuer: "Specialized training",
        desc: "Advanced training in n8n, Claude Code, and automations. Designing flows and agents that connect tools and eliminate repetitive tasks.",
      },
      businessAutomation: {
        name: "Business Automation",
        issuer: "Specialized training",
        desc: "Commercial automation and integration of systems, CRM, and processes to scale operations without increasing manual work.",
      },
      digitalSolutions: {
        name: "Digital Business Solutions",
        issuer: "Specialized training",
        desc: "Digital transformation of MSMEs: management, sales, inventory, and data systems put to work for business growth.",
      },
    },
    technologies: {
      kicker: "Technologies mastered",
      items: [
        "ChatGPT", "Claude", "Gemini", "Llama",
        "WhatsApp Business API", "AI Automation",
        "AI Agents", "CRM Integration",
        "Facebook Automation", "Highfield",
        "n8n", "Claude Code",
      ],
    },
    cta: {
      title: "Ready to digitize your business?",
      text: "Work directly with the EPICS AI team. Write to us and let's get started today.",
    },
  },

  editorial: {
    ctaWhatsappHero: "Message us on WhatsApp",
    ctaWhatsappCta: "Message us on WhatsApp",
    footNote: "We can fully customize it for your company's specific case.",
    imgFallbackLabel: "GIF or image here",
  },

  servicePageLegacy: {
    reserveMine: "Book mine",
    reserveYours: "Book yours",
    personalizeNote: "We can fully customize it for your company's specific case.",
    problemLabel: "The real problem",
    solutionLabel: "The solution",
    previewLabel: "Preview",
    previewTitle: "The system in action",
    processLabel: "The process",
    processTitle: "How we implement it",
    benefitsTitle: "What you get",
    personalizationLabel: "Total customization",
    personalizationTitle: "Every business is unique.\nYour solution should be too.",
    personalizationBody:
      "We don't sell generic software. We analyze your business, your processes, and your specific goals to deliver a solution that works exactly the way you need it to.",
    personalizationPoints: [
      "Adapted to your workflows",
      "Integration with your current tools",
      "Ongoing support after implementation",
    ],
    finalCtaTitle: "Ready to implement it\nin your business?",
    finalCtaBody1: "Write to us today. We review your case with no obligation and tell you exactly what results you can expect.",
    finalCtaBody2: "We can fully customize it for your case.",
  },
};

export const translations: Record<Language, Translations> = { es, en };
