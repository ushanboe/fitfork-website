'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 pt-24">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Policy</span>
          </h1>
          <p className="text-gray-500 mb-12">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                FitFork (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Account Information:</strong> Email address, name, and password when you create an account</li>
                <li><strong>Profile Information:</strong> Age, gender, height, weight, and health goals</li>
                <li><strong>Food & Nutrition Data:</strong> Meals logged, food photos, nutritional information</li>
                <li><strong>Health Metrics:</strong> Weight entries, water intake, fitness activities</li>
                <li><strong>Profile Photos:</strong> Optional profile pictures you upload</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                <li><strong>Usage Data:</strong> Features used, time spent in app, interaction patterns</li>
                <li><strong>Log Data:</strong> IP address, browser type, access times, crash reports</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Third-Party Data</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Fitness Services:</strong> Data from connected services like Strava, Fitbit, or Garmin (with your permission)</li>
                <li><strong>Food Databases:</strong> Nutritional information from third-party food databases</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Personalize your experience and provide tailored recommendations</li>
                <li>Process your transactions and manage your subscription</li>
                <li>Send you important updates, security alerts, and support messages</li>
                <li>Analyze usage patterns to improve app functionality</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
              <p className="text-gray-600 mb-4">
                Your data is stored securely using industry-standard practices:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Cloud Storage:</strong> Data is stored on secure servers provided by Supabase</li>
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS) and at rest</li>
                <li><strong>Access Controls:</strong> Strict access controls limit who can access your data</li>
                <li><strong>Regular Audits:</strong> We conduct regular security assessments</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing</h2>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mb-4">
                <p className="text-gray-700 font-semibold">
                  We do NOT sell your personal data to third parties.
                </p>
              </div>
              <p className="text-gray-600 mb-4">We may share your information only in these circumstances:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> With trusted partners who help us operate our services (hosting, analytics, payment processing)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Export:</strong> Download your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:help@fitfork.app" className="text-green-600 hover:text-green-700 font-semibold">
                  help@fitfork.app
                </a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Active Accounts:</strong> We retain your data while your account is active</li>
                <li><strong>Deleted Accounts:</strong> Data is permanently deleted within 30 days of account deletion</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer if required by law</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                <p className="text-gray-700">
                  FitFork is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at{' '}
                  <a href="mailto:help@fitfork.app" className="text-green-600 hover:text-green-700 font-semibold">
                    help@fitfork.app
                  </a>
                  . We will take steps to delete such information.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Users</h2>
              <p className="text-gray-600">
                If you are accessing FitFork from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States. By using our services, you consent to this transfer.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies and Tracking</h2>
              <p className="text-gray-600">
                We use essential cookies and similar technologies to provide and improve our services. We do not use third-party advertising cookies. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Your continued use of the App after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-gray-700 mb-4">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:help@fitfork.app" className="text-green-600 hover:text-green-700">
                    help@fitfork.app
                  </a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
