import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Sparkles, Zap, ShieldAlert, RotateCcw, Share2, Check, Music, Skull, Flame } from 'lucide-react';
import { ScreenStep } from '../types';
import { MultiverseTheme } from '../multiverses';
import { ComicCard } from './ComicCard';
import { HeroFullBodyPortrait, VillainFullBodyPortrait } from '../artwork';
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
      if (currentStep === 'comic_twist' || currentStep === 'villain_confrontation') {
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
    const text = `⚡ MENSAJE DEL MULTIVERSO PARA RAFIS DE TU MAMÁ (PAME) Y TU PAPÁ (MAU) ⚡\n\n` +
      `${t.deep_1.mainQuote}\n\n` +
      `${t.deep_2.mainQuote}\n\n` +
      `${t.deep_sadness.mainQuote}\n\n` +
      `${t.deep_fear.mainQuote}\n\n` +
      `${t.deep_choice.mainQuote}\n\n` +
      `${t.deep_gods.mainQuote}\n\n` +
      `TE AMAMOS, RAFIS ❤️\nDE TU MAMÁ (PAME) Y TU PAPÁ (MAU) en todas las dimensiones del Multiverso.\n(${multiverse.dimensionTag})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // 1. INTRO
  if (currentStep === 'intro') {
    return (
      <ComicCard badgeText={multiverse.badgeText} badgeColor="yellow" multiverse={multiverse}>
        <motion.div
          initial={{ scale: 0.9, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <HeroFullBodyPortrait heroId={multiverse.id} heroName={multiverse.heroName} />
        </motion.div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-center text-white mb-4 uppercase tracking-tight leading-tight glitch-text" data-text={t.intro.title}>
          {t.intro.title}
        </h1>

        <p className="text-zinc-300 text-xs sm:text-base text-center font-medium mb-8 max-w-md">
          {t.intro.subtitle}
        </p>

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

  // 2. PERSON
  if (currentStep === 'person') {
    return (
      <ComicCard badgeText={`${multiverse.dimensionTag} // TU ESENCIA`} badgeColor="cyan" multiverse={multiverse}>
        <div className="mb-4">
          <HeroFullBodyPortrait heroId={multiverse.id} heroName={multiverse.heroName} />
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-center text-white mb-4 uppercase tracking-tight leading-tight glitch-text" data-text={t.person.title}>
          {t.person.title}
        </h2>

        <p className="text-purple-200 text-xs sm:text-base text-center font-medium mb-8 max-w-md">
          {t.person.subtitle}
        </p>

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

  // 3. COMIC TWIST
  if (currentStep === 'comic_twist') {
    return (
      <ComicCard badgeText={`ALERTA DEL MULTIVERSO // ${multiverse.heroName}`} badgeColor="yellow" multiverse={multiverse}>
        <div className="mb-2 flex flex-col items-center">
          <div className="bg-yellow-400 text-black font-black px-3 py-1 border-2 border-black -rotate-3 shadow-[3px_3px_0px_#000] text-xs uppercase mb-3 animate-pulse">
            {t.comic_twist.badge}
          </div>
          <HeroFullBodyPortrait heroId={multiverse.id} heroName={multiverse.heroName} />
        </div>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-center text-yellow-300 mb-4 uppercase tracking-tight leading-snug font-mono border-y-2 border-yellow-400 py-3 bg-black/80 px-4 rounded-xl shadow-[4px_4px_0px_#000]">
          {t.comic_twist.phrase}
        </h2>

        <p className="text-rose-300 text-xs sm:text-sm text-center font-bold mb-8 max-w-sm bg-rose-950/80 border border-rose-500/50 px-3 py-2 rounded-lg">
          {t.comic_twist.subtitle}
        </p>

        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.comic_twist.button}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 4. VILLAIN CONFRONTATION (NUEVA PÁGINA ADICIONAL DE CÓMIC DEL SUPERVILLANO EN ACCIÓN)
  if (currentStep === 'villain_confrontation') {
    return (
      <ComicCard badgeText={t.villain_confrontation.badge} badgeColor="red" multiverse={multiverse}>
        <div className="mb-4 relative">
          <div className="absolute top-0 right-0 bg-red-600 text-white font-black text-[10px] px-2 py-1 border border-black rotate-12 z-20 shadow-[2px_2px_0px_#000]">
            VILLAIN MODE
          </div>
          <VillainFullBodyPortrait heroId={multiverse.id} villainName={multiverse.villainName} />
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-center text-red-500 mb-3 uppercase tracking-tight leading-tight glitch-text" data-text={t.villain_confrontation.title}>
          {t.villain_confrontation.title}
        </h2>

        {/* Comic Villain Quote Bubble */}
        <div className="bg-purple-950/90 border-3 border-purple-500 p-4 rounded-2xl mb-4 relative shadow-[6px_6px_0px_#000]">
          <div className="flex items-center gap-2 text-yellow-300 text-xs font-mono font-bold uppercase mb-1">
            <Skull className="w-4 h-4 text-red-500" />
            <span>DESAFÍO DEL SUPERVILLANO:</span>
          </div>
          <p className="text-white text-sm sm:text-base font-black italic">
            {t.villain_confrontation.villainQuote}
          </p>
        </div>

        {/* Parent Advice Box (Pame & Mau) */}
        <div className="bg-yellow-400 text-black p-4 rounded-2xl mb-8 border-3 border-black shadow-[6px_6px_0px_#dc2626]">
          <div className="flex items-center gap-2 text-black text-xs font-black uppercase mb-1">
            <ShieldAlert className="w-4 h-4 text-black" />
            <span>MENSAJE DE MAMÁ (PAME) Y PAPÁ (MAU):</span>
          </div>
          <p className="text-black text-xs sm:text-sm font-bold">
            {t.villain_confrontation.parentAdvice}
          </p>
        </div>

        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#facc15] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.villain_confrontation.button}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 5. DEEP 1
  if (currentStep === 'deep_1') {
    return (
      <ComicCard badgeText={`${multiverse.dimensionTag} // REFLEXIÓN 1`} badgeColor="rose" multiverse={multiverse}>
        <div className="mb-4">
          <HeroFullBodyPortrait heroId={multiverse.id} heroName={multiverse.heroName} />
        </div>

        <blockquote className="text-lg sm:text-2xl font-black text-center text-rose-300 italic mb-8 border-l-4 border-rose-500 pl-4 py-2 bg-rose-950/40 rounded-r-xl">
          {t.deep_1.mainQuote}
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-zinc-900/90 border-2 border-rose-500/60 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-yellow-400 font-black text-sm mb-1 uppercase">{t.deep_1.c1Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_1.c1Desc}</p>
          </div>
          <div className="bg-zinc-900/90 border-2 border-rose-500/60 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-cyan-300 font-black text-sm mb-1 uppercase">{t.deep_1.c2Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_1.c2Desc}</p>
          </div>
          <div className="bg-zinc-900/90 border-2 border-rose-500/60 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-purple-300 font-black text-sm mb-1 uppercase">{t.deep_1.c3Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_1.c3Desc}</p>
          </div>
          <div className="bg-zinc-900/90 border-2 border-rose-500/60 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-rose-400 font-black text-sm mb-1 uppercase">{t.deep_1.c4Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_1.c4Desc}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ffe600] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_1.button}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 6. DEEP 2
  if (currentStep === 'deep_2') {
    return (
      <ComicCard badgeText={`${multiverse.dimensionTag} // ACTITUD Y VALOR`} badgeColor="yellow" multiverse={multiverse}>
        <div className="mb-4">
          <HeroFullBodyPortrait heroId={multiverse.id} heroName={multiverse.heroName} />
        </div>

        <blockquote className="text-lg sm:text-2xl font-black text-center text-yellow-300 italic mb-8 border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-950/40 rounded-r-xl">
          {t.deep_2.mainQuote}
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-zinc-900/90 border-2 border-yellow-400/60 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-rose-500 font-black text-sm mb-1 uppercase">{t.deep_2.p1Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_2.p1Desc}</p>
          </div>
          <div className="bg-zinc-900/90 border-2 border-yellow-400/60 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-yellow-300 font-black text-sm mb-1 uppercase">{t.deep_2.p2Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_2.p2Desc}</p>
          </div>
          <div className="bg-zinc-900/90 border-2 border-yellow-400/60 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-cyan-400 font-black text-sm mb-1 uppercase">{t.deep_2.p3Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_2.p3Desc}</p>
          </div>
          <div className="bg-zinc-900/90 border-2 border-yellow-400/60 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-purple-400 font-black text-sm mb-1 uppercase">{t.deep_2.p4Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_2.p4Desc}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ff0055] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_2.button}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 7. DEEP SADNESS (VILLAIN BACKGROUND MODE)
  if (currentStep === 'deep_sadness') {
    return (
      <ComicCard badgeText={`${multiverse.dimensionTag} // RESILIENCIA ANTE LA TRISTEZA`} badgeColor="purple" multiverse={multiverse}>
        <div className="mb-4">
          <VillainFullBodyPortrait heroId={multiverse.id} villainName={multiverse.villainName} />
        </div>

        <blockquote className="text-lg sm:text-2xl font-black text-center text-purple-300 italic mb-8 border-l-4 border-purple-500 pl-4 py-2 bg-purple-950/60 rounded-r-xl">
          {t.deep_sadness.mainQuote}
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-purple-950/80 border-2 border-purple-500 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-purple-300 font-black text-sm mb-1 uppercase">{t.deep_sadness.c1Title}</h3>
            <p className="text-purple-100 text-xs font-medium">{t.deep_sadness.c1Desc}</p>
          </div>
          <div className="bg-purple-950/80 border-2 border-purple-500 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-yellow-300 font-black text-sm mb-1 uppercase">{t.deep_sadness.c2Title}</h3>
            <p className="text-purple-100 text-xs font-medium">{t.deep_sadness.c2Desc}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ffe600] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_sadness.button}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 8. DEEP FEAR (VILLAIN BACKGROUND MODE)
  if (currentStep === 'deep_fear') {
    return (
      <ComicCard badgeText={`${multiverse.dimensionTag} // SUPERAR EL TEMOR`} badgeColor="red" multiverse={multiverse}>
        <div className="mb-4">
          <VillainFullBodyPortrait heroId={multiverse.id} villainName={multiverse.villainName} />
        </div>

        <blockquote className="text-lg sm:text-2xl font-black text-center text-rose-300 italic mb-8 border-l-4 border-rose-500 pl-4 py-2 bg-rose-950/60 rounded-r-xl">
          {t.deep_fear.mainQuote}
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-rose-950/80 border-2 border-rose-500 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-yellow-300 font-black text-sm mb-1 uppercase">{t.deep_fear.c1Title}</h3>
            <p className="text-rose-100 text-xs font-medium">{t.deep_fear.c1Desc}</p>
          </div>
          <div className="bg-rose-950/80 border-2 border-rose-500 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-cyan-300 font-black text-sm mb-1 uppercase">{t.deep_fear.c2Title}</h3>
            <p className="text-rose-100 text-xs font-medium">{t.deep_fear.c2Desc}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_fear.button}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 9. DEEP CHOICE
  if (currentStep === 'deep_choice') {
    return (
      <ComicCard badgeText={`${multiverse.dimensionTag} // LA ELECCIÓN DE LA ALEGRÍA`} badgeColor="cyan" multiverse={multiverse}>
        <div className="mb-4">
          <HeroFullBodyPortrait heroId={multiverse.id} heroName={multiverse.heroName} />
        </div>

        <blockquote className="text-lg sm:text-2xl font-black text-center text-cyan-300 italic mb-8 border-l-4 border-cyan-400 pl-4 py-2 bg-cyan-950/40 rounded-r-xl">
          {t.deep_choice.mainQuote}
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-zinc-900/90 border-2 border-cyan-400/60 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-yellow-400 font-black text-sm mb-1 uppercase">{t.deep_choice.c1Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_choice.c1Desc}</p>
          </div>
          <div className="bg-zinc-900/90 border-2 border-cyan-400/60 p-4 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-rose-400 font-black text-sm mb-1 uppercase">{t.deep_choice.c2Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_choice.c2Desc}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ff0055] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_choice.button}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 10. DEEP GODS (NUESTROS ORÍGENES DE SEMIDIOSES Y SANGRE DE ORO)
  if (currentStep === 'deep_gods') {
    return (
      <ComicCard badgeText={`${multiverse.dimensionTag} // SANGRE DE ORO`} badgeColor="yellow" multiverse={multiverse}>
        <div className="mb-4">
          <HeroFullBodyPortrait heroId={multiverse.id} heroName={multiverse.heroName} />
        </div>

        <blockquote className="text-lg sm:text-2xl font-black text-center text-yellow-300 italic mb-8 border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-950/40 rounded-r-xl">
          {t.deep_gods.mainQuote}
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
          <div className="bg-zinc-900/90 border-2 border-yellow-400/60 p-3 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-yellow-300 font-black text-xs mb-1 uppercase">{t.deep_gods.c1Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_gods.c1Desc}</p>
          </div>
          <div className="bg-zinc-900/90 border-2 border-yellow-400/60 p-3 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-rose-400 font-black text-xs mb-1 uppercase">{t.deep_gods.c2Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_gods.c2Desc}</p>
          </div>
          <div className="bg-zinc-900/90 border-2 border-yellow-400/60 p-3 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h3 className="text-cyan-300 font-black text-xs mb-1 uppercase">{t.deep_gods.c3Title}</h3>
            <p className="text-zinc-300 text-xs font-medium">{t.deep_gods.c3Desc}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base sm:text-lg uppercase tracking-wider border-3 border-black rounded-2xl shadow-[6px_6px_0px_#ff0055] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.deep_gods.button}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </ComicCard>
    );
  }

  // 11. FINAL (ABRAZO FINAL DE MAMÁ PAME Y PAPÁ MAU)
  if (currentStep === 'final') {
    return (
      <ComicCard badgeText={`${multiverse.dimensionTag} // ABRAZO FINAL`} badgeColor="rose" multiverse={multiverse}>
        <div className="mb-4">
          <HeroFullBodyPortrait heroId={multiverse.id} heroName={multiverse.heroName} />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-center text-white mb-2 uppercase tracking-tight glitch-text" data-text={t.final.title}>
          {t.final.title}
        </h2>

        <div className="bg-yellow-400 text-black font-black text-sm uppercase px-4 py-1.5 border-2 border-black rotate-1 shadow-[3px_3px_0px_#000] mb-6">
          {t.final.subtitle}
        </div>

        <p className="text-zinc-200 text-xs sm:text-base text-center font-semibold mb-8 max-w-md bg-black/60 p-4 rounded-2xl border border-zinc-800">
          {t.final.footerText}
        </p>

        {/* Interactive Heart Button with Click Counter */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleHeartClick}
            className="w-full sm:w-auto flex-1 px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-black text-sm uppercase tracking-wider border-3 border-black rounded-xl shadow-[4px_4px_0px_#ffe600] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Heart className={`w-5 h-5 fill-current ${heartClicked > 0 ? 'animate-bounce text-yellow-300' : ''}`} />
            <span>Enviar Amor a Pame & Mau ({heartClicked})</span>
          </motion.button>

          <button
            onClick={copyMessageText}
            className="w-full sm:w-auto px-5 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-black text-sm uppercase tracking-wider border-3 border-black rounded-xl shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? <Check className="w-5 h-5 text-green-400" /> : <Share2 className="w-5 h-5" />}
            <span>{copied ? '¡Copiado!' : 'Compartir Mensaje'}</span>
          </button>
        </div>

        {/* Switch Multiverse Button */}
        <div className="w-full max-w-md pt-4 border-t border-zinc-800">
          <button
            onClick={onRestartMultiverse}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 via-rose-600 to-yellow-500 hover:from-purple-500 hover:to-yellow-400 text-white font-black text-sm uppercase tracking-wider border-2 border-black rounded-xl shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Viajar a la Siguiente Dimensión Multiversal</span>
          </button>
        </div>
      </ComicCard>
    );
  }

  return null;
};
