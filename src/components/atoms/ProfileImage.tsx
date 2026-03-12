import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProfileImageProps {
    src: string;
    hoverSrc?: string;
    alt: string;
    className?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ src, hoverSrc, alt, className }) => {
    return (
        <div className={cn("relative w-24 h-24 overflow-hidden border border-white/10 hover:border-electric-blue group-hover:border-electric-blue hover:shadow-[0_0_25px_rgba(0,191,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,191,255,0.3)] transition-all duration-500 group", className)}>
            {/* Base Image (B&W) */}
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover contrast-125 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Hover Image (Color) - Fades in on hover */}
            {hoverSrc && (
                <Image
                    src={hoverSrc}
                    alt={alt}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            )}
        </div>
    );
};
