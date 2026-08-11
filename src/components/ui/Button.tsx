import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"

type Variant = "primary" | "secondary"

interface BaseProps {
  variant?: Variant
  className?: string
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonProps | LinkProps

const variants: Record<Variant, string> = {
  primary:
    "border border-accent text-accent hover:bg-accent hover:text-bg",
  secondary:
    "border border-border text-text-muted hover:text-text hover:border-text-muted",
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm transition-colors duration-150 cursor-pointer"

  const classes = `${base} ${variants[variant]} ${className}`

  if ("href" in props && props.href) {
    const { href, ...rest } = props as LinkProps
    return (
      <a href={href} className={classes} {...rest}>
        {props.children}
      </a>
    )
  }

  const buttonProps = props as ButtonProps
  return <button className={classes} {...buttonProps} />
}
