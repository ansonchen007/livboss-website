'use client';

import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import HealthCenterSection from '@/components/HealthCenterSection';
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
      
      {/* Health Center Section */}
      <HealthCenterSection />
      
      {/* Buy Section */}
      <BuySection />
    </main>
  );
}
