import React from 'react';
import { DownloadButton } from './ui/DownloadButton';
import { ThirdPartyDownload } from './ui/ThirdPartyDownload';

const DownloadLinks = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <DownloadButton href="#download">Download Now</DownloadButton>

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