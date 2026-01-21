"use client";

import { useState } from "react";
import { cn } from "./cn";

export default function CopyField({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="text-sm text-white/60">{label}</div>
      <button
        type="button"
        onClick={onCopy}
        className={cn(
          "text-right text-sm text-white/90 hover:text-white",
          mono && "font-mono",
        )}
        aria-label={`Copy ${label}`}
        title="Click to copy"
      >
        {copied ? "Copied ✓" : value}
      </button>
    </div>
  );
}
