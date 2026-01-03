import Image from "next/image";
import { MapPin, Clock, Camera } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="px-6 md:px-12 pt-24 md:pt-32 pb-12 max-w-6xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-[100px] pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 relative z-10">
          <div className="flex items-center gap-4 text-xs font-mono text-muted-light mb-6 tracking-wide uppercase opacity-80">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              San Francisco, CA
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              UTC-8
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6 text-text-light">
            About
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-muted-light font-light leading-relaxed mb-8">
            I build systems—and I care about the{" "}
            <span className="text-text-light font-normal">people and stories</span> around them.
          </p>
          
          <div className="text-lg leading-relaxed text-muted-light space-y-6 font-light">
            <p>
              Hey, I'm Leo. While my day job involves wrangling distributed
              infrastructure and optimizing latency, my off-hours are
              decidedly analog. I believe the best engineering comes from
              understanding the human context, not just the technical
              constraints.
            </p>
            <p>
              When I'm away from the terminal, you'll find me capturing
              candid moments with my Fujifilm X100V, mediating disputes
              between my two cats (Udon and Ramen), or attempting to master
              the strategic chaos of Mahjong.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-5 relative hidden md:block">
          <div className="relative rounded-2xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl border-4 border-white bg-white group">
            <Image
              alt="Leo with camera"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPozZ4EFD7Dpw-4OyJ0mV79UzbQ5AIMs23ublPhDsu7O4n3VE_lmm0pC1CZNOi9ja4UB64qsm44VRb9v59uEyOBJHBANElQZBHFub3xU8oGHVtTGv8pMVeMzCNmq4QhH_2pyDiCXx-UIWgW2kFCh9IoY-Ue-4l1P12TT4bPKmwvwDs3iqhsPUYgybj79JOVY9nrn1vwvCMdcoRWtkI-a9-dXqnTu1_L9OyJRsMk3BFzFdYxtnjy7-OBs6Naau2mYnDc5teM5LJLjit"
              width={500}
              height={600}
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs font-mono text-center">
                Shot on Fujifilm X100V
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-surface-light rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-20 border border-gray-100">
            <Camera className="w-8 h-8 text-indigo-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

