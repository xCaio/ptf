import barbeariaScreenshot from "../assets/screenshots/barbearia-garcia.png"
import estoqueScreenshot from "../assets/screenshots/estoque.png"
import zebraPrintManagerScreenshot from "../assets/screenshots/zebraPrintManager.png"

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  highlights?: string[]
  liveUrl?: string
  githubUrl?: string
  screenshotAlt: string
  screenshotSrc?: string
}

export const projects: Project[] = [
  {
    id: "01",
    name: "Estoque Vallourec",
    description:
      "Sistema web desenvolvido para controle de produtos, estoque e movimentações, com API em FastAPI, PostgreSQL e frontend em React.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "React",
    ],
    highlights: [
      "Backend",
      "Frontend",
      "Banco de dados",
      "Autenticação",
      "Exportação para Excel",
    ],
    liveUrl: "https://stock-frontend-dun-eight.vercel.app/",
    githubUrl: "https://github.com/xCaio/stock-frontend",
    screenshotAlt: "Screenshot do Sistema de Estoque",
    screenshotSrc: estoqueScreenshot
  },
  {
    id: "02",
    name: "Barbearia Garcia",
    description:
      "Site para uma barbearia local, com apresentação dos serviços, identidade visual e layout responsivo.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://barbearia-garcia.vercel.app/",
    githubUrl: "https://github.com/xCaio/barber",
    screenshotAlt: "Screenshot do site Barbearia Garcia",
    screenshotSrc: barbeariaScreenshot
  },
  {
    id: "03",
    name: "ZPL Printer Manager",
    description:
      "Sistema Web para impressão de etiquetas em impressoras Zebra, com layout e campos personalizados pelo usuário",
    technologies: ["React", "TypeScript", "CSS", "Python", "FastAPI", "PostgreSQL"],
    liveUrl: "http://localhost:5173/",
    githubUrl: "https://github.com/xCaio/zebra-printer-manager",
    screenshotAlt: "Screenshot do projeto Zebra Printer Manager",
    screenshotSrc: zebraPrintManagerScreenshot
  }
]
