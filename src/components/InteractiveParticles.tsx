"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    speed: number;
}

const InteractiveParticles: React.FC = () => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Initialize particles
        const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 4 + 1,
            color: ['#dc2626', '#fbbf24', '#ffffff'][Math.floor(Math.random() * 3)],
            speed: Math.random() * 2 + 0.5
        }));
        setParticles(initialParticles);

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-10">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                        left: particle.x,
                        top: particle.y,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: particle.speed * 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    whileHover={{
                        scale: 2,
                        opacity: 1
                    }}
                />
            ))}

            {/* Mouse follower particle */}
            <motion.div
                className="absolute w-2 h-2 bg-red-400 rounded-full pointer-events-none"
                style={{
                    left: mousePosition.x - 4,
                    top: mousePosition.y - 4,
                }}
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default InteractiveParticles;
