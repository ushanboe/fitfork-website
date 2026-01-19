
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    id: "ai-scanner",
    icon: "📸",
    title: "AI Food Scanner",
    subtitle: "Instant nutrition from a photo",
    description:
      "Our advanced AI technology can identify foods from a single photo and instantly calculate nutritional information. No more manual searching or guessing portions.",
    benefits: [
      "Recognize thousands of foods and dishes",
      "Automatic portion size estimation",
      "Works with home-cooked and restaurant meals",
      "Continuous learning for better accuracy",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "recipes",
    icon: "📖",
    title: "Recipe Management",
    subtitle: "Your personal cookbook, digitized",
    description:
      "Save, organize, and discover healthy recipes all in one place. Import recipes from any URL, create your own, and get automatic nutrition calculations.",
    benefits: [
      "Import recipes from any website URL",
      "Automatic nutrition calculation per serving",
      "Organize with custom categories and tags",
      "Scale recipes for any number of servings",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "weight-tracking",
    icon: "⚖️",
    title: "Weight & Progress Tracking",
    subtitle: "Visualize your transformation",
    description:
      "Track your weight over time with beautiful charts and trend analysis. Set goals, monitor progress, and celebrate milestones on your health journey.",
    benefits: [
      "Daily, weekly, and monthly trend views",
      "Goal setting with progress indicators",
      "BMI and body composition tracking",
      "Export data for healthcare providers",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "cloud-sync",
    icon: "☁️",
    title: "Cloud Sync",
    subtitle: "Your data, everywhere",
    description:
      "Securely sync your data across all your devices. Start logging on your phone, continue on your tablet, review on your computer. Never lose your progress.",
    benefits: [
      "Real-time sync across all devices",
      "End-to-end encryption for privacy",
      "Automatic backup and restore",
      "Works offline with smart sync",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "strava",
    icon: "🏃",
    title: "Strava Integration",
    subtitle: "Connect your fitness data",
    description:
      "Sync your workouts from Strava to get a complete picture of your health. See calories burned, adjust nutrition goals, and optimize your performance.",
    benefits: [
      "Automatic workout import from Strava",
      "Accurate calorie burn calculations",
      "Activity-adjusted nutrition goals",
      "Training load insights",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "goals",
    icon: "🎯",
    title: "Nutrition Goals",
    subtitle: "Personalized targets for success",
    description:
      "Set and track personalized nutrition goals based on your objectives. Whether you're losing weight, building muscle, or maintaining, we've got you covered.",
    benefits: [
      "Customizable macro and calorie targets",
      "Goal-based meal suggestions",
      "Progress tracking and adjustments",
      "AI-powered recommendations",
    ],
    color: "from-teal-500 to-cyan-500",
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Features
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Powerful Tools for{" "}
              <span className="gradient-text">Healthy Living</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Discover all the features that make FitFork the ultimate companion
              for your health and nutrition journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                id={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-3xl mb-6 shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-primary-600 font-medium mb-4">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className={`relative bg-gradient-to-br ${feature.color} rounded-3xl p-8 aspect-square max-w-md mx-auto`}
                  >
                    <div className="absolute inset-0 bg-white/10 rounded-3xl" />
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-8xl mb-4">{feature.icon}</div>
                        <div className="text-2xl font-bold">{feature.title}</div>
                      </div>
                    </div>
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl"
                    >
                      ✨
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-2xl"
                    >
                      🎉
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience All Features?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start using FitFork today and discover how easy healthy eating can
              be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.fitfork.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Launch App 🚀
              </a>
              <Link href="/download" className="btn-secondary text-lg px-8 py-4">
                Installation Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
