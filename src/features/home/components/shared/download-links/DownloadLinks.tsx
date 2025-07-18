"use client"

import React from 'react';
import { DownloadButton } from './ui/DownloadButton';
import { ThirdPartyDownload } from './ui/ThirdPartyDownload';
import apkpure from '../../../assets/app-stores/apkpure.png'
import uptodown from '../../../assets/app-stores/uptodown.png'
import { info } from '@/constants/app-info';
import useDownload from './hooks/useDownload';


const DownloadLinks = ({ className }: { className?: string }) => {

    const { download, isPending } = useDownload()
    const onDownload = () => {
        download()
    }
    return (
        <div className={`flex flex-col lg:flex-row gap-4 pt-2  ${className}`}>
            <DownloadButton onPress={onDownload} disabled={isPending}>
                {
                    !isPending ? (<>ডাউনলোড করুন <span className=' font-normal'>v{info.app_version}</span></>)
                        : ('ডাউনলোড হচ্ছে...')


                }

            </DownloadButton>

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