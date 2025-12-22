import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-5xl px-6 py-6 flex justify-between">
      <Link href="/" className="font-medium">
        Leonardo Siu
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
