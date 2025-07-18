"use client"
import { FaDownload } from 'react-icons/fa';
import { Button, ButtonProps } from '@heroui/react'; 
import React from 'react'; 

type DownloadButtonProps = ButtonProps & {
  icon?: React.ReactNode;
};

export const DownloadButton = ({
  children,
  icon = <FaDownload className="text-lg" />,
  className = '',
  ...props 
}: DownloadButtonProps) => {
  return (
    <Button
      startContent={icon}
      className={`bg-white hover:bg-gray-50 active:opacity-90 text-[#144B26] font-bold py-6 min-w-64 rounded-lg text-center shadow-md ${className}`}
      {...props} 
    >
      <span className='text-nowrap'>{children}</span>
    </Button>
  );
};