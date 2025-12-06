'use client';

import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import BuySection from '@/components/BuySection';

export default function HomePageClient() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Desktop: Listen for scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHoverChange = (hovered: boolean) => {
    if (!isMobile) {
      setIsHovered(hovered);
    }
  };

  const headerActive = isScrolled || isHovered;
  
  return (
    <main className="min-h-screen bg-white">
      <Header 
        isActive={headerActive} 
        onHoverChange={handleHoverChange}
      />
      
      {/* LV-style Hero Section */}
      <HeroSection />
      
      {/* Products Section */}
      <ProductsSection />
      
      {/* Buy Section */}
      <BuySection />
      
      {/* Health Center Section - Placeholder */}
      <section id="health-center" className="py-24 px-6 bg-gradient-to-br from-paper-bg to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-deep-brown mb-4 tracking-wide">
              Health Center
            </h2>
            <p className="text-xl text-text-primary/70 max-w-2xl mx-auto">
              Educational content and resources coming soon
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
