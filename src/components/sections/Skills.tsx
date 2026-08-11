import { skillCategories } from "../../data/skills"
import { SectionHeading } from "../ui/SectionHeading"

export function Skills() {
  return (
    <section id="tecnologias" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading title="Tecnologias" />

        <dl className="space-y-5">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <dt className="text-sm text-text-muted mb-1">{category.title}</dt>
              <dd className="text-sm text-text">{category.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
