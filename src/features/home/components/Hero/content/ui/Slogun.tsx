import { HTMLAttributes } from 'react';

export const Slogan = ({ children, className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={`text-2xl md:text-3xl font-semibold leading-tight ${className}`} {...props}>
        {children}
    </h2>
);