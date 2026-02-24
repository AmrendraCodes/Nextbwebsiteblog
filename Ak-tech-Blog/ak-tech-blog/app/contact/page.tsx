import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Contact Hero Section */}
            <section className="py-20 lg:py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 bg-grid-slate-200"></div>
                <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Have a project idea, a question, or just want to say hi? I&apos;d love to hear from you.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="pb-20 lg:pb-24">
                <div className="container max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto">

                        {/* Left Column: Contact Form */}
                        <div className="flex-1 bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-4">
                                Send a Message
                            </h2>
                            <ContactForm />
                        </div>

                        {/* Right Column: Contact Info */}
                        <div className="flex-1 lg:max-w-md flex flex-col gap-10">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    Feel free to reach out directly through email or follow my latest updates on social media.
                                </p>

                                <div className="flex flex-col gap-6">
                                    {/* Item 1 */}
                                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-100 hover:shadow-sm">
                                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl shadow-sm flex-shrink-0">📧</div>
                                        <div className="flex flex-col">
                                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</span>
                                            <a href="mailto:amrendra1999official@gmail.com" className="text-slate-800 font-semibold hover:text-blue-600 transition-colors break-all">
                                                amrendra1999official@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-100 hover:shadow-sm">
                                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl shadow-sm flex-shrink-0">📍</div>
                                        <div className="flex flex-col">
                                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</span>
                                            <span className="text-slate-800 font-semibold">New Delhi, India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Connect */}
                            <div className="pt-8 border-t border-slate-200">
                                <h3 className="text-lg font-bold text-slate-800 mb-4">Follow Me</h3>
                                <div className="flex gap-4">
                                    <Link href="#" className="w-10 h-10 bg-white text-slate-600 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm border border-slate-100" aria-label="GitHub">GH</Link>
                                    <Link href="#" className="w-10 h-10 bg-white text-slate-600 rounded-lg flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm border border-slate-100" aria-label="LinkedIn">LI</Link>
                                    <Link href="#" className="w-10 h-10 bg-white text-slate-600 rounded-lg flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm border border-slate-100" aria-label="Twitter">TW</Link>
                                    <Link href="#" className="w-10 h-10 bg-white text-slate-600 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm border border-slate-100" aria-label="Instagram">IG</Link>
                                </div>
                            </div>

                            {/* UX Box: Response Time */}
                            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex items-center gap-4 animate-pulse-slow">
                                <div className="text-2xl">⚡</div>
                                <p className="text-sm text-blue-800 font-medium">
                                    I usually respond within <strong>24 hours</strong> during weekdays.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
