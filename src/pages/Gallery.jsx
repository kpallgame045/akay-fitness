import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { siteData } from '../data/siteData';
import SEOHead from '../components/SEOHead';
import FinalCTA from '../components/FinalCTA';

import AnimatedHeading from '../components/motion/AnimatedHeading';
import AnimatedParagraph from '../components/motion/AnimatedParagraph';
import AnimatedLabel from '../components/motion/AnimatedLabel';
import AnimatedCard from '../components/motion/AnimatedCard';
import AnimatedImage from '../components/motion/AnimatedImage';
import ScrollGymVisual from '../components/motion/ScrollGymVisual';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const categories = ['All', 'Gym', 'Equipment', 'Workout', 'Cardio'];

  const filteredGallery = activeCategory === 'All'
    ? siteData.gallery
    : siteData.gallery.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-28 pb-0 font-body relative overflow-hidden">
      <SEOHead
        title="Inside AKAY Fitness - Facility & Equipment Gallery"
        description="Browse high-resolution photographs of AKAY Fitness facility in Sargasan, Gandhinagar."
        pathname="/gallery"
      />

      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block">
            PHOTO GALLERY
          </AnimatedLabel>
          <h1 className="font-athletic text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white block">
            <AnimatedHeading
              text="INSIDE AKAY FITNESS"
              highlightClass="text-orange-gradient"
              highlightWords={['AKAY', 'FITNESS']}
            />
          </h1>
          <AnimatedParagraph delay={0.3} className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of our state-of-the-art gym environment, sprint tracks, bio-mechanical equipment, and ambient lighting in Sargasan.
          </AnimatedParagraph>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-athletic text-lg uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-orange text-white shadow-orange-glow scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Scroll-Driven 3D Camera Aperture Frame Visual) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <ScrollGymVisual type="camera" position="left" className="-top-12" />

          {filteredGallery.map((item, index) => (
            <AnimatedCard
              key={item.id}
              index={index}
              className="glass-card rounded-3xl overflow-hidden group cursor-pointer relative h-[350px] border border-white/10"
            >
              <div className="w-full h-full" onClick={() => setActiveLightbox(item)}>
                <AnimatedImage
                  src={item.image}
                  alt={item.title}
                  containerClassName="w-full h-full"
                  className="group-hover:scale-110"
                  variant={index % 2 === 0 ? 'typeA' : 'typeB'}
                  delay={index * 0.08}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                  <div>
                    <span className="text-xs font-mono text-brand-orange uppercase font-bold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-athletic text-2xl text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-brand-orange transition-colors">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="max-w-5xl w-full bg-brand-card rounded-3xl overflow-hidden border border-white/20 p-4 relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/70 text-white hover:bg-brand-orange transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeLightbox.image}
              alt={activeLightbox.title}
              className="w-full h-[550px] object-cover rounded-2xl"
            />
            <div className="p-6">
              <span className="text-xs font-mono text-brand-orange uppercase font-bold">
                {activeLightbox.category}
              </span>
              <h2 className="font-athletic text-4xl text-white mt-1">
                {activeLightbox.title}
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                {activeLightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* REUSABLE ANIMATED FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
