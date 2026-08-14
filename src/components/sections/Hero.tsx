import { ArrowDownRight, GitFork } from "lucide-react"
import { Button } from "../ui/Button"
import { social } from "../../data/social"
import heroImage from "../../assets/hero.png"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-5xl items-end gap-12 px-6 md:grid-cols-[1fr_260px] md:gap-16">
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm text-text-muted"><span className="h-px w-8 bg-accent" />Caio Santos — Belo Horizonte, MG</p>
          <h1 className="max-w-2xl text-4xl font-medium tracking-[-0.04em] text-text md:text-6xl md:leading-[1.03]">Backend com atenção aos detalhes que importam.</h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">Desenvolvo APIs e aplicações web com Python, FastAPI, PostgreSQL e React. Meu foco é transformar problemas reais em sistemas simples, rápidos e confiáveis.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projetos" variant="primary">Ver projetos <ArrowDownRight className="h-4 w-4" aria-hidden="true" /></Button>
            <Button href={social.github} variant="secondary" target="_blank" rel="noopener noreferrer"><GitFork className="h-4 w-4" aria-hidden="true" /> GitHub</Button>
          </div>
        </div>
        <div className="relative mx-auto w-48 md:mx-0 md:w-full">
          <div className="absolute -inset-3 -z-10 rounded-md border border-border" />
          <img src={heroImage} alt="Caio Santos" className="aspect-[.95] w-full rounded-md object-cover object-top grayscale transition duration-500 hover:grayscale-0" />
        </div>
      </div>
    </section>
  )
}
