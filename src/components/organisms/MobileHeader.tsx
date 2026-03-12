'use client';

import React, { useState } from 'react';
import { PROFILE } from '@/data';
import { ProfileDrawer } from './ProfileDrawer';
import { ProfileImage } from '@/components/atoms';

export const MobileHeader: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <div className="md:hidden bg-[#0a0a0f] border-b border-white/10 sticky top-0 z-40 bg-opacity-95 backdrop-blur-sm">
                <div className="flex items-center px-6 py-4 gap-3">
                    {/* Left: Profile Info Trigger */}
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="relative flex-shrink-0 group"
                        aria-label="Open profile details"
                    >
                        <ProfileImage
                            src={PROFILE.profileImage}
                            hoverSrc={PROFILE.profileImageHover}
                            alt={PROFILE.name}
                            className="w-10 h-10 rounded-full relative z-10"
                        />
                        <div className="absolute bottom-0 right-0 z-20 flex h-2.5 w-2.5 translate-x-[10%] translate-y-[10%]">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-[#0a0a0f]"></span>
                        </div>
                    </button>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <h1 className="text-lg font-bold text-white mb-0.5">{PROFILE.name}</h1>
                            <button
                                onClick={() => setIsDrawerOpen(true)}
                                className="text-gray-500 hover:text-white transition-colors"
                                aria-label="Show info"
                            >
                                <span className="material-symbols-outlined text-xl">keyboard_arrow_down</span>
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight line-clamp-1">
                            Digital Operations & Tech Support
                        </p>
                    </div>
                </div>
            </div>

            {/* Profile Drawer */}
            <ProfileDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </>
    );
};
