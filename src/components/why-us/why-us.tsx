import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative px-6 pt-10 xl:pt-16 pb-16 max-w-4xl mx-auto"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
        Why Us?
      </h1>

      <p className="max-w-4xl mx-auto text-muted-foreground text-base sm:text-lg mb-10">
        Many recruitment agencies waste too much of your time, and we are
        centered around building an ideal experience for you.
      </p>

      <BentoGrid className="max-w-4xl mx-auto px-2 sm:px-0">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800" />
);

const items = [
  {
    title: "QA‑Focused Talent Only",
    description:
      "We specialize exclusively in software testers — manual, automation, SDET, and QA leads.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Technically Screened Candidates",
    description:
      "Every candidate is vetted for real-world testing skills, tools, and methodologies.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Fast, Signal‑Driven Hiring",
    description:
      "No CV spam. We send a short, high-quality shortlist that actually fits your stack.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automation & Modern QA Expertise",
    description:
      "Playwright, Cypress, Selenium, CI pipelines, and modern QA practices — covered.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Clear Communication, No Ghosting",
    description:
      "Candidates and clients get honest feedback and updates at every stage.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
