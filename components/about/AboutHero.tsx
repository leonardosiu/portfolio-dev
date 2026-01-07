import Image from "next/image";
import { MapPin, Camera } from "lucide-react";
import TimestampPST from "./PacificTime";

export default function AboutHero() {
  return (
    <section className="px-6 md:px-12 pt-12 md:pt-32 pb-12 max-w-7xl mx-auto relative">      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-start gap-4 text-xs font-mono text-muted-light mb-6 tracking-wide uppercase opacity-80">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              San Francisco, CA
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 md:block hidden"></span>
            <TimestampPST />
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6 text-text-light">
            About
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-muted-light font-light leading-relaxed mb-8">
            Building thoughtful software across backend, applied ML, and product, grounded in  {" "}
            <span className="text-text-light font-normal">people and context</span>.
          </p>
          
          <div className="text-lg leading-relaxed text-muted-light space-y-6 font-light">
            <p>
              Hey, I'm Leo, a third-year CS major at UCI. I build 
              end-to-end software across backend and applied ML, with
              a focus on how it helps people. I believe the best engineering 
              comes from understanding the human context, not just the technical
              constraints.
            </p>
            <p>
              When I'm away from the terminal, I slow things down.
              I like taking photos with my Fujifilm X100V, playing sports
              when I'm convinced to play, mediating disputes
              between my two cats (Udon and Ramen), and attempting to
              not give away the win in Mahjong.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-5 relative hidden md:block">
          <div className="relative rounded-2xl hover:rounded-2xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl border-4 border-white bg-white group">
            <Image
              alt="Leo with camera"
              src="/images/about/cat-dad.png"
              width={500}
              height={600}
              className="w-full h-auto object-cover rounded-2xl hover:rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs font-mono text-center">
                Shot with Dazz Cam
              </p>
            </div>
          </div>
          {/* <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-surface-light rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-20 border border-gray-100">
            <Camera className="w-8 h-8 text-indigo-500 animate-pulse" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

