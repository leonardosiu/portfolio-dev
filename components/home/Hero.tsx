export default function Hero() {
    return (
      <section className="space-y-8 px-12 py-8 max-w-7xl w-full mx-auto">
        {/* tagline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
          I build systems behind <br /> real products
          <br />
          <span className="font-primary font-light italic text-muted-light block mt-2">
            from backend to interfaces.
          </span>
        </h1>

        {/* description / metadata */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 md:mt-24">
          {/* description */}
          <div className="md:col-span-8">
            {/** @TODO: add hover effects to bolded words where an icon representing the concept is shown */}
            <p className="text-lg md:text-xl text-muted-light leading-relaxed font-light">
              Currently building <strong className="text-text-light font-medium">backend</strong>, <strong className="text-text-light font-medium">full-stack</strong>, and <strong className="text-text-light font-medium">applied AI/ML</strong> systems as a Computer Science student at UC Irvine.

              Previously shipped production features and end-to-end products accross <strong className="text-text-light font-medium">APIs</strong>, <strong className="text-text-light font-medium">data pipelines</strong>, and <strong className="text-text-light font-medium">full-stack apps</strong>.

              Interested in <strong className="text-text-light font-medium">infrastructure</strong>, <strong className="text-text-light font-medium">distributed systems</strong>, and <strong className="text-text-light font-medium">computer vision</strong>.
            </p>
            {/* open to new roles and location badge */}
            <div className="mt-8 flex gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 tex-xs font-mono border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                OPEN TO NEW ROLES
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 text-gray-600 tex-xs font-mono border border-gray-300">
                📍
                OPEN TO NEW LOCATIONS
              </span>
            </div>
          </div>

          {/* metadata */}
          <div className="md:col-span-4 flex flex-col justify-end space-y-4 font-mono text-sm">
            <div className="flex justify-between items-center group md:cursor-none">
              <span className="text-muted-light group-hover:text-text-light transition-colors">Incoming Summer 2026</span>
              <span className="font-medium">???</span>
            </div>
            <div className="flex justify-between items-center group md:cursor-none">
              <span className="text-muted-light group-hover:text-text-light transition-colors">2023 - Present</span>
              <span className="font-medium">Computer Science @ UCI</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  