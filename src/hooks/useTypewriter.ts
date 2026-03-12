'use client';

import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
    text: string;
    speed?: number;
    delay?: number;
}

export const useTypewriter = ({ text, speed = 30, delay = 0 }: UseTypewriterOptions) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        setDisplayedText('');
        setIsComplete(false);
        setIsTyping(false);

        const startTimeout = setTimeout(() => {
            setIsTyping(true);
            let currentIndex = 0;

            const typeInterval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(typeInterval);
                    setIsTyping(false);
                    setIsComplete(true);
                }
            }, speed);

            return () => clearInterval(typeInterval);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [text, speed, delay]);

    return { displayedText, isTyping, isComplete };
};
