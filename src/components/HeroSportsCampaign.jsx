import React from 'react';
import { ShieldCheck, Flame, Zap, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function HeroSportsCampaign() {
  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[600px] flex items-center justify-center pointer-events-auto">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-orange/20 via-transparent to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Layer 1: Main Real AKAY Gym Photograph Frame */}
      <div className="relative w-[90%] sm:w-[85%] h-[85%] rounded-3xl overflow-hidden glass-card border border-white/15 p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] transform -rotate-1 hover:rotate-0 transition-transform duration-700 group">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img
            src={siteData.heroImages[1]} // Track image with "ALWAYS FIT"
            alt="AKAY Fitness Sprint Track Sargasan"
            className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />

          {/* Top Metallic Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold uppercase text-brand-orange">
            <Zap className="w-3.5 h-3.5" /> SARGASAN HIGH-PERFORMANCE FACILITY
          </div>

          {/* Bottom Card Content Overlay */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-brand-dark/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                FACILITY STANDARD
              </span>
              <span className="font-athletic text-2xl text-white">
                PREMIUM BIO-MECHANICS
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange">
              <Flame className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2: Secondary Floating Layered Card */}
      <div className="absolute -bottom-2 -left-2 sm:left-4 w-60 sm:w-72 glass-card rounded-2xl p-4 border border-brand-orange/40 shadow-2xl backdrop-blur-xl animate-float">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-orange-glow shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="font-athletic text-2xl text-white block leading-none">
              4.9 ★ RATED
            </span>
            <span className="text-[10px] font-mono text-gray-400 uppercase">
              Gandhinagar Top Gym
            </span>
          </div>
        </div>
      </div>

      {/* Layer 3: Floating Metallic Accent Ring */}
      <div className="absolute top-4 right-2 sm:right-6 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-xs font-mono text-white flex items-center gap-2 shadow-2xl">
        <Award className="w-4 h-4 text-brand-orange" />
        <span className="font-bold">ALWAYS FIT</span>
      </div>

      {/* Thin Orange Kinetic Motion Lines */}
      <div className="absolute top-1/3 -right-6 w-48 h-0.5 bg-gradient-to-r from-transparent via-brand-orange to-transparent blur-[0.5px]" />
      <div className="absolute bottom-1/4 -left-6 w-64 h-0.5 bg-gradient-to-r from-brand-orange via-transparent to-transparent blur-[0.5px]" />
    </div>
  );
}
