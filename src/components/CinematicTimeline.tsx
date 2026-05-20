import { motion } from 'motion/react';
import { getImageUrl } from '../data';
import { Calendar, MapPin, Route } from 'lucide-react';

interface TimelineNode {
  key: string;
  milestone: string;
  title: string;
  caption: string;
  date: string;
  location: string;
}

export default function CinematicTimeline() {
  const nodes: TimelineNode[] = [
    {
      key: "3.1",
      milestone: "EPISODE I",
      title: "The Anchoring",
      caption: "In the middle of a shifting, volatile universe, finding true north in your steady, beautiful gaze.",
      date: "",
      location: "The Harbor Bridge"
    },
    {
      key: "3.2",
      milestone: "EPISODE II",
      title: "Spontaneous Escapes",
      caption: "Leaving behind maps, plans, and schedules to trace the unspoken corners of our souls.",
      date: "",
      location: "Mist-covered Hills"
    },
    {
      key: "3.3",
      milestone: "EPISODE III",
      title: "The Silent Horizon",
      caption: "Watching the sun dissolve into the velvet water, knowing with perfect safety that our tomorrows are secure.",
      date: "",
      location: "The End of the Land"
    }
  ];

  return (
    <div className="relative py-28 bg-transparent overflow-hidden">
      {/* Background spotlights tracking */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial from-[#C29B93]/[0.025] to-transparent pointer-events-none rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial from-luxury-gold/[0.02] to-transparent pointer-events-none rounded-full filter blur-3xl" />

      <div className="max-w-4xl mx-auto text-center px-6 mb-24 relative z-10">
        <span className="font-mono text-xs md:text-sm tracking-[0.4em] text-luxury-rose uppercase block mb-3">THE CONSTELLATION</span>
        <h2 className="font-serif text-4xl md:text-5xl text-luxury-cream font-extralight tracking-wide mb-4">
          Nostalgic Vertical Orbit
        </h2>
        <div className="w-12 h-[1px] bg-luxury-rose/40 mx-auto my-4" />
        <p className="text-base font-sans text-white/50 max-w-lg mx-auto font-light leading-relaxed">
          The steady progression of our chapters. A quiet thread of devotion running through seasons, milestones, and landscapes.
        </p>
      </div>

      {/* Vertical Timeline container */}
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Glow Line thread in center (desktop) / left (mobile) */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-[#C29B93]/10 via-luxury-gold/25 to-[#C29B93]/5" />
        
        {/* Infinite slow orbit icon on vertical rail */}
        <div className="absolute left-8 md:left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-warm-black border border-white/5 flex items-center justify-center shadow-lg z-10">
          <Route className="w-3 h-3 text-luxury-rose animate-pulse" />
        </div>

        <div className="space-y-24 md:space-y-36 relative z-10">
          {nodes.map((node, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={node.key}
                className={`flex flex-col md:flex-row items-stretch w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual / Image block */}
                <div className="w-full md:w-1/2 flex items-center justify-center px-2 md:px-12 pl-14 md:pl-12">
                  <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_25px_55px_-12px_rgba(0,0,0,0.9)] border border-white/5 group bg-neutral-900"
                  >
                    {/* Simulated Lens Spotlight Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(255,255,255,0.06)_0%,_transparent_60%)] group-hover:opacity-100 opacity-60 transition-opacity duration-700 pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    
                    <img 
                      src={getImageUrl(node.key)} 
                      alt={node.title} 
                      className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out-back scale-102 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute bottom-4 left-6 z-20 pointer-events-none pr-3">
                      <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-luxury-rose uppercase">{node.milestone}</span>
                      <h4 className="font-serif text-2xl text-luxury-cream mt-0.5 text-glow font-light italic">{node.title}</h4>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline center node indicator */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-8 md:mt-0 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-neutral-950 border border-luxury-gold/60 shadow-[0_0_12px_rgba(197,160,89,0.4)] z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-rose animate-ping" />
                </div>

                {/* Narrative block */}
                <div className="w-full md:w-1/2 flex flex-col justify-center pl-14 md:pl-12 md:px-12 mt-6 md:mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 1.2, delay: 0.15 }}
                    className="flex flex-col text-left max-w-md"
                  >
                    {/* Date badge */}
                    {node.date && (
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-luxury-gold/50" />
                        <span className="font-mono text-sm tracking-widest text-luxury-gold font-semibold">{node.date}</span>
                      </div>
                    )}

                    <h3 className="font-serif text-4xl text-luxury-cream font-extralight tracking-wide mb-3 leading-tight">
                      {node.title}
                    </h3>
                    
                    <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed font-light mb-4">
                      {node.caption}
                    </p>

                    <div className="flex items-center gap-1.5 text-sm font-mono tracking-wider text-white/55 uppercase">
                      <MapPin className="w-3.5 h-3.5 text-[#C29B93]/50" />
                      <span>{node.location}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
