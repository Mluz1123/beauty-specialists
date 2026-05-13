# Beauty Specialists — Landing Page

Landing page de lujo para **Beauty Specialists**, salón de belleza especializado en maquillaje para novias, quinceañeras y eventos en Cota, Cundinamarca.

---

## Stack tecnológico

| Tecnología | Versión |
|---|---|
| [Astro](https://astro.build) | ^6.0.0 |
| [Tailwind CSS](https://tailwindcss.com) | ^4.0.0 |
| TypeScript | Incluido en Astro |
| Gestor de paquetes | pnpm |

---

## Requisitos

- Node.js 18+
- pnpm 8+

---

## Instalación

```bash
pnpm install
```

## Comandos

```bash
pnpm dev        # Servidor de desarrollo en localhost:4321
pnpm build      # Build de producción en dist/
pnpm preview    # Vista previa del build
```

---

## Estructura del proyecto

```
beauty-specialists/
├── public/
│   └── img/                  # Imágenes (hero_bride.png, salon.jpg, etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.astro       # Navegación + menú mobile glassmorphism
│   │   ├── Hero.astro         # Banner principal con overlay responsive
│   │   ├── About.astro        # Sección "Nosotros"
│   │   ├── Services.astro     # Servicios ofrecidos
│   │   ├── Gallery.astro      # Galería de trabajos
│   │   ├── Benefits.astro     # Beneficios / diferenciadores
│   │   ├── Testimonials.astro # Reseñas de clientes
│   │   ├── Pricing.astro      # Precios
│   │   ├── BookingCTA.astro   # Call to action de agendamiento
│   │   ├── FAQ.astro          # Preguntas frecuentes
│   │   ├── ContactForm.astro  # Formulario de contacto
│   │   ├── Map.astro          # Mapa de ubicación
│   │   └── Footer.astro       # Pie de página
│   ├── data/
│   │   ├── config.ts          # Datos del negocio (nombre, contacto, redes)
│   │   ├── services.ts        # Lista de servicios
│   │   ├── pricing.ts         # Tarifas
│   │   ├── testimonials.ts    # Testimonios
│   │   └── faq.ts             # Preguntas frecuentes
│   ├── layouts/
│   │   └── Layout.astro       # Layout base con SEO y meta tags
│   ├── styles/
│   │   └── global.css         # Variables CSS, tokens de diseño, utilidades
│   └── pages/
│       └── index.astro        # Página principal
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## Configuración del negocio

Toda la información del negocio se centraliza en [`src/data/config.ts`](src/data/config.ts):

```ts
export const siteConfig = {
  name: 'Beauty Specialists',
  owner: 'Erika Bello',
  contact: {
    phone: '+57 313 364 0112',
    whatsapp: '573133640112',
    email: 'beautyspecialists@gmail.com',
  },
  location: {
    city: 'Cota',
    state: 'Cundinamarca',
  },
  social: {
    instagramUrl: 'https://instagram.com/beautyspecialistss',
  },
};
```

---

## Diseño

- **Paleta**: oscura (`#1A1A1A`) con accent rosa (`#E8A89A`)
- **Tipografía**: fuente script para títulos decorativos, serif para headings
- **Hero**: layout izquierdo en desktop, contenido al fondo en mobile con gradiente radial + vertical
- **Navbar mobile**: menú glassmorphism con hamburger de 3 líneas (tercera en color accent)
- **Responsive**: mobile-first con breakpoints `sm` y `md`

---

## Despliegue

El build genera archivos estáticos en `dist/`. Compatible con cualquier hosting estático:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [GitHub Pages](https://pages.github.com)

```bash
pnpm build
# Subir la carpeta dist/ al hosting
```

---

## Contacto del negocio

**Beauty Specialists** · Cota, Cundinamarca, Colombia  
📞 +57 313 364 0112  
📸 [@beautyspecialistss](https://instagram.com/beautyspecialistss)
