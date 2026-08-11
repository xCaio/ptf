import { social } from "../../data/social"
import { SectionHeading } from "../ui/SectionHeading"
import { Button } from "../ui/Button"

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section id="contato" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading title="Vamos conversar" />

        <p className="text-text-muted leading-relaxed mb-8 max-w-xl">
          Estou aberto a oportunidades, projetos e conversas sobre
          desenvolvimento.
        </p>

        <div className="flex items-center gap-6 text-sm mb-12">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors duration-150"
          >
            LinkedIn
          </a>
          <a
            href={social.email}
            className="text-text-muted hover:text-accent transition-colors duration-150"
          >
            Email
          </a>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Nome"
              className="w-full border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-150"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              className="w-full border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-150"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Mensagem"
              className="w-full border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-150 resize-none"
            />
          </div>

          <Button type="submit" variant="primary">
            Enviar
          </Button>
        </form>
      </div>
    </section>
  )
}
