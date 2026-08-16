import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { siteData } from '../data/siteData';
import SEOHead from '../components/SEOHead';
import FinalCTA from '../components/FinalCTA';

import AnimatedHeading from '../components/motion/AnimatedHeading';
import AnimatedParagraph from '../components/motion/AnimatedParagraph';
import AnimatedLabel from '../components/motion/AnimatedLabel';
import AnimatedCard from '../components/motion/AnimatedCard';
import AnimatedImage from '../components/motion/AnimatedImage';
import ScrollGymVisual from '../components/motion/ScrollGymVisual';

export default function Programs() {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-28 pb-0 font-body relative overflow-hidden">
      <SEOHead
        title="Fitness Programs & Classes in Sargasan"
        description="Explore 8 specialized programs at AKAY Fitness Sargasan: Gym Workout, Women-Only Gym, Zumba, Yoga, Cardio, Floor Workout, CrossFit, Kickboxing."
        pathname="/programs"
      />

      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-20 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block">
            SPECIALIZED ATHLETIC PATHWAYS
          </AnimatedLabel>
          <h1 className="font-athletic text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white block">
            <AnimatedHeading
              text="FIND YOUR WAY TO FITNESS"
              highlightClass="text-orange-gradient"
              highlightWords={['WAY', 'TO', 'FITNESS']}
            />
          </h1>
          <AnimatedParagraph delay={0.3} className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose from 8 distinct specialized workout formats tailored for beginners, women, strength athletes, and cardio enthusiasts.
          </AnimatedParagraph>
        </div>

        {/* Detailed Program Grid (Scroll-Driven Kettlebell Visual) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <ScrollGymVisual type="kettlebell" position="right" className="-top-12" />

          {siteData.programs.map((program, index) => (
            <AnimatedCard
              key={program.id}
              index={index}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-brand-orange/40 transition-all duration-300"
            >
              <div className="h-64 relative overflow-hidden">
                <AnimatedImage
                  src={program.image}
                  alt={program.title}
                  containerClassName="w-full h-full"
                  className="group-hover:scale-105"
                  variant={index % 2 === 0 ? 'typeA' : 'typeB'}
                  delay={index * 0.1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-orange-glow">
                  {program.level}
                </span>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h2 className="font-athletic text-4xl text-white tracking-wide group-hover:text-brand-orange transition-colors">
                    {program.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {program.fullDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-orange" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-orange" />
                      <span>{program.schedule}</span>
                    </div>
                  </div>

                  <Link
                    to="/join-now"
                    className="w-full py-3.5 bg-white/5 border border-white/15 hover:border-brand-orange hover:bg-brand-orange text-white font-athletic text-lg uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-orange-glow"
                  >
                    JOIN THIS PROGRAM <ArrowRight className="w-4 h-4" />
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
