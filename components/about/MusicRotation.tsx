import { Headphones } from "lucide-react";
import Image from "next/image";

export default function MusicRotation() {
  const albums = [
    {
      title: "Get Up",
      artist: "NewJeans",
      image: "/images/about/get-up.png",
    },
    {
      title: "Whiplash",
      artist: "Aespa",
      image: "/images/about/whiplash.png",
    },
    {
      title: "Buzz",
      artist: "Niki",
      image: "/images/about/buzz.png",
    },
    {
      title: "Across the Spider-Verse",
      artist: "Metro Boomin",
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
            <div className="aspect-square rounded-xl mb-4 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
              <Image
                src={album.image}
                alt={`${album.title} by ${album.artist}`}
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
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

