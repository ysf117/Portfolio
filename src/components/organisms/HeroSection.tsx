'use client';

import React from 'react';
import { SectionLabel } from '@/components/atoms';
import { TechMarquee } from '@/components/molecules';
import { useTypewriter } from '@/hooks';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
    className?: string;
}

// Helper to render text with colored keywords
const renderTypewriterText = (text: string) => {
    const parts = text.split(/(RELIABILITY|PRECISION)/);
    return parts.map((part, index) => {
        if (part === 'RELIABILITY' || part === 'PRECISION') {
            return (
                <span key={index} className="text-electric-blue">
                    {part}
                </span>
            );
        }
        return part;
    });
};

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
    const fullText = 'ENGINEERED RELIABILITY. DESIGNED PRECISION.';
    const { displayedText, isComplete } = useTypewriter({
        text: fullText,
        speed: 80,
        delay: 500,
    });

    return (
        <section
            id="home"
            className={cn(
                "min-h-[50vh] md:min-h-[70vh] flex flex-col justify-center px-6 md:px-16 pt-20 pb-20 border-b border-white/10 relative",
                className
            )}
        >
            <div className="max-w-4xl">
                <SectionLabel number="00" title="Intro" />
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pl-1 md:pl-1">
                    <div className="w-12 h-[2px] bg-electric-blue hidden md:block" />
                    <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white/90">
                        {renderTypewriterText(displayedText)}
                        <span
                            className={cn(
                                "inline-block w-[3px] h-[1em] bg-electric-blue ml-1 align-middle",
                                isComplete ? "animate-blink" : "opacity-100"
                            )}
                        />
                    </h2>
                </div>
                <p
                    className={cn(
                        "mt-8 text-base md:text-base text-gray-400 max-w-lg leading-relaxed md:pl-[4.5rem] transition-all duration-[1500ms] ease-out delay-300",
                        isComplete ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    )}
                >
                    Leveraging 3+ years of enterprise DevOps experience to build web interfaces
                    that are as robust as they are responsive. I combine the structural discipline
                    of cloud infrastructure with the creativity of modern web design to create
                    digital environments that scale.
                </p>

                {/* Mobile Tech Marquee */}
                <div className={cn(
                    "md:hidden mt-8 -mx-6 transition-all duration-[1500ms] ease-out delay-1000",
                    isComplete ? "opacity-100" : "opacity-0"
                )}>
                    <TechMarquee />
                </div>
            </div>
            <button
                onClick={() => {
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 md:mt-0 md:absolute md:bottom-12 md:left-16 animate-bounce cursor-pointer hover:scale-110 transition-transform w-fit"
                aria-label="Scroll to projects"
            >
                <span className="material-symbols-outlined text-electric-blue">arrow_downward</span>
            </button>
        </section>
    );
};
