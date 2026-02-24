import BlogGrid from '@/components/BlogGrid';

export default function Blog() {
    return (
        // Replaced <main> with <div> to avoid nesting issues with Layout's main
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="bg-slate-50 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                <div className="container max-w-[1200px] mx-auto px-6 relative z-10 text-center">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">
                        Our Knowledge Hub
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Latest Blog Posts
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Explore our latest articles, tutorials, and insights on web development and design.
                    </p>
                </div>
            </section>

            {/* Blog Grid Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-[1200px] mx-auto px-6">
                    {/* Blog Grid Component */}
                    <BlogGrid />
                </div>
            </section>
        </div>
    );
}
