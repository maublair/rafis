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
// 1. UNIQUE DYNAMIC HERO POSES PER STEP & UNIVERSE
// ============================================================================
const HERO_POSES: Record<number, Record<string, { img: string; quip: string; actionTag: string }>> = {
  // --------------------------------------------------------------------------
  // EARTH-616: PETER PARKER
  // --------------------------------------------------------------------------
  1: {
    intro: {
      img: '/images/spider_classic.png',
      quip: '¡Hola Rafis! ¡Tu amigable vecino Spider-Man presente!',
      actionTag: 'THWIP! // POSE DE INICIO',
    },
    person: {
      img: '/images/spider_classic.png',
      quip: '¡Tienes el corazón y la luz de un verdadero héroe!',
      actionTag: 'HEROIC THUMB-UP',
    },
    comic_twist: {
      img: '/images/spider_classic.png',
      quip: '¡Incluso Peter Parker tiene que barrer y limpiar su cuarto!',
      actionTag: '⚡ AVISO DOMÉSTICO ⚡',
    },
    deep_1: {
      img: '/images/spider_classic.png',
      quip: '¡Aún tienes todo un multiverso por vivir y explorar!',
      actionTag: 'WEB SWINGING HIGH',
    },
    deep_2: {
      img: '/images/spider_classic.png',
      quip: '¡Dale con tenacidad, valor y mucha alegría!',
      actionTag: 'WALL CRAWL ACTION',
    },
    deep_choice: {
      img: '/images/spider_classic.png',
      quip: '¡Elegir la alegría siempre es tu mejor superpoder!',
      actionTag: 'UPSIDE DOWN HANG',
    },
    deep_gods: {
      img: '/images/spider_classic.png',
      quip: '¡Sangre de oro y fuerza invencible de semidioses!',
      actionTag: 'GOLDEN AURA POWER',
    },
    final: {
      img: '/images/spider_classic.png',
      quip: '¡Tus papás te aman con todo el corazón en cualquier dimensión!',
      actionTag: 'VICTORY HERO POSE',
    },
  },

  // --------------------------------------------------------------------------
  // EARTH-138: SPIDER-PUNK (HOBIE BROWN)
  // --------------------------------------------------------------------------
  2: {
    intro: {
      img: '/images/spider_punk.png',
      quip: '¡Hey Rafis! ¡Listos para romper los amplificadores!',
      actionTag: 'ANARCHY GUITAR SOLO',
    },
    person: {
      img: '/images/spider_punk.png',
      quip: '¡Tu actitud y tu corazón rebelde son pura música!',
      actionTag: 'PUNK ROCK LEAN',
    },
    comic_twist: {
      img: '/images/spider_punk.png',
      quip: '¡Ni el punk más anárquico deja su escenario hecho un desorden!',
      actionTag: '⚡ REGLA PUNK #1 ⚡',
    },
    deep_1: {
      img: '/images/spider_punk.png',
      quip: '¡Tienes toda una vida por rockear a tu propio ritmo!',
      actionTag: 'HIGH STAGE JUMP',
    },
    deep_2: {
      img: '/images/spider_punk.png',
      quip: '¡Cero reglas aburridas: garra, terquedad y alegría!',
      actionTag: 'AMPLIFIER BLAST',
    },
    deep_choice: {
      img: '/images/spider_punk.png',
      quip: '¡Elegir la alegría es tu mayor acto de libertad!',
      actionTag: 'PUNK ROCK SALUTE',
    },
    deep_gods: {
      img: '/images/spider_punk.png',
      quip: '¡Espíritu vikingo con sangre de oro 100% pura!',
      actionTag: 'GOLDEN PUNK POWER',
    },
    final: {
      img: '/images/spider_punk.png',
      quip: '¡Tus papás te aman con una potencia de 1,000,000 de watts!',
      actionTag: 'STAGE CLEAR VICTORY',
    },
  },

  // --------------------------------------------------------------------------
  // EARTH-1610: MILES MORALES
  // --------------------------------------------------------------------------
  3: {
    intro: {
      img: '/images/spider_miles.png',
      quip: '¡Qué hay Rafis! ¡Listos para dar el Salto de Fe!',
      actionTag: 'BROOKLYN LEAP OF FAITH',
    },
    person: {
      img: '/images/spider_miles.png',
      quip: '¡Tu empatía y tu vibra hacen brillar a todo Brooklyn!',
      actionTag: 'HOODIE LEDGE CHILL',
    },
    comic_twist: {
      img: '/images/spider_miles.png',
      quip: '¡Hasta en Brooklyn le echamos una mano a los padres en la casa!',
      actionTag: '⚡ MENSAJE DE BROOKLYN ⚡',
    },
    deep_1: {
      img: '/images/spider_miles.png',
      quip: '¡Un camino gigante lleno de aventuras te espera!',
      actionTag: 'UPSIDE DOWN SWING',
    },
    deep_2: {
      img: '/images/spider_miles.png',
      quip: '¡Desata tu chispa Venom: valentía y determinación!',
      actionTag: 'VENOM BLAST CHARGE',
    },
    deep_choice: {
      img: '/images/spider_miles.png',
      quip: '¡Pinta tu vida con color, optimismo y esperanza!',
      actionTag: 'GRAFFITI HEART ART',
    },
    deep_gods: {
      img: '/images/spider_miles.png',
      quip: '¡Sangre de oro y coraje indomable en cada latido!',
      actionTag: 'GOLDEN SPARK LEAP',
    },
    final: {
      img: '/images/spider_miles.png',
      quip: '¡Tus papás te aman infinitamente desde Brooklyn al multiverso!',
      actionTag: 'BROOKLYN CHAMPION',
    },
  },

  // --------------------------------------------------------------------------
  // EARTH-65: GHOST-SPIDER (GWEN STACY)
  // --------------------------------------------------------------------------
  4: {
    intro: {
      img: '/images/spider_gwen.png',
      quip: '¡Hola Rafis! ¡Acompaña mi compás en la batería!',
      actionTag: 'NEON BALLET LEAP',
    },
    person: {
      img: '/images/spider_gwen.png',
      quip: '¡Tu dulzura y tu fuerza crean la canción más hermosa!',
      actionTag: 'DRUMSTICK TWIRL',
    },
    comic_twist: {
      img: '/images/spider_gwen.png',
      quip: '¡Para sonar en armonía, hay que mantener limpia la base!',
      actionTag: '⚡ COMPÁS DOMÉSTICO ⚡',
    },
    deep_1: {
      img: '/images/spider_gwen.png',
      quip: '¡Toda una sinfonía de momentos felices te espera!',
      actionTag: 'SKYLINE GLIDE',
    },
    deep_2: {
      img: '/images/spider_gwen.png',
      quip: '¡Toca tu canción con carácter, firmeza y resiliencia!',
      actionTag: 'HIGH DRUM BEAT KICK',
    },
    deep_choice: {
      img: '/images/spider_gwen.png',
      quip: '¡La sonrisa es tu mejor melodía de cada día!',
      actionTag: 'NEON HEART BEAT',
    },
    deep_gods: {
      img: '/images/spider_gwen.png',
      quip: '¡Semidiosa con coraje vikingo y esencia de oro!',
      actionTag: 'GOLDEN DRUM AURA',
    },
    final: {
      img: '/images/spider_gwen.png',
      quip: '¡Tus papás te aman con toda su alma y compás!',
      actionTag: 'FINAL CURTAIN CALL',
    },
  },

  // --------------------------------------------------------------------------
  // EARTH-2099: MIGUEL O'HARA
  // --------------------------------------------------------------------------
  5: {
    intro: {
      img: '/images/spider_2099.png',
      quip: 'Atención Rafis: Transmisión cuántica 2099 iniciada.',
      actionTag: '2099 HOLOGRAM STANCE',
    },
    person: {
      img: '/images/spider_2099.png',
      quip: 'Diagnóstico: Eres un ser humano de altísima nobleza.',
      actionTag: 'DATAPAD SCANNER',
    },
    comic_twist: {
      img: '/images/spider_2099.png',
      quip: 'Directiva 2099: Colaborar en las tareas del hogar es canónico.',
      actionTag: '⚡ PROTOCOLO ALFA 2099 ⚡',
    },
    deep_1: {
      img: '/images/spider_2099.png',
      quip: 'Análisis: Tienes infinitos sectores por conquistar.',
      actionTag: 'LASER CAPE DIVE',
    },
    deep_2: {
      img: '/images/spider_2099.png',
      quip: 'Ejecuta tu camino con máxima energía y adaptación.',
      actionTag: 'LASER CLAW CHARGE',
    },
    deep_choice: {
      img: '/images/spider_2099.png',
      quip: 'Directiva principal: Elegir la alegría en cada dimensión.',
      actionTag: 'HOLOGRAM HEART CORE',
    },
    deep_gods: {
      img: '/images/spider_2099.png',
      quip: 'Código genético: Estirpe vikinga con sangre de oro.',
      actionTag: 'GOLDEN LASER GRID',
    },
    final: {
      img: '/images/spider_2099.png',
      quip: 'Evento Canónico: El amor de tus papás es eterno e indestructible.',
      actionTag: 'CANON EVENT CONFIRMED',
    },
  },
};

