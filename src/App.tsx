import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { ScreenStep } from './types';
import { ComicHeader } from './components/ComicHeader';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { ScreenContent } from './components/ScreenContent';
import { SpiderSensePause } from './components/SpiderSensePause';
import { MULTIVERSES } from './multiverses';
import { playGlitchSound, playWhooshSound } from './utils/audio';

const STEPS_ORDER: ScreenStep[] = [
  'intro',
  'person',
  'spider_sense',
  'comic_twist',
  'spider_sense_alert',
  'villain_confrontation',
  'deep_1',
  'deep_2',
  'deep_sadness',
  'deep_fear',
  'deep_choice',
  'deep_gods',
  'final',
];

export default function App() {
  const [currentStep, setCurrentStep] = useState<ScreenStep>('intro');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [multiverseIndex, setMultiverseIndex] = useState(0);

  const currentMultiverse = MULTIVERSES[multiverseIndex] || MULTIVERSES[0];
  const stepIndex = STEPS_ORDER.indexOf(currentStep);

  const handleNext = () => {
    const nextIdx = stepIndex + 1;
    if (nextIdx < STEPS_ORDER.length) {
      setCurrentStep(STEPS_ORDER[nextIdx]);
    }
  };

  const handleRestartMultiverse = () => {
    if (soundEnabled) {
      playGlitchSound();
      playWhooshSound();
    }
    setMultiverseIndex((prev) => (prev + 1) % MULTIVERSES.length);
    setCurrentStep('intro');
  };

  return (
    <div className="relative min-h-screen w-full bg-[#030008] text-white flex flex-col justify-between overflow-x-hidden selection:bg-rose-600 selection:text-white font-sans">
      {/* 1. Animated Interactive Background Canvas */}
      <BackgroundCanvas currentStep={currentStep} multiverse={currentMultiverse} />

      {/* 2. Top Header Bar (No Back Button) */}
      <ComicHeader
        currentStep={currentStep}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        stepIndex={stepIndex}
        totalSteps={STEPS_ORDER.length}
        multiverse={currentMultiverse}
      />

      {/* 3. Main Sequence View Area */}
      <main className="flex-1 flex items-center justify-center px-4 py-20 z-10 w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {currentStep === 'spider_sense' || currentStep === 'spider_sense_alert' ? (
            <SpiderSensePause key={`${currentStep}_m${multiverseIndex}`} onComplete={handleNext} soundEnabled={soundEnabled} multiverse={currentMultiverse} step={currentStep} />
          ) : (
            <ScreenContent
              key={`${currentStep}_m${multiverseIndex}`}
              currentStep={currentStep}
              onNext={handleNext}
              onRestartMultiverse={handleRestartMultiverse}
              soundEnabled={soundEnabled}
              multiverse={currentMultiverse}
            />
          )}
        </AnimatePresence>
      </main>

      {/* 4. Footer Branding & Spider-Verse Tagline */}
      <footer className="relative z-10 py-3 text-center text-xs font-mono text-zinc-500 uppercase tracking-widest border-t border-zinc-900 bg-black/60 backdrop-blur-xs">
        <span>INSPIRADO EN SPIDER-VERSE // CON TODO EL AMOR DE TUS PAPÁS PARA RAFIS ❤️</span>
      </footer>
    </div>
  );
}
