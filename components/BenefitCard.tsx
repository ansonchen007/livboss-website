import React from 'react';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4 text-primary">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold text-deep-brown mb-3">{title}</h3>
      <p className="text-text-primary/70 leading-relaxed">{description}</p>
    </div>
  );
}
