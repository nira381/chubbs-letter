import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Compass, ChevronDown } from 'lucide-react';

import TimeCounter from './components/TimeCounter';
import MemoryBook from './components/MemoryBook';
import ScatteredPolaroids from './components/ScatteredPolaroids';
import CinematicTimeline from './components/CinematicTimeline';
import ImmersiveGallery from './components/ImmersiveGallery';
import SealedLetter from './components/SealedLetter';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('GATHERING SUNBEAMS...');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('prologue');

  // Track cursor position for smooth interactive lens flare behind elements (desktop only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Set up custom luxury preloader progress simulation
  useEffect(() => {
    setMounted(true);
    let start = 0;
    const interval = setInterval(() => {
      start += Math.floor(Math.random() * 8) + 3;
      if (start >= 100) {
        start = 100;
        setProgress(100);
        setLoadingText('READY FOR ETERNITY.');
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      } else {
        setProgress(start);
        if (start < 25) {
          setLoadingText('CRAVING OUR INSTANTS...');
        } else if (start < 50) {
          setLoadingText('CATCHING RAYLIGHT...');
        } else if (start < 75) {
          setLoadingText('ALIGNING STARRY PATHS...');
        } else {
          setLoadingText('SEALING MEMORY VAULTS...');
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Monitor screen positions to highlight the simple floating scrollbar dock
  useEffect(() => {
    if (loading) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      
      const sections = [
        { id: 'prologue', offset: 0 },
        { id: 'chapter1', offset: document.getElementById('chapter1')?.offsetTop || 0 },
        { id: 'chapter2', offset: document.getElementById('chapter2')?.offsetTop || 0 },
        { id: 'chapter3', offset: document.getElementById('chapter3')?.offsetTop || 0 },
        { id: 'chapter4', offset: document.getElementById('chapter4')?.offsetTop || 0 },
        { id: 'letter', offset: document.getElementById('letter')?.offsetTop || 0 },
      ];

      const current = [...sections].reverse().find((s) => scrollY >= s.offset - height / 3);
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'prologue') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen select-none font-sans bg-warm-black overflow-hidden selection:bg-luxury-rose/30 selection:text-white">
      {/* Floating Interactive Mouse Shine Spotlight (Desktop) */}
      <div 
        className="hidden md:block fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full glow-orb-rose blur-3xl opacity-30 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`
        }}
      />

      {/* LUXURY PRELOADER COVERSHEET */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(30px)', scale: 1.05 }}
            transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[999] flex flex-col justify-between p-12 md:p-16 bg-[#0A0A0A] items-center select-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #1A1714 0%, #0A0A0A 100%)',
            }}
          >
            {/* Soft decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 glow-orb-rose rounded-full filter blur-3xl opacity-50 animate-pulse" />

            <div className="flex flex-col items-center text-center mt-12 relative z-10">
              <Compass className="w-5 h-5 text-[#C29B93]/60 mb-3 animate-spin-slow" />
              <span className="font-mono text-[9px] tracking-[0.4em] text-[#C29B93]">L’ÉTOILE PRELUDE</span>
              <div className="h-[1px] w-6 bg-[#C29B93]/20 my-3" />
            </div>

            <div className="text-center relative z-10 flex flex-col items-center">
              <span className="font-mono text-[10px] tracking-[0.5em] text-[#C5A059] block mb-4 uppercase">
                {loadingText}
              </span>
              <h1 className="font-serif text-5xl md:text-6xl text-[#F5F2ED] font-extralight tracking-[0.2em] mb-3 uppercase text-glow">
                L’Étoile
              </h1>
              <p className="font-serif italic text-base text-[#C29B93] tracking-wider mb-6">
                “some memories deserve forever...”
              </p>
              
              {/* Elegant micro loading ribbon bar */}
              <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden relative mt-2">
                <motion.div 
                  className="absolute h-full left-0 bg-gradient-to-r from-[#C29B93] to-[#C5A059]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
              <span className="font-mono text-[9px] tracking-widest text-[#F5F2ED]/30 mt-3 block pl-2">
                {progress}% COMPLETE
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 text-center mt-auto relative z-10">
              <span className="font-mono text-[8px] tracking-[0.3em] text-[#FDFBF7]/20 uppercase">
                PRIVATE DIGITAL ARCHIVE FOR HER
              </span>
              <span className="font-sans text-[10px] tracking-wide text-[#C29B93]/40">
                A LUXURIOUS LOVE LETTER
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CORE DISPLAY WORK */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.6, delay: 0.1, ease: "easeOut" }}
          className="relative z-10 pb-36"
        >
          {/* THE ARTISTIC FLAIR CINEMATIC FRAMES */}
          <div className="fixed inset-0 border-[30px] lg:border-[40px] border-[#0A0A0A] pointer-events-none z-[80] hidden md:block" />
          <div className="fixed inset-0 border border-white/5 pointer-events-none z-[81] m-[30px] lg:m-[40px] hidden md:block" />

          {/* FLOATING SIDE NAVIGATION menu bar */}
          <div className="fixed left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-start gap-4 z-40 bg-zinc-950/45 backdrop-blur-xl px-3.5 py-6 rounded-full border border-white/5 shadow-2xl pl-4 pr-3">
            {[
              { id: 'prologue', label: 'Prologue' },
              { id: 'chapter1', label: 'Chapter I' },
              { id: 'chapter2', label: 'Chapter II' },
              { id: 'chapter3', label: 'Chapter III' },
              { id: 'chapter4', label: 'Chapter IV' },
              { id: 'letter', label: 'Unfold Letter' },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-400 border ${
                    activeSection === section.id 
                      ? 'bg-luxury-gold border-luxury-gold scale-125 shadow-[0_0_8px_#C5A059]' 
                      : 'bg-transparent border-white/30 group-hover:border-[#C5A059]'
                  }`} 
                />
                <span 
                  className={`font-mono text-xs tracking-widest uppercase transition-all duration-400 ${
                    activeSection === section.id 
                      ? 'text-luxury-cream opacity-100 font-semibold shadow-sm' 
                      : 'text-white/40 opacity-0 group-hover:opacity-100 group-hover:pl-1'
                  }`}
                >
                  {section.label}
                </span>
              </button>
            ))}
          </div>

          {/* FLOATING TOP BRANDING BAR */}
          <div className="fixed top-0 inset-x-0 z-40 px-12 lg:px-16 py-8 flex justify-between items-center pointer-events-none select-none">
            <div className="flex items-center gap-2 pointer-events-auto cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Heart className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold/20 animate-pulse" />
              <span className="font-serif italic text-sm tracking-widest text-[#F5F2ED] font-medium text-glow-rose">L’Étoile</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-xs md:text-sm font-mono tracking-[0.3em] text-[#F5F2ED]/50 uppercase pointer-events-auto">
              <span className="cursor-pointer hover:text-luxury-gold transition-colors" onClick={() => scrollToSection('chapter1')}>01 Intro</span>
              <span className="cursor-pointer hover:text-luxury-gold transition-colors" onClick={() => scrollToSection('chapter2')}>02 Fragments</span>
              <span className="cursor-pointer hover:text-luxury-gold transition-colors" onClick={() => scrollToSection('chapter3')}>03 Eternal</span>
              <span className="cursor-pointer hover:text-luxury-gold transition-colors" onClick={() => scrollToSection('letter')}>04 Climax</span>
            </div>
          </div>

          {/* HERO INTRODUCTION SCREEN */}
          <div className="relative h-screen min-h-[640px] flex flex-col justify-center items-center px-6 text-center select-none">
            {/* Ambient deep rose aura backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb-rose pointer-events-none rounded-full filter blur-[100px] opacity-25" />
            <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] glow-orb-gold pointer-events-none rounded-full filter blur-[80px] opacity-15 animate-pulse-slow" />

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-luxury-gold animate-bounce-slow" />
                <span className="font-mono text-sm tracking-[0.4em] text-luxury-gold uppercase block">EST. MAY 2018</span>
              </div>
              
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-luxury-cream font-extralight tracking-[0.25em] ml-[0.25em] leading-tight select-none text-glow uppercase">
                L’Étoile
              </h1>
              
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C29B93] to-transparent my-6" />
              
              <p className="font-serif italic text-xl md:text-2xl text-[#C29B93]/90 tracking-widest font-light">
                “Every frame feels alive...”
              </p>

              <p className="font-sans text-sm sm:text-base tracking-widest text-[#F5F2ED]/50 max-w-md mx-auto mt-8 uppercase font-semibold leading-relaxed">
                PRIVATE ARCHIVAL COLLAGE & MEMORY SANCTUARY FOR DEAREST CHUBBS
              </p>

              {/* Bounce down scroll indicator */}
              <motion.button 
                onClick={() => scrollToSection('chapter1')}
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="mt-20 flex flex-col items-center gap-2 text-[#C29B93]/50 hover:text-luxury-rose transition-colors cursor-pointer group"
              >
                <span className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase">BEGIN TOUR</span>
                <ChevronDown className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* DYNAMIC TIME COUNTER DEVIATOR */}
          <div className="w-full relative z-20 px-6 py-10 mt-10 mb-12">
            <TimeCounter />
          </div>

          {/* CHAPTER COLUMNS */}

          {/* GROUP 1: The Booking Album */}
          <section id="chapter1" className="min-h-screen py-16 scroll-mt-20">
            <MemoryBook />
          </section>

          {/* GROUP 2: Scattered Polaroids */}
          <section id="chapter2" className="min-h-screen py-16 scroll-mt-20">
            <ScatteredPolaroids />
          </section>

          {/* GROUP 3: Timeline Constellation */}
          <section id="chapter3" className="min-h-screen py-16 scroll-mt-20">
            <CinematicTimeline />
          </section>

          {/* GROUP 4: Fullscreen Immersive Exhibition */}
          <section id="chapter4" className="min-h-screen py-16 scroll-mt-20">
            <ImmersiveGallery />
          </section>

          {/* FINAL LEVEL: The Sealed Love Letter */}
          <section id="letter" className="min-h-screen py-16 scroll-mt-20 flex flex-col justify-center">
            <SealedLetter />
          </section>

          {/* MEMORIAL FOOTER */}
          <footer className="w-full text-center py-12 relative z-20 border-t border-white/[0.03] mt-24">
            <div className="max-w-md mx-auto flex flex-col items-center gap-3">
              <Heart className="w-4 h-4 text-luxury-rose fill-luxury-rose/20 animate-spin-slow" />
              <p className="font-serif italic text-lg text-luxury-cream/80 pl-1">“Made of moments, shared forever under our constellations.”</p>
              <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#C29B93]/55 uppercase mt-2 font-medium">
                Handcrafted for Chubbs with Pure Devotion • 2026
              </span>
            </div>
          </footer>

        </motion.div>
      )}
    </div>
  );
}
