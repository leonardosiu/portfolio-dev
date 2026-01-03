import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function LeoTwinSection() {
  const prompts = [
    {
      text: "How do you approach backend system design?",
      href: "https://twin.leo.dev?q=How%20do%20you%20approach%20backend%20system%20design?",
    },
    {
      text: "Explain engineering tradeoffs in Vortex",
      href: "https://twin.leo.dev?q=Explain%20engineering%20tradeoffs%20in%20Vortex",
    },
    {
      text: "What is your philosophy on distributed systems?",
      href: "https://twin.leo.dev?q=What%20is%20your%20philosophy%20on%20distributed%20systems?",
    },
  ];

  return (
    <section
      className="px-6 md:px-12 py-24 max-w-5xl mx-auto border-t border-gray-100 relative overflow-hidden"
      id="leotwin"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[160px] pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start md:items-center relative z-10">
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-widest text-muted-light uppercase">
              LEOTWIN • in active development
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight leading-tight text-text-light">
            A conversational interface <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 opacity-90">
              to who I am.
            </span>
          </h2>
          
          <p className="text-lg text-muted-light leading-relaxed font-light max-w-xl">
            LeoTwin is a digital twin trained on my projects and writing.
            Ask about systems, products, and engineering tradeoffs—answers
            reflect how I reason, not just model output.
          </p>
          
          <div className="pt-4">
            <Link
              href="https://twin.leo.dev"
              className="inline-flex items-center px-6 py-3 rounded-full bg-surface-light border border-gray-200 text-sm font-medium text-text-light hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        <div className="md:col-span-5 w-full">
          <div className="flex flex-col gap-3">
            {prompts.map((prompt, index) => (
              <Link
                key={index}
                href={prompt.href}
                className="group w-full text-left p-4 rounded-lg border border-gray-200 bg-surface-light/60 hover:bg-white hover:border-indigo-500/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs md:text-sm text-muted-light group-hover:text-indigo-600 transition-colors">
                    "{prompt.text}"
                  </span>
                  <MessageSquare className="w-4 h-4 text-gray-300 group-hover:text-indigo-500 transition-colors opacity-50 group-hover:opacity-100 shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

