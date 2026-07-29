import React, { useState } from 'react';
import { Heart, Share2, Check } from 'lucide-react';
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

  // Persistent Love Counter that NEVER resets (saved in localStorage)
  const [loveCount, setLoveCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('rafis_love_count');
      return saved ? parseInt(saved, 10) : 100;
    } catch {
      return 100;
    }
  });

  const [copied, setCopied] = useState(false);

  const handleSendLove = () => {
    setLoveCount((prev) => {
      const nextCount = prev + 1;
      try {
        localStorage.setItem('rafis_love_count', nextCount.toString());
      } catch (e) {
        console.error('LocalStorage write error:', e);
      }
      return nextCount;
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Rafis Spider-Verse',
      text: '¡Mensaje especial del Multiverso Arácnido para Rafis de parte de sus papás!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case 'intro':
        return (
          <div className="text-center space-y-4 sm:space-y-6 animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-sans">
              {texts.intro.title}
            </h1>
            <p className="text-xs sm:text-base text-zinc-300 max-w-lg mx-auto leading-relaxed">
              {texts.intro.subtitle}
            </p>
            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
            >
              {texts.intro.button} →
            </button>
          </div>
        );

      case 'person':
        return (
          <div className="text-center space-y-4 sm:space-y-6 animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <h2 className="text-xl sm:text-3xl font-black text-yellow-400 uppercase tracking-tight font-sans">
              {texts.person.title}
            </h2>
            <p className="text-xs sm:text-base text-zinc-200 max-w-lg mx-auto leading-relaxed">
              {texts.person.subtitle}
            </p>
            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
            >
              {texts.person.button} →
            </button>
          </div>
        );

      case 'comic_twist':
        return (
          <div className="text-center space-y-4 sm:space-y-6 animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <div className="inline-block bg-yellow-400 text-black text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-1 font-mono">
              {texts.comic_twist.badge}
            </div>

            <h2 className="text-lg sm:text-2xl font-black text-rose-500 uppercase tracking-wide leading-snug">
              {texts.comic_twist.phrase}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto italic font-mono bg-zinc-900/80 p-3 rounded-lg border border-yellow-400/40">
              {texts.comic_twist.subtitle}
            </p>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
            >
              {texts.comic_twist.button} ⚡
            </button>
          </div>
        );

      case 'villain_confrontation':
        return (
          <div className="text-center space-y-4 sm:space-y-6 animate-fadeIn">
            <div className="inline-block bg-red-600 text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              {texts.villain_confrontation.badge}
            </div>

            <h2 className="text-lg sm:text-2xl font-black text-red-500 uppercase tracking-tight">
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

            <div className="p-3 bg-zinc-900/90 border border-yellow-400 rounded-xl max-w-lg mx-auto text-xs text-yellow-300 italic font-mono">
              💡 {texts.villain_confrontation.parentAdvice}
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
            >
              {texts.villain_confrontation.button} 💥
            </button>
          </div>
        );

      case 'deep_1':
        return (
          <div className="space-y-4 sm:space-y-6 text-center animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <blockquote className="text-sm sm:text-lg font-bold text-yellow-300 italic max-w-xl mx-auto border-l-4 border-yellow-400 pl-3 py-2 bg-zinc-900/80 rounded-r-xl">
              {texts.deep_1.mainQuote}
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
              <div className="p-3 bg-zinc-900/90 border border-rose-600/60 rounded-xl">
                <h4 className="font-black text-rose-400 text-xs uppercase mb-1">{texts.deep_1.c1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_1.c1Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-yellow-400/60 rounded-xl">
                <h4 className="font-black text-yellow-400 text-xs uppercase mb-1">{texts.deep_1.c2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_1.c2Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-cyan-400/60 rounded-xl">
                <h4 className="font-black text-cyan-400 text-xs uppercase mb-1">{texts.deep_1.c3Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_1.c3Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-purple-400/60 rounded-xl">
                <h4 className="font-black text-purple-400 text-xs uppercase mb-1">{texts.deep_1.c4Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_1.c4Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
            >
              {texts.deep_1.button} →
            </button>
          </div>
        );

      case 'deep_2':
        return (
          <div className="space-y-4 sm:space-y-6 text-center animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <blockquote className="text-sm sm:text-lg font-bold text-cyan-300 italic max-w-xl mx-auto border-l-4 border-cyan-400 pl-3 py-2 bg-zinc-900/80 rounded-r-xl">
              {texts.deep_2.mainQuote}
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
              <div className="p-3 bg-zinc-900/90 border border-red-500/60 rounded-xl">
                <h4 className="font-black text-red-400 text-xs uppercase mb-1">{texts.deep_2.p1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_2.p1Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-yellow-400/60 rounded-xl">
                <h4 className="font-black text-yellow-400 text-xs uppercase mb-1">{texts.deep_2.p2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_2.p2Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-green-400/60 rounded-xl">
                <h4 className="font-black text-green-400 text-xs uppercase mb-1">{texts.deep_2.p3Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_2.p3Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-pink-400/60 rounded-xl">
                <h4 className="font-black text-pink-400 text-xs uppercase mb-1">{texts.deep_2.p4Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_2.p4Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
            >
              {texts.deep_2.button} →
            </button>
          </div>
        );

      case 'deep_sadness':
        return (
          <div className="space-y-4 sm:space-y-6 text-center animate-fadeIn">
            <blockquote className="text-sm sm:text-lg font-bold text-red-400 italic max-w-xl mx-auto border-l-4 border-red-600 pl-3 py-2 bg-red-950/40 rounded-r-xl">
              {texts.deep_sadness.mainQuote}
            </blockquote>

            <VillainFullBodyPortrait
              heroId={multiverse.id}
              heroName={multiverse.heroName}
              villainName={multiverse.villainName}
              heroQuip={texts.deep_sadness.heroQuip}
              villainThreat={texts.deep_sadness.villainThreat}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
              <div className="p-3 bg-zinc-900/90 border border-red-500/60 rounded-xl">
                <h4 className="font-black text-red-400 text-xs uppercase mb-1">{texts.deep_sadness.c1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_sadness.c1Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-purple-400/60 rounded-xl">
                <h4 className="font-black text-purple-400 text-xs uppercase mb-1">{texts.deep_sadness.c2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_sadness.c2Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
            >
              {texts.deep_sadness.button} →
            </button>
          </div>
        );

      case 'deep_fear':
        return (
          <div className="space-y-4 sm:space-y-6 text-center animate-fadeIn">
            <blockquote className="text-sm sm:text-lg font-bold text-yellow-300 italic max-w-xl mx-auto border-l-4 border-yellow-400 pl-3 py-2 bg-yellow-950/40 rounded-r-xl">
              {texts.deep_fear.mainQuote}
            </blockquote>

            <VillainFullBodyPortrait
              heroId={multiverse.id}
              heroName={multiverse.heroName}
              villainName={multiverse.villainName}
              heroQuip={texts.deep_fear.heroQuip}
              villainThreat={texts.deep_fear.villainThreat}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
              <div className="p-3 bg-zinc-900/90 border border-yellow-400/60 rounded-xl">
                <h4 className="font-black text-yellow-400 text-xs uppercase mb-1">{texts.deep_fear.c1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_fear.c1Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-green-400/60 rounded-xl">
                <h4 className="font-black text-green-400 text-xs uppercase mb-1">{texts.deep_fear.c2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_fear.c2Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
            >
              {texts.deep_fear.button} →
            </button>
          </div>
        );

      case 'deep_choice':
        return (
          <div className="space-y-4 sm:space-y-6 text-center animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <blockquote className="text-sm sm:text-lg font-bold text-emerald-300 italic max-w-xl mx-auto border-l-4 border-emerald-400 pl-3 py-2 bg-zinc-900/80 rounded-r-xl">
              {texts.deep_choice.mainQuote}
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
              <div className="p-3 bg-zinc-900/90 border border-emerald-400/60 rounded-xl">
                <h4 className="font-black text-emerald-400 text-xs uppercase mb-1">{texts.deep_choice.c1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_choice.c1Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-cyan-400/60 rounded-xl">
                <h4 className="font-black text-cyan-400 text-xs uppercase mb-1">{texts.deep_choice.c2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_choice.c2Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
            >
              {texts.deep_choice.button} 🏛️
            </button>
          </div>
        );

      case 'deep_gods':
        return (
          <div className="space-y-4 sm:space-y-6 text-center animate-fadeIn">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <blockquote className="text-base sm:text-xl font-black text-yellow-400 tracking-wide uppercase max-w-xl mx-auto p-3.5 bg-gradient-to-r from-yellow-500/20 via-rose-500/20 to-yellow-500/20 border border-yellow-400 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              {texts.deep_gods.mainQuote}
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto">
              <div className="p-3 bg-zinc-900/90 border border-yellow-400 rounded-xl">
                <h4 className="font-black text-yellow-400 text-xs uppercase mb-1">{texts.deep_gods.c1Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_gods.c1Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-rose-500 rounded-xl">
                <h4 className="font-black text-rose-400 text-xs uppercase mb-1">{texts.deep_gods.c2Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_gods.c2Desc}</p>
              </div>
              <div className="p-3 bg-zinc-900/90 border border-amber-400 rounded-xl">
                <h4 className="font-black text-amber-400 text-xs uppercase mb-1">{texts.deep_gods.c3Title}</h4>
                <p className="text-xs text-zinc-300">{texts.deep_gods.c3Desc}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
            >
              {texts.deep_gods.button} ❤️
            </button>
          </div>
        );

      case 'final':
        return (
          <div className="text-center space-y-5 animate-fadeIn max-w-xl mx-auto">
            <HeroFullBodyPortrait heroId={multiverse.id} step={currentStep} />

            <h1 className="text-3xl sm:text-5xl font-black text-yellow-400 uppercase tracking-wider drop-shadow-[0_5px_15px_rgba(250,204,21,0.8)] font-sans">
              {texts.final.title}
            </h1>

            <p className="text-lg sm:text-xl font-black text-rose-500 tracking-wide font-mono uppercase">
              {texts.final.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 italic font-mono bg-zinc-900/90 p-3.5 rounded-xl border border-yellow-400/80">
              {texts.final.footerText}
            </p>

            {/* PERSISTENT LOVE COUNTER & INTERACTIVE ACTION BUTTONS */}
            <div className="p-4 bg-zinc-950/90 border-2 border-rose-500 rounded-2xl shadow-[0_0_20px_rgba(244,63,94,0.4)] space-y-3 my-4">
              <div className="flex items-center justify-center gap-2 text-rose-400 font-mono text-sm sm:text-base font-black">
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-bounce" />
                <span>Mensajes de Amor Enviados: <span className="text-yellow-400 text-lg font-mono">{loveCount}</span></span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {/* Send Love Button */}
                <button
                  onClick={handleSendLove}
                  className="w-full sm:w-auto px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-[3px_3px_0px_#000000] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" /> Enviar Amor a Papá y Mamá
                </button>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="w-full sm:w-auto px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs uppercase tracking-wider rounded-xl shadow-[3px_3px_0px_#000000] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-black" /> ¡Enlace Copiado!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-black" /> Compartir Experiencia
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Advance to Next Multiverse Button */}
            <button
              onClick={onNext}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${multiverse.buttonGradient} font-black text-sm uppercase tracking-wider rounded-xl shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer`}
            >
              Siguiente Multiverso →
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="w-full px-2 sm:px-4">{renderContent()}</div>;
};
