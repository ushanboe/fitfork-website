
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const iosSteps = [
  {
    step: 1,
    icon: "🌐",
    title: "Open Safari",
    description: "Navigate to app.fitfork.app using Safari browser (required for iOS).",
  },
  {
    step: 2,
    icon: "📤",
    title: "Tap Share Button",
    description: "Tap the share button at the bottom of the screen (square with arrow pointing up).",
  },
  {
    step: 3,
    icon: "➕",
    title: "Add to Home Screen",
    description: "Scroll down and tap 'Add to Home Screen' option.",
  },
  {
    step: 4,
    icon: "✅",
    title: "Confirm Installation",
    description: "Tap 'Add' in the top right corner. FitFork is now on your home screen!",
  },
];

const androidSteps = [
  {
    step: 1,
    icon: "🌐",
    title: "Open Chrome",
    description: "Navigate to app.fitfork.app using Chrome browser.",
  },
  {
    step: 2,
    icon: "⋮",
    title: "Open Menu",
    description: "Tap the three dots menu in the top right corner.",
  },
  {
    step: 3,
    icon: "📲",
    title: "Install App",
    description: "Tap 'Install app' or 'Add to Home screen' option.",
  },
  {
    step: 4,
    icon: "✅",
    title: "Confirm Installation",
    description: "Tap 'Install' in the popup. FitFork is now installed!",
  },
];

export default function DownloadPage() {
  const [activeTab, setActiveTab] = useState<"ios" | "android">("ios");

  const steps = activeTab === "ios" ? iosSteps : androidSteps;

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
              Download
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get FitFork on{" "}
              <span className="gradient-text">Your Device</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              FitFork is a Progressive Web App (PWA) - no app store needed!
              Install it directly from your browser in seconds.
            </p>

            {/* Quick Launch Button */}
            <motion.a
              href="https://app.fitfork.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              <span className="mr-2">🚀</span>
              Launch FitFork Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-12 bg-white">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Scan to Open on Mobile
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              {/* QR Code Placeholder - Using a visual representation */}
              <div className="w-48 h-48 bg-gray-900 rounded-xl p-4 relative">
                <div className="absolute inset-4 grid grid-cols-7 grid-rows-7 gap-1">
                  {/* QR Code pattern simulation */}
                  {Array.from({ length: 49 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${
                        [0, 1, 2, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42, 43, 44, 46, 47, 48].includes(i)
                          ? "bg-white"
                          : Math.random() > 0.5
                          ? "bg-white"
                          : "bg-gray-900"
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-2">
                    <span className="text-2xl">🍴</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-500 mt-4 text-sm">
              Point your camera at the QR code to open app.fitfork.app
            </p>
          </motion.div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Installation Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to install FitFork on your device.
            </p>
          </motion.div>

          {/* Platform Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab("ios")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "ios"
                    ? "bg-primary-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🍎 iOS (iPhone/iPad)
              </button>
              <button
                onClick={() => setActiveTab("android")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "android"
                    ? "bg-primary-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🤖 Android
              </button>
            </div>
          </div>

          {/* Steps */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="text-sm font-medium text-primary-600 mr-2">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why a PWA?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Progressive Web Apps offer the best of both worlds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Instant Updates",
                description:
                  "Always get the latest version automatically. No manual updates needed.",
              },
              {
                icon: "💾",
                title: "No Storage Bloat",
                description:
                  "Takes minimal space on your device compared to traditional apps.",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                description:
                  "Runs in a secure browser environment with your data protected.",
              },
              {
                icon: "📴",
                title: "Works Offline",
                description:
                  "Full functionality even without internet connection.",
              },
              {
                icon: "🌍",
                title: "Cross-Platform",
                description:
                  "Same great experience on iOS, Android, and desktop.",
              },
              {
                icon: "🚀",
                title: "Fast & Lightweight",
                description:
                  "Loads instantly and runs smoothly on any device.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Launch FitFork now and begin your journey to healthier eating.
            </p>
            <a
              href="https://app.fitfork.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Open FitFork 🍴
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
