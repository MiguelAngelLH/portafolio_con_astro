// Proyectos personalizados de Miguel Ángel
import ExploraRImg from "../assets/img-projects/EXPLORAR.png";
import UniNestImg from "../assets/img-projects/UNINEST.png";
import RecouImg from "../assets/img-projects/RECOU_LOGOTIPO_blanco.png";
import SafeCheckImg from "../assets/img-projects/SAFECHECK.png";

export const proyectos = [
  {
    titulo: "exploraR - Plataforma de Orientación Vocacional VR",
    descripcion:
      "Aplicación móvil con realidad virtual para reducir la deserción universitaria. Tours virtuales, micro-vivencias, testimonios 360° y panel administrativo.",
    imagen: ExploraRImg.src,
    tecnologias: [
      "Frontend: React Native",
      "Three.js",
      "Backend: Node.js (Express)",
      "MongoDB",
    ],
    demo: "#",
    codigo: "https://github.com/MiguelAngelLH",
    categoria: "fullstack",
  },
  {
    titulo: "SafeCheck School",
    descripcion:
      "Plataforma web/móvil que integra IoT con sensores MQ-3 y ESP32 para detección de alcohol en estudiantes, con dashboard y alertas en tiempo real.",
    imagen: SafeCheckImg.src,
    tecnologias: [
      "Frontend: React",
      "Backend: Node.js (Express)",
      "MongoDB",
      "IoT: ESP32 + MQ-3",
    ],
    demo: "#",
    codigo: "https://github.com/MiguelAngelLH",
    categoria: "fullstack",
  },
  {
    titulo: "RECOU - Plataforma de Donación Solidaria",
    descripcion:
      "Sistema para reciclar PET/aluminio y apoyar la creación de prótesis. Gestión de centros, seguimiento de donaciones y gamificación para incentivar la participación.",
    imagen: RecouImg.src,
    tecnologias: ["Frontend: JavaScript", "Backend: PHP", "MySQL"],
    demo: "#",
    codigo: "https://github.com/MiguelAngelLH",
    categoria: "fullstack",
  },
  {
    titulo: "UNINEST",
    descripcion:
      "Aplicación móvil en Flutter con SQLite para gestión de acceso estudiantil: registro entrada/salida, reportes y sincronización opcional.",
    imagen: UniNestImg.src,
    tecnologias: [
      "Frontend: Flutter",
      "Backend: API (Node.js/Express)",
      "SQLite",
    ],
    demo: "#",
    codigo: "https://github.com/MiguelAngelLH",
    categoria: "fullstack",
  },
];
