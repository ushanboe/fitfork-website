
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6"
            >
              <span className="text-sm font-medium text-primary-700">
                🎉 Now with AI-Powered Food Scanning
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Eat Smarter,{" "}
              <span className="gradient-text">Live Healthier</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              FitFork is your intelligent companion for tracking nutrition,
              managing recipes, and achieving your health goals. Scan food with
              AI, sync with Strava, and transform your wellness journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://app.fitfork.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Started Free 🚀
              </a>
              <a href="/features" className="btn-secondary text-lg px-8 py-4">
                Explore Features
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500"
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Free to use
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No account required
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Works offline
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* App Screen Mockup */}
                    <div className="aspect-[9/19] bg-gradient-to-b from-primary-50 to-white p-4">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-gray-400 rounded-sm" />
                          <div className="w-4 h-2 bg-gray-400 rounded-sm" />
                          <div className="w-6 h-3 bg-primary-500 rounded-sm" />
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="space-y-4">
                        <div className="text-center">
                          <span className="text-4xl">🍴</span>
                          <h3 className="text-lg font-bold text-gray-900 mt-2">
                            FitFork
                          </h3>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-xl p-3 shadow-sm">
                            <div className="text-2xl mb-1">🔥</div>
                            <div className="text-xs text-gray-500">Calories</div>
                            <div className="text-lg font-bold text-gray-900">
                              1,847
                            </div>
                          </div>
                          <div className="bg-white rounded-xl p-3 shadow-sm">
                            <div className="text-2xl mb-1">💪</div>
                            <div className="text-xs text-gray-500">Protein</div>
                            <div className="text-lg font-bold text-gray-900">
                              94g
                            </div>
                          </div>
                        </div>

                        {/* Food Item */}
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="text-3xl">🥗</div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 text-sm">
                                Grilled Chicken Salad
                              </div>
                              <div className="text-xs text-gray-500">
                                450 cal • 35g protein
                              </div>
                            </div>
                            <div className="text-primary-500">✓</div>
                          </div>
                        </div>

                        {/* Scan Button */}
                        <div className="flex justify-center">
                          <div className="bg-primary-500 text-white rounded-full px-6 py-2 text-sm font-medium shadow-lg">
                            📸 Scan Food
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-8 bg-white rounded-2xl p-4 shadow-xl z-20"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="text-xs text-gray-500">Daily Goal</div>
                    <div className="font-bold text-primary-600">92%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-8 bg-white rounded-2xl p-4 shadow-xl z-20"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏃</span>
                  <div>
                    <div className="text-xs text-gray-500">Strava Sync</div>
                    <div className="font-bold text-accent-orange">Connected</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
