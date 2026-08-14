import { skillCategories } from "../../data/skills"
import { SectionHeading } from "../ui/SectionHeading"

export function Skills() {
  return (
    <section id="tecnologias" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading title="Tecnologias" />

        <dl className="grid gap-x-12 gap-y-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="border-t border-border pt-4">
              <dt className="mb-2 text-xs font-medium uppercase tracking-[0.13em] text-accent">{category.title}</dt>
              <dd className="text-sm leading-relaxed text-text-muted">{category.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
