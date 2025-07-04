import Content from '@/components/content';
import ContactInfo from '@/components/lib/ContactInfo';
import { info } from '@/constants/app-info';
import React from 'react';

const About = () => {
    return (
        <main className=' min-h-screen bg-white'>
            <Content.PageTitle>
                About
            </Content.PageTitle>
            <section className='p-3.5'>
                <section className='container mx-auto md:text-lg '>

                    <Content.Block>
                        App Name: {info.app_name} <br />
                        Version: {info.app_version}<br />
                        Developer: {info.developer}
                    </Content.Block>

                    <Content.Title>
                        Purpose
                    </Content.Title>
                    <Content.Block>
                        This app was built to help users easily create and manage their shopping lists —
                        from groceries to clothing or anything else they plan to buy from the market.
                        Simple, fast, and completely offline.
                    </Content.Block>

                    <Content.Title>
                        Offline & Private
                    </Content.Title>
                    <Content.Block>
                        Your data stays only on your phone. No internet needed, no personal data collected.
                        Just open the app and start listing.
                    </Content.Block>

                    <ContactInfo />

                    <Content.Block>
                        Made with ❤️ in Bangladesh
                    </Content.Block>
                </section>
            </section>
        </main>
    );
};



export default About;


export const metadata = {
    title: 'About | বাজার তালিকা - Shopping List',
    description: `    This app was built to help users easily create and manage their shopping lists —
                        from groceries to clothing or anything else they plan to buy from the market.
                        Simple, fast, and completely offline.`,
};