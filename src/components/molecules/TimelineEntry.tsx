'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TimelineEntryProps {
    yearRange: string;
    role: string;
    company: string;
    description: string;
    highlights?: string[];
    highlightsTitle?: string;
    isFirst?: boolean;
    className?: string;
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
    yearRange,
    role,
    company,
    description,
    highlights = [],
    highlightsTitle = 'Description',
    isFirst,
    className,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        if (highlights.length > 0) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div
            className={cn(
                "group transition-all duration-300 px-2 md:px-4 -mx-2 md:-mx-4 py-8 md:py-10 border-t border-white/10",
                "flex flex-col md:grid md:grid-cols-[180px_1fr]",
                highlights.length > 0 && "cursor-pointer",
                isExpanded ? "bg-white/5" : "hover:bg-white/5",
                className
            )}
            onClick={handleClick}
        >
            {/* Date - Stacks above on mobile, left column on desktop */}
            <div
                className={cn(
                    "text-xs font-bold mb-2 md:mb-0 md:pt-1",
                    isFirst ? "text-electric-blue" : "text-gray-500 group-hover:text-electric-blue transition-colors"
                )}
            >
                {yearRange}
            </div>

            {/* Content - Full width on mobile, right column on desktop */}
            <div className="md:border-l md:border-white/10 md:pl-12">
                <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{role}</h3>
                        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-3 md:mb-4">
                            {company}
                        </p>
                    </div>
                    {highlights.length > 0 && (
                        <span
                            className={cn(
                                "material-symbols-outlined text-electric-blue transition-transform duration-300 flex-shrink-0 ml-2",
                                isExpanded && "rotate-180"
                            )}
                        >
                            expand_more
                        </span>
                    )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Expandable highlights section */}
                <div
                    className={cn(
                        "overflow-hidden transition-all duration-500 ease-out",
                        isExpanded ? "max-h-[2000px] opacity-100 mt-4 md:mt-6" : "max-h-0 opacity-0 mt-0"
                    )}
                >
                    <div className="border-t border-white/10 pt-4 md:pt-6">
                        <p className="text-[10px] text-electric-blue uppercase tracking-[0.2em] mb-3 md:mb-4">
                            {highlightsTitle}
                        </p>
                        <ul className="space-y-2 md:space-y-3">
                            {highlights.map((highlight, index) => (
                                <li
                                    key={index}
                                    className={cn(
                                        "flex items-start gap-2 md:gap-3 text-sm text-gray-400 transition-all duration-300",
                                        isExpanded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                    )}
                                    style={{
                                        transitionDelay: isExpanded ? `${index * 50}ms` : '0ms'
                                    }}
                                >
                                    <span className="material-symbols-outlined text-electric-blue text-sm mt-0.5 flex-shrink-0">
                                        arrow_right
                                    </span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
