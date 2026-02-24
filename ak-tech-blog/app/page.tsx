import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';

export default function Home() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero home-hero relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="container hero-container max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Welcome to the Future
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Master Modern <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Web Development
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dive into the world of Next.js, React, and Tailwind CSS. We break down complex concepts into actionable guides to help you build better, faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/blog"
                className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-1 text-center"
              >
                Read Articles
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1 text-center"
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative z-10">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 ring-1 ring-black/5 group">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Modern setup"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Floating Card 1 */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 hidden sm:flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">R</div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Framework</div>
                  <div className="text-sm font-bold text-slate-900">React & Next.js</div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 animate-float-delayed">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">TS</div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Language</div>
                  <div className="text-sm font-bold text-slate-900">TypeScript</div>
                </div>
              </div>
            </div>

            {/* Soft glow behind image */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Latest Updates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">Recent Articles</h2>
            <p className="text-slate-600 text-lg">
              Stay ahead of the curve with our latest deep dives into frontend architecture and design patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {recentPosts.map((post) => (
              <article key={post.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <div className="text-xs text-slate-500 mb-3 font-medium flex items-center gap-2">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blog`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt || post.description || "Learn the latest tech..."}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">By Admin</span>
                    <Link href={`/blog`} className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group/link">
                      Read Post <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-full hover:bg-slate-50 transition-all hover:shadow-sm hover:-translate-y-0.5">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* About / Newsletter Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center lg:text-left shadow-2xl">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start your journey today.</h2>
                <p className="text-slate-300 text-lg mb-8">
                  Join thousands of developers building the future. Get the latest tutorials and resources delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto min-w-[300px]"
                  />
                  <button className="px-8 py-3.5 font-bold text-slate-900 bg-white rounded-full hover:bg-blue-50 transition-colors w-full sm:w-auto hover:shadow-lg hover:-translate-y-0.5">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="hidden lg:block transform hover:scale-110 transition-transform duration-500">
                <div className="w-56 h-56 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-2xl rotate-6 opacity-30 absolute right-16 top-1/2 -translate-y-1/2 backdrop-blur-md"></div>
                <div className="w-56 h-56 bg-white/10 rounded-2xl -rotate-6 backdrop-blur-md border border-white/10 relative flex items-center justify-center shadow-xl">
                  <span className="text-6xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
