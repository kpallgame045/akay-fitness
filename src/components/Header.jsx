import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Join Now', path: '/join-now' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'py-3' : 'py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`glass-header rounded-full flex items-center justify-between px-5 sm:px-6 py-2.5 transition-all duration-300 ${
              isScrolled
                ? 'bg-brand-dark/85 backdrop-blur-xl border-white/10 shadow-orange-glow/10'
                : 'bg-brand-dark/60 backdrop-blur-lg border-white/5'
            }`}
          >
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <img
                src={siteData.brand.logoUrl}
                alt="AKAY Fitness Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 relative group ${
                      isActive
                        ? 'text-brand-orange bg-brand-orange/10 font-bold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="relative z-10 group-hover:translate-x-0.5 transition-transform inline-block">
                      {link.name}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-orange rounded-full shadow-orange-glow" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                to="/join-now"
                className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase font-extrabold tracking-widest text-white bg-gradient-to-r from-brand-orange to-brand-orange-glow rounded-full shadow-orange-glow hover:shadow-orange-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 active:scale-95 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  JOIN NOW
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <Link
                to="/join-now"
                className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-brand-orange rounded-full shadow-orange-glow mr-1"
              >
                JOIN
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-brand-orange" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-12 transition-all duration-300 xl:hidden animate-fade-in">
          <div className="flex flex-col gap-4 overflow-y-auto">
            <span className="text-xs font-mono text-brand-orange tracking-widest uppercase mb-2">
              NAVIGATION MENU
            </span>
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-athletic tracking-wide transition-all duration-500 ${
                    isActive ? 'text-brand-orange pl-2 border-l-2 border-brand-orange' : 'text-gray-200 hover:text-brand-orange'
                  }`}
                  style={{
                    animation: `fadeInUp 0.4s ease-out ${index * 60}ms forwards`,
                  }}
                >
                  {link.name.toUpperCase()}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="/join-now"
              className="w-full py-3.5 text-center font-athletic tracking-wider text-lg uppercase bg-gradient-to-r from-brand-orange to-brand-orange-glow text-white rounded-xl shadow-orange-glow flex items-center justify-center gap-2"
            >
              JOIN AKAY FITNESS TODAY <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${siteData.brand.phoneClean}`}
                className="py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-orange" /> CALL US
              </a>
              <a
                href={`https://wa.me/${siteData.brand.phoneClean}?text=Hi%20AKAY%20Fitness,%20I%20want%20to%20know%20more!`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WHATSAPP
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
