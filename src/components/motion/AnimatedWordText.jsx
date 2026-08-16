import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedWordText({ text, className = '', highlightClass = '', highlightWords = [], delay = 0 }) {
  const words = text.split(' ');

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '');
        const isHighlighted = highlightWords.includes(cleanWord);

        return (
          <motion.span
            key={idx}
            className={`inline-block mr-2.5 ${isHighlighted ? highlightClass : ''}`}
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
                filter: 'blur(5px)',
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: delay + idx * 0.08,
                },
              },
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
