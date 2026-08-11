import { Button } from "../ui/Button"
import { social } from "../../data/social"

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm text-text-muted mb-3">Caio Santos</p>

        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-text leading-snug">
          Desenvolvedor Backend
        </h1>

        <div className="mt-6 space-y-4 text-text-muted leading-relaxed max-w-xl">
          <p>
            Construo APIs e aplicações web usando Python, FastAPI, PostgreSQL
            e React.
          </p>
          <p>
            Tenho foco em backend e gosto de transformar problemas reais em
            sistemas simples e funcionais.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Button href="#projetos" variant="primary">
            Ver projetos
          </Button>
          <Button
            href={social.github}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
