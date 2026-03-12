'use client';

import { useState, useCallback } from 'react';

export function useClipboard(duration = 2000) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = useCallback((text: string) => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard not supported');
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), duration);
        }).catch((err) => {
            console.error('Failed to copy code', err);
        });
    }, [duration]);

    return { isCopied, copyToClipboard };
}
