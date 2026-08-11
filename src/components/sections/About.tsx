import { SectionHeading } from "../ui/SectionHeading"

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading title="Sobre mim" />

        <div className="space-y-4 text-text-muted leading-relaxed max-w-xl">
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
