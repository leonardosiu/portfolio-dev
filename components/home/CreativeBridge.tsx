import Link from "next/link";
import GalleryImageHover from "@/components/home/GalleryImageHover";

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
          {/** @TODO: add link to art site */}
          {/* golden gate bridge */}
          <GalleryImageHover
            src="/images/creative-bridge/golden-gate.png"
            alt="Golden Gate Bridge"
            href="#"
            label="VIEW"
          />
          {/* creation of technology */}
          <GalleryImageHover
            src="/images/creative-bridge/creation-of-technology.png"
            alt="Creation of Technology"
            href="#"
            label="VIEW"
          />
          {/* self portrait */}
          <GalleryImageHover
            src="/images/creative-bridge/image.png"
            alt="Self Portrait"
            href="#"
            label="VIEW"
          />
        </div>
      </section>
    );
  }
  