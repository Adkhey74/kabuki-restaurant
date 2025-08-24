"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const [showControls, setShowControls] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };

    return (
        <>
            <audio
                ref={audioRef}
                loop
                preload="metadata"
                src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            />

            <motion.div
                className="fixed bottom-6 left-6 z-50"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2 }}
            >
                {/* Main Button */}
                <motion.button
                    onClick={() => setShowControls(!showControls)}
                    className="group relative w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full shadow-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <motion.div
                        animate={{ rotate: isPlaying ? 360 : 0 }}
                        transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                    </motion.div>

                    {/* Pulse Effect */}
                    <motion.div
                        className="absolute inset-0 bg-red-400 rounded-full opacity-0"
                        animate={isPlaying ? { scale: [1, 1.2, 1], opacity: [0, 0.5, 0] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.button>

                {/* Controls Panel */}
                <AnimatePresence>
                    {showControls && (
                        <motion.div
                            className="absolute bottom-16 left-0 bg-black/90 backdrop-blur-xl rounded-2xl p-4 border border-gray-700/50 shadow-2xl"
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="space-y-4 min-w-[200px]">
                                {/* Play/Pause Button */}
                                <motion.button
                                    onClick={togglePlay}
                                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-xl font-semibold"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isPlaying ? "⏸️ Pause" : "▶️ Play"}
                                </motion.button>

                                {/* Volume Control */}
                                <div className="space-y-2">
                                    <label className="text-white text-sm font-medium">Volume</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={volume}
                                        onChange={handleVolumeChange}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                </div>

                                {/* Status */}
                                <div className="text-center">
                                    <p className="text-gray-300 text-xs">
                                        {isPlaying ? "🎵 Musique d'ambiance" : "🔇 En pause"}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default AudioPlayer;
