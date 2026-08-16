import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Join Now', path: '/join-now' },
  ];

  const workoutZones = [
    'Gym Workout',
    'Women Gym',
    'Zumba Classes',
    'Yoga Studio',
    'Cardio Deck',
    'CrossFit Ring',
    'Kickboxing Zone',
  ];

  return (
    <footer key={pathname} className="relative bg-[#070709] text-white pt-20 pb-12 border-t border-white/10 overflow-hidden font-body">
      {/* STEP 1: Background Glow Reveal */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-72 bg-radial-gradient from-brand-orange/15 via-transparent to-transparent blur-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* Main 4-Column Grid with Viewport Trigger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* COLUMN 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            {/* STEP 2: AKAY Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/" className="inline-block">
                <img
                  src={siteData.brand.logoUrl}
                  alt="AKAY Fitness Logo"
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </motion.div>

            {/* STEP 3: Description */}
            <motion.p
              className="text-gray-400 text-sm leading-relaxed max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              Sargasan’s premier high-performance fitness studio. Engineered for discipline, athletic bio-mechanics, and transformation.
            </motion.p>

            {/* STEP 8: Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { icon: <InstagramIcon className="w-5 h-5" />, href: siteData.brand.instagramUrl, label: 'Instagram', color: 'hover:border-pink-500 text-gray-300 hover:text-pink-400' },
                { icon: <MessageSquare className="w-5 h-5" />, href: `https://wa.me/${siteData.brand.phoneClean}`, label: 'WhatsApp', color: 'hover:border-emerald-400 text-emerald-400' },
                { icon: <Phone className="w-5 h-5" />, href: `tel:${siteData.brand.phoneClean}`, label: 'Phone', color: 'hover:border-brand-orange text-brand-orange' },
              ].map((social, sIdx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: 0.25 + sIdx * 0.08 }}
                  whileHover={{ scale: 1.15, y: -2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            {/* STEP 4: Quick Navigation Heading */}
            <motion.span
              className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold block"
              initial={{ opacity: 0, y: 10, letterSpacing: '0.05em' }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: '0.15em' }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              QUICK NAVIGATION
            </motion.span>

            {/* STEP 5: Nav Links One-by-One Stagger */}
            <ul className="space-y-2.5 text-sm font-body text-gray-400">
              {navItems.map((item, nIdx) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: 0.18 + nIdx * 0.04 }}
                >
                  <Link
                    to={item.path}
                    className="hover:text-brand-orange transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/40 group-hover:bg-brand-orange transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Workout Zones */}
          <div className="lg:col-span-2 space-y-4">
            {/* STEP 6: Workout Zones Heading */}
            <motion.span
              className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold block"
              initial={{ opacity: 0, y: 10, letterSpacing: '0.05em' }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: '0.15em' }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              WORKOUT ZONES
            </motion.span>

            {/* Workout Zone Items Stagger */}
            <ul className="space-y-2.5 text-sm font-body text-gray-400">
              {workoutZones.map((zone, zIdx) => (
                <motion.li
                  key={zone}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: 0.22 + zIdx * 0.04 }}
                >
                  {zone}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Location & Hours */}
          <div className="lg:col-span-3 space-y-4">
            {/* STEP 7: Location & Hours Heading */}
            <motion.span
              className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold block"
              initial={{ opacity: 0, y: 10, letterSpacing: '0.05em' }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: '0.15em' }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              LOCATION & HOURS
            </motion.span>

            <div className="space-y-3 text-xs text-gray-300 font-body">
              <motion.div
                className="flex items-start gap-2.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: 0.28 }}
              >
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{siteData.brand.location}</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: 0.32 }}
              >
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href={`tel:${siteData.brand.phoneClean}`} className="hover:text-brand-orange font-mono">
                  {siteData.brand.phone}
                </a>
              </motion.div>
            </div>

            {/* Timing Card with Scale 0.96 -> 1 */}
            <motion.div
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.38 }}
            >
              <span className="text-[10px] font-mono text-brand-orange uppercase block font-bold">
                OPERATIONAL TIMINGS
              </span>
              <span className="text-xs font-bold text-white block">MON - SAT: 6:00 AM - 10:00 PM</span>
              <span className="text-[10px] text-gray-400 block">SUNDAY: RECOVERY DAY</span>
            </motion.div>
          </div>

        </div>

        {/* STEP 9: DIVIDER LINE DRAW ANIMATION (0% -> 100% Width) */}
        <div className="relative pt-8">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* STEP 10: BOTTOM BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>© {currentYear} AKAY FITNESS SARGASAN. ALL RIGHTS RESERVED.</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: 0.28 }}
            >
              <span>OFFICIAL BRAND WEBSITE</span>
              <Link to="/join-now" className="text-brand-orange font-bold hover:underline flex items-center gap-1 group">
                JOIN NOW <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
