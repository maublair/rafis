import React from 'react';
import { motion } from 'motion/react';
import { MultiverseTheme } from '../multiverses';

interface ComicCardProps {
  children: React.ReactNode;
  badgeText?: string;
  badgeColor?: 'red' | 'yellow' | 'cyan' | 'purple';
  variant?: 'default' | 'punk' | 'deep' | 'final';
  className?: string;
  multiverse?: MultiverseTheme;
}

export const ComicCard: React.FC<ComicCardProps> = ({
  children,
  badgeText,
  badgeColor = 'red',
  className = '',
  multiverse,
}) => {
  const getBadgeStyle = () => {
    if (multiverse?.badgeBg) {
      return `${multiverse.badgeBg} border-black`;
    }
    switch (badgeColor) {
      case 'yellow':
        return 'bg-yellow-400 text-black border-black';
      case 'cyan':
        return 'bg-cyan-400 text-black border-black';
      case 'purple':
        return 'bg-purple-600 text-white border-black';
      default:
        return 'bg-rose-600 text-white border-black';
    }
  };

  const getContainerStyle = () => {
    if (multiverse?.cardStyle) {
      return multiverse.cardStyle;
    }
    return 'bg-zinc-950/95 border-4 border-purple-600 shadow-[8px_8px_0px_#000000,12px_12px_0px_rgba(255,0,85,0.5)] rounded-3xl';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-2xl mx-auto p-6 sm:p-8 md:p-10 z-10 ${getContainerStyle()} ${className}`}
    >
      {/* Halftone texture overlay */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none rounded-3xl" />

      {/* Top Badge Sticker */}
      {badgeText && (
        <div className="absolute -top-4 left-6 sm:left-8 z-20">
          <div
            className={`px-3.5 py-1 text-xs font-black uppercase tracking-wider border-2 shadow-[3px_3px_0px_#000] -rotate-2 rounded-md ${getBadgeStyle()}`}
          >
            {badgeText}
          </div>
        </div>
      )}

      {/* Corner Graphic Screws / Spidey Web Accent */}
      <div className="absolute top-3 right-3 text-white/30 text-[10px] sm:text-xs font-mono select-none uppercase">
        {multiverse ? multiverse.dimensionTag : '/// EARTH-616'}
      </div>
      <div className="absolute bottom-3 left-3 text-white/30 text-[10px] sm:text-xs font-mono select-none uppercase">
        RAFIS // MAMÁ Y PAPÁ
      </div>

      {/* Card Inner Content */}
      <div className="relative z-10 flex flex-col items-center">{children}</div>
    </motion.div>
  );
};
