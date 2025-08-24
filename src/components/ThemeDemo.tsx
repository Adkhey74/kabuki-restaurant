"use client";

import { motion } from "framer-motion";

const ThemeDemo: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 bg-black/90 backdrop-blur-xl rounded-2xl p-4 border border-gray-700/50 shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 3 }}
    >
      <div className="text-white text-sm">
        <p className="font-semibold mb-2">🎨 Test du Thème</p>
        <p className="text-gray-300 text-xs">
          Cliquez sur le bouton soleil/lune<br />
          en haut à droite pour changer de thème !
        </p>
      </div>
    </motion.div>
  );
};

export default ThemeDemo;
