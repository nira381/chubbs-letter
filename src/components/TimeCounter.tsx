import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass } from 'lucide-react';

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function TimeCounter() {
  // Classic anniversary benchmark (e.g. May 29, 2018)
  const ANNIVERSARY_DATE = new Date('2016-05-29T00:00:00'); 
  const [elapsed, setElapsed] = useState<TimeElapsed>({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = now.getTime() - ANNIVERSARY_DATE.getTime();

      if (difference <= 0) return;

      // Dynamic date intervals
      let years = now.getFullYear() - ANNIVERSARY_DATE.getFullYear();
      let months = now.getMonth() - ANNIVERSARY_DATE.getMonth();
      let days = now.getDate() - ANNIVERSARY_DATE.getDate();
      
      if (days < 0) {
        months -= 1;
        // Approximation of days in previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const diffSecs = Math.floor(difference / 1000);
      const hours = Math.floor((diffSecs / 3600) % 24);
      const minutes = Math.floor((diffSecs / 60) % 60);
      const seconds = diffSecs % 60;

      setElapsed({ years, months, days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="anniversary-counter" className="relative max-w-3xl mx-auto text-center px-6 py-12 glassmorphism rounded-3xl border border-white/5 shadow-2xl overflow-hidden-g bg-warm-black/80">
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-luxury-rose/30 to-transparent" />
      <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-64 h-64 glow-orb-rose rounded-full pointer-events-none filter blur-2xl opacity-60" />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 mb-3">
          <Compass className="w-4 h-4 text-luxury-rose animate-spin-slow opacity-80" />
          <span className="font-mono text-sm tracking-[0.3em] text-luxury-rose uppercase">SHARED HORIZONS</span>
        </div>
        
        <h3 className="font-serif text-4xl md:text-5xl text-luxury-cream font-light mb-3 italic">
          “Time stopped here...”
        </h3>
        <p className="text-base font-sans tracking-wide text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
          Counting every solar orbit, lunar cycle, and microsecond spent revolving around the same center of gravity.
        </p>

        {/* Dynamic Counter Display Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 w-full">
          {[
            { value: elapsed.years, label: "years" },
            { value: elapsed.months, label: "months" },
            { value: elapsed.days, label: "days" },
            { value: elapsed.hours, label: "hours" },
            { value: elapsed.minutes, label: "minutes" },
            { value: elapsed.seconds, label: "seconds" }
          ].map((item, index) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] backdrop-blur-sm shadow-inner group hover:border-luxury-rose/20 transition-all duration-500"
            >
              <span className="font-mono text-4xl md:text-5xl text-luxury-cream font-light tracking-tight group-hover:text-luxury-rose transition-colors duration-500 text-glow">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mt-2 font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-1.5 text-xs font-mono tracking-widest text-luxury-gold/75">
          <Sparkles className="w-3 h-3 text-luxury-gold animate-pulse" />
          <span>OUR PERPETUAL TIMELINE</span>
        </div>
      </motion.div>
    </div>
  );
}
