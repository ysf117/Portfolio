'use client';

import React from 'react';
import { NavRailItem } from '@/components/molecules';
import { useActiveSection } from '@/hooks';
import { NAV_ITEMS } from '@/data';
import { cn } from '@/lib/utils';

interface NavigationRailProps {
    className?: string;
}

export const NavigationRail: React.FC<NavigationRailProps> = ({ className }) => {
    const activeSection = useActiveSection();

    return (
        <nav
            className={cn(
                "hidden md:flex flex-col w-20 h-screen fixed top-0 md:left-[320px] lg:left-[400px] border-r border-white/10 bg-[#050508]/95 backdrop-blur-sm z-40 items-center justify-center gap-8 flex-shrink-0",
                className
            )}
        >
            {NAV_ITEMS.map((item) => (
                <NavRailItem
                    key={item.href}
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    isActive={activeSection === item.sectionId}
                />
            ))}
        </nav>
    );
};
