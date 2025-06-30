import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { appBaseUrl } from '@/utils'


const hindSiliguri = Hind_Siliguri({
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali'],
  display: 'swap',
  variable: '--font-hind-siliguri',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'বাজার তালিকা অ্যাপ - সহজে বাজার করুন, তালিকা তৈরি করুন | Bazar Talika',
  description: 'আপনার দৈনন্দিন বাজারের তালিকা তৈরি করুন এবং নিশ্চিন্তে বাজার করুন। সম্পূর্ণ ফ্রি বাংলা শপিং লিস্ট অ্যাপ',
  metadataBase: new URL(appBaseUrl()),

  // OpenGraph (Facebook) Meta Tags
  openGraph: {
    type: 'website',
    url: '/',
    title: 'বাজার তালিকা - Shopping List ',
    description: 'বাজারে কী কিনবেন ভুলে যাবেন না! ফ্রি অ্যাপে তালিকা তৈরি করুন',
    siteName: 'Bazar Talika',
    images: [
      {
        url: '/banner.png', // Relative to metadataBase
        width: 1200,
        height: 630,
        alt: 'Bazar Talika App - Smart Shopping List',
      },
    ],
    locale: 'bn_BD',
  },

  // Twitter/X Meta Tags
  twitter: {
    card: 'summary_large_image',
    title: 'বাজার তালিকা - Shopping List ',
    description: 'বাজারে কী কিনবেন ভুলে যাবেন না! ফ্রি অ্যাপে তালিকা তৈরি করুন',
    images: [
      {
        url: '/banner.png', // Relative to metadataBase
        width: 1200,
        height: 630,
        alt: 'Bazar Talika App Screenshot',
      },
    ],
  },

  // For WhatsApp/other meta tags
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': 'বাজার তালিকা অ্যাপের স্ক্রীনশট',
    'og:type': 'website',
    'og:image:secure_url': '/banner.png',
  }
};