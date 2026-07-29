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
// 1. PNG IMAGE POSES & UNIQUE POSITION/LOCATION PER STEP & UNIVERSE
// ============================================================================
const HERO_PNG_POSES: Record<number, Record<string, { img: string; positionClass: string; badge: string; quip: string }>> = {
  // EARTH-616: CLASSIC PETER PARKER
  1: {
    intro: {
      img: '/images/hero_616_pose1.png',
      positionClass: 'mx-auto scale-105 rotate-0',
      badge: 'THWIP! // POSE 1',
      quip: '¡Hola Rafis! ¡Tu amigable vecino Spider-Man presente!',
    },
    person: {
      img: '/images/hero_616_pose2.png',
      positionClass: 'mx-auto md:ml-auto md:mr-4 scale-110 rotate-3',
      badge: 'HEROIC POSE 2',
      quip: '¡Tienes el corazón y la luz de un verdadero héroe!',
    },
    comic_twist: {
      img: '/images/hero_616_pose3.png',
      positionClass: 'mx-auto md:mr-auto md:ml-4 scale-100 -rotate-6',
      badge: '⚡ AVISO DOMÉSTICO ⚡',
      quip: '¡Incluso Peter Parker tiene que barrer y limpiar su cuarto!',
    },
    deep_1: {
      img: '/images/hero_616_pose4.png',
      positionClass: 'mx-auto scale-105 -rotate-2',
      badge: 'SKYLINE SWING 4',
      quip: '¡Aún tienes todo un multiverso por vivir y explorar!',
    },
    deep_2: {
      img: '/images/hero_616_pose5.png',
      positionClass: 'mx-auto md:ml-auto md:mr-8 scale-110 rotate-4',
      badge: 'WALL CRAWL 5',
      quip: '¡Dale con tenacidad, valor y mucha alegría!',
    },
    deep_choice: {
      img: '/images/spider_classic.png',
      positionClass: 'mx-auto scale-115 -rotate-3',
      badge: 'UPSIDE DOWN HANG',
      quip: '¡Elegir la alegría siempre es tu mejor superpoder!',
    },
    deep_gods: {
      img: '/images/spider_classic.png',
      positionClass: 'mx-auto scale-125 rotate-0 filter drop-shadow-[0_0_35px_rgba(250,204,21,0.9)]',
      badge: 'GOLDEN AURA POWER',
      quip: '¡Sangre de oro y fuerza invencible de semidioses!',
    },
    final: {
      img: '/images/spider_classic.png',
      positionClass: 'mx-auto scale-110 rotate-2',
      badge: 'VICTORY HERO',
      quip: '¡Tus papás te aman con todo el corazón en cualquier dimensión!',
    },
  },

  // EARTH-138: SPIDER-PUNK (HOBIE BROWN)
  2: {
    intro: {
      img: '/images/spider_punk.png',
      positionClass: 'mx-auto scale-105 -rotate-2',
      badge: 'ANARCHY SOLO 1',
      quip: '¡Hey Rafis! ¡Listos para romper los amplificadores!',
    },
    person: {
      img: '/images/hero_616_pose2.png',
      positionClass: 'mx-auto md:ml-auto md:mr-6 scale-110 rotate-6',
      badge: 'MARSHALL LEAN 2',
      quip: '¡Tu actitud y tu corazón rebelde son pura música!',
    },
    comic_twist: {
      img: '/images/hero_616_pose3.png',
      positionClass: 'mx-auto md:mr-auto md:ml-6 scale-100 -rotate-4',
      badge: '⚡ REGLA PUNK #1 ⚡',
      quip: '¡Ni el punk más anárquico deja su escenario hecho un desorden!',
    },
    deep_1: {
      img: '/images/hero_616_pose4.png',
      positionClass: 'mx-auto scale-105 rotate-3',
      badge: 'STAGE JUMP 4',
      quip: '¡Tienes toda una vida por rockear a tu propio ritmo!',
    },
    deep_2: {
      img: '/images/hero_616_pose5.png',
      positionClass: 'mx-auto md:ml-auto md:mr-4 scale-115 -rotate-2',
      badge: 'AMP BLAST 5',
      quip: '¡Cero reglas aburridas: garra, terquedad y alegría!',
    },
    deep_choice: {
      img: '/images/spider_punk.png',
      positionClass: 'mx-auto scale-110 rotate-2',
      badge: 'PUNK SALUTE',
      quip: '¡Elegir la alegría es tu mayor acto de libertad!',
    },
    deep_gods: {
      img: '/images/spider_punk.png',
      positionClass: 'mx-auto scale-125 rotate-0 filter drop-shadow-[0_0_35px_rgba(250,204,21,0.9)]',
      badge: 'GOLDEN PUNK POWER',
      quip: '¡Espíritu vikingo con sangre de oro 100% pura!',
    },
    final: {
      img: '/images/spider_punk.png',
      positionClass: 'mx-auto scale-110 -rotate-3',
      badge: 'STAGE CLEAR VICTORY',
      quip: '¡Tus papás te aman con una potencia de 1,000,000 de watts!',
    },
  },

  // EARTH-1610: MILES MORALES
  3: {
    intro: {
      img: '/images/spider_miles.png',
      positionClass: 'mx-auto scale-105 rotate-2',
      badge: 'BROOKLYN LEAP 1',
      quip: '¡Qué hay Rafis! ¡Listos para dar el Salto de Fe!',
    },
    person: {
      img: '/images/hero_616_pose2.png',
      positionClass: 'mx-auto md:ml-auto md:mr-6 scale-110 -rotate-3',
      badge: 'LEDGE CHILL 2',
      quip: '¡Tu empatía y tu vibra hacen brillar a todo Brooklyn!',
    },
    comic_twist: {
      img: '/images/hero_616_pose3.png',
      positionClass: 'mx-auto md:mr-auto md:ml-6 scale-100 rotate-5',
      badge: '⚡ MENSAJE BROOKLYN ⚡',
      quip: '¡Hasta en Brooklyn le echamos una mano a los padres en la casa!',
    },
    deep_1: {
      img: '/images/hero_616_pose4.png',
      positionClass: 'mx-auto scale-105 -rotate-4',
      badge: 'UPSIDE DOWN 4',
      quip: '¡Un camino gigante lleno de aventuras te espera!',
    },
    deep_2: {
      img: '/images/hero_616_pose5.png',
      positionClass: 'mx-auto md:ml-auto md:mr-8 scale-115 rotate-3',
      badge: 'VENOM CHARGE 5',
      quip: '¡Desata tu chispa Venom: valentía y determinación!',
    },
    deep_choice: {
      img: '/images/spider_miles.png',
      positionClass: 'mx-auto scale-110 rotate-1',
      badge: 'GRAFFITI ART',
      quip: '¡Pinta tu vida con color, optimismo y esperanza!',
    },
    deep_gods: {
      img: '/images/spider_miles.png',
      positionClass: 'mx-auto scale-125 rotate-0 filter drop-shadow-[0_0_35px_rgba(239,68,68,0.9)]',
      badge: 'GOLDEN SPARK LEAP',
      quip: '¡Sangre de oro y coraje indomable en cada latido!',
    },
    final: {
      img: '/images/spider_miles.png',
      positionClass: 'mx-auto scale-110 -rotate-2',
      badge: 'BROOKLYN CHAMPION',
      quip: '¡Tus papás te aman infinitamente desde Brooklyn al multiverso!',
    },
  },

  // EARTH-65: GHOST-SPIDER (GWEN STACY)
  4: {
    intro: {
      img: '/images/spider_gwen.png',
      positionClass: 'mx-auto scale-105 -rotate-3',
      badge: 'NEON LEAP 1',
      quip: '¡Hola Rafis! ¡Acompaña mi compás en la batería!',
    },
    person: {
      img: '/images/hero_616_pose2.png',
      positionClass: 'mx-auto md:ml-auto md:mr-4 scale-110 rotate-4',
      badge: 'DRUMSTICKS 2',
      quip: '¡Tu dulzura y tu fuerza crean la canción más hermosa!',
    },
    comic_twist: {
      img: '/images/hero_616_pose3.png',
      positionClass: 'mx-auto md:mr-auto md:ml-4 scale-100 -rotate-5',
      badge: '⚡ COMPÁS DOMÉSTICO ⚡',
      quip: '¡Para sonar en armonía, hay que mantener limpia la base!',
    },
    deep_1: {
      img: '/images/hero_616_pose4.png',
      positionClass: 'mx-auto scale-105 rotate-2',
      badge: 'SKYLINE GLIDE 4',
      quip: '¡Toda una sinfonía de momentos felices te espera!',
    },
    deep_2: {
      img: '/images/hero_616_pose5.png',
      positionClass: 'mx-auto md:ml-auto md:mr-6 scale-115 -rotate-3',
      badge: 'DRUM BEAT KICK 5',
      quip: '¡Toca tu canción con carácter, firmeza y resiliencia!',
    },
    deep_choice: {
      img: '/images/spider_gwen.png',
      positionClass: 'mx-auto scale-110 rotate-2',
      badge: 'NEON HEART BEAT',
      quip: '¡La sonrisa es tu mejor melodía de cada día!',
    },
    deep_gods: {
      img: '/images/spider_gwen.png',
      positionClass: 'mx-auto scale-125 rotate-0 filter drop-shadow-[0_0_35px_rgba(236,72,153,0.9)]',
      badge: 'GOLDEN DRUM AURA',
      quip: '¡Semidiosa con coraje vikingo y esencia de oro!',
    },
    final: {
      img: '/images/spider_gwen.png',
      positionClass: 'mx-auto scale-110 -rotate-1',
      badge: 'FINAL CURTAIN CALL',
      quip: '¡Tus papás te aman con toda su alma y compás!',
    },
  },

  // EARTH-2099: MIGUEL O'HARA
  5: {
    intro: {
      img: '/images/spider_2099.png',
      positionClass: 'mx-auto scale-105 rotate-1',
      badge: '2099 STANCE 1',
      quip: 'Atención Rafis: Transmisión cuántica 2099 iniciada.',
    },
    person: {
      img: '/images/hero_616_pose2.png',
      positionClass: 'mx-auto md:ml-auto md:mr-6 scale-110 -rotate-2',
      badge: 'DATAPAD SCAN 2',
      quip: 'Diagnóstico: Eres un ser humano de altísima nobleza.',
    },
    comic_twist: {
      img: '/images/hero_616_pose3.png',
      positionClass: 'mx-auto md:mr-auto md:ml-6 scale-100 rotate-6',
      badge: '⚡ PROTOCOLO 2099 ⚡',
      quip: 'Directiva 2099: Colaborar en las tareas del hogar es canónico.',
    },
    deep_1: {
      img: '/images/hero_616_pose4.png',
      positionClass: 'mx-auto scale-105 -rotate-3',
      badge: 'CAPE DIVE 4',
      quip: 'Análisis: Tienes infinitos sectores por conquistar.',
    },
    deep_2: {
      img: '/images/hero_616_pose5.png',
      positionClass: 'mx-auto md:ml-auto md:mr-8 scale-115 rotate-2',
      badge: 'LASER CLAW 5',
      quip: 'Ejecuta tu camino con máxima energía y adaptación.',
    },
    deep_choice: {
      img: '/images/spider_2099.png',
      positionClass: 'mx-auto scale-110 -rotate-1',
      badge: 'HOLOGRAM CORE',
      quip: 'Directiva principal: Elegir la alegría en cada dimensión.',
    },
    deep_gods: {
      img: '/images/spider_2099.png',
      positionClass: 'mx-auto scale-125 rotate-0 filter drop-shadow-[0_0_35px_rgba(2,132,199,0.9)]',
      badge: 'GOLDEN LASER GRID',
      quip: 'Código genético: Estirpe vikinga con sangre de oro.',
    },
    final: {
      img: '/images/spider_2099.png',
      positionClass: 'mx-auto scale-110 rotate-3',
      badge: 'CANON CONFIRMED',
      quip: 'Evento Canónico: El amor de tus papás es eterno e indestructible.',
    },
  },
};

