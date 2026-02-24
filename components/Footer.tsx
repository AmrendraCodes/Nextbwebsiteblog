import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-modern">
            <div className="container footer-grid">
                {/* Brand */}
                <div className="footer-col brand-col">
                    <Link href="/" className="footer-logo">
                        Ak Tech Blog
                    </Link>
                    <p className="footer-desc">
                        A personal space for coding tutorials, web development tips, and tech insights. Built with passion.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-heading">Explore</h4>
                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Connect */}
                <div className="footer-col">
                    <h4 className="footer-heading">Connect</h4>
                    <ul className="footer-links social-links">
                        <li><a href="#" target="_blank">GitHub</a></li>
                        <li><a href="#" target="_blank">LinkedIn</a></li>
                        <li><a href="#" target="_blank">Twitter</a></li>
                        <li><a href="#" target="_blank">Instagram</a></li>
                    </ul>
                </div>

                {/* Contact / Email */}
                <div className="footer-col">
                    <h4 className="footer-heading">Get in Touch</h4>
                    <p className="footer-text">
                        Have a question or want to collaborate? Reach out via email.
                    </p>
                    <a href="mailto:amrendra1999official@gmail.com" className="footer-email">
                        amrendra1999official@gmail.com
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container text-center text-sm">
                    &copy; {year} Ak Tech Blog. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
