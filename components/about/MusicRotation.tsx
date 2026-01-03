import { Headphones, Disc, Music, Radio } from "lucide-react";

export default function MusicRotation() {
  const albums = [
    {
      title: "Get Up",
      artist: "NewJeans",
      gradient: "from-pink-200 to-rose-200",
      icon: Disc,
      iconColor: "text-rose-900",
    },
    {
      title: "Currents",
      artist: "Tame Impala",
      gradient: "from-indigo-200 to-cyan-200",
      icon: Radio,
      iconColor: "text-indigo-900",
    },
    {
      title: "Solo Piano",
      artist: "Chilly Gonzales",
      gradient: "from-emerald-200 to-teal-200",
      icon: Music,
      iconColor: "text-teal-900",
    },
    {
      title: "Nurture",
      artist: "Porter Robinson",
      gradient: "from-amber-200 to-orange-200",
      icon: Headphones,
      iconColor: "text-orange-900",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Headphones className="w-5 h-5 text-indigo-500" />
        <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-muted-light">
          On Rotation
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {albums.map((album, index) => {
          const IconComponent = album.icon;
          return (
            <div key={index} className="group cursor-default">
              <div
                className={`aspect-square rounded-xl bg-gradient-to-br ${album.gradient} mb-4 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className={`w-10 h-10 ${album.iconColor}`} />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
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

