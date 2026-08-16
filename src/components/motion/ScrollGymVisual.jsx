import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollGymVisual Component
 * Scroll-driven 3D & graphic visualizer.
 * Graphic physically emerges from below the viewport (y: 180px -> 0px) as the user scrolls,
 * scaling, un-blurring, and settling seamlessly into the section depth.
 */
export default function ScrollGymVisual({
  type = 'dumbbell', // 'dumbbell' | 'plate' | 'kettlebell' | 'sculpture' | 'star' | 'barbell' | 'camera' | 'pin'
  position = 'right', // 'right' | 'left' | 'center'
  className = '',
}) {
  const targetRef = useRef(null);

  // Measure scroll progress relative to this section target
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-linked continuous transformations
  const y = useTransform(scrollYProgress, [0, 0.45, 0.9], [180, 0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.85], [0.82, 1, 0.96]);
  const rotate = useTransform(scrollYProgress, [0, 0.45, 0.9], [-14, 0, 8]);

  const getPositionStyle = () => {
    switch (position) {
      case 'left':
        return 'left-2 sm:left-6 lg:left-10 text-left';
      case 'center':
        return 'left-1/2 -translate-x-1/2 text-center';
      case 'right':
      default:
        return 'right-2 sm:right-6 lg:right-10 text-right';
    }
  };

  const renderVisualGraphic = () => {
    switch (type) {
      case 'plate':
        return (
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-brand-orange/20 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
              <circle cx="100" cy="100" r="90" fill="#121216" stroke="#262630" strokeWidth="6" />
              <circle cx="100" cy="100" r="80" fill="none" stroke="#FF5500" strokeWidth="3" strokeDasharray="12 6" />
              <circle cx="100" cy="100" r="55" fill="#0A0A0C" stroke="#333340" strokeWidth="4" />
              <circle cx="100" cy="100" r="30" fill="#1A1A22" stroke="#FF5500" strokeWidth="4" />
              <circle cx="100" cy="100" r="14" fill="#050507" />
              <text x="100" y="42" fill="#888" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">20 KG</text>
              <text x="100" y="165" fill="#FF5500" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">AKAY FITNESS</text>
            </svg>
          </div>
        );

      case 'kettlebell':
        return (
          <div className="relative w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-brand-orange/25 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
            <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]">
              {/* Handle */}
              <path d="M60 90 C60 20, 140 20, 140 90" fill="none" stroke="#22222B" strokeWidth="22" strokeLinecap="round" />
              <path d="M60 90 C60 20, 140 20, 140 90" fill="none" stroke="#444455" strokeWidth="6" strokeLinecap="round" />
              {/* Body */}
              <circle cx="100" cy="150" r="70" fill="#121217" stroke="#2A2A36" strokeWidth="6" />
              <circle cx="100" cy="150" r="68" fill="none" stroke="#FF5500" strokeWidth="2" strokeDasharray="8 8" />
              <rect x="70" y="135" width="60" height="30" rx="6" fill="#0A0A0E" stroke="#FF5500" strokeWidth="2" />
              <text x="100" y="155" fill="#FFF" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">24 KG</text>
            </svg>
          </div>
        );

      case 'sculpture':
        return (
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-brand-orange/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_45px_rgba(255,85,0,0.25)]">
              <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="#121218" stroke="#FF5500" strokeWidth="4" />
              <polygon points="100,45 145,75 145,125 100,155 55,125 55,75" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
              <polygon points="100,70 120,85 120,115 100,130 80,115 80,85" fill="#FF5500" opacity="0.85" />
            </svg>
          </div>
        );

      case 'star':
        return (
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-amber-500/25 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_40px_rgba(245,158,11,0.3)]">
              <polygon points="100,15 125,70 185,75 140,115 155,175 100,140 45,175 60,115 15,75 75,70" fill="#181820" stroke="#F59E0B" strokeWidth="5" />
              <polygon points="100,35 118,78 162,82 128,112 138,155 100,130 62,155 72,112 38,82 82,78" fill="#F59E0B" opacity="0.9" />
            </svg>
          </div>
        );

      case 'barbell':
        return (
          <div className="relative w-64 h-40 sm:w-80 sm:h-48 lg:w-96 lg:h-56 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-brand-orange/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            <svg viewBox="0 0 320 160" className="w-full h-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
              {/* Main Chrome Shaft */}
              <rect x="20" y="74" width="280" height="12" rx="3" fill="url(#steelGrad)" stroke="#666677" strokeWidth="1" />
              {/* Outer Bumper Plates Left */}
              <rect x="50" y="30" width="16" height="100" rx="4" fill="#14141A" stroke="#FF5500" strokeWidth="2" />
              <rect x="68" y="36" width="14" height="88" rx="3" fill="#1C1C24" stroke="#333342" strokeWidth="2" />
              {/* Outer Bumper Plates Right */}
              <rect x="238" y="36" width="14" height="88" rx="3" fill="#1C1C24" stroke="#333342" strokeWidth="2" />
              <rect x="254" y="30" width="16" height="100" rx="4" fill="#14141A" stroke="#FF5500" strokeWidth="2" />
              {/* Collars */}
              <rect x="84" y="65" width="12" height="30" rx="2" fill="#FF5500" />
              <rect x="224" y="65" width="12" height="30" rx="2" fill="#FF5500" />
              <defs>
                <linearGradient id="steelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#EEEEFF" />
                  <stop offset="50%" stopColor="#888899" />
                  <stop offset="100%" stopColor="#333344" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );

      case 'camera':
        return (
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-brand-orange/20 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)]">
              <rect x="30" y="50" width="140" height="110" rx="20" fill="#121218" stroke="#333342" strokeWidth="5" />
              <circle cx="100" cy="105" r="40" fill="#0A0A0D" stroke="#FF5500" strokeWidth="4" />
              <circle cx="100" cy="105" r="24" fill="#1F1F28" stroke="#555566" strokeWidth="2" />
              <circle cx="140" cy="75" r="8" fill="#FF5500" />
            </svg>
          </div>
        );

      case 'pin':
        return (
          <div className="relative w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-brand-orange/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-[0_25px_50px_rgba(255,85,0,0.3)]">
              <path d="M100 20 C50 20, 40 80, 100 210 C160 80, 150 20, 100 20 Z" fill="#14141A" stroke="#FF5500" strokeWidth="6" />
              <circle cx="100" cy="80" r="32" fill="#0A0A0C" stroke="#FFFFFF" strokeWidth="4" />
              <circle cx="100" cy="80" r="16" fill="#FF5500" />
            </svg>
          </div>
        );

      case 'dumbbell':
      default:
        return (
          <div className="relative w-56 h-44 sm:w-72 sm:h-56 lg:w-80 lg:h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-brand-orange/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            <svg viewBox="0 0 300 200" className="w-full h-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)]">
              {/* Handle Shaft */}
              <rect x="50" y="93" width="200" height="14" rx="4" fill="url(#handleSteel)" stroke="#555566" strokeWidth="1" />
              {/* Left Plates */}
              <polygon points="50,40 75,55 75,145 50,160 30,145 30,55" fill="#14141A" stroke="#FF5500" strokeWidth="3" />
              <polygon points="75,55 90,65 90,135 75,145" fill="#1E1E26" stroke="#333344" strokeWidth="2" />
              {/* Right Plates */}
              <polygon points="225,55 210,65 210,135 225,145" fill="#1E1E26" stroke="#333344" strokeWidth="2" />
              <polygon points="250,40 225,55 225,145 250,160 270,145 270,55" fill="#14141A" stroke="#FF5500" strokeWidth="3" />
              <defs>
                <linearGradient id="handleSteel" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#9999AA" />
                  <stop offset="100%" stopColor="#222233" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
    }
  };

  return (
    <div
      ref={targetRef}
      className={`absolute z-0 pointer-events-none ${getPositionStyle()} ${className}`}
    >
      <motion.div style={{ y, opacity, scale, rotate }}>
        {renderVisualGraphic()}
      </motion.div>
    </div>
  );
}
