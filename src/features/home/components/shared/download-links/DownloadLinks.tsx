import React from 'react';
import { DownloadButton } from './ui/DownloadButton';
import { ThirdPartyDownload } from './ui/ThirdPartyDownload';
import apkpure from '../../../assets/app-stores/apkpure.png'
import uptodown from '../../../assets/app-stores/uptodown.png'
const DownloadLinks = ({ className }: { className?: string }) => {
    return (
        <div className={`flex flex-col lg:flex-row gap-4 pt-2  ${className}`}>
            <DownloadButton href="#download">অ্যাপ ডাউনলোড করুন</DownloadButton>

            <div className="flex justify-center gap-4 hidden" >
                <ThirdPartyDownload disabled
                    href="https://apkpure.com"
                    backgroundImgUrl={apkpure.src}

                />
                <ThirdPartyDownload disabled
                    href="https://uptodown.com"
                    backgroundImgUrl={uptodown.src} />
            </div>
        </div>
    );
};

export default DownloadLinks;