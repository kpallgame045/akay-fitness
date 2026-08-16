import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCharacterText({ text, className = '', highlightClass = '', highlightWords = [] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    // Fail-safe fallback to guarantee text visibility
    const timer = setTimeout(() => setIsVisible(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const words = text.split(' ');
  let charGlobalIndex = 0;

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, wIdx) => {
        const isHighlighted = highlightWords.includes(word.replace(/[^a-zA-Z]/g, ''));
        return (
          <span key={wIdx} className={`inline-block whitespace-nowrap mr-3 ${isHighlighted ? highlightClass : ''}`}>
            {word.split('').map((char, cIdx) => {
              const delay = charGlobalIndex * 40;
              charGlobalIndex++;
              return (
                <span
                  key={cIdx}
                  className="inline-block transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
                    filter: isVisible ? 'blur(0px)' : 'blur(4px)',
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
