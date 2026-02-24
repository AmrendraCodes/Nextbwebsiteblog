'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header>
            <div className="container mx-auto px-4">
                <nav className="transition-all duration-300 relative">
                    {/* logo */}
                    <Link href="/" className="logo">
                        Ak Tech Blog
                    </Link>

                    {/* links */}
                    <div className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={isActive(link.href) ? 'active' : ''}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* mobile toggle */}
                    <div
                        className="mobile-menu-btn"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? '✕' : '☰'}
                    </div>
                </nav>
            </div>
        </header>
    );
}
