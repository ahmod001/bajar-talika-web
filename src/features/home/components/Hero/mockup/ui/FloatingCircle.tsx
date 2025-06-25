// components/ui/FloatingCircle.tsx
import { HTMLAttributes } from 'react';

interface FloatingCircleProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const FloatingCircle = ({ 
  size = 'md', 
  position = 'bottom-left',
  className = '',
  ...props 
}: FloatingCircleProps) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const positionClasses = {
    'top-left': '-top-6 -left-6',
    'top-right': '-top-6 -right-6 ',
    'bottom-left': '-bottom-6 -left-6',
    'bottom-right': '-bottom-6 -right-6'
  };


  return (
    <div
      className={`absolute rounded-full bg-white opacity-10 ${sizeClasses[size]} ${positionClasses[position]}  ${className}`}
      {...props}
    />
  );
};