import type { Project } from "@/lib/projects";

type ProjectSidebarProps = {
  project: Project;
};

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
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
              <li className="pl-4 border-l-2 border-primary -ml-[2px] text-text-light font-medium">
                Overview
              </li>
            )}
            {project.sections?.myRole && (
              <li className="pl-4 hover:text-primary transition-colors cursor-pointer">
                My Role
              </li>
            )}
            {project.sections?.constraints && (
              <li className="pl-4 hover:text-primary transition-colors cursor-pointer">
                Constraints
              </li>
            )}
            {project.sections?.learnings && (
              <li className="pl-4 hover:text-primary transition-colors cursor-pointer">
                Learnings
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

