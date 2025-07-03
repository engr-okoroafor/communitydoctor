import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import BoltBadge from '../components/BoltBadge';

const Privacy: React.FC = () => {
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At HealthCare AI, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  <Lock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Information We Collect</h2>
                  <p className="text-gray-600">
                    We collect information you provide directly to us when you create an account, use our services, or communicate with us. This may include:
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Personal information such as name, email address, and phone number</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Health information you choose to share during consultations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Images uploaded for diagnosis purposes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Usage data and interaction with our platform</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-green-100 rounded-lg mr-4">
                  <Eye className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">How We Use Your Information</h2>
                  <p className="text-gray-600">
                    We use the information we collect to:
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Provide, maintain, and improve our services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Process and complete transactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Send you technical notices, updates, and support messages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Respond to your comments, questions, and requests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Develop new products and services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-purple-100 rounded-lg mr-4">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Data Security</h2>
                  <p className="text-gray-600">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>All data is encrypted in transit and at rest</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Regular security audits and vulnerability assessments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Strict access controls for our staff</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Compliance with healthcare privacy standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                  <FileText className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Rights</h2>
                  <p className="text-gray-600">
                    You have several rights regarding your personal information:
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Access and receive a copy of your data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Correct inaccurate information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Request deletion of your data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Object to certain processing activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-medical-primary mr-2">•</span>
                      <span>Withdraw consent at any time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-medical-primary font-medium">HealthCare AI</p>
                <p className="text-gray-600">Email: privacy@healthcareai.com</p>
                <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-600">Address: 123 Medical Plaza, Health City, HC 12345</p>
              </div>
            </section>

            <div className="text-center pt-6">
              <p className="text-gray-500 text-sm">
                Last updated: June 30, 2025
              </p>
              <div className="mt-4">
                <Link to="/terms" className="text-medical-primary hover:text-medical-secondary transition-colors font-medium">
                  View Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;