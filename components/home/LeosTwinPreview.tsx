import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function LeosTwinPreview() {
    return (
      <section className="relative space-y-8 px-12 py-8 max-w-7xl w-full mx-auto overflow-hidden" id="leostwin">
        {/* gradient background */}
        <div className="absolute top-1/2 -right-52 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none z-0"></div>
        
        {/* header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start md:items-center relative z-10">
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              {/* indicator */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>

              {/* label */}
              <span className="text-xs font-mono font-medium tracking-widest text-muted-light uppercase">
                LEOSTWIN • in active development
              </span>
            </div>

            {/* title */}
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight leading-tight text-text-light">
              A conversational interface <br />
              <span className="relative inline-block px-2">
                <span className="absolute inset-0 bg-indigo-100/50 -skew-y-1 rounded-sm transform origin-bottom-left"></span>
                <span className="relative text-indigo-900">to who I am.</span>
              </span>
            </h2>

            {/* description */}
            <p className="text-lg text-muted-light leading-relaxed font-light max-w-xl">
              LeosTwin is a digital twin trained on my projects, writing, and experiences.
              Ask about my work, how I think about systems and products, or what I'm building toward.
              Responses reflect how I reason, not just what I've done.
            </p>

            {/* button */}
            <Link href="https://twin.leo.dev" className="inline-flex items-center w-fit text-sm font-mono font-bold text-text-light border-b-2 border-indigo-200 hover:border-indigo-500 transition-all duration-300 group pb-0.5">
              Ask LeosTwin
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* sample prompts */}
          <div className="md:col-span-5 w-full">
            <div className="flex flex-col gap-3">
              <Link href="#" className="group w-full text-left p-4 rounded-lg border border-muted-light/70 hover:border-border-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs md:text-sm text-muted-light group-hover:text-indigo-600 transition-colors group-hover:underline decoration-indigo-200 underline-offset-4 flex-1 min-w-0">
                    "Tell me about some of your projects."
                  </span>
                  <MessageSquare className="w-5 h-5 text-muted-light group-hover:text-indigo-500 opacity-70 group-hover:opacity-100 transition-all duration-300 ease-out shrink-0" />
                </div>
              </Link>
              <Link href="#" className="group w-full text-left p-4 rounded-lg border border-muted-light/70 hover:border-border-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs md:text-sm text-muted-light group-hover:text-indigo-600 transition-colors group-hover:underline decoration-indigo-200 underline-offset-4 flex-1 min-w-0">
                    "What kind of engineer are you trying to become?"
                  </span>
                  <MessageSquare className="w-5 h-5 text-muted-light group-hover:text-indigo-500 opacity-70 group-hover:opacity-100 transition-all duration-300 ease-out shrink-0" />
                </div>
              </Link>
              <Link href="#" className="group w-full text-left p-4 rounded-lg border border-muted-light/70 hover:border-border-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs md:text-sm text-muted-light group-hover:text-indigo-600 transition-colors group-hover:underline decoration-indigo-200 underline-offset-4 flex-1 min-w-0">
                    "What are you learning right now?"
                  </span>
                  <MessageSquare className="w-5 h-5 text-muted-light group-hover:text-indigo-500 opacity-70 group-hover:opacity-100 transition-all duration-300 ease-out shrink-0" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  