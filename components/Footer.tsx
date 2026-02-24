import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white pt-24 pb-12 border-t border-slate-100 italic">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 italic">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16 italic">
                    {/* Brand Column */}
                    <div className="space-y-6 italic">
                        <Link href="/" className="text-2xl font-black text-slate-900 tracking-tighter italic underline">
                            AK<span className="text-blue-600">.</span>BLOG
                        </Link>
                        <p className="text-slate-500 text-lg leading-relaxed italic">
                            A curated space for modern web development insights, tutorials, and design principles. Building the future, one pixel at a time.
                        </p>
                        <div className="flex gap-4 italic">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all italic">
                                FB
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all italic">
                                TW
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all italic">
                                LN
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all italic">
                                GH
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="italic">
                        <h4 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-8 italic underline">Navigation</h4>
                        <ul className="space-y-4 italic">
                            <li><Link href="/" className="text-slate-500 hover:text-blue-600 font-bold transition-all italic underline">Home</Link></li>
                            <li><Link href="/about" className="text-slate-500 hover:text-blue-600 font-bold transition-all italic underline">About Me</Link></li>
                            <li><Link href="/blog" className="text-slate-500 hover:text-blue-600 font-bold transition-all italic underline">Insights</Link></li>
                            <li><Link href="/contact" className="text-slate-500 hover:text-blue-600 font-bold transition-all italic underline">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="italic">
                        <h4 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-8 italic underline">Resources</h4>
                        <ul className="space-y-4 italic">
                            <li><Link href="/blog" className="text-slate-500 hover:text-blue-600 font-bold transition-all italic underline">Tutorials</Link></li>
                            <li><Link href="/blog" className="text-slate-500 hover:text-blue-600 font-bold transition-all italic underline">Documentation</Link></li>
                            <li><Link href="/blog" className="text-slate-500 hover:text-blue-600 font-bold transition-all italic underline">Case Studies</Link></li>
                            <li><Link href="/blog" className="text-slate-500 hover:text-blue-600 font-bold transition-all italic underline">Best Practices</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="italic">
                        <h4 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-8 italic underline">Get in Touch</h4>
                        <div className="space-y-4 italic">
                            <p className="text-slate-500 font-bold italic">Have a project in mind?</p>
                            <a href="mailto:amrendra1999official@gmail.com" className="block text-slate-900 font-black text-lg hover:text-blue-600 break-words italic underline">
                                amrendra1999official@gmail.com
                            </a>
                            <p className="text-slate-500 font-bold italic">Based in India, working worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 italic">
                    <p className="text-slate-400 text-sm font-bold italic">
                        &copy; {year} AK BLOG. Crafted with ❤️ for the web.
                    </p>
                    <div className="flex gap-8 text-sm font-bold text-slate-400 italic">
                        <Link href="/" className="hover:text-slate-900 transition-all italic underline">Privacy Policy</Link>
                        <Link href="/" className="hover:text-slate-900 transition-all italic underline">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
