// components/ui/MockupImage.tsx
import Image, { StaticImageData } from 'next/image';

interface MockupImageProps {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const MockupImage = ({ 
  src, 
  alt, 
  width = 350, 
  height = 700, 
  className = '', 
  priority = false 
}: MockupImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={`rounded-3xl shadow-2xl border-[6px] select-none pointer-none: border-white/20 ${className}`}
    priority={priority}
  />
);