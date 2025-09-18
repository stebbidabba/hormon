"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CircleHelp } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function FAQ() {
  const { t } = useLanguage();
  const items = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
    { q: t("faq_q5"), a: t("faq_a5") },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2"><CircleHelp size={20} className="text-brand" /> {t("faq_title")}</h2>
      <Accordion type="single" collapsible className="mt-6 space-y-3">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border bg-white shadow-sm hover-lift">
            <AccordionTrigger className="px-4 md:px-6 py-4 text-left">{it.q}</AccordionTrigger>
            <AccordionContent className="px-4 md:px-6 pb-5 text-neutral-700">{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}