// ============================================================================
// VILLAIN IMAGES & DETAILS PER UNIVERSE
// ============================================================================
const VILLAIN_DETAILS: Record<number, { img: string; name: string; title: string }> = {
  1: { img: '/images/villain_green_goblin.png', name: 'El Duende Verde', title: '¡DUENDE VERDE // BOMBAS DE CALABAZA!' },
  2: { img: '/images/villain_vulture.png', name: 'Vulture Anarchy', title: '¡VULTURE // ALAS CIBERNÉTICAS!' },
  3: { img: '/images/villain_prowler.png', name: 'El Merodeador', title: '¡PROWLER // GARRAS DE BROOKLYN!' },
  4: { img: '/images/villain_lizard.png', name: 'El Lagarto Mutante', title: '¡EL LAGARTO // FURIA MUTANTE!' },
  5: { img: '/images/villain_spot.png', name: 'The Spot (El Abismo)', title: '¡THE SPOT // PORTALES OSCUROS!' },
};

// ============================================================================
// COMPONENT: HERO FULL BODY PORTRAIT WITH UNIVERSE & STEP SPECIFIC POSE
// ============================================================================
export const HeroFullBodyPortrait: React.FC<HeroPortraitProps> = ({ heroId, step }) => {
  const universePoses = HERO_POSES[heroId] || HERO_POSES[1];
  const poseData = universePoses[step] || universePoses.intro;

  return (
    <div className="relative w-64 h-80 sm:w-80 sm:h-[420px] mx-auto flex items-center justify-center my-2 filter drop-shadow-[0_0_25px_rgba(255,230,0,0.6)]">
      {/* Background Neon Glow Aura */}
      <div className="absolute inset-0 bg-rose-600/30 rounded-full blur-3xl animate-pulse" />

      {/* Full Body Character Image Render */}
      <img
        src={poseData.img}
        alt="Spider-Man Hero"
        className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-105"
      />

      {/* Action Tag Badge */}
      <div className="absolute top-2 right-0 bg-yellow-400 text-black font-black text-[11px] sm:text-xs px-2.5 py-1 border-2 border-black rotate-6 shadow-[3px_3px_0px_#000000] z-20 uppercase font-mono">
        {poseData.actionTag}
      </div>

      {/* Comic Hero Witty Banter Bubble */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-zinc-900 text-white font-bold text-xs p-2.5 rounded-xl border-2 border-yellow-400 shadow-[4px_4px_0px_#000000] z-20 text-center font-sans">
        💬 <span className="text-yellow-400">{poseData.quip}</span>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT: BATTLE CONFRONTATION PORTRAIT (SPIDER-HERO vs VILLAIN BANTER)
// ============================================================================
export const VillainFullBodyPortrait: React.FC<VillainBattleProps> = ({
  heroId,
  heroName,
  villainName,
  heroQuip,
  villainThreat,
}) => {
  const heroPoses = HERO_POSES[heroId] || HERO_POSES[1];
  const heroImg = heroPoses.intro.img;
  const villain = VILLAIN_DETAILS[heroId] || VILLAIN_DETAILS[1];

  return (
    <div className="relative w-full max-w-2xl mx-auto my-4 p-4 bg-zinc-950/90 border-4 border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.8),8px_8px_0px_#000000] rounded-2xl">
      {/* Top Threat Banner */}
      <div className="bg-red-600 text-white text-center font-black text-xs sm:text-sm py-1.5 px-3 rounded-t-lg mb-4 border-b-2 border-black uppercase font-mono tracking-widest animate-pulse">
        {villain.title}
      </div>

      {/* Split Battle View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center relative">
        {/* HERO SIDE */}
        <div className="flex flex-col items-center relative p-3 bg-zinc-900/80 border-2 border-yellow-400 rounded-xl">
          <span className="text-[10px] font-black text-yellow-400 uppercase font-mono mb-1">
            🛡️ {heroName}
          </span>

          <div className="relative w-44 h-56 sm:w-52 sm:h-64">
            <img
              src={heroImg}
              alt={heroName}
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]"
            />
          </div>

          {/* Hero Witty Banter Speech Bubble */}
          <div className="mt-2 w-full bg-yellow-400 text-black font-black text-xs p-2.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000000] text-center font-mono">
            💬 {heroQuip}
          </div>
        </div>

        {/* VS CLASH BADGE */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-red-600 text-yellow-400 font-black text-xl px-4 py-2 border-4 border-black rounded-full shadow-[0_0_20px_rgba(239,68,68,1)] rotate-12">
          VS!
        </div>

        {/* VILLAIN SIDE */}
        <div className="flex flex-col items-center relative p-3 bg-zinc-900/80 border-2 border-red-600 rounded-xl">
          <span className="text-[10px] font-black text-red-500 uppercase font-mono mb-1">
            ⚠️ {villainName}
          </span>

          <div className="relative w-44 h-56 sm:w-52 sm:h-64">
            <img
              src={villain.img}
              alt={villainName}
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(239,68,68,0.9)] contrast-125 brightness-90"
            />
          </div>

          {/* Villain Threat Speech Bubble */}
          <div className="mt-2 w-full bg-red-600 text-white font-black text-xs p-2.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000000] text-center font-mono">
            👿 {villainThreat}
          </div>
        </div>
      </div>
    </div>
  );
};
