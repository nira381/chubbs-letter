import { useRef } from 'react';
import { motion } from 'motion/react';
import { getImageUrl } from '../data';
import { Sparkles } from 'lucide-react';

interface PolaroidItem {
  key: string;
  title: string;
  caption: string;
  date: string;
  location: string;
  defaultRotate: number;
}

export default function ScatteredPolaroids() {
  const containerRef = useRef<HTMLDivElement>(null);

  const polaroids: PolaroidItem[] = [
    {
      key: "2.1",
      title: "Unfiltered Giggles",
      caption: "When the jokes made no sense, but our laughter meant everything.",
      date: "Saturday Glee",
      location: "Cafe Table Seven",
      defaultRotate: -4
    },
    {
      key: "2.2",
      title: "Stolen Sunlight",
      caption: "Watching the sunbeams dance over your eyelashes while you sleep.",
      date: "Sunny Retreat",
      location: "Near the Balcony",
      defaultRotate: 5
    },
    {
      key: "2.3",
      title: "Tender Holding",
      caption: "My favorite place in the entire world is locked inside your hand.",
      date: "Quiet Walk",
      location: "The Forgotten Trail",
      defaultRotate: -7
    },
    {
      key: "2.4",
      title: "Silly Glances",
      caption: "We can hold code conversations with single look glances.",
      date: "Late Afternoons",
      location: "Living Room Floor",
      defaultRotate: 3
    },
    {
      key: "2.5",
      title: "Atmospheric Bliss",
      caption: "Surrendering to the warm weight of being completely home under your chest.",
      date: "Rainy Sunday",
      location: "Cozy Quarters",
      defaultRotate: -3
    },
    {
      key: "2.6",
      title: "Dreamy Gazing",
      caption: "I looked at you, and suddenly the chaos of everything subsided.",
      date: "Dusk Reverie",
      location: "Skyline Overlook",
      defaultRotate: 6
    }
  ];

  return (
    <div className="relative py-24 select-none overflow-hidden" ref={containerRef}>
      {/* Background radial overlays */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] glow-orb-rose pointer-events-none filter blur-3xl opacity-20 rounded-full" />
      <div className="absolute top-2/3 right-1/4 w-[250px] h-[250px] glow-orb-gold pointer-events-none filter blur-2xl opacity-25 rounded-full" />

      <div className="max-w-4xl mx-auto text-center px-6 mb-16 relative z-10">
        <span className="font-mono text-xs md:text-sm tracking-[0.4em] text-luxury-rose uppercase block mb-3">SCATTERED EPHEMERA</span>
        <h2 className="font-serif text-4xl md:text-5xl text-luxury-cream font-extralight tracking-wide mb-4">
          Tactile Memory Table
        </h2>
        <div className="w-12 h-[1px] bg-luxury-rose/40 mx-auto my-4" />
        <p className="text-base font-sans text-white/50 max-w-lg mx-auto font-light leading-relaxed">
          Hover or tap on each Polaroid. Drag, rearrange and trace our laughter across this canvas where we let the moments fall where they may.
        </p>
      </div>

      {/* Polaroid grid desktop, stackable board area */}
      <div className="relative max-w-6xl mx-auto min-h-[720px] md:min-h-[640px] px-4 py-8 flex flex-wrap justify-center gap-6 md:gap-10">
        
        {polaroids.map((item, index) => {
          return (
            <motion.div
              key={item.key}
              drag
              dragConstraints={containerRef}
              dragElastic={0.4}
              dragTransition={{ bounceStiffness: 150, bounceDamping: 15 }}
              whileDrag={{ scale: 1.06, rotate: 0, zIndex: 100 }}
              initial={{ 
                opacity: 0, 
                y: 80, 
                rotate: item.defaultRotate * 2 
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotate: item.defaultRotate 
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring", 
                stiffness: 90, 
                damping: 18, 
                delay: index * 0.08 
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 40,
                boxShadow: "0px 30px 48px -10px rgba(0,0,0,0.7)" 
              }}
              className="relative w-[280px] bg-neutral-900 border border-white/5 rounded-md p-3.5 shadow-[10px_20px_45px_-12px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing select-none overflow-hidden group flex flex-col justify-between"
            >
              {/* Paper overlay helper */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent pointer-events-none" />

              {/* Image Frame */}
              <div className="relative w-full aspect-square bg-[#0b0a0a] rounded-sm overflow-hidden border border-black/35 group-hover:border-[#C29B93]/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 z-10" />
                <img 
                  src={getImageUrl(item.key)} 
                  alt={item.title}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-[6000ms] group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Polaroid Footer Text Panel */}
              <div className="pt-4 pb-1 pl-1 flex flex-col text-left">
                <div className="flex items-center justify-between">
                  <span className="font-serif italic text-lg text-luxury-cream/90 group-hover:text-luxury-rose transition-colors duration-400">
                    {item.title}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-luxury-gold/30 group-hover:text-luxury-gold animate-pulse transition-colors" />
                </div>
                
                <div className="flex items-center justify-between mt-3 text-xs md:text-sm font-mono tracking-widest text-white/50 uppercase">
                  <span>{item.date}</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
