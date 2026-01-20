"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📸",
    title: "AI-Powered Food Scanner",
    description:
      "Simply take a photo of your meal and let AI instantly identify foods and calculate nutrition. No more manual searching or guessing.",
  },
  {
    icon: "🍳",
    title: "Recipe Discovery",
    description:
      "Browse recipes from Spoonacular and TheMealDB. Save your favorites and get detailed nutrition information.",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description:
      "Monitor your weight, water intake, and nutrition over time with beautiful charts and insights to keep you motivated.",
  },
  {
    icon: "🏃",
    title: "Strava Integration",
    description:
      "Connect your Strava account to see your workouts alongside your nutrition data for a complete health picture.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-900 text-white overflow-hidden">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4">
            Why FitFork?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built for <span className="text-primary-400">Your Journey</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you&apos;re starting your health journey or optimizing your nutrition, 
            FitFork gives you the tools to succeed.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary-500/30 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-3xl mb-4">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Honest Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: "🆓", label: "Completely Free" },
            { icon: "🔒", label: "Your Data, Your Control" },
            { icon: "📱", label: "Works Offline" },
            { icon: "🚀", label: "No Account Required" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-3">
                {item.icon}
              </div>
              <div className="text-gray-300 font-medium">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://app.fitfork.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Journey
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
