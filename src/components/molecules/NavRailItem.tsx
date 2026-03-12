'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconButton } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface NavRailItemProps {
    icon: string;
    label: string;
    href: string;
    isActive?: boolean;
    className?: string;
}

export const NavRailItem: React.FC<NavRailItemProps> = ({
    icon,
    label,
    href,
    isActive,
    className,
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <a
            href={href}
            className={cn("relative flex items-center", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <IconButton icon={icon} label={label} isActive={isActive} />
            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-full ml-4 px-3 py-1 bg-surface-dark border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap z-50"
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>
        </a>
    );
};
