import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mx-auto px-12 py-8 max-w-7xl w-full text-sm text-muted">
        {/* built with magic and love */}
        <p>
          © {new Date().getFullYear()} Leonardo Siu. Built with{" "}
          <span className="group/magic inline-flex items-baseline">
            <span className="cursor-pointer font-bold">.✦ ݁˖</span>
            <span className="ml-1 inline-block overflow-hidden max-w-0 group-hover/magic:max-w-[80px] opacity-0 group-hover/magic:opacity-100 translate-x-[-4px] group-hover/magic:translate-x-0 transition-all duration-500 ease-out whitespace-nowrap align-baseline">
              (magic)
            </span>
          </span>{" "}
          {/* &amp;{" "} */}
          and{" "}
          <span className="group/love inline-flex items-baseline">
            <span className="cursor-pointer font-bold">ᢉ𐭩</span>
            <span className="ml-1 inline-block overflow-hidden max-w-0 group-hover/love:max-w-[80px] opacity-0 group-hover/love:opacity-100 translate-x-[-4px] group-hover/love:translate-x-0 transition-all duration-500 ease-out whitespace-nowrap align-baseline">
              (love)
            </span>
          </span>
          .
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
  