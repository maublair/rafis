import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Sparkles, Zap, ShieldAlert, RotateCcw, Share2, Check, Music } from 'lucide-react';
import { ScreenStep } from '../types';
import { MultiverseTheme } from '../multiverses';
import { ComicCard } from './ComicCard';
import { playWhooshSound, playSpiderPunkGuitar, playEpicChords, playCelebrationSound } from '../utils/audio';

interface ScreenContentProps {
  currentStep: ScreenStep;
  onNext: () => void;
  onRestartMultiverse: () => void;
  soundEnabled: boolean;
  multiverse: MultiverseTheme;
}

export const ScreenContent: React.FC<ScreenContentProps> = ({
  currentStep,
  onNext,
  onRestartMultiverse,
  soundEnabled,
  multiverse,
}) => {
  const [copied, setCopied] = useState(false);
  const [heartClicked, setHeartClicked] = useState(0);

  const t = multiverse.texts;

  const handleNextStep = () => {
    if (soundEnabled) {
      if (currentStep === 'comic_twist') {
        playSpiderPunkGuitar();
      } else if (currentStep.startsWith('deep_')) {
        playEpicChords();
      } else if (currentStep === 'final') {
        playCelebrationSound();
      } else {
        playWhooshSound();
      }
    }
    onNext();
  };

  const handleHeartClick = () => {
    setHeartClicked((prev) => prev + 1);
    if (soundEnabled) {
      playSpiderPunkGuitar();
      playCelebrationSound();
    }
  };

  const copyMessageText = () => {
    const text = `⚡ MENSAJE DEL MULTIVERSO PARA RAFIS DE TU MAMÁ Y TU PAPÁ ⚡\n\n` +
      `${t.deep_1.mainQuote}\n\n` +
      `${t.deep_2.mainQuote}\n\n` +
      `${t.deep_sadness.mainQuote}\n\n` +
      `${t.deep_fear.mainQuote}\n\n` +
      `${t.deep_choice.mainQuote}\n\n` +
      `${t.deep_gods.mainQuote}\n\n` +
      `TE AMAMOS, RAFIS ❤️\nDE TU MAMÁ Y TU PAPÁ en todas las dimensiones del Multiverso.\n(${multiverse.dimensionTag})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // 1. PANTALLA INICIAL (INTRO)
  if (currentStep === 'intro') {
    return (
      <ComicCard badgeText={multiverse.badgeText} badgeColor="yellow" multiverse={multiverse}>
        {/* Multiverse Spider Mask Art */}
        <motion.div
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: [1, 1.05, 1], rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 flex items-center justify-center"
        >
          {/* Neon Glow Aura */}
          <div className="absolute inset-0 bg-rose-600/40 rounded-full blur-2xl animate-pulse" />

          {/* Spider-Man Suit Emblem */}
          <div className="relative z-10 w-full h-full bg-black border-4 border-rose-600 rounded-3xl p-4 flex items-center justify-center shadow-[6px_6px_0px_#ff0055]">
            <svg className="w-24 h-24 text-rose-500 filter drop-shadow-[0_0_12px_#ff0055]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M 15 35 Q 40 25 45 60 Q 30 55 15 35 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />
              <path d="M 85 35 Q 60 25 55 60 Q 70 55 85 35 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />
              <path d="M 50 30 L 45 45 L 35 40 L 42 50 L 30 65 L 45 58 L 50 75 L 55 58 L 70 65 L 58 50 L 65 40 L 55 45 Z" fill={multiverse.primaryColor || '#ff0055'} />
            </svg>
          </div>

          <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 border border-black rotate-12 shadow-[2px_2px_0px_#000]">
            MAMÁ & PAPÁ
          </div>
        </motion.div>

        {/* Dynamic Main Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-center text-white mb-4 uppercase tracking-tight leading-tight glitch-text" data-text={t.intro.title}>
          {t.intro.title}
        </h1>

        <p className="text-zinc-300 text-xs sm:text-base text-center font-medium mb-8 max-w-md">
          {t.intro.subtitle}
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className={`w-full px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ffe600] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 group cursor-pointer`}
          >
            <span>{t.intro.button}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 2. PANTALLA 2 (PERSON)
  if (currentStep === 'person') {
    return (
      <ComicCard badgeText={`${multiverse.dimensionTag} // TU ESENCIA`} badgeColor="cyan" multiverse={multiverse}>
        {/* Spider Hero Graphic */}
        <div className="relative mb-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-purple-900 to-rose-600 border-4 border-cyan-400 flex items-center justify-center p-2 shadow-[0_0_25px_#00f0ff] overflow-hidden">
            <img
              src={multiverse.heroGif}
              alt={multiverse.heroName}
              className="w-full h-full object-cover rounded-full border-2 border-black"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <Sparkles className="w-10 h-10 text-yellow-300 absolute -bottom-2 -right-2 animate-bounce" />
          </div>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-center text-white mb-4 uppercase tracking-tight leading-tight glitch-text" data-text={t.person.title}>
          {t.person.title}
        </h2>

        <p className="text-purple-200 text-xs sm:text-base text-center font-medium mb-8 max-w-md">
          {t.person.subtitle}
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ff0055] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.person.button}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 3. PANTALLA 3 (REMATE CÓMICO MULTIVERSAL)
  if (currentStep === 'comic_twist') {
    return (
      <ComicCard badgeText={`ALERTA DEL MULTIVERSO // ${multiverse.heroName}`} badgeColor="yellow" multiverse={multiverse}>
        {/* Spider Hero Graphic */}
        <div className="relative mb-6 flex flex-col items-center">
          <div className="bg-yellow-400 text-black font-black px-3 py-1 border-2 border-black -rotate-3 shadow-[3px_3px_0px_#000] text-xs uppercase mb-3 animate-pulse">
            {t.comic_twist.badge}
          </div>

          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border-4 border-yellow-400 bg-black overflow-hidden shadow-[6px_6px_0px_#ff0055] p-2 relative">
            <img
              src={multiverse.heroGif}
              alt={multiverse.heroName}
              className="w-full h-full object-cover rounded-xl border border-zinc-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-gradient-to-t from-black via-zinc-900 to-rose-950 -z-1">
              <Music className="w-16 h-16 text-yellow-300 animate-bounce" />
            </div>
          </div>
        </div>

        {/* The Funny Phrase */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-center text-yellow-300 mb-6 uppercase tracking-tight leading-snug font-mono border-y-2 border-yellow-400 py-3 bg-black/80 px-4 rounded-xl shadow-[4px_4px_0px_#000]">
          {t.comic_twist.phrase}
        </h2>

        <p className="text-rose-300 text-xs sm:text-sm text-center font-bold mb-8 max-w-sm bg-rose-950/80 border border-rose-500/50 px-3 py-2 rounded-lg">
          {t.comic_twist.subtitle}
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ff0055] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.comic_twist.button}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 4. PANTALLA PROFUNDA 1 (EL CAMINO)
  if (currentStep === 'deep_1') {
    return (
      <ComicCard badgeText="EL TIEMPO Y EL CAMINO" badgeColor="purple" multiverse={multiverse}>
        <div className="relative mb-3 flex items-center justify-center">
          <div className="bg-gradient-to-r from-purple-600 to-rose-600 text-white font-black text-xs px-3.5 py-1 rounded-full border border-yellow-300 shadow-[0_0_12px_#ffd700] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>REFLEXIÓN DE MAMÁ Y PAPÁ</span>
          </div>
        </div>

        <h2 className="text-base sm:text-xl md:text-2xl font-black text-center text-white mb-6 leading-relaxed font-mono bg-black/80 p-4 rounded-2xl border border-purple-500/50 shadow-[4px_4px_0px_#000]">
          {t.deep_1.mainQuote}
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
          <div className="bg-gradient-to-br from-rose-950/90 to-purple-950/90 border-2 border-rose-500 rounded-2xl p-4 flex flex-col justify-between shadow-[4px_4px_0px_#000]">
            <span className="text-yellow-400 font-mono text-xs font-bold uppercase tracking-wider">01 // EXPLORACIÓN</span>
            <div className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight my-2">
              {t.deep_1.c1Title}
            </div>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_1.c1Desc}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-950/90 to-zinc-950 border-2 border-cyan-400 rounded-2xl p-4 flex flex-col justify-between shadow-[4px_4px_0px_#000]">
            <span className="text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">02 // EXPERIENCIAS</span>
            <div className="text-xl sm:text-2xl font-black text-cyan-300 uppercase tracking-tight my-2">
              {t.deep_1.c2Title}
            </div>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_1.c2Desc}</p>
          </div>

          <div className="bg-gradient-to-br from-zinc-950 to-purple-900/90 border-2 border-purple-500 rounded-2xl p-4 flex flex-col justify-between shadow-[4px_4px_0px_#000]">
            <span className="text-purple-300 font-mono text-xs font-bold uppercase tracking-wider">03 // EMOCIONES</span>
            <div className="text-xl sm:text-2xl font-black text-purple-300 uppercase tracking-tight my-2">
              {t.deep_1.c3Title}
            </div>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_1.c3Desc}</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 via-rose-500 to-purple-600 text-black border-2 border-black rounded-2xl p-4 flex flex-col justify-between shadow-[4px_4px_0px_#000]">
            <span className="text-black font-mono text-xs font-black uppercase tracking-wider">04 // TU LEYENDA</span>
            <div className="text-lg sm:text-xl font-black text-black uppercase tracking-tight my-1">
              {t.deep_1.c4Title}
            </div>
            <p className="text-black font-bold text-xs">{t.deep_1.c4Desc}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ffe600] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_1.button}</span>
            <ArrowRight className="w-5 h-5 text-yellow-300" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 5. PANTALLA PROFUNDA 2 (TUS SUPERPODERES)
  if (currentStep === 'deep_2') {
    return (
      <ComicCard badgeText="TUS SUPERPODERES ARÁCNIDOS" badgeColor="yellow" multiverse={multiverse}>
        <div className="relative mb-3 flex items-center justify-center">
          <div className="bg-gradient-to-r from-yellow-400 to-rose-600 text-black font-black text-xs px-3.5 py-1 rounded-full border border-black shadow-[0_0_12px_#ff0055] uppercase tracking-widest flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-black" />
            <span>LO QUE MAMÁ Y PAPÁ VEN EN TI</span>
          </div>
        </div>

        <h2 className="text-base sm:text-xl md:text-2xl font-black text-center text-yellow-300 mb-6 leading-relaxed font-mono bg-black/80 p-4 rounded-2xl border border-yellow-400/50 shadow-[4px_4px_0px_#000]">
          {t.deep_2.mainQuote}
        </h2>

        <div className="grid grid-cols-2 gap-3 w-full mb-8">
          <div className="bg-rose-950/90 border-2 border-rose-500 rounded-2xl p-3.5 sm:p-4 shadow-[4px_4px_0px_#000]">
            <div className="text-xs font-mono text-rose-300 font-bold mb-1">PODER #1</div>
            <div className="text-base sm:text-xl font-black text-white uppercase tracking-tight">
              {t.deep_2.p1Title}
            </div>
            <p className="text-zinc-300 text-[11px] sm:text-xs font-medium mt-1">{t.deep_2.p1Desc}</p>
          </div>

          <div className="bg-purple-950/90 border-2 border-purple-400 rounded-2xl p-3.5 sm:p-4 shadow-[4px_4px_0px_#000]">
            <div className="text-xs font-mono text-purple-300 font-bold mb-1">PODER #2</div>
            <div className="text-base sm:text-xl font-black text-purple-300 uppercase tracking-tight">
              {t.deep_2.p2Title}
            </div>
            <p className="text-zinc-300 text-[11px] sm:text-xs font-medium mt-1">{t.deep_2.p2Desc}</p>
          </div>

          <div className="bg-cyan-950/90 border-2 border-cyan-400 rounded-2xl p-3.5 sm:p-4 shadow-[4px_4px_0px_#000]">
            <div className="text-xs font-mono text-cyan-300 font-bold mb-1">PODER #3</div>
            <div className="text-base sm:text-xl font-black text-cyan-300 uppercase tracking-tight">
              {t.deep_2.p3Title}
            </div>
            <p className="text-zinc-300 text-[11px] sm:text-xs font-medium mt-1">{t.deep_2.p3Desc}</p>
          </div>

          <div className="bg-yellow-400 text-black border-2 border-black rounded-2xl p-3.5 sm:p-4 shadow-[4px_4px_0px_#000]">
            <div className="text-xs font-mono font-black mb-1">PODER #4</div>
            <div className="text-base sm:text-xl font-black text-black uppercase tracking-tight">
              {t.deep_2.p4Title}
            </div>
            <p className="text-black font-bold text-[11px] sm:text-xs mt-1">{t.deep_2.p4Desc}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ff0055] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_2.button}</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 6. PANTALLA PROFUNDA 3 (TRISTEZA & RIVALES)
  if (currentStep === 'deep_sadness') {
    return (
      <ComicCard badgeText={`RIVALES & OBSTÁCULOS // ${multiverse.villainName.toUpperCase()}`} badgeColor="purple" multiverse={multiverse}>
        <div className="relative mb-3 flex flex-col items-center justify-center">
          <div className="bg-black text-rose-500 font-black text-xs px-3.5 py-1 rounded-full border-2 border-rose-600 shadow-[0_0_15px_#ff0055] uppercase tracking-widest flex items-center gap-1.5 mb-2">
            <ShieldAlert className="w-4 h-4 text-rose-500 animate-pulse" />
            <span>RIVALES Y DÍAS GRISES</span>
          </div>

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-rose-600 bg-black overflow-hidden shadow-[0_0_20px_rgba(255,0,85,0.4)] my-2">
            <img
              src={multiverse.secondaryGif}
              alt={multiverse.villainName}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-black text-center text-rose-400 mb-6 leading-relaxed font-mono bg-black/90 p-4 rounded-2xl border-2 border-rose-600/80 shadow-[0_0_20px_rgba(255,0,85,0.3),4px_4px_0px_#000]">
          {t.deep_sadness.mainQuote}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
          <div className="bg-gradient-to-br from-black via-zinc-950 to-rose-950 border-2 border-rose-600 rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
            <span className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">01 // OBSTÁCULOS</span>
            <div className="text-lg sm:text-xl font-black text-white uppercase tracking-tight my-1">
              {t.deep_sadness.c1Title}
            </div>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_sadness.c1Desc}</p>
          </div>

          <div className="bg-gradient-to-br from-black via-purple-950 to-zinc-950 border-2 border-purple-500 rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
            <span className="text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">02 // ESPACIO PROPIO</span>
            <div className="text-lg sm:text-xl font-black text-purple-300 uppercase tracking-tight my-1">
              {t.deep_sadness.c2Title}
            </div>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_sadness.c2Desc}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#00f0ff] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_sadness.button}</span>
            <ArrowRight className="w-5 h-5 text-cyan-300" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 7. PANTALLA PROFUNDA 4 (TEMOR & ANGUSTIA - PASAJEROS)
  if (currentStep === 'deep_fear') {
    return (
      <ComicCard badgeText="EL TEMOR ES PASAJERO" badgeColor="cyan" multiverse={multiverse}>
        <div className="relative mb-3 flex items-center justify-center">
          <div className="bg-gradient-to-r from-purple-800 to-cyan-600 text-white font-black text-xs px-3.5 py-1 rounded-full border border-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.5)] uppercase tracking-widest flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-yellow-300" />
            <span>TEMOR & ESPERANZA</span>
          </div>
        </div>

        <h2 className="text-base sm:text-xl md:text-2xl font-black text-center text-cyan-300 mb-6 leading-relaxed font-mono bg-black/90 p-4 rounded-2xl border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(0,240,255,0.3),4px_4px_0px_#000]">
          {t.deep_fear.mainQuote}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
          <div className="bg-zinc-950 border-2 border-cyan-400 rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
            <span className="text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">RECORDATORIO ESENCIAL</span>
            <div className="text-xl font-black text-white uppercase tracking-tight my-1">
              {t.deep_fear.c1Title}
            </div>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_fear.c1Desc}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-950 to-black border-2 border-yellow-400 rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
            <span className="text-yellow-300 font-mono text-xs font-bold uppercase tracking-wider">LA VERDAD</span>
            <div className="text-xl font-black text-yellow-300 uppercase tracking-tight my-1">
              {t.deep_fear.c2Title}
            </div>
            <p className="text-zinc-200 text-xs font-medium">{t.deep_fear.c2Desc}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 via-purple-600 to-rose-600 hover:from-cyan-300 hover:to-rose-500 text-black font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_fear.button}</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 8. PANTALLA PROFUNDA 5 (LA ELECCIÓN DE LA ALEGRÍA)
  if (currentStep === 'deep_choice') {
    return (
      <ComicCard badgeText="LA ELECCIÓN DE LA ALEGRÍA" badgeColor="purple" multiverse={multiverse}>
        <div className="relative mb-3 flex items-center justify-center">
          <div className="bg-gradient-to-r from-rose-500 to-yellow-400 text-black font-black text-xs px-3.5 py-1 rounded-full border border-black shadow-[0_0_15px_#ffe600] uppercase tracking-widest flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-black fill-black" />
            <span>ABRAZO DE MAMÁ Y PAPÁ</span>
          </div>
        </div>

        <h2 className="text-base sm:text-xl md:text-2xl font-black text-center text-white mb-6 leading-relaxed font-mono bg-black/80 p-5 rounded-2xl border border-purple-500/60 shadow-[4px_4px_0px_#000]">
          {t.deep_choice.mainQuote}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
          <div className="sm:col-span-2 bg-gradient-to-r from-yellow-400 via-rose-500 to-purple-600 text-black border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0px_#000] flex flex-col justify-between">
            <span className="font-mono text-xs font-black uppercase">SABIDURÍA DE MAMÁ Y PAPÁ</span>
            <div className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight my-2">
              {t.deep_choice.c1Title}
            </div>
            <p className="font-bold text-xs text-black/90">{t.deep_choice.c1Desc}</p>
          </div>

          <div className="bg-zinc-950 border-2 border-rose-500 rounded-2xl p-4 flex flex-col justify-between shadow-[4px_4px_0px_#000]">
            <span className="text-rose-400 font-mono text-xs font-bold uppercase">SIEMPRE CONTIGO</span>
            <div className="text-lg font-black text-rose-400 uppercase tracking-tight my-2">
              {t.deep_choice.c2Title}
            </div>
            <p className="text-zinc-300 text-xs">{t.deep_choice.c2Desc}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-rose-500 hover:from-yellow-300 hover:to-rose-400 text-black font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_choice.button}</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 9. PANTALLA PROFUNDA 6 (SEMIDIOCES GRIEGOS & SANGRE DE ORO)
  if (currentStep === 'deep_gods') {
    return (
      <ComicCard badgeText="NUESTRO LINAJE INMORTAL" badgeColor="yellow" multiverse={multiverse}>
        <div className="relative mb-3 flex items-center justify-center">
          <div className="bg-gradient-to-r from-yellow-300 via-amber-500 to-rose-600 text-black font-black text-xs px-4 py-1.5 rounded-full border border-black shadow-[0_0_20px_#ffd700] uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-black" />
            <span>LINAJE ÉPICO</span>
          </div>
        </div>

        <h2 className="text-base sm:text-xl md:text-2xl font-black text-center text-yellow-300 mb-6 uppercase tracking-tight leading-snug font-mono bg-black/90 p-5 rounded-2xl border-2 border-yellow-400 shadow-[0_0_25px_rgba(255,230,0,0.3),6px_6px_0px_#000] glitch-text" data-text={t.deep_gods.mainQuote}>
          {t.deep_gods.mainQuote}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
          <div className="bg-gradient-to-br from-amber-400 to-yellow-500 text-black border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
            <span className="font-mono text-xs font-black uppercase">ORIGEN MÍTICO</span>
            <div className="text-lg font-black text-black uppercase tracking-tight my-1">
              {t.deep_gods.c1Title}
            </div>
            <p className="font-bold text-xs text-black/90">{t.deep_gods.c1Desc}</p>
          </div>

          <div className="bg-gradient-to-br from-rose-950 via-zinc-950 to-black border-2 border-rose-500 rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
            <span className="text-rose-400 font-mono text-xs font-bold uppercase">VALOR NÓRDICO</span>
            <div className="text-lg font-black text-rose-300 uppercase tracking-tight my-1">
              {t.deep_gods.c2Title}
            </div>
            <p className="text-zinc-200 text-xs font-medium">{t.deep_gods.c2Desc}</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 via-amber-500 to-purple-600 text-black border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
            <span className="font-mono text-xs font-black uppercase">PODER INMORTAL</span>
            <div className="text-lg font-black text-black uppercase tracking-tight my-1">
              {t.deep_gods.c3Title}
            </div>
            <p className="font-bold text-xs text-black/90">{t.deep_gods.c3Desc}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base sm:text-xl uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ff0055] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_gods.button}</span>
            <ArrowRight className="w-6 h-6 text-black" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 10. PANTALLA FINAL - TE AMAMOS, RAFIS
  if (currentStep === 'final') {
    return (
      <ComicCard badgeText={`ABRAZO MULTIVERSAL // ${multiverse.dimensionTag}`} badgeColor="yellow" multiverse={multiverse}>
        {/* Top Sticker Tag */}
        <div className="bg-yellow-400 text-black font-black px-3 py-1 border-2 border-black -rotate-2 shadow-[3px_3px_0px_#000] text-xs uppercase mb-4 animate-pulse flex items-center gap-2">
          <Zap className="w-4 h-4 text-rose-600 fill-rose-600" />
          <span>⚡ {multiverse.badgeText} ⚡</span>
        </div>

        {/* Hero Visual Area & Heart Interaction */}
        <div className="relative mb-6 flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg">
          {/* Spider Hero Graphic Card */}
          <motion.div
            initial={{ scale: 0.8, rotate: -4 }}
            animate={{ scale: 1, rotate: -2 }}
            className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border-4 border-yellow-400 bg-black overflow-hidden shadow-[6px_6px_0px_#ff0055] p-2 flex-shrink-0"
          >
            <img
              src={multiverse.heroGif}
              alt={multiverse.heroName}
              className="w-full h-full object-cover rounded-xl border border-zinc-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute bottom-1 right-1 bg-rose-600 text-white font-black text-[10px] px-2 py-0.5 border border-black rounded shadow-[2px_2px_0px_#000]">
              {multiverse.heroName.split(' ')[0]}
            </div>
          </motion.div>

          {/* Heart Spider Emblem Button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 15 }}
            className="relative flex flex-col items-center"
          >
            <button
              onClick={handleHeartClick}
              className="group relative cursor-pointer focus:outline-none"
              title="¡Toca el corazón para enviar amor e impulsos del multiverso!"
            >
              <div className="absolute inset-0 bg-rose-600/50 rounded-full blur-3xl animate-pulse group-hover:scale-125 transition-transform" />
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-tr from-rose-600 via-purple-600 to-yellow-400 rounded-full border-4 border-black p-4 flex items-center justify-center shadow-[6px_6px_0px_#000] active:scale-90 transition-transform">
                <Heart className="w-14 h-14 text-yellow-300 fill-yellow-300 animate-bounce" />
              </div>

              {heartClicked > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -20 }}
                  key={heartClicked}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-black text-xs px-2.5 py-1 rounded-full border border-black shadow-[2px_2px_0px_#000] whitespace-nowrap"
                >
                  ❤️ ¡Abrazo de Mamá y Papá x{heartClicked}!
                </motion.div>
              )}
            </button>
            <span className="text-[11px] font-mono text-yellow-300 mt-2 font-bold uppercase tracking-wider">
              ¡Toca para abrazar!
            </span>
          </motion.div>
        </div>

        {/* GIANT BOLD TITLE "TE AMAMOS, RAFIS" */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-rose-500 to-cyan-400 mb-2 uppercase tracking-tight leading-none drop-shadow-[0_8px_12px_rgba(0,0,0,0.9)] glitch-text" data-text={t.final.title}>
          {t.final.title}
        </h1>

        {/* SIGNATURE SUBTITLE FROM MAMÁ Y PAPÁ */}
        <div className="text-xl sm:text-2xl font-black text-yellow-300 uppercase tracking-widest font-mono mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          ❤️ {t.final.subtitle} ❤️
        </div>

        {/* Multiverse Hero Quote Box */}
        <div className="bg-black/90 border-2 border-yellow-400 p-4 rounded-2xl shadow-[4px_4px_0px_#ff0055] mb-6 max-w-lg text-left">
          <p className="text-yellow-300 text-xs sm:text-sm font-mono font-bold leading-relaxed mb-2">
            "{multiverse.heroQuote}"
          </p>
          <div className="text-rose-400 text-xs font-bold font-mono text-right">
            — {multiverse.heroName.toUpperCase()} & TUS PAPÁS ❤️
          </div>
        </div>

        <p className="text-yellow-200 text-xs sm:text-sm text-center font-bold mb-8 max-w-md bg-black/70 border border-yellow-400/50 px-4 py-2.5 rounded-xl shadow-[4px_4px_0px_#000]">
          {t.final.footerText}
        </p>

        {/* Two Requested Main Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg">
          {/* 1. REINICIAR MULTIVERSO BUTTON */}
          <button
            onClick={onRestartMultiverse}
            className="w-full sm:w-1/2 px-5 py-4 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider border-3 border-black rounded-2xl shadow-[4px_4px_0px_#ffe600] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
            title="Siguiente universo arácnido con diferentes colores, enemigos y Spider-Man"
          >
            <RotateCcw className="w-5 h-5 text-yellow-300 animate-spin-slow" />
            <span>Reiniciar Multiverso</span>
          </button>

          {/* 2. GUARDAR MULTIVERSO DE BOLSILLO BUTTON */}
          <button
            onClick={copyMessageText}
            className="w-full sm:w-1/2 px-5 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs sm:text-sm uppercase tracking-wider border-3 border-black rounded-2xl shadow-[4px_4px_0px_#ff0055] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
            title="Copiar carta completa de amor de Mamá y Papá para guardar"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-green-700" />
                <span>¡Guardado de Bolsillo!</span>
              </>
            ) : (
              <>
                <Share2 className="w-5 h-5 text-black" />
                <span>Guardar Multiverso de Bolsillo</span>
              </>
            )}
          </button>
        </div>
      </ComicCard>
    );
  }

  return null;
};
