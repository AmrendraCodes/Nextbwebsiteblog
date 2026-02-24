import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './legacy.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ak Tech Blog - Modern Web Development',
  description: 'A premium tech blog for modern web development, tutorials, and insights.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        {/* Main wrapper handles top padding for fixed navbar, but allows full-width children */}
        <main className="flex-grow pt-20 w-full relative">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
