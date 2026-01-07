"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="mx-auto max-w-7xl px-6 py-4 md:hidden text-foreground">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-0">
          <Link href="/" className="font-bold text-lg tracking-light uppercase" onClick={closeMenu}>
            Leonardo Siu
          </Link>
          <span className="text-muted-light dark:text-muted-dark text-lg font-mono uppercase">systems + backend</span>
        </div>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none z-50"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Collapsible Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6 text-sm font-medium uppercase pb-4">
          <Link
            href="/about"
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
            className={`transition-colors ${
              isActive("/experience") 
                ? "text-foreground" 
                : "text-muted-light dark:text-muted-dark hover:text-foreground"
            }`}
          >
            Experience
          </Link>
        </nav>
      </div>
    </header>
  );
}
