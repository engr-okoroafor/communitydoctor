import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, CheckCircle, AlertTriangle, Scale, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import BoltBadge from '../components/BoltBadge';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-medical-primary hover:text-medical-secondary transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Home</span>
          </Link>
          <BoltBadge size="sm" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <div className="inline-flex p-3 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-xl shadow-medical mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our platform. By accessing or using HealthCare AI, you agree to be bound by these terms.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Acceptance of Terms</h2>
                  <p className="text-gray-600">
                    By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-green-100 rounded-lg mr-4">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Medical Disclaimer</h2>
                  <p className="text-gray-600">
                    HealthCare AI provides information and AI-powered assistance for educational purposes only. Our services are not intended to replace professional medical advice, diagnosis, or treatment.
                  </p>
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                      <p className="text-yellow-700 text-sm">
                        Always consult with qualified healthcare professionals regarding any health concerns or before making any medical decisions. Never disregard professional medical advice or delay seeking it because of information provided by our services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-purple-100 rounded-lg mr-4">
                  <Scale className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">User Accounts</h2>
                  <p className="text-gray-600">
                    When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account and password. You agree to accept responsibility for all activities that occur under your account.
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>You must be at least 18 years old to use our services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>You are responsible for keeping your account credentials secure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>You must notify us immediately of any unauthorized access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>We reserve the right to terminate accounts that violate our terms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-red-100 rounded-lg mr-4">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Limitations of Liability</h2>
                  <p className="text-gray-600">
                    HealthCare AI and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
                  </p>
                  <p className="mt-3 text-gray-600">
                    We do not guarantee that our services will be error-free, uninterrupted, or that defects will be corrected. You expressly agree that your use of our services is at your sole risk.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Subscription and Payments</h2>
                  <p className="text-gray-600">
                    Some features of our service require a paid subscription. By subscribing to our premium services, you agree to the following:
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Subscription fees are charged at the beginning of each billing period</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Subscriptions automatically renew unless cancelled before the renewal date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>You may cancel your subscription at any time through your account settings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Refunds are provided in accordance with our refund policy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Modifications to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the date at the top of these terms and by maintaining a current version of the terms at healthcareai.com/terms.
              </p>
              <p className="mt-3 text-gray-600">
                Your continued use of our services after such modifications will constitute your acknowledgment of the modified terms and agreement to abide by them.
              </p>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-medical-primary font-medium">HealthCare AI</p>
                <p className="text-gray-600">Email: terms@healthcareai.com</p>
                <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-600">Address: 123 Medical Plaza, Health City, HC 12345</p>
              </div>
            </section>

            <div className="text-center pt-6">
              <p className="text-gray-500 text-sm">
                Last updated: June 30, 2025
              </p>
              <div className="mt-4">
                <Link to="/privacy" className="text-medical-primary hover:text-medical-secondary transition-colors font-medium">
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;