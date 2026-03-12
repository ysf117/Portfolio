import React from 'react';
import { Sidebar, NavigationRail, MobileHeader, MobileNav } from '@/components/organisms';
import { cn } from '@/lib/utils';

interface SwissLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const SwissLayout: React.FC<SwissLayoutProps> = ({ children, className }) => {
    return (
        <div
            className={cn(
                "text-silver antialiased h-screen flex flex-col md:flex-row relative overflow-hidden",
                className
            )}
        >
            {/* Aurora Gradient Background */}
            <div className="fixed inset-0 aurora-bg" style={{ zIndex: -10 }} />

            {/* Glow Overlay */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -5 }}>
                <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full" />
                <div className="absolute -bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/15 blur-[150px] rounded-full" />
                <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 blur-[200px] rounded-full" />
            </div>

            {/* Sidebar - Fixed Left Panel (Desktop only) */}
            <Sidebar />

            {/* Navigation Rail - Fixed Vertical Bar (Desktop only) */}
            <NavigationRail />

            {/* Main Content Area - Scrollable */}
            <main className="flex-1 relative bg-transparent overflow-y-auto h-screen md:ml-[320px] lg:ml-[400px] md:pl-20 pb-24 md:pb-0">
                {/* Mobile Header (Name/Title) */}
                <MobileHeader />

                {children}
            </main>

            {/* Mobile Bottom Navigation (Sticky) */}
            <MobileNav />
        </div>
    );
};
