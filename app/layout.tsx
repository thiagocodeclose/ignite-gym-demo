// @ts-nocheck
import type { Metadata } from 'next';
import { Barlow_Condensed, Barlow } from 'next/font/google';
import './globals.css';
import { getKorivaConfig, buildCssVars } from '@/lib/koriva-config';
import { SiteDataProvider } from '@/components/SiteDataProvider';

import { KorivaLivePreview } from '@/components/KorivaLivePreview';
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ignite-gym-demo.vercel.app';

const DEFAULT_TITLE = 'Ignite Gym | HIIT & Bootcamp Training · Chicago, IL';
const DEFAULT_DESC = 'Chicago River North\'s most intense HIIT and bootcamp gym. Treadmill intervals, strength circuits, and group training. Results guaranteed or your money back.';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getKorivaConfig();
  const title = config?.seo?.title || DEFAULT_TITLE;
  const description = config?.seo?.description || DEFAULT_DESC;
  const gymName = config?.gym?.name || 'Ignite Gym';
  return {
    metadataBase: new URL(BASE_URL),
    title: { default: title, template: `%s | ${gymName}` },
    description,
    keywords: ['HIIT gym Chicago', 'bootcamp Chicago', 'treadmill workout Chicago', 'group fitness Chicago', 'intense workout Chicago', 'Barry\'s style Chicago', 'best gym Chicago River North'],
    openGraph: {
      title, description, url: BASE_URL, siteName: gymName, locale: 'en_US', type: 'website',
      images: [{ url: config?.seo?.og_image || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop&q=85', width: 1200, height: 630, alt: gymName }],
    },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: BASE_URL },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const config = await getKorivaConfig();
  const cssVars = buildCssVars(config?.brand);
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable}`} style={cssVars}>
      <body className="font-body antialiased">
        <KorivaLivePreview />
        <SiteDataProvider config={config}>
          {children}
        </SiteDataProvider>
      </body>
    </html>
  );
}
