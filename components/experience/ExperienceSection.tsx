type ExperienceSectionProps = {
  id: string;
  title: string;
  description: string;
};

export default function ExperienceSection({
  id,
  title,
  description,
}: ExperienceSectionProps) {
  return (
    <div className="sticky top-0 z-30 bg-background-light/85 backdrop-blur-md py-6 mb-8 border-b border-gray-100 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
          <h2
            className="text-sm font-mono font-bold uppercase tracking-widest text-text-light"
            id={id}
          >
            {title}
          </h2>
        </div>
        <p className="text-xs md:text-sm font-light text-muted-light opacity-80 max-w-xl hidden md:block">
          {description}
        </p>
      </div>
    </div>
  );
}

