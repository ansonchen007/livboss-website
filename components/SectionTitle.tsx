import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ children, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-brown mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-primary/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
