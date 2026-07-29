import React, { useEffect, useRef } from 'react';
import { ScreenStep } from '../types';
import { MultiverseTheme } from '../multiverses';

interface BackgroundCanvasProps {
  currentStep: ScreenStep;
  spiderSenseLevel?: number;
  multiverse: MultiverseTheme;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({
  currentStep,
  spiderSenseLevel = 0,
  multiverse,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const isVillainStep = currentStep === 'villain_confrontation' || currentStep === 'deep_sadness' || currentStep === 'deep_fear';

    const getColors = () => {
      if (isVillainStep) {
        return ['#dc2626', '#a855f7', '#22c55e', '#000000', '#ea580c'];
      }
      if (multiverse?.particleColors?.length) {
        return multiverse.particleColors;
      }
      return ['#ffd700', '#ff0055', '#00ffff', '#ffffff'];
    };

    const createParticle = (): Particle => {
      const colors = getColors();
      const color = colors[Math.floor(Math.random() * colors.length)];
      const speedMultiplier = (currentStep === 'spider_sense' || currentStep === 'spider_sense_alert' || isVillainStep) ? 2.8 : 1.0;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedMultiplier * 1.8,
        vy: (Math.random() - 0.5) * speedMultiplier * 1.8 - (currentStep.startsWith('deep_') ? 0.8 : 0),
        size: Math.random() * (currentStep === 'final' ? 4 : 3) + 1,
        color,
        alpha: Math.random() * 0.7 + 0.3,
        decay: Math.random() * 0.005 + 0.002,
      };
    };

    particles = Array.from({ length: 70 }, createParticle);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Radial Gradient Background Base
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );

      if (isVillainStep) {
        bgGrad.addColorStop(0, '#2e0505');
        bgGrad.addColorStop(0.5, '#17020d');
        bgGrad.addColorStop(1, '#050002');
      } else if (currentStep.startsWith('deep_') || currentStep === 'final') {
        bgGrad.addColorStop(0, '#1c052e');
        bgGrad.addColorStop(0.6, '#0d0218');
        bgGrad.addColorStop(1, '#05000a');
      } else if (currentStep === 'spider_sense' || currentStep === 'spider_sense_alert') {
        bgGrad.addColorStop(0, '#330012');
        bgGrad.addColorStop(0.5, '#190022');
        bgGrad.addColorStop(1, '#08000d');
      } else {
        bgGrad.addColorStop(0, '#120424');
        bgGrad.addColorStop(0.6, '#0a0214');
        bgGrad.addColorStop(1, '#030008');
      }

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Spider Sense Waves
      if (currentStep === 'spider_sense' || currentStep === 'spider_sense_alert' || spiderSenseLevel > 0) {
        const centerX = width / 2;
        const centerY = height / 2;
        const wavesCount = 6;

        for (let i = 0; i < wavesCount; i++) {
          const radius = ((tick * 3.5 + i * 60) % 380) + 20;
          const alpha = 1 - radius / 400;

          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.strokeStyle = i % 2 === 0 ? `rgba(239, 68, 68, ${alpha})` : `rgba(250, 204, 21, ${alpha})`;
          ctx.lineWidth = i % 2 === 0 ? 4 : 2;
          ctx.stroke();
        }
      }

      // Floating Particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          particles[index] = createParticle();
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentStep, spiderSenseLevel, multiverse]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
};