const VILLAIN_PNG_POSES: Record<number, { img: string; name: string; title: string }> = {
  1: { img: '/images/villain_green_goblin.png', name: 'El Duende Verde', title: '¡DUENDE VERDE // BOMBAS DE CALABAZA!' },
  2: { img: '/images/villain_vulture.png', name: 'Vulture Anarchy', title: '¡VULTURE // ALAS CIBERNÉTICAS!' },
  3: { img: '/images/villain_prowler.png', name: 'El Merodeador', title: '¡PROWLER // GARRAS DE BROOKLYN!' },
  4: { img: '/images/villain_lizard.png', name: 'El Lagarto Mutante', title: '¡EL LAGARTO // FURIA MUTANTE!' },
  5: { img: '/images/villain_spot.png', name: 'The Spot (El Abismo)', title: '¡THE SPOT // PORTALES OSCUROS!' },
};

// ============================================================================
// 2. EXPORTED HERO PORTRAIT WITH UNIQUE PNG & POSITION PER STEP
// ============================================================================
export const HeroFullBodyPortrait: React.FC<HeroPortraitProps> = ({ heroId, step }) => {
  const universePoses = HERO_PNG_POSES[heroId] || HERO_PNG_POSES[1];
  const poseData = universePoses[step] || universePoses.intro;

  return (
    <div className={`relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] h-[220px] sm:h-[280px] md:h-[340px] my-2 transition-all duration-500 ${poseData.positionClass}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-rose-600/20 rounded-full blur-2xl animate-pulse pointer-events-none" />

      {/* Real Transparent PNG Character Render */}
      <img
        src={poseData.img}
        alt="Spider-Man Hero"
        className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-transform"
      />

      {/* Action Tag Badge */}
      <div className="absolute top-2 right-0 bg-yellow-400 text-black font-black text-[10px] sm:text-xs px-2 py-0.5 border-2 border-black rotate-6 shadow-[2px_2px_0px_#000] uppercase font-mono z-20">
        {poseData.badge}
      </div>

      {/* Comic Speech Quip Bubble */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[92%] bg-zinc-900/95 text-white font-bold text-[11px] sm:text-xs p-2 rounded-xl border-2 border-yellow-400 shadow-[3px_3px_0px_#000000] z-20 text-center font-sans">
        💬 <span className="text-yellow-300">{poseData.quip}</span>
      </div>
    </div>
  );
};

// ============================================================================
// 3. EXPORTED VILLAIN BATTLE PORTRAIT WITH ACCURATE VILLAIN PNG
// ============================================================================
export const VillainFullBodyPortrait: React.FC<VillainBattleProps> = ({
  heroId,
  heroName,
  villainName,
  heroQuip,
  villainThreat,
}) => {
  const heroPoses = HERO_PNG_POSES[heroId] || HERO_PNG_POSES[1];
  const heroImg = heroPoses.intro.img;
  const villain = VILLAIN_PNG_POSES[heroId] || VILLAIN_PNG_POSES[1];

  return (
    <div className="relative w-full max-w-2xl mx-auto my-3 p-3 sm:p-4 bg-zinc-950/95 border-3 sm:border-4 border-red-600 shadow-[0_0_35px_rgba(220,38,38,0.8),6px_6px_0px_#000000] rounded-xl sm:rounded-2xl">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center font-black text-[10px] sm:text-xs py-1 px-2 rounded-t mb-3 uppercase font-mono tracking-wider animate-pulse">
        ⚠️ {villain.title}
      </div>

      {/* Split Battle View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center relative">
        {/* HERO SIDE */}
        <div className="flex flex-col items-center p-2.5 bg-zinc-900/90 border-2 border-yellow-400 rounded-lg">
          <span className="text-[10px] font-black text-yellow-400 uppercase font-mono mb-1">
            🛡️ {heroName}
          </span>
          <div className="w-full max-w-[160px] sm:max-w-[200px] h-44 sm:h-52 relative">
            <img
              src={heroImg}
              alt={heroName}
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]"
            />
          </div>
          <div className="mt-1 w-full bg-yellow-400 text-black font-black text-[10px] sm:text-xs p-2 rounded border border-black shadow-[2px_2px_0px_#000000] text-center font-mono">
            💬 {heroQuip}
          </div>
        </div>

        {/* VS BADGE */}
        <div className="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-red-600 text-yellow-400 font-black text-lg px-3 py-1 border-3 border-black rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] rotate-12">
          VS!
        </div>

        {/* VILLAIN SIDE WITH REAL ACCURATE VILLAIN PNG */}
        <div className="flex flex-col items-center p-2.5 bg-zinc-900/90 border-2 border-red-600 rounded-lg">
          <span className="text-[10px] font-black text-red-500 uppercase font-mono mb-1">
            👿 {villainName}
          </span>
          <div className="w-full max-w-[160px] sm:max-w-[200px] h-44 sm:h-52 relative">
            <img
              src={villain.img}
              alt={villainName}
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(239,68,68,0.9)] contrast-125 brightness-95"
            />
          </div>
          <div className="mt-1 w-full bg-red-600 text-white font-black text-[10px] sm:text-xs p-2 rounded border border-black shadow-[2px_2px_0px_#000000] text-center font-mono">
            👹 {villainThreat}
          </div>
        </div>
      </div>
    </div>
  );
};
