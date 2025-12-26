"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectImageProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  href: string;
}

function ProjectImage({ desktopSrc, mobileSrc, alt, href }: ProjectImageProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    document.body.classList.add('hide-global-cursor');
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    document.body.classList.remove('hide-global-cursor');
  };

  return (
    <Link href={href} className="block">
      <div
        className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-surface-light relative mb-6 group md:cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image 
          src={desktopSrc} 
          alt={alt} 
          fill 
          className="hidden md:block object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        <Image 
          src={mobileSrc} 
          alt={alt} 
          fill 
          className="block md:hidden object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        
        {/* Custom cursor overlay */}
        <div
          className="absolute pointer-events-none z-10 transition-opacity duration-300 hidden md:block"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translateY(-50%)",
            opacity: isHovering ? 1 : 0,
          }}
        >
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg whitespace-nowrap ml-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground"
            >
              <path d="M1 12s4-4 11-4 11 4 11 4-4 4-11 4-11-4-11-4z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="text-sm font-medium text-foreground">VIEW CASE STUDY</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

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
          {/* human proximity */}
          <div className="group">
            {/* image */}
            <ProjectImage
              desktopSrc="/images/selected-work/human-proximity-[21-9].png"
              mobileSrc="/images/selected-work/human-proximity-[16-9].png"
              alt="Human Proximity"
              href="/projects#human-proximity"
            />
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

          {/* retinova */}
          <div className="group">
            {/* image */}
            <ProjectImage
              desktopSrc="/images/selected-work/retinova-[21-9].png"
              mobileSrc="/images/selected-work/retinova-[16-9].png"
              alt="RetiNova"
              href="/projects#retinova"
            />
            {/* content */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
              <div className="flex-1">
                <h3 className="text-2xl font-medium group-hover:text-primary transition-colors">
                  RetiNova
                </h3>
                <p className="text-muted-light dark:text-muted-dark mt-1 max-w-xl">
                  won best-overall @ IrvineHacks 2025, a 36-hour hackathon.
                  co-built a healthcare-focused AI application for detecting eye conditions, owning core system integration from model inference to a user-facing product.
                </p>
              </div>
              <div className="font-mono text-xs text-muted-light dark:text-muted-dark uppercase tracking-wide mt-2 md:mt-1">
                Applied ML • Computer Vision • Healthcare • Full-Stack • Hackathon
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  