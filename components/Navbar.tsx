'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${(mounted && scrolled) ? 'py-3' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div
                    className={`relative flex items-center justify-between px-8 py-3 rounded-2xl transition-all duration-500 ${(mounted && scrolled)
                        ? 'bg-white/70 backdrop-blur-2xl shadow-xl border border-white/20'
                        : 'bg-transparent'
                        }`}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-black tracking-tight bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent"
                    >
                        AK.BLOG
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-semibold transition-all duration-300 ${isActive(link.href)
                                    ? 'text-blue-600'
                                    : 'text-slate-600 hover:text-blue-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 rounded-xl transition-colors hover:bg-slate-100"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-6 h-6 text-slate-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-12 text-center transition-all duration-500 md:hidden ${(mounted && isOpen)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-3xl font-bold transition-all ${isActive(link.href)
                            ? 'text-blue-600'
                            : 'text-slate-900 hover:text-blue-600'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-6 px-10 py-4 text-lg font-bold text-white rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl hover:scale-105 transition-all duration-300"
                >
                    Get in Touch
                </Link>
            </div>
        </nav>
    );
}