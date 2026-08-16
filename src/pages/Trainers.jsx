import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import SEOHead from '../components/SEOHead';
import FinalCTA from '../components/FinalCTA';

import AnimatedHeading from '../components/motion/AnimatedHeading';
import AnimatedParagraph from '../components/motion/AnimatedParagraph';
import AnimatedLabel from '../components/motion/AnimatedLabel';
import AnimatedCard from '../components/motion/AnimatedCard';
import AnimatedImage from '../components/motion/AnimatedImage';
import ScrollGymVisual from '../components/motion/ScrollGymVisual';

export default function Trainers() {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-28 pb-0 font-body relative overflow-hidden">
      <SEOHead
        title="Certified Fitness Coaches & Directors"
        description="Meet the certified personal trainers and fitness directors at AKAY Fitness Sargasan, Gandhinagar."
        pathname="/trainers"
      />

      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block">
            CERTIFIED COACHING TEAM
          </AnimatedLabel>
          <h1 className="font-athletic text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white block">
            <AnimatedHeading
              text="TRAIN WITH PURPOSE."
              highlightClass="text-orange-gradient"
              highlightWords={['PURPOSE.']}
            />
          </h1>
          <AnimatedParagraph delay={0.3} className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Our fitness directors do not just supervise; they actively coach, correct form, program periodization, and push your physical limits safely.
          </AnimatedParagraph>
        </div>

        {/* Trainers Showcase (Scroll-Driven 3D Athletic Sculpture) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <ScrollGymVisual type="sculpture" position="left" className="-top-12" />

          {siteData.trainers.map((trainer, index) => (
            <AnimatedCard
              key={trainer.id}
              index={index}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 group hover:border-brand-orange/40 transition-all duration-300"
            >
              <div className="h-80 relative overflow-hidden">
                <AnimatedImage
                  src={trainer.image}
                  alt={trainer.name}
                  containerClassName="w-full h-full"
                  className="group-hover:scale-105"
                  variant="typeC"
                  delay={index * 0.12}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-orange-glow">
                  {trainer.experience}
                </span>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-athletic text-4xl text-white tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-brand-orange font-bold text-xs uppercase tracking-wider">
                    {trainer.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed pt-2">
                    {trainer.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                      CORE SPECIALIZATIONS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {trainer.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/join-now"
                    className="w-full py-3.5 bg-brand-orange text-white font-athletic text-lg uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-orange-glow hover:scale-102 transition-all"
                  >
                    BOOK COACH CONSULTATION <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* REUSABLE ANIMATED FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
