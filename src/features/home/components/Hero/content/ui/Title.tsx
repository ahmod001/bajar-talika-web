import { HTMLAttributes } from 'react';

export const Title = ({ children, className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={`text-4xl md:text-5xl font-bold ml-4 ${className}`} {...props}>
    {children}
  </h1>
);