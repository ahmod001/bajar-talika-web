// components/ui/Logo.tsx
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import logo from '@/assets/logo/logo_without-title.png';
interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  size?: number,
  className?: string,
}

export const Logo = ({ size = 50, className = '', ...props }: LogoProps) => (
  <div className={`bg-white p-1.5 rounded-lg backdrop-blur-sm ${className}`} {...props}>
    <Image
      src={logo}
      width={size}
      height={size}
      alt="বাজার তালিকা - Shopping List"
      className={className}
    />
  </div>
);