
"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📸",
    title: "AI Food Scanner",
    description:
      "Snap a photo of any meal and let our AI instantly identify ingredients and calculate nutrition facts.",
  },
  {
    icon: "📊",
    title: "Nutrition Tracking",
    description:
      "Track calories, macros, and micronutrients with beautiful charts and insights to reach your goals.",
  },
  {
    icon: "📖",
    title: "Recipe Management",
    description:
      "Save, organize, and discover healthy recipes. Import from URLs or create your own masterpieces.",
  },
  {
    icon: "⚖️",
    title: "Weight Tracking",
    description:
      "Monitor your progress with weight logging, trend analysis, and goal setting features.",
  },
  {
    icon: "🏃",
    title: "Strava Integration",
    description:
      "Sync your workouts from Strava to get accurate calorie burn data and complete health picture.",
  },
  {
    icon: "☁️",
    title: "Cloud Sync",
    description:
      "Your data syncs securely across all devices. Never lose your progress, access anywhere.",
  },
  {
    icon: "🎯",
    title: "Smart Goals",
    description:
      "Set personalized nutrition and fitness goals with AI-powered recommendations.",
  },
  {
    icon: "📱",
    title: "Works Offline",
    description:
      "Full PWA support means you can track meals even without internet connection.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Eat Better</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FitFork combines powerful tracking tools with intelligent insights
            to make healthy eating effortless and enjoyable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary-100 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-3xl mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
