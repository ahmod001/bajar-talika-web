import React from 'react';
import { Title } from './ui/Title';
import { ShortDescription } from './ui/ShortDesc';
import DownloadLinks from '../../shared/download-links/DownloadLinks';


const Content = () => {
    return (
        <div className="lg:w-1/2 space-y-7 text-center lg:text-start ">

            <div className="space-y-5  text-shadow-lg">
                <Title>
                    বাজেরের তালিকা বানানোর <br />  সবচেয়ে <span className="bg-[#D6EFD8] text-primary text-shadow-none px-3 rounded-xl"> সহজ অ্যাপ! </span>
                </Title>
                <ShortDescription>
                    পরিকল্পিত বাজার করে <strong className='text-white opacity-100'>টাকা</strong> এবং <strong className='text-white opacity-100'>সময়</strong> বাঁচানোর জন্য <br /> ডাউনলোড করুন বাজার তালিকা অ্যাপ সম্পুর্ন ফ্রি-তে।
                </ShortDescription>
            </div>

            <DownloadLinks className='justify-center lg:justify-start ' />

        </div>
    );
};

export default Content;