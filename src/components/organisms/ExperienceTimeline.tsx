import React from 'react';
import { SectionLabel } from '@/components/atoms';
import { TimelineEntry } from '@/components/molecules';
import { EXPERIENCE } from '@/data';
import { cn } from '@/lib/utils';

interface ExperienceTimelineProps {
    className?: string;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ className }) => {
    return (
        <section
            id="experience"
            className={cn("w-full py-24 px-6 md:px-16 border-b border-white/10", className)}
        >
            <div className="max-w-4xl">
                <SectionLabel number="02" title="Professional Journey" />
                <div className="flex flex-col">
                    {EXPERIENCE.map((exp, index) => (
                        <TimelineEntry
                            key={exp.role}
                            yearRange={exp.yearRange}
                            role={exp.role}
                            company={exp.company}
                            description={exp.description}
                            highlights={exp.highlights}
                            highlightsTitle={(exp as { highlightsTitle?: string }).highlightsTitle}
                            isFirst={exp.isFirst}
                            className={
                                index === EXPERIENCE.length - 1
                                    ? 'border-b border-white/10'
                                    : ''
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
