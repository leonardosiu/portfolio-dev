import { Settings, Network, Brain } from "lucide-react";

export default function CorePhilosophies() {
  const philosophies = [
    {
      icon: Settings,
      title: "Craftsmanship & Clarity",
      description: "Building systems that are robust, maintainable, and remarkably clear in their intent, favoring long-term stability over quick fixes.",
    },
    {
      icon: Network,
      title: "Scalable Systems",
      description: "Designing infrastructure that grows gracefully with demand, ensuring resilience and performance at every order of magnitude.",
    },
    {
      icon: Brain,
      title: "Ethical AI",
      description: "Developing intelligent tools that empower human creativity and decision-making, ensuring technology serves people, not just algorithms.",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-12 md:py-20 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-text-light">
          Core Philosophies
        </h2>
        <span className="text-lg md:text-xl text-muted-light font-light font-serif italic border-l-2 border-indigo-200 pl-4">
          Problems I care deeply about
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {philosophies.map((philosophy, index) => {
          const IconComponent = philosophy.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-indigo-100 transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-full bg-surface-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <IconComponent className="w-8 h-8 text-muted-dark group-hover:text-indigo-500 transition-colors duration-300" />
              </div>
              <h3 className="font-sans font-semibold text-lg text-text-light mb-3">
                {philosophy.title}
              </h3>
              <p className="text-sm text-muted-light leading-relaxed">
                {philosophy.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

