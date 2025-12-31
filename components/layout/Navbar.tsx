import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-7xl px-12 py-8 hidden md:flex justify-between text-foreground">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-bold text-lg tracking-light uppercase">
          Leonardo Siu
        </Link>
        <span className="text-muted-light dark:text-muted-dark text-lg font-mono uppercase">// full-stack + backend</span>
      </div>
      <div className="flex items-center gap-8 text-sm font-medium uppercase">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
