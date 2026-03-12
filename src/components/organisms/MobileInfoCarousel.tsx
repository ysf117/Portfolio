'use client';

import React, { useState, useCallback } from 'react';
import { ProfileImage, Badge } from '@/components/atoms';
import { PROFILE, TOOLKIT, LANGUAGES } from '@/data';
import { cn } from '@/lib/utils';

export const MobileInfoCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const slides = [
        { id: 'about', title: 'About' },
        { id: 'coordinates', title: 'Coordinates' },
        { id: 'toolkit', title: 'Toolkit' },
        { id: 'languages', title: 'Languages' },
    ];

    const minSwipeDistance = 50;

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) nextSlide();
        else if (distance < -minSwipeDistance) prevSlide();
    };

    return (
        <div className="md:hidden bg-[#0a0a0f] border-b border-white/10">
            {/* Fixed Profile Header - stays at top while swiping */}
            <div className="p-6 pb-4">
                <div className="flex items-center gap-4">
                    <ProfileImage
                        src={PROFILE.profileImage}
                        hoverSrc={PROFILE.profileImageHover}
                        alt={PROFILE.name}
                        className="w-20 h-20 flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                        <h1 className="text-lg font-bold text-white">{PROFILE.name}</h1>
                        <p className="text-[8px] text-gray-500 uppercase tracking-wider leading-relaxed">
                            {PROFILE.title}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </div>
                            <span className="text-[8px] text-emerald-500 font-bold tracking-widest uppercase">
                                Available for work
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Swipeable Content Carousel */}
            <div
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {/* Slide 1: About */}
                    <div className="min-w-full w-full flex-shrink-0 px-6 pb-4 overflow-hidden">
                        <h3 className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">
                            About
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed break-words">{PROFILE.about}</p>
                    </div>

                    {/* Slide 2: Coordinates */}
                    <div className="min-w-full w-full flex-shrink-0 px-6 pb-4 overflow-hidden">
                        <h3 className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">
                            Coordinates
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-electric-blue text-lg flex-shrink-0">
                                    mail
                                </span>
                                <span className="break-all">{PROFILE.email}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-electric-blue text-lg flex-shrink-0">
                                    location_on
                                </span>
                                <span>{PROFILE.location}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Slide 3: Toolkit */}
                    <div className="min-w-full w-full flex-shrink-0 px-6 pb-4 overflow-hidden">
                        <h3 className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">
                            Toolkit
                        </h3>
                        <div className="space-y-4 max-h-[180px] overflow-y-auto">
                            <div>
                                <p className="text-[10px] text-electric-blue mb-2 uppercase tracking-widest">
                                    Languages
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {TOOLKIT.languages.map((item) => (
                                        <Badge key={item} label={item} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-electric-blue mb-2 uppercase tracking-widest">
                                    Technologies
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {TOOLKIT.technologies.map((item) => (
                                        <Badge key={item} label={item} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-electric-blue mb-2 uppercase tracking-widest">
                                    Project Management
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {TOOLKIT.projectManagement.map((item) => (
                                        <Badge key={item} label={item} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-electric-blue mb-2 uppercase tracking-widest">
                                    Design
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {TOOLKIT.design.map((item) => (
                                        <Badge key={item} label={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 4: Languages */}
                    <div className="min-w-full w-full flex-shrink-0 px-6 pb-4 overflow-hidden">
                        <h3 className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">
                            Languages
                        </h3>
                        {LANGUAGES.map((lang) => (
                            <div
                                key={lang.name}
                                className="flex justify-between items-center text-sm text-gray-400 border-b border-white/5 pb-2 mb-2"
                            >
                                <span>{lang.name}</span>
                                <span className="text-xs text-electric-blue">{lang.level}</span>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="flex gap-6 mt-10 pt-4 border-t border-white/10">
                            <a
                                className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-300"
                                href="https://www.linkedin.com/in/yusufminhas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                className="text-gray-500 hover:text-white transition-colors duration-300"
                                href="https://github.com/yusufminhas"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                className="text-gray-500 hover:text-[#FF0000] transition-colors duration-300"
                                href="https://www.youtube.com/@ym117-x6o"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center gap-3 pb-4">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        aria-label={`Go to ${slide.title}`}
                        onClick={() => goToSlide(index)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            index === currentIndex
                                ? "bg-electric-blue scale-125"
                                : "bg-white/20 hover:bg-white/40"
                        )}
                    />
                ))}
            </div>
        </div>
    );
};
