import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import AnimatedFooter from './components/AnimatedFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileStickyCTA from './components/MobileStickyCTA';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Trainers from './pages/Trainers';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import JoinNow from './pages/JoinNow';

// Scroll to Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-brand-dark text-white font-body selection:bg-brand-orange selection:text-white">
        <CustomCursor />
        <Header />
        
        <PageTransition>
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join-now" element={<JoinNow />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </PageTransition>

        <AnimatedFooter />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </div>
    </Router>
  );
}
