"use client";

import Image from "next/image";
import Link from "next/link";
import { ImageHoverCursor } from "@/components/ui/image-hover-cursor";

interface HoverCursorProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  href: string;
}

export default function HoverCursor({ desktopSrc, mobileSrc, alt, href }: HoverCursorProps) {
  return (
    <Link href={href} className="block">
      <ImageHoverCursor label="View Project">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-surface-light relative mb-6 group">
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
        </div>
      </ImageHoverCursor>
    </Link>
  );
}
