export interface SkillCategory {
  title: string
  items: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    items: "Python · FastAPI · SQLAlchemy · Pydantic",
  },
  {
    title: "Banco de dados",
    items: "PostgreSQL",
  },
  {
    title: "Frontend",
    items: "React · JavaScript · HTML · CSS",
  },
  {
    title: "Ferramentas",
    items: "Git · GitHub · Docker · Railway · Vercel",
  },
]
