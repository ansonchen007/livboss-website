import React from 'react';

interface IngredientCardProps {
  name: string;
  description: string;
  highlight?: boolean;
}

export default function IngredientCard({ name, description, highlight = false }: IngredientCardProps) {
  if (highlight) {
    return (
      <div className="relative mb-6">
        <div className="absolute -inset-1 border border-champagne-gold rounded-xl opacity-60" />
        <div className="relative bg-gradient-to-br from-primary/5 to-paper-bg rounded-xl p-6 border border-primary/20">
          <h4 className="text-xl font-bold text-deep-brown mb-2">{name}</h4>
          <p className="text-text-primary/80">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
      <h4 className="text-xl font-bold text-deep-brown mb-2">{name}</h4>
      <p className="text-text-primary/70">{description}</p>
    </div>
  );
}
