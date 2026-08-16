import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect mobile touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    setIsVisible(true);

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor]');
      if (target) {
        setIsHovered(true);
        document.body.classList.add('cursor-hover');
        const customText = target.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        } else if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          setCursorText('GO');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot */}
      <div
        className="custom-cursor-dot shadow-orange-glow"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Expanding ring */}
      <div
        className="custom-cursor-ring flex items-center justify-center text-[9px] font-bold text-white tracking-widest uppercase transition-all duration-150 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {isHovered && cursorText && (
          <span className="animate-fade-in text-brand-orange drop-shadow-md font-mono">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
