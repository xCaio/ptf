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
    "bg-accent text-bg hover:bg-[#e6bc7b]",
  secondary:
    "border border-border text-text-muted hover:border-text-muted hover:text-text",
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-150 cursor-pointer"

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
