# Guía de imágenes — EPICS AI

Todo lo que necesitas para reemplazar los placeholders por imágenes reales.
Las imágenes viven dentro de `public/`. En Next.js, un archivo en
`public/foo/bar.png` se referencia en el código como `/foo/bar.png`.

---

## 1. Foto del CEO (página de inicio)

- **Dónde va el archivo:** `public/ceo.png`
- **Nombre exacto:** `ceo.png`
- **Forma:** cuadrada, mín. 400×400 px (se recorta en círculo).
- Si falta, aparece un círculo con las iniciales "EV". No hay que tocar código.

## 2. Logo

- Ya existe: `public/logo.svg` y `public/icon.svg` (logo completo e isotipo).
- El logo es negro; en el sitio (fondo oscuro) se le aplica la clase `invert`
  para verse blanco. Si lo reemplazas, mantén el mismo nombre.

## 3. Imágenes de las páginas de servicio

Cada servicio tiene su carpeta en `public/servicios/<slug>/` con un archivo
`LEER.txt` que lista los nombres exactos y qué mostrar en cada una.

| Servicio                | Carpeta                              |
|-------------------------|--------------------------------------|
| FB Publisher            | `public/servicios/fb-publisher/`     |
| TPV para WooCommerce    | `public/servicios/tpv-woocommerce/`  |
| WhatsApp Automatizado   | `public/servicios/whatsapp-ia/`      |
| Inventario para Mipymes | `public/servicios/inventario-digital/` |
| Sistema MIPYMES         | `public/servicios/sistema-mipymes/`  |
| Desarrollo Web          | `public/servicios/desarrollo-web/`   |

Nombres de archivo (mismos en todas las carpetas):

| Archivo          | Sección de la página |
|------------------|----------------------|
| `hero.gif`       | Encabezado (hero)    |
| `problema.png`   | El problema          |
| `solucion.gif`   | La solución          |
| `beneficio-1.png`| Primer beneficio     |
| `beneficio-2.png`| Segundo beneficio    |
| `beneficio-3.png`| Tercer beneficio (solo WhatsApp) |
| `autoridad.jpg`  | Autoridad / "Para quién es" |

> Los formatos son intercambiables: puedes usar `.gif`, `.png` o `.jpg`.
> Lo importante es el **nombre base** (`hero`, `problema`, etc.) y que actualices
> la extensión en la línea `imgSrc` del código.

### Cómo activar una imagen

En el archivo de la página (`app/servicios/<slug>/page.tsx`) cada slot tiene una
línea `imgSrc` **comentada**. Solo quita el `// ` del inicio:

```ts
hero: {
  ...
  imgLabel: "GIF o imagen — panel de inventario en acción",
  // imgSrc: "/servicios/inventario-digital/hero.gif",   ← ANTES (comentada)
},
```

```ts
hero: {
  ...
  imgLabel: "GIF o imagen — panel de inventario en acción",
  imgSrc: "/servicios/inventario-digital/hero.gif",      ← DESPUÉS (activa)
},
```

Mientras `imgSrc` esté comentada (o el archivo no exista todavía), la web muestra
un recuadro elegante con la etiqueta de texto. **Nunca se rompe el diseño.**

## 4. Certificados del fundador (página `/fundador`)

En la página del fundador, cada certificación tiene un botón **"Ver en detalle"**
que abre una ventana con la foto del diploma/certificado.

- **Dónde van los archivos:** `public/certificados/`
- Nombres exactos: ver [public/certificados/LEER.txt](public/certificados/LEER.txt).
  Ejemplos: `google-ai-essentials.jpg`, `claude-certified-architect.jpg`,
  `hubspot-marketing.jpg`, `apple-developer.jpg`, etc.
- Si falta un archivo, el modal muestra "Aquí irá la foto del certificado". No se
  rompe nada.
- Para cambiar la extensión (p. ej. usar `.png`) o el nombre, edita la ruta `img`
  de esa certificación en el array `CERTIFICATIONS` de `app/fundador/page.tsx`.

## 5. Testimonios

Las fotos de los testimonios usan URLs externas de `randomuser.me`
(en `app/page.tsx`, array `testimonials`). Son fotos de ejemplo. Para usar fotos
reales, reemplaza cada `image: "https://randomuser.me/..."` por una ruta local,
p. ej. `image: "/testimonios/cliente-1.jpg"` y coloca el archivo en
`public/testimonios/`.
