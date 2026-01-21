import ExploraRImg from "../assets/img-projects/EXPLORAR.png";
import UniNestImg from "../assets/img-projects/UNINEST.png";
import RecouImg from "../assets/img-projects/RECOU_LOGOTIPO_blanco.png";

export const proyectos = [
  {
    titulo: "exploraR - Plataforma de Orientación Vocacional VR",
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
    imagen: UniNestImg.src,
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
    imagen: RecouImg.src,
    tecnologias: ["Frontend: JavaScript", "Backend: PHP", "MySQL"],
    demo: "#",
    codigo: "https://github.com/MiguelAngelLH",
    categoria: "fullstack",
  },
  {
    titulo: "UNINEST",
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
