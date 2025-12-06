import React from 'react';

interface TestimonialCardProps {
  role: string;
  content: string;
  rating?: number;
}

export default function TestimonialCard({ role, content, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-champagne-gold/30 min-w-[280px] md:min-w-0">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-primary text-xl">★</span>
        ))}
      </div>
      <p className="text-text-primary/80 leading-relaxed mb-4 italic">&ldquo;{content}&rdquo;</p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-deep-brown bg-champagne-gold/20 px-3 py-1 rounded-full">
          {role}
        </span>
      </div>
    </div>
  );
}
