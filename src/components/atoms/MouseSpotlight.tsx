'use client';

import React, { useEffect } from 'react';
import {
    motion,
    useMotionValue,
    useSpring,
    useMotionTemplate,
} from 'framer-motion';

export const MouseSpotlight: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(59, 130, 246, 0.15), transparent 80%)`;

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none"
            style={{
                background,
                zIndex: -1,
            }}
        />
    );
};
