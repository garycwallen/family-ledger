import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootProviders from '@/components/providers/RootProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Family Ledger',
  description: 'Ledger for our family',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' className='dark' style={{ colorScheme: 'dark' }}>
        <body className={inter.className}>
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
