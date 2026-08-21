import { social } from "../../data/social"
import { SectionHeading } from "../ui/SectionHeading"

export function Contact() {
  return (
    <section id="contato" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading title="Vamos conversar" />

        <p className="mb-8 max-w-xl text-text-muted leading-relaxed">
          Estou aberto a oportunidades, projetos e conversas sobre
          desenvolvimento.
        </p>

        <a href={social.email} className="mb-10 inline-block text-xl text-text underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent md:text-2xl">me@cain.dev.br</a>
        <div className="flex items-center gap-6 text-sm">
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

      </div>
    </section>
  )
}
