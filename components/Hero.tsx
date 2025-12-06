import React from 'react';
import Button from './Button';
import DoubleFrameCard from './DoubleFrameCard';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 bg-gradient-to-br from-primary via-primary/80 to-paper-bg overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #4A2B1A 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              让你的肝<br />轻松一点
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              科学配方 · 精选原料<br />
              守护现代人的肝脏健康
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" className="bg-white text-primary hover:bg-paper-bg border-0">
                立即了解产品
              </Button>
              <Button variant="secondary" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                查看成分与科研
              </Button>
            </div>
          </div>

          {/* Right: Product card */}
          <div className="flex justify-center lg:justify-end">
            <DoubleFrameCard className="max-w-md w-full">
              <div className="bg-gradient-to-br from-primary/20 via-champagne-gold/10 to-primary/30 rounded-xl aspect-square flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
                <div className="relative text-center p-8">
                  <div className="text-6xl mb-4">🧡</div>
                  <div className="text-2xl font-bold text-deep-brown">LivBoss</div>
                  <div className="text-lg text-deep-brown/80">肝动力</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-deep-brown mb-4">
                肝动力 · 高效护肝配方
              </h3>
              <ul className="space-y-2 text-text-primary/80">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>科学配方 · 含量充足</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>日常养护 · 易于坚持</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>适合应酬 · 加班人群</span>
                </li>
              </ul>
            </DoubleFrameCard>
          </div>
        </div>
      </div>
    </section>
  );
}
