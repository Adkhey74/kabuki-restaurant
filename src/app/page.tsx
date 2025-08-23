"use client";


import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";


export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,0.1)_25%,rgba(220,38,38,0.1)_50%,transparent_50%,transparent_75%,rgba(220,38,38,0.1)_75%)] bg-[length:20px_20px]"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-red-700/20 rounded-full blur-xl animate-pulse delay-2000"></div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-32 left-10 w-4 h-4 bg-red-400 rounded-full opacity-60 pointer-events-none"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="fixed top-40 right-20 w-3 h-3 bg-yellow-400 rounded-full opacity-60 pointer-events-none"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="fixed bottom-32 left-1/3 w-2 h-2 bg-red-300 rounded-full opacity-60 pointer-events-none"
      ></motion.div>

      {/* Modern Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800 shadow-lg'
          : 'bg-black/90 backdrop-blur-xl border-b border-gray-900 shadow-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-white font-bold text-lg sm:text-xl">か</span>
                </motion.div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full border-2 border-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </div>
              <div className="block sm:hidden">
                <motion.h1
                  className="text-lg font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="text-red-400">歌舞伎</span>
                  <span className="text-gray-200 ml-1">KABUKI</span>
                </motion.h1>
              </div>
              <div className="hidden sm:block">
                <motion.h1
                  className="text-xl lg:text-2xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="text-red-400">歌舞伎</span>
                  <span className="text-gray-200 ml-2">KABUKI</span>
                </motion.h1>
                <motion.p
                  className="text-xs text-gray-400 -mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Restaurant Japonais
                </motion.p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              className="hidden lg:flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {['Menu', 'À propos', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace('à propos', 'about').replace(' ', '')}`}
                  className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-200 relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-200 group-hover:w-full"></span>
                </motion.a>
              ))}
            </motion.nav>

            {/* CTA Button */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="/reservation"
                className="hidden sm:inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(220, 38, 38, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </motion.svg>
                Réserver
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.svg
                  className="w-6 h-6 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="px-6 py-8 space-y-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {['Menu', 'À propos', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace('à propos', 'about').replace(' ', '')}`}
                    className="block text-gray-300 hover:text-red-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all duration-200 border-l-4 border-transparent hover:border-red-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{item}</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-gray-700">
                  <motion.a
                    href="/reservation"
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Réserver une table
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <motion.div
        className="hero min-h-screen pt-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/20250823_2314_Devanture Restaurant Japonais_remix_01k3cce0hrfyzvv279g3bdsg2m.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity,
          scale
        }}
      >
        <motion.div
          className="hero-overlay bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            {/* Main Title with dramatic styling */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-japanese mb-4 leading-none"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #dc2626 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(220, 38, 38, 0.3)'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                歌舞伎
              </motion.h1>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                KABUKI
              </motion.h2>
            </motion.div>

            {/* Subtitle with elegant typography */}
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.p
                className="text-lg sm:text-xl lg:text-2xl font-light mb-4 text-gray-200 px-4"
                whileHover={{ scale: 1.02 }}
              >
                L&apos;art culinaire japonais dans sa plus pure expression
              </motion.p>
              <motion.div
                className="w-16 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.div>

            {/* Description with better layout */}
            <motion.div
              className="mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Découvrez l&apos;authenticité de la cuisine japonaise dans un cadre traditionnel.
                Une expérience gastronomique unique qui vous transporte au cœur du Japon.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="#menu"
                className="group relative px-6 sm:px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full text-base sm:text-lg shadow-2xl overflow-hidden w-full sm:w-auto text-center"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Découvrir notre menu
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.div
                className="group relative px-6 sm:px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-full text-base sm:text-lg shadow-2xl overflow-hidden inline-block w-full sm:w-auto"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link href="/reservation" className="block">
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Réserver une table
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>


            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <motion.div
                className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-3 bg-white rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-70"
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-red-500 rounded-full opacity-60"
          animate={{
            y: [0, 30, 0],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full opacity-80"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Additional decorative elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full opacity-50"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-red-400 rounded-full opacity-60"
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        {/* Japanese-inspired decorative lines */}
        <motion.div
          className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-red-400 to-transparent opacity-30"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </motion.div>

      {/* Menu Section */}
      <section id="menu" className="relative py-20 overflow-hidden">
        {/* Modern Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(220,38,38,0.05)_50%,transparent_60%)]"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 0.8, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-red-400/10 to-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Header */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mb-6"></div>
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-japanese"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-white via-yellow-400 to-red-400 bg-clip-text text-transparent">
                  メニュー
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 mt-2 block">
                  Notre Menu
                </span>
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Découvrez notre sélection de plats authentiques préparés avec passion et respect des traditions japonaises.
              Chaque plat raconte une histoire, chaque saveur évoque un voyage.
            </motion.p>
          </div>

          {/* Modern Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Sushi Traditionnel",
                subtitle: "寿司",
                description: "Assortiment de sushi frais préparé par nos maîtres sushi avec des ingrédients d'exception.",
                price: "25€",
                image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                alt: "Sushi",
                category: "Signature",
                ingredients: ["Saumon", "Thon", "Avocat", "Riz vinaigré"]
              },
              {
                title: "Ramen Authentique",
                subtitle: "ラーメン",
                description: "Bouillon riche et nouilles al dente, une expérience gustative unique qui réchauffe l'âme.",
                price: "18€",
                image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                alt: "Ramen",
                category: "Classique",
                ingredients: ["Nouilles", "Bouillon", "Porc", "Œuf"]
              },
              {
                title: "Tempura",
                subtitle: "天ぷら",
                description: "Légumes et fruits de mer frits dans une pâte légère et croustillante, un délice japonais.",
                price: "22€",
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                alt: "Tempura",
                category: "Traditionnel",
                ingredients: ["Crevettes", "Légumes", "Pâte tempura", "Sauce"]
              }
            ].map((dish, index) => (
              <AnimatedSection key={dish.title} delay={index * 0.2}>
                <motion.div
                  className="group relative bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-xl h-full rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500"
                  whileHover={{
                    scale: 1.02,
                    y: -12,
                    boxShadow: "0 40px 80px -12px rgba(220, 38, 38, 0.4)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-semibold rounded-full border border-red-400/50 backdrop-blur-sm">
                      {dish.category}
                    </span>
                  </motion.div>

                  {/* Price Badge */}
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-sm font-bold rounded-full border border-yellow-400/50 backdrop-blur-sm shadow-lg">
                      {dish.price}
                    </div>
                  </motion.div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      src={dish.image}
                      alt={dish.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    {/* Modern Image Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Floating Elements on Image */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    {/* Title Section */}
                    <div className="mb-4">
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {dish.title}
                      </motion.h3>
                      <motion.p
                        className="text-yellow-400 font-medium text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        {dish.subtitle}
                      </motion.p>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 mb-6 leading-relaxed text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      {dish.description}
                    </motion.p>

                    {/* Ingredients */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <p className="text-xs text-gray-400 mb-2 font-medium">Ingrédients principaux :</p>
                      <div className="flex flex-wrap gap-2">
                        {dish.ingredients.map((ingredient, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Modern Action Button */}
                    <motion.div
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <motion.button
                        className="flex-1 mr-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center justify-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                          Commander
                        </span>
                      </motion.button>

                      <motion.button
                        className="p-3 bg-gray-800/50 text-gray-300 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-red-500/50"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Modern Decorative Elements */}
                  <div className="absolute top-3 left-3 w-2 h-2 bg-red-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-1000"></div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Voir le menu complet
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                className="text-5xl lg:text-6xl font-bold mb-8 font-japanese text-white"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                À propos de Kabuki
              </motion.h2>
              <motion.p
                className="text-xl mb-6 text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Fondé en 2020, le restaurant Kabuki vous invite à découvrir l&apos;art culinaire japonais dans toute sa splendeur.
                Notre équipe de chefs expérimentés prépare chaque plat avec passion et respect des traditions.
              </motion.p>
              <motion.p
                className="text-xl mb-8 text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Nous sélectionnons uniquement les meilleurs ingrédients frais pour vous offrir une expérience gastronomique
                authentique et mémorable.
              </motion.p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Stat Card 1 */}
                <motion.div
                  className="group relative bg-black/60 backdrop-blur-xl rounded-2xl border border-red-500/30 p-6 text-center hover:border-red-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-red-400 mb-2">4+</h3>
                    <p className="text-gray-300 font-medium">Années d&apos;expérience</p>
                  </div>
                </motion.div>

                {/* Stat Card 2 */}
                <motion.div
                  className="group relative bg-black/60 backdrop-blur-xl rounded-2xl border border-yellow-500/30 p-6 text-center hover:border-yellow-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-yellow-400 mb-2">10k+</h3>
                    <p className="text-gray-300 font-medium">Plats servis</p>
                  </div>
                </motion.div>

                {/* Stat Card 3 */}
                <motion.div
                  className="group relative bg-black/60 backdrop-blur-xl rounded-2xl border border-green-500/30 p-6 text-center hover:border-green-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-green-400 mb-2">98%</h3>
                    <p className="text-gray-300 font-medium">Clients satisfaits</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Restaurant Kabuki"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        {/* Modern Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(220,38,38,0.05)_50%,transparent_60%)]"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 0.8, 1],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Header */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mb-6"></div>
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-japanese"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-white via-yellow-400 to-red-400 bg-clip-text text-transparent">
                  お問い合わせ
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 mt-2 block">
                  Contact
                </span>
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Nous sommes là pour vous accueillir et répondre à toutes vos questions.
              N&apos;hésitez pas à nous contacter pour réserver votre table ou obtenir plus d&apos;informations.
            </motion.p>
          </div>

          {/* Modern Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <motion.h3
                className="text-3xl font-bold mb-8 text-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Informations de contact
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Address Card */}
                <motion.div
                  className="group relative bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 hover:border-red-500/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Adresse</h4>
                    <p className="text-gray-300 leading-relaxed">
                      123 Rue de la Gastronomie<br />
                      75001 Paris, France
                    </p>
                    <div className="mt-4">
                      <motion.button
                        className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="text-sm font-medium">Voir sur la carte</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                  className="group relative bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 hover:border-yellow-500/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Téléphone</h4>
                    <p className="text-gray-300 text-lg font-semibold mb-2">+33 1 23 45 67 89</p>
                    <div className="mt-4">
                      <motion.button
                        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="text-sm font-medium">Appeler maintenant</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Hours Card */}
                <motion.div
                  className="group relative bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 hover:border-green-500/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Horaires</h4>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>Lundi - Samedi</span>
                        <span className="font-semibold">12h - 14h30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lundi - Samedi</span>
                        <span className="font-semibold">19h - 22h30</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-600 pt-2">
                        <span>Dimanche</span>
                        <span className="text-red-400 font-semibold">Fermé</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  className="group relative bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 hover:border-blue-500/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                    <p className="text-gray-300 text-lg font-semibold mb-2">contact@kabuki.fr</p>
                    <div className="mt-4">
                      <motion.button
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="text-sm font-medium">Envoyer un email</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Information Sidebar */}
            <div className="lg:col-span-1">
              <motion.h3
                className="text-2xl font-bold mb-6 text-white"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Informations pratiques
              </motion.h3>

              <motion.div
                className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Informations importantes
                </h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start group">
                    <span className="text-red-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200">•</span>
                    <span>Réservation recommandée pour les groupes de 4+ personnes</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-red-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200">•</span>
                    <span>Annulation possible jusqu&apos;à 2h avant</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-red-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200">•</span>
                    <span>Tenue correcte exigée</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-red-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200">•</span>
                    <span>Service de 12h à 14h30 et de 19h à 22h30</span>
                  </li>
                </ul>
              </motion.div>

              {/* Quick Reservation CTA */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Link href="/reservation">
                  <motion.button
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      Réserver maintenant
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: scrolled ? 1 : 0,
          scale: scrolled ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-2xl flex items-center justify-center"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
          <motion.div
            className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white border-t border-gray-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.05),transparent_50%)]"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-8 h-8 bg-red-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-6 h-6 bg-yellow-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold font-japanese mb-4">
                  <span className="bg-gradient-to-r from-white via-yellow-400 to-red-400 bg-clip-text text-transparent">
                    歌舞伎
                  </span>
                  <span className="text-white ml-2">- KABUKI</span>
                </h3>
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                  Restaurant japonais authentique depuis 2020, où chaque plat raconte une histoire
                  et chaque saveur évoque un voyage au cœur du Japon.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4
                className="text-lg font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Navigation
              </motion.h4>
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <li>
                  <Link href="/#about" className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/#menu" className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/reservation" className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Réservation
                  </Link>
                </li>
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h4
                className="text-lg font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Contact
              </motion.h4>
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-red-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">123 Rue de la Gastronomie, 75001 Paris</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-yellow-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">+33 1 23 45 67 89</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">contact@kabuki.fr</span>
                </li>
              </motion.ul>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Restaurant Kabuki. Tous droits réservés.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm">
                CGV
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
