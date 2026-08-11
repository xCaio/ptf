import { social } from "../../data/social"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-medium text-text">Caio Santos</p>
        <p className="mt-1 text-sm text-text-muted">Desenvolvedor Backend</p>

        <div className="mt-4 flex items-center gap-2 text-sm text-text-muted">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-150"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-150"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={social.email}
            className="hover:text-accent transition-colors duration-150"
          >
            Email
          </a>
        </div>

        <p className="mt-8 text-xs text-text-subtle">
          <a 
            href={social.whatsapp} 
            target="_blank"
          >
            &copy; {year} Caio Santos</a>
        </p>
      </div>
    </footer>
  )
}
