'use client';

import React, { useState, useCallback } from 'react';
import { SectionLabel } from '@/components/atoms';
import { ProjectCard } from '@/components/molecules';
import { PROJECTS } from '@/data';
import { cn } from '@/lib/utils';

interface WorkCarouselProps {
    className?: string;
}

export const WorkCarousel: React.FC<WorkCarouselProps> = ({ className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const nextProject = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    }, []);

    const prevProject = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    }, []);

    const goToProject = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

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
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextProject();
        } else if (isRightSwipe) {
            prevProject();
        }
    };

    return (
        <section
            id="work"
            role="region"
            aria-label="Project Carousel"
            className={cn(
                "w-full py-24 px-6 md:px-16 border-b border-white/10 bg-black/20",
                className
            )}
        >
            <div className="max-w-7xl">
                <SectionLabel number="01" title="Selected Works" />
                <div className="flex items-stretch border border-white/10 bg-black/40">
                    {/* Carousel Viewport */}
                    <div
                        className="flex-1 overflow-hidden relative group"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Slider Track */}
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {PROJECTS.map((project) => (
                                <ProjectCard
                                    key={project.title}
                                    title={project.title}
                                    category={project.category}
                                    year={project.year}
                                    description={project.description}
                                    techStack={project.techStack}
                                    imageSrc={project.imageSrc}
                                    imagePosition={project.imagePosition}
                                    liveUrl={project.liveUrl}
                                    repoUrl={project.repoUrl}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Next Arrow Button */}
                    <button
                        aria-label="Next Slide"
                        onClick={nextProject}
                        className="hidden lg:flex w-24 flex-col items-center justify-center bg-surface-dark hover:bg-white/5 transition-all duration-300 group/nav border-l border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-electric-blue/10 translate-x-full group-hover/nav:translate-x-0 transition-transform duration-500" />
                        <span className="material-symbols-outlined text-4xl text-electric-blue group-hover/nav:translate-x-1 group-hover/nav:scale-110 transition-transform duration-300">
                            arrow_forward
                        </span>
                    </button>
                </div>

                {/* Dot Navigation */}
                <div
                    className="flex justify-center items-center gap-4 mt-8"
                    role="group"
                    aria-label="Slide controls"
                >
                    {PROJECTS.map((_, index) => (
                        <button
                            key={index}
                            aria-label={`Go to project ${index + 1}`}
                            aria-current={index === currentIndex ? 'true' : undefined}
                            onClick={() => goToProject(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                index === currentIndex
                                    ? "bg-electric-blue scale-125"
                                    : "bg-white/20 hover:bg-white/40 hover:scale-110"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
