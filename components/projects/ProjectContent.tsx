import { Check } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectContentProps = {
  project: Project;
};

export default function ProjectContent({ project }: ProjectContentProps) {
  const sections = project.sections;

  if (!sections) return null;

  return (
    <div className="lg:col-span-8 flex flex-col gap-16">
      {sections.whatItIs && (
        <div id="overview">
          <h3 className="font-mono text-sm font-bold tracking-widest text-muted-light uppercase mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-300" />
            What it is
          </h3>
          <p className="text-text-light leading-relaxed text-lg font-light">
            {sections.whatItIs}
          </p>
        </div>
      )}

      {sections.myRole && (
        <div id="my-role">
          <h3 className="font-mono text-sm font-bold tracking-widest text-muted-light uppercase mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-300" />
            My Role
          </h3>
          <p className="text-text-light leading-relaxed text-lg font-light">
            {sections.myRole}
          </p>
        </div>
      )}

      {sections.constraints && sections.constraints.length > 0 && (
        <div id="constraints">
          <h3 className="font-mono text-sm font-bold tracking-widest text-muted-light uppercase mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-300" />
            Interesting Constraints
          </h3>
          <div className="bg-surface-light p-6 md:p-8 rounded-lg border border-gray-100">
            <ul className="space-y-6">
              {sections.constraints.map((constraint, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="font-mono text-primary font-bold pt-1">
                    {constraint.number}
                  </span>
                  <span className="text-muted-light leading-relaxed">
                    {constraint.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {sections.learnings && sections.learnings.length > 0 && (
        <div id="learnings">
          <h3 className="font-mono text-sm font-bold tracking-widest text-muted-light uppercase mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-300" />
            What I Learned
          </h3>
          <ul className="space-y-3 text-text-light font-light text-lg">
            {sections.learnings.map((learning, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

