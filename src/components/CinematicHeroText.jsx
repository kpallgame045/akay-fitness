import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { siteData } from '../data/siteData';
import AnimatedHeading from './motion/AnimatedHeading';
import AnimatedParagraph from './motion/AnimatedParagraph';
import AnimatedLabel from './motion/AnimatedLabel';

export default function CinematicHeroText() {
  return (
    <div className="space-y-6 text-left relative z-10">
      {/* Location Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
        <AnimatedLabel className="text-xs font-mono tracking-widest text-brand-orange uppercase font-bold">
          SARGASAN'S MOST PREMIUM FITNESS DESTINATION
        </AnimatedLabel>
      </div>

      {/* Main Athletic Headline - True Character-by-Character Framer Motion Reveal */}
      <h1 className="font-athletic text-6xl sm:text-7xl md:text-8xl xl:text-9xl leading-[0.88] tracking-wider text-white">
        <div className="block">
          <AnimatedHeading
            text="DISCIPLINE TODAY."
            highlightClass="text-orange-gradient"
            highlightWords={['TODAY.']}
            delay={0.1}
          />
        </div>
        <div className="block mt-2">
          <AnimatedHeading
            text="STRENGTH FOREVER."
            highlightClass="text-metallic"
            highlightWords={['FOREVER.']}
            delay={0.4}
          />
        </div>
      </h1>

      {/* Supporting Text */}
      <AnimatedParagraph delay={0.65} className="font-display font-semibold text-lg sm:text-2xl text-brand-orange tracking-wide">
        {siteData.brand.supportingText}
      </AnimatedParagraph>

      <AnimatedParagraph delay={0.75} className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed font-body">
        {siteData.brand.heroDescription}
      </AnimatedParagraph>

      {/* Action Buttons */}
      <AnimatedParagraph delay={0.85} className="pt-4 flex flex-wrap items-center gap-4">
        <Link
          to="/join-now"
          className="px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-glow text-white font-athletic text-xl tracking-wider uppercase rounded-full shadow-orange-glow hover:shadow-orange-glow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center gap-3 group relative overflow-hidden"
          data-cursor="JOIN"
        >
          <span className="relative z-10 flex items-center gap-3">
            JOIN NOW
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </span>
          {/* Orange Light Sweep Effect */}
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Link>

        <a
          href={`https://wa.me/${siteData.brand.phoneClean}?text=Hi%20AKAY%20Fitness,%20I%20want%20to%20know%20more!`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white/5 border border-white/15 hover:border-brand-orange/50 text-white font-athletic text-xl tracking-wider uppercase rounded-full backdrop-blur-md transition-all duration-300 hover:bg-white/10 flex items-center gap-3"
          data-cursor="CHAT"
        >
          <MessageSquare className="w-5 h-5 text-emerald-400" />
          WHATSAPP US
        </a>
      </AnimatedParagraph>

      {/* Metrics */}
      <AnimatedParagraph delay={0.95} className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
        <div>
          <span className="font-athletic text-3xl sm:text-4xl text-white block">8+</span>
          <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">Specialized Programs</span>
        </div>
        <div>
          <span className="font-athletic text-3xl sm:text-4xl text-brand-orange block">100%</span>
          <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">Verified Guidance</span>
        </div>
        <div>
          <span className="font-athletic text-3xl sm:text-4xl text-white block">4.9★</span>
          <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">Google Rating</span>
        </div>
      </AnimatedParagraph>
    </div>
  );
}
