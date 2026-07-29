import React from 'react';
import { Volume2, VolumeX, Zap, Globe } from 'lucide-react';
import { ScreenStep } from '../types';
import { MultiverseTheme } from '../multiverses';

interface ComicHeaderProps {
  currentStep: ScreenStep;
  soundEnabled: boolean;
  onToggleSound: () => void;
  stepIndex: number;
  totalSteps: number;
  multiverse: MultiverseTheme;
  multiverseIndex: number;
  onSelectMultiverse: (index: number) => void;
}

export const ComicHeader: React.FC<ComicHeaderProps> = ({
  soundEnabled,
  onToggleSound,
  stepIndex,
  totalSteps,
  multiverse,
  multiverseIndex,
  onSelectMultiverse,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-2 sm:px-4 py-2 sm:py-3 flex flex-wrap items-center justify-between pointer-events-auto bg-gradient-to-b from-black via-black/90 to-transparent backdrop-blur-md border-b border-zinc-900 gap-2">
      {/* Left: Current Dimension Tag */}
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-rose-600 via-purple-600 to-yellow-500 border-2 border-black px-2 sm:px-2.5 py-1 -rotate-1 shadow-[3px_3px_0px_#000] flex items-center gap-1.5 rounded-sm">
          <Zap className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black tracking-wider text-white uppercase font-mono">
            {multiverse.dimensionTag}
          </span>
        </div>
      </div>

      {/* Center: Multiverse Direct Selector Tabs */}
      <div className="flex items-center gap-1 bg-zinc-900/90 border border-zinc-800 p-1 rounded-lg overflow-x-auto max-w-full">
        <Globe className="w-3.5 h-3.5 text-yellow-400 ml-1 hidden xs:block" />
        {[0, 1, 2, 3, 4].map((idx) => (
          <button
            key={idx}
            onClick={() => onSelectMultiverse(idx)}
            className={`px-2 py-0.5 text-[10px] sm:text-xs font-black uppercase rounded transition-all font-mono whitespace-nowrap cursor-pointer ${
              idx === multiverseIndex
                ? 'bg-yellow-400 text-black shadow-[2px_2px_0px_#000]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            M{idx + 1}
          </button>
        ))}
      </div>

      {/* Right: Progress & Sound Toggle */}
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex items-center gap-1.5 bg-black/70 border border-purple-500/40 px-2.5 py-1 rounded-full">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === stepIndex
                  ? 'w-5 bg-gradient-to-r from-rose-500 to-yellow-400 shadow-[0_0_8px_#ff0055]'
                  : i < stepIndex
                  ? 'w-1.5 bg-purple-500'
                  : 'w-1.5 bg-gray-700'
              }`}
            />
          ))}
        </div>

        <button
          onClick={onToggleSound}
          className={`flex items-center gap-1 px-2.5 py-1 rounded border-2 border-black text-[10px] sm:text-xs font-black uppercase transition-all transform active:scale-95 shadow-[2px_2px_0px_#000] cursor-pointer ${
            soundEnabled
              ? 'bg-yellow-400 text-black hover:bg-yellow-300'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
          title={soundEnabled ? 'Sonido Activado' : 'Sonido Desactivado'}
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-black" />
              <span className="font-mono">SFX</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-mono">MUTED</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
