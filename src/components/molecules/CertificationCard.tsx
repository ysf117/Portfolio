import React from 'react';
import { cn } from '@/lib/utils';

interface CertificationCardProps {
    icon: string;
    title: string;
    issuer: string;
    className?: string;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
    icon,
    title,
    issuer,
    className,
}) => {
    return (
        <div
            className={cn(
                "border-r border-b swiss-border p-8 flex flex-col items-start gap-4 group hover:bg-white/5 transition-colors",
                className
            )}
        >
            <span className="material-symbols-outlined text-3xl text-gray-600 group-hover:text-electric-blue transition-colors">
                {icon}
            </span>
            <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tighter mb-1">
                    {title}
                </h4>
                <p className="text-[10px] text-gray-500">{issuer}</p>
            </div>
        </div>
    );
};
