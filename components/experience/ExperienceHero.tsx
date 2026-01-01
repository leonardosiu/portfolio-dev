export default function ExperienceHero() {
  return (
    <section className="px-6 md:px-12 pt-24 md:pt-32 pb-16 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-500/5rounded-full blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/3"></div>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-8 bg-indigo-500"></div>
        <span className="font-mono text-sm text-indigo-600 font-medium tracking-wide uppercase">
          2024 — Present
        </span>
      </div>
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 text-text-light">
        Experience
      </h1>
      <p className="text-xl md:text-2xl text-muted-light leading-relaxed font-light max-w-2xl">
        A timeline of technical leadership, full-stack product engineering, applied AI/ML, and student
        initiatives.
      </p>
    </section>
  );
}

