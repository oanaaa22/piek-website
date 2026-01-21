import Link from "next/link";
import { cn } from "./cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ href, children, variant = "secondary", className }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-emerald-400/20 ring-1 ring-emerald-300/30 hover:bg-emerald-400/25"
      : "bg-white/10 ring-1 ring-white/20 hover:bg-white/15";

  return (
    <Link href={href} className={cn(base, styles, "backdrop-blur", className)}>
      {children}
    </Link>
  );
}
