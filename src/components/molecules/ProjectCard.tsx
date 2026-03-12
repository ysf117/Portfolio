import React from 'react';
import { Badge } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    title: string;
    category: string;
    year: string;
    description: string;
    techStack: string[];
    imageSrc: string;
    imagePosition?: 'left' | 'right';
    liveUrl?: string;
    repoUrl?: string;
    className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    category,
    year,
    description,
    techStack,
    imageSrc,
    imagePosition = 'left',
    liveUrl,
    repoUrl,
    className,
}) => {
    const imageSection = (
        <div className="aspect-[4/3] w-full overflow-hidden border-b md:border-b-0 swiss-border">
            <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80"
                style={{ backgroundImage: `url("${imageSrc}")` }}
            />
        </div>
    );

    const contentSection = (
        <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-bold text-electric-blue tracking-[0.2em] uppercase">
                        {category}
                    </span>
                    <span className="text-[10px] text-gray-600 tracking-widest">{year}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-electric-blue transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{description}</p>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-4">
                    {techStack.map((tech) => (
                        <Badge key={tech} label={tech} variant="outline" />
                    ))}
                </div>
                <div className="flex gap-6 items-center border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                    {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[10px] text-gray-400 hover:text-white transition-colors uppercase tracking-widest relative">
                            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                            <span>Live Site</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue transition-all group-hover:w-full"></span>
                        </a>
                    )}
                    {repoUrl && (
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[10px] text-gray-400 hover:text-white transition-colors uppercase tracking-widest relative">
                            <span className="material-symbols-outlined text-[14px]">code</span>
                            <span>Repository</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue transition-all group-hover:w-full"></span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <article className={cn("min-w-full snap-start md:border-r swiss-border bg-background-dark/50 group", className)}>
            <div className="grid md:grid-cols-2 h-full">
                {imagePosition === 'left' ? (
                    <>
                        <div className="md:border-r swiss-border">{imageSection}</div>
                        {contentSection}
                    </>
                ) : (
                    <>
                        <div className="order-last md:order-first">{contentSection}</div>
                        <div className="md:border-l swiss-border order-first md:order-last">{imageSection}</div>
                    </>
                )}
            </div>
        </article>
    );
};
