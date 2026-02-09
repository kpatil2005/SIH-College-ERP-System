import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaMobile,
  FaQrcode,
  FaDownload,
  FaBell,
  FaMapMarkerAlt,
  FaCamera,
  FaFingerprint,
  FaWifi,
  FaBluetooth,
  FaApple,
  FaGooglePlay,
  FaShare,
  FaSync,
  FaShieldAlt,
  FaRocket,
  FaStar
} from 'react-icons/fa';

const MobileAppIntegration = () => {
  const [qrCode, setQrCode] = useState('');
  const [appStats, setAppStats] = useState({});
  const [features, setFeatures] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Generate QR code for app download
    setQrCode('https://play.google.com/store/apps/details?id=com.quickcampus.edu');
    
    // Set app statistics
    setAppStats({
      downloads: '50K+',
      rating: 4.8,
      reviews: 2847,
      lastUpdate: '2024-01-10',
      version: '2.1.5'
    });

    // Set mobile app features
    setFeatures([
      {
        icon: <FaCamera />,
        title: 'Smart Attendance',
        description: 'Mark attendance using face recognition, QR codes, or location',
        color: 'bg-blue-500'
      },
      {
        icon: <FaBell />,
        title: 'Push Notifications',
        description: 'Real-time alerts for assignments, exams, and announcements',
        color: 'bg-red-500'
      },
      {
        icon: <FaMapMarkerAlt />,
        title: 'Campus Navigation',
        description: 'AR-powered indoor navigation and location services',
        color: 'bg-green-500'
      },
      {
        icon: <FaFingerprint />,
        title: 'Biometric Security',
        description: 'Secure login with fingerprint and face recognition',
        color: 'bg-purple-500'
      },
      {
        icon: <FaWifi />,
        title: 'Offline Mode',
        description: 'Access essential features without internet connection',
        color: 'bg-orange-500'
      },
      {
        icon: <FaSync />,
        title: 'Real-time Sync',
        description: 'Instant synchronization across all devices',
        color: 'bg-cyan-500'
      }
    ]);

    // Set recent notifications
    setNotifications([
      {
        id: 1,
        title: 'Assignment Due Tomorrow',
        message: 'Data Structures assignment submission deadline',
        time: '2 hours ago',
        type: 'warning'
      },
      {
        id: 2,
        title: 'Grade Updated',
        message: 'Your Database Management quiz grade is now available',
        time: '1 day ago',
        type: 'success'
      },
      {
        id: 3,
        title: 'Event Reminder',
        message: 'Tech fest registration closes in 3 days',
        time: '2 days ago',
        type: 'info'
      }
    ]);
  }, []);

  const downloadApp = (platform) => {
    const urls = {
      android: 'https://play.google.com/store/apps/details?id=com.quickcampus.edu',
      ios: 'https://apps.apple.com/app/quickcampus/id123456789'
    };
    window.open(urls[platform], '_blank');
  };

  const shareApp = () => {
    if (navigator.share) {
      navigator.share({
        title: 'QuickCampus Mobile App',
        text: 'Download the QuickCampus mobile app for seamless campus experience!',
        url: 'https://quickcampus.edu/mobile'
      });
    } else {
      navigator.clipboard.writeText('https://quickcampus.edu/mobile');
      alert('App link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <FaMobile className="text-4xl text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">QuickCampus Mobile</h1>
          </motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of education with our AI-powered mobile app. 
            Access everything you need for campus life, right in your pocket.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* App Download Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                  <FaMobile className="text-white text-5xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Download Now</h2>
                <p className="text-gray-600">Get the app and unlock smart campus features</p>
              </div>

              {/* QR Code */}
              <div className="mb-6">
                <div className="w-40 h-40 bg-gray-100 rounded-lg mx-auto flex items-center justify-center mb-3">
                  <div className="text-center">
                    <FaQrcode className="text-6xl text-gray-400 mb-2" />
                    <p className="text-xs text-gray-500">Scan to Download</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Scan QR code with your phone camera</p>
              </div>

              {/* Download Buttons */}
              <div className="space-y-3 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => downloadApp('android')}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-green-700 transition-colors"
                >
                  <FaGooglePlay size={20} />
                  <div className="text-left">
                    <p className="text-xs">Get it on</p>
                    <p className="font-semibold">Google Play</p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => downloadApp('ios')}
                  className="w-full bg-black text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors"
                >
                  <FaApple size={20} />
                  <div className="text-left">
                    <p className="text-xs">Download on the</p>
                    <p className="font-semibold">App Store</p>
                  </div>
                </motion.button>
              </div>

              {/* App Stats */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">{appStats.downloads}</p>
                    <p className="text-xs text-gray-600">Downloads</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <p className="text-2xl font-bold text-indigo-600">{appStats.rating}</p>
                    </div>
                    <p className="text-xs text-gray-600">{appStats.reviews} Reviews</p>
                  </div>
                </div>
              </div>

              {/* Share Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={shareApp}
                className="mt-4 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
              >
                <FaShare />
                Share App
              </motion.button>
            </div>
          </div>

          {/* Features Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <FaRocket className="text-3xl text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-800">Powerful Features</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Security Notice */}
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-green-600 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Enterprise-Grade Security</h4>
                    <p className="text-sm text-green-700">
                      Your data is protected with end-to-end encryption, biometric authentication, 
                      and secure cloud infrastructure. We comply with all educational data privacy regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Notifications Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FaBell className="text-3xl text-red-500" />
              <h2 className="text-2xl font-bold text-gray-800">Smart Notifications</h2>
            </div>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              Real-time Updates
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl p-4 border-l-4 border-indigo-500"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-800 text-sm">{notification.title}</h3>
                  <span className={`w-2 h-2 rounded-full ${
                    notification.type === 'warning' ? 'bg-yellow-500' :
                    notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                  }`}></span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Never miss important updates with our intelligent notification system
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FaWifi className="text-blue-500" />
                <span>Real-time Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBluetooth className="text-purple-500" />
                <span>Proximity Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-500" />
                <span>Location-based</span>
              </div>
            </div>
          </div>
        </div>

        {/* App Version Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
            <span className="text-sm text-gray-600">
              Latest Version: <strong>{appStats.version}</strong>
            </span>
            <span className="text-sm text-gray-600">
              Updated: {appStats.lastUpdate}
            </span>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500 text-sm" />
              <span className="text-sm font-medium">{appStats.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppIntegration;