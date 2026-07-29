import React from 'react';
import { ScreenStep } from './types';

interface HeroPortraitProps {
  heroId: number;
  step: ScreenStep;
}

interface VillainBattleProps {
  heroId: number;
  heroName: string;
  villainName: string;
  heroQuip: string;
  villainThreat: string;
}

// ============================================================================
// 1. HERO SVG ARTWORK COMPONENTS (ACCURATE & RESPONSIVE PER UNIVERSE & STEP)
// ============================================================================

// EARTH-616: CLASSIC PETER PARKER
const ClassicSpiderArt: React.FC<{ pose: string }> = ({ pose }) => {
  return (
    <svg viewBox="0 0 300 380" className="w-full h-full max-h-[320px] sm:max-h-[380px] drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]">
      {/* Background Web Rays */}
      <path d="M 150 190 L 0 0 M 150 190 L 300 0 M 150 190 L 0 380 M 150 190 L 300 380" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,4" opacity="0.4" />
      <circle cx="150" cy="190" r="100" stroke="#facc15" strokeWidth="2" fill="none" opacity="0.3" />

      {/* Legs */}
      <path d="M 100 270 L 65 350 M 200 270 L 235 350" stroke="#2563eb" strokeWidth="26" strokeLinecap="round" />
      <path d="M 65 350 L 45 365 M 235 350 L 255 365" stroke="#dc2626" strokeWidth="22" strokeLinecap="round" />

      {/* Torso */}
      <path d="M 110 150 L 190 150 L 175 275 L 125 275 Z" fill="#dc2626" stroke="#000" strokeWidth="4" />
      <path d="M 125 150 L 115 275 M 175 150 L 185 275" stroke="#2563eb" strokeWidth="14" />

      {/* Spider Emblem */}
      <path d="M 150 190 L 140 205 L 150 215 L 160 205 Z M 150 190 L 130 175 M 150 190 L 170 175 M 150 215 L 125 235 M 150 215 L 175 235" fill="#000" stroke="#000" strokeWidth="3" />

      {/* Arms based on Pose */}
      {pose === 'intro' || pose === 'final' ? (
        <>
          <path d="M 110 160 L 40 120 L 15 75" stroke="#dc2626" strokeWidth="22" strokeLinecap="round" />
          <path d="M 190 160 L 260 120 L 285 75" stroke="#dc2626" strokeWidth="22" strokeLinecap="round" />
          <path d="M 15 75 L -10 10 M 285 75 L 310 10" stroke="#ffffff" strokeWidth="4" strokeDasharray="4,2" />
        </>
      ) : (
        <>
          <path d="M 110 160 L 50 210 L 25 250" stroke="#dc2626" strokeWidth="22" strokeLinecap="round" />
          <path d="M 190 160 L 250 110 L 280 60" stroke="#dc2626" strokeWidth="22" strokeLinecap="round" />
          <path d="M 280 60 L 320 -20" stroke="#ffffff" strokeWidth="5" strokeDasharray="5,2" />
        </>
      )}

      {/* Mask Head */}
      <ellipse cx="150" cy="105" rx="40" ry="48" fill="#dc2626" stroke="#000" strokeWidth="5" />
      {/* Eyes */}
      <path d="M 122 100 Q 142 90 148 110 Q 130 120 122 100 Z" fill="#ffffff" stroke="#000" strokeWidth="4" />
      <path d="M 178 100 Q 158 90 152 110 Q 170 120 178 100 Z" fill="#ffffff" stroke="#000" strokeWidth="4" />
    </svg>
  );
};

// EARTH-138: SPIDER-PUNK (HOBIE BROWN)
const SpiderPunkArt: React.FC<{ pose: string }> = ({ pose }) => {
  return (
    <svg viewBox="0 0 300 380" className="w-full h-full max-h-[320px] sm:max-h-[380px] drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">
      {/* Punk Spikes rays */}
      <polygon points="150,10 170,70 230,30 200,90 280,100 210,140 280,190 210,220 150,370 90,220 20,190 90,140 20,100 100,90 70,30" fill="#facc15" opacity="0.25" />

      {/* Body & Denim Vest */}
      <path d="M 95 270 L 65 350 M 205 270 L 235 350" stroke="#e11d48" strokeWidth="26" strokeLinecap="round" />
      <path d="M 110 150 L 190 150 L 175 280 L 125 280 Z" fill="#e11d48" stroke="#000" strokeWidth="4" />

      {/* Spiked Denim Vest */}
      <path d="M 105 150 L 140 150 L 135 250 L 110 240 Z M 195 150 L 160 150 L 165 250 L 190 240 Z" fill="#1e293b" stroke="#facc15" strokeWidth="3" />
      <circle cx="118" cy="170" r="4" fill="#facc15" />
      <circle cx="182" cy="170" r="4" fill="#facc15" />

      {/* Electric Guitar */}
      <path d="M 40 230 L 260 110" stroke="#06b6d4" strokeWidth="12" strokeLinecap="round" />
      <polygon points="30,210 80,200 65,260 15,240" fill="#e11d48" stroke="#000" strokeWidth="3" />

      {/* Spiked Mask */}
      <ellipse cx="150" cy="100" rx="38" ry="46" fill="#e11d48" stroke="#000" strokeWidth="4" />
      <polygon points="150,30 140,55 160,55" fill="#facc15" stroke="#000" strokeWidth="2" />
      <polygon points="150,10 138,40 162,40" fill="#facc15" stroke="#000" strokeWidth="2" />

      {/* Mask Eyes */}
      <path d="M 122 95 L 145 105 L 125 115 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />
      <path d="M 178 95 L 155 105 L 175 115 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />
    </svg>
  );
};

// EARTH-1610: MILES MORALES
const MilesMoralesArt: React.FC<{ pose: string }> = ({ pose }) => {
  return (
    <svg viewBox="0 0 300 380" className="w-full h-full max-h-[320px] sm:max-h-[380px] drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">
      {/* Glitch Frame */}
      <rect x="20" y="20" width="260" height="340" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.3" transform="translate(3,3)" />
      <rect x="20" y="20" width="260" height="340" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.3" transform="translate(-3,-3)" />

      {/* Miles Suit (Black & Red Spray) */}
      <path d="M 95 270 L 60 350 M 205 270 L 240 350" stroke="#09090b" strokeWidth="28" strokeLinecap="round" />
      <path d="M 60 350 L 40 365 M 240 350 L 260 365" stroke="#ef4444" strokeWidth="20" strokeLinecap="round" />

      <path d="M 110 145 L 190 145 L 175 275 L 125 275 Z" fill="#09090b" stroke="#ef4444" strokeWidth="4" />

      {/* Red Spray Spider Emblem */}
      <path d="M 150 175 Q 130 190 150 225 Q 170 190 150 175 Z M 150 185 L 110 165 M 150 185 L 190 165 M 150 205 L 105 235 M 150 205 L 195 235" fill="#ef4444" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />

      {/* Arms - Upside Down or Action */}
      <path d="M 110 155 L 40 205 L 10 245" fill="none" stroke="#09090b" strokeWidth="22" strokeLinecap="round" />
      <path d="M 190 155 L 260 205 L 290 245" fill="none" stroke="#09090b" strokeWidth="22" strokeLinecap="round" />

      {/* Mask */}
      <ellipse cx="150" cy="95" rx="40" ry="48" fill="#09090b" stroke="#ef4444" strokeWidth="4" />
      <path d="M 120 90 Q 142 80 148 102 Q 130 115 120 90 Z" fill="#ffffff" stroke="#ef4444" strokeWidth="4" />
      <path d="M 180 90 Q 158 80 152 102 Q 170 115 180 90 Z" fill="#ffffff" stroke="#ef4444" strokeWidth="4" />
    </svg>
  );
};

// EARTH-65: GHOST-SPIDER (GWEN STACY)
const GhostSpiderArt: React.FC<{ pose: string }> = ({ pose }) => {
  return (
    <svg viewBox="0 0 300 380" className="w-full h-full max-h-[320px] sm:max-h-[380px] drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">
      {/* Neon Audio Wave circles */}
      <circle cx="150" cy="170" r="100" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.4" strokeDasharray="6,4" />

      {/* Body */}
      <path d="M 100 270 L 70 350 M 200 270 L 230 350" stroke="#38bdf8" strokeWidth="22" strokeLinecap="round" />
      <path d="M 110 145 L 190 145 L 175 275 L 125 275 Z" fill="#ffffff" stroke="#000" strokeWidth="4" />
      <path d="M 110 145 L 140 275 M 190 145 L 160 275" stroke="#ec4899" strokeWidth="8" />

      {/* Arms with Drumsticks */}
      <path d="M 110 155 L 40 115 L 15 65" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
      <path d="M 190 155 L 260 115 L 285 65" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
      <line x1="15" y1="65" x2="-5" y2="40" stroke="#facc15" strokeWidth="6" strokeLinecap="round" />
      <line x1="285" y1="65" x2="305" y2="40" stroke="#facc15" strokeWidth="6" strokeLinecap="round" />

      {/* Gwen Hood */}
      <path d="M 95 115 Q 150 15 205 115 Q 150 165 95 115 Z" fill="#ffffff" stroke="#000" strokeWidth="4" />
      <path d="M 105 110 Q 150 40 195 110 Q 150 150 105 110 Z" fill="#ec4899" opacity="0.3" />

      {/* Mask */}
      <ellipse cx="150" cy="105" rx="30" ry="36" fill="#ffffff" stroke="#000" strokeWidth="3" />
      <path d="M 130 100 Q 142 90 146 107 Q 135 115 130 100 Z" fill="#ec4899" stroke="#38bdf8" strokeWidth="3" />
      <path d="M 170 100 Q 158 90 154 107 Q 165 115 170 100 Z" fill="#ec4899" stroke="#38bdf8" strokeWidth="3" />
    </svg>
  );
};

// EARTH-2099: MIGUEL O'HARA
const Spider2099Art: React.FC<{ pose: string }> = ({ pose }) => {
  return (
    <svg viewBox="0 0 300 380" className="w-full h-full max-h-[320px] sm:max-h-[380px] drop-shadow-[0_0_25px_rgba(2,132,199,0.9)]">
      {/* Nueva York 2099 Hologram Polygon */}
      <polygon points="150,10 280,90 280,280 150,360 20,280 20,90" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="6,3" opacity="0.4" />

      {/* Imposing 2099 Suit */}
      <path d="M 90 260 L 60 350 M 210 260 L 240 350" stroke="#0284c7" strokeWidth="32" strokeLinecap="round" />
      <path d="M 100 135 L 200 135 L 180 270 L 120 270 Z" fill="#030712" stroke="#0284c7" strokeWidth="5" />

      {/* Laser Skull Emblem */}
      <path d="M 150 155 L 130 185 L 150 225 L 170 185 Z" fill="#f43f5e" />
      <path d="M 150 155 L 105 140 M 150 155 L 195 140 M 150 225 L 100 265 M 150 225 L 200 265" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />

      {/* Arm Blades */}
      <path d="M 100 145 L 30 185 L 10 235" fill="none" stroke="#0284c7" strokeWidth="26" strokeLinecap="round" />
      <path d="M 200 145 L 270 185 L 290 235" fill="none" stroke="#0284c7" strokeWidth="26" strokeLinecap="round" />
      <polygon points="20,175 0,155 25,195" fill="#f43f5e" />
      <polygon points="280,175 300,155 275,195" fill="#f43f5e" />

      {/* Head & Red Visor */}
      <polygon points="150,55 195,95 180,130 120,130 105,95" fill="#030712" stroke="#0284c7" strokeWidth="4" />
      <path d="M 125 95 L 150 110 L 175 95 L 150 85 Z" fill="#f43f5e" filter="drop-shadow(0 0 6px #f43f5e)" />
    </svg>
  );
};

// ============================================================================
// 2. ACCURATE SUPERVILLAIN SVG ARTWORK COMPONENTS
// ============================================================================

// GREEN GOBLIN (DUENDE VERDE - NORMAN OSBORN)
const GreenGoblinArt: React.FC = () => {
  return (
    <svg viewBox="0 0 300 340" className="w-full h-full max-h-[260px] sm:max-h-[300px] drop-shadow-[0_0_25px_rgba(34,197,94,0.9)]">
      {/* Glider Explosion & Flames */}
      <polygon points="40,260 150,200 260,260 150,320" fill="#334155" stroke="#22c55e" strokeWidth="4" />
      <circle cx="50" cy="260" r="18" fill="#ea580c" className="animate-pulse" />
      <circle cx="250" cy="260" r="18" fill="#ea580c" className="animate-pulse" />

      {/* Goblin Green Body & Purple Tunic */}
      <path d="M 110 130 L 190 130 L 175 230 L 125 230 Z" fill="#22c55e" stroke="#000" strokeWidth="4" />
      <path d="M 120 130 L 180 130 L 165 210 L 135 210 Z" fill="#a855f7" stroke="#000" strokeWidth="3" />

      {/* Arms & Glowing Pumpkin Bomb */}
      <path d="M 110 140 L 40 180" fill="none" stroke="#22c55e" strokeWidth="20" strokeLinecap="round" />
      <path d="M 190 140 L 250 110 L 270 70" fill="none" stroke="#22c55e" strokeWidth="20" strokeLinecap="round" />

      {/* Pumpkin Bomb */}
      <circle cx="275" cy="60" r="24" fill="#ea580c" stroke="#facc15" strokeWidth="3" className="animate-ping" />
      <circle cx="275" cy="60" r="22" fill="#ea580c" stroke="#facc15" strokeWidth="3" />
      <path d="M 267 55 L 272 65 L 282 55" stroke="#000" strokeWidth="3" fill="none" />

      {/* Goblin Head & Pointed Hood */}
      <ellipse cx="150" cy="85" rx="36" ry="44" fill="#22c55e" stroke="#000" strokeWidth="4" />
      <polygon points="150,15 185,65 115,65" fill="#a855f7" stroke="#000" strokeWidth="3" />

      {/* Evil Yellow Eyes & Sinister Smile */}
      <ellipse cx="132" cy="85" rx="9" ry="13" fill="#facc15" stroke="#000" strokeWidth="2" />
      <ellipse cx="168" cy="85" rx="9" ry="13" fill="#facc15" stroke="#000" strokeWidth="2" />
      <path d="M 125 110 Q 150 130 175 110 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />
    </svg>
  );
};

// VULTURE ANARCHY (EL BUITRE DE ACERO)
const VultureArt: React.FC = () => {
  return (
    <svg viewBox="0 0 300 340" className="w-full h-full max-h-[260px] sm:max-h-[300px] drop-shadow-[0_0_25px_rgba(225,29,72,0.9)]">
      {/* Massive Metallic Razor Wings */}
      <path d="M 150 150 L 10 60 L 30 220 L 120 200 Z" fill="#334155" stroke="#e11d48" strokeWidth="4" />
      <path d="M 150 150 L 290 60 L 270 220 L 180 200 Z" fill="#334155" stroke="#e11d48" strokeWidth="4" />
      <path d="M 10 60 L 40 100 M 290 60 L 260 100" stroke="#facc15" strokeWidth="4" />

      {/* Dark Armor */}
      <path d="M 110 140 L 190 140 L 175 270 L 125 270 Z" fill="#0f172a" stroke="#e11d48" strokeWidth="4" />
      <path d="M 100 270 L 70 330 M 200 270 L 230 330" stroke="#0f172a" strokeWidth="24" strokeLinecap="round" />

      {/* Cybernetic Beak Mask & Glowing Red Eyes */}
      <ellipse cx="150" cy="90" rx="36" ry="44" fill="#1e293b" stroke="#e11d48" strokeWidth="4" />
      <polygon points="150,135 125,95 175,95" fill="#e11d48" />
      <ellipse cx="132" cy="85" rx="8" ry="5" fill="#facc15" />
      <ellipse cx="168" cy="85" rx="8" ry="5" fill="#facc15" />
    </svg>
  );
};

// THE PROWLER (EL MERODEADOR - AARON DAVIS)
const ProwlerArt: React.FC = () => {
  return (
    <svg viewBox="0 0 300 340" className="w-full h-full max-h-[260px] sm:max-h-[300px] drop-shadow-[0_0_30px_rgba(168,85,247,0.9)]">
      {/* Purple Electro Aura */}
      <circle cx="150" cy="150" r="110" fill="none" stroke="#a855f7" strokeWidth="4" opacity="0.4" strokeDasharray="8,4" />

      {/* Heavy Purple & Green Armor */}
      <path d="M 90 250 L 60 330 M 210 250 L 240 330" stroke="#3b0764" strokeWidth="28" strokeLinecap="round" />
      <path d="M 105 120 L 195 120 L 180 250 L 120 250 Z" fill="#1e1b4b" stroke="#a855f7" strokeWidth="5" />

      {/* Energy Claw Arms */}
      <path d="M 105 140 L 30 160 L 10 205" stroke="#3b0764" strokeWidth="22" strokeLinecap="round" />
      <path d="M 195 140 L 270 160 L 290 205" stroke="#3b0764" strokeWidth="22" strokeLinecap="round" />

      {/* Purple Glowing Claws */}
      <polygon points="10,205 0,185 -10,225 15,225" fill="#a855f7" />
      <polygon points="290,205 300,185 310,225 285,225" fill="#a855f7" />

      {/* Mask & Green Eyes */}
      <polygon points="150,40 190,80 175,120 125,120 110,80" fill="#1e1b4b" stroke="#a855f7" strokeWidth="4" />
      <path d="M 125 80 L 145 90 L 128 100 Z" fill="#22c55e" filter="drop-shadow(0 0 6px #22c55e)" />
      <path d="M 175 80 L 155 90 L 172 100 Z" fill="#22c55e" filter="drop-shadow(0 0 6px #22c55e)" />
    </svg>
  );
};

// THE LIZARD (EL LAGARTO MUTANTE)
const LizardArt: React.FC = () => {
  return (
    <svg viewBox="0 0 300 340" className="w-full h-full max-h-[260px] sm:max-h-[300px] drop-shadow-[0_0_30px_rgba(34,197,94,0.9)]">
      {/* Toxic Green Cloud */}
      <circle cx="150" cy="170" r="100" fill="#15803d" opacity="0.3" />

      {/* Giant Green Reptile Body & Tail */}
      <path d="M 90 240 L 50 330 M 210 240 L 250 330" stroke="#15803d" strokeWidth="32" strokeLinecap="round" />
      <path d="M 100 130 L 200 130 L 180 240 L 120 240 Z" fill="#15803d" stroke="#000" strokeWidth="4" />

      {/* Torn White Lab Coat */}
      <path d="M 95 130 L 130 130 L 120 250 M 205 130 L 170 130 L 180 250" stroke="#ffffff" strokeWidth="12" />

      {/* Beast Arms & Long Reptile Tail */}
      <path d="M 100 140 L 20 175 M 200 140 L 280 175" stroke="#15803d" strokeWidth="24" strokeLinecap="round" />
      <path d="M 180 240 Q 260 270 285 330" stroke="#15803d" strokeWidth="24" fill="none" strokeLinecap="round" />

      {/* Snout & Red Eyes */}
      <polygon points="150,45 205,90 150,120 95,90" fill="#15803d" stroke="#000" strokeWidth="4" />
      <circle cx="132" cy="80" r="7" fill="#dc2626" />
      <circle cx="168" cy="80" r="7" fill="#dc2626" />
    </svg>
  );
};

// THE SPOT (EL ABISMO MULTIVERSAL - DR. JONATHAN OHNN)
const SpotArt: React.FC = () => {
  return (
    <svg viewBox="0 0 300 340" className="w-full h-full max-h-[260px] sm:max-h-[300px] drop-shadow-[0_0_35px_rgba(255,255,255,0.9)]">
      {/* Stark White Body with Floating Ink Spots */}
      <ellipse cx="150" cy="170" rx="85" ry="140" fill="#ffffff" stroke="#000" strokeWidth="5" />

      {/* Ink Black Portals */}
      <circle cx="150" cy="75" r="26" fill="#000000" className="animate-pulse" />
      <circle cx="120" cy="150" r="20" fill="#000000" />
      <circle cx="180" cy="160" r="28" fill="#000000" />
      <circle cx="140" cy="230" r="22" fill="#000000" />
      <circle cx="90" cy="210" r="16" fill="#000000" />
      <circle cx="210" cy="220" r="18" fill="#000000" />

      {/* Void Arms */}
      <path d="M 70 140 L 10 110 M 230 140 L 290 110" stroke="#000000" strokeWidth="20" strokeLinecap="round" />
    </svg>
  );
};

// ============================================================================
// 3. MAIN EXPORTED COMPONENTS (RESPONSIVE & DYNAMIC)
// ============================================================================

export const HeroFullBodyPortrait: React.FC<HeroPortraitProps> = ({ heroId, step }) => {
  const renderHeroArt = () => {
    switch (heroId) {
      case 1: return <ClassicSpiderArt pose={step} />;
      case 2: return <SpiderPunkArt pose={step} />;
      case 3: return <MilesMoralesArt pose={step} />;
      case 4: return <GhostSpiderArt pose={step} />;
      case 5: default: return <Spider2099Art pose={step} />;
    }
  };

  return (
    <div className="relative w-full max-w-[260px] sm:max-w-[320px] mx-auto flex items-center justify-center my-2 transition-all">
      <div className="absolute inset-0 bg-rose-600/20 rounded-full blur-2xl animate-pulse" />
      {renderHeroArt()}
    </div>
  );
};

export const VillainFullBodyPortrait: React.FC<VillainBattleProps> = ({
  heroId,
  heroName,
  villainName,
  heroQuip,
  villainThreat,
}) => {
  const renderVillainArt = () => {
    switch (heroId) {
      case 1: return <GreenGoblinArt />;
      case 2: return <VultureArt />;
      case 3: return <ProwlerArt />;
      case 4: return <LizardArt />;
      case 5: default: return <SpotArt />;
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto my-3 p-3 sm:p-4 bg-zinc-950/90 border-3 sm:border-4 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.7),6px_6px_0px_#000000] rounded-xl sm:rounded-2xl">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center font-black text-[10px] sm:text-xs py-1 px-2 rounded-t mb-3 uppercase font-mono tracking-wider animate-pulse">
        ⚠️ ENFRENTAMIENTO DE SUPERVILLANO // {villainName}
      </div>

      {/* Split Battle View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center relative">
        {/* HERO SIDE */}
        <div className="flex flex-col items-center p-2.5 bg-zinc-900/90 border-2 border-yellow-400 rounded-lg">
          <span className="text-[10px] font-black text-yellow-400 uppercase font-mono mb-1">
            🛡️ {heroName}
          </span>
          <div className="w-full max-w-[160px] sm:max-w-[200px] h-48 sm:h-56">
            <HeroFullBodyPortrait heroId={heroId} step="villain_confrontation" />
          </div>
          <div className="mt-1 w-full bg-yellow-400 text-black font-black text-[11px] sm:text-xs p-2 rounded border border-black shadow-[2px_2px_0px_#000000] text-center font-mono">
            💬 {heroQuip}
          </div>
        </div>

        {/* VS BADGE */}
        <div className="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-red-600 text-yellow-400 font-black text-lg px-3 py-1 border-3 border-black rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] rotate-12">
          VS!
        </div>

        {/* VILLAIN SIDE */}
        <div className="flex flex-col items-center p-2.5 bg-zinc-900/90 border-2 border-red-600 rounded-lg">
          <span className="text-[10px] font-black text-red-500 uppercase font-mono mb-1">
            👿 {villainName}
          </span>
          <div className="w-full max-w-[160px] sm:max-w-[200px] h-48 sm:h-56">
            {renderVillainArt()}
          </div>
          <div className="mt-1 w-full bg-red-600 text-white font-black text-[11px] sm:text-xs p-2 rounded border border-black shadow-[2px_2px_0px_#000000] text-center font-mono">
            👹 {villainThreat}
          </div>
        </div>
      </div>
    </div>
  );
};
