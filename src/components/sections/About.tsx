import { SectionHeading } from "../ui/SectionHeading"

export function About() {
  return (
    <section id="sobre" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[.7fr_1.3fr] md:gap-16">
        <SectionHeading title="Sobre mim" />

        <div className="max-w-xl space-y-4 leading-relaxed text-text-muted">
          <p>
            Atualmente trabalho como Analista de Suporte e estou direcionando minha carreira para o desenvolvimento de software.
          </p>
          <p>
            Foi estudando e criando meus próprios projetos que comecei a me aprofundar em backend, principalmente com Python, FastAPI, SQLAlchemy e PostgreSQL. Gosto de pegar problemas reais e tentar transformá-los em soluções que funcionem de verdade.
          </p>
          <p>Agora, meu objetivo é dar o próximo passo e atuar profissionalmente como desenvolvedor, continuando a aprender e evoluir na prática.</p>
        </div>
      </div>
    </section>
  )
}
