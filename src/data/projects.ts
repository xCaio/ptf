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
    id: "estoque",
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
    screenshotSrc: "/src/assets/screenshots/estoque.png"
  },
  {
    id: "barbearia-garcia",
    name: "Barbearia Garcia",
    description:
      "Site para uma barbearia local, com apresentação dos serviços, identidade visual e layout responsivo.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://barbearia-garcia.vercel.app/",
    githubUrl: "https://github.com/xCaio/barber",
    screenshotAlt: "Screenshot do site Barbearia Garcia",
    screenshotSrc: "/src/assets/screenshots/barbearia-garcia.png"
  },
]
