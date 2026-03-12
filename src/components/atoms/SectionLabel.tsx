import React from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
    number: string;
    title: string;
    className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ number, title, className }) => {
    return (
        <div className={cn("flex items-center gap-4 mb-12", className)}>
            <div className="text-electric-blue font-bold tracking-widest text-[10px] uppercase whitespace-nowrap">
                {number} // {title}
            </div>
            <div className="w-full max-w-7xl h-px bg-white/10" />
        </div>
    );
};
