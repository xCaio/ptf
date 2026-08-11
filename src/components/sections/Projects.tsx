import { projects } from "../../data/projects"
import { ScreenshotPlaceholder } from "../ui/ScreenshotPlaceholder"

export function Projects() {
  return (
    <section id="projetos" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <div className="space-y-20 md:space-y-28">
          {projects.map((project) => (
            <article key={project.id}>
              <h3 className="text-xl font-medium text-text mb-6">
                {project.name}
              </h3>

              <ScreenshotPlaceholder
                alt={project.screenshotAlt}
                src={project.screenshotSrc}
                className="mb-6"
              />

              <p className="text-text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              {project.highlights && (
                <p className="text-sm text-text-muted mb-4">
                  {project.highlights.join(" · ")}
                </p>
              )}

              <p className="text-sm text-text-subtle mb-6">
                {project.technologies.join(" · ")}
              </p>

              <div className="flex items-center gap-6 text-sm">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors duration-150"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors duration-150"
                  >
                    Ver projeto
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
