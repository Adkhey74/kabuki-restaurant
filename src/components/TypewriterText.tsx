"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
    text: string;
    speed?: number;
    delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
    text,
    speed = 100,
    delay = 0
}) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentIndex(0);
            setDisplayText("");
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-full bg-current ml-1"
            />
        </motion.span>
    );
};

export default TypewriterText;
