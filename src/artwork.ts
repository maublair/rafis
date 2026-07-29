import React from 'react';

// ============================================================================
// 1. ARTWORK COMPONENT: FULL BODY SPIDER-HEROES
// ============================================================================
export const HeroFullBodyPortrait: React.FC<{ heroId: number; heroName: string }> = ({ heroId }) => {
  switch (heroId) {
    case 1: // EARTH-616: SPIDER-MAN CLÁSICO
      return (
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            {/* Background Webing & Explosive Rays */}
            <path d="M 150 200 L 0 0 M 150 200 L 300 0 M 150 200 L 0 400 M 150 200 L 300 400 M 150 200 L 150 0 M 150 200 L 150 400" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
            <circle cx="150" cy="200" r="80" stroke="#facc15" strokeWidth="2" fill="none" opacity="0.4" />
            <circle cx="150" cy="200" r="140" stroke="#dc2626" strokeWidth="1" fill="none" opacity="0.3" />

            {/* Full Body Classic Spider-Man Pose */}
            {/* Legs */}
            <path d="M 100 290 L 70 370 L 40 380" fill="none" stroke="#2563eb" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 200 290 L 230 370 L 260 380" fill="none" stroke="#2563eb" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 40 380 L 25 390 M 260 380 L 275 390" stroke="#dc2626" strokeWidth="24" strokeLinecap="round" />

            {/* Torso & Suit */}
            <path d="M 110 160 L 190 160 L 175 290 L 125 290 Z" fill="#dc2626" stroke="#000" strokeWidth="4" />
            <path d="M 125 160 L 110 290 M 175 160 L 190 290" fill="none" stroke="#2563eb" strokeWidth="14" />

            {/* Spider Emblem on Chest */}
            <path d="M 150 200 L 140 215 L 150 225 L 160 215 Z M 150 200 L 130 185 M 150 200 L 170 185 M 150 225 L 125 245 M 150 225 L 175 245" fill="#000" stroke="#000" strokeWidth="3" />

            {/* Arms - Dynamic Web Slinging Pose */}
            <path d="M 110 170 L 40 130 L 10 90" fill="none" stroke="#dc2626" strokeWidth="22" strokeLinecap="round" />
            <path d="M 190 170 L 260 130 L 290 80" fill="none" stroke="#dc2626" strokeWidth="22" strokeLinecap="round" />
            {/* White Web Shooters Line */}
            <path d="M 10 90 L -20 -20 M 290 80 L 330 -10" stroke="#ffffff" strokeWidth="4" strokeDasharray="4,2" />

            {/* Head Mask */}
            <ellipse cx="150" cy="115" rx="42" ry="52" fill="#dc2626" stroke="#000" strokeWidth="5" />
            {/* Mask Eyes */}
            <path d="M 120 110 Q 140 100 148 120 Q 130 130 120 110 Z" fill="#ffffff" stroke="#000" strokeWidth="4" />
            <path d="M 180 110 Q 160 100 152 120 Q 170 130 180 110 Z" fill="#ffffff" stroke="#000" strokeWidth="4" />

            {/* Comic Sound Onomatopoeia Badge */}
            <g transform="translate(190, 40) rotate(12)">
              <polygon points="0,15 15,0 45,5 60,25 45,45 15,40" fill="#facc15" stroke="#000" strokeWidth="3" />
              <text x="30" y="27" textAnchor="middle" fill="#000" fontSize="14" fontWeight="900" fontFamily="sans-serif">THWIP!</text>
            </g>
          </svg>
        </div>
      );

    case 2: // EARTH-138: SPIDER-PUNK (HOBIE BROWN)
      return (
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex items-center justify-center filter drop-shadow-[0_0_25px_rgba(250,204,21,0.8)]">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            {/* Grunge Spikes & Punk Rays */}
            <polygon points="150,20 170,80 230,40 200,100 280,110 210,150 290,200 210,230 270,300 190,290 200,380 140,310 90,380 100,290 200" fill="#facc15" opacity="0.2" />

            {/* Spider-Punk Body & Denim Vest */}
            <path d="M 90 300 L 60 380 M 210 300 L 240 380" stroke="#e11d48" strokeWidth="26" strokeLinecap="round" />
            <path d="M 110 160 L 190 160 L 175 300 L 125 300 Z" fill="#e11d48" stroke="#000" strokeWidth="4" />
            {/* Denim Vest */}
            <path d="M 105 160 L 140 160 L 135 270 L 110 260 Z M 195 160 L 160 160 L 165 270 L 190 260 Z" fill="#1e293b" stroke="#facc15" strokeWidth="3" />

            {/* Electric Guitar */}
            <path d="M 50 240 L 250 140" stroke="#06b6d4" strokeWidth="12" strokeLinecap="round" />
            <polygon points="40,220 80,210 70,270 20,250" fill="#e11d48" stroke="#000" strokeWidth="3" />
            <path d="M 230 150 L 270 130" stroke="#facc15" strokeWidth="6" />

            {/* Spiked Mask */}
            <ellipse cx="150" cy="110" rx="40" ry="50" fill="#e11d48" stroke="#000" strokeWidth="4" />
            {/* Mohican Spikes */}
            <polygon points="150,40 140,65 160,65" fill="#facc15" stroke="#000" strokeWidth="2" />
            <polygon points="150,20 138,50 162,50" fill="#facc15" stroke="#000" strokeWidth="2" />
            <polygon points="150,0 135,35 165,35" fill="#facc15" stroke="#000" strokeWidth="2" />

            {/* Eyes */}
            <path d="M 122 105 L 145 115 L 125 125 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />
            <path d="M 178 105 L 155 115 L 175 125 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />

            {/* Punk Badge */}
            <g transform="translate(15, 30) rotate(-15)">
              <rect x="0" y="0" width="90" height="35" fill="#facc15" stroke="#000" strokeWidth="3" />
              <text x="45" y="23" textAnchor="middle" fill="#000" fontSize="13" fontWeight="900" fontFamily="sans-serif">ANARCHY!</text>
            </g>
          </svg>
        </div>
      );

    case 3: // EARTH-1610: MILES MORALES (BROOKLYN GRAFFITI LEAP OF FAITH)
      return (
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex items-center justify-center filter drop-shadow-[0_0_25px_rgba(239,68,68,0.8)]">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            {/* Chromatic Glitch Background */}
            <rect x="20" y="20" width="260" height="360" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.3" transform="translate(4, 4)" />
            <rect x="20" y="20" width="260" height="360" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.4" transform="translate(-4, -4)" />

            {/* Full Body Miles Suit (Black & Red Spray Paint Style) */}
            <path d="M 90 280 L 50 370 M 210 280 L 250 370" stroke="#09090b" strokeWidth="28" strokeLinecap="round" />
            {/* Red Sneakers */}
            <path d="M 50 370 L 25 385 M 250 370 L 275 385" stroke="#ef4444" strokeWidth="20" strokeLinecap="round" />

            <path d="M 110 150 L 190 150 L 175 280 L 125 280 Z" fill="#09090b" stroke="#ef4444" strokeWidth="4" />

            {/* Spray Painted Red Spider Emblem */}
            <path d="M 150 180 Q 130 195 150 230 Q 170 195 150 180 Z M 150 190 L 110 170 M 150 190 L 190 170 M 150 210 L 105 240 M 150 210 L 195 240" fill="#ef4444" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />

            {/* Arms - Dynamic Upside Down Leap Pose */}
            <path d="M 110 160 L 40 220 L 10 260" fill="none" stroke="#09090b" strokeWidth="22" strokeLinecap="round" />
            <path d="M 190 160 L 260 220 L 290 260" fill="none" stroke="#09090b" strokeWidth="22" strokeLinecap="round" />

            {/* Mask */}
            <ellipse cx="150" cy="100" rx="42" ry="50" fill="#09090b" stroke="#ef4444" strokeWidth="4" />
            {/* Large White Eyes with Red Rim */}
            <path d="M 118 95 Q 142 85 148 108 Q 130 122 118 95 Z" fill="#ffffff" stroke="#ef4444" strokeWidth="4" />
            <path d="M 182 95 Q 158 85 152 108 Q 170 122 182 95 Z" fill="#ffffff" stroke="#ef4444" strokeWidth="4" />

            {/* Graffiti Callout */}
            <g transform="translate(170, 20) rotate(8)">
              <rect x="0" y="0" width="110" height="35" fill="#ef4444" stroke="#ffffff" strokeWidth="2" rx="6" />
              <text x="55" y="23" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="sans-serif">LEAP OF FAITH!</text>
            </g>
          </svg>
        </div>
      );

    case 4: // EARTH-65: GHOST-SPIDER (GWEN STACY)
      return (
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex items-center justify-center filter drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            {/* Neon Pink & Cyan Audio Drum Wave Background */}
            <circle cx="150" cy="180" r="110" fill="none" stroke="#ec4899" strokeWidth="3" opacity="0.4" strokeDasharray="8,4" />
            <circle cx="150" cy="180" r="140" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.3" />

            {/* Sleek White & Pink Suit Body */}
            <path d="M 100 280 L 70 370 M 200 280 L 230 370" stroke="#38bdf8" strokeWidth="22" strokeLinecap="round" />
            <path d="M 110 150 L 190 150 L 175 280 L 125 280 Z" fill="#ffffff" stroke="#000" strokeWidth="4" />

            {/* Cyan/Pink Inner Webbing accents */}
            <path d="M 110 150 L 140 280 M 190 150 L 160 280" stroke="#ec4899" strokeWidth="8" />

            {/* Arms - Drumsticks / Graceful Pose */}
            <path d="M 110 160 L 40 120 L 15 70" fill="none" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
            <path d="M 190 160 L 260 120 L 285 70" fill="none" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />

            {/* Iconic Gwen White Hood */}
            <path d="M 95 120 Q 150 20 205 120 Q 150 170 95 120 Z" fill="#ffffff" stroke="#000" strokeWidth="4" />
            <path d="M 105 115 Q 150 45 195 115 Q 150 155 105 115 Z" fill="#ec4899" opacity="0.3" />

            {/* Mask inside Hood */}
            <ellipse cx="150" cy="110" rx="32" ry="38" fill="#ffffff" stroke="#000" strokeWidth="3" />
            {/* Vibrant Pink Mask Eyes */}
            <path d="M 128 105 Q 142 95 146 112 Q 135 120 128 105 Z" fill="#ec4899" stroke="#38bdf8" strokeWidth="3" />
            <path d="M 172 105 Q 158 95 154 112 Q 165 120 172 105 Z" fill="#ec4899" stroke="#38bdf8" strokeWidth="3" />

            {/* Rhythm Badge */}
            <g transform="translate(170, 30) rotate(-10)">
              <rect x="0" y="0" width="110" height="35" fill="#ec4899" stroke="#ffffff" strokeWidth="2" rx="15" />
              <text x="55" y="22" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="sans-serif">DRUM BEAT!</text>
            </g>
          </svg>
        </div>
      );

    case 5: default: // EARTH-2099: MIGUEL O'HARA
      return (
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex items-center justify-center filter drop-shadow-[0_0_30px_rgba(2,132,199,0.9)]">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            {/* Cyberpunk Nueva York Hologram Grid */}
            <polygon points="150,10 290,100 290,300 150,390 10,300 10,100" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="6,3" opacity="0.5" />
            <line x1="150" y1="10" x2="150" y2="390" stroke="#f43f5e" strokeWidth="1" opacity="0.4" />

            {/* Imposing Futuristic 2099 Suit */}
            <path d="M 90 270 L 60 380 M 210 270 L 240 380" stroke="#0284c7" strokeWidth="32" strokeLinecap="round" />
            <path d="M 100 140 L 200 140 L 180 280 L 120 280 Z" fill="#030712" stroke="#0284c7" strokeWidth="5" />

            {/* Glowing Red Laser Skull Emblem */}
            <path d="M 150 160 L 130 190 L 150 230 L 170 190 Z" fill="#f43f5e" />
            <path d="M 150 160 L 105 145 M 150 160 L 195 145 M 150 230 L 100 270 M 150 230 L 200 270" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />

            {/* Heavy Arm Muscles with Laser Spikes */}
            <path d="M 100 150 L 30 190 L 10 240" fill="none" stroke="#0284c7" strokeWidth="26" strokeLinecap="round" />
            <path d="M 200 150 L 270 190 L 290 240" fill="none" stroke="#0284c7" strokeWidth="26" strokeLinecap="round" />
            {/* Laser Arm Blades */}
            <polygon points="20,180 0,160 25,200" fill="#f43f5e" />
            <polygon points="280,180 300,160 275,200" fill="#f43f5e" />

            {/* Futuristic Head & Red Glowing Visor */}
            <polygon points="150,60 195,100 180,135 120,135 105,100" fill="#030712" stroke="#0284c7" strokeWidth="4" />
            <path d="M 125 100 L 150 115 L 175 100 L 150 90 Z" fill="#f43f5e" filter="drop-shadow(0 0 8px #f43f5e)" />

            {/* Canon 2099 Badge */}
            <g transform="translate(160, 25) rotate(5)">
              <rect x="0" y="0" width="125" height="35" fill="#0284c7" stroke="#f43f5e" strokeWidth="2" />
              <text x="62" y="23" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="monospace">CANON EVENT 2099</text>
            </g>
          </svg>
        </div>
      );
  }
};

