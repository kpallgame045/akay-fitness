import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';
import SEOHead from '../components/SEOHead';
import FinalCTA from '../components/FinalCTA';

import AnimatedHeading from '../components/motion/AnimatedHeading';
import AnimatedParagraph from '../components/motion/AnimatedParagraph';
import AnimatedLabel from '../components/motion/AnimatedLabel';
import AnimatedCard from '../components/motion/AnimatedCard';
import ScrollGymVisual from '../components/motion/ScrollGymVisual';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function JoinNow() {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-28 pb-0 font-body relative overflow-hidden">
      <SEOHead
        title="Join AKAY Fitness Sargasan - Instant Access"
        description="Become a member at AKAY Fitness Sargasan Gandhinagar. Call: +91 87339 32013, WhatsApp, or Visit in Person."
        pathname="/join-now"
      />

      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block">
            INSTANT MEMBERSHIP ENROLLMENT
          </AnimatedLabel>
          <h1 className="font-athletic text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white block">
            <AnimatedHeading
              text="CLAIM YOUR MEMBERSHIP TODAY"
              highlightClass="text-orange-gradient"
              highlightWords={['MEMBERSHIP', 'TODAY']}
            />
          </h1>
          <AnimatedParagraph delay={0.3} className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to train at Sargasan's premier fitness center? Connect with us directly via Phone or WhatsApp for membership options and day passes.
          </AnimatedParagraph>
        </div>

        {/* Action Panel Grid (Scroll-Driven Heavy Chrome Barbell Visual) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <ScrollGymVisual type="barbell" position="right" className="-top-12" />

          {/* CALL NOW CARD */}
          <AnimatedCard index={0}>
            <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6 group hover:border-brand-orange transition-all duration-300 h-full">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-orange-glow">
                  <Phone className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-widest block">
                  OPTION 01 — PHONE CALL
                </span>
                <h2 className="font-athletic text-4xl text-white">CALL DIRECTLY</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Speak directly with our front-desk team to inquire about membership packages, family passes, and trainer availability.
                </p>
              </div>

              <a
                href={`tel:${siteData.brand.phoneClean}`}
                className="w-full py-4 bg-brand-orange text-white font-athletic text-xl uppercase tracking-wider rounded-2xl flex items-center justify-center gap-3 shadow-orange-glow hover:scale-102 transition-transform"
              >
                CALL {siteData.brand.phone} <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedCard>

          {/* WHATSAPP NOW CARD */}
          <AnimatedCard index={1}>
            <div className="glass-card rounded-3xl p-8 border border-emerald-500/20 flex flex-col justify-between space-y-6 group hover:border-emerald-400 transition-all duration-300 h-full">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-widest block">
                  OPTION 02 — WHATSAPP
                </span>
                <h2 className="font-athletic text-4xl text-white">WHATSAPP CHAT</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Send an instant WhatsApp message to receive our membership catalog, workout schedules, and current offers.
                </p>
              </div>

              <a
                href={`https://wa.me/${siteData.brand.phoneClean}?text=Hi%20AKAY%20Fitness,%20I%20want%20to%20join!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-500 text-white font-athletic text-xl uppercase tracking-wider rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30 hover:scale-102 transition-transform"
              >
                CHAT ON WHATSAPP <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedCard>

          {/* VISIT IN PERSON CARD */}
          <AnimatedCard index={2}>
            <div className="glass-card rounded-3xl p-8 border border-blue-500/20 flex flex-col justify-between space-y-6 group hover:border-blue-400 transition-all duration-300 h-full">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <MapPin className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono text-blue-400 uppercase font-bold tracking-widest block">
                  OPTION 03 — VISIT FACILITY
                </span>
                <h2 className="font-athletic text-4xl text-white">WALK-IN TOUR</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Visit us in Sargasan for a free guided tour of our workout zones, bio-mechanical machines, and locker amenities.
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-blue-600 text-white font-athletic text-xl uppercase tracking-wider rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 hover:scale-102 transition-transform"
              >
                GET MAP DIRECTIONS <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedCard>
        </div>

        {/* Benefits Panel */}
        <AnimatedParagraph delay={0.2} className="glass-card rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-brand-orange" />
            <h3 className="font-athletic text-3xl text-white">
              WHAT IS INCLUDED IN YOUR MEMBERSHIP?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>Full Access to All 8 Workout Zones</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>Certified Personal Trainer Orientation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>Postural Alignment & Bio-Mechanics Audit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>Women-Only Dedicated Workout Space</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>Zumba, Yoga & High-Energy Group Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>Locker Room & Luxury Changing Amenities</span>
            </div>
          </div>
        </AnimatedParagraph>
      </div>

      {/* REUSABLE ANIMATED FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
