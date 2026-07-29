import React from 'react';
import { ScreenStep } from '../types';
import { MultiverseTheme } from '../multiverses';
import { HeroFullBodyPortrait, VillainFullBodyPortrait } from '../artwork';

interface ScreenContentProps {
  currentStep: ScreenStep;
  multiverse: MultiverseTheme;
  onNext: () => void;
}

export const ScreenContent: React.FC<ScreenContentProps> = ({
  currentStep,
  multiverse,
  onNext,
}) => {
  const { texts } = multiverse;

  const renderContent = () => {
    switch (currentStep) {
      case 'intro':
        return (
          <div className="text-center space-y-6 animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <h1 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-sans">
              {texts.intro.title}
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto leading-relaxed">
              {texts.intro.subtitle}
            </p>
            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {texts.intro.button} →
            </button>
          </div>
        );

      case 'person':
        return (
          <div className="text-center space-y-6 animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <h2 className="text-2xl sm:text-3xl font-black text-yellow-400 uppercase tracking-tight font-sans">
              {texts.person.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-200 max-w-lg mx-auto leading-relaxed">
              {texts.person.subtitle}
            </p>
            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {texts.person.button} →
            </button>
          </div>
        );

      case 'comic_twist':
        return (
          <div className="text-center space-y-6 animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <div className="inline-block bg-yellow-400 text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-2 font-mono">
              {texts.comic_twist.badge}
            </div>

            <h2 className="text-xl sm:text-3xl font-black text-rose-500 uppercase tracking-wide leading-snug">
              {texts.comic_twist.phrase}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto italic font-mono bg-zinc-900/80 p-3 rounded-lg border border-yellow-400/40">
              {texts.comic_twist.subtitle}
            </p>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {texts.comic_twist.button} ⚡
            </button>
          </div>
        );

      case 'villain_confrontation':
        return (
          <div className="text-center space-y-6 animate-fadeIn">
            <div className="inline-block bg-red-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider font-mono">
              {texts.villain_confrontation.badge}
            </div>

            <h2 className="text-xl sm:text-3xl font-black text-red-500 uppercase tracking-tight">
              {texts.villain_confrontation.title}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
              {texts.villain_confrontation.subtitle}
            </p>

            {/* Dual Hero vs Villain Battle Artwork */}
            <VillainFullBodyPortrait
              heroId={multiverse.id}
              heroName={multiverse.heroName}
              villainName={multiverse.villainName}
              heroQuip={texts.villain_confrontation.heroQuip}
              villainThreat={texts.villain_confrontation.villainThreat}
            />

            <div className="p-3 bg-zinc-900/90 border-2 border-yellow-400 rounded-xl max-w-lg mx-auto text-xs text-yellow-300 italic font-mono">
              💡 {texts.villain_confrontation.parentAdvice}
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {texts.villain_confrontation.button} 💥
            </button>
          </div>
        );

      case 'deep_1':
        return (
          <div className="space-y-6 text-center animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <blockquote className="text-base sm:text-xl font-bold text-yellow-300 italic max-w-xl mx-auto border-l-4 border-yellow-400 pl-4 py-2 bg-zinc-900/80 rounded-r-xl">
              {texts.deep_1.mainQuote}
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 bg-zinc-900/90 border-2 border-rose-600/60 rounded-xl">
                <h4 className="font-black text-rose-400 text-sm uppercase mb-1">{texts.deep_1.c1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_1.c1Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-yellow-400/60 rounded-xl">
                <h4 className="font-black text-yellow-400 text-sm uppercase mb-1">{texts.deep_1.c2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_1.c2Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-cyan-400/60 rounded-xl">
                <h4 className="font-black text-cyan-400 text-sm uppercase mb-1">{texts.deep_1.c3Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_1.c3Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-purple-400/60 rounded-xl">
                <h4 className="font-black text-purple-400 text-sm uppercase mb-1">{texts.deep_1.c4Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_1.c4Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {texts.deep_1.button} →
            </button>
          </div>
        );

      case 'deep_2':
        return (
          <div className="space-y-6 text-center animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <blockquote className="text-base sm:text-xl font-bold text-cyan-300 italic max-w-xl mx-auto border-l-4 border-cyan-400 pl-4 py-2 bg-zinc-900/80 rounded-r-xl">
              {texts.deep_2.mainQuote}
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 bg-zinc-900/90 border-2 border-red-500/60 rounded-xl">
                <h4 className="font-black text-red-400 text-sm uppercase mb-1">{texts.deep_2.p1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_2.p1Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-yellow-400/60 rounded-xl">
                <h4 className="font-black text-yellow-400 text-sm uppercase mb-1">{texts.deep_2.p2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_2.p2Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-green-400/60 rounded-xl">
                <h4 className="font-black text-green-400 text-sm uppercase mb-1">{texts.deep_2.p3Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_2.p3Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-pink-400/60 rounded-xl">
                <h4 className="font-black text-pink-400 text-sm uppercase mb-1">{texts.deep_2.p4Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_2.p4Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {texts.deep_2.button} →
            </button>
          </div>
        );

      case 'deep_sadness':
        return (
          <div className="space-y-6 text-center animate-fadeIn">
            <blockquote className="text-base sm:text-xl font-bold text-red-400 italic max-w-xl mx-auto border-l-4 border-red-600 pl-4 py-2 bg-red-950/40 rounded-r-xl">
              {texts.deep_sadness.mainQuote}
            </blockquote>

            {/* Supervillain Confrontation in Sadness Step */}
            <VillainFullBodyPortrait
              heroId={multiverse.id}
              heroName={multiverse.heroName}
              villainName={multiverse.villainName}
              heroQuip={texts.deep_sadness.heroQuip}
              villainThreat={texts.deep_sadness.villainThreat}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 bg-zinc-900/90 border-2 border-red-500/60 rounded-xl">
                <h4 className="font-black text-red-400 text-sm uppercase mb-1">{texts.deep_sadness.c1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_sadness.c1Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-purple-400/60 rounded-xl">
                <h4 className="font-black text-purple-400 text-sm uppercase mb-1">{texts.deep_sadness.c2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_sadness.c2Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {texts.deep_sadness.button} →
            </button>
          </div>
        );

      case 'deep_fear':
        return (
          <div className="space-y-6 text-center animate-fadeIn">
            <blockquote className="text-base sm:text-xl font-bold text-yellow-300 italic max-w-xl mx-auto border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-950/40 rounded-r-xl">
              {texts.deep_fear.mainQuote}
            </blockquote>

            {/* Supervillain Confrontation in Fear Step */}
            <VillainFullBodyPortrait
              heroId={multiverse.id}
              heroName={multiverse.heroName}
              villainName={multiverse.villainName}
              heroQuip={texts.deep_fear.heroQuip}
              villainThreat={texts.deep_fear.villainThreat}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 bg-zinc-900/90 border-2 border-yellow-400/60 rounded-xl">
                <h4 className="font-black text-yellow-400 text-sm uppercase mb-1">{texts.deep_fear.c1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_fear.c1Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-green-400/60 rounded-xl">
                <h4 className="font-black text-green-400 text-sm uppercase mb-1">{texts.deep_fear.c2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_fear.c2Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {texts.deep_fear.button} →
            </button>
          </div>
        );

      case 'deep_choice':
        return (
          <div className="space-y-6 text-center animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <blockquote className="text-base sm:text-xl font-bold text-emerald-300 italic max-w-xl mx-auto border-l-4 border-emerald-400 pl-4 py-2 bg-zinc-900/80 rounded-r-xl">
              {texts.deep_choice.mainQuote}
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 bg-zinc-900/90 border-2 border-emerald-400/60 rounded-xl">
                <h4 className="font-black text-emerald-400 text-sm uppercase mb-1">{texts.deep_choice.c1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_choice.c1Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-cyan-400/60 rounded-xl">
                <h4 className="font-black text-cyan-400 text-sm uppercase mb-1">{texts.deep_choice.c2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_choice.c2Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {texts.deep_choice.button} 🏛️
            </button>
          </div>
        );

      case 'deep_gods':
        return (
          <div className="space-y-6 text-center animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <blockquote className="text-lg sm:text-2xl font-black text-yellow-400 tracking-wide uppercase max-w-xl mx-auto p-4 bg-gradient-to-r from-yellow-500/20 via-rose-500/20 to-yellow-500/20 border-2 border-yellow-400 rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.4)]">
              {texts.deep_gods.mainQuote}
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 bg-zinc-900/90 border-2 border-yellow-400 rounded-xl">
                <h4 className="font-black text-yellow-400 text-sm uppercase mb-1">{texts.deep_gods.c1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_gods.c1Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-rose-500 rounded-xl">
                <h4 className="font-black text-rose-400 text-sm uppercase mb-1">{texts.deep_gods.c2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_gods.c2Desc}</p>
              </div>
              <div className="p-4 bg-zinc-900/90 border-2 border-amber-400 rounded-xl">
                <h4 className="font-black text-amber-400 text-sm uppercase mb-1">{texts.deep_gods.c3Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_gods.c3Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {texts.deep_gods.button} ❤️
            </button>
          </div>
        );

      case 'final':
        return (
          <div className="text-center space-y-6 animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <h1 className="text-4xl sm:text-6xl font-black text-yellow-400 uppercase tracking-wider drop-shadow-[0_5px_15px_rgba(250,204,21,0.8)] font-sans">
              {texts.final.title}
            </h1>

            <p className="text-xl sm:text-2xl font-black text-rose-500 tracking-wide font-mono uppercase">
              {texts.final.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto italic font-mono bg-zinc-900/90 p-4 rounded-xl border-2 border-yellow-400">
              {texts.final.footerText}
            </p>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              Siguiente Multiverso →
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="w-full">{renderContent()}</div>;
};
