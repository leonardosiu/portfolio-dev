import Link from "next/link";
import { ArrowLeft, Code, Bot, Globe } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectHeaderProps = {
  project: Project;
};

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <>
      <nav className="pt-8 px-6 md:px-12 max-w-5xl mx-auto w-full mb-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-light hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          BACK TO PROJECTS
        </Link>
      </nav>
      <section className="px-6 md:px-12 max-w-5xl mx-auto w-full relative mb-16">
        <div className="absolute -top-20 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10 mix-blend-multiply opacity-70" />
        <div className="mb-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-text-light">
            {project.title}
          </h1>
          <p className="text-lg md:text-2xl text-muted-light font-light max-w-2xl leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>
        {(project.role || project.timeline || project.domain) && (
          <div className="flex flex-wrap gap-y-6 gap-x-12 border-y border-gray-100 py-6 font-mono text-sm text-muted-light mb-10">
            {project.role && (
              <div className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-wider opacity-60">
                  Role
                </span>
                <span className="text-text-light font-medium">
                  {project.role}
                </span>
              </div>
            )}
            {project.timeline && (
              <div className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-wider opacity-60">
                  Timeline
                </span>
                <span className="text-text-light font-medium">
                  {project.timeline}
                </span>
              </div>
            )}
            {project.domain && (
              <div className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-wider opacity-60">
                  Domain
                </span>
                <span className="text-text-light font-medium">
                  {project.domain}
                </span>
              </div>
            )}
          </div>
        )}
        <div className="flex flex-wrap gap-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-light border border-gray-200 text-sm font-medium hover:border-primary hover:text-primary transition-all group shadow-sm hover:shadow-md"
            >
              <Code className="w-5 h-5" />
              View Repo
            </a>
          )}
          {project.leoTwinUrl && (
            <a
              href={project.leoTwinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium hover:bg-indigo-100 hover:border-indigo-300 transition-all group shadow-sm hover:shadow-md"
            >
              <Bot className="w-5 h-5" />
              Ask LeoTwin
            </a>
          )}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-light border border-gray-200 text-sm font-medium hover:border-primary hover:text-primary transition-all group shadow-sm hover:shadow-md"
            >
              <Globe className="w-5 h-5" />
              Live Demo
            </a>
          ) : (
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-light border border-gray-200 text-sm font-medium text-muted-light opacity-60 cursor-not-allowed"
              disabled
              title="Private Deployment"
            >
              <Globe className="w-5 h-5" />
              Live Demo
            </button>
          )}
        </div>
      </section>
    </>
  );
}

