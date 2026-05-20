import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GENERAL_LETTER } from '../data';
import { Heart, Send, Check } from 'lucide-react';

export default function SealedLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const letter = GENERAL_LETTER;

  return (
    <div id="sealed-love-letter" className="relative py-28 flex flex-col items-center justify-center overflow-hidden">
      {/* Background soft glowing lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-orb-rose pointer-events-none filter blur-3xl opacity-35" />

      <div className="max-w-4xl mx-auto text-center px-6 mb-16 relative z-10">
        <span className="font-mono text-xs md:text-sm tracking-[0.4em] text-luxury-rose uppercase block mb-3">FINALE • THE SEALED MESSAGE</span>
        <h2 className="font-serif text-4xl md:text-5xl text-luxury-cream font-extralight tracking-wide mb-4">
          A Gold-Foil Love Letter
        </h2>
        <div className="w-12 h-[1px] bg-luxury-rose/40 mx-auto my-4" />
        <p className="text-base md:text-lg font-sans text-white/60 max-w-lg mx-auto font-light leading-relaxed">
          Behind every frame of laughter resides a quiet, unyielding constellation of gratitude. Tap the wax seal to break the lock and read the message inside.
        </p>
      </div>

      <div className="relative w-full max-w-2xl h-[480px] flex items-center justify-center px-4 perspective-1000 z-20">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* SEALED ENVELOPE DESIGN */
            <motion.div
              key="envelope"
              initial={{ scale: 0.95, rotate: -2, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              exit={{ scale: 0.9, rotate: -5, opacity: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              onClick={() => setIsOpen(true)}
              className="relative w-full max-w-[420px] aspect-[4/3] bg-gradient-to-br from-neutral-800 via-neutral-900 to-[#100f0f] border border-white/5 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.85)] flex flex-col justify-end p-8 cursor-pointer select-none group"
            >
              {/* Linen weave overlay simulated */}
              <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none mix-blend-overlay" />
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-neutral-950/20 rounded-b-2xl border-t border-white/[0.02]" />

              {/* Envelope flap visual lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L200 150L396 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 296L150 150" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M396 296L250 150" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>

              <div className="absolute top-10 md:top-12 left-0 right-0 z-10 flex flex-col items-center justify-center text-center">
                <span className="font-mono text-sm md:text-base tracking-[0.3em] text-luxury-rose uppercase">CONFIDENTIAL</span>
                <span className="font-serif italic text-3xl md:text-4xl text-luxury-cream mt-2 tracking-wide font-light">
                  {letter.recipient}
                </span>
              </div>

              {/* Gold Wax Seal Trigger */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E9D490] via-[#C5A059] to-[#8C6B1B] shadow-[0_8px_25px_rgba(197,160,89,0.4)] flex items-center justify-center border-2 border-[#fff]/10 relative select-none"
                >
                  {/* Wax outline imperfections */}
                  <div className="absolute inset-0.5 rounded-full border border-black/10" />
                  <div className="absolute -inset-1 rounded-full border border-dashed border-luxury-gold/30 animate-spin-slow pointer-events-none" />
                  <Heart className="w-6 h-6 text-neutral-950 fill-neutral-950/80 animate-pulse ml-[1px] mt-[1px]" />
                </motion.div>
                <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-luxury-gold mt-3 uppercase font-medium">
                  BREAK THE SEAL
                </span>
              </div>
            </motion.div>
          ) : (
            /* LETTER REVEAL LAYOUT */
            <motion.div
              key="letter-body"
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -70, scale: 0.95 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full max-w-[540px] h-full bg-luxury-cream rounded-3xl p-8 md:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-neutral-200 overflow-y-auto select-text text-neutral-900 flex flex-col justify-between"
            >
              {/* Paper line rules helper */}
              <div className="absolute inset-0 bg-white/20 pointer-events-none mix-blend-overlay" />
              <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-[#e5dfd4] to-transparent pointer-events-none" />

              {/* Header Letter Meta */}
              <div className="flex justify-between items-start border-b border-neutral-200 pb-5">
                <div className="flex flex-col text-left">
                  <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#C29B93]/90 uppercase font-semibold">SUBJECT MATTERS</span>
                  <h4 className="font-serif italic text-luxury-gold text-2xl mt-0.5">{letter.subject}</h4>
                </div>
                <div className="flex flex-col text-right font-mono text-xs md:text-sm tracking-[0.1em] text-neutral-400">
                  <span>DATE: FOREVER</span>
                  <span>TIME: ALWAYS</span>
                </div>
              </div>

              {/* Message scroll area */}
              <div className="my-8 space-y-6 text-left">
                <span className="font-serif italic text-[#C29B93] text-3xl font-light">My Dear {letter.recipient},</span>
                {letter.content.map((paragraph, pIdx) => (
                  <p 
                    key={pIdx} 
                    className="font-serif text-xl text-neutral-800 leading-relaxed font-light first-letter:text-4xl first-letter:font-semibold first-letter:text-[#C29B93]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signoff Footer */}
              <div className="flex flex-col items-end border-t border-neutral-200 pt-6 text-right">
                <span className="font-serif italic text-[#C29B93] text-2xl leading-relaxed">{letter.signoff}</span>
                <span className="font-mono text-xs md:text-sm tracking-[0.35em] text-luxury-gold uppercase font-bold mt-2">
                  {letter.sender.toUpperCase()}
                </span>
                
                <div className="flex items-center gap-1.5 text-xs md:text-sm font-mono tracking-widest text-neutral-400 mt-4 uppercase">
                  <span>uniquely yours</span>
                  <Heart className="w-2.5 h-2.5 text-[#C29B93] fill-[#C29B93]" />
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-xs md:text-sm tracking-widest text-neutral-500 hover:text-[#C29B93] border border-neutral-300 hover:border-[#C29B93]/50 py-1.5 px-4 rounded-full cursor-pointer transition-colors"
                >
                  RE-SEAL ENVELOPE
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
