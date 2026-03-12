import React from 'react';
import { SectionLabel } from '@/components/atoms';
import { CertificationCard } from '@/components/molecules';
import { CERTIFICATIONS } from '@/data';
import { cn } from '@/lib/utils';

interface CertificationGridProps {
    className?: string;
}

export const CertificationGrid: React.FC<CertificationGridProps> = ({ className }) => {
    return (
        <section
            id="certifications"
            className={cn("w-full py-40 px-6 md:px-16 border-b border-white/10", className)}
        >
            <div className="max-w-6xl">
                <SectionLabel number="04" title="Certifications" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
                    {CERTIFICATIONS.map((cert) => (
                        <CertificationCard
                            key={cert.title}
                            icon={cert.icon}
                            title={cert.title}
                            issuer={cert.issuer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
