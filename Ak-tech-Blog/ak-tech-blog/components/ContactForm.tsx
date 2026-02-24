'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    ✓
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-green-700 mb-6">Thank you for reaching out. I usually respond within 24 hours.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-green-700 font-semibold hover:text-green-900 underline transition-colors"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message <span className="text-red-500">*</span></label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-y"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto mt-2 px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                {!status && <span className="group-hover:translate-x-1 transition-transform">➤</span>}
            </button>

        </form>
    );
}
