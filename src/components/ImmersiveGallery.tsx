import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getImageUrl } from '../data';
import { Maximize2, Minimize2, Sparkles, Milestone } from 'lucide-react';

interface CinematicSlide {
  key: string;
  title: string;
  caption: string;
  date: string;
  location: string;
}

export default function ImmersiveGallery() {
  const [activeFullScreen, setActiveFullScreen] = useState<string | null>(null);

  const slides: CinematicSlide[] = [
    {
      key: "4.1",
      title: "Elysian Warmth",
      caption: "A golden symphony of trust, laughter, and unbreakable devotion in the meadow.",
      date: "August Horizon",
      location: "The Meadow"
    },
    {
      key: "4.2",
      title: "Echoes of Heartbeats",
      caption: "In the absolute silence, our rhythms align like a perfectly rehearsed orchestra.",
      date: "Midnight Symphony",
      location: "The Velvet Parlor"
    },
    {
      key: "4.3",
      title: "The Cinematic Whisper",
      caption: "You represent every beautiful piece of poetry I have ever sought to understand.",
      date: "Sunset Devotion",
      location: "Under the Hanging Vines"
    },
    {
      key: "4.4",
      title: "Timeless Sanctuary",
      caption: "Every square inch of the universe feels secure when you are drawing close.",
      date: "January Hearth",
      location: "Beside the Hearth"
    },
    {
      key: "4.5",
      title: "Infinite Reflection",
      caption: "Seeing my absolute best self mirrored in your magnificent hazel eyes.",
      date: "Summer Noon",
      location: "Mirrored Lake"
    },
    {
      key: "4.6",
      title: "Our Forever Frame",
      caption: "The culmination of a thousand paths converging into our eternal home.",
      date: "The Epilogue",
      location: "The Infinite Shore"
    }
  ];

  return (
    <div id="immersive-gallery" className="relative py-28 bg-transparent overflow-hidden">
      {/* Heavy dark fade top and bottom */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0A0A0A]/65 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent z-10 pointer-events-none" />

      {/* Subtle floating gold particle dust field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-45">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-luxury-gold/30 filter blur-[1px]"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              animation: `floatUp ${Math.random() * 10 + 12}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 mb-20 relative z-10">
        <span className="font-mono text-xs md:text-sm tracking-[0.4em] text-luxury-rose uppercase block mb-3">CLIMAX HORIZON</span>
        <h2 className="font-serif text-4xl md:text-5xl text-luxury-cream font-extralight tracking-wide mb-4">
          Eternity in Cinematic Frames
        </h2>
        <div className="w-12 h-[1px] bg-luxury-rose/40 mx-auto my-4" />
        <p className="text-base font-sans text-white/50 max-w-lg mx-auto font-light leading-relaxed">
          Six grand canvases representing the emotional peak of our story. Tap any frame to immerse yourself in fullscreen detail, surrounded by slow atmosphere.
        </p>
      </div>

      {/* Grid of full-screen responsive cinematic cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.key}
            onClick={() => setActiveFullScreen(slide.key)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative h-[480px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl flex flex-col justify-end p-8 bg-neutral-900"
          >
            {/* Cinematic Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 group-hover:via-black/25 z-10 transition-all duration-500" />
            
            {/* Full background image */}
            <img
              src={getImageUrl(slide.key)}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out-back scale-102 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />

            {/* Corner hover expand pointer icon */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full glassmorphism flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <Maximize2 className="w-4 h-4 text-luxury-cream" />
            </div>

            {/* Card Content Footer */}
            <div className="relative z-20 flex flex-col items-start text-left select-none">
              <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-luxury-rose uppercase mb-1">
                MEMOIRE {i + 1}
              </span>
              <h3 className="font-serif text-3xl text-luxury-cream font-extralight tracking-widest uppercase mb-2">
                {slide.title}
              </h3>
              
              <div className="h-[1px] w-6 bg-luxury-rose/30 my-3 group-hover:w-16 transition-all duration-500" />
              
              <div className="flex items-center gap-1.5 text-xs md:text-sm font-mono tracking-widest text-luxury-gold/80">
                <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                <span>{slide.location.toUpperCase()}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULL SCREEN EXPERIENTAL OVERLAY */}
      <AnimatePresence>
        {activeFullScreen && (() => {
          const slide = slides.find(s => s.key === activeFullScreen)!;
          const slideIndex = slides.indexOf(slide) + 1;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 select-none"
            >
              {/* Main Content Card Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-5xl h-auto max-h-[92vh] md:max-h-[85vh] bg-[#0A0A0A] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 overflow-y-auto md:overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]"
              >
                {/* Animated Light Leak overlay (Lens flare) inside the popup card bounds */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl md:rounded-3xl">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 15, 
                      ease: "easeInOut" 
                    }}
                    className="absolute -top-1/4 -left-1/4 w-[400px] h-[400px] glow-orb-rose pointer-events-none rounded-full filter blur-[80px] opacity-35"
                  />
                </div>

                {/* Close Button layout placed gracefully top-right of the card */}
                <button
                  onClick={() => setActiveFullScreen(null)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-zinc-900 border border-white/10 hover:border-luxury-rose/40 flex items-center justify-center text-luxury-cream hover:bg-zinc-850 cursor-pointer transition-all hover:scale-105"
                  title="Close Detail View"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>

                {/* Large visual side */}
                <div className="w-full md:w-3/5 h-[280px] md:h-full flex items-center justify-center">
                  <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                    <img
                      src={getImageUrl(activeFullScreen)}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Shadow masking */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Typography metadata side */}
                <div className="w-full md:w-2/5 flex flex-col justify-center text-left items-start select-text pr-2 md:pr-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Milestone className="w-4 h-4 text-luxury-rose" />
                    <span className="font-mono text-sm md:text-base tracking-[0.35em] text-[#C29B93] uppercase font-bold">
                      MOMENT {slideIndex} OF 6
                    </span>
                  </div>

                  <h2 className="font-serif text-4xl md:text-5xl text-luxury-cream font-extralight tracking-widest uppercase mb-4 leading-tight text-glow">
                    {slide.title}
                  </h2>

                  <div className="w-12 h-[1px] bg-[#C29B93]/40 my-4" />

                  <p className="font-serif italic text-lg md:text-xl text-white/95 leading-relaxed font-light mb-6">
                    “{slide.caption}”
                  </p>

                  <div className="flex flex-col gap-2 font-mono text-sm md:text-base tracking-widest text-white/50 uppercase">
                    <div className="flex items-center gap-2">
                      <span className="text-[#C29B93]/60">DATE:</span>
                      <span className="font-semibold text-luxury-gold">{slide.date.toUpperCase()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#C29B93]/60">LATERALS:</span>
                      <span className="text-white/70">{slide.location.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
