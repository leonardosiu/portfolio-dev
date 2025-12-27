"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface GalleryImageHoverProps {
  src: string;
  alt: string;
  href: string;
  label?: string;
}

export default function GalleryImageHover({ src, alt, href, label = "VIEW" }: GalleryImageHoverProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left - 24,
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
    <Link href={href} className="block md:cursor-none relative z-0 hover:z-[9998]">
      <div
        className="bg-surface-light rounded-lg p-3 hover:-translate-y-2 transition-transform duration-500 ease-out group relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-[4px] bg-gray-200 relative">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
        
        {/* Custom cursor overlay */}
        <div
          className="absolute pointer-events-none z-[9999] transition-opacity duration-300 hidden md:block"
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
            <span className="text-sm font-medium text-foreground uppercase">{label}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

