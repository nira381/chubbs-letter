import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Music, Play, Pause, ChevronRight, ChevronLeft } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // High luxury royalty free calm piano solo (Mixkit Beautiful Dream)
  const MUSIC_URL = 'https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3';

  useEffect(() => {
    // Lazy load the audio element to prevent server crashing or pre-flight issues
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Play interrupted or blocked by browser policies:", err));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMute = !isMuted;
    setIsMuted(newMute);
    audioRef.current.muted = newMute;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.muted = false;
    }
  };

  return (
    <div id="audio-ambience-player" className="fixed bottom-6 right-6 z-50 flex items-center">
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded-player"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="flex items-center gap-4 px-4 py-3 glassmorphism rounded-full shadow-2xl origin-right border border-white/5 pr-2"
          >
            {/* Collapse Trigger */}
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-white/40 hover:text-white/80 transition-colors p-1"
              title="Minimize Player"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Rotating Disc Indicator */}
            <div className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-luxury-gray border border-white/10 ${isPlaying ? 'animate-spin-slow' : ''}`}>
              <Music className="w-3.5 h-3.5 text-luxury-rose" />
              {isPlaying && (
                <div className="absolute inset-0 rounded-full border border-dashed border-luxury-rose/40 animate-ping opacity-60" />
              )}
            </div>

            {/* Track Info */}
            <div className="flex flex-col select-none pr-1">
              <span className="font-serif text-xs text-luxury-cream tracking-wide font-medium italic">Gymnopédie No.1</span>
              <span className="font-sans text-[8px] tracking-widest text-white/30 uppercase mt-0.5">Atmosphere</span>
            </div>

            {/* Simulated Live Visualizer spectrum bars */}
            <div className="flex items-end gap-0.5 h-4 w-6 px-1">
              {[0.4, 0.9, 0.6, 0.8, 0.3].map((val, i) => (
                <div 
                  key={i} 
                  className="w-[2px] bg-luxury-rose rounded-full transition-all duration-300"
                  style={{
                    height: isPlaying ? `${val * 100}%` : '20%',
                    animation: isPlaying ? `floatUp 1s ease-in-out infinite alternate` : undefined,
                    animationDelay: `${i * 0.15}s`
                  }}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-luxury-cream transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
              </button>

              <button 
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/12 border border-white/5 flex items-center justify-center text-white/50 hover:text-white/90 transition-colors cursor-pointer"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>

              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.05" 
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-[2px] bg-white/10 accent-luxury-rose rounded-full cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed-trigger"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            onClick={() => setIsExpanded(true)}
            className="flex items-center justify-center w-12 h-12 rounded-full glassmorphism border border-white/5 shadow-2xl hover:border-luxury-rose/50 text-luxury-cream transition-all group duration-300 pointer-events-auto"
            title="Configure Soundtrack"
          >
            <ChevronLeft className="w-4 h-4 text-white/30 absolute left-1 group-hover:left-0 transition-all" />
            <div className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-warm-black/20 ${isPlaying ? 'animate-spin-slow' : ''}`}>
              <Music className="w-4 h-4 text-luxury-rose group-hover:scale-110 transition-transform" />
              {isPlaying && (
                <div className="absolute inset-0 rounded-full border border-dashed border-luxury-rose/40 animate-ping opacity-60" />
              )}
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
