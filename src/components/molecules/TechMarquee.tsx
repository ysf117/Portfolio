'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

const TECH_ICONS = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    { name: 'PowerShell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Office 365', icon: 'https://cdn.worldvectorlogo.com/logos/office-1.svg' },
    { name: 'VMWare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vsphere/vsphere-original.svg' },
    { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'ServiceNow', icon: 'https://www.vectorlogo.zone/logos/servicenow/servicenow-icon.svg' },
    { name: 'Confluence', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

export const TechMarquee: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef(0);

    // State for drag interaction
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll request animation frame
    const animationRef = useRef<number | null>(null);

    // Quadruple the icons to ensure endless scrolling
    const displayIcons = [...TECH_ICONS, ...TECH_ICONS, ...TECH_ICONS, ...TECH_ICONS];

    const animate = useCallback(() => {
        if (!containerRef.current || !contentRef.current) {
            animationRef.current = requestAnimationFrame(animate);
            return;
        }

        // Only drift if not user-controlled
        if (!isDragging && !isPaused) {
            positionRef.current += 0.3; // Accumulate sub-pixel movement
            containerRef.current.scrollLeft = positionRef.current;
        } else if (isDragging) {
            // Keep positionRef in sync with actual scroll
            // Actually, while dragging we manually setting scrollLeft below, so we don't need to do much here
            // But we should update positionRef after drag ends so animation resumes smoothly
        }

        // Infinite Loop Reset Logic (Seamless Jump)
        const maxScroll = contentRef.current.scrollWidth / 2;
        if (containerRef.current.scrollLeft >= maxScroll) {
            containerRef.current.scrollLeft -= maxScroll;
            positionRef.current -= maxScroll;
        } else if (containerRef.current.scrollLeft <= 0) {
            containerRef.current.scrollLeft += maxScroll;
            positionRef.current += maxScroll;
        }

        animationRef.current = requestAnimationFrame(animate);
    }, [isDragging, isPaused]);

    useEffect(() => {
        // Start animation loop
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [animate]);

    const handleDragEnd = () => {
        setIsDragging(false);
        setIsPaused(false);
        // Sync positionRef to current scroll position so animation resumes from where user left off
        if (containerRef.current) {
            positionRef.current = containerRef.current.scrollLeft;
        }
    };

    return (
        <div
            className="w-full py-6 md:hidden group select-none overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
                if (!isDragging) setIsPaused(false);
            }}
        >
            <div
                ref={containerRef}
                className="flex w-full cursor-grab active:cursor-grabbing hide-scrollbar overflow-x-hidden p-8 -my-8"
                style={{ whiteSpace: 'nowrap' }}
                onMouseDown={(e) => {
                    if (!containerRef.current) return;
                    setIsDragging(true);
                    setIsPaused(true);
                    setStartX(e.pageX - containerRef.current.offsetLeft);
                    positionRef.current = containerRef.current.scrollLeft;
                }}
                onMouseLeave={handleDragEnd}
                onMouseUp={handleDragEnd}
                onMouseMove={(e) => {
                    if (!isDragging || !containerRef.current) return;
                    e.preventDefault();
                    const x = e.pageX - containerRef.current.offsetLeft;
                    const walk = (x - startX) * 1.5;
                    containerRef.current.scrollLeft = positionRef.current - walk;
                }}
                onTouchStart={(e) => {
                    if (!containerRef.current) return;
                    setIsDragging(true);
                    setIsPaused(true);
                    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
                    positionRef.current = containerRef.current.scrollLeft;
                }}
                onTouchEnd={handleDragEnd}
                onTouchMove={(e) => {
                    if (!isDragging || !containerRef.current) return;
                    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
                    const walk = (x - startX) * 1.5;
                    containerRef.current.scrollLeft = positionRef.current - walk;
                }}
            >
                <div ref={contentRef} className="flex">
                    {displayIcons.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="inline-flex flex-col items-center gap-2 mx-4 group/icon flex-shrink-0"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl p-3 
                                          group-hover/icon:bg-white/10 group-hover/icon:scale-110 group-hover/icon:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all ease-out duration-300 pointer-events-none relative z-10">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-full h-full object-contain grayscale brightness-200 contrast-50 opacity-70 
                                             group-hover/icon:brightness-[250%] group-hover/icon:opacity-100 transition-all duration-300 pointer-events-none select-none"
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest whitespace-nowrap opacity-60 group-hover/icon:opacity-100 group-hover/icon:text-electric-blue transition-colors relative z-10">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
