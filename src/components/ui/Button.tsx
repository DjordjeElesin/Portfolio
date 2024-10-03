import React from 'react'
import '../../style/components/ui/Button.scss'

type ButtonProps = {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline'
  size?: "small" | "medium" | "large",
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export default function Button({children, variant = "primary", size = "medium", props}: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} {...props}>{children}</button>
  )
}
