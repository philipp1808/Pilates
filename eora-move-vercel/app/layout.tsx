import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['latin'], weight: ['400', '500', '600'] });
const body = Manrope({ variable: '--font-body', subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'Eora Move · Reformer Pilates, Barre & Mobility',
  description: 'Mindful Movement in kleinen Gruppen: Reformer Pilates, Barre und Mobility bei Eora Move.',
  openGraph: {
    title: 'Eora Move · Move with intention.',
    description: 'Reformer Pilates, Barre und Mobility für Kraft, Leichtigkeit und echte Verbindung.',
    images: [{ url: '/og.png', width: 1664, height: 936, alt: 'Eora Move · Move with intention.' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eora Move · Move with intention.',
    description: 'Reformer Pilates, Barre und Mobility für Kraft, Leichtigkeit und echte Verbindung.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
