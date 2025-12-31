type ExperienceTagProps = {
  children: React.ReactNode;
};

export default function ExperienceTag({ children }: ExperienceTagProps) {
  return (
    <span className="px-3 py-1 bg-surface-light border border-gray-200 rounded-md text-xs font-mono text-muted-light group-hover:border-indigo-500/30 group-hover:text-text-light transition-colors">
      {children}
    </span>
  );
}

