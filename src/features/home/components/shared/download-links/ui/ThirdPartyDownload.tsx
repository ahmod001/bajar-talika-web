// components/ui/ThirdPartyDownload.tsx
import Link from 'next/link';
import { ComponentProps } from 'react';

type ThirdPartyDownloadProps = ComponentProps<typeof Link> & {
    disabled?: boolean;
};

export const ThirdPartyDownload = ({
    children,
    disabled = false,
    className = '',
    ...props
}: ThirdPartyDownloadProps) => (
    <Link
        className={`bg-[#D6EFD8] hover:bg-white text-[#144B26] font-bold py-4 px-6 rounded-lg text-center transition-all duration-300 shadow-sm hover:shadow-md flex-1 ${disabled ? 'opacity-50 cursor-not-allowed' : ''
            } ${className}`}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...props}
    >
        {children}
    </Link>
);