import React from 'react';
import { SectionLabel } from '@/components/atoms';
import { CONTACT_ROWS, PROFILE } from '@/data';
import { cn } from '@/lib/utils';

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer
            id="contact"
            className={cn(
                "w-full py-32 px-6 md:px-16 relative overflow-hidden",
                className
            )}
        >
            <div className="max-w-4xl relative z-10">
                <SectionLabel number="05" title="Initiate Collaboration" />
                <div className="flex flex-col border-t border-white/10">
                    {CONTACT_ROWS.map((row) => (
                        <div
                            key={row.label}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-white/10 group hover:bg-white/5 transition-colors px-2"
                        >
                            <span className="text-lg md:text-xl font-bold text-white mb-2 sm:mb-0">
                                {row.label}
                            </span>
                            <a
                                className="text-base md:text-lg text-gray-400 group-hover:text-electric-blue transition-colors font-mono tracking-tight"
                                href={row.href}
                                {...(row.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                                {row.value}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-24 pt-8 flex justify-between items-end">
                    <div className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] max-w-xs">
                        © 2026 {PROFILE.name}.
                        <br />
                        ALL RIGHTS RESERVED.
                    </div>
                    <div className="hidden md:block text-[10px] text-gray-700 font-mono">
                        {PROFILE.coordinates}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-full bg-electric-blue/5 blur-[120px] pointer-events-none" />
        </footer>
    );
};
