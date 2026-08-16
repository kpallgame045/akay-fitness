import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedHeading({ text, className = '', highlightClass = '', highlightWords = [], delay = 0 }) {
  const words = text.split(' ');
  let globalCharIndex = 0;

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {words.map((word, wIdx) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '');
        const isHighlighted = highlightWords.includes(cleanWord);
        const chars = word.split('');

        return (
          <span
            key={wIdx}
            className={`inline-block whitespace-nowrap mr-3 ${isHighlighted ? highlightClass : ''}`}
          >
            {chars.map((char, cIdx) => {
              const charDelay = delay + globalCharIndex * 0.035;
              globalCharIndex++;

              return (
                <motion.span
                  key={cIdx}
                  className="inline-block"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 28,
                      filter: 'blur(6px)',
                      scale: 0.88,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      scale: 1,
                      transition: {
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                        delay: charDelay,
                      },
                    },
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </motion.span>
  );
}
