export interface MultiverseStepTexts {
  intro: {
    title: string;
    subtitle: string;
    button: string;
  };
  person: {
    title: string;
    subtitle: string;
    button: string;
  };
  comic_twist: {
    badge: string;
    phrase: string;
    subtitle: string;
    button: string;
  };
  villain_confrontation: {
    badge: string;
    title: string;
    subtitle: string;
    heroQuip: string;
    villainThreat: string;
    parentAdvice: string;
    button: string;
  };
  deep_1: {
    mainQuote: string;
    c1Title: string;
    c1Desc: string;
    c2Title: string;
    c2Desc: string;
    c3Title: string;
    c3Desc: string;
    c4Title: string;
    c4Desc: string;
    button: string;
  };
  deep_2: {
    mainQuote: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
    button: string;
  };
  deep_sadness: {
    mainQuote: string;
    heroQuip: string;
    villainThreat: string;
    c1Title: string;
    c1Desc: string;
    c2Title: string;
    c2Desc: string;
    button: string;
  };
  deep_fear: {
    mainQuote: string;
    heroQuip: string;
    villainThreat: string;
    c1Title: string;
    c1Desc: string;
    c2Title: string;
    c2Desc: string;
    button: string;
  };
  deep_choice: {
    mainQuote: string;
    c1Title: string;
    c1Desc: string;
    c2Title: string;
    c2Desc: string;
    button: string;
  };
  deep_gods: {
    mainQuote: string;
    c1Title: string;
    c1Desc: string;
    c2Title: string;
    c2Desc: string;
    c3Title: string;
    c3Desc: string;
    button: string;
  };
  final: {
    title: string;
    subtitle: string;
    footerText: string;
  };
}

export interface MultiverseTheme {
  id: number;
  dimensionTag: string;
  heroName: string;
  primaryColor: string;
  accentColor: string;
  secondaryAccent: string;
  badgeBg: string;
  badgeText: string;
  cardStyle: string;
  borderShadowColor: string;
  heroGif: string;
  secondaryGif: string;
  villainName: string;
  villainTitle: string;
  villainBadge: string;
  villainColor: string;
  spiderSenseTitle: string;
  spiderSenseColor: string;
  spiderSenseEffect: string;
  heroQuote: string;
  particleColors: string[];
  gradientBg: string;
  buttonGradient: string;
  texts: MultiverseStepTexts;
}

