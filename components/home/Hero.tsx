import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
      <section className="space-y-8 px-6 md:px-12 py-8 max-w-7xl w-full mx-auto">
        {/* tagline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
          I build systems behind <br /> real products
          <br />
          <span className="font-primary font-light italic text-muted-light block mt-2">
            from backend to interfaces.
          </span>
        </h1>

        {/* description / metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 md:mt-24">
          {/* description */}
          <div className="lg:col-span-6">
            {/** @TODO: add hover effects to bolded words where an icon representing the concept is shown */}
            <p className="text-lg md:text-xl text-muted-light leading-relaxed font-light">
              Currently building <strong className="text-text-light font-medium">backend</strong>, <strong className="text-text-light font-medium">full-stack</strong>, and <strong className="text-text-light font-medium">applied AI/ML</strong> systems as a Computer Science student at UC Irvine.

              Previously shipped production features and end-to-end products accross <strong className="text-text-light font-medium">APIs</strong>, <strong className="text-text-light font-medium">data pipelines</strong>, and <strong className="text-text-light font-medium">full-stack apps</strong>.

              Interested in <strong className="text-text-light font-medium">infrastructure</strong>, <strong className="text-text-light font-medium">distributed systems</strong>, and <strong className="text-text-light font-medium">computer vision</strong>.
            </p>
            {/* open to new roles and location badge */}
            <div className="mt-8 flex gap-4">
              <div
                className={cn(
                  "group rounded-full border border-green-200 bg-green-100 text-base transition-all ease-in hover:cursor-pointer hover:bg-green-200"
                )}
              >
                <AnimatedShinyText className="font-mono text-green-700 inline-flex gap-2 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>Open to new roles</span>
                </AnimatedShinyText>
              </div>
            </div>
          </div>

          {/* metadata */}
          <div className="lg:col-span-6 flex flex-col justify-start space-y-4 font-mono text-sm">
            <div className="grid grid-cols-2 md:grid-cols-[2fr_3fr_3fr] lg:grid-cols-[minmax(90px,120px)_1fr_1fr] items-center gap-x-4">
              <span className="text-muted-light group-hover:text-text-light transition-colors">
                Summer 2026
              </span>
              <span className="text-right md:text-left font-medium">Walmart Global Tech</span>
              <span className="hidden md:block text-muted-light/90">Software Engineering Intern</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[2fr_3fr_3fr] lg:grid-cols-[minmax(90px,120px)_1fr_1fr] items-center gap-x-4">
              <span className="text-muted-light group-hover:text-text-light transition-colors">
                2025 - 2026
              </span>
              <span className="text-right md:text-left font-medium">Meta</span>
              <span className="hidden md:block text-muted-light/90">AI Studio Fellow</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[2fr_3fr_3fr] lg:grid-cols-[minmax(90px,120px)_1fr_1fr] items-center gap-x-4">
              <span className="text-muted-light group-hover:text-text-light transition-colors">
                2023 - Present
              </span>
              <span className="text-right md:text-left font-medium">UCI OIT</span>
              <span className="hidden md:block text-muted-light/90">Software Developer</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  