import type { ReactNode } from "react";

export function AnswerBlock({
  question,
  answer,
  updated,
}: {
  question: string;
  answer: string;
  updated?: string;
}) {
  return (
    <aside className="rounded-2xl border border-amber/30 bg-amber/10 p-5 md:p-6">
      <p className="text-xs font-medium tracking-[0.14em] uppercase text-navy/70">Direct answer</p>
      <h2 className="mt-1 font-serif text-xl text-navy md:text-2xl">{question}</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-foreground/90">{answer}</p>
      {updated ? (
        <p className="mt-3 text-xs text-muted-foreground">Last verified: {updated}</p>
      ) : null}
    </aside>
  );
}

export function VerifyNote({ children }: { children?: ReactNode }) {
  return (
    <p className="text-xs leading-relaxed text-muted-foreground">
      {children ||
        "Policy, tariff and price figures are planning values. Confirm against the live government circular, your DISCOM bill and a site survey. Updated September 2026."}
    </p>
  );
}
