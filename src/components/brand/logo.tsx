import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="SONIL Solar home">
      <span
        className={cn(
          "grid size-9 place-items-center rounded-lg",
          light ? "bg-amber text-navy" : "bg-navy text-amber"
        )}
      >
        <svg viewBox="0 0 32 32" className="size-5" fill="none" aria-hidden>
          <circle cx="16" cy="10" r="4" fill="currentColor" />
          <path
            d="M16 2v2.5M16 15.5V18M8.2 5.2l1.8 1.8M22 13l1.8 1.8M6 10h2.5M23.5 10H26M8.2 14.8l1.8-1.8M22 7l1.8-1.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <rect x="4" y="20" width="24" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 24.5h24M12 20v9M20 20v9" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={cn("block text-[15px] font-semibold tracking-tight", light ? "text-white" : "text-navy")}>
          SONIL Solar
        </span>
        <span className={cn("block text-[10px] tracking-[0.14em] uppercase", light ? "text-white/70" : "text-muted-foreground")}>
          Sonil Buildcon
        </span>
      </span>
    </Link>
  );
}
