"use client";

import HoverCursor from "@/components/home/HoverCursor";

export default function SelectedWork() {
    return (
      <section className="space-y-8 px-6 md:px-12 py-8 max-w-7xl w-full mx-auto" id="selected-work">
        {/* header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-base font-mono font-bold tracking-widest text-muted-light uppercase">Selected Works</h2>
          <span className="text-sm font-mono text-muted-light">01 — 03</span>
        </div>
        {/* selected work items */}
        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {/* human proximity */}
          <div className="group">
            {/* image */}
            <HoverCursor
              desktopSrc="/images/selected-work/human-proximity-[21-9].png"
              mobileSrc="/images/selected-work/human-proximity-[16-9].png"
              alt="Human Proximity"
              href="/projects/human-proximity"
            />
            {/* content */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
              <div className="flex-1">
                <h3 className="text-2xl font-medium group-hover:text-primary transition-colors">
                  Human Proximity
                </h3>
                <p className="text-muted-light dark:text-muted-dark mt-1 max-w-xl">
                  <span className="font-medium text-text-light/70 italic">
                    building beeseye, a mobile app for real-time networking in events.
                  </span>
                  <br />
                  designed and implemented the backend and AI service architecture, from the API layer and AI microservices to the core product functionality.
                </p>
              </div>
              <div className="font-mono text-xs text-muted-light dark:text-muted-dark uppercase tracking-wide mt-2 md:mt-1">
                Backend • APIs • AI Systems • Microservices • Mobile App
              </div>
            </div>
          </div>

          {/* retinova */}
          <div className="group">
            {/* image */}
            <HoverCursor
              desktopSrc="/images/selected-work/retinova-[21-9].png"
              mobileSrc="/images/selected-work/retinova-[16-9].png"
              alt="RetiNova"
              href="/projects/retinova"
            />
            {/* content */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
              <div className="flex-1">
                <h3 className="text-2xl font-medium group-hover:text-primary transition-colors">
                  RetiNova
                </h3>
                <p className="text-muted-light dark:text-muted-dark mt-1 max-w-xl">
                  <span className="font-medium text-text-light/70 italic">
                    won best-overall @ IrvineHacks 2025, a 36-hour hackathon.
                  </span>
                  <br />
                  co-built a healthcare-focused AI application for detecting eye conditions, owning core system integration from model inference to a user-facing product.
                </p>
              </div>
              <div className="font-mono text-xs text-muted-light dark:text-muted-dark uppercase tracking-wide mt-2 md:mt-1">
                Applied ML • Computer Vision • Healthcare • Full-Stack • Hackathon
              </div>
            </div>
          </div>

          {/* meta 1b */}
          <div className="group">
            {/* image */}
            <HoverCursor
              desktopSrc="/images/selected-work/meta1b-[21-9].png"
              mobileSrc="/images/selected-work/meta1b-[16-9].png"
              alt="Meta 1B"
              href="/projects/nlp-bias-detection"
            />
            {/* content */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
              <div className="flex-1">
                <h3 className="text-2xl font-medium group-hover:text-primary transition-colors">
                  Meta AI Studio (BTT)
                </h3>
                <p className="text-muted-light dark:text-muted-dark mt-1 max-w-xl">
                  <span className="font-medium text-text-light/70 italic">
                    engineered an NLP system to detect bias in large-scale social data.
                  </span>
                  <br />
                  built and fine-tuned transformer-based models spanning large-scale data preprocessing, BERT fine-tuning, and a deployed inference pipeline.
                </p>
              </div>
              <div className="font-mono text-xs text-muted-light dark:text-muted-dark uppercase tracking-wide mt-2 md:mt-1">
                NLP • Applied AI • Data Pipelines • Model Deployment • ML Systems
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  