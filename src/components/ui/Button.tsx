import React from "react";
import "../../style/components/ui/Button.scss";
import { ArrowRight } from "@phosphor-icons/react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size} ${className}`} {...props}>
      {children}
      {variant === "outline" ? (
        <div className="iconContr">
          <div>
            <ArrowRight size={20} className="-z-10"/>
          </div>
          <div>
            <ArrowRight size={20} className="-z-10"/>
          </div>
        </div>
      ) : (
        ""
      )}
    </button>
  );
}
