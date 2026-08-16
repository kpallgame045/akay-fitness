import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

export default function AnimatedFooter() {
  const { pathname } = useLocation();

  return <Footer key={pathname} />;
}
