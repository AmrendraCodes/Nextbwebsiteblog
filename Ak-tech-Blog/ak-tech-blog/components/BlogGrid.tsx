'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';

const ITEMS_PER_PAGE = 6;

export default function BlogGrid() {
    const [currentPage, setCurrentPage] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPosts = blogPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);

        // Scroll to the top of the grid or hero
        // window.scrollTo({ top: 0, behavior: 'smooth' }); // Simple
        // Or scroll to container
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div ref={containerRef}>
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {currentPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full group">
                        {/* Image */}
                        <div className="h-48 overflow-hidden relative">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{post.category}</span>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                {/* Note: User hasn't asked for detail page yet but linking is standard */}
                            </h3>

                            <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                                {post.description}
                            </p>

                            {/* Meta Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto text-xs text-slate-500 font-medium">
                                <span>{post.date}</span>
                                <span>by {post.author}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">

                    {/* Previous */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center font-semibold text-sm pagination-btn hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        &lt;
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-lg border flex items-center justify-center font-semibold text-sm pagination-btn transition-all ${currentPage === page
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                    : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Next */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center font-semibold text-sm pagination-btn hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        &gt;
                    </button>

                </div>
            )}
        </div>
    );
}
