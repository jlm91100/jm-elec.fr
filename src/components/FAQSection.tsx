import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export function FAQSection({ items, title = "Questions fréquentes" }: FAQSectionProps) {
  return (
    <section className="py-16">
      <h2 className="mb-8">{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <FAQAccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}

function FAQAccordionItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left font-heading font-semibold text-sm hover:bg-muted/50 transition-colors"
        aria-expanded={open}
      >
        {question}
        <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform flex-shrink-0 ml-4", open && "rotate-180")} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}