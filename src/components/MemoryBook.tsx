import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getImageUrl } from '../data';
import { BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';

export default function MemoryBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Group 1 image keys
  const group1Keys = ["1.1", "1.2", "1.3", "1.4"];

  const spreads = [
    {
      left: {
        isText: true,
        title: "Chapter I",
        subtitle: "The Genesis",
        excerpt: "Every lifetime has a distinct coordinate where eternity begins. For us, it was the soft, unspoken understanding that we had somehow known each other in every previous horizon.",
        phrase: "“our little universe”"
      },
      right: {
        isImage: true,
        imageKey: "1.1",
        title: "The First Glances",
        caption: "A single look that silently redrew the map of my world.",
        meta: "Sacred Spacetime"
      }
    },
    {
      left: {
        isImage: true,
        imageKey: "1.2",
        title: "The Subtle Alchemy",
        caption: "Finding infinite gold in our quiet, ordinary conversations.",
        meta: "Midnight Coffee"
      },
      right: {
        isImage: true,
        imageKey: "1.3",
        title: "Whispered Promises",
        caption: "Where time stopped and we allowed our paths to intertwine completely.",
        meta: "Dusk Gathering"
      }
    },
    {
      left: {
        isImage: true,
        imageKey: "1.4",
        title: "Golden Hour Glow",
        caption: "Skins warmed by the fading sun, hearts warmed by a new beginning.",
        meta: "First Escapade"
      },
      right: {
        isText: true,
        title: "The Dream",
        subtitle: "To Be Continued",
        excerpt: "And so, with our hands locked and hearts synchronized, we stepped across the threshold, ready to paint our names onto the velvet cosmic canvas.",
        phrase: "“every frame feels alive”"
      }
    }
  ];

  const handleNext = () => {
    if (currentPage < spreads.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto py-20 px-4 flex flex-col items-center">
      {/* Glow lights behind the book */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] glow-orb-rose pointer-events-none filter blur-3xl opacity-40 rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] glow-orb-gold pointer-events-none filter blur-2xl opacity-30 rounded-full animate-pulse-slow" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="font-mono text-xs md:text-sm tracking-[0.4em] text-luxury-rose uppercase block mb-3">PROLOGUE</span>
        <h2 className="font-serif text-4xl md:text-5xl text-luxury-cream font-extralight tracking-wide mb-4">
          The Opening Artbook
        </h2>
        <div className="w-12 h-[1px] bg-luxury-rose/40 mx-auto my-4" />
        <p className="text-base font-sans text-white/50 max-w-lg mx-auto font-light leading-relaxed">
          Open the velvet bound album below. Flip through our initial frames to see how our story slowly took root in the light.
        </p>
      </motion.div>

      <div className="relative w-full h-[540px] md:h-[620px] max-w-5xl flex items-center justify-center perspective-[-1200px]">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* BOOK COVER */
            <motion.div
              key="book-cover"
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -110, scale: 0.9 }}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-[340px] h-[480px] md:w-[400px] md:h-[560px] bg-gradient-to-br from-warm-gray to-black border-2 border-white/5 rounded-r-[24px] rounded-l-[12px] shadow-[25px_30px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col justify-between p-8 md:p-12 cursor-pointer select-none overflow-hidden hover:border-luxury-rose/10 transition-colors group"
            >
              {/* Embossed patterns */}
              <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none mix-blend-overlay" />
              <div className="absolute inset-x-0 top-0 h-full border-r-[4px] border-black/30 left-[1px]" />
              <div className="absolute -right-32 -bottom-32 w-80 h-80 glow-orb-rose rounded-full filter blur-3xl opacity-20 pointer-events-none group-hover:opacity-45 transition-all duration-1000" />

              <div className="flex flex-col gap-1 items-center text-center mt-8">
                <BookOpen className="w-6 h-6 text-luxury-rose/60 mb-2 animate-bounce-slow" />
                <span className="font-mono text-xs tracking-[0.4em] text-luxury-rose uppercase">PRIVATE ARCHIVE</span>
                <div className="h-[1px] w-6 bg-luxury-rose/20 my-2" />
              </div>

              <div className="text-center my-auto flex flex-col justify-center items-center">
                <h3 className="font-serif text-3xl md:text-4xl text-luxury-cream font-extralight tracking-widest text-glow leading-normal uppercase">
                  L’Étoile
                </h3>
                <span className="font-serif tracking-[0.2em] italic text-sm text-luxury-rose mt-2 block">
                  A Love Story in Frames
                </span>
              </div>

              <div className="flex flex-col items-center gap-4 text-center mt-auto">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase font-medium">
                  PRESS TO UNFOLD
                </span>
                <motion.div 
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-luxury-rose hover:text-luxury-cream hover:border-luxury-rose/40 transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* OPENED BOOK SPREAD */
            <motion.div
              key="book-spread"
              initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-full max-w-4xl h-[470px] md:h-[540px] bg-gradient-to-b from-warm-gray to-neutral-950 rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] flex border border-white/5 overflow-hidden"
            >
              {/* Book spine line */}
              <div className="absolute inset-y-0 left-1/2 -ml-[2px] w-[4px] bg-gradient-to-r from-neutral-950/70 via-black to-neutral-900/60 z-20 shadow-inner" />

              {/* LEFT PAGE */}
              <div className="w-1/2 h-full p-6 md:p-10 flex flex-col justify-between border-r border-black/20 relative overflow-hidden bg-gradient-to-b from-neutral-950 to-[#0e0c0c] select-none">
                <div className="absolute inset-0 bg-neutral-900/[0.02]" />
                
                <AnimatePresence mode="wait">
                  {spreads[currentPage].left.isText ? (
                    <motion.div
                      key={`left-text-${currentPage}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.6 }}
                      className="h-full flex flex-col justify-between relative z-10"
                    >
                      <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-luxury-rose uppercase">
                        {spreads[currentPage].left.subtitle}
                      </span>
                      <div className="my-auto">
                        <h4 className="font-serif text-3xl md:text-4xl text-luxury-cream font-light mb-4">
                          {spreads[currentPage].left.title}
                        </h4>
                        <p className="font-serif italic text-lg md:text-xl text-white/60 leading-relaxed font-light">
                          {spreads[currentPage].left.excerpt}
                        </p>
                      </div>
                      <span className="font-serif italic text-sm md:text-base text-luxury-rose mt-2 tracking-widest text-glow-rose">
                        {spreads[currentPage].left.phrase}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`left-img-${currentPage}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.7 }}
                      className="h-full flex flex-col justify-between relative z-10"
                    >
                      {/* Image frame */}
                      <div className="relative w-full h-[82%] md:h-[87%] rounded bg-neutral-900 overflow-hidden border border-white/5 group shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                        <img 
                          src={getImageUrl(spreads[currentPage].left.imageKey || '')} 
                          alt="Memory file"
                          className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out-back scale-102 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      {/* Description below image */}
                      <div className="mt-3 flex flex-col">
                        <span className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-rose font-medium">
                          {spreads[currentPage].left.meta}
                        </span>
                        <h4 className="font-serif text-lg text-luxury-cream mt-0.5 font-light tracking-wide">
                          {spreads[currentPage].left.title}
                        </h4>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* RIGHT PAGE */}
              <div className="w-1/2 h-full p-6 md:p-10 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#0e0c0c] to-neutral-950 select-none">
                <div className="absolute inset-0 bg-neutral-900/[0.02]" />

                <AnimatePresence mode="wait">
                  {spreads[currentPage].right.isText ? (
                    <motion.div
                      key={`right-text-${currentPage}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.6 }}
                      className="h-full flex flex-col justify-between relative z-10 text-right items-end"
                    >
                      <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-luxury-rose uppercase">
                        {spreads[currentPage].right.subtitle}
                      </span>
                      <div className="my-auto lg:max-w-xs">
                        <h4 className="font-serif text-3xl md:text-4xl text-luxury-cream font-light mb-4">
                          {spreads[currentPage].right.title}
                        </h4>
                        <p className="font-serif italic text-lg md:text-xl text-white/60 leading-relaxed font-light">
                          {spreads[currentPage].right.excerpt}
                        </p>
                      </div>
                      <span className="font-serif italic text-sm md:text-base text-luxury-rose mt-2 tracking-widest text-glow-rose">
                        {spreads[currentPage].right.phrase}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`right-img-${currentPage}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.7 }}
                      className="h-full flex flex-col justify-between relative z-10"
                    >
                      {/* Image frame */}
                      <div className="relative w-full h-[82%] md:h-[87%] rounded bg-neutral-900 overflow-hidden border border-white/5 group shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                        <img 
                          src={getImageUrl(spreads[currentPage].right.imageKey || '')} 
                          alt="Memory file"
                          className="w-full h-full object-cover transition-transform duration-[4000ms] scale-102 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      {/* Description below image */}
                      <div className="mt-3 flex flex-col">
                        <span className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-rose font-medium">
                          {spreads[currentPage].right.meta}
                        </span>
                        <h4 className="font-serif text-lg text-luxury-cream mt-0.5 font-light tracking-wide">
                          {spreads[currentPage].right.title}
                        </h4>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Spread Controls bar inside book backdrop */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/5">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 0}
                  className={`p-1 text-white/60 hover:text-white transition-colors cursor-pointer ${currentPage === 0 ? 'opacity-20 pointer-events-none' : ''}`}
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="font-mono text-xs tracking-widest text-white/50">
                  {currentPage + 1} / {spreads.length}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === spreads.length - 1}
                  className={`p-1 text-white/60 hover:text-white transition-colors cursor-pointer ${currentPage === spreads.length - 1 ? 'opacity-20 pointer-events-none' : ''}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isOpen && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => { setIsOpen(false); setCurrentPage(0); }}
          className="mt-8 font-mono text-xs md:text-sm tracking-widest text-[#C29B93]/60 hover:text-[#C29B93] transition-colors bg-white/[0.02] border border-white/5 py-1.5 px-4 rounded-full hover:border-[#C29B93]/35 cursor-pointer"
        >
          CLOSE PHYSICAL ALBUM
        </motion.button>
      )}
    </div>
  );
}
