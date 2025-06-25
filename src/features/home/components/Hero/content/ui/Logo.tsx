// components/ui/Logo.tsx
import Image, { StaticImageData } from 'next/image';
import { HTMLAttributes } from 'react';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

export const Logo = ({ src, alt, width = 50, height = 50, className = '', ...props }: LogoProps) => (
  <div className={`bg-white p-1.5 rounded-lg backdrop-blur-sm ${className}`} {...props}>
    <Image 
      src={src} 
      width={width} 
      height={height} 
      alt={alt} 
      className="w-10 h-10"
    />
  </div>
);