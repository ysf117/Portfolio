import React from 'react';
import { SectionLabel } from '@/components/atoms';
import { EDUCATION } from '@/data';
import { cn } from '@/lib/utils';

interface EducationGridProps {
    className?: string;
}

export const EducationGrid: React.FC<EducationGridProps> = ({ className }) => {
    return (
        <section
            id="education"
            className={cn(
                "w-full py-32 px-6 md:px-16 border-b border-white/10 bg-black/40",
                className
            )}
        >
            <div className="max-w-5xl">
                <SectionLabel number="03" title="Academic Background" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EDUCATION.map((item) => (
                        <div
                            key={item.degree}
                            className="border border-white/10 p-8 hover:border-electric-blue/50 transition-colors bg-black/20"
                        >
                            <span
                                className={cn(
                                    "text-xs font-bold mb-4 block",
                                    item.isHighlighted ? "text-electric-blue" : "text-gray-500"
                                )}
                            >
                                {item.yearRange}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                            <p className="text-gray-400 text-sm mb-6">{item.institution}</p>
                            {item.focus && (
                                <>
                                    <div className="w-full h-px bg-white/10 mb-6" />
                                    <p className="text-[10px] text-silver/60 uppercase tracking-widest font-bold">
                                        {item.focus}
                                    </p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
