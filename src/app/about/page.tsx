
"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    avatar: "👨‍💻",
    bio: "Former fitness coach turned tech entrepreneur. Passionate about making healthy eating accessible to everyone.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    avatar: "👩‍🔬",
    bio: "Nutritionist and UX designer. Combines science with beautiful design to create intuitive experiences.",
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    avatar: "👨‍🚀",
    bio: "Full-stack wizard with a love for PWAs. Building the future of health tech one commit at a time.",
  },
  {
    name: "Emma Rodriguez",
    role: "AI Engineer",
    avatar: "👩‍💼",
    bio: "Machine learning expert specializing in computer vision. Making food recognition smarter every day.",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Mission-Driven",
    description:
      "We believe everyone deserves access to tools that make healthy eating simple and enjoyable.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description:
      "Your health data is yours. We never sell your information and use encryption everywhere.",
  },
  {
    icon: "🌱",
    title: "Continuous Growth",
    description:
      "We're always learning and improving, just like we encourage our users to do.",
  },
  {
    icon: "💚",
    title: "User Love",
    description:
      "Every feature we build starts with understanding what our users truly need.",
  },
];

const milestones = [
  { year: "2023", event: "FitFork idea born from personal frustration with existing apps" },
  { year: "2023", event: "First prototype built and tested with 100 beta users" },
  { year: "2024", event: "AI food scanner launched with 95% accuracy" },
  { year: "2024", event: "Strava integration released, connecting fitness and nutrition" },
  { year: "2025", event: "50,000 active users milestone reached" },
  { year: "2025", event: "Cloud sync and cross-device support launched" },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Making Healthy Eating{" "}
              <span className="gradient-text">Effortless</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              We're on a mission to help millions of people build healthier
              relationships with food through intelligent technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At FitFork, we believe that tracking nutrition shouldn't feel
                like a chore. Too many people give up on their health goals
                because existing tools are complicated, time-consuming, or just
                plain boring.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're building the app we wished existed - one that uses AI to
                eliminate tedious data entry, provides beautiful insights that
                actually motivate, and works seamlessly across all your devices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal is simple: make healthy eating so easy that it becomes
                second nature.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl p-8 aspect-square max-w-md mx-auto flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-8xl mb-6"
                  >
                    🍴
                  </motion.div>
                  <div className="text-3xl font-bold mb-2">FitFork</div>
                  <div className="text-primary-100">Eat Smarter, Live Healthier</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a personal frustration to a product loved by thousands.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="ml-6 bg-white rounded-xl p-4 shadow-md flex-1">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind FitFork.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join Us on This Journey
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Be part of the FitFork community and transform your relationship
              with food.
            </p>
            <a
              href="https://app.fitfork.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Started Free 🚀
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
