import { FaCheck, FaListAlt, FaShareAlt, FaMobileAlt } from 'react-icons/fa';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/footer/Footer';
import DownloadCTA from './components/DownloadCTA';


export default function Home() {
    return (
        <div className="min-h-screen bg-[#f9fafb]">
            <Hero />

            {/* Why Choose Bazar Talika Section */}
            <section id="features" className="px-4 py-12 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
                            কেন বাজার তালিকা অ্যাপে ব্যবহার করবেন?
                        </h2>
                        <p className="md:text-xl text-[#6B7280] max-w-2xl mx-auto">
                            সহজে বাজার করুন, সময় বাঁচান, এবং আর কখনো কেনার জিনিস ভুলে যাবেন না
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature Card 1 - Smart List Management */}
                        <div className="bg-[#f9fafb] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-[#1F6B38] text-white p-3 rounded-lg mr-3">
                                    <FaListAlt className="sm:text-2xl text-xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1F2937]">সহজ তালিকা ব্যবস্থাপনা</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">মুহূর্তেই বাজার তালিকা তৈরি করুন</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">পণ্যের নাম ও পরিমাণ সহ তালিকা তৈরি</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">প্রয়োজনমতো তালিকা সম্পাদনা করুন</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature Card 2 - Sharing Feature (Replacing Expense Tracking) */}
                        <div className="bg-[#f9fafb] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-[#1F6B38] text-white p-3 rounded-lg mr-3">
                                    <FaShareAlt className="sm:text-2xl text-xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1F2937]">সহজ শেয়ারিং সুবিধা</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">পরিবারের সদস্যদের সাথে তালিকা শেয়ার করুন</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">যেকোনো মেসেজিং অ্যাপে শেয়ার করুন</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">এক ক্লিকেই শেয়ার করা সম্ভব</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature Card 3 - Always Accessible */}
                        <div className="bg-[#f9fafb] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-[#1F6B38] text-white p-3 rounded-lg mr-3">
                                    <FaMobileAlt className="sm:text-2xl text-xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1F2937]">সর্বদা ব্যবহারযোগ্য</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">ইন্টারনেট ছাড়াই ব্যবহার করুন</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">দ্রুত ও হালকা ওজনের অ্যাপ</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">সকল ডিভাইসে ব্যবহার উপযোগী</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Value Proposition */}
                    <div className="mt-10 text-center">
                        <div className="inline-flex items-center bg-[#D6EFD8] p-5 rounded-full shadow-sm gap-3">
                            <FaCheck className="text-2xl text-[#1F6B38]" />
                            <p className="md:text-lg font-semibold text-[#1F2937]">
                                <span className="text-[#1F6B38] font-bold">সম্পূর্ণ ফ্রি</span> - কোন খরচ নেই
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <DownloadCTA />
            <Footer />
        </div>
    );
}