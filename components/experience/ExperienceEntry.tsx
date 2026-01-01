import ExperienceTag from "./ExperienceTag";
import { ExternalLink, Code } from "lucide-react";

type ExperienceLink = {
  label: string;
  href: string;
  icon?: "arrow_outward" | "code";
};

type ExperienceEntryProps = {
  title: string;
  company: string;
  period: string;
  location?: string;
  category?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links?: ExperienceLink[];
  isLast?: boolean;
};

export default function ExperienceEntry({
  title,
  company,
  period,
  location,
  category,
  description,
  highlights,
  technologies,
  links,
  isLast = false,
}: ExperienceEntryProps) {
  return (
    <div className="group relative grid grid-cols-1 md:grid-cols-[160px_48px_1fr] gap-0">
      {/* Left side - Category and period (desktop only) */}
      <div className="hidden md:flex flex-col items-end pt-10 pr-6 text-right">
        {category && (
          <span className="font-bold text-sm text-text-light group-hover:text-indigo-500 transition-colors">
            {category}
          </span>
        )}
        <span className="font-mono text-xs text-muted-light/80 mt-1">
          {period}
        </span>
      </div>

      {/* Timeline line and dot */}
      <div className="hidden md:flex flex-col items-center relative">
        {isLast ? (
          <div className="absolute top-0 h-12 w-px bg-gradient-to-b from-gray-200/80 to-transparent"></div>
        ) : (
          <div className="absolute top-0 bottom-0 w-px bg-gray-200"></div>
        )}
        <div className="w-4 h-4 rounded-full bg-gray-300 border-4 border-background-light z-10 mt-[2.75rem] box-content group-hover:bg-indigo-500 group-hover:scale-110 transition-all duration-300"></div>
      </div>

      {/* Content card */}
      <div className="pb-12 md:pl-2">
        <div className="relative bg-white rounded-lg p-8 border border-gray-200 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-indigo-500/30">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-text-light group-hover:text-indigo-500 transition-colors">
                {title}
              </h3>
              <div className="text-lg font-medium text-muted-light mt-1">
                {company}
              </div>
            </div>
            <div className="md:hidden text-left text-sm font-mono text-muted-light flex flex-row gap-3">
              <span className="text-text-light font-medium">
                {period}
              </span>
              {location && <span>{location}</span>}
            </div>
          </div>

          <div className="mb-6 pl-3 border-l-2 border-indigo-500/40">
            <p className="text-[15px] font-medium text-text-light/80 italic leading-relaxed">
              {description}
            </p>
          </div>

          <ul className="space-y-3 mb-8 text-muted-light leading-relaxed custom-list text-sm md:text-base">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <ExperienceTag key={index}>{tech}</ExperienceTag>
            ))}
          </div>

          {links && links.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  className="inline-flex items-center text-xs font-mono font-bold text-muted-light hover:text-indigo-500 transition-colors uppercase tracking-wider"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  {link.icon === "arrow_outward" ? (
                    <ExternalLink className="w-3 h-3 ml-1" />
                  ) : link.icon === "code" ? (
                    <Code className="w-3 h-3 ml-1" />
                  ) : null}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

