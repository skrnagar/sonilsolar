import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/content/cities";

export function FaqList({ faqs, title = "Questions people actually ask" }: { faqs: Faq[]; title?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">{title}</h2>
      <Accordion type="single" collapsible className="mt-6 divide-y rounded-2xl border bg-card px-4">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`q-${i}`}>
            <AccordionTrigger className="py-4 text-base font-medium text-navy hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
