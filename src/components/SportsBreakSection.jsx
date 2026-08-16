import React from 'react';
import { Zap, Activity, Award, Shield } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function SportsBreakSection() {
  return (
    <div className="relative w-full py-16 md:py-24 bg-gradient-to-r from-[#08080A] via-[#121217] to-[#08080A] overflow-hidden border-y border-white/10">
      {/* Background Kinetic Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
        {/* Left Typography */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-mono text-xs uppercase font-extrabold tracking-widest">
            <Activity className="w-4 h-4" /> ENGINEERED ATHLETICISM
          </div>
          <h2 className="font-athletic text-5xl sm:text-6xl md:text-7xl text-white tracking-wide leading-tight">
            PRECISION EQUIPMENT. <br />
            <span className="text-orange-gradient">UNMATCHED RESULTS.</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Every Olympic plate, dumbbell rack, and cardio console at AKAY Fitness Sargasan is selected for optimal biomechanics, smooth motion pathways, and maximum muscle activation.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs text-gray-300">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <Zap className="w-5 h-5 text-brand-orange shrink-0" />
              <span>Bio-Mechanical Precision</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <Shield className="w-5 h-5 text-brand-orange shrink-0" />
              <span>Dedicated Women Area</span>
            </div>
          </div>
        </div>

        {/* Right Feature Composition */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
          <div className="space-y-4">
            <div className="glass-card rounded-2xl overflow-hidden p-2 border border-white/10">
              <img
                src={siteData.heroImages[2]} // Treadmills
                alt="AKAY Fitness Treadmills"
                className="w-full h-44 object-cover rounded-xl"
              />
              <div className="p-3">
                <span className="text-[10px] font-mono text-brand-orange uppercase font-bold block">
                  CARDIO DECK
                </span>
                <span className="font-athletic text-xl text-white">PANORAMIC VIEW</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-tr from-brand-orange to-brand-orange-glow text-white shadow-orange-glow space-y-1">
              <span className="font-athletic text-4xl block">100%</span>
              <span className="text-xs font-mono uppercase tracking-wider font-bold">AIR CONDITIONED</span>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-1">
              <span className="font-athletic text-4xl text-white block">6 AM - 10 PM</span>
              <span className="text-xs font-mono text-gray-400 uppercase">OPERATIONAL HOURS</span>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden p-2 border border-white/10">
              <img
                src={siteData.heroImages[3]} // Ellipticals
                alt="AKAY Fitness Facility"
                className="w-full h-44 object-cover rounded-xl"
              />
              <div className="p-3">
                <span className="text-[10px] font-mono text-brand-orange uppercase font-bold block">
                  ENDURANCE ZONE
                </span>
                <span className="font-athletic text-xl text-white">IMPORT EQUIPMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
