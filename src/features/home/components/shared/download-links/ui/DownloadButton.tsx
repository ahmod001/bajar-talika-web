// components/ui/DownloadButton.tsx
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import { ComponentProps } from 'react';

type DownloadButtonProps = ComponentProps<typeof Link> & {
  icon?: React.ReactNode;
};

export const DownloadButton = ({ 
  children, 
  icon = <FaDownload className="mr-3 text-lg" />,
  className = '',
  ...props 
}: DownloadButtonProps) => (
  <Link
    className={`bg-white hover:bg-gray-50 text-[#144B26] font-bold py-4 px-8 rounded-lg text-center transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg  ${className}`}
    {...props}
  >
    {icon}
    <span className='text-nowrap'>{children}</span>
  </Link>
);