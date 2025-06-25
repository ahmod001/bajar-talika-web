import { HTMLAttributes } from 'react';

export const ShortDescription = ({ children, className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`opacity-90 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);