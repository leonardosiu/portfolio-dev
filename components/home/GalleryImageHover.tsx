"use client";

import Image from "next/image";
import Link from "next/link";
import { ImageHoverCursor } from "@/components/ui/image-hover-cursor";

interface GalleryImageHoverProps {
  src: string;
  alt: string;
  href: string;
  label?: string;
}

export default function GalleryImageHover({ src, alt, href, label = "VIEW" }: GalleryImageHoverProps) {
  return (
    <Link href={href} className="block relative z-0 hover:z-[9998]">
      <ImageHoverCursor label={label}>
        <div className="bg-surface-light rounded-lg p-3 transition-transform duration-500 ease-out group">
          <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-[4px] bg-gray-200 relative">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        </div>
      </ImageHoverCursor>
    </Link>
  );
}
