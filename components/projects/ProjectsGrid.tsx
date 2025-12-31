import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsGrid() {
  return (
    <div className="mt-16">
      {/* TODO: add filter and sort by date buttons */}
      {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-100 pb-6">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-1.5 rounded-full bg-text-light text-background-light text-xs font-mono font-medium transition-all">
            All
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-light hover:bg-gray-200 text-muted-light hover:text-text-light border border-transparent hover:border-gray-300 text-xs font-mono transition-all">
            AI/ML
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-light hover:bg-gray-200 text-muted-lig hover:text-text-light border border-transparent hover:border-gray-300 text-xs font-mono transition-all">
            Backend
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-light hover:bg-gray-200 text-muted-light hover:text-text-light border border-transparent hover:border-gray-300 text-xs font-mono transition-all">
            Frontend
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-light hover:bg-gray-200 text-muted-light hover:text-text-light border border-transparent hover:border-gray-300 text-xs font-mono transition-all">
            Full-Stack
          </button>
        </div>

        <div className="relative group">
          <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-light hover:text-text-light transition-colors">
            Sort by: Date
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            category={project.category}
            tech={project.tech}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            href={`/projects/${project.id}`}
          />
        ))}
      </div>

      {/* TODO: add load archived projects button */}
      {/* <div className="mt-16 flex justify-center">
        <button className="px-6 py-3 rounded border border-gray-200 text-sm font-mono text-muted-light hover:text-primary hover:border-primary transition-colors">
        LOAD ARCHIVED PROJECTS
        </button>
    </div> */}
    </div>
  );
}
