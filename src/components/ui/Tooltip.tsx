import React from "react";
import "../../style/components/ui/Tooltip.scss"

export default function Tooltip({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="tooltipContr">
      <span className="tooltip">{text}</span>
      {children}
    </div>
  );
}
