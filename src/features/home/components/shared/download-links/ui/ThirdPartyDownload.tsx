// components/ui/ThirdPartyDownload.tsx
import Link from 'next/link';
import { ComponentProps } from 'react';

type ThirdPartyDownloadProps = Omit<ComponentProps<typeof Link>, 'target'> & {
  disabled?: boolean;
  backgroundImgUrl: string; 
};

export const ThirdPartyDownload = ({
  disabled = false,
  backgroundImgUrl,
  className = '',
  rel = 'noopener noreferrer',
  ...props
}: ThirdPartyDownloadProps) => {


  return (
    <Link
      target="_blank"
      rel={rel}
      className={`
        rounded-lg block
        transition-all duration-200 
        shadow-sm hover:shadow-md  bg-contain bg-white bg-center bg-no-repeat sm:w-32 w-1/2  h-14
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
        ${className}
      `}
      style={{ backgroundImage: `url(${backgroundImgUrl})` }}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      {...props}
    ></Link>
  );
};

ThirdPartyDownload.displayName = 'ThirdPartyDownload'