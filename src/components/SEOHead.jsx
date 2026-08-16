import React, { useEffect } from 'react';
import { siteData } from '../data/siteData';

export default function SEOHead({ title, description, pathname = '/' }) {
  const fullTitle = title 
    ? `${title} | AKAY Fitness Sargasan Gandhinagar`
    : `AKAY Fitness | Premium 3D Gym & Fitness Center in Sargasan, Gandhinagar`;

  const metaDesc = description || siteData.brand.heroDescription;
  const canonicalUrl = `https://akayfitness.com${pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = metaDesc;

    // LocalBusiness / FitnessCenter Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ExerciseGym",
      "name": siteData.brand.name,
      "image": `https://akayfitness.com${siteData.brand.logoUrl}`,
      "telephone": siteData.brand.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sthapan 1, FF, 101 to 106, Near Devkrupa Rhythm, Beside Radiant School of Science",
        "addressLocality": "Sargasan, Gandhinagar",
        "addressRegion": "Gujarat",
        "postalCode": "382419",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.1900,
        "longitude": 72.6300
      },
      "url": canonicalUrl,
      "sameAs": [
        siteData.brand.instagramUrl
      ],
      "priceRange": "$$"
    };

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

  }, [fullTitle, metaDesc, canonicalUrl]);

  return null;
}
