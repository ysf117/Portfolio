import React from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string;
    label: string;
    isActive?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    label,
    isActive,
    className,
    ...props
}) => {
    return (
        <button
            className={cn(
                "group relative p-3 transition-all duration-300",
                className
            )}
            aria-label={label}
            {...props}
        >
            {/* Soft glow effect */}
            <span
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full blur-lg transition-opacity duration-300",
                    isActive ? "bg-electric-blue/40 opacity-100" : "bg-electric-blue/30 opacity-0 group-hover:opacity-100"
                )}
            />
            <span
                className={cn(
                    "material-symbols-outlined text-2xl transition-colors relative z-10",
                    isActive ? "text-electric-blue" : "text-gray-500 group-hover:text-electric-blue"
                )}
            >
                {icon}
            </span>
        </button>
    );
};
