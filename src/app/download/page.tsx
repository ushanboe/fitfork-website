'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">FitFork</span> Now
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Install FitFork on your device and start your health journey today. It&apos;s free, fast, and works offline!
          </p>
        </motion.div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scan to Open App</h2>
            <div className="bg-white p-4 rounded-2xl inline-block border-4 border-green-500">
              <Image
                src="/images/qr-code.png"
                alt="Scan to open FitFork"
                width={200}
                height={200}
                className="w-48 h-48"
              />
            </div>
            <p className="mt-4 text-gray-500">Point your camera at the QR code</p>
            <a
              href="https://app.fitfork.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Or Click to Launch App 🚀
            </a>
          </div>
        </motion.div>
      </section>

      {/* Installation Instructions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Install as an App
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* iOS Instructions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">iPhone / iPad</h3>
                <p className="text-gray-500">iOS Installation</p>
              </div>
            </div>

            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <p className="font-medium text-gray-900">Open in Safari</p>
                  <p className="text-gray-500 text-sm">Visit app.fitfork.app in Safari browser</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="font-medium text-gray-900">Tap Share Button</p>
                  <p className="text-gray-500 text-sm">Tap the share icon at the bottom of Safari</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <p className="font-medium text-gray-900">Add to Home Screen</p>
                  <p className="text-gray-500 text-sm">Scroll down and tap &quot;Add to Home Screen&quot;</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <p className="font-medium text-gray-900">Tap Add</p>
                  <p className="text-gray-500 text-sm">Confirm by tapping &quot;Add&quot; in the top right</p>
                </div>
              </li>
            </ol>
          </motion.div>

          {/* Android Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.341c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm-11.046 0c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm11.405-6.02l1.9-3.29c.11-.18.05-.42-.13-.53-.18-.11-.42-.05-.53.13l-1.92 3.33c-1.45-.66-3.08-1.03-4.81-1.03s-3.36.37-4.81 1.03l-1.92-3.33c-.11-.18-.35-.24-.53-.13-.18.11-.24.35-.13.53l1.9 3.29C3.35 10.97 1.18 14.27 1 18h22c-.18-3.73-2.35-7.03-5.12-8.68z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Android</h3>
                <p className="text-gray-500">Android Installation</p>
              </div>
            </div>

            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <p className="font-medium text-gray-900">Open in Chrome</p>
                  <p className="text-gray-500 text-sm">Visit app.fitfork.app in Chrome browser</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="font-medium text-gray-900">Tap Menu</p>
                  <p className="text-gray-500 text-sm">Tap the three dots in the top right corner</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <p className="font-medium text-gray-900">Install App</p>
                  <p className="text-gray-500 text-sm">Tap &quot;Install app&quot; or &quot;Add to Home screen&quot;</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <p className="font-medium text-gray-900">Confirm Install</p>
                  <p className="text-gray-500 text-sm">Tap &quot;Install&quot; in the popup dialog</p>
                </div>
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* PWA Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Why Install as an App?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-green-100">Loads instantly, just like a native app</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📴</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Works Offline</h3>
              <p className="text-green-100">Access your data even without internet</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔔</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Home Screen Icon</h3>
              <p className="text-green-100">Quick access from your home screen</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
