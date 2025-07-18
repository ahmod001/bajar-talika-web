import { HTMLAttributes } from 'react';

export const ShortDescription = ({ children, className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={` leading-relaxed sm:text-xl text-lg opacity-90 ${className}`} {...props}>
    {children}
  </p>
);