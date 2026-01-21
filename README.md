# Portafolio con Astro

Portafolio personal construido con **Astro** para mostrar proyectos, experiencia y tecnologías.

## Características

- Página de proyectos con **filtros por categoría** y botón **“Ver más”**.
- Sección de **Proyectos Destacados** en Home.
- Componentes reutilizables (navbar, footer, hero, cards).
- Estilos con **Tailwind CSS** + CSS específico por sección.

## Cambios recientes (enero 2026)

- Visibilidad de imagen/logotipo en cards de proyectos (incluye **SafeCheck**):
	- Se ajustó el render de imágenes a `object-contain` con contenedor de altura fija y fondo claro para evitar recortes o “desaparición” de logos.
	- Aplicado en:
		- `src/components/project/proyectCard.astro` (página /proyectos)
		- `src/components/home/homeProyect/homeProyectCard.astro` (Home: Proyectos Destacados)
- Redacción mejorada de **Metodologías ágiles** (Scrum/Kanban) para que sea más profesional y consistente:
	- Actualizado en FAQs:
		- `src/components/home/faqs/faqs.jsx`
		- `src/components/about/FaqsAbout.jsx`
	- Integrado también en About dentro de “¿Cómo trabajo en equipo?” (además de las etiquetas):
		- `src/components/about/aboutMe.astro`

## Tecnologías

- Astro
- JavaScript / JSX
- Tailwind CSS

## Estructura del proyecto

Carpetas principales:

- `src/pages/`: páginas (Home, About, Contact, Proyectos)
- `src/components/`: componentes por secciones
- `src/data/`: datos de proyectos/experiencia
- `src/assets/`: imágenes y recursos
- `src/styles/`: CSS global y estilos por sección
- `public/`: assets públicos

## Requisitos

- Node.js (recomendado LTS)
- npm

## Instalación

```bash
npm install
```

## Comandos

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview del build
npm run preview
```

## Notas

- Los datos de proyectos se gestionan desde `src/data/projectData.js` y `src/data/projetsAboutData.js`.
- Si agregas nuevas imágenes de proyectos, colócalas en `src/assets/img-projects/` y referencia su import como en los ejemplos existentes.
