import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
    text: string;
    className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className }) => {
    // Placeholder for future extensive glitch effect logic
    return (
        <h1 className={cn("text-2xl font-bold tracking-tighter text-white", className)}>
            {text}
        </h1>
    );
};
