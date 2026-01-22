export const NOMBRE_SITIO = "MALH";

export const TITULOS_PAGINA = {
  inicio: "Inicio",
  sobreMi: "Sobre mí",
  proyectos: "Proyectos",
  contacto: "Contacto",
  noEncontrado: "404",
} as const;

export const DESCRIPCION_SITIO = "Portafolio de MALH";

export function construirTitulo(titulo: string) {
  return `${titulo} / ${NOMBRE_SITIO}`;
}
