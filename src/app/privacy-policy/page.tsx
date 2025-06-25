import Content from '@/components/content';
import ContactInfo from '@/components/lib/ContactInfo';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <main className='min-h-screen bg-white'>
            <Content.PageTitle>
                Privacy Policy
            </Content.PageTitle>

            <section className='p-3.5'>
                <section className='container mx-auto md:text-lg '>

                    <Content.Block>
                        Effective Date: June 21, 2025 <br />
                        App Name: বাজার তালিকা - Shopping List <br />
                        Developer: Ahmod Hasan
                    </Content.Block>

                    <Content.Title>
                        Overview
                    </Content.Title>
                    <Content.Block>
                        This Privacy Policy explains how your information is handled when you use the
                        <span className='font-semibold'>বাজার তালিকা:Shopping List</span> mobile application. We respect your privacy —
                        and {"here's"} the good news: This app does not collect, store, or share any
                        personal data.
                    </Content.Block>

                    <Content.Title>
                        What Data We Collect
                    </Content.Title>
                    <Content.Block>
                        None. This app works completely offline. All the lists and information you add
                        are stored only on your device. We do not use internet access, and we do not
                        connect to any server or third-party service.
                    </Content.Block>

                    <Content.Title>
                        Data Storage
                    </Content.Title>
                    <Content.Block>
                        All data you enter is saved locally on your phone’s storage. If you delete
                        the app or clear the app data, your lists may be lost.
                    </Content.Block>

                    <Content.Title>
                        Data Loss Disclaimer
                    </Content.Title>
                    <Content.Block>
                        We are not responsible for any data loss due to app uninstallation, phone
                        issues, or any other reason. Please keep a backup if your shopping list is
                        important.
                    </Content.Block>

                    <Content.Title>
                        Updates to Policy
                    </Content.Title>
                    <Content.Block>
                        If we ever add features in the future that involve data or internet use,
                        this Privacy Policy will be updated and users will be notified.
                    </Content.Block>

                    <ContactInfo />

                </section>
            </section>
        </main>
    );
};


export default PrivacyPolicy;


export const metadata = {
    title: 'Privacy Policy',
    description: 'Learn about the privacy practices of বাজার তালিকা:Shopping List app.',
};
