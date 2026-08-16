import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedLabel({ children, className = '', delay = 0 }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 10, letterSpacing: '0.05em' }}
      whileInView={{ opacity: 1, y: 0, letterSpacing: '0.15em' }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
        delay: delay,
      }}
    >
      {children}
    </motion.span>
  );
}
