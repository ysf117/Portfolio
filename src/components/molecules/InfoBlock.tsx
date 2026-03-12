import React from 'react';
import { cn } from '@/lib/utils';

interface InfoBlockProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({ title, children, className }) => {
    return (
        <div className={cn("", className)}>
            <h2 className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mb-4 font-bold">
                {title}
            </h2>
            <div>{children}</div>
        </div>
    );
};
