"use client";

import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

type ScrollToSectionProps = {
  targetId: string;
  label: string;
  direction: "up" | "down";
};

export default function ScrollToSection({
  targetId,
  label,
  direction,
}: ScrollToSectionProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // try to find the timeline container first (better scroll target)
    const timelineElement = document.getElementById(`timeline-${targetId}`);
    const element = timelineElement || document.getElementById(targetId);
    
    if (element) {
      const stickyHeaderOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - stickyHeaderOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition), // ensure we don't scroll to negative position
        behavior: "smooth",
      });
    }
  };

  const Icon = direction === "up" ? ChevronUp : ChevronDown;

  return (
    <Link
      className="inline-flex items-center gap-2 group"
      href={`#${targetId}`}
      onClick={handleClick}
      scroll={false}
    >
      <span className="text-xs font-mono text-muted-light uppercase tracking-widest group-hover:text-indigo-500 transition-colors">
        {label}
      </span>
      <Icon
        className={`w-4 h-4 text-muted-light group-hover:text-indigo-500 transition-all ${
          direction === "up"
            ? "group-hover:-translate-y-1"
            : "group-hover:translate-y-1"
        }`}
      />
    </Link>
  );
}

