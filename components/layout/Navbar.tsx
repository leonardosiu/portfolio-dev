"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="mx-auto max-w-7xl px-12 py-8 hidden md:flex justify-between text-foreground">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-bold text-lg tracking-light uppercase">
          Leonardo Siu
        </Link>
        <span className="text-muted-light dark:text-muted-dark text-lg font-mono uppercase">// full-stack + backend</span>
      </div>
      <div className="flex items-center gap-8 text-sm font-medium uppercase">
        <Link 
          href="/about" 
          className={`transition-colors ${
            isActive("/about") 
              ? "text-foreground" 
              : "text-muted-light dark:text-muted-dark hover:text-foreground"
          }`}
        >
          About
        </Link>
        <Link 
          href="/projects" 
          className={`transition-colors ${
            isActive("/projects") 
              ? "text-foreground" 
              : "text-muted-light dark:text-muted-dark hover:text-foreground"
          }`}
        >
          Projects
        </Link>
        <Link 
          href="/experience" 
          className={`transition-colors ${
            isActive("/experience") 
              ? "text-foreground" 
              : "text-muted-light dark:text-muted-dark hover:text-foreground"
          }`}
        >
          Experience
        </Link>
      </div>
    </nav>
  );
}
