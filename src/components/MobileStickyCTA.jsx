import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 px-4 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 items-center">
        {/* CALL */}
        <a
          href={`tel:${siteData.brand.phoneClean}`}
          className="py-2.5 px-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs flex flex-col items-center justify-center gap-1 active:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4 text-brand-orange" />
          <span className="tracking-wider">CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${siteData.brand.phoneClean}?text=Hi%20AKAY%20Fitness,%20I%20want%20to%20know%20more!`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs flex flex-col items-center justify-center gap-1 active:bg-emerald-500/20 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="tracking-wider">WHATSAPP</span>
        </a>

        {/* JOIN NOW */}
        <Link
          to="/join-now"
          className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-glow text-white font-extrabold text-xs flex flex-col items-center justify-center gap-1 shadow-orange-glow active:scale-95 transition-all"
        >
          <div className="flex items-center gap-1">
            <span className="tracking-wider">JOIN NOW</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </div>
  );
}
