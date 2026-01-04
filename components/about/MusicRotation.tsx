"use client";

import { Headphones } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

export default function MusicRotation() {
  const albums = [
    {
      title: "Get Up",
      artist: "NewJeans",
      cover: "/images/about/get-up-cover.png",
      image: "/images/about/get-up.png",
    },
    {
      title: "Whiplash",
      artist: "Aespa",
      cover: "/images/about/whiplash-cover.png",
      image: "/images/about/whiplash.png",
    },
    {
      title: "Buzz",
      artist: "Niki",
      cover: "/images/about/cd-cover.png",
      image: "/images/about/buzz.png",
    },
    {
      title: "Across the Spider-Verse",
      artist: "Metro Boomin",
      cover: "/images/about/across-the-spiderverse-cover.png",
      image: "/images/about/across-the-spiderverse.png",
    },
  ];

  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    new Array(albums.length).fill(false)
  );
  const boundingRefs = useRef<(DOMRect | null)[]>([]);

  const handleClick = (index: number) => {
    setFlippedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Headphones className="w-5 h-5 text-indigo-500" />
        <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-muted-light">
          On Rotation
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {albums.map((album, index) => {
          const isFlipped = flippedStates[index];
          
          return (
            <div key={index} className="flex flex-col [perspective:800px]">
              <div
                className="group relative aspect-square mb-4 rounded-xl overflow-hidden shadow-sm cursor-pointer transform-style-preserve-3d"
                onMouseEnter={(ev) => {
                  boundingRefs.current[index] = ev.currentTarget.getBoundingClientRect();
                  ev.currentTarget.style.setProperty("--scale", "1.1");
                }}
                onMouseMove={(ev) => {
                  if (!boundingRefs.current[index]) return;
                  const rect = boundingRefs.current[index];
                  const x = ev.clientX - rect.left;
                  const y = ev.clientY - rect.top;
                  const xPercentage = x / rect.width;
                  const yPercentage = y / rect.height;
                  const xRotation = (xPercentage - 0.5) * 20;
                  const yRotation = (0.5 - yPercentage) * 20;

                  ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
                  ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
                  ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
                  ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
                }}
                onMouseLeave={(ev) => {
                  boundingRefs.current[index] = null;
                  ev.currentTarget.style.setProperty("--scale", "1");
                  ev.currentTarget.style.setProperty("--x-rotation", "0deg");
                  ev.currentTarget.style.setProperty("--y-rotation", "0deg");
                }}
                onClick={() => handleClick(index)}
                style={{
                  transform: `rotateX(var(--x-rotation, 0deg)) rotateY(var(--y-rotation, 0deg)) scale(var(--scale, 1))`,
                }}
              >
                {/* Inner container that handles the flip */}
                <div
                  className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
                  }}
                >
                  {/* Front - Cover */}
                  <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
                    <Image
                      src={album.cover}
                      alt={`${album.title} cover`}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Back - Album */}
                  <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden rotate-y-180">
                    <Image
                      src={album.image}
                      alt={`${album.title} by ${album.artist}`}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Radial gradient highlight that follows cursor */}
                <div 
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.3) 20%, transparent 80%)`,
                  }}
                />
              </div>
              <h4 className="font-sans font-semibold text-text-light">
                {album.title}
              </h4>
              <p className="text-sm text-muted-light">{album.artist}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

