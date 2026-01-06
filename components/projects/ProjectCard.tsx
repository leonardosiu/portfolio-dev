"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImageHoverCursor } from "@/components/ui/image-hover-cursor";

type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
  tech: string[];
  imageSrc: string; // Mobile image (16:9)
  desktopImageSrc?: string; // Desktop image (21:9)
  imageAlt: string;
  href?: string;
};

export function ProjectCard({
  title,
  description,
  category,
  tech,
  imageSrc,
  desktopImageSrc,
  imageAlt,
  href = "#",
}: ProjectCardProps) {
  const desktopSrc = desktopImageSrc || imageSrc;
  
  const content = (
    <div className="group block bg-surface-light rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300">
      <ImageHoverCursor label="View Project">
        <div className="h-80 overflow-hidden relative bg-gray-100 md:cursor-none">
        {/* Desktop image */}
        <Image
          src={desktopSrc}
          alt={imageAlt}
          fill
          className="hidden md:block object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale-30 group-hover:grayscale-0"
        />
        {/* Mobile image */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="block md:hidden object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale-30 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-light to-transparent opacity-20" />
      </div>
      </ImageHoverCursor>

      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-medium text-text-light group-hover:text-primary transition-colors decoration-primary underline-offset-4 group-hover:underline">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-light opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" />
        </div>

        <p className="text-muted-light text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-muted-light">
          <span className="text-primary">{category}</span>
          {/** @TODO: replace w component library for tags */}
          {/* {tech.map((item, index) => (
            <span key={item}>
              {index === 0 && "• "}
              {index > 0 && " • "}
              {item}
            </span>
          ))} */}
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
