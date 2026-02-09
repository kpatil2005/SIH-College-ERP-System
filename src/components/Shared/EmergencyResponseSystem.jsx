import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaShieldAlt,
  FaExclamationTriangle,
  FaAmbulance,
  FaFire,
  FaPhone,
  FaMapMarkerAlt,
  FaUsers,
  FaCamera,
  FaBell,
  FaRunning,
  FaHeartbeat,
  FaWifi,
  FaBolt,
  FaEye,

  FaUserMd
} from 'react-icons/fa';

const EmergencyResponseSystem = () => {
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [activeAlerts, setActiveAlerts] = useState([]);
  const [safetyMetrics, setSafetyMetrics] = useState({});
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyHelp, setNearbyHelp] = useState([]);

  useEffect(() => {
    // Initialize safety monitoring
    initializeSafetySystem();
    
    // Get user location for emergency services
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
      });
    }

    // Simulate real-time safety monitoring
    const interval = setInterval(() => {
      updateSafetyMetrics();
      checkForEmergencies();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const initializeSafetySystem = () => {
    setSafetyMetrics({
      campusSafety: 95,
      emergencyResponse: 98,
      securityCoverage: 92,
      medicalReadiness: 89,
      fireSystemStatus: 97,
      evacuationRoutes: 100
    });

    setEmergencyContacts([
      { name: 'Campus Security', number: '100', type: 'security', available: true },
      { name: 'Medical Emergency', number: '102', type: 'medical', available: true },
      { name: 'Fire Department', number: '101', type: 'fire', available: true },
      { name: 'Campus Counselor', number: '1800-XXX-XXXX', type: 'mental', available: true },
      { name: 'Women Safety Cell', number: '1091', type: 'women', available: true }
    ]);

    setNearbyHelp([
      { name: 'Security Guard - Block A', distance: '50m', status: 'available', type: 'security' },
      { name: 'First Aid Station', distance: '120m', status: 'open', type: 'medical' },
      { name: 'Emergency Assembly Point', distance: '80m', status: 'clear', type: 'evacuation' },
      { name: 'Campus Patrol', distance: '200m', status: 'mobile', type: 'security' }
    ]);
  };

  const updateSafetyMetrics = () => {
    // Simulate real-time safety monitoring
    setSafetyMetrics(prev => ({
      ...prev,
      campusSafety: 90 + Math.random() * 10,
      emergencyResponse: 95 + Math.random() * 5,
      securityCoverage: 88 + Math.random() * 12
    }));
  };

  const checkForEmergencies = () => {
    // Simulate emergency detection
    const emergencyTypes = ['fire', 'medical', 'security', 'weather'];
    const shouldTrigger = Math.random() > 0.95; // 5% chance

    if (shouldTrigger) {
      const type = emergencyTypes[Math.floor(Math.random() * emergencyTypes.length)];
      triggerEmergencyAlert(type);
    }
  };

  const triggerEmergencyAlert = (type) => {
    const alerts = {
      fire: {
        title: 'Fire Alert',
        message: 'Fire detected in Library Block - Evacuate immediately',
        severity: 'critical',
        icon: <FaFire />,
        color: 'red'
      },
      medical: {
        title: 'Medical Emergency',
        message: 'Medical assistance required at Cafeteria',
        severity: 'high',
        icon: <FaAmbulance />,
        color: 'blue'
      },
      security: {
        title: 'Security Alert',
        message: 'Suspicious activity reported near Parking Area',
        severity: 'medium',
        icon: <FaShieldAlt />,
        color: 'orange'
      },
      weather: {
        title: 'Weather Warning',
        message: 'Severe weather approaching - Seek shelter',
        severity: 'high',
        icon: <FaBolt />,
        color: 'yellow'
      }
    };

    const alert = {
      id: Date.now(),
      ...alerts[type],
      timestamp: new Date(),
      location: 'Campus Block A',
      responders: 'En route'
    };

    setActiveAlerts(prev => [alert, ...prev.slice(0, 4)]);
    setEmergencyMode(true);

    // Auto-dismiss after 30 seconds for demo
    setTimeout(() => {
      setEmergencyMode(false);
    }, 30000);
  };

  const initiateEmergencyCall = (contact) => {
    // In real implementation, this would initiate actual emergency call
    alert(`Calling ${contact.name} at ${contact.number}`);
  };

  const sendSOSAlert = () => {
    const sosAlert = {
      id: Date.now(),
      title: 'SOS Alert Sent',
      message: 'Emergency SOS sent to campus security and emergency contacts',
      severity: 'critical',
      icon: <FaBell />,
      color: 'red',
      timestamp: new Date(),
      location: userLocation ? `${userLocation.lat.toFixed(6)}, ${userLocation.lng.toFixed(6)}` : 'Location unavailable',
      responders: 'Dispatched'
    };

    setActiveAlerts(prev => [sosAlert, ...prev.slice(0, 4)]);
    setEmergencyMode(true);
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-600 bg-green-50';
    if (value >= 85) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Emergency Mode Banner */}
        <AnimatePresence>
          {emergencyMode && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="bg-red-600 text-white p-4 rounded-lg mb-6 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <FaBell className="text-2xl animate-pulse" />
                <div className="flex-1">
                  <h2 className="text-xl font-bold">EMERGENCY MODE ACTIVE</h2>
                  <p>Emergency services have been notified. Follow safety protocols.</p>
                </div>
                <button
                  onClick={() => setEmergencyMode(false)}
                  className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Acknowledge
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaShieldAlt className="text-4xl text-red-600" />
            <h1 className="text-3xl font-bold text-gray-800">Campus Safety Center</h1>
          </div>
          <p className="text-gray-600">AI-powered emergency response and safety monitoring system</p>
        </div>

        {/* Emergency SOS Button */}
        <div className="text-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sendSOSAlert}
            className="bg-red-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-red-700 transition-colors"
          >
            <FaBell className="inline mr-3" />
            EMERGENCY SOS
          </motion.button>
          <p className="text-sm text-gray-600 mt-2">Press for immediate emergency assistance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Alerts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaBell className="text-orange-600" />
                Active Alerts
              </h2>

              {activeAlerts.length === 0 ? (
                <div className="text-center py-8">
                  <FaShieldAlt className="text-6xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-600">All Clear</h3>
                  <p className="text-gray-600">No active emergencies detected</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {activeAlerts.map((alert) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`border-l-4 border-${alert.color}-500 bg-${alert.color}-50 p-4 rounded-lg`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`text-${alert.color}-600 text-xl mt-1`}>
                          {alert.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-gray-800">{alert.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${alert.color}-100 text-${alert.color}-800`}>
                              {alert.severity.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-2">{alert.message}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <FaMapMarkerAlt /> {alert.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaUsers /> {alert.responders}
                            </span>
                            <span>{alert.timestamp.toLocaleTimeString()}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Safety Metrics */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaHeartbeat className="text-green-600" />
                Campus Safety Status
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(safetyMetrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center ${getStatusColor(value)}`}>
                      <span className="font-bold">{value.toFixed(0)}%</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Contacts & Nearby Help */}
          <div className="space-y-8">
            {/* Emergency Contacts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaPhone className="text-blue-600" />
                Emergency Contacts
              </h2>

              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        contact.type === 'security' ? 'bg-blue-100 text-blue-600' :
                        contact.type === 'medical' ? 'bg-red-100 text-red-600' :
                        contact.type === 'fire' ? 'bg-orange-100 text-orange-600' :
                        contact.type === 'mental' ? 'bg-purple-100 text-purple-600' :
                        'bg-pink-100 text-pink-600'
                      }`}>
                        {contact.type === 'security' ? <FaShieldAlt /> :
                         contact.type === 'medical' ? <FaUserMd /> :
                         contact.type === 'fire' ? <FaFire /> :
                         contact.type === 'mental' ? <FaHeartbeat /> :
                         <FaUsers />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.number}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => initiateEmergencyCall(contact)}
                      className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                      Call
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Help */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-600" />
                Nearby Help
              </h2>

              <div className="space-y-3">
                {nearbyHelp.map((help, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">{help.name}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{help.distance}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          help.status === 'available' || help.status === 'open' ? 'bg-green-100 text-green-800' :
                          help.status === 'mobile' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {help.status}
                        </span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      <FaEye />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaRunning className="text-purple-600" />
                Safety Tips
              </h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Always inform someone about your whereabouts</p>
                <p>• Keep emergency contacts readily available</p>
                <p>• Know the nearest emergency exits</p>
                <p>• Report suspicious activities immediately</p>
                <p>• Stay alert in isolated areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyResponseSystem;