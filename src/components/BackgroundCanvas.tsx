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

    // Color choices based on multiverse theme and step
    const getColors = () => {
      if (multiverse?.particleColors?.length) {
        return multiverse.particleColors;
      }
      return ['#ffd700', '#ff0055', '#00ffff', '#ffffff'];
    };

    // Spawn new particle
    const createParticle = (): Particle => {
      const colors = getColors();
      const color = colors[Math.floor(Math.random() * colors.length)];
      const speedMultiplier = currentStep === 'spider_sense' ? 2.5 : 1.0;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedMultiplier * 1.5,
        vy: (Math.random() - 0.5) * speedMultiplier * 1.5 - (currentStep.startsWith('deep_') ? 0.8 : 0),
        size: Math.random() * (currentStep === 'final' ? 4 : 2.5) + 1,
        color,
        alpha: Math.random() * 0.7 + 0.3,
        decay: Math.random() * 0.005 + 0.002,
      };
    };

    // Init initial particles
    particles = Array.from({ length: 65 }, createParticle);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // 1. Dark Gradient Base
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );

      if (currentStep.startsWith('deep_') || currentStep === 'final') {
        bgGrad.addColorStop(0, '#1c052e');
        bgGrad.addColorStop(0.6, '#0d0218');
        bgGrad.addColorStop(1, '#05000a');
      } else if (currentStep === 'spider_sense') {
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

      // 2. Spider Sense Waves (when in spider_sense step)
      if (currentStep === 'spider_sense' || spiderSenseLevel > 0) {
        const centerX = width / 2;
        const centerY = height / 2;
        const wavesCount = 5;

        for (let i = 0; i < wavesCount; i++) {
          const radius = ((tick * 3 + i * 70) % 350) + 20;
          const alpha = 1 - radius / 370;

          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.strokeStyle = i % 2 === 0 ? `rgba(255, 0, 85, ${alpha})` : `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = i % 2 === 0 ? 3 : 2;
          ctx.stroke();

          // Squiggly spider-sense spikes
          if (radius > 50 && radius < 300) {
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate((tick * 0.02 + i) % (Math.PI * 2));
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
              const x1 = Math.cos(a) * radius;
              const y1 = Math.sin(a) * radius;
              const x2 = Math.cos(a) * (radius + 18);
              const y2 = Math.sin(a) * (radius + 18);

              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.strokeStyle = multiverse.accentColor || '#ffe600';
              ctx.lineWidth = 2;
              ctx.stroke();
            }
            ctx.restore();
          }
        }
      }

      // 3. Spider Web Background Vector Lines
      ctx.save();
      ctx.strokeStyle = 'rgba(157, 0, 255, 0.08)';
      ctx.lineWidth = 1;
      const webCenterX = width * 0.85;
      const webCenterY = height * 0.15;

      for (let r = 40; r < Math.max(width, height); r += 60) {
        ctx.beginPath();
        ctx.arc(webCenterX, webCenterY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 6) {
        ctx.beginPath();
        ctx.moveTo(webCenterX, webCenterY);
        ctx.lineTo(
          webCenterX + Math.cos(angle) * Math.max(width, height),
          webCenterY + Math.sin(angle) * Math.max(width, height)
        );
        ctx.stroke();
      }
      ctx.restore();

      // 4. Floating Particles (Multiverse Dust)
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

          if (currentStep === 'final') {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 8;
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
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
