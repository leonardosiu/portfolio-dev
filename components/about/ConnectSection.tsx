import Link from "next/link";
import { Code, Briefcase, Mail, Handshake } from "lucide-react";

export default function ConnectSection() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-3xl mx-auto text-center border-t border-gray-100">
      <div className="inline-flex items-center justify-center p-4 bg-indigo-50 rounded-full mb-6">
        <Handshake className="w-8 h-8 text-indigo-500" />
      </div>
      
      <h2 className="font-serif text-3xl md:text-5xl text-text-light mb-6">
        Let's Connect
      </h2>
      
      <p className="text-lg text-muted-light font-light mb-10 max-w-xl mx-auto leading-relaxed">
        I'm always open to discussing artifical intelligence, photography, basketball, or
        swapping Mahjong strategies. Drop me a line.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="mailto:@leonardo.siu.dev@gmail.com"
          className="px-8 py-3 rounded-full bg-text-light text-background-light font-semibold hover:bg-indigo-500 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
        >
          Email Me
        </Link>
        <Link
          href="https://github.com/baller7215"
          className="px-8 py-3 rounded-full bg-surface-light border border-gray-200 text-text-light font-medium hover:border-indigo-500 hover:text-indigo-500 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
        >
          <Code className="w-5 h-5" />
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/leonardo-siu"
          className="px-8 py-3 rounded-full bg-surface-light border border-gray-200 text-text-light font-medium hover:border-indigo-500 hover:text-indigo-500 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
        >
          <Briefcase className="w-5 h-5" />
          LinkedIn
        </Link>
      </div>
    </section>
  );
}

