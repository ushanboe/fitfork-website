'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    { icon: '🎯', title: 'Mission-Driven', description: 'We believe everyone deserves access to tools that make healthy living simple and enjoyable.' },
    { icon: '🔒', title: 'Privacy First', description: 'Your health data belongs to you. We never sell your information to third parties.' },
    { icon: '💡', title: 'Innovation', description: 'We leverage cutting-edge AI to make food tracking effortless and accurate.' },
    { icon: '🤝', title: 'Community', description: 'Built with feedback from thousands of users who share our vision for better health.' },
  ];

  const timeline = [
    { year: '2024', title: 'The Idea', description: 'FitFork was born from a simple frustration: why is tracking food so tedious?' },
    { year: '2024', title: 'Development', description: 'Built with modern tech stack focusing on speed, privacy, and user experience.' },
    { year: '2025', title: 'Launch', description: 'Released to the public with AI food scanning and recipe discovery.' },
    { year: '2025', title: 'Growing', description: 'Continuously improving based on user feedback and adding new features.' },
  ];

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
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo-icon.png"
              alt="FitFork"
              width={120}
              height={120}
              className="w-28 h-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">FitFork</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re on a mission to make healthy eating simple, enjoyable, and accessible to everyone.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              FitFork was created with a simple belief: tracking your food and health shouldn&apos;t feel like a chore. We&apos;ve combined the power of AI with beautiful design to create an app that makes healthy living feel effortless.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Whether you&apos;re trying to lose weight, build muscle, or simply eat better, FitFork gives you the tools and insights you need — without the complexity of traditional calorie counters.
            </p>
            <p className="text-lg text-gray-600">
              Our AI-powered food scanner recognizes meals instantly, our recipe library inspires healthy cooking, and our progress tracking keeps you motivated on your journey.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-100 to-orange-100 rounded-3xl p-8 flex items-center justify-center">
              <Image
                src="/images/logo-icon.png"
                alt="FitFork Mission"
                width={300}
                height={300}
                className="w-64 h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Our Values
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                    <span className="text-green-500 font-bold">{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-green-500 rounded-full z-10 hidden md:block" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already transforming their health with FitFork.
          </p>
          <a
            href="https://app.fitfork.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Get Started Free
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
