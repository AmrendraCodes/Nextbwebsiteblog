import Link from 'next/link';
import TypingEffect from '@/components/TypingEffect';

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero / Intro Section with Typing Effect */}
            <section className="about-section relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(#444cf7 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="container max-w-[1200px] mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Hi, I'm <TypingEffect />
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Technical Content Writer & Web Enthusiast. Bridging the gap between complex code and readable stories.
                    </p>
                </div>
            </section>

            {/* Professional Experience Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Career Path</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">Professional Journey</h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform lg:-translate-x-1/2"></div>

                        {/* Experience Item 1 */}
                        <div className="relative mb-12 lg:mb-16">
                            <div className="flex flex-col lg:flex-row items-center w-full">
                                <div className="w-full lg:w-1/2 lg:pr-12 lg:text-right pl-12 lg:pl-0 mb-4 lg:mb-0 relative">
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-2">2025 – Present</span>
                                    <h3 className="text-xl font-bold text-slate-800">Technical Content Writer</h3>
                                    <p className="text-slate-500 font-medium">Rejoice Hub LLP</p>
                                    {/* Dot (Mobile) */}
                                    <div className="absolute left-2 lg:right-[-54px] top-1.5 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md lg:hidden"></div>
                                </div>
                                {/* Center Dot for Desktop */}
                                <div className="hidden lg:block absolute left-1/2 top-1.5 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10"></div>
                                <div className="w-full lg:w-1/2 lg:pl-12"></div>
                            </div>
                        </div>

                        {/* Experience Item 2 */}
                        <div className="relative mb-12 lg:mb-16">
                            <div className="flex flex-col lg:flex-row-reverse items-center w-full">
                                <div className="w-full lg:w-1/2 lg:pl-12 pl-12 mb-4 lg:mb-0 relative">
                                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-2">2024 – 2025</span>
                                    <h3 className="text-xl font-bold text-slate-800">Technical Content Writer</h3>
                                    <p className="text-slate-500 font-medium">Astha Technology</p>
                                    {/* Dot */}
                                    <div className="absolute left-2 lg:left-[-54px] top-1.5 w-4 h-4 bg-slate-400 rounded-full border-4 border-white shadow-md lg:hidden"></div>
                                </div>
                                {/* Center Dot for Desktop */}
                                <div className="hidden lg:block absolute left-1/2 top-1.5 w-5 h-5 bg-slate-400 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10"></div>
                                <div className="w-full lg:w-1/2 lg:pr-12"></div>
                            </div>
                        </div>

                        {/* Experience Item 3 */}
                        <div className="relative">
                            <div className="flex flex-col lg:flex-row items-center w-full">
                                <div className="w-full lg:w-1/2 lg:pr-12 lg:text-right pl-12 lg:pl-0 mb-4 lg:mb-0 relative">
                                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-2">2022 – 2024</span>
                                    <h3 className="text-xl font-bold text-slate-800">SEO Executive & Writer</h3>
                                    <p className="text-slate-500 font-medium">Tech Mahindra</p>
                                    {/* Dot */}
                                    <div className="absolute left-2 top-1.5 w-4 h-4 bg-slate-400 rounded-full border-4 border-white shadow-md lg:hidden"></div>
                                </div>
                                {/* Center Dot for Desktop */}
                                <div className="hidden lg:block absolute left-1/2 top-1.5 w-5 h-5 bg-slate-400 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10"></div>
                                <div className="w-full lg:w-1/2 lg:pl-12"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* About Me + Projects Grid */}
            <section className="py-16 lg:py-24 bg-slate-50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Left Box: About Me */}
                        <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-blue-600 rounded-full"></span> More About Me
                            </h3>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    I have a deep passion for technology and learning how things work under the hood.
                                    With a solid background in <strong className="text-slate-900">SEO and Technical
                                        Writing</strong>, I bridge the gap between
                                    complex code and readable, engaging content.
                                </p>
                                <p>
                                    My focus is always on clarity—breaking down difficult web development concepts into
                                    practical, real-world examples that beginners can easily understand. Whether it&apos;s
                                    mastering the latest web technologies or optimizing content for search engines,
                                    I love the process of continuous learning.
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <Link href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30">
                                    Let&apos;s Connect
                                </Link>
                            </div>
                        </div>

                        {/* Right Box: Projects / Highlights */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 lg:mb-10 pl-2">Projects & Highlights</h3>
                            <div className="space-y-6">

                                {/* Project Card 1 */}
                                <div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-default">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                            Tech Blog Platform</h4>
                                        <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded">Web Dev</span>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">A personal blog built with Next.js (previously HTML/CSS) to share tutorials and technical insights.</p>
                                </div>

                                {/* Project Card 2 */}
                                <div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-default">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                            SEO Audit Tool Guide</h4>
                                        <span className="bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded">Documentation</span>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">Comprehensive documentation for internal SEO audit processes regarding technical performance.</p>
                                </div>

                                {/* Project Card 3 */}
                                <div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-default">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                            SaaS Docs Overhaul</h4>
                                        <span className="bg-purple-50 text-purple-600 text-xs font-bold px-2 py-1 rounded">UX Writing</span>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">Revamped technical docs for a SaaS product, improving readability score by 40%.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
