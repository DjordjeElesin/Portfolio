import React, { useState } from "react";
import { CheckCircle, Copy } from "@phosphor-icons/react";
import Tooltip from "./Tooltip";

type CopyButtonProps = {
  textToCopy: string;
  className?: string;
  children?: React.ReactNode;
};

export default function CopyButton({
  textToCopy,
  className,
  children = <Copy size={20} />,
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy); 
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy text");
    }
  };

  return (
    <>
      <Tooltip text={isCopied ? "Copied!" : "Copy"}>
        <button onClick={copyToClipboard} className={`copyButton ${className}`}>
          {isCopied ? <CheckCircle size={20} /> : children}
        </button>
      </Tooltip>
    </>
  );
}
