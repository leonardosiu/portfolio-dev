import Link from "next/link";
import Image from "next/image";

export default function CreativeBridge() {
    return (
      <section className="space-y-8 px-12 py-8 max-w-7xl w-full mx-auto" id="creative-bridge">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-lg">
            <h2 className="text-sm font-mono font-bold tracking-widest text-muted-light uppercase mb-6">
              Creative Bridge
            </h2>
            <p className="text-2xl md:text-3xl font-serif leading-tight text-text-light">
              Balancing system architecture with
              <span className="italic text-muted-light font-light">
                visual expression
              </span>
            </p>
          </div>
          <Link href="/projects#creative-bridge" className="inline-flex items-center text-sm font-mono text-muted-light hover:text-primary transition-colors pb-1 mb-1 md:cursor-none">
            VIEW GALLERY
          </Link>
        </div>

        {/* gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* golden gate bridge */}
          <div className="bg-surface-light rounded-lg p-3 hover:-translate-y-2 transition-transform duration-500 ease-out group md:cursor-none">
            <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-[4px] bg-gray-200 relative">
              <Image src="/images/creative-bridge/golden-gate.png" alt="Golden Gate Bridge" fill className="object-cover" />
            </div>
          </div>
          {/* creation of technology */}
          <div className="bg-surface-light rounded-lg p-3 hover:-translate-y-2 transition-transform duration-500 ease-out group md:cursor-none">
            <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-[4px] bg-gray-200 relative">
              <Image src="/images/creative-bridge/creation-of-technology.png" alt="Creation of Technology" fill className="object-cover" />
            </div>
          </div>
          {/* self portrait */}
          {/* creation of technology */}
          <div className="bg-surface-light rounded-lg p-3 hover:-translate-y-2 transition-transform duration-500 ease-out group md:cursor-none">
            <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-[4px] bg-gray-200 relative">
              <Image src="/images/creative-bridge/image.png" alt="Self Portrait" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  