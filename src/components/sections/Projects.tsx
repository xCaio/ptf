import { ArrowUpRight, GitFork } from "lucide-react"
import { projects } from "../../data/projects"
import { ScreenshotPlaceholder } from "../ui/ScreenshotPlaceholder"
import { SectionHeading } from "../ui/SectionHeading"

export function Projects() {
  return (
    <section id="projetos" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-12">
          <SectionHeading title="Projetos selecionados" className="mb-0" />
          <p className="hidden text-right text-sm text-text-subtle sm:block">02 projetos</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="group rounded-lg border border-border bg-surface p-3 transition-colors duration-200 hover:border-text-subtle">
              <div className="overflow-hidden rounded-md bg-bg">
                <ScreenshotPlaceholder alt={project.screenshotAlt} src={project.screenshotSrc} className="transition duration-500 group-hover:scale-[1.02]" />
              </div>
              <div className="px-2 pt-6 pb-3">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div><p className="mb-2 text-xs font-medium tracking-[0.14em] text-accent">{project.id}</p><h3 className="text-xl font-medium tracking-tight text-text">{project.name}</h3></div>
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.name}`} className="mt-1 rounded p-1 text-text-muted transition-colors hover:text-accent"><ArrowUpRight className="h-5 w-5" /></a>}
                </div>
                <p className="min-h-20 text-sm leading-relaxed text-text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded border border-border px-2 py-1 text-xs text-text-muted">{technology}</span>)}</div>
                <div className="mt-6 flex items-center gap-5 text-sm">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-text"
                  >
                    <GitFork className="h-3.5 w-3.5" /> Código
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted transition-colors hover:text-text"
                  >
                    Ver projeto
                  </a>
                )}
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
