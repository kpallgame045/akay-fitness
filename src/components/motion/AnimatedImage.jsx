import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  variant = 'typeA', // 'typeA' | 'typeB' | 'typeC' | 'typeD'
  delay = 0
}) {
  const getMaskVariants = () => {
    switch (variant) {
      case 'typeB':
        return {
          hidden: { transform: 'translateY(0%)' },
          visible: { transform: 'translateY(-101%)' }
        };
      case 'typeC':
        return {
          hidden: { opacity: 1 },
          visible: { opacity: 0 }
        };
      case 'typeA':
      default:
        return {
          hidden: { transform: 'translateX(0%)' },
          visible: { transform: 'translateX(101%)' }
        };
    }
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Dark Curtain Mask Reveal */}
      <motion.div
        className="absolute inset-0 bg-brand-dark z-10 pointer-events-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={getMaskVariants()}
        transition={{
          duration: 0.85,
          ease: [0.77, 0, 0.175, 1],
          delay: delay,
        }}
      />

      {/* Main Image with Scale & Blur Transition */}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        initial={{ scale: 1.1, filter: 'blur(8px)' }}
        whileInView={{ scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.95,
          ease: [0.16, 1, 0.3, 1],
          delay: delay + 0.1,
        }}
      />

      {/* Border Accent Line Drawing */}
      <motion.div
        className="absolute inset-0 border border-brand-orange/40 pointer-events-none rounded-inherit"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.6,
          delay: delay + 0.45,
        }}
      />
    </div>
  );
}
