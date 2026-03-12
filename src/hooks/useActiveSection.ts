'use client';

import { useState, useEffect, useCallback } from 'react';

const SECTION_IDS = ['home', 'work', 'experience', 'education', 'certifications', 'contact'];

export function useActiveSection(): string {
    const [activeSection, setActiveSection] = useState<string>('home');

    const handleScroll = useCallback(() => {
        const scrollContainer = document.querySelector('main');
        if (!scrollContainer) return;

        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;

        // Find the section whose top is closest to the viewport top
        let currentSection = 'home';
        let bestMatch = -Infinity;

        for (const id of SECTION_IDS) {
            const element = document.getElementById(id);
            if (!element) continue;

            const rect = element.getBoundingClientRect();
            const mainRect = scrollContainer.getBoundingClientRect();

            // Section top relative to main container
            const sectionTop = rect.top - mainRect.top;

            // Section should be at or past the top of the viewport
            // but we want the one that's closest to the top (most recently scrolled to)
            if (sectionTop <= 50 && sectionTop > bestMatch) {
                bestMatch = sectionTop;
                currentSection = id;
            }
        }

        // Special case: if truly scrolled to the absolute bottom, show contact
        const remainingScroll = scrollHeight - scrollTop - clientHeight;
        if (remainingScroll <= 5) {
            currentSection = 'contact';
        }

        setActiveSection(currentSection);
    }, []);

    useEffect(() => {
        const scrollContainer = document.querySelector('main');
        if (!scrollContainer) return;

        setTimeout(handleScroll, 150);
        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return activeSection;
}
