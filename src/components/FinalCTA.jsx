import React from 'react';
import { Phone, MessageSquare, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

import AnimatedHeading from './motion/AnimatedHeading';
import AnimatedParagraph from './motion/AnimatedParagraph';
import AnimatedLabel from './motion/AnimatedLabel';

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-tr from-brand-dark via-[#14141A] to-brand-dark border-t border-white/10 relative overflow-hidden font-body">
      {/* Background Radial Glow with Framer Motion Reveal */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Animated Badge Label */}
        <AnimatedLabel className="px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-mono text-xs uppercase font-extrabold tracking-widest inline-flex items-center gap-2">
          <Activity className="w-4 h-4" /> START YOUR DISCIPLINE TODAY
        </AnimatedLabel>

        {/* Main Athletic Headline - True Character-by-Character Reveal */}
        <h2 className="font-athletic text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white block">
          <AnimatedHeading
            text="READY TO BUILD YOUR STRONGER SELF?"
            highlightClass="text-orange-gradient"
            highlightWords={['STRONGER', 'SELF?']}
          />
        </h2>

        {/* Supporting Paragraph */}
        <AnimatedParagraph delay={0.2} className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
          Visit AKAY Fitness Sargasan today or speak with our training directors directly.
        </AnimatedParagraph>

        {/* Action Buttons Stagger */}
        <AnimatedParagraph delay={0.35} className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href={`tel:${siteData.brand.phoneClean}`}
            className="px-10 py-5 bg-gradient-to-r from-brand-orange to-brand-orange-glow text-white font-athletic text-2xl tracking-wider uppercase rounded-full shadow-orange-glow-lg flex items-center gap-3"
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-6 h-6" /> CALL NOW: +91 87339 32013
          </motion.a>

          <motion.a
            href={`https://wa.me/${siteData.brand.phoneClean}?text=Hi%20AKAY%20Fitness,%20I%20want%20to%20know%20more!`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-athletic text-2xl tracking-wider uppercase rounded-full flex items-center gap-3"
            whileHover={{ scale: 1.05, translateY: -2, backgroundColor: 'rgba(16, 185, 129, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="w-6 h-6 text-emerald-400" /> WHATSAPP NOW
          </motion.a>
        </AnimatedParagraph>
      </div>
    </section>
  );
}
