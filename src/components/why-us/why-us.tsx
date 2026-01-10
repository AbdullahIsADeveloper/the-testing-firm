import React from "react";
import { BentoGrid, BentoGridItem, BentoContent } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconBoxModel2,
  IconClipboardCopy,
  IconClockStop,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative pb-16 max-w-11/12 mx-auto">
      <BentoGrid className="lg:max-w-11/12">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            icon={item.icon}
            content={item.content}
            className={cn(item.colSpan, "dark:bg-accent/20")}
          />
        ))}
      </BentoGrid>

      <p className="w-full text-lg md:text-2xl mb-10 mt-6 lg:max-w-11/12 mx-auto">
        <span className="text-black dark:text-white">
          Shining qualities in the modern QA industry.
        </span>{" "}
        <span className="text-neutral-500 dark:text-neutral-400">
          Minimal time wastage. Maximum value delivered.
        </span>
      </p>
    </section>
  );
}


const items = [
  {
    title: "QA Focused Talent Only",
    icon: <IconClipboardCopy className="h-5 w-5 text-neutral-500" />,
    colSpan: "md:col-span-2",
    content: (
      <BentoContent description="We specialize exclusively in software testers — manual, automation, SDET, and QA leads.">
        <div className="space-y-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            No generalist recruiters. No guessing. Every profile we send lives and
            breathes software testing.
          </p>
        </div>
      </BentoContent>
    ),
  },
  {
    title: "Technically Screened Candidates",
    icon: <IconFileBroken className="h-5 w-5 text-neutral-500" />,
    colSpan: "md:col-span-1",
    content: (
      <BentoContent description="Every candidate is vetted for real-world testing skills, tools, and methodologies.">
        <div className="space-y-2">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            We test testers — tools, mindset, edge cases, communication.
          </p>
        </div>
      </BentoContent>
    ),
  },
  {
    title: "Fast, Signal-Driven Hiring",
    icon: <IconArrowWaveRightUp className="h-5 w-5 text-neutral-500" />,
    colSpan: "md:col-span-1",
    content: (
      <BentoContent description="No CV spam. Just a short, high-signal shortlist that fits your stack.">
        <div className="space-y-2">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Fewer interviews. Better outcomes.
          </p>
        </div>
      </BentoContent>
    ),
  },
  {
    title: "Automation & Modern QA",
    icon: <IconTableColumn className="h-5 w-5 text-neutral-500" />,
    colSpan: "md:col-span-1",
    content: (
      <BentoContent description="Playwright, Cypress, Selenium, CI pipelines, and modern QA practices.">
        <div className="space-y-2">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            We don’t send legacy-only testers into modern teams.
          </p>
        </div>
      </BentoContent>
    ),
  },
  {
    title: "Clear Communication",
    icon: <IconSignature className="h-5 w-5 text-neutral-500" />,
    colSpan: "md:col-span-1",
    content: (
      <BentoContent description="Honest feedback and updates for both clients and candidates.">
        <div className="space-y-2">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            No ghosting. Ever.
          </p>
        </div>
      </BentoContent>
    ),
  },
  {
    title: "Reduced Time-to-Hire",
    icon: <IconClockStop className="h-5 w-5 text-neutral-500" />,
    colSpan: "md:col-span-1",
    content: (
      <BentoContent description="Interview qualified testers within 48 hours.">
        <div className="space-y-2">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Speed without sacrificing quality.
          </p>
        </div>
      </BentoContent>
    ),
  },
  {
    title: "Domain-Aware Testing",
    icon: <IconBoxModel2 className="h-5 w-5 text-neutral-500" />,
    colSpan: "md:col-span-1",
    content: (
      <BentoContent description="Experts who understand industry-specific logic and compliance.">
        <div className="space-y-2">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Fintech, health, SaaS — context matters.
          </p>
        </div>
      </BentoContent>
    ),
  },
];
