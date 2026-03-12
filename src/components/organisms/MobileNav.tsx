'use client';

import React from 'react';
import { useActiveSection } from '@/hooks';
import { NAV_ITEMS } from '@/data';

export const MobileNav: React.FC = () => {
    const activeSection = useActiveSection();

    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
            <nav className="flex justify-around items-center py-3 px-4">
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={`relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${activeSection === item.sectionId
                                ? 'text-electric-blue'
                                : 'text-gray-500 hover:text-white'
                            }`}
                        aria-label={item.label}
                    >
                        {/* Blue glow behind active icon */}
                        {activeSection === item.sectionId && (
                            <div className="absolute inset-0 bg-electric-blue/20 blur-lg rounded-full" />
                        )}
                        <span className="material-symbols-outlined text-2xl relative z-10">{item.icon}</span>
                    </a>
                ))}
            </nav>
        </div>
    );
};
