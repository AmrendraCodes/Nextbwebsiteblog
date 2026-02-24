import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';

export default function Home() {
  const recentPosts = blogPosts.slice(0, 3);

  const skills = [
    { name: "Web Development", desc: "Crafting fast, responsive, and modern websites using Next.js and React.", icon: "🌐" },
    { name: "UI/UX Design", desc: "Designing intuitive user interfaces with a focus on user experience and aesthetics.", icon: "🎨" },
    { name: "Technical Writing", desc: "Breaking down complex tech concepts into simple, readable tutorials.", icon: "✍️" },
    { name: "SEO Optimization", desc: "Boosting visibility and performance to rank higher on search engines.", icon: "🚀" }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                Mastering the Art of <br />
                <span className="text-gradient">Modern Development</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
                Deep dives into Next.js, React, and the future of web styling. We provide actionable guides to help you build stunning digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Link href="/blog" className="btn-primary w-full sm:w-auto text-center">
                  Explore Blog
                </Link>
                <Link href="/about" className="btn-secondary w-full sm:w-auto text-center">
                  Learn More
                </Link>
              </div>

              {/* Hero Image */}
              <div className="flex-1 w-full relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 group">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                    alt="Modern Development Setup"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Floating Labels */}
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-float hidden sm:block">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Stack</p>
                    <p className="text-sm font-black text-slate-900 italic">Next.js & React 19</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Preview Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                  alt="Creative Workspace"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10 opacity-10"></div>
            </div>

            <div className="flex-1 space-y-6">
              <span className="text-blue-600 font-black uppercase tracking-widest text-sm italic">Our Story</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight italic">
                Crafting digital experiences with purpose.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that great technology is invisible. It should empower users, not confuse them. Our mission is to bridge the gap between complex engineering and beautiful design, creating websites that are as functional as they are stunning.
              </p>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                  Discover more about us <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services / Skills Section */}
      <section className="py-24 bg-white italic">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-16 italic">
          <span className="text-indigo-600 font-black uppercase tracking-widest text-sm mb-4 block italic">What We Do</span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 italic underline">Specialized Services</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group italic">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 italic underline">{skill.name}</h3>
                <p className="text-slate-600 leading-relaxed italic">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Blog Preview Section */}
      <section className="py-24 bg-slate-50 italic">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 italic">
          <div>
            <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block italic">Latest Insights</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 italic underline">From the Blog</h2>
          </div>
          <Link href="/blog" className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all italic">
            View all articles
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recentPosts.map((post) => (
            <article key={post.id} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 italic">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-black text-blue-600 shadow-sm italic underline">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 italic underline">
                  <Link href="/blog">{post.title}</Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 italic">
                  {post.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 italic">By {post.author}</span>
                  <Link href="/blog" className="text-sm font-black text-blue-600 flex items-center gap-1 group/link italic underline">
                    Read More <span className="group-hover/link:translate-x-1 transition-transform italic">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 bg-white italic">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative rounded-[3rem] bg-slate-900 py-20 px-8 text-center overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8 italic">
              <h2 className="text-4xl sm:text-5xl font-black text-white italic underline">Ready to transform your <br /> digital presence?</h2>
              <p className="text-xl text-slate-300 leading-relaxed italic">
                Join our community of forward-thinking developers and designers. Get the latest exclusive content directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all hover:shadow-xl hover:-translate-y-1 italic underline">
                  Start a Project
                </Link>
                <button className="px-10 py-5 bg-white/10 text-white font-black rounded-2xl border border-white/20 hover:bg-white/20 transition-all italic underline">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
