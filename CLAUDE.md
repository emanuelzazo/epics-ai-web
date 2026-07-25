# 06 · EPICS AI (sitio corporativo real)

> Guía para trabajar en este repositorio. Léela antes de hacer cambios.

Proyecto **#6** del portafolio de demos en `motionsites para demo/`. Ver [`../CLAUDE.md`](../CLAUDE.md) para el mapa general de todas las carpetas.

⚠️ **No confundir con [`../03-epics-ai/`](../03-epics-ai/CLAUDE.md)**: ambos comparten el nombre de marca "EPICS AI" pero son codebases independientes. **Este proyecto (06)** es el **sitio real de producción** de la empresa (Next.js, export estático, `.htaccess` para Hostinger, WhatsApp/email reales, página `/fundador` con el CEO real y sus certificaciones). **El proyecto 03** es una landing de demostración en React + Vite, genérica, sin el contexto cubano ni infraestructura de despliegue — parece un prototipo/ejercicio previo con el mismo branding.

## Qué es

Sitio web de marketing de **EPICS AI** — agencia de IA y automatización para
empresas cubanas (MIPYMES y TCP). Una landing principal + 6 páginas de servicio
+ un diagnóstico interactivo. Idioma: español.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (vía `@tailwindcss/postcss`, configurado en `app/globals.css` con `@theme`; no hay `tailwind.config`)
- **framer-motion** / **motion** para animaciones
- **lucide-react** para iconos
- Export **estático**: `next.config.ts` usa `output: "export"` → genera HTML plano en `out/`

## Comandos

```bash
npm run dev      # desarrollo (http://localhost:3000) con Turbopack
npm run build    # genera el sitio estático en out/
npm run start    # sirve el build
npm run lint     # ESLint
```

El `out/` resultante se sube a hosting estático (hay un `.htaccess` para Apache/Hostinger).

## Estructura

```
app/
  layout.tsx              # <html>, fuente Inter, metadata SEO, botón flotante de WhatsApp
  page.tsx                # Landing principal (todas las secciones + datos inline)
  globals.css             # Tema (dark), utilidades .glass / .glow, variables CSS
  diagnostico/page.tsx    # Cuestionario interactivo multi-paso
  fundador/page.tsx       # Página dedicada al CEO + todas sus certificaciones (con modal)
  servicios/<slug>/page.tsx   # 6 páginas de servicio (solo datos; UI en el componente)
components/ui/
  editorial-service-page.tsx  # ★ Plantilla que renderiza TODAS las páginas de servicio
  dropdown-navigation.tsx     # Menú desplegable del nav (home)
  footer-section.tsx          # Footer (home)
  testimonials-columns-1.tsx  # Columnas animadas de testimonios (home)
public/                   # Assets servidos en la raíz: logo.svg, icon.svg, imágenes
```

### Cómo funcionan las páginas de servicio

Cada `app/servicios/<slug>/page.tsx` **solo exporta un objeto de datos** del tipo
`EditorialServiceData` y lo pasa a `<EditorialServicePage data={...} />`. Toda la
maquetación vive en `components/ui/editorial-service-page.tsx`. Para cambiar el
diseño de las 6 páginas, edita ese componente; para cambiar el contenido de una,
edita su `page.tsx`.

Rutas (slug de carpeta → URL):
`fb-publisher`, `tpv-woocommerce`, `whatsapp-ia`, `inventario-digital`,
`sistema-mipymes`, `desarrollo-web`.

> ⚠️ El slug de la carpeta **es** la URL. Si en `app/page.tsx` enlazas a un
> servicio, el `href`/`link` debe coincidir con el nombre real de la carpeta.
> (Antes había enlaces a `whatsapp-automatizado` e `inventario-mipymes`, que no
> existen como carpeta — ya corregidos a `whatsapp-ia` e `inventario-digital`.)

## Imágenes

Todas las imágenes de las páginas de servicio son **placeholders**: si no existe
el archivo, se muestra un recuadro con una etiqueta de texto (ver `ImgSlot` en
`editorial-service-page.tsx`). Para añadir imágenes reales, ver **`IMAGENES.md`**
y los `public/servicios/<slug>/LEER.txt`. La foto del CEO va en `public/ceo.png`
(si falta, muestra las iniciales "EV"). Las fotos de los certificados/diplomas
de la página `/fundador` van en `public/certificados/` (ver su `LEER.txt`); si
falta una, el modal "Ver en detalle" muestra un recuadro placeholder.

