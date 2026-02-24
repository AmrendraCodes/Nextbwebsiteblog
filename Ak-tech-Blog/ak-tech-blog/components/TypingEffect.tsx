'use client';

import { useEffect, useState } from 'react';

export default function TypingEffect() {
    const [text, setText] = useState('');
    const textToType = "Amrendra Kumar";

    useEffect(() => {
        let charIndex = 0;
        const interval = setInterval(() => {
            if (charIndex < textToType.length) {
                setText((prev) => prev + textToType.charAt(charIndex));
                charIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="text-blue-600">
            {text}
            <span className="cursor animate-pulse text-blue-600">|</span>
        </span>
    );
}
