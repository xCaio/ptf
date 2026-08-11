interface ScreenshotPlaceholderProps {
  alt: string
  src?: string
  className?: string
}

export function ScreenshotPlaceholder({
  alt,
  src,
  className = "",
}: ScreenshotPlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full border border-border ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex w-full items-center justify-center border border-dashed border-border bg-surface ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="text-xs text-text-subtle">Screenshot — {alt}</span>
    </div>
  )
}
