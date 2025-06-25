import { FaCheck, FaFacebook, FaDownload, FaListAlt, FaMoneyBillWave, FaMobileAlt } from 'react-icons/fa';
import { Hero } from './components/Hero/Hero';
import DownloadLinks from './components/shared/download-links/DownloadLinks';
import { Footer } from './components/footer/Footer';


export default function Home() {
    return (
        <div className="min-h-screen bg-[#f9fafb]">

            <Hero />

            {/* Why Choose Bazar Talika Section */}
            <section id="features" className=" px-4 py-12 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
                            Why Bazar Talika?
                        </h2>
                        <p className="md:text-lg text-[#6B7280] max-w-2xl mx-auto">
                            Designed to make your shopping experience effortless and organized
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature Card 1 */}
                        <div className="bg-[#f9fafb] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-[#1F6B38] text-white p-3 rounded-lg mr-4">
                                    <FaListAlt className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1F2937]">Smart List Management</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">Create unlimited shopping lists</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">Organize by store or category</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">Quickly add frequently bought items</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="bg-[#f9fafb] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-[#1F6B38] text-white p-3 rounded-lg mr-4">
                                    <FaMoneyBillWave className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1F2937]">Expense Tracking</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">Track your spending as you shop</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">Set budget limits for your shopping</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">Compare prices across different stores</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="bg-[#f9fafb] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-[#1F6B38] text-white p-3 rounded-lg mr-4">
                                    <FaMobileAlt className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1F2937]">Always Accessible</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">Works completely offline</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">Lightweight and fast performance</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="text-[#1F6B38] mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-[#6B7280]">Available on all your devices</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Value Proposition */}
                    <div className="mt-10 text-center">
                        <div className="inline-flex items-center bg-[#D6EFD8] px-8 py-5 rounded-full shadow-sm">
                            <FaCheck className="text-2xl text-[#1F6B38] mr-3" />
                            <p className="md:text-lg font-semibold text-[#1F2937]">
                                <span className="text-[#1F6B38] font-bold">100% Free</span> - No ads, no subscriptions
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Download CTA Section */}
            <section id="download"  className="px-4 py-12 bg-gradient-to-r from-[#1F6B38] to-[#144B26] text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Try Bazar Talika app now for Free</h2>

                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Download now and make your shopping experience hassle-free!
                    </p>
                    

                    <DownloadLinks className='justify-center' />
                </div>
            </section>

            <Footer/>
        </div>
    );
}