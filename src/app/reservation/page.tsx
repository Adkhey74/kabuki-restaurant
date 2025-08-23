"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ReservationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
    occasion: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler un envoi
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

      {/* Navigation */}
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
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => router.push('/')}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
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
                  <span className="text-white"> - KABUKI</span>
                </motion.h1>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              className="hidden lg:flex items-center space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/" className="block">
                  Accueil
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </motion.div>
              {['Menu', 'À propos', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`/#${item.toLowerCase().replace('à propos', 'about').replace(' ', '')}`}
                  className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-200 relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-200 group-hover:w-full"></span>
                </motion.a>
              ))}
            </motion.nav>

            {/* Back Button */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                onClick={() => router.push('/')}
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(220, 38, 38, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span className="hidden sm:inline">Retour</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
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
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h1
                className="text-6xl lg:text-8xl font-bold font-japanese mb-4 leading-none"
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
                予約
              </motion.h1>
              <motion.h2
                className="text-3xl lg:text-5xl font-bold tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                RÉSERVATION
              </motion.h2>
            </motion.div>

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
                Réservez votre expérience culinaire inoubliable
              </motion.p>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Reservation Form Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(220,38,38,0.05)_50%,transparent_100%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(245,158,11,0.03)_50%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Réservez votre table
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Remplissez le formulaire ci-dessous pour réserver votre table et vivre une expérience gastronomique exceptionnelle.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {!isSubmitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="bg-black/80 rounded-3xl shadow-2xl border border-red-500/20 backdrop-blur-md p-8 lg:p-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-200 mb-3">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border-2 border-gray-600 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-gray-800/50 focus:bg-gray-800 text-white placeholder-gray-400"
                          placeholder="Votre nom complet"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-200 mb-3">
                        Email *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border-2 border-gray-600 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-gray-800/50 focus:bg-gray-800 text-white placeholder-gray-400"
                          placeholder="votre@email.com"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-200 mb-3">
                        Téléphone
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border-2 border-gray-600 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-gray-800/50 focus:bg-gray-800 text-white placeholder-gray-400"
                          placeholder="+33 1 23 45 67 89"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-200 mb-3">
                        Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-6 py-4 border-2 border-gray-600 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-gray-800/50 focus:bg-gray-800 text-white"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-200 mb-3">
                        Heure *
                      </label>
                      <div className="relative">
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border-2 border-gray-600 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-gray-800/50 focus:bg-gray-800 text-white appearance-none"
                        >
                          <option value="">Choisir une heure</option>
                          <option value="12:00">12:00</option>
                          <option value="12:30">12:30</option>
                          <option value="13:00">13:00</option>
                          <option value="13:30">13:30</option>
                          <option value="19:00">19:00</option>
                          <option value="19:30">19:30</option>
                          <option value="20:00">20:00</option>
                          <option value="20:30">20:30</option>
                          <option value="21:00">21:00</option>
                          <option value="21:30">21:30</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-200 mb-3">
                        Nombre de personnes *
                      </label>
                      <div className="relative">
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border-2 border-gray-600 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-gray-800/50 focus:bg-gray-800 text-white appearance-none"
                        >
                          <option value="1">1 personne</option>
                          <option value="2">2 personnes</option>
                          <option value="3">3 personnes</option>
                          <option value="4">4 personnes</option>
                          <option value="5">5 personnes</option>
                          <option value="6">6 personnes</option>
                          <option value="7+">7+ personnes</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-200 mb-3">
                        Occasion
                      </label>
                      <div className="relative">
                        <select
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border-2 border-gray-600 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-gray-800/50 focus:bg-gray-800 text-white appearance-none"
                        >
                          <option value="">Aucune occasion spéciale</option>
                          <option value="anniversary">Anniversaire</option>
                          <option value="birthday">Anniversaire de naissance</option>
                          <option value="business">Dîner d&apos;affaires</option>
                          <option value="date">Rendez-vous</option>
                          <option value="family">Dîner en famille</option>
                          <option value="other">Autre</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-200 mb-3">
                      Demandes spéciales
                    </label>
                    <div className="relative">
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-6 py-4 border-2 border-gray-600 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-gray-800/50 focus:bg-gray-800 text-white placeholder-gray-400 resize-none"
                        placeholder="Allergies, préférences alimentaires, demandes spéciales..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white font-bold py-6 rounded-2xl hover:from-red-700 hover:via-red-800 hover:to-red-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-lg">Traitement en cours...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-lg">Confirmer ma réservation</span>
                      </div>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  className="bg-black/80 rounded-3xl shadow-2xl border border-green-500/20 backdrop-blur-md p-12 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Réservation confirmée !</h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Votre réservation a été enregistrée avec succès. Nous vous enverrons une confirmation par email.
                  </p>
                  <motion.button
                    onClick={() => router.push('/')}
                    className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Retour à l&apos;accueil
                  </motion.button>
                </motion.div>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <motion.div
                className="bg-black/80 rounded-3xl shadow-2xl border border-gray-700/50 backdrop-blur-md p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Horaires d&apos;ouverture</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Lundi - Samedi</span>
                    <span className="text-white font-semibold">12h - 14h30</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Lundi - Samedi</span>
                    <span className="text-white font-semibold">19h - 22h30</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Dimanche</span>
                    <span className="text-red-400 font-semibold">Fermé</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-black/80 rounded-3xl shadow-2xl border border-gray-700/50 backdrop-blur-md p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Informations importantes</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">•</span>
                    Réservation recommandée pour les groupes de 4+ personnes
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">•</span>
                    Annulation possible jusqu&apos;à 2h avant
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">•</span>
                    Tenue correcte exigée
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">•</span>
                    Service de 12h à 14h30 et de 19h à 22h30
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-black/80 rounded-3xl shadow-2xl border border-gray-700/50 backdrop-blur-md p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">contact@kabuki.fr</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Back Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.button
          onClick={() => router.push('/')}
          className="group relative w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-2xl flex items-center justify-center"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>

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
          className="group relative w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full shadow-2xl flex items-center justify-center"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
