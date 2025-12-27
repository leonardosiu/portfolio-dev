import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mx-auto px-12 py-8 max-w-7xl w-full text-sm text-muted">
        {/* built with magic and love */}
        <p>
          © {new Date().getFullYear()} Leonardo Siu. Built with .✦ ݁˖ &amp; ᢉ𐭩.
        </p>
        <div className="flex gap-6">
          <Link href="https://github.com/baller7215" className="flex items-center gap-2 text-muted-light hover:text-foreground transition-colors">
            <Github className="w-4 h-4" />
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/leonardo-siu" className="flex items-center gap-2 text-muted-light hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Link>
          <Link href="mailto:leonardo.siu.dev@gmail.com" className="flex items-center gap-2 text-muted-light hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            Email
          </Link>
        </div>
      </footer>
    );
  }
  