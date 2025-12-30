import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "RetiNova",
    description:
      "A neural retrieval engine designed to parse unstructured legal documents. Leverages semantic search to reduce discovery time by 60%.",
    category: "Applied AI",
    tech: ["Python", "Vector DB"],
    imageSrc: "/images/projects/retinova-[16-9].png",
    imageAlt: "RetiNova Dashboard",
  },
  {
    title: "Vortex Engine",
    description:
      "High-throughput event processing system handling 1M+ events/sec. Built with Rust for zero-cost abstractions and memory safety.",
    category: "Backend",
    tech: ["Rust", "Distributed Systems"],
    imageSrc: "/images/projects/vortex-[16-9].png",
    imageAlt: "Vortex Interface",
  },
  {
    title: "EchoLayer",
    description:
      "A custom networking protocol over UDP ensuring reliable delivery for real-time multiplayer gaming states.",
    category: "Systems",
    tech: ["C++", "Networking"],
    imageSrc: "/images/projects/echolayer-[16-9].png",
    imageAlt: "System Architecture Diagram",
  },
  {
    title: "Triage Protocol",
    description:
      "Automated incident response platform for DevOps teams. Reduces MTTR by 40% through intelligent alerting and playbook automation.",
    category: "Full-Stack",
    tech: ["Go", "Terraform"],
    imageSrc: "/images/projects/triage-[16-9].png",
    imageAlt: "Incident dashboard UI",
  },
  {
    title: "Flux UI",
    description:
      "A component library focusing on accessibility and framework-agnostic composition.",
    category: "Frontend",
    tech: ["TypeScript", "Design Systems"],
    imageSrc: "/images/projects/flux-[16-9].png",
    imageAlt: "Abstract steel structure",
  },
  {
    title: "DistroLog",
    description:
      "Experimental distributed ledger for immutable audit logs in regulated environments.",
    category: "Backend",
    tech: ["Go", "Cryptography"],
    imageSrc: "/images/projects/distrolog-[16-9].png",
    imageAlt: "Stylized Go code snippet",
  },
];

export function ProjectsGrid() {
  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-100 pb-6">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="px-6 py-3 rounded border border-gray-200 text-sm font-mono text-muted-light hover:text-primary hover:border-primary transition-colors">
          LOAD ARCHIVED PROJECTS
        </button>
      </div>
    </div>
  );
}


