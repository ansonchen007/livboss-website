import React from 'react';

interface DoubleFrameCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function DoubleFrameCard({ children, className = '' }: DoubleFrameCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer frame */}
      <div className="absolute -inset-2 border-2 border-champagne-gold rounded-2xl opacity-60" />
      
      {/* Inner frame with slight offset */}
      <div className="absolute inset-0 border-2 border-deep-brown rounded-2xl translate-x-1 translate-y-1" />
      
      {/* Content container */}
      <div className="relative bg-paper-bg rounded-2xl p-8 shadow-lg">
        {children}
      </div>
    </div>
  );
}
