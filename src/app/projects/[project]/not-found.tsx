import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 w-full min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6 text-text-light">
          Project Not Found
        </h1>
        <p className="text-lg md:text-xl text-muted-light font-light mb-8 leading-relaxed">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-light hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          BACK TO PROJECTS
        </Link>
      </div>
    </main>
  );
}

