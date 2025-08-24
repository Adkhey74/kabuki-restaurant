"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Critique gastronomique",
    content: "Une expérience culinaire exceptionnelle ! Les saveurs authentiques du Japon transportent directement à Tokyo. Le service est impeccable et l'ambiance est magique.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Pierre Martin",
    role: "Chef cuisinier",
    content: "En tant que professionnel, je peux dire que Kabuki respecte parfaitement les traditions culinaires japonaises. Chaque plat est une œuvre d'art.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Sophie Chen",
    role: "Influenceuse food",
    content: "Les photos ne rendent pas justice à la beauté des plats ! L'attention aux détails est incroyable. Un must-visit pour tous les amateurs de cuisine japonaise.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Thomas Leroy",
    role: "Entrepreneur",
    content: "Parfait pour les dîners d'affaires. L'ambiance est sophistiquée et les plats impressionnent toujours mes clients. Service professionnel au top !",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Navigation Buttons */}
      <motion.button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/80 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-gray-700/50 shadow-lg"
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/80 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-gray-700/50 shadow-lg"
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Carousel */}
      <div className="relative h-80 overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full"
          >
            <div className="bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 h-full">
              <div className="flex flex-col h-full">
                {/* Quote Icon */}
                <motion.div
                  className="text-red-400 mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </motion.div>

                {/* Content */}
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </motion.p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover border-2 border-red-500/50"
                      />
                    </motion.div>
                    <div>
                      <motion.h4
                        className="text-white font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {testimonials[currentIndex].name}
                      </motion.h4>
                      <motion.p
                        className="text-gray-400 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        {testimonials[currentIndex].role}
                      </motion.p>
                    </div>
                  </div>

                  {/* Rating */}
                  <motion.div
                    className="flex space-x-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {renderStars(testimonials[currentIndex].rating)}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-red-500' : 'bg-gray-600'
              }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
