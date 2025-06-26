import React from 'react';
import DownloadLinks from './shared/download-links/DownloadLinks';


// Main Component: DownloadCTA
const DownloadCTA = () => {
    return (
        <section id="download" className="px-4 py-12 bg-gradient-to-r from-[#1F6B38] to-[#144B26] text-white">
            <div className="container mx-auto text-center">
                <Title>
                    এখনই ডাউনলোড করুন <br /> বাজার তালিকা অ্যাপ - সম্পূর্ণ ফ্রি!
                </Title>

                <Description>
                    ডাউনলোড করে নিন আর উপভোগ করুন ঝামেলামুক্ত বাজার করার অভিজ্ঞতা!
                </Description>

                <DownloadLinks className='justify-center' />
            </div>
        </section>
    );
};



const Title = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl sm:text-3xl font-bold mb-6">{children}</h2>
);
Title.displayName = 'DownloadCTA.Title';

// Sub-component: Description
const Description = ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg mb-8 max-w-2xl mx-auto">{children}</p>
);
Description.displayName = 'DownloadCTA.Description';

export default DownloadCTA;