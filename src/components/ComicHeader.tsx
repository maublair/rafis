import React from 'react';
import { Volume2, VolumeX, Zap } from 'lucide-react';
import { ScreenStep } from '../types';
import { MultiverseTheme } from '../multiverses';

interface ComicHeaderProps {
  currentStep: ScreenStep;
  soundEnabled: boolean;
  onToggleSound: () => void;
  stepIndex: number;
  totalSteps: number;
  multiverse: MultiverseTheme;
}

export const ComicHeader: React.FC<ComicHeaderProps> = ({
  soundEnabled,
  onToggleSound,
  stepIndex,
  totalSteps,
  multiverse,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-4 py-3 flex items-center justify-between pointer-events-auto bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-xs">
      {/* Left: Dimension Badge */}
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-rose-600 via-purple-600 to-yellow-500 border-2 border-black px-2 sm:px-2.5 py-1 -rotate-1 shadow-[3px_3px_0px_#000] flex items-center gap-1.5 rounded-sm">
          <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
          <span className="text-[11px] sm:text-xs md:text-sm font-black tracking-wider text-white uppercase font-mono">
            {multiverse.dimensionTag}
          </span>
        </div>
      </div>

      {/* Center Progress Indicators */}
      <div className="hidden md:flex items-center gap-1.5 bg-black/70 border border-purple-500/40 px-3 py-1 rounded-full">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-2 transition-all duration-300 rounded-full ${
              i === stepIndex
                ? 'w-6 bg-gradient-to-r from-rose-500 to-yellow-400 shadow-[0_0_8px_#ff0055]'
                : i < stepIndex
                ? 'w-2 bg-purple-500'
                : 'w-2 bg-gray-700'
            }`}
          />
        ))}
      </div>

      {/* Right: Sound Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleSound}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border-2 border-black text-xs font-black uppercase transition-all transform active:scale-95 shadow-[3px_3px_0px_#000] cursor-pointer ${
            soundEnabled
              ? 'bg-yellow-400 text-black hover:bg-yellow-300'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
          title={soundEnabled ? 'Sonido Activado' : 'Sonido Desactivado'}
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-4 h-4 text-black animate-bounce" />
              <span className="hidden xs:inline font-mono">SFX ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-zinc-400" />
              <span className="hidden xs:inline font-mono">MUTED</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
