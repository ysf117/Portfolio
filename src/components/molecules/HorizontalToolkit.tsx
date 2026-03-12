'use client';

import React from 'react';
import { Badge } from '@/components/atoms';
import { TOOLKIT } from '@/data';

export const HorizontalToolkit: React.FC = () => {
    // Combine relevant toolkit items
    const allSkills = [
        ...TOOLKIT.languages,
        ...TOOLKIT.technologies,
        ...TOOLKIT.projectManagement,
        ...TOOLKIT.design
    ];

    return (
        <div className="w-full mt-6 mb-8">
            {/* Section Label Style Heading */}
            <div className="flex items-center gap-4 mb-4 px-6 md:px-0">
                <div className="text-electric-blue font-bold tracking-widest text-[10px] uppercase whitespace-nowrap">
                    00 // Toolkit
                </div>
                <div className="w-full h-px bg-white/10" />
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar px-6 md:px-0 gap-2">
                {allSkills.map((skill) => (
                    <div key={skill} className="snap-start flex-shrink-0">
                        <Badge label={skill} />
                    </div>
                ))}
            </div>
        </div>
    );
};
