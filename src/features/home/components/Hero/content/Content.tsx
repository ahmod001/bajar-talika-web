import React from 'react';
import { Logo } from './ui/Logo';
import { Title } from './ui/Title';
import { Slogan } from './ui/Slogun';
import { ShortDescription } from './ui/ShortDesc';
import DownloadLinks from '../../shared/download-links/DownloadLinks';
import logo from '@/assets/logo/logo_without-title.png';


const Content = () => {
    return (
        <div className="lg:w-1/2 space-y-6 text-center lg:text-start ">
            <div className="flex items-center justify-center lg:justify-start  text-shadow-lg">
                <Logo src={logo} alt="বাজার তালিকা - Shopping List" />
                <Title>বাজার তালিকা</Title>
            </div>

            <div className="space-y-4  text-shadow-lg">
                <Slogan>
                    তালিকা বানান স্মার্ট অ্যাপে, <br /> বাজার করুন নিশ্চিন্ত মনে!
                </Slogan>
                <ShortDescription>
                    আপনার দৈনন্দিন দিনের বাজারের লিস্ট বানিয়ে, <br /> নিশ্চিন্তে বাজার করার জন্য ডাউনলোড করুন বাজার তালিকা অ্যাপ সম্পুর্ন ফ্রি-তে।
                </ShortDescription>
            </div>

            <DownloadLinks />

        </div>
    );
};

export default Content;