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
                  className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-white font-bold text-xl">か</span>
                </motion.div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
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
              className="lg:hidden bg-black border-t border-gray-800 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="px-4 py-6 space-y-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {['Menu', 'À propos', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace('à propos', 'about').replace(' ', '')}`}
                    className="block text-gray-300 hover:text-red-400 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.a
                  href="/reservation"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Réserver
                </motion.a>
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
                className="text-8xl lg:text-9xl font-bold font-japanese mb-4 leading-none"
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
                className="text-4xl lg:text-6xl font-bold tracking-wider"
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
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.p
                className="text-xl lg:text-2xl font-light mb-4 text-gray-200"
                whileHover={{ scale: 1.02 }}
              >
                L&apos;art culinaire japonais dans sa plus pure expression
              </motion.p>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.div>

            {/* Description with better layout */}
            <motion.div
              className="mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Découvrez l&apos;authenticité de la cuisine japonaise dans un cadre traditionnel.
                Une expérience gastronomique unique qui vous transporte au cœur du Japon.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="#menu"
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full text-lg shadow-2xl overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="relative z-10 flex items-center">
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
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-full text-lg shadow-2xl overflow-hidden inline-block"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link href="/reservation" className="block">
                  <span className="relative z-10 flex items-center">
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

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-red-500/10 rounded-full blur-xl"
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
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 bg-yellow-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 0.8, 1],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl lg:text-6xl font-bold text-white mb-6 font-japanese"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Notre Menu
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Découvrez notre sélection de plats authentiques préparés avec passion et respect des traditions japonaises.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sushi Traditionnel",
                description: "Assortiment de sushi frais préparé par nos maîtres sushi.",
                price: "À partir de 25€",
                image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                alt: "Sushi"
              },
              {
                title: "Ramen Authentique",
                description: "Bouillon riche et nouilles al dente, une expérience gustative unique.",
                price: "À partir de 18€",
                image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                alt: "Ramen"
              },
              {
                title: "Tempura",
                description: "Légumes et fruits de mer frits dans une pâte légère et croustillante.",
                price: "À partir de 22€",
                image: "https://images.unsplash.com/photo-1563379091339-03246963d60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                alt: "Tempura"
              }
            ].map((dish, index) => (
              <AnimatedSection key={dish.title} delay={index * 0.2}>
                <motion.div
                  className="group relative bg-black/60 backdrop-blur-xl h-full rounded-3xl border border-red-500/30 shadow-2xl overflow-hidden"
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 30px 60px -12px rgba(220, 38, 38, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden h-56">
                    <motion.img
                      src={dish.image}
                      alt={dish.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    {/* Image Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {/* Price Badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-red-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-red-400/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {dish.price}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <motion.h3
                      className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {dish.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 mb-4 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {dish.description}
                    </motion.p>

                    {/* Action Button */}
                    <motion.div
                      className="flex justify-end"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <motion.button
                        className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Commander
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-red-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
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
      <section id="contact" className="relative py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl lg:text-6xl font-bold text-white mb-6 font-japanese"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nous sommes là pour vous accueillir et répondre à toutes vos questions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.h3
                className="text-3xl font-bold mb-8 text-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Informations
              </motion.h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Adresse</h4>
                    <p className="text-gray-200">123 Rue de la Gastronomie<br />75001 Paris, France</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Téléphone</h4>
                    <p className="text-gray-200">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Horaires</h4>
                    <p className="text-gray-200">Lun-Sam: 12h-14h30, 19h-22h30<br />Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Informations pratiques</h3>
              <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <h4 className="font-semibold text-white mb-4">Informations importantes :</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Réservation recommandée pour les groupes de 4+ personnes
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Annulation possible jusqu&apos;à 2h avant
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Tenue correcte exigée
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Service de 12h à 14h30 et de 19h à 22h30
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: scrolled ? 1 : 0,
          scale: scrolled ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-2xl flex items-center justify-center"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-black text-white border-t border-gray-800">
        <div>
          <h3 className="text-2xl font-bold font-japanese">歌舞伎 - KABUKI</h3>
          <p className="font-bold">
            Restaurant japonais authentique <br />Depuis 2020
          </p>
          <p>Copyright © 2024 - Tous droits réservés</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link href="/#about" className="link link-hover">À propos</Link>
            <Link href="/#menu" className="link link-hover">Menu</Link>
            <Link href="/#contact" className="link link-hover">Contact</Link>
            <a className="link link-hover">Mentions légales</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
