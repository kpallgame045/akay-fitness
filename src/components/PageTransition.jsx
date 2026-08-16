import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitioning(false);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <>
      {/* Route Transition Overlay */}
      {transitioning && (
        <div className="fixed inset-0 z-[1000] bg-brand-dark flex flex-col items-center justify-center pointer-events-auto transition-opacity duration-300 animate-fade-in">
          <img
            src={siteData.brand.logoUrl}
            alt="AKAY Fitness"
            className="h-16 w-auto object-contain animate-pulse mb-6"
          />
          {/* Orange Line Sweep */}
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-brand-orange to-transparent shadow-orange-glow animate-pulse" />
        </div>
      )}

      {children}
    </>
  );
}
