"use client";

import { motion } from "framer-motion";
import { Camera, Barcode, Apple, Droplets, Scale, Dumbbell, Heart, Cloud, Smartphone, Download } from "lucide-react";
import Image from "next/image";

const mainFeatures = [
  {
    title: "Food Scanner",
    subtitle: "Powered with AI",
    description: "Take a photo and immediately see calculated nutritional data.",
    image: "/images/person_taking_photo__food.jpeg",
    stat: "AI Powered",
  },
  {
    title: "Recipes",
    subtitle: "Discover & Create",
    description: "Discover and Save recipes, or create your own.",
    image: "/images/recipe_book.jpeg",
    stat: "1000+ Recipes",
  },
  {
    title: "Weight Tracking",
    subtitle: "Track Progress",
    description: "See how your weight is tracking with visual charts and insights.",
    image: "/images/weight_scale.jpeg",
    stat: "Visual Charts",
  },
];

const additionalFeatures = [
  {
    icon: Barcode,
    title: "Barcode Scanner",
    description: "Scan ingredients and food products and see nutritional data.",
  },
  {
    icon: Apple,
    title: "Nutrition Tracking",
    description: "Track your intake of protein, fats, calories.",
  },
  {
    icon: Droplets,
    title: "Hydration",
    description: "Track your daily hydration, and keep your fish in water!",
  },
  {
    icon: Dumbbell,
    title: "Fitness Tracking",
    description: "Over 50 Exercise Types loaded. Garmin Connect Integration Coming Soon.",
  },
  {
    icon: Heart,
    title: "Menstrual Cycle Tracking",
    description: "Ladies - keep all your health tracking in one app!",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Seamlessly sync your data across all your devices with secure cloud backup.",
    image: "/images/phone_tablet_pc.jpeg",
  },
];

const steps = [
  {
    number: "01",
    title: "Install the App",
    description: "Add FitFork to your home screen in seconds. It's a Progressive Web App that works on any device.",
  },
  {
    number: "02",
    title: "Scan Your Meals",
    description: "Add your API Keys, Take a photo of your food and our AI will identify it instantly. Or download recipes and see nutritional data.",
  },
  {
    number: "03",
    title: "Track and Improve",
    description: "Monitor your progress, set goals, and watch your health transform over time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One App,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Complete Wellness
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to transform your health and fitness journey in one powerful app.
          </p>
        </motion.div>

        {/* Main Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                    {feature.stat}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-emerald-400 text-sm mb-3">{feature.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                <button className="text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Powerful Features</h3>
          <p className="text-gray-400">Everything you need to succeed</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 3 Simple Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Your Journey in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              3 Simple Steps
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 hover:border-emerald-500/30 transition-all text-center"
            >
              <div className="text-6xl font-bold text-emerald-500/20 mb-4">{step.number}</div>
              <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl p-12 border border-emerald-500/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Health Journey?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover the smarter way to track nutrition and achieve fitness goals
          </p>
          <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 mx-auto">
            <Download size={20} />
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
