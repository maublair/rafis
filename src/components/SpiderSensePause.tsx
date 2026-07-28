import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, AlertTriangle, Radio, Sparkles, ArrowRight } from 'lucide-react';
import { playSpiderSenseSound, playGlitchSound } from '../utils/audio';

interface SpiderSensePauseProps {
  onComplete: () => void;
  soundEnabled: boolean;
}

export const SpiderSensePause: React.FC<SpiderSensePauseProps> = ({ onComplete, soundEnabled }) => {
  const [progress, setProgress] = useState(0);
  const [isCharging, setIsCharging] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Automatic charge sequence over 3.2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + 4;
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (soundEnabled && progress % 20 === 0 && progress < 100) {
      playSpiderSenseSound();
    }
  }, [progress, soundEnabled]);

  const handleManualBoost = () => {
    if (soundEnabled) {
      playGlitchSound();
    }
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([50, 30, 80]);
      } catch (e) {
        // Safe fallback
      }
    }
    setProgress((prev) => {
      const next = Math.min(100, prev + 25);
      if (next >= 100) {
        setIsReady(true);
      }
      return next;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center max-w-lg w-full mx-auto px-4 text-center z-10"
    >
      {/* Spider Sense Graphic Pulse */}
      <div className="relative mb-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-rose-600/30 rounded-full blur-2xl animate-pulse" />

        {/* Animated Spidey Eye / Spider-Sense Symbol */}
        <div className="relative w-36 h-36 bg-black border-4 border-rose-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_#ff0055] animate-spider-sense rotate-3">
          {/* Halftone Overlay */}
          <div className="absolute inset-0 bg-halftone opacity-40 rounded-xl" />

          {/* Electric Arcs SVG */}
          <svg className="absolute inset-0 w-full h-full p-2 pointer-events-none" viewBox="0 0 100 100">
            <path
              d="M 10 20 L 30 10 L 25 40 L 45 35 L 20 80 L 35 50 L 15 55 Z"
              fill="#ffe600"
              opacity="0.9"
            />
            <path
              d="M 90 20 L 70 15 L 75 45 L 55 40 L 80 85 L 65 55 L 85 60 Z"
              fill="#00f0ff"
              opacity="0.9"
            />
          </svg>

          <Radio className="w-16 h-16 text-yellow-300 relative z-10 animate-bounce" />
        </div>
      </div>

      {/* Spider Sense Warning Banner */}
      <div className="bg-yellow-400 text-black font-black uppercase tracking-wider px-4 py-1.5 -rotate-2 border-2 border-black shadow-[4px_4px_0px_#000] mb-4 text-xs sm:text-sm font-mono inline-flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-black" />
        <span>¡ALERTA DE SENTIDO ARÁCNIDO!</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 uppercase tracking-tight glitch-text" data-text="Cargando Frecuencia Multiversal...">
        Cargando Frecuencia Multiversal...
      </h2>

      <p className="text-purple-300 text-sm sm:text-base font-medium mb-6 max-w-xs">
        Haciendo una pausa dramática para sintonizar el siguiente mensaje de papá...
      </p>

      {/* Energy Progress Meter */}
      <div className="w-full bg-black border-3 border-rose-600 rounded-xl p-2 mb-6 shadow-[6px_6px_0px_#000] relative overflow-hidden">
        <div className="flex justify-between items-center text-xs font-mono font-bold text-yellow-300 mb-1 px-1">
          <span>FRECUENCIA DE SENTIDO</span>
          <span>{progress}%</span>
        </div>

        <div className="h-6 w-full bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-rose-600 via-purple-600 to-yellow-400"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
          <div className="absolute inset-0 bg-halftone opacity-30" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
        {!isReady ? (
          <button
            onClick={handleManualBoost}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-rose-600 text-white font-black text-sm uppercase tracking-wider border-2 border-black rounded-xl shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-yellow-300" />
            <span>¡Acelerar Frecuencia! (+25%)</span>
          </button>
        ) : (
          <motion.button
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            onClick={onComplete}
            className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ff0055] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3"
          >
            <span>¡LISTO! Ver el Revelado</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};
