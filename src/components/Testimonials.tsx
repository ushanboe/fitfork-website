
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Fitness Enthusiast",
    avatar: "👩‍🦰",
    content:
      "FitFork has completely changed how I approach nutrition. The AI scanner is incredibly accurate and saves me so much time logging meals!",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Marathon Runner",
    avatar: "👨‍💼",
    content:
      "The Strava integration is a game-changer. I can finally see my nutrition and training data in one place. My performance has improved significantly.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Busy Mom",
    avatar: "👩‍🍳",
    content:
      "As a mom of three, I needed something simple. FitFork's recipe management and meal planning features help me keep my family eating healthy.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Weight Loss Journey",
    avatar: "👨",
    content:
      "Lost 30 pounds in 4 months! The progress tracking and goal setting kept me motivated. Best health app I've ever used.",
    rating: 5,
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by <span className="text-primary-400">Thousands</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join our community of health-conscious individuals who have
            transformed their lives with FitFork.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary-500/30 transition-colors duration-300"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50K+", label: "Active Users" },
            { value: "2M+", label: "Meals Tracked" },
            { value: "500K+", label: "Recipes Saved" },
            { value: "4.9", label: "App Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
