import { Mountain, Camera } from "lucide-react";

export default function CreativePursuits() {
  return (
    <section className="px-6 md:px-12 py-12 md:py-20 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-text-light">
          Creative Pursuits
        </h2>
        <span className="text-lg md:text-xl text-muted-light font-light font-serif italic border-l-2 border-indigo-200 pl-4">
          A visual journal
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[600px] grid-rows-4 md:grid-rows-2">
        <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group bg-gray-100 cursor-default">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
            <Mountain className="w-16 h-16" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-mono text-sm">Kyoto, 2023</p>
          </div>
        </div>
        
        <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group bg-gray-100 cursor-default min-h-[200px] md:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-mono bg-white/20 backdrop-blur-md px-2 py-1 rounded text-text-light">
              Street
            </span>
          </div>
        </div>
        
        <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group bg-gray-100 cursor-default min-h-[200px] md:min-h-0">
          <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="w-10 h-10 text-muted-light" />
          </div>
        </div>
        
        <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group bg-gray-100 cursor-default min-h-[200px] md:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-mono bg-white/20 backdrop-blur-md px-2 py-1 rounded text-text-light">
              Golden Hour
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

