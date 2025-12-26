import Image from "next/image";

export default function SelectedWork() {
    return (
      <section className="space-y-8 px-12 py-8 max-w-7xl w-full mx-auto" id="selected-work">
        {/* header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-base font-mono font-bold tracking-widest text-muted-light uppercase">Selected Work</h2>
          <span className="text-sm font-mono text-muted-light">01 — 03</span>
        </div>
        {/* selected work items */}
        <div className="grid grid-cols-1 gap-16 md:gap-24">
          <div className="group cursor-pointer">
            {/* image */}
            <div className="w-full aspect-[16/9] md:aspect-[21/9] hover:opacity-90 transition-transform duration-700 ease-in-out rounded-xl overflow-hidden bg-surface-light relative mb-6">
              <Image src="/images/selected-work/human-proximity-[21-9].png" alt="Human Proximity" fill className="hidden md:block object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <Image src="/images/selected-work/human-proximity-[16-9].png" alt="Human Proximity" fill className="block md:hidden object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            {/* content */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
              <div className="flex-1">
                <h3 className="text-2xl font-medium group-hover:text-primary transition-colors">
                  Human Proximity
                </h3>
                <p className="text-muted-light dark:text-muted-dark mt-1 max-w-xl">
                  building beeseye, a mobile app for real-time networking in events.
                  designed and implemented the backend and AI service architecture, from the API layer and AI microservices to the core product functionality.
                </p>
              </div>
              <div className="font-mono text-xs text-muted-light dark:text-muted-dark uppercase tracking-wide mt-2 md:mt-1">
                Backend • APIs • AI Systems • Microservices • Mobile App
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  