// ============================================================================
// 2. ARTWORK COMPONENT: FULL BODY SUPERVILLAIN ACTION PORTRAITS
// ============================================================================
export const VillainFullBodyPortrait: React.FC<{ heroId: number; villainName: string }> = ({ heroId }) => {
  switch (heroId) {
    case 1: // EARTH-616 VILLAIN: GREEN GOBLIN (DUENDE VERDE)
      return (
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex items-center justify-center filter drop-shadow-[0_0_30px_rgba(34,197,94,0.9)] animate-pulse">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            {/* Fiery Glider Explosion Background */}
            <circle cx="150" cy="300" r="80" fill="#f97316" opacity="0.5" />
            <polygon points="50,320 150,260 250,320 150,380" fill="#475569" stroke="#22c55e" strokeWidth="4" />
            <circle cx="60" cy="320" r="15" fill="#f59e0b" />
            <circle cx="240" cy="320" r="15" fill="#f59e0b" />

            {/* Green Goblin Body & Purple Armor */}
            <path d="M 110 160 L 190 160 L 175 270 L 125 270 Z" fill="#22c55e" stroke="#000" strokeWidth="4" />
            {/* Purple Tunic */}
            <path d="M 120 160 L 180 160 L 165 240 L 135 240 Z" fill="#a855f7" stroke="#000" strokeWidth="3" />

            {/* Menacing Arms & Glowing Pumpkin Bomb */}
            <path d="M 110 170 L 40 210" fill="none" stroke="#22c55e" strokeWidth="22" strokeLinecap="round" />
            <path d="M 190 170 L 250 140 L 270 100" fill="none" stroke="#22c55e" strokeWidth="22" strokeLinecap="round" />
            {/* Glowing Pumpkin Bomb */}
            <circle cx="275" cy="90" r="22" fill="#ea580c" stroke="#facc15" strokeWidth="3" />
            <path d="M 268 85 L 273 95 L 282 85" fill="none" stroke="#000" strokeWidth="3" />

            {/* Goblin Head & Pointed Cap */}
            <ellipse cx="150" cy="110" rx="38" ry="46" fill="#22c55e" stroke="#000" strokeWidth="4" />
            <polygon points="150,40 185,90 115,90" fill="#a855f7" stroke="#000" strokeWidth="3" />
            {/* Yellow Evil Eyes & Sinister Smile */}
            <ellipse cx="132" cy="110" rx="10" ry="14" fill="#facc15" stroke="#000" strokeWidth="2" />
            <ellipse cx="168" cy="110" rx="10" ry="14" fill="#facc15" stroke="#000" strokeWidth="2" />
            <path d="M 125 135 Q 150 155 175 135 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />

            {/* Villain Speech Bubble */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="160" height="48" fill="#a855f7" stroke="#000" strokeWidth="3" rx="10" />
              <text x="80" y="20" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">¡LA TRISTEZA ES TU</text>
              <text x="80" y="36" textAnchor="middle" fill="#facc15" fontSize="12" fontWeight="900" fontFamily="sans-serif">MAYOR ENEMIGO!</text>
            </g>
          </svg>
        </div>
      );

    case 2: // EARTH-138 VILLAIN: VULTURE ANARCHIST / SINDICATO
      return (
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex items-center justify-center filter drop-shadow-[0_0_30px_rgba(225,29,72,0.9)] animate-pulse">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            {/* Spiked Metallic Wings */}
            <path d="M 150 180 L 10 90 L 30 250 L 120 230 Z" fill="#334155" stroke="#e11d48" strokeWidth="4" />
            <path d="M 150 180 L 290 90 L 270 250 L 180 230 Z" fill="#334155" stroke="#e11d48" strokeWidth="4" />

            {/* Dark Leather Armor Body */}
            <path d="M 110 160 L 190 160 L 175 300 L 125 300 Z" fill="#0f172a" stroke="#e11d48" strokeWidth="4" />
            <path d="M 100 300 L 70 380 M 200 300 L 230 380" stroke="#0f172a" strokeWidth="26" strokeLinecap="round" />

            {/* Cybernetic Clawed Hands */}
            <path d="M 110 180 L 50 240" stroke="#e11d48" strokeWidth="18" strokeLinecap="round" />
            <path d="M 190 180 L 250 240" stroke="#e11d48" strokeWidth="18" strokeLinecap="round" />

            {/* Mask & Spiked Visor */}
            <ellipse cx="150" cy="110" rx="38" ry="46" fill="#1e293b" stroke="#e11d48" strokeWidth="4" />
            <path d="M 120 110 L 180 110 L 150 135 Z" fill="#e11d48" />

            {/* Villain Speech Bubble */}
            <g transform="translate(130, 20) rotate(5)">
              <rect x="0" y="0" width="160" height="48" fill="#e11d48" stroke="#000" strokeWidth="3" rx="4" />
              <text x="80" y="20" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">¡ROMPERÉ TU RITMO</text>
              <text x="80" y="36" textAnchor="middle" fill="#facc15" fontSize="12" fontWeight="900" fontFamily="sans-serif">CON DUDAS Y MIEDO!</text>
            </g>
          </svg>
        </div>
      );

    case 3: // EARTH-1610 VILLAIN: THE PROWLER (EL MERODEADOR)
      return (
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex items-center justify-center filter drop-shadow-[0_0_35px_rgba(168,85,247,0.9)] animate-pulse">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            {/* Glowing Purple Electro Aura */}
            <circle cx="150" cy="180" r="120" fill="none" stroke="#a855f7" strokeWidth="4" opacity="0.5" strokeDasharray="10,5" />

            {/* Heavy Purple & Green Prowler Armor */}
            <path d="M 90 280 L 60 380 M 210 280 L 240 380" stroke="#3b0764" strokeWidth="30" strokeLinecap="round" />
            <path d="M 105 140 L 195 140 L 180 280 L 120 280 Z" fill="#1e1b4b" stroke="#a855f7" strokeWidth="5" />

            {/* Energy Claw Arms (Threatening Attack Pose) */}
            <path d="M 105 160 L 30 180 L 10 230" fill="none" stroke="#3b0764" strokeWidth="24" strokeLinecap="round" />
            <path d="M 195 160 L 270 180 L 290 230" fill="none" stroke="#3b0764" strokeWidth="24" strokeLinecap="round" />
            {/* Glowing Purple Claws */}
            <polygon points="10,230 0,210 -10,250 15,250" fill="#a855f7" />
            <polygon points="290,230 300,210 310,250 285,250" fill="#a855f7" />

            {/* Prowler Mask & Glowing Eyes */}
            <polygon points="150,55 190,95 175,135 125,135 110,95" fill="#1e1b4b" stroke="#a855f7" strokeWidth="4" />
            <path d="M 125 95 L 145 105 L 128 115 Z" fill="#22c55e" filter="drop-shadow(0 0 8px #22c55e)" />
            <path d="M 175 95 L 155 105 L 172 115 Z" fill="#22c55e" filter="drop-shadow(0 0 8px #22c55e)" />

            {/* Villain Speech Bubble */}
            <g transform="translate(10, 20)">
              <rect x="0" y="0" width="165" height="48" fill="#3b0764" stroke="#a855f7" strokeWidth="3" rx="10" />
              <text x="82" y="20" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">¡NO HAY ESCAPE DE</text>
              <text x="82" y="36" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="900" fontFamily="sans-serif">LOS MOMENTOS DIFÍCILES!</text>
            </g>
          </svg>
        </div>
      );

    case 4: // EARTH-65 VILLAIN: THE LIZARD (EL LAGARTO MUTANTE)
      return (
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex items-center justify-center filter drop-shadow-[0_0_35px_rgba(34,197,94,0.9)] animate-pulse">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            {/* Toxic Green Cloud Background */}
            <circle cx="150" cy="200" r="110" fill="#15803d" opacity="0.3" />

            {/* Giant Reptilian Body & Torn Lab Coat */}
            <path d="M 90 270 L 50 380 M 210 270 L 250 380" stroke="#15803d" strokeWidth="36" strokeLinecap="round" />
            <path d="M 100 150 L 200 150 L 180 270 L 120 270 Z" fill="#15803d" stroke="#000" strokeWidth="4" />
            {/* White Torn Lab Coat */}
            <path d="M 95 150 L 130 150 L 120 280 M 205 150 L 170 150 L 180 280" stroke="#ffffff" strokeWidth="12" strokeLinecap="square" />

            {/* Massive Beast Arms & Tail */}
            <path d="M 100 160 L 20 200 M 200 160 L 280 200" stroke="#15803d" strokeWidth="26" strokeLinecap="round" />
            <path d="M 180 270 Q 260 300 290 380" stroke="#15803d" strokeWidth="28" fill="none" strokeLinecap="round" />

            {/* Lizard Snout Head & Red Eyes */}
            <polygon points="150,60 210,110 150,140 90,110" fill="#15803d" stroke="#000" strokeWidth="4" />
            <circle cx="130" cy="95" r="8" fill="#dc2626" />
            <circle cx="170" cy="95" r="8" fill="#dc2626" />

            {/* Villain Speech Bubble */}
            <g transform="translate(130, 20)">
              <rect x="0" y="0" width="160" height="48" fill="#15803d" stroke="#000" strokeWidth="3" rx="8" />
              <text x="80" y="20" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">¡LA SOLEDAD TE</text>
              <text x="80" y="36" textAnchor="middle" fill="#facc15" fontSize="12" fontWeight="900" fontFamily="sans-serif">DEVORARÁ EN LA OSCURIDAD!</text>
            </g>
          </svg>
        </div>
      );

    case 5: default: // EARTH-2099 VILLAIN: THE SPOT (EL ABISMO MULTIVERSAL)
      return (
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex items-center justify-center filter drop-shadow-[0_0_40px_rgba(255,255,255,0.9)] animate-pulse">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            {/* White Body with Black Ink Portals (The Spot) */}
            <ellipse cx="150" cy="200" rx="90" ry="150" fill="#ffffff" stroke="#000" strokeWidth="5" />

            {/* Ink Spots */}
            <circle cx="150" cy="100" r="28" fill="#000000" />
            <circle cx="120" cy="180" r="22" fill="#000000" />
            <circle cx="180" cy="190" r="30" fill="#000000" />
            <circle cx="140" cy="260" r="25" fill="#000000" />
            <circle cx="90" cy="240" r="18" fill="#000000" />
            <circle cx="210" cy="250" r="20" fill="#000000" />

            {/* Void Arms Stretching out */}
            <path d="M 70 170 L 10 130 M 230 170 L 290 130" stroke="#000000" strokeWidth="22" strokeLinecap="round" />

            {/* Villain Speech Bubble */}
            <g transform="translate(10, 20)">
              <rect x="0" y="0" width="170" height="48" fill="#000000" stroke="#ffffff" strokeWidth="3" rx="6" />
              <text x="85" y="20" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">¡SOY EL ABISMO QUE</text>
              <text x="85" y="36" textAnchor="middle" fill="#f43f5e" fontSize="12" fontWeight="900" fontFamily="sans-serif">AMENAZA TU MULTIVERSO!</text>
            </g>
          </svg>
        </div>
      );
  }
};
