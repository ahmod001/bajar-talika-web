import Link from 'next/link';
import { FaFacebook, FaEnvelope, FaFileAlt, FaCookie, FaCheck, FaDownload } from 'react-icons/fa';
import { MdOutlinePrivacyTip, MdInfoOutline } from 'react-icons/md';
import { Logo } from '../shared/Logo';

const currentYear = new Date().getFullYear();

export const Footer = () => {
    return (
        <footer className="bg-[#1F2937] text-white pt-12 pb-8 px-4 md:px-8 lg:px-16 border-t border-[#374151]">
            <div className="container mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* App Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-1">
                            <Logo size={30} />
                            <span className="ml-2 text-xl font-bold">Bazar Talika</span>
                        </div>
                        <p className="text-[#D1D5DB] leading-relaxed">
                            তালিকা বানান স্মার্ট অ্যাপে, <br /> বাজার করুন নিশ্চিন্ত মনে!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">দ্রুত লিংক</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#features" className="flex items-center text-[#D1D5DB] hover:text-white transition-colors">
                                    <FaCheck className="mr-2 text-xs text-[#1F6B38]" /> ফিচারসমূহ
                                </Link>
                            </li>
                            <li>
                                <Link href="#download" className="flex items-center text-[#D1D5DB] hover:text-white transition-colors">
                                    <FaDownload className="mr-2 text-xs text-[#1F6B38]" /> ডাউনলোড
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="opacity-50 flex items-center text-[#D1D5DB] hover:text-white transition-colors">
                                    <MdInfoOutline className="mr-2 text-xs text-[#1F6B38]" /> প্রশ্নোত্তর
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">গুরুত্বপূর্ণ</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="flex items-center text-[#D1D5DB] hover:text-white transition-colors">
                                    <MdOutlinePrivacyTip className="mr-2 text-xs text-[#1F6B38]" /> প্রাইভেসি পলিসি
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="opacity-50 flex items-center text-[#D1D5DB] hover:text-white transition-colors">
                                    <FaFileAlt className="mr-2 text-xs text-[#1F6B38]" /> ব্যবহারের শর্তাবলী
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="opacity-50 flex items-center text-[#D1D5DB] hover:text-white transition-colors">
                                    <FaCookie className="mr-2 text-xs text-[#1F6B38]" /> কুকি পলিসি
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">যোগাযোগ</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-[#D1D5DB]">
                                <FaEnvelope className="mr-2 text-xs text-[#1F6B38]" />
                                <Link href="mailto:hasan.webdev1@gmail.com" className="hover:text-white transition-colors">
                                    hasan.webdev1@gmail.com
                                </Link>
                            </li>
                            <li className="flex items-center text-[#D1D5DB]">
                                <FaFacebook className="mr-2 text-xs text-[#1F6B38]" />
                                <Link href="https://facebook.com/freelanceDeveloperHasan" target="_blank" className="hover:text-white transition-colors">
                                    ফেসবুক
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright & Bottom Bar */}
                <div className="border-t border-[#374151] pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-[#9CA3AF] text-sm">
                            কপিরাইট &copy; {currentYear} বাজার তালিকা | সর্বস্বত্ব সংরক্ষিত
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <Link href="/about" className="text-[#9CA3AF] hover:text-white transition-colors text-sm flex items-center">
                            <MdInfoOutline className="mr-1" /> অ্যাপ সম্পর্কে
                        </Link>
                        <Link href="#" className="opacity-50 text-[#9CA3AF] hover:text-white transition-colors text-sm">
                            ব্লগ
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};