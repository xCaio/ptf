interface SectionHeadingProps {
  title: string
  className?: string
}

export function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`mb-8 text-2xl font-medium tracking-tight text-text md:text-3xl ${className}`}
    >
      {title}
    </h2>
  )
}
