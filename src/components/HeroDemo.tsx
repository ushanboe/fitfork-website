"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingObjects = [
  {
    src: "/images/waterbottle.png",
    alt: "Water Bottle",
    size: 180,
    initialX: -200,
    initialY: -100,
    floatX: [-200, -180, -220, -200],
    floatY: [-100, -130, -80, -100],
    rotate: [0, 5, -5, 0],
    duration: 8,
    delay: 0,
  },
  {
    src: "/images/plate_of_food.png",
    alt: "Healthy Food",
    size: 280,
    initialX: 200,
    initialY: -50,
    floatX: [200, 220, 180, 200],
    floatY: [-50, -80, -30, -50],
    rotate: [0, -8, 8, 0],
    duration: 10,
    delay: 0.5,
  },
  {
    src: "/images/runningshoes.png",
    alt: "Running Shoes",
    size: 220,
    initialX: 150,
    initialY: 150,
    floatX: [150, 180, 120, 150],
    floatY: [150, 120, 180, 150],
    rotate: [0, 10, -10, 0],
    duration: 9,
    delay: 1,
  },
];

export default function HeroDemo() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Objects */}
      {floatingObjects.map((obj, index) => (
        <motion.div
          key={index}
          className="absolute z-10"
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: obj.initialX,
            y: obj.initialY,
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: obj.floatX,
            y: obj.floatY,
            rotate: obj.rotate,
          }}
          transition={{
            opacity: { duration: 1, delay: obj.delay },
            scale: { duration: 1, delay: obj.delay, type: "spring", bounce: 0.4 },
            x: { duration: obj.duration, repeat: Infinity, ease: "easeInOut", delay: obj.delay },
            y: { duration: obj.duration, repeat: Infinity, ease: "easeInOut", delay: obj.delay },
            rotate: { duration: obj.duration, repeat: Infinity, ease: "easeInOut", delay: obj.delay },
          }}
          style={{
            top: "50%",
            left: "50%",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 25px 50px rgba(16, 185, 129, 0.3))",
            }}
          >
            <Image
              src={obj.src}
              alt={obj.alt}
              width={obj.size}
              height={obj.size}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8"
          >
            <span className="text-emerald-400 text-sm font-medium">
              ✨ AI-Powered Nutrition Tracking
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Fuel Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Transformation
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl sm:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Track nutrition, discover recipes, and achieve your fitness goals 
            with the power of AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://app.fitfork.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full text-lg shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
            >
              Get Started Free 🚀
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-all"
            >
              See Features
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-30" />
    </section>
  );
}
