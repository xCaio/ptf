interface SectionHeadingProps {
  title: string
  className?: string
}

export function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`mb-8 text-lg font-medium tracking-tight text-text ${className}`}
    >
      {title}
    </h2>
  )
}
