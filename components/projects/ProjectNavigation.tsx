import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectById } from "@/lib/projects";
import type { Project } from "@/lib/projects";

type ProjectNavigationProps = {
  project: Project;
};

export default function ProjectNavigation({ project }: ProjectNavigationProps) {
  const previousProject = project.previousProject
    ? getProjectById(project.previousProject)
    : null;
  const nextProject = project.nextProject
    ? getProjectById(project.nextProject)
    : null;

  return (
    <footer className="border-t border-gray-200 bg-surface-light mt-auto">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {previousProject ? (
          <Link
            href={`/projects/${previousProject.id}`}
            className="group flex flex-col items-center md:items-start gap-2 w-full md:w-auto hover:bg-gray-100 p-4 rounded-lg transition-colors"
          >
            <span className="text-xs font-mono text-muted-light uppercase tracking-wider flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" />
              Previous Project
            </span>
            <span className="text-lg md:text-xl font-serif italic text-text-light group-hover:text-primary transition-colors">
              {previousProject.title}
            </span>
          </Link>
        ) : (
          <div className="w-full md:w-auto" />
        )}

        <div className="h-px w-full md:w-px md:h-12 bg-gray-200" />

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex flex-col items-center md:items-end gap-2 w-full md:w-auto hover:bg-gray-100 p-4 rounded-lg transition-colors"
          >
            <span className="text-xs font-mono text-muted-light uppercase tracking-wider flex items-center gap-2">
              Next Project
              <ArrowRight className="w-3 h-3" />
            </span>
            <span className="text-lg md:text-xl font-serif italic text-text-light group-hover:text-primary transition-colors">
              {nextProject.title}
            </span>
          </Link>
        ) : (
          <div className="w-full md:w-auto" />
        )}
      </div>
    </footer>
  );
}

