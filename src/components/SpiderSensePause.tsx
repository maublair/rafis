import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, AlertTriangle, Radio, ShieldAlert, Terminal, Lock, ArrowRight } from 'lucide-react';
import { MultiverseTheme } from '../multiverses';
import { playSpiderSenseSound, playGlitchSound } from '../utils/audio';

interface SpiderSensePauseProps {
  onComplete: () => void;
  soundEnabled: boolean;
  multiverse?: MultiverseTheme;
  step?: string;
}

export const SpiderSensePause: React.FC<SpiderSensePauseProps> = ({
  onComplete,
  soundEnabled,
  multiverse,
  step = 'spider_sense',
}) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const isAlertMode = step === 'spider_sense_alert';

  useEffect(() => {
    // Automatic charge sequence over 2.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (soundEnabled && progress % 25 === 0 && progress < 100) {
      playSpiderSenseSound();
    }
  }, [progress, soundEnabled]);

  const handleManualBoost = () => {
    if (soundEnabled) {
      playGlitchSound();
    }
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([60, 40, 90]);
      } catch (e) {
        // Safe fallback
      }
    }
    setProgress((prev) => {
      const next = Math.min(100, prev + 30);
      if (next >= 100) {
        setIsReady(true);
      }
      return next;
    });
  };

  const primaryColor = multiverse?.primaryColor || '#dc2626';
  const heroName = multiverse?.heroName || 'Spider-Man';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center max-w-xl w-full mx-auto px-4 text-center z-10"
    >
      {/* 1. MODO: SENTIDO ARÁCNIDO ACTIVADO (ALERTA PRE-VILLANO) */}
      {isAlertMode ? (
        <>
          {/* Unique Universe Spider-Sense Emblem */}
          <div className="relative mb-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-red-600/40 rounded-full blur-3xl animate-ping" />

            <div
              className="relative w-40 h-40 bg-black border-4 rounded-3xl flex items-center justify-center animate-spider-sense shadow-[0_0_35px_rgba(239,68,68,0.8)] rotate-2"
              style={{ borderColor: multiverse?.borderShadowColor || '#ef4444' }}
            >
              {/* Electric/Neonic Spider-Sense Waves per Universe */}
              <svg className="absolute inset-0 w-full h-full p-2 pointer-events-none" viewBox="0 0 100 100">
                <path d="M 5 50 Q 25 10 50 50 T 95 50" fill="none" stroke={multiverse?.accentColor || '#facc15'} strokeWidth="4" strokeDasharray="4,2" />
                <path d="M 50 5 Q 90 25 50 50 T 50 95" fill="none" stroke={multiverse?.secondaryAccent || '#00f0ff'} strokeWidth="3" strokeDasharray="3,3" />
                <polygon points="50,15 58,35 80,35 62,48 68,70 50,55 32,70 38,48 20,35 42,35" fill="none" stroke="#ffffff" strokeWidth="2" />
              </svg>

              <ShieldAlert className="w-18 h-18 text-yellow-300 relative z-10 animate-pulse" />
            </div>
          </div>

          <div
            className="text-black font-black uppercase tracking-wider px-5 py-2 -rotate-1 border-3 border-black shadow-[4px_4px_0px_#000] mb-4 text-sm sm:text-base font-mono inline-flex items-center gap-2"
            style={{ backgroundColor: multiverse?.accentColor || '#facc15' }}
          >
            <AlertTriangle className="w-5 h-5 text-black" />
            <span>{multiverse?.spiderSenseTitle || '⚡ ¡ALERTA DE SENTIDO ARÁCNIDO! ⚡'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 uppercase tracking-tight glitch-text" data-text="¡PELIGRO MULTIVERSAL DETECTADO!">
            ¡PELIGRO MULTIVERSAL DETECTADO!
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base font-semibold mb-6 max-w-md bg-black/60 p-3 rounded-xl border border-zinc-800">
            {multiverse?.spiderSenseEffect || 'Ondas eléctricas de alerta detectando un desafío inminente.'}
          </p>
        </>
      ) : (
        /* 2. MODO: TRANSMISIÓN DE ARCHIVO SECRETO DE PAME & MAU */
        <>
          <div className="relative mb-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl animate-pulse" />

            <div className="relative w-36 h-36 bg-zinc-950 border-4 border-yellow-400 rounded-3xl flex items-center justify-center shadow-[6px_6px_0px_#000000]">
              <Lock className="w-14 h-14 text-yellow-400" />
            </div>
          </div>

          <div className="bg-yellow-400 text-black font-black uppercase tracking-widest px-4 py-1.5 rotate-1 border-2 border-black shadow-[4px_4px_0px_#000] mb-4 text-xs font-mono inline-flex items-center gap-2">
            <Terminal className="w-4 h-4 text-black" />
            <span>TRANSMISIÓN DE ARCHIVO SECRETO // CÓDIGO PAME & MAU</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white mb-2 uppercase tracking-tight glitch-text" data-text="Desbloqueando Registro Arácnido...">
            Desbloqueando Registro Arácnido...
          </h2>

          <p className="text-zinc-300 text-xs sm:text-sm font-medium mb-6 max-w-md bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
            Mensaje confidencial grabado por tu Mamá (Pame) y tu Papá (Mau) para la base de datos del Multiverso.
          </p>
        </>
      )}

      {/* Bar Progress Indicator */}
      <div className="w-full bg-black border-3 border-zinc-700 rounded-2xl p-3 mb-6 shadow-[6px_6px_0px_#000] relative overflow-hidden">
        <div className="flex justify-between items-center text-xs font-mono font-bold text-yellow-300 mb-1 px-1">
          <span>{isAlertMode ? 'ENERGÍA DEL SENTIDO' : 'DECODIFICANDO TRANSMISIÓN PAME & MAU'}</span>
          <span>{progress}%</span>
        </div>

        <div className="h-6 w-full bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 via-rose-600 to-cyan-400"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
        {!isReady ? (
          <button
            onClick={handleManualBoost}
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-rose-600 to-yellow-500 text-black font-black text-sm uppercase tracking-wider border-3 border-black rounded-xl shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-current" />
            <span>¡Forzar Conexión Arácnida! (+30%)</span>
          </button>
        ) : (
          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            onClick={onComplete}
            className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ef4444] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{isAlertMode ? '¡ENFRENTAR AL VILLANO!' : '¡LEER TRANSMISIÓN DE PAME & MAU!'}</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};
