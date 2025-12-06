import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

export default function Button({ children, variant = 'primary', className = '', href }: ButtonProps) {
  const baseStyles = "px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 inline-block text-center";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl",
    secondary: "border-2 border-deep-brown text-deep-brown hover:bg-deep-brown hover:text-white"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}
