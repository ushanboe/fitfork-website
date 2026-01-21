'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 pt-24">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Service</span>
          </h1>
          <p className="text-gray-500 mb-12">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing or using FitFork (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App. We reserve the right to modify these terms at any time, and your continued use of the App constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-600 mb-4">FitFork is a food and health tracking application that allows users to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Log and track food intake and nutrition</li>
                <li>Monitor water consumption</li>
                <li>Track weight and fitness goals</li>
                <li>Sync with third-party fitness services (Premium)</li>
                <li>Access advanced analytics and insights (Premium)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscription Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Free Tier</h3>
              <p className="text-gray-600 mb-4">
                The Free tier provides basic functionality at no cost. Free tier features may be modified or limited at our discretion.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Premium Subscriptions</h3>
              <p className="text-gray-600 mb-2">FitFork offers the following premium subscription options:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Monthly:</strong> $4.99 per month, billed monthly</li>
                <li><strong>Annual:</strong> $29.99 per year, billed annually (save 50%)</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Billing</h3>
              <p className="text-gray-600">
                Payment is processed securely through Stripe. By subscribing, you authorize us to charge your payment method on a recurring basis. You are responsible for keeping your payment information current.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation Policy</h2>
              <p className="text-gray-600 mb-4">You may cancel your subscription at any time:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Through the App settings</li>
                <li>By contacting support at help@fitfork.app</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Upon cancellation, you will retain access to premium features until the end of your current billing period. No partial refunds are provided for unused time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Policy</h2>
              <p className="text-gray-600 mb-4">
                We offer a 7-day money-back guarantee for first-time premium subscribers. To request a refund:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Contact us within 7 days of your initial subscription purchase</li>
                <li>Email help@fitfork.app with your account email and reason for the refund request</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Refunds are processed within 5-10 business days. Refunds are not available for renewal charges or after the 7-day period.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate information when creating your account</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the App only for lawful purposes</li>
                <li>Not attempt to reverse engineer or exploit the App</li>
                <li>Not share your account with others</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Health Disclaimer</h2>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Important:</strong> FitFork provides nutritional information and tracking tools for educational and informational purposes only. The App is not intended to provide medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals before making changes to your diet or exercise routine.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600">
                FitFork is provided &quot;as is&quot; without warranties of any kind. We are not liable for any damages arising from your use of the App, including but not limited to health decisions made based on App information, data loss, or service interruptions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-600">
                We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our discretion. Upon termination, your right to use the App ceases immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-gray-700 mb-2">For questions about these Terms of Service, please contact us:</p>
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
