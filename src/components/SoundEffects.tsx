"use client";

import { useEffect, useRef } from "react";

interface SoundEffectsProps {
    enabled?: boolean;
}

const SoundEffects: React.FC<SoundEffectsProps> = ({ enabled = true }) => {
    const hoverSoundRef = useRef<HTMLAudioElement>(null);
    const clickSoundRef = useRef<HTMLAudioElement>(null);
    const successSoundRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (!enabled) return;

        const playHoverSound = () => {
            if (hoverSoundRef.current) {
                hoverSoundRef.current.volume = 0.1;
                hoverSoundRef.current.currentTime = 0;
                hoverSoundRef.current.play().catch(() => { });
            }
        };

        const playClickSound = () => {
            if (clickSoundRef.current) {
                clickSoundRef.current.volume = 0.2;
                clickSoundRef.current.currentTime = 0;
                clickSoundRef.current.play().catch(() => { });
            }
        };

        const playSuccessSound = () => {
            if (successSoundRef.current) {
                successSoundRef.current.volume = 0.3;
                successSoundRef.current.currentTime = 0;
                successSoundRef.current.play().catch(() => { });
            }
        };

        // Add event listeners to interactive elements
        const interactiveElements = document.querySelectorAll('button, a, [role="button"]');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', playHoverSound);
            element.addEventListener('click', playClickSound);
        });

        // Add success sound to form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', playSuccessSound);
        });

        return () => {
            interactiveElements.forEach(element => {
                element.removeEventListener('mouseenter', playHoverSound);
                element.removeEventListener('click', playClickSound);
            });

            forms.forEach(form => {
                form.removeEventListener('submit', playSuccessSound);
            });
        };
    }, [enabled]);

    return (
        <>
            <audio
                ref={hoverSoundRef}
                preload="auto"
                src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"
            />
            <audio
                ref={clickSoundRef}
                preload="auto"
                src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"
            />
            <audio
                ref={successSoundRef}
                preload="auto"
                src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"
            />
        </>
    );
};

export default SoundEffects;
