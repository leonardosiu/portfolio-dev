import Image from "next/image";
import { Camera } from "lucide-react";

export default function AboutPhilosophy() {
  return (
    <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <div className="relative bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 px-2 md:px-4 py-4">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-5 h-5 text-indigo-500" />
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-muted-light">
                Composition & Clarity
              </span>
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl text-text-light mb-5 leading-tight">
              Finding the signal <br />
              in the noise.
            </h3>
            
            <p className="text-lg text-muted-light font-light leading-relaxed mb-8">
              Whether it's debugging a race condition or framing a
              photograph, the goal is always clarity. I strive to strip away
              the unnecessary to reveal the core narrative—be it in code,
              design, or life.
            </p>
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-light border border-gray-100 text-xs font-mono text-muted-light">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
              Currently: Learning to bake sourdough
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative group shadow-md">
              <Image
                alt="Udon and Ramen cats"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEIXRJg-XiguS3gsE76DWvwdkyGw4GQFjVhGqd6-gwVYoRmSUFZ2k1F7MhpMea1bkNQrakK55g1X9RPNm5FLw7edYU035p-qRyXuePJsjMhWKR5kZoxQM4oeIpRu_WoFfXaABttpeIgV9MM-4hhFPSAKEsEoosKkcZisFdAGtvvRvsgn8psBlebXIMmhs2xgAZI7FWiL6tJXJG0K95iil5xemYH6TAwUAbtiAig6r2wPdMXkIgNi9MkbOlQJh3LIkqJFDXDYCEoo2I"
                width={600}
                height={450}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                  Udon & Ramen — Chief Debugging Officers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

