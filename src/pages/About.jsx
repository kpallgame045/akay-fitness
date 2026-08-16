import React from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import SEOHead from '../components/SEOHead';
import FinalCTA from '../components/FinalCTA';

import AnimatedHeading from '../components/motion/AnimatedHeading';
import AnimatedWordText from '../components/motion/AnimatedWordText';
import AnimatedParagraph from '../components/motion/AnimatedParagraph';
import AnimatedLabel from '../components/motion/AnimatedLabel';
import AnimatedCard from '../components/motion/AnimatedCard';
import AnimatedImage from '../components/motion/AnimatedImage';
import ScrollGymVisual from '../components/motion/ScrollGymVisual';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-28 pb-0 font-body relative overflow-hidden">
      <SEOHead
        title="About Us - Our Fitness Philosophy"
        description="At AKAY Fitness Sargasan, we believe fitness is more than just a workout. It is about building discipline, strength, and confidence."
        pathname="/about"
      />

      <div className="max-w-7xl mx-auto px-6 space-y-20 pb-20 relative z-10">
        {/* Header Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block">
            THE AKAY PHILOSOPHY
          </AnimatedLabel>
          <h1 className="font-athletic text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white block">
            <AnimatedHeading
              text="YOUR FITNESS. OUR MISSION."
              highlightClass="text-orange-gradient"
              highlightWords={['OUR', 'MISSION.']}
            />
          </h1>
          <AnimatedParagraph delay={0.3} className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            At AKAY Fitness, we believe fitness is more than just a workout. It is about building discipline, improving physical fitness, and becoming more confident in yourself.
          </AnimatedParagraph>
        </div>

        {/* Feature Split Image Section (Scroll-Driven Olympic Weight Plate Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          <ScrollGymVisual type="plate" position="right" className="-top-10 opacity-30" />

          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden glass-card border border-white/10 p-3">
            <AnimatedImage
              src={siteData.heroImages[1]}
              alt="AKAY Fitness Sprint Track Sargasan"
              containerClassName="w-full h-[450px] rounded-2xl"
              variant="typeA"
              delay={0.2}
            />
            <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/90 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <span className="text-brand-orange font-mono text-xs uppercase font-bold block mb-1">
                SARGASAN, GANDHINAGAR
              </span>
              <h3 className="font-athletic text-3xl text-white">
                Sthapan 1, FF, 101 to 106
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Near Devkrupa Rhythm, Beside Radiant School of Science
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-athletic text-4xl sm:text-5xl text-white tracking-wide block">
              <AnimatedWordText
                text="OUR STORY & PURPOSE"
                highlightClass="text-orange-gradient"
                highlightWords={['STORY', '&', 'PURPOSE']}
              />
            </h2>
            <AnimatedParagraph delay={0.15} className="text-gray-300 text-base leading-relaxed">
              Founded with the objective of introducing an uncompromising, world-class athletic experience to Sargasan, AKAY Fitness bridges the gap between ordinary neighborhood gyms and luxury sports performance complexes.
            </AnimatedParagraph>
            <AnimatedParagraph delay={0.25} className="text-gray-300 text-base leading-relaxed">
              Our goal is to create a focused fitness environment where people can train consistently, discover the right workout style, and work towards their individual fitness goals with genuine coach support.
            </AnimatedParagraph>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-brand-surface border border-white/5 space-y-1">
                <span className="font-athletic text-3xl text-brand-orange block">6 AM - 10 PM</span>
                <span className="text-xs text-gray-400 font-mono">Daily Operational Hours</span>
              </div>
              <div className="p-4 rounded-xl bg-brand-surface border border-white/5 space-y-1">
                <span className="font-athletic text-3xl text-white block">100% AIR</span>
                <span className="text-xs text-gray-400 font-mono">Conditioned Environment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission / Vision / Approach Pillars (Scroll-Driven Athletic Prism Sculpture) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <ScrollGymVisual type="sculpture" position="left" className="-top-12 opacity-30" />

          <AnimatedCard index={0} className="glass-card rounded-3xl p-8 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="font-athletic text-3xl text-white tracking-wide">OUR MISSION</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To empower every individual in Sargasan and Gandhinagar with scientific fitness guidance, premium equipment, and sustained accountability.
            </p>
          </AnimatedCard>

          <AnimatedCard index={1} className="glass-card rounded-3xl p-8 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="font-athletic text-3xl text-white tracking-wide">OUR VISION</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To be recognized as the gold standard of holistic fitness centers in Gujarat—celebrated for real transformations and athletic integrity.
            </p>
          </AnimatedCard>

          <AnimatedCard index={2} className="glass-card rounded-3xl p-8 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="font-athletic text-3xl text-white tracking-wide">OUR APPROACH</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Combining progressive overload, movement biomechanics, nutrition education, and supportive group motivation.
            </p>
          </AnimatedCard>
        </div>
      </div>

      {/* REUSABLE ANIMATED FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
