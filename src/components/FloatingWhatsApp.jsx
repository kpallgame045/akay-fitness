import React from 'react';
import { siteData } from '../data/siteData';

// Official WhatsApp Phone Icon SVG
const WhatsAppIconSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.047 0C5.41 0 .016 5.394.013 12.031a11.78 11.78 0 001.61 5.965L0 24l6.136-1.609a11.83 11.83 0 005.904 1.562h.005c6.635 0 12.03-5.394 12.033-12.032a11.79 11.79 0 00-3.468-8.423 shadow-2xl"/>
  </svg>
);

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteData.brand.phoneClean}?text=Hi%20AKAY%20Fitness,%20I%20want%20to%20know%20more%20about%20membership!`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-8 right-5 md:right-8 z-40 group focus:outline-none"
      aria-label="Chat with AKAY Fitness on WhatsApp"
      data-cursor="WHATSAPP"
    >
      {/* Outer 3D Metallic / Dark Glass Container */}
      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1F2620] via-[#121614] to-[#0A0D0B] p-0.5 border border-emerald-500/40 shadow-[0_15px_35px_rgba(16,185,129,0.3)] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:rotate-6 group-active:scale-95 group-hover:shadow-[0_20px_45px_rgba(16,185,129,0.5)]">
        {/* Glowing emerald aura inner mesh */}
        <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-emerald-950/80 via-[#10B981]/20 to-emerald-900/60 flex items-center justify-center backdrop-blur-md relative overflow-hidden">
          {/* Subtle 3D Highlight sheen */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/20 rounded-full blur-md group-hover:translate-x-4 transition-transform duration-500" />

          {/* 3D Emerald WhatsApp Icon */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/40 border border-emerald-300/40 group-hover:scale-105 transition-transform">
            <WhatsAppIconSVG className="w-5 h-5 drop-shadow-md" />
          </div>
        </div>
      </div>

      {/* Floating Ambient Glow */}
      <span className="absolute -inset-2 rounded-2xl bg-emerald-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </a>
  );
}
