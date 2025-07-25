import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Heart, 
  Users,
  AlertTriangle,
  CheckCircle,
  MessageSquare,
  Camera,
  Pill,
  BookOpen,
  Thermometer,
  Shield,
  Stethoscope,
  ShoppingCart
} from 'lucide-react';
import BoltBadge from '../components/BoltBadge';
import PurchaseModal from '../components/PurchaseModal';

const Dashboard: React.FC = () => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const stats = [
    {
      name: 'Health Checks',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: Stethoscope,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Photo Diagnoses',
      value: '856',
      change: '+8%',
      changeType: 'increase',
      icon: Camera,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Treatment Plans',
      value: '432',
      change: '+15%',
      changeType: 'increase',
      icon: Pill,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'People Helped',
      value: '2,847',
      change: '+23%',
      changeType: 'increase',
      icon: Heart,
      color: 'from-red-500 to-rose-600'
    },
  ];

  const recentConsultations = [
    {
      id: '1',
      symptoms: 'Fever, headache, body aches',
      diagnosis: 'Viral infection',
      status: 'treated',
      treatment: 'Rest, fluids, natural remedies',
      timestamp: '2 hours ago',
      recommendedItems: ['Paracetamol', 'Honey', 'Ginger tea', 'Vitamin C']
    },
    {
      id: '2',
      symptoms: 'Skin rash on arm',
      diagnosis: 'Contact dermatitis',
      status: 'monitoring',
      treatment: 'Aloe vera, avoid irritants',
      timestamp: '4 hours ago',
      recommendedItems: ['Aloe vera gel', 'Anti-inflammatory cream', 'Zinc supplements']
    },
    {
      id: '3',
      symptoms: 'Stomach pain, nausea',
      diagnosis: 'Indigestion',
      status: 'resolved',
      treatment: 'Ginger tea, light diet',
      timestamp: '6 hours ago',
      recommendedItems: ['Ginger', 'Probiotics', 'Chamomile tea']
    },
  ];

  const quickActions = [
    {
      title: 'Start Consultation',
      description: 'Connect with AI medical specialists',
      icon: MessageSquare,
      color: 'from-emerald-500 to-teal-600',
      href: '/consultation'
    },
    {
      title: 'Photo Diagnosis',
      description: 'Take a photo for visual diagnosis',
      icon: Camera,
      color: 'from-blue-500 to-indigo-600',
      href: '/photo-diagnosis'
    },
    {
      title: 'Treatment Plans',
      description: 'View comprehensive treatment plans',
      icon: Pill,
      color: 'from-purple-500 to-pink-600',
      href: '/treatments'
    },
    {
      title: 'Health Education',
      description: 'Learn about health and wellness',
      icon: BookOpen,
      color: 'from-orange-500 to-amber-600',
      href: '/education'
    }
  ];

  const handleBuyItems = (recommendedItems: string[]) => {
    setShowPurchaseModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Community Health Dashboard</h1>
                <p className="text-gray-600">Your AI-powered community doctor is here to help with symptoms, diagnosis, and natural treatments.</p>
              </div>
              <div className="mt-4 md:mt-0">
                <BoltBadge />
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <div className="flex items-baseline">
                      <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
                      <span className={`ml-2 text-sm font-medium ${
                        stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-200 shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">How can I help you today?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    to={action.href}
                    className="block p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 text-left border border-gray-200 hover:border-gray-300 group hover:shadow-lg"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${action.color} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Consultations */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2 bg-white rounded-xl border border-green-200 shadow-lg"
            >
              <div className="p-6 border-b border-green-100">
                <h2 className="text-xl font-semibold text-gray-800">Recent Health Consultations</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentConsultations.map((consultation) => (
                    <div
                      key={consultation.id}
                      className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 hover:border-gray-300"
                    >
                      <div className="flex-shrink-0">
                        {consultation.status === 'resolved' && (
                          <CheckCircle className="h-8 w-8 text-green-500" />
                        )}
                        {consultation.status === 'treated' && (
                          <Pill className="h-8 w-8 text-blue-500" />
                        )}
                        {consultation.status === 'monitoring' && (
                          <Activity className="h-8 w-8 text-orange-500 animate-pulse" />
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-800">
                            {consultation.symptoms}
                          </h3>
                          <span className="text-xs text-gray-500">{consultation.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          <strong>Diagnosis:</strong> {consultation.diagnosis}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Treatment:</strong> {consultation.treatment}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            consultation.status === 'resolved' ? 'bg-green-100 text-green-800' :
                            consultation.status === 'treated' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {consultation.status.charAt(0).toUpperCase() + consultation.status.slice(1)}
                          </span>
                          <button
                            onClick={() => handleBuyItems(consultation.recommendedItems)}
                            className="flex items-center px-3 py-1 bg-gradient-to-r from-medical-primary to-medical-secondary text-white text-xs rounded-full hover:shadow-lg transition-all duration-200"
                          >
                            <ShoppingCart className="h-3 w-3 mr-1" />
                            Buy Items
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Health Tips & Emergency */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Health Tip</h2>
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 mr-3">
                      <Thermometer className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">Stay Hydrated</h3>
                      <p className="text-sm text-gray-700">
                        Drink at least 8 glasses of water daily. Add lemon or cucumber for natural flavor and extra nutrients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-red-200 shadow-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-rose-600 mr-2">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  Emergency Guide
                </h3>
                <p className="text-sm text-red-700 mb-4">
                  For serious symptoms like chest pain, difficulty breathing, or severe bleeding, seek immediate medical attention.
                </p>
                <Link 
                  to="/emergency"
                  className="block w-full bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors text-center"
                >
                  View Emergency Guide
                </Link>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 mr-2">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  Prevention Tips
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Wash hands frequently</li>
                  <li>• Eat fruits and vegetables daily</li>
                  <li>• Get adequate sleep (7-8 hours)</li>
                  <li>• Exercise regularly</li>
                  <li>• Avoid smoking and excessive alcohol</li>
                </ul>
              </div>

              {/* Quick Purchase Section */}
              <div className="bg-white rounded-xl border border-purple-200 shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 mr-2">
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </div>
                  Quick Purchase
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get medicines and healthy foods delivered to your doorstep
                </p>
                <button
                  onClick={() => setShowPurchaseModal(true)}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                >
                  Browse Items
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      <PurchaseModal 
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        recommendedItems={[]}
      />
    </div>
  );
};

export default Dashboard;