export const MULTIVERSES: MultiverseTheme[] = [
  // -------------------------------------------------------------
  // EARTH-616: EL MULTIVERSO CLÁSICO (PETER PARKER vs DUENDE VERDE)
  // -------------------------------------------------------------
  {
    id: 1,
    dimensionTag: 'EARTH-616 // MULTIVERSO CLÁSICO',
    heroName: 'Spider-Man Clásico (Peter Parker)',
    primaryColor: '#dc2626',
    accentColor: '#facc15',
    secondaryAccent: '#2563eb',
    badgeBg: 'bg-rose-600',
    badgeText: 'MULTIVERSO 1 // EARTH-616 ORIGINAL',
    cardStyle: 'bg-zinc-950 border-4 border-rose-600 shadow-[8px_8px_0px_#000000,12px_12px_0px_rgba(220,38,38,0.6)] rounded-3xl',
    borderShadowColor: '#dc2626',
    heroGif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHM3a3RhOTdmNDN3ZjZldmY0czBneGZ4ZGtqZ2FmNDkzeG80MnlvdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9P3Mev3P92yY3gT1S1/giphy.gif',
    secondaryGif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2pxb3FudW5wbWx5dHRuOHdrMndvcm9mbWNydTZyaHhrdDZjNWkxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oXnN2T95JRHY4/giphy.gif',
    villainName: 'El Duende Verde (Norman Osborn)',
    villainTitle: '¡EL DUENDE VERDE ATACA CON BOMBAS DE CALABAZA!',
    villainBadge: '⚠️ ALERTA DE SUPERVILLANO // EARTH-616 ⚠️',
    villainColor: '#22c55e',
    spiderSenseTitle: '⚡ ¡ALERTA DE SENTIDO ARÁCNIDO CLÁSICO! ⚡',
    spiderSenseColor: '#facc15',
    spiderSenseEffect: 'ONDAS ELÉCTRICAS AMARILLAS Y ROJAS DE ADVERTENCIA',
    heroQuote: 'Peter Parker dice: Con gran amor viene una gran protección. La red más invencible es el amor eterno de tus papás.',
    particleColors: ['#dc2626', '#facc15', '#2563eb', '#ffffff'],
    gradientBg: 'from-red-600 via-purple-700 to-blue-800',
    buttonGradient: 'from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white',
    texts: {
      intro: {
        title: 'Rafis, estamos muy orgullosos de ti',
        subtitle: 'Un mensaje especial desde el corazón del multiverso enviado por tu Mamá y tu Papá. Toca el botón para iniciar la transmisión.',
        button: 'Siguiente Dimensión',
      },
      person: {
        title: 'Eres una muy buena persona...',
        subtitle: 'Tu bondad, tu luz y tu manera de ser iluminan cada rincón a tu alrededor. Tus papás te aman profundamente.',
        button: 'Siguiente',
      },
      comic_twist: {
        badge: '⚡ MENSAJE DOMÉSTICO CLÁSICO ⚡',
        phrase: '"pero nos gustaría que nos ayudes más en la casa."',
        subtitle: '🕷️ ¡Peter Parker recuerda: Tus papás también necesitan un héroe que apoye en la casa!',
        button: 'Sintonizar Sentido Arácnido',
      },
      villain_confrontation: {
        badge: '⚠️ DESAFÍO CLÁSICO // EL DUENDE VERDE ⚠️',
        title: '¡Los Villanos de la vida intentarán poner a prueba tu fuerza!',
        subtitle: 'El Duende Verde lanza sus bombas de calabaza para intentar hacerte vacilar, pero el humor arácnido y tus papás te mantienen firme.',
        heroQuip: 'Peter Parker: "¿Bombas de calabaza, Norman? ¡Prefiero un pastel de manzana casero!"',
        villainThreat: 'Duende Verde: "¡JAJAJA! ¡El miedo y los problemas jamás desaparecen por completo, héroe!"',
        parentAdvice: 'Tus papás te recuerdan: Ningún villano o problema es más fuerte que tu determinación y nuestro amor.',
        button: 'Superar la Prueba del Duende',
      },
      deep_1: {
        mainQuote: '"el tiempo ha pasado muy rápido, pero tal vez para ti no, no lo sé, pero sé que aún te falta mucho por ver... por probar... por sentir... aún te falta mucho por vivir..."',
        c1Title: 'POR VER...',
        c1Desc: 'Un universo entero de lugares, amistades y maravillas esperándote.',
        c2Title: 'POR PROBAR...',
        c2Desc: 'Pasiones, música, aprendizajes y metas que irás descubriendo.',
        c3Title: 'POR SENTIR...',
        c3Desc: 'Alegrías intensas y momentos inolvidables de libertad.',
        c4Title: 'AÚN TE FALTA MUCHO POR VIVIR...',
        c4Desc: 'Tu historia arácnida apenas está comenzando, Rafis.',
        button: 'Siguiente Reflexión',
      },
      deep_2: {
        mainQuote: '"así que dale con fuerza... valor... tenacidad... resiliencia... mucha alegría..."',
        p1Title: 'FUERZA & VALOR',
        p1Desc: 'Para enfrentar cada prueba con determinación.',
        p2Title: 'TENACIDAD',
        p2Desc: 'Firmeza para alcanzar cada una de tus metas.',
        p3Title: 'RESILIENCIA',
        p3Desc: 'Saber levantarte con más brillo en cada caída.',
        p4Title: 'MUCHA ALEGRÍA',
        p4Desc: 'Tu luz única que llena de orgullo a tus papás.',
        button: 'Siguiente Reflexión',
      },
      deep_sadness: {
        mainQuote: '"y no te olvides que siempre habrán eventos tristes y momentos solos..."',
        heroQuip: 'Peter Parker: "He vencido al Duende Verde 100 veces. ¡Tus momentos tristes no tienen oportunidad contra tus papás!"',
        villainThreat: 'Duende Verde: "¡La tristeza te consumirá en la oscuridad!"',
        c1Title: 'EVENTOS TRISTES',
        c1Desc: 'Hasta el héroe más grande atravesará días difíciles. Tus papás siempre serán tu respaldo.',
        c2Title: 'MOMENTOS SOLOS',
        c2Desc: 'Instantes para fortalecer tu alma y descubrir de lo que eres capaz.',
        button: 'Siguiente Reflexión',
      },
      deep_fear: {
        mainQuote: '"situaciones de angustia o mucho temor... pero también recuerda que son eventuales y por eso mismo así como vienen se van..."',
        heroQuip: 'Peter Parker: "¿Tener miedo? ¡Si supieras los chistes que le cuento a Venom cuando se pone oscuro!"',
        villainThreat: 'Duende Verde: "¡El temor te paralizará!"',
        c1Title: 'SON EVENTUALES',
        c1Desc: 'Ninguna tormenta dura para siempre. Son solo nubes pasajeras.',
        c2Title: 'ASÍ COMO VIENEN SE VAN',
        c2Desc: 'La calma siempre regresa para devolverte tu brillo invencible.',
        button: 'Siguiente Reflexión',
      },
      deep_choice: {
        mainQuote: '"pero la alegría es una elección que siempre puede presentarse junto a la tristeza para dar un abrazo amigo...."',
        c1Title: 'LA ALEGRÍA ES UNA ELECCIÓN',
        c1Desc: 'Elegir sonreír como tu bandera en cada reto de la vida.',
        c2Title: 'UN ABRAZO AMIGO',
        c2Desc: 'Tus papás siempre están aquí para sostenerte.',
        button: 'Nuestro Origen Mítico',
      },
      deep_gods: {
        mainQuote: '"también recuerda que somos inmortales y semi-dioses griegos con mezcla vikinga con sangre de oro"',
        c1Title: 'SEMI-DIOSES GRIEGOS',
        c1Desc: 'Fuerza, luz y heroísmo clásico en cada latido.',
        c2Title: 'MEZCLA VIKINGA',
        c2Desc: 'Coraje indomable para navegar cualquier tormenta.',
        c3Title: 'SANGRE DE ORO',
        c3Desc: 'Una chispa divina que jamás se apaga.',
        button: 'Ir al Abrazo Final',
      },
      final: {
        title: 'TE AMAMOS, RAFIS',
        subtitle: 'DE TUS PAPÁS',
        footerText: 'Inmortales, semi-dioses con mezcla vikinga y sangre de oro. Tus papás te aman infinitamente en cualquier rincón del universo.',
      },
    },
  },

  // -------------------------------------------------------------
  // EARTH-138: SPIDER-PUNK (HOBIE BROWN vs VULTURE ANARCHY)
  // -------------------------------------------------------------
  {
    id: 2,
    dimensionTag: 'EARTH-138 // SPIDER-PUNK ANARCHY',
    heroName: 'Spider-Punk (Hobie Brown)',
    primaryColor: '#e11d48',
    accentColor: '#facc15',
    secondaryAccent: '#06b6d4',
    badgeBg: 'bg-yellow-400 text-black',
    badgeText: 'MULTIVERSO 2 // PUNK ROCK REBELLION',
    cardStyle: 'bg-zinc-950 border-4 border-yellow-400 shadow-[8px_8px_0px_#000000,12px_12px_0px_#e11d48] -rotate-1 rounded-none border-dashed',
    borderShadowColor: '#facc15',
    heroGif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2R4djd3azlpdHZwZXcxdWZ3aGN4cm9tOTU5NGNwaHQxaHN5NHlsZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L5aXbsMT2N9b2/giphy.gif',
    secondaryGif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHRqcnR0aW1xYmsxaDJnOTIxcGJyNjN5OHExbWN4NWg0OXo5cWNnbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a3O54YYug9K48/giphy.gif',
    villainName: 'Vulture Anarchy (Sindicato del Caos)',
    villainTitle: '¡VULTURE ANARCHY ATACA CON ALAS CIBERNÉTICAS!',
    villainBadge: '⚠️ ALERTA PUNK // SINDICATO DEL CAOS ⚠️',
    villainColor: '#e11d48',
    spiderSenseTitle: '🎸 ¡ALERTA DE SENTIDO ARÁCNIDO PUNK! 🎸',
    spiderSenseColor: '#e11d48',
    spiderSenseEffect: 'DISTORSIÓN DE GUITARRA Y STROBO NEÓN ANÁRQUICO',
    heroQuote: 'Hobie Brown dice: ¡No sigo reglas impuestas, excepto una ley divina: Tus papás te aman sin límites en esta y en todas las dimensiones!',
    particleColors: ['#facc15', '#e11d48', '#06b6d4', '#a855f7'],
    gradientBg: 'from-yellow-500 via-rose-600 to-cyan-500',
    buttonGradient: 'from-yellow-400 to-rose-600 hover:from-yellow-300 hover:to-rose-500 text-black font-black',
    texts: {
      intro: {
        title: '¡Rafis, en este universo alterno estamos orgullosísimos de ti!',
        subtitle: 'Un mensaje directo desde la banda de Hobie Brown enviado por tu Mamá y tu Papá. ¡Enciende los amplificadores!',
        button: 'Siguiente Dimensión Punk',
      },
      person: {
        title: 'Eres un ser humano increíble y genial...',
        subtitle: 'Tu autenticidad y tu corazón rebelde iluminan el multiverso entero. Tus papás están felices de ser tus padres.',
        button: 'Avanzar al Solo de Guitarra',
      },
      comic_twist: {
        badge: '⚡ REGLA ANÁRQUICA #1 ⚡',
        phrase: '"¡pero nos encantaría que nos des una mano ordenando el escenario de la casa!"',
        subtitle: '🎸 ¡Hobie Brown aclara: Ni el punk más rebelde deja su cuarto hecho un desastre!',
        button: 'Sintonizar Frecuencia Punk',
      },
      villain_confrontation: {
        badge: '⚡ BATALLA DE GUITARRAS // VULTURE ANARCHY ⚡',
        title: '¡Las disonancias y problemas intentarán romper tu propio ritmo!',
        subtitle: 'Vulture Anarchy busca imponer ruido y desorden en tu camino, pero la distorsión se vence con firmeza y tus papás.',
        heroQuip: 'Hobie Brown: "Oye Vulture, tu ruido corporativo está terriblemente desafinado."',
        villainThreat: 'Vulture Anarchy: "¡Nadie escapa del caos y la sobrecarga de la vida, muchacho!"',
        parentAdvice: 'Tus papás te dicen: Afina tu alma con coraje y pon tu canción favorita. ¡Nadie apaga tu melodía!',
        button: 'Destruir el Ruido del Villano',
      },
      deep_1: {
        mainQuote: '"el tiempo rueda a máxima velocidad, pero aún te queda un universo por explorar, probar, sentir y conquistar... ¡aún tienes toda una vida por rockear!"',
        c1Title: 'POR EXPLORAR...',
        c1Desc: 'Nuevos horizontes, caminos audaces y descubrimientos por hacer.',
        c2Title: 'POR EXPERIMENTAR...',
        c2Desc: 'Proyectos, pasiones y sueños gigantescos aguardándote.',
        c3Title: 'POR VIBRAR...',
        c3Desc: 'Emociones intensas y risas que retumbarán en tu pecho.',
        c4Title: '¡TU HISTORIA APENAS EMPIEZA!',
        c4Desc: 'Tienes un recorrido legendario por escribir a tu propio ritmo, Rafis.',
        button: 'Siguiente Compás',
      },
      deep_2: {
        mainQuote: '"así que sal con toda la garra... coraje indomable... terquedad positiva... resiliencia... y una alegría explosiva que nadie apague..."',
        p1Title: 'GARRA Y CORAJE',
        p1Desc: 'Para romper cualquier molde y vencer cualquier desafío.',
        p2Title: 'TERQUEDAD POSITIVA',
        p2Desc: 'Persistencia absoluta hasta convertir tus ideas en realidad.',
        p3Title: 'RESILIENCIA PUNK',
        p3Desc: 'Caer, sacudirse el polvo y levantarse con más fuerza.',
        p4Title: 'ALEGRÍA EXPLOSIVA',
        p4Desc: 'La chispa única que llena de orgullo el alma de tus papás.',
        button: 'Siguiente Compás',
      },
      deep_sadness: {
        mainQuote: '"y ten presente que a veces habrá tormentas, días grises y momentos a solas..."',
        heroQuip: 'Hobie Brown: "¡Ningún día triste apaga mi amplificador, mis papás me dieron ritmo eterno!"',
        villainThreat: 'Vulture Anarchy: "¡La oscuridad ahogará tus solos de guitarra!"',
        c1Title: 'DÍAS OSCUROS',
        c1Desc: 'Hasta el héroe más audaz pasa por momentos de pausa. Tus papás siempre serán tu refugio seguro.',
        c2Title: 'PAUSAS A SOLAS',
        c2Desc: 'Momentos para conectar con tu interior y recargar tu poder.',
        button: 'Siguiente Compás',
      },
      deep_fear: {
        mainQuote: '"instantes de duda o mucho temor... pero recuerda bien: son sólo ruidos pasajeros que se van tan rápido como vinieron..."',
        heroQuip: 'Hobie Brown: "¿Miedo? ¡El único miedo real es tocar música aburrida sin pasión!"',
        villainThreat: 'Vulture Anarchy: "¡Temblarás ante el desorden de la vida!"',
        c1Title: 'SON RUIDOS TEMPORALES',
        c1Desc: 'No permitas que el miedo te defina. Son sombras que se disipan rápidamente.',
        c2Title: 'SE VAN COMO VINIERON',
        c2Desc: 'Tu luz interna siempre vuelve a brillar con más potencia.',
        button: 'Siguiente Compás',
      },
      deep_choice: {
        mainQuote: '"porque elegir la alegría es tu mayor acto de libertad, un abrazo amigo que te acompaña en cualquier batalla..."',
        c1Title: 'ELECCIÓN DE LIBERTAD',
        c1Desc: 'Sonreír y mantener la cabeza en alto en cada circunstancias.',
        c2Title: 'ABRAZO INCONDICIONAL',
        c2Desc: 'El amor de tus papás es la energía constante de tu vida.',
        button: 'Origen de Leyendas',
      },
      deep_gods: {
        mainQuote: '"recuerda siempre que llevas sangre de inmortales, semidioses mitológicos con corazón vikingo y espíritu de oro puro"',
        c1Title: 'SEMIDIOSES MÍTICOS',
        c1Desc: 'Una chispa de grandeza que te acompaña a donde vayas.',
        c2Title: 'ESPÍRITU VIKINGO',
        c2Desc: 'Fuerza indomable para conquistar cualquier mar embravecido.',
        c3Title: 'SANGRE DE ORO',
        c3Desc: 'El valor incalculable de tu esencia y tu familia.',
        button: 'Ir al Cierre de Concierto',
      },
      final: {
        title: 'TE AMAMOS, RAFIS',
        subtitle: 'DE TUS PAPÁS',
        footerText: '¡En esta dimensión y en el multiverso entero, tus papás están infinitamente orgullosos de ti, inmutable guerrero con sangre de oro!',
      },
    },
  },

  // -------------------------------------------------------------
  // EARTH-1610: MILES MORALES (MILES vs EL MERODEADOR / THE PROWLER)
  // -------------------------------------------------------------
  {
    id: 3,
    dimensionTag: 'EARTH-1610 // MILES MORALES BROOKLYN',
    heroName: 'Miles Morales (Spider-Man)',
    primaryColor: '#ef4444',
    accentColor: '#38bdf8',
    secondaryAccent: '#a855f7',
    badgeBg: 'bg-red-600 text-white',
    badgeText: 'MULTIVERSO 3 // BROOKLYN LEAP OF FAITH',
    cardStyle: 'bg-gradient-to-b from-zinc-950 via-slate-950 to-black border-4 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.5),8px_8px_0px_#000000] rounded-2xl',
    borderShadowColor: '#ef4444',
    heroGif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZndpdDRicWRldWgydXZicmFpYzZhcXpsODRsdmpoYnhubG9rcjRjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt62PeJeFUDwBUI/giphy.gif',
    secondaryGif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2R4djd3azlpdHZwZXcxdWZ3aGN4cm9tOTU5NGNwaHQxaHN5NHlsZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L5aXbsMT2N9b2/giphy.gif',
    villainName: 'El Merodeador (Aaron Davis)',
    villainTitle: '¡EL MERODEADOR DESPLIEGA SUS GARRAS DE ENERGÍA!',
    villainBadge: '⚠️ AMENAZA EN BROOKLYN // THE PROWLER ⚠️',
    villainColor: '#a855f7',
    spiderSenseTitle: '⚡ ¡ALERTA DE SENTIDO ARÁCNIDO BROOKLYN! ⚡',
    spiderSenseColor: '#38bdf8',
    spiderSenseEffect: 'PULSO CROMÁTICO Y ADVERTENCIA GRAFFITI NEÓN',
    heroQuote: 'Miles Morales dice: Un salto de fe me enseñó que la red de amor incondicional con la que tus papás te cuidan es imbatible.',
    particleColors: ['#ef4444', '#38bdf8', '#f59e0b', '#ffffff'],
    gradientBg: 'from-red-600 via-purple-700 to-sky-500',
    buttonGradient: 'from-red-600 via-purple-600 to-sky-400 hover:from-red-500 hover:to-sky-300 text-white font-black',
    texts: {
      intro: {
        title: 'Rafis, desde el corazón de Brooklyn, ¡sentimos un orgullo enorme por ti!',
        subtitle: 'Un mensaje directo desde la dimensión de Miles Morales enviado por tu Mamá y tu Papá. Prepárate para dar el salto de fe.',
        button: 'Siguiente Salto Multiversal',
      },
      person: {
        title: 'Eres una persona verdaderamente valiosa...',
        subtitle: 'Tu carisma, tu empatía y tu calidez hacen de este mundo un lugar infinitamente mejor. Tus papás te aman profundamente.',
        button: 'Siguiente Paso',
      },
      comic_twist: {
        badge: '⚡ MENSAJE DE LA FAMILIA EN BROOKLYN ⚡',
        phrase: '"¡pero nos vendría genial que nos eches una mano con las tareas de la casa!"',
        subtitle: '🕷️ ¡Miles Morales dice: Hasta el Spider-Man de Brooklyn ayuda a sus padres a ordenar su cuarto!',
        button: 'Sintonizar Sentido de Brooklyn',
      },
      villain_confrontation: {
        badge: '⚡ EMBOSCADA DE SOMBRAS // EL MERODEADOR ⚡',
        title: '¡El peligro acecha en los callejones, pero tu fe te mantiene firme!',
        subtitle: 'El Merodeador ataca con sus garras de energía morada buscando intimidarte, pero tu fuerza interior brota de tu corazón.',
        heroQuip: 'Miles Morales: "Tío Aaron, mis papás me enseñaron a dar un verdadero Salto de Fe."',
        villainThreat: 'El Merodeador: "¡No hay escape de las sombras difíciles de Brooklyn, chico!"',
        parentAdvice: 'Tus papás te alientan: Tu camino lo defines tú mismo con cada salto de fe. ¡Estamos siempre a tu lado!',
        button: 'Vencer las Sombras del Merodeador',
      },
      deep_1: {
        mainQuote: '"el tiempo pasa volando en la gran ciudad, pero tu historia recién empieza. Te quedan incontables maravillas por descubrir, probar, sentir y disfrutar..."',
        c1Title: 'POR CONOCER...',
        c1Desc: 'Nuevas experiencias y lugares asombrosos esperándote.',
        c2Title: 'POR PROBAR...',
        c2Desc: 'Talentos, metas y oportunidades que conquistarás.',
        c3Title: 'POR SENTIR...',
        c3Desc: 'Momentos inolvidables de alegría plena con los que amas.',
        c4Title: '¡UN CAMINO ENORME POR VIVIR!',
        c4Desc: 'Tu propio salto de fe dará frutos grandiosos, Rafis.',
        button: 'Siguiente Estación',
      },
      deep_2: {
        mainQuote: '"así que avanza con toda tu determinación... valentía... firmeza... resiliencia... y una alegría contagiosa..."',
        p1Title: 'VALENTÍA Y FUERZA',
        p1Desc: 'Para creer en ti mismo y superar cualquier obstáculo.',
        p2Title: 'FIRMEZA DE ESPÍRITU',
        p2Desc: 'Saber exactamente hacia dónde te diriges con pasión.',
        p3Title: 'RESILIENCIA URBANA',
        p3Desc: 'Aprender de cada tropezón y levantarse más sabio.',
        p4Title: 'ALEGRÍA CONTAGIOSA',
        p4Desc: 'El regalo más grande que le das a tus papás.',
        button: 'Siguiente Estación',
      },
      deep_sadness: {
        mainQuote: '"y ten presente que a veces habrán días difíciles, nubes oscuras y momentos a solas..."',
        heroQuip: 'Miles Morales: "¿Sombras en Brooklyn? ¡Tengo chispas Venom que iluminan cualquier noche!"',
        villainThreat: 'El Merodeador: "¡Las sombras te perseguirán para siempre!"',
        c1Title: 'DÍAS COMPLICADOS',
        c1Desc: 'Es normal sentir incertidumbre a veces. Recuerda que tus papás siempre son tu equipo de respaldo.',
        c2Title: 'MOMENTOS A SOLAS',
        c2Desc: 'Espacios sagrados para reencontrarte con tu fuerza interior.',
        button: 'Siguiente Estación',
      },
      deep_fear: {
        mainQuote: '"situaciones de temor o preocupación... pero nunca dudes: son estados pasajeros que vienen y se van..."',
        heroQuip: 'Miles Morales: "¡El miedo es solo un mal graffiti que se pinta encima con alegría y color!"',
        villainThreat: 'El Merodeador: "¡La incertidumbre te atrapará!"',
        c1Title: 'ESTADOS TEMPORALES',
        c1Desc: 'Ninguna sombra se queda para siempre. Son solo pausas de la vida.',
        c2Title: 'SE VAN COMO LLEGARON',
        c2Desc: 'Tu luz natural siempre vuelve a iluminar tu camino.',
        button: 'Siguiente Estación',
      },
      deep_choice: {
        mainQuote: '"porque elegir la alegría es la decisión más valiente, un abrazo cálido que transforma cualquier día difícil..."',
        c1Title: 'DECISIÓN DE VALIENTES',
        c1Desc: 'Elegir el optimismo y la esperanza como tu guía.',
        c2Title: 'ABRAZO CÁLIDO',
        c2Desc: 'El respaldo incondicional de tus papás que nunca te faltará.',
        button: 'Conocer Tu Herencia',
      },
      deep_gods: {
        mainQuote: '"nunca olvides que por tus venas corre la sangre de inmortales, semidioses épicos con garra vikinga y corazón de oro puro"',
        c1Title: 'SEMIDIOSES ÉPICOS',
        c1Desc: 'Saberte capaz de lograr metas extraordinarias.',
        c2Title: 'GARRA VIKINGA',
        c2Desc: 'Coraje que te empuja a ganar tus propias batallas.',
        c3Title: 'CORAZÓN DE ORO',
        c3Desc: 'La nobleza que te hace único en todo el universo.',
        button: 'Ir al Salto Final',
      },
      final: {
        title: 'TE AMAMOS, RAFIS',
        subtitle: 'DE TUS PAPÁS',
        footerText: '¡Desde Brooklyn hasta el rincón más lejano del multiverso, el amor de tus papás por ti es infinito e indestructible!',
      },
    },
  },

  // -------------------------------------------------------------
  // EARTH-65: GWEN STACY (GWEN vs EL LAGARTO MUTANTE)
  // -------------------------------------------------------------
  {
    id: 4,
    dimensionTag: 'EARTH-65 // GHOST-SPIDER GWEN',
    heroName: 'Gwen Stacy (Ghost-Spider)',
    primaryColor: '#ec4899',
    accentColor: '#38bdf8',
    secondaryAccent: '#ffffff',
    badgeBg: 'bg-pink-500 text-black',
    badgeText: 'MULTIVERSO 4 // NEON DRUM RHYTHM',
    cardStyle: 'bg-gradient-to-b from-slate-950 via-purple-950 to-black border-4 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.5),8px_8px_0px_#000000] rounded-3xl',
    borderShadowColor: '#ec4899',
    heroGif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJidWp1MHp6Znd5eGQzbm43dWR2YmxuNDdpMmEydm03bmJvOW5hdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzU1aCV8DE2TW8/giphy.gif',
    secondaryGif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW4yMzNscjBsbWxxeHBtOWl3MXh3ZDRocXp6NWQ5bGF2d2szN3FhZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aT4L3142XC74I/giphy.gif',
    villainName: 'El Lagarto Mutante (The Lizard)',
    villainTitle: '¡EL LAGARTO MUTANTE RETA TU ARMONÍA CON SU ZARPAZO!',
    villainBadge: '⚠️ ALERTA DE AMENAZA MUTANTE // EARTH-65 ⚠️',
    villainColor: '#15803d',
    spiderSenseTitle: '⚡ ¡ALERTA DE SENTIDO ARÁCNIDO RÍTMICO! ⚡',
    spiderSenseColor: '#ec4899',
    spiderSenseEffect: 'ONDAS ROSA NEÓN Y CIAN DE FRECUENCIA ARÁCNIDA',
    heroQuote: 'Gwen Stacy dice: Marcando el ritmo en mi batería multiversal, la canción más hermosa que existe es el amor de tus papás.',
    particleColors: ['#ec4899', '#38bdf8', '#a855f7', '#ffffff'],
    gradientBg: 'from-pink-500 via-purple-700 to-cyan-400',
    buttonGradient: 'from-pink-500 via-purple-500 to-cyan-400 hover:from-pink-400 hover:to-cyan-300 text-black font-black',
    texts: {
      intro: {
        title: 'Rafis, ¡en este compás multiversal estamos profundamente orgullosos de ti!',
        subtitle: 'Un mensaje con ritmo neon desde el universo de Gwen Stacy enviado por tu Mamá y tu Papá. Siente la música.',
        button: 'Siguiente Melodía',
      },
      person: {
        title: 'Eres una persona maravillosamente especial...',
        subtitle: 'Tu dulzura, tu sensibilidad y tu fuerza hacen que la vida sea una hermosa melodía. Tus papás te adoran.',
        button: 'Siguiente Nota',
      },
      comic_twist: {
        badge: '⚡ NOTA RÍTMICA DE CASA ⚡',
        phrase: '"¡pero nos encantaría que mantengas tu espacio tan ordenado como un solo de batería!"',
        subtitle: '🥁 ¡Gwen Stacy recuerda: Para sonar en armonía, hay que mantener limpia la base!',
        button: 'Sintonizar Sentido de Gwen',
      },
      villain_confrontation: {
        badge: '⚡ DESAFÍO EN EL ESCENARIO // EL LAGARTO ⚡',
        title: '¡Las tormentas mutantes intentarán cambiar la melodía de tu felicidad!',
        subtitle: 'El Lagarto ruge amenazante intentando sembrar incertidumbre, pero tu música interna es más fuerte que cualquier rugido.',
        heroQuip: 'Gwen Stacy: "Oye Lagarto, esa nota estuvo terriblemente desafinada para mi banda."',
        villainThreat: 'El Lagarto: "¡Tus sueños se romperán en pedazos bajo la sombra del caos!"',
        parentAdvice: 'Tus papás te sostienen: Agarra fuerte tus baquetas de la vida y sigue tocando tu canción. ¡Brillarás siempre!',
        button: 'Dominar la Furia del Lagarto',
      },
      deep_1: {
        mainQuote: '"el tiempo marca su propio ritmo acelerado, pero a ti te espera una sinfonía hermosa por ver, probar, sentir y vivir..."',
        c1Title: 'POR DESCUBRIR...',
        c1Desc: 'Nuevos ritmos, aventuras y paisajes sorprendentes.',
        c2Title: 'POR PROBAR...',
        c2Desc: 'Melodías, proyectos y pasiones que irás tocando.',
        c3Title: 'POR SENTIR...',
        c3Desc: 'Acordes llenos de amor, emoción y plenitud.',
        c4Title: '¡MUCHA MÚSICA POR VIVIR!',
        c4Desc: 'Tu escenario es infinito y tienes todo para triunfar, Rafis.',
        button: 'Siguiente Acorde',
      },
      deep_2: {
        mainQuote: '"así que toca la canción de tu vida con energía... carácter... firmeza constante... resiliencia... y una profunda alegría..."',
        p1Title: 'ENERGÍA Y CARÁCTER',
        p1Desc: 'Para dirigir tu propio destino sin afinaciones ajenas.',
        p2Title: 'FIRMEZA CONSTANTE',
        p2Desc: 'Constancia para perfeccionar cada meta que te propongas.',
        p3Title: 'RESILIENCIA NEON',
        p3Desc: 'Saber transformar los contratiempos en bellos acordes.',
        p4Title: 'PROFUNDA ALEGRÍA',
        p4Desc: 'El sonido brillante que enamora a tus papás.',
        button: 'Siguiente Acorde',
      },
      deep_sadness: {
        mainQuote: '"y recuerda que a veces habrán notas tristes, pausas de soledad y momentos difíciles..."',
        heroQuip: 'Gwen Stacy: "¡Los momentos solos me dan tiempo para componer una mejor canción junto a tus papás!"',
        villainThreat: 'El Lagarto: "¡La soledad te aplastará en el silencio!"',
        c1Title: 'NOTAS TRISTES',
        c1Desc: 'Son partes naturales de la composición. Tus papás son tus coros eternos de amor.',
        c2Title: 'PAUSAS DE SOLEDAD',
        c2Desc: 'Momentos de silencio creativo para afinar tu alma.',
        button: 'Siguiente Acorde',
      },
      deep_fear: {
        mainQuote: '"instantes de duda o desarmonía... pero nunca lo olvides: son solo disonancias temporales que se desvanecen..."',
        heroQuip: 'Gwen Stacy: "¡Mi ritmo en la batería es demasiado rápido para que el miedo me alcance!"',
        villainThreat: 'El Lagarto: "¡El pánico desafinará tus notas!"',
        c1Title: 'DISONANCIAS TEMPORALES',
        c1Desc: 'Ningún ruido opaca tu verdadero talento. Pasan volando.',
        c2Title: 'SE DESVANECEN EN EL AIRE',
        c2Desc: 'La armonía y el brillo siempre retornan a tu vida.',
        button: 'Siguiente Acorde',
      },
      deep_choice: {
        mainQuote: '"porque elegir la alegría es tu mejor interpretación, un abrazo amigo que llena de calor tu corazón..."',
        c1Title: 'TU MEJOR INTERPRETASE',
        c1Desc: 'Decidir ver la luz y la esperanza en todo momento.',
        c2Title: 'ABRAZO AMIGO',
        c2Desc: 'El amor protector de tus papás que nunca te deja solo.',
        button: 'Escuchar el Origen',
      },
      deep_gods: {
        mainQuote: '"llevas en tu esencia la herencia de inmortales, semidioses mitológicos con coraje vikingo y sangre de oro inolvidable"',
        c1Title: 'SEMIDIOSES MITOLÓGICOS',
        c1Desc: 'Una chispa divina que te hace extraordinario.',
        c2Title: 'CORAJE VIKINGO',
        c2Desc: 'La fuerza de los grandes navegantes para vencer retos.',
        c3Title: 'SANGRE DE ORO',
        c3Desc: 'Un valor eterno que brilla en todo el multiverso.',
        button: 'Ir a la Ovación Final',
      },
      final: {
        title: 'TE AMAMOS, RAFIS',
        subtitle: 'DE TUS PAPÁS',
        footerText: '¡En cada compás y en cada universo, tus papás te aman con todo el corazón, noble héroe de sangre de oro!',
      },
    },
  },

  // -------------------------------------------------------------
  // EARTH-2099: MIGUEL O'HARA (MIGUEL vs THE SPOT - EL ABISMO)
  // -------------------------------------------------------------
  {
    id: 5,
    dimensionTag: "EARTH-2099 // MIGUEL O'HARA NUEVA YORK",
    heroName: "Miguel O'Hara (Spider-Man 2099)",
    primaryColor: '#0284c7',
    accentColor: '#f43f5e',
    secondaryAccent: '#fbbf24',
    badgeBg: 'bg-sky-600 text-white',
    badgeText: 'MULTIVERSO 5 // EVENTO CANÓNICO DE AMOR',
    cardStyle: 'bg-gradient-to-b from-sky-950 via-slate-950 to-black border-4 border-sky-400 shadow-[0_0_35px_rgba(2,132,199,0.5),8px_8px_0px_#000000] rounded-xl font-mono',
    borderShadowColor: '#0284c7',
    heroGif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHRqcnR0aW1xYmsxaDJnOTIxcGJyNjN5OHExbWN4NWg0OXo5cWNnbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a3O54YYug9K48/giphy.gif',
    secondaryGif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJidWp1MHp6Znd5eGQzbm43dWR2YmxuNDdpMmEydm03bmJvOW5hdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt62PeJeFUDwBUI/giphy.gif',
    villainName: 'The Spot (El Abismo Multiversal)',
    villainTitle: '¡THE SPOT ABRE PORTALES DE MASA OSCURA EN EL CONTINUO!',
    villainBadge: '⚠️ ALERTA CANÓNICA CRÍTICA // THE SPOT ⚠️',
    villainColor: '#000000',
    spiderSenseTitle: '⚡ ¡ALERTA DE SENTIDO ARÁCNIDO CUÁNTICO 2099! ⚡',
    spiderSenseColor: '#f43f5e',
    spiderSenseEffect: 'INTERFAZ HOLOGRÁFICA ROJA Y ESCÁNER CUÁNTICO',
    heroQuote: "Miguel O'Hara dice: En el 100% de las líneas temporales, el amor de tus papás es un evento canónico indestructible.",
    particleColors: ['#0284c7', '#f43f5e', '#fbbf24', '#06b6d4'],
    gradientBg: 'from-sky-600 via-blue-800 to-rose-600',
    buttonGradient: 'from-sky-500 via-blue-600 to-rose-500 hover:from-sky-400 hover:to-rose-400 text-white font-black',
    texts: {
      intro: {
        title: 'Rafis, en la red del futuro 2099, ¡nuestro orgullo por ti es absoluto!',
        subtitle: 'Un mensaje cuántico enviado por tu Mamá y tu Papá. Conexión temporal establecida.',
        button: 'Siguiente Coordenada Multiversal',
      },
      person: {
        title: 'Eres un ser humano de altísima nobleza...',
        subtitle: 'Tu integridad, tu mente brillante y tu nobleza destacan en cada simulación. Tus papás te aman profundamente.',
        button: 'Siguiente Protocolo',
      },
      comic_twist: {
        badge: "⚡ PROTOCOLO DOMÉSTICO 2099 ⚡",
        phrase: '"¡pero la Spider-Society requiere que colabores más en las tareas del hogar!"',
        subtitle: "🕷️ Miguel O'Hara confirma: ¡El mantenimiento de la base familiar es una prioridad de nivel alfa!",
        button: 'Sintonizar Sentido 2099',
      },
      villain_confrontation: {
        badge: '⚡ ANOMALÍA MULTIVERSAL // THE SPOT ⚡',
        title: '¡El abismo multiversal querrá distorsionar tus certezas!',
        subtitle: 'The Spot desata portales de masa oscura buscando desestabilizar el continuum, pero la red de amor de tus papás es inquebrantable.',
        heroQuip: 'Miguel O\'Hara: "Spot, tus portales no alteran el Evento Canónico del amor de mis papás."',
        villainThreat: 'The Spot: "¡Voy a quitarte todo lo que valoras en cada dimensión!"',
        parentAdvice: 'Tus papás sellan el código: Tu amor es nuestro Evento Canónico Indestructible. ¡Vencerás cualquier portal!',
        button: 'Estabilizar el Continuum y Vencer',
      },
      deep_1: {
        mainQuote: '"el tiempo cibernético avanza vertiginosamente, pero tu expediente apenas inicia. Tienes infinitos horizontes por explorar, probar, sentir y experimentar..."',
        c1Title: 'SECTORES POR EXPLORAR',
        c1Desc: 'Nuevos retos y descubrimientos científicos y personales.',
        c2Title: 'METAS POR DESBLOQUEAR',
        c2Desc: 'Proyectos y logros de nivel superior esperándote.',
        c3Title: 'EMOCIONES POR EXPERIMENTAR',
        c3Desc: 'Momentos inolvidables de satisfacción y triunfo.',
        c4Title: '¡UN FUTURO BRILLANTE POR VIVIR!',
        c4Desc: 'Tu destino está diseñado para la grandeza, Rafis.',
        button: 'Siguiente Fase',
      },
      deep_2: {
        mainQuote: '"ejecuta tu camino con máxima energía... coraje... tenacidad inquebrantable... capacidad de adaptación... y una deslumbrante alegría..."',
        p1Title: 'MÁXIMA ENERGÍA',
        p1Desc: 'Para abordar cada reto con precisión y determinación.',
        p2Title: 'TENACIDAD INQUEBRANTABLE',
        p2Desc: 'Constancia absoluta ante cualquier variable compleja.',
        p3Title: 'CAPACIDAD DE ADAPTACIÓN',
        p3Desc: 'Evolucionar y superarte frente a cada eventualidad.',
        p4Title: 'DESLUMBRANTE ALEGRÍA',
        p4Desc: 'El algoritmo de luz que enorgullece a tus papás.',
        button: 'Siguiente Fase',
      },
      deep_sadness: {
        mainQuote: '"y ten por seguro que a veces habrán anomalías tristes, momentos de aislamiento o turbulencia..."',
        heroQuip: 'Miguel O\'Hara: "Anomalía triste detectada y eliminada por el protocolo de mis papás."',
        villainThreat: 'The Spot: "¡El aislamiento absorberá tu luz!"',
        c1Title: 'ANOMALÍAS TEMPORALES',
        c1Desc: 'Los momentos difíciles no alteran tu valor real. Tus papás son tu cortafuegos y respaldo permanente.',
        c2Title: 'ISLAS DE REFLEXIÓN',
        c2Desc: 'Espacios para calibrar tu mente y fortalecer tu espíritu.',
        button: 'Siguiente Fase',
      },
      deep_fear: {
        mainQuote: '"alertas de angustia o tensión... pero el sistema confirma: son eventos temporales que desaparecen muy rápido..."',
        heroQuip: 'Miguel O\'Hara: "El miedo es estadísticamente irrelevante en mi multiverso."',
        villainThreat: 'The Spot: "¡El pánico colapsará tus circuitos!"',
        c1Title: 'ALERTAS TEMPORALES',
        c1Desc: 'Ninguna sombra interrumpe tu canal principal por mucho tiempo.',
        c2Title: 'DESAPARECEN DEL SISTEMA',
        c2Desc: 'La estabilidad y la paz vuelven a restablecerse siempre.',
        button: 'Siguiente Fase',
      },
      deep_choice: {
        mainQuote: '"porque la alegría es tu directiva elegida, un abraza de soporte que equilibra cualquier dimensión..."',
        c1Title: 'DIRECTIVA PRINCIPAL',
        c1Desc: 'Elegir el entusiasmo como el núcleo de tus decisiones.',
        c2Title: 'ABRAZO DE SOPORTE',
        c2Desc: 'El amor de tus papás cifrado para siempre en tu alma.',
        button: 'Consultar Código Genético',
      },
      deep_gods: {
        mainQuote: '"tu código genético proviene de inmortales, semidioses mitológicos con estirpe vikinga y sangre de oro puro"',
        c1Title: 'SEMIDIOSES MITOLÓGICOS',
        c1Desc: 'Un diseño superior lleno de capacidad y virtudes.',
        c2Title: 'ESTIRPE VIKINGA',
        c2Desc: 'Valentía para dominar las fronteras del espacio y el tiempo.',
        c3Title: 'SANGRE DE ORO',
        c3Desc: 'El elemento más valioso y noble de toda la galaxia.',
        button: 'Ir a la Confirmación Final',
      },
      final: {
        title: 'TE AMAMOS, RAFIS',
        subtitle: 'DE TUS PAPÁS',
        footerText: '¡En el año 2099 y en cada dimensión del continuo, el amor de tus papás por ti es un evento canónico eterno e indestructible!',
      },
    },
  },
];
