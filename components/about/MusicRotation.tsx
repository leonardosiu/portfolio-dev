import { Headphones } from "lucide-react";
import Image from "next/image";

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

  return (
    <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Headphones className="w-5 h-5 text-indigo-500" />
        <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-muted-light">
          On Rotation
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {albums.map((album, index) => (
          <div key={index} className="group cursor-default">
            <div className="aspect-square mb-4 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cd-flip">
                {/* Front - Cover */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={album.cover}
                    alt={`${album.title} cover`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Back - Album */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-sm rotate-y-180">
                  <Image
                    src={album.image}
                    alt={`${album.title} by ${album.artist}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h4 className="font-sans font-semibold text-text-light">
              {album.title}
            </h4>
            <p className="text-sm text-muted-light">{album.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

