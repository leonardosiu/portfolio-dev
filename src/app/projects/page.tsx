import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function Projects() {
  return (
    <section className="px-6 md:px-12 pt-24 md:pt-20 pb-12 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
          Projects
        </h1>
        <p className="text-lg md:text-xl text-muted-light leading-relaxed font-light">
          A selection spanning applied AI, full‑stack systems, and product
          engineering. Each project displays different constraints, tradeoffs, and learning
          moments.
        </p>
      </div>
      {/* project grid */}
      <ProjectsGrid />
    </section>
  );
}
