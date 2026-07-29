import React from 'react';

interface PortraitProps {
  heroId: number;
  heroName?: string;
  villainName?: string;
}

const HERO_IMAGES: Record<number, { img: string; badge: string }> = {
  1: { img: '/images/spider_classic.png', badge: 'THWIP!' },
  2: { img: '/images/spider_punk.png', badge: 'ANARCHY!' },
  3: { img: '/images/spider_miles.png', badge: 'LEAP OF FAITH!' },
  4: { img: '/images/spider_gwen.png', badge: 'DRUM BEAT!' },
  5: { img: '/images/spider_2099.png', badge: 'CANON EVENT 2099' },
};

const VILLAIN_IMAGES: Record<number, { img: string; dialog: string }> = {
  1: { img: '/images/villain_green_goblin.png', dialog: '¡LA TRISTEZA ES TU MAYOR ENEMIGO!' },
  2: { img: '/images/villain_vulture.png', dialog: '¡ROMPERÉ TU RITMO CON DUDAS!' },
  3: { img: '/images/villain_prowler.png', dialog: '¡NO HAY ESCAPE DE LOS DÍAS DIFÍCILES!' },
  4: { img: '/images/villain_lizard.png', dialog: '¡LA SOLEDAD TE DEVORARÁ!' },
  5: { img: '/images/villain_spot.png', dialog: '¡SOY EL ABISMO EN TU MULTIVERSO!' },
};

export const HeroFullBodyPortrait: React.FC<PortraitProps> = ({ heroId }) => {
  const hero = HERO_IMAGES[heroId] || HERO_IMAGES[1];

  return (
    <div className="relative w-64 h-80 sm:w-80 sm:h-[420px] mx-auto flex items-center justify-center my-2 filter drop-shadow-[0_0_25px_rgba(255,230,0,0.6)]">
      {/* Background Neon Aura */}
      <div className="absolute inset-0 bg-rose-600/30 rounded-full blur-3xl animate-pulse" />

      {/* Real Downloaded Full Body Image Render */}
      <img
        src={hero.img}
        alt="Spider-Man Hero"
        className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105"
      />

      {/* Comic Speech Bubble / Onomatopoeia Badge */}
      <div className="absolute top-2 right-0 bg-yellow-400 text-black font-black text-xs sm:text-sm px-3 py-1.5 border-3 border-black rotate-12 shadow-[4px_4px_0px_#000000] z-20 uppercase font-mono">
        {hero.badge}
      </div>
    </div>
  );
};

export const VillainFullBodyPortrait: React.FC<PortraitProps> = ({ heroId }) => {
  const villain = VILLAIN_IMAGES[heroId] || VILLAIN_IMAGES[1];

  return (
    <div className="relative w-64 h-80 sm:w-80 sm:h-[420px] mx-auto flex items-center justify-center my-2 filter drop-shadow-[0_0_35px_rgba(220,38,38,0.9)] animate-pulse">
      {/* Sinister Dark Alarm Flare */}
      <div className="absolute inset-0 bg-red-600/40 rounded-full blur-3xl animate-ping" />

      {/* Real Downloaded Full Body Supervillain Image */}
      <img
        src={villain.img}
        alt="Supervillain"
        className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_10px_25px_rgba(239,68,68,0.9)] brightness-95 contrast-125"
      />

      {/* Comic Villain Threat Dialogue Bubble */}
      <div className="absolute top-2 left-0 max-w-[200px] bg-red-600 text-white font-black text-xs px-3 py-2 border-3 border-black -rotate-6 shadow-[4px_4px_0px_#000000] z-20 font-mono">
        {villain.dialog}
      </div>
    </div>
  );
};
