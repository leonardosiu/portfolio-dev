"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/projects";

type ProjectSidebarProps = {
  project: Project;
};

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
  const [activeSection, setActiveSection] = useState<string>("overview");

  useEffect(() => {
    const sections = [
      { id: "overview", condition: project.sections?.whatItIs },
      { id: "my-role", condition: project.sections?.myRole },
      { id: "constraints", condition: project.sections?.constraints },
      { id: "learnings", condition: project.sections?.learnings },
    ].filter((s) => s.condition);

    const handleScroll = () => {
      // gets current scroll position + offset for sticky header
      const scrollPosition = window.scrollY + 200;

      // iterate through sections in reverse order to find the active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          // if scroll position is greater than section top, set active section
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    // set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [project.sections]);

  const handleNavClick = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; // offset for sticky header
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="lg:col-span-4 flex flex-col gap-8">
      <div className="sticky top-24">
        <div className="bg-surface-light p-6 rounded-lg border border-gray-100 backdrop-blur-sm mb-8">
          <h3 className="font-mono text-xs font-bold tracking-widest text-muted-light uppercase mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-mono text-muted-light hover:text-primary hover:border-primary/30 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <h3 className="font-mono text-xs font-bold tracking-widest text-muted-light uppercase mb-4 opacity-50">
            On This Page
          </h3>
          <ul className="space-y-2 text-sm text-muted-light border-l border-gray-200 ml-1">
            {project.sections?.whatItIs && (
              <li>
                <a
                  href="#overview"
                  onClick={(e) => handleNavClick("overview", e)}
                  className={`pl-4 block transition-colors ${
                    activeSection === "overview"
                      ? "border-l-2 border-primary -ml-[2px] text-text-light font-medium"
                      : "hover:text-primary cursor-pointer"
                  }`}
                >
                  Overview
                </a>
              </li>
            )}
            {project.sections?.myRole && (
              <li>
                <a
                  href="#my-role"
                  onClick={(e) => handleNavClick("my-role", e)}
                  className={`pl-4 block transition-colors ${
                    activeSection === "my-role"
                      ? "border-l-2 border-primary -ml-[2px] text-text-light font-medium"
                      : "hover:text-primary cursor-pointer"
                  }`}
                >
                  My Role
                </a>
              </li>
            )}
            {project.sections?.constraints && (
              <li>
                <a
                  href="#constraints"
                  onClick={(e) => handleNavClick("constraints", e)}
                  className={`pl-4 block transition-colors ${
                    activeSection === "constraints"
                      ? "border-l-2 border-primary -ml-[2px] text-text-light font-medium"
                      : "hover:text-primary cursor-pointer"
                  }`}
                >
                  Constraints
                </a>
              </li>
            )}
            {project.sections?.learnings && (
              <li>
                <a
                  href="#learnings"
                  onClick={(e) => handleNavClick("learnings", e)}
                  className={`pl-4 block transition-colors ${
                    activeSection === "learnings"
                      ? "border-l-2 border-primary -ml-[2px] text-text-light font-medium"
                      : "hover:text-primary cursor-pointer"
                  }`}
                >
                  Learnings
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
