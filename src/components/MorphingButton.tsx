"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MorphingButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
}

const MorphingButton: React.FC<MorphingButtonProps> = ({
    children,
    onClick,
    className = "",
    variant = "primary",
    size = "md"
}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-semibold transition-all duration-300";

    const variantClasses = {
        primary: "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800",
        secondary: "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700",
        outline: "border-2 border-white/30 text-white hover:border-white/50 backdrop-blur-sm"
    };

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <motion.button
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Morphing Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%", skewX: -15 }}
                whileHover={{ x: "100%", skewX: -15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center">
                {children}
            </span>

            {/* Glow Effect */}
            <motion.div
                className="absolute inset-0 rounded-full opacity-0"
                style={{
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)"
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    );
};

export default MorphingButton;
