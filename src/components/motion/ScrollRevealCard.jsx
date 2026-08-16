import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollRevealCard Component
 * High-contrast, un-missable Framer Motion scroll reveal for cards, boxes & panels.
 * Triggers when element crosses 80px inside viewport threshold.
 */
export default function ScrollRevealCard({
  children,
  className = '',
  index = 0,
  baseDelay = 0,
  direction = 'up', // 'up' | 'left' | 'right' | 'scale'
  hoverEffect = true,
}) {
  const totalDelay = baseDelay + index * 0.15;

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -60, y: 20, scale: 0.93, filter: 'blur(8px)' };
      case 'right':
        return { opacity: 0, x: 60, y: 20, scale: 0.93, filter: 'blur(8px)' };
      case 'scale':
        return { opacity: 0, x: 0, y: 30, scale: 0.88, filter: 'blur(10px)' };
      case 'up':
      default:
        return { opacity: 0, x: 0, y: 70, scale: 0.93, filter: 'blur(8px)' };
    }
  };

  const cardVariants = {
    hidden: getInitialPosition(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay: totalDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -80px 0px' }}
      variants={cardVariants}
      whileHover={hoverEffect ? {
        y: -7,
        scale: 1.018,
        transition: { duration: 0.3, ease: 'easeOut' }
      } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

// Child Component for Icon Stagger
export function ScrollRevealIcon({ children, className = '', index = 0 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, scale: 0.5, rotate: -15 },
        visible: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 0.5, delay: index * 0.15 + 0.15, ease: [0.16, 1, 0.3, 1] }
        }
      }}
      whileHover={{ scale: 1.15, rotate: 6 }}
    >
      {children}
    </motion.div>
  );
}

// Child Component for Title Stagger
export function ScrollRevealTitle({ children, className = '', index = 0 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.55, delay: index * 0.15 + 0.22, ease: [0.16, 1, 0.3, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Child Component for Description Stagger
export function ScrollRevealText({ children, className = '', index = 0 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.55, delay: index * 0.15 + 0.3, ease: [0.16, 1, 0.3, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Child Component for Divider Line Draw (Width 0% -> 100%)
export function ScrollRevealDivider({ className = '', index = 0 }) {
  return (
    <motion.div
      className={`h-px bg-white/10 ${className}`}
      variants={{
        hidden: { scaleX: 0 },
        visible: {
          scaleX: 1,
          transition: { duration: 0.6, delay: index * 0.15 + 0.38, ease: [0.16, 1, 0.3, 1] }
        }
      }}
      style={{ originX: 0 }}
    />
  );
}

// Child Component for CTA Button Stagger
export function ScrollRevealCTA({ children, className = '', index = 0 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x: -15 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: index * 0.15 + 0.44, ease: [0.16, 1, 0.3, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