### Página del fundador (`/fundador`)

Página dedicada al CEO Emanuel Villa López: foto con anillo + glow, biografía y
**todas las certificaciones** (Google AI Essentials, Claude Certified Architect,
GitHub Foundations, Marketing Digital HubSpot, Ciberseguridad y Análisis de Datos
de IBM, Google Cloud Developer, Apple Developer, La Tribu Divisual —n8n/Claude
Code/automatizaciones—, etc.). Cada tarjeta tiene un botón "Ver en detalle" que
abre un modal con la foto del diploma. Los datos están en el array
`CERTIFICATIONS` al inicio de `app/fundador/page.tsx`. La home (`#ceo`) solo
muestra un resumen con un botón que enlaza aquí.

## Convenciones / cosas a saber

- **Tema oscuro fijo.** Fondo casi negro (`--background: 0 0% 4%`). El logo
  (`logo.svg`) es negro, así que en pantalla se le aplica la clase `invert` para
  verse blanco. Si añades el logo en algún sitio nuevo sobre fondo oscuro, recuerda `invert`.
- **Número de WhatsApp:** `5356999599` (formato `https://wa.me/5356999599?text=...`).
  Es el contacto real, usado en toda la web. Manténlo consistente.
- **Email de contacto:** `info@epicsai.cu`.
- Los datos de la landing (productos, sectores, testimonios, pasos del proceso)
  están como **constantes al inicio de `app/page.tsx`**, no en archivos aparte.
- Los enlaces del nav de tipo ancla (`#proceso`, `#nosotros`, etc.) solo
  funcionan desde la home, no desde las subpáginas.

## Archivos sueltos / no conectados (candidatos a limpiar)

Estos no forman parte de la app Next y se pueden eliminar si no los necesitas:

- **`index.html`** (~1000 líneas) — versión antigua y autónoma del sitio en
  HTML/CSS plano y **tema claro**. No la usa Next; es un prototipo previo.
- **`lib/*.min.js`** (`gsap`, `lenis`, `lucide`, `ScrollTrigger`) — librerías que
  solo usaba `index.html`. La app Next no las importa.
- **`components/ui/service-page.tsx`, `shader-hero.tsx`, `bg-pattern.tsx`** — no
  se importan en ningún sitio (la plantilla en uso es `editorial-service-page.tsx`).
- **`lib/utils.ts`** — solo lo usa `bg-pattern.tsx` (que tampoco se usa).
- **`assets/` y `tools/`** — carpetas vacías.
- **`logo epics svg/`** — carpeta con espacios en el nombre; duplica los SVG que
  ya están en `public/`. Usa los de `public/`.

Antes de borrar, confirma que no piensas reutilizarlos.

## Pendiente accionable: falta copiar la foto real del CEO

Hay un archivo **`foto ceo.png`** (1.26MB) suelto en la raíz del proyecto — es la
foto real del CEO, pero **nunca se copió/renombró a `public/ceo.png`**. Se
verificó que `public/ceo.png` no existe todavía, así que el sitio en producción
está mostrando el fallback de iniciales "EV" tanto en home como en `/fundador`
en vez de la foto real. Para resolverlo: copiar `foto ceo.png` a
`public/ceo.png` (ver `public/LEER-ceo.txt` para el nombre exacto esperado).

Del mismo modo, `public/certificados/` y cada `public/servicios/<slug>/` sólo
tienen su `LEER.txt` con las instrucciones — todavía no se colocaron las
imágenes reales de diplomas ni las fotos de cada servicio, por lo que hoy se ven
los placeholders automáticos de `ImgSlot` en toda la web (ver `IMAGENES.md`).

## Redundancia menor sin impacto

`framer-motion` y `motion` (mismo autor, misma API nueva) están **ambos**
instalados y en uso en paralelo — cada archivo usa uno u otro de forma
consistente, no rompe nada, pero es dependencia duplicada si se quiere depurar
`package.json`.

## Puerto de desarrollo

A diferencia de los proyectos Vite del portafolio (que usan puertos fijos
5180–5183), este proyecto usa el **puerto por defecto de Next.js: 3000**
(no está fijado en `next.config.ts`, así que si 3000 está ocupado, Next
buscará el siguiente puerto libre e informará cuál usó por consola).
