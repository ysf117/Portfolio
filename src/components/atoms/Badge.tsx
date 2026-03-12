import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
    label: string;
    variant?: 'outline' | 'filled';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'outline', className }) => {
    return (
        <span
            className={cn(
                "text-[10px] uppercase tracking-wider px-2 py-1 cursor-default transition-colors",
                variant === 'outline' && "border border-white/10 text-gray-400 hover:border-electric-blue hover:text-white",
                variant === 'filled' && "bg-white/5 text-silver hover:bg-white/10",
                className
            )}
        >
            {label}
        </span>
    );
};
