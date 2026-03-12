'use client';

import React from 'react';
import { ProfileImage, Badge } from '@/components/atoms';
import { InfoBlock } from '@/components/molecules';
import { useClipboard } from '@/hooks';
import { PROFILE, TOOLKIT, LANGUAGES } from '@/data';
import { cn } from '@/lib/utils';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const { isCopied, copyToClipboard } = useClipboard();

    return (
        <aside
            className={cn(
                "w-full md:w-[320px] lg:w-[400px] flex-shrink-0 h-screen border-r border-white/10 bg-[#050508] md:fixed md:left-0 md:top-0 md:flex flex-col justify-between p-8 lg:p-12 z-50 hidden overflow-y-auto hide-scrollbar",
                className
            )}
        >
            <div>
                {/* Profile Image */}
                <div className="mb-10 block">
                    <ProfileImage
                        src={PROFILE.profileImage}
                        hoverSrc={PROFILE.profileImageHover}
                        alt={PROFILE.name}
                        className="w-40 h-40"
                    />
                </div>

                {/* Name & Title */}
                <div className="mb-16">
                    <h1 className="text-2xl font-bold tracking-tighter text-white mb-2">
                        {PROFILE.name}
                    </h1>
                    <div className="h-1 w-8 bg-electric-blue mb-2" />
                    <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase leading-loose">
                        {PROFILE.title}
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </div>
                        <span className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase">
                            Available for work
                        </span>
                    </div>
                </div>

                {/* Info Blocks */}
                <div className="space-y-12">
                    <InfoBlock title="About">
                        <p className="text-sm text-gray-400 leading-relaxed font-light">
                            {PROFILE.about}
                        </p>
                    </InfoBlock>

                    <InfoBlock title="Coordinates">
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-center gap-3">
                                <button
                                    onClick={() => copyToClipboard(PROFILE.email)}
                                    className="flex items-center gap-3 group hover:text-white transition-colors text-left w-full"
                                    title="Click to copy email"
                                >
                                    <span
                                        className={cn(
                                            "material-symbols-outlined text-sm transition-colors",
                                            isCopied ? "text-emerald-500" : "text-electric-blue group-hover:text-white"
                                        )}
                                    >
                                        {isCopied ? 'check' : 'content_copy'}
                                    </span>
                                    <span className={cn(isCopied && "text-emerald-500 transition-colors")}>
                                        {isCopied ? 'Copied to clipboard!' : PROFILE.email}
                                    </span>
                                </button>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-electric-blue text-sm">
                                    location_on
                                </span>
                                {PROFILE.location}
                            </li>
                        </ul>
                    </InfoBlock>

                    <InfoBlock title="Toolkit">
                        <p className="text-[10px] text-electric-blue mb-2 uppercase tracking-widest">
                            Languages
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {TOOLKIT.languages.map((item) => (
                                <Badge key={item} label={item} />
                            ))}
                        </div>

                        <p className="text-[10px] text-electric-blue mb-2 uppercase tracking-widest">
                            Technologies
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {TOOLKIT.technologies.map((item) => (
                                <Badge key={item} label={item} />
                            ))}
                        </div>

                        <p className="text-[10px] text-electric-blue mb-2 uppercase tracking-widest">
                            Project Management
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {TOOLKIT.projectManagement.map((item) => (
                                <Badge key={item} label={item} />
                            ))}
                        </div>

                        <p className="text-[10px] text-electric-blue mb-2 uppercase tracking-widest">
                            Design
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {TOOLKIT.design.map((item) => (
                                <Badge key={item} label={item} />
                            ))}
                        </div>
                    </InfoBlock>

                    <InfoBlock title="Languages">
                        {LANGUAGES.map((lang, index) => (
                            <div
                                key={lang.name}
                                className={cn(
                                    "flex justify-between items-center text-sm text-gray-400 border-b border-white/5 pb-2",
                                    index < LANGUAGES.length - 1 && "mb-2"
                                )}
                            >
                                <span>{lang.name}</span>
                                <span className="text-xs text-electric-blue">{lang.level}</span>
                            </div>
                        ))}
                    </InfoBlock>
                </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-12 pt-8 border-t border-white/10">
                <a
                    className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-300"
                    href="https://www.linkedin.com/in/yusufminhas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
                <a
                    className="text-gray-500 hover:text-white transition-colors duration-300"
                    href="https://github.com/yusufminhas"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
                <a
                    className="text-gray-500 hover:text-[#FF0000] transition-colors duration-300"
                    href="https://www.youtube.com/@ym117-x6o"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                </a>
            </div>
        </aside>
    );
};
