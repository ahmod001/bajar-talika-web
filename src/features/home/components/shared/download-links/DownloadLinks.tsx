import React from 'react';
import { DownloadButton } from './ui/DownloadButton';
import { ThirdPartyDownload } from './ui/ThirdPartyDownload';

const DownloadLinks = ({ className }: { className?: string }) => {
    return (
        <div className={`flex flex-col sm:flex-row gap-4 pt-2 ${className}`}>
            <DownloadButton href="#download">অ্যাপ ডাউনলোড করুন</DownloadButton>

            <div className="flex gap-4">
                <ThirdPartyDownload
                    href="https://apkpure.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    APKPure
                </ThirdPartyDownload>
                <ThirdPartyDownload
                    href="https://uptodown.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Uptodown
                </ThirdPartyDownload>
            </div>
        </div>
    );
};

export default DownloadLinks;