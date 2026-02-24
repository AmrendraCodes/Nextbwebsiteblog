export interface BlogPost {
    id: number;
    title: string;
    description: string;
    excerpt?: string; // For compatibility
    author: string;
    date: string;
    category: string;
    image: string;
    readTime?: string;
    content?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'The Future of Web Development in 2026',
        description: 'Exploring emerging trends, technologies, and best practices that are shaping the future of web development.',
        excerpt: 'Exploring emerging trends, technologies, and best practices that are shaping the future of web development.',
        date: 'Feb 1, 2026',
        author: 'Sarah Johnson',
        readTime: '8 min read',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
        content: `<p>Web development continues to evolve at a rapid pace...</p><h2>The Rise of Performance-First Development</h2><p>Performance has always been important...</p>`
    },
    {
        id: 2,
        title: 'Mastering CSS Grid and Flexbox',
        description: 'A comprehensive guide to modern layout techniques that will transform your web design workflow.',
        excerpt: 'A comprehensive guide to modern layout techniques that will transform your web design workflow.',
        date: 'Jan 28, 2026',
        author: 'Michael Chen',
        readTime: '12 min read',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop',
    },
    {
        id: 3,
        title: 'Building Accessible Web Applications',
        description: 'Learn how to create inclusive digital experiences that work for everyone, adhering to WCAG guidelines.',
        excerpt: 'Learn how to create inclusive digital experiences that work for everyone.',
        date: 'Jan 25, 2026',
        author: 'Emma Williams',
        readTime: '10 min read',
        category: 'Accessibility',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    },
    {
        id: 4,
        title: 'Performance Optimization Techniques',
        description: 'Discover proven strategies to make your websites faster, more efficient, and improve Core Web Vitals.',
        excerpt: 'Discover proven strategies to make your websites faster and more efficient.',
        date: 'Jan 22, 2026',
        author: 'David Martinez',
        readTime: '15 min read',
        category: 'Performance',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
        id: 5,
        title: 'React Server Components Explained',
        description: 'Understanding the paradigm shift in React architecture and how it benefits modern web applications.',
        excerpt: 'Understanding the paradigm shift in React architecture and modern patterns.',
        date: 'Jan 20, 2026',
        author: 'Lisa Anderson',
        readTime: '11 min read',
        category: 'React',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    },
    {
        id: 6,
        title: 'The Art of Minimalist Design',
        description: 'How to create stunning designs by embracing simplicity and using whitespace effectively.',
        excerpt: 'How to create stunning designs by embracing simplicity.',
        date: 'Jan 18, 2026',
        author: 'James Taylor',
        readTime: '7 min read',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    },
    {
        id: 7,
        title: 'TypeScript Best Practices 2026',
        description: 'Essential patterns and practices for writing better, type-safe code in large scale applications.',
        excerpt: 'Essential patterns and practices for writing better TypeScript code.',
        date: 'Jan 15, 2026',
        author: 'Sarah Johnson',
        readTime: '9 min read',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
    },
    {
        id: 8,
        title: 'Dark Mode Implementation Guide',
        description: 'A complete walkthrough on implementing a robust, system-aware dark mode for your website.',
        excerpt: 'Complete guide to implementing dark mode in modern applications.',
        date: 'Jan 12, 2026',
        author: 'Michael Chen',
        readTime: '8 min read',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    },
    {
        id: 9,
        title: 'API Design Principles',
        description: 'Building robust and scalable APIs that developers love to use.',
        excerpt: 'Building robust and scalable APIs that developers love to use.',
        date: 'Jan 10, 2026',
        author: 'Emma Williams',
        readTime: '13 min read',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    },
    {
        id: 10,
        title: 'Mobile-First Design Strategy',
        description: 'Why mobile-first approach is crucial for modern web development.',
        excerpt: 'Why mobile-first approach is crucial for modern web development.',
        date: 'Jan 8, 2026',
        author: 'David Martinez',
        readTime: '10 min read',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    },
];
