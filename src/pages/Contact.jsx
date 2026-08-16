import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, ArrowRight } from 'lucide-react';
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

export default function Contact() {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-28 pb-0 font-body relative overflow-hidden">
      <SEOHead
        title="Contact & Location - Direct Call, WhatsApp & Map"
        description="Visit AKAY Fitness in Sargasan Gandhinagar. Call: +91 87339 32013, WhatsApp, Instagram @akayfitness_."
        pathname="/contact"
      />

      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block">
            DIRECT CONTACT & LOCATION
          </AnimatedLabel>
          <h1 className="font-athletic text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white block">
            <AnimatedHeading
              text="READY TO START?"
              highlightClass="text-orange-gradient"
              highlightWords={['START?']}
            />
          </h1>
          <AnimatedParagraph delay={0.3} className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our programs or want to visit AKAY Fitness? Get in touch with our team directly.
          </AnimatedParagraph>
        </div>

        {/* Direct Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CALL NOW */}
          <AnimatedCard index={0}>
            <a
              href={`tel:${siteData.brand.phoneClean}`}
              className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between group hover:border-brand-orange transition-all duration-300 transform hover:-translate-y-1 h-full"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-orange-glow">
                  <Phone className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-widest block">
                  DIRECT PHONE CALL
                </span>
                <h3 className="font-athletic text-3xl text-white">CALL NOW</h3>
                <p className="text-gray-300 text-sm font-semibold">
                  {siteData.brand.phone}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-brand-orange font-athletic text-lg uppercase">
                <span>TAP TO CALL</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </AnimatedCard>

          {/* WHATSAPP NOW */}
          <AnimatedCard index={1}>
            <a
              href={`https://wa.me/${siteData.brand.phoneClean}?text=Hi%20AKAY%20Fitness,%20I%20want%20to%20know%20more!`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-3xl p-8 border border-emerald-500/20 flex flex-col justify-between group hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-1 h-full"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-widest block">
                  INSTANT CHAT
                </span>
                <h3 className="font-athletic text-3xl text-white">WHATSAPP NOW</h3>
                <p className="text-emerald-400 text-sm font-semibold">
                  {siteData.brand.whatsapp}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-emerald-400 font-athletic text-lg uppercase">
                <span>OPEN CHAT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </AnimatedCard>

          {/* INSTAGRAM */}
          <AnimatedCard index={2}>
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-3xl p-8 border border-pink-500/20 flex flex-col justify-between group hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-1 h-full"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-lg">
                  <InstagramIcon className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono text-pink-400 uppercase font-bold tracking-widest block">
                  OFFICIAL PROFILE
                </span>
                <h3 className="font-athletic text-3xl text-white">INSTAGRAM</h3>
                <p className="text-pink-400 text-sm font-semibold">
                  {siteData.brand.instagram}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-pink-400 font-athletic text-lg uppercase">
                <span>VIEW PROFILE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </AnimatedCard>

          {/* GET DIRECTIONS */}
          <AnimatedCard index={3}>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-3xl p-8 border border-blue-500/20 flex flex-col justify-between group hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 h-full"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Navigation className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono text-blue-400 uppercase font-bold tracking-widest block">
                  SARGASAN LOCATION
                </span>
                <h3 className="font-athletic text-3xl text-white">GET DIRECTIONS</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Near Devkrupa Rhythm, Beside Radiant School
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-blue-400 font-athletic text-lg uppercase">
                <span>OPEN MAP</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </AnimatedCard>
        </div>

        {/* Address Card & Embedded Map (Scroll-Driven 3D Pin Beacon Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          <ScrollGymVisual type="pin" position="right" className="-top-12" />

          <AnimatedParagraph delay={0.2} className="lg:col-span-5 glass-card rounded-3xl p-8 space-y-6 border border-white/10 relative z-10">
            <h3 className="font-athletic text-3xl text-white border-b border-white/10 pb-3">
              AKAY FITNESS ADDRESS
            </h3>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-white text-base leading-relaxed">
                {siteData.brand.location}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-xs font-mono text-gray-400 uppercase block">TIMINGS:</span>
              <p className="text-brand-orange font-bold text-lg font-athletic">
                MONDAY - SATURDAY: 6:00 AM - 10:00 PM
              </p>
            </div>
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.3} className="lg:col-span-7 glass-card rounded-3xl p-4 border border-white/10 overflow-hidden relative z-10">
            <iframe
              title="AKAY Fitness Sargasan Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.432832047285!2d72.630000!3d23.190000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDExJzI0LjAiTiA3MsKwMzcnNDggMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="340"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl"
            />
          </AnimatedParagraph>
        </div>
      </div>

      {/* REUSABLE ANIMATED FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
