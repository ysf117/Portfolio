import React from 'react';
import { cn } from '@/lib/utils';

interface SwissBorderProps {
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}

export const SwissBorder: React.FC<SwissBorderProps> = ({ orientation = 'horizontal', className }) => {
    return (
        <div
            className={cn(
                "bg-swiss-border",
                orientation === 'horizontal' ? "w-full h-px" : "h-full w-px",
                className
            )}
        />
    );
};
