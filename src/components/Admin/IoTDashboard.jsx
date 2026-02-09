import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaThermometerHalf,
  FaLightbulb,
  FaWifi,
  FaShieldAlt,
  FaUsers,
  FaExclamationTriangle,
  FaCheckCircle,
  FaBolt,
  FaWater,
  FaWind,
  FaCamera,
  FaDoorOpen,
  FaParking,
  FaLeaf,
  FaChartLine,
  FaCog,
  FaBell
} from 'react-icons/fa';

const IoTDashboard = () => {
  const [sensorData, setSensorData] = useState({});
  const [alerts, setAlerts] = useState([]);
  const [energyData, setEnergyData] = useState({});
  const [securityStatus, setSecurityStatus] = useState({});

  useEffect(() => {
    // Simulate real-time IoT data
    const interval = setInterval(() => {
      setSensorData({
        temperature: {
          classroom_a101: 24 + Math.random() * 4,
          classroom_a102: 23 + Math.random() * 4,
          library: 22 + Math.random() * 3,
          cafeteria: 26 + Math.random() * 5,
          lab_1: 21 + Math.random() * 3
        },
        humidity: {
          classroom_a101: 45 + Math.random() * 20,
          classroom_a102: 50 + Math.random() * 15,
          library: 40 + Math.random() * 20,
          cafeteria: 60 + Math.random() * 20,
          lab_1: 35 + Math.random() * 15
        },
        occupancy: {
          classroom_a101: Math.floor(Math.random() * 60),
          classroom_a102: Math.floor(Math.random() * 60),
          library: Math.floor(Math.random() * 200),
          cafeteria: Math.floor(Math.random() * 300),
          lab_1: Math.floor(Math.random() * 40)
        },
        airQuality: {
          co2: 400 + Math.random() * 600,
          pm25: Math.random() * 50,
          voc: Math.random() * 100
        }
      });

      setEnergyData({
        totalConsumption: 1250 + Math.random() * 200,
        solarGeneration: 800 + Math.random() * 100,
        gridUsage: 450 + Math.random() * 150,
        efficiency: 85 + Math.random() * 10
      });

      setSecurityStatus({
        cameras: { active: 24, total: 25 },
        doors: { locked: 45, total: 50 },
        alarms: { active: 0, total: 30 },
        accessPoints: { secure: 15, total: 15 }
      });
    }, 3000);

    // Simulate alerts
    setAlerts([
      {
        id: 1,
        type: 'warning',
        message: 'High CO2 levels detected in Classroom A101',
        location: 'Classroom A101',
        timestamp: new Date(Date.now() - 300000),
        severity: 'medium'
      },
      {
        id: 2,
        type: 'info',
        message: 'Energy efficiency improved by 5% this week',
        location: 'Campus Wide',
        timestamp: new Date(Date.now() - 600000),
        severity: 'low'
      },
      {
        id: 3,
        type: 'error',
        message: 'Security camera offline in Parking Area B',
        location: 'Parking Area B',
        timestamp: new Date(Date.now() - 900000),
        severity: 'high'
      }
    ]);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value, type) => {
    switch (type) {
      case 'temperature':
        return value > 28 ? 'text-red-500' : value < 18 ? 'text-blue-500' : 'text-green-500';
      case 'humidity':
        return value > 70 ? 'text-red-500' : value < 30 ? 'text-orange-500' : 'text-green-500';
      case 'co2':
        return value > 800 ? 'text-red-500' : value > 600 ? 'text-orange-500' : 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const formatLocation = (location) => {
    return location.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">IoT Campus Management</h1>
            <p className="text-gray-600">Real-time monitoring and smart campus automation</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Data</span>
            </div>
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaCog />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Energy Consumption</p>
                <p className="text-2xl font-bold text-blue-600">
                  {energyData.totalConsumption?.toFixed(0)} kW
                </p>
                <p className="text-xs text-green-600">↓ 12% from last month</p>
              </div>
              <FaBolt className="text-yellow-500 text-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Solar Generation</p>
                <p className="text-2xl font-bold text-green-600">
                  {energyData.solarGeneration?.toFixed(0)} kW
                </p>
                <p className="text-xs text-green-600">↑ 8% efficiency</p>
              </div>
              <FaLeaf className="text-green-500 text-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Security Status</p>
                <p className="text-2xl font-bold text-green-600">
                  {securityStatus.cameras?.active}/{securityStatus.cameras?.total}
                </p>
                <p className="text-xs text-green-600">Cameras Active</p>
              </div>
              <FaShieldAlt className="text-blue-500 text-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Air Quality</p>
                <p className={`text-2xl font-bold ${getStatusColor(sensorData.airQuality?.co2, 'co2')}`}>
                  {sensorData.airQuality?.co2?.toFixed(0)} ppm
                </p>
                <p className="text-xs text-gray-600">CO2 Level</p>
              </div>
              <FaWind className="text-cyan-500 text-2xl" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Environmental Monitoring */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaThermometerHalf className="text-red-500" />
              Environmental Monitoring
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Temperature */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Temperature (°C)</h3>
                <div className="space-y-3">
                  {Object.entries(sensorData.temperature || {}).map(([location, temp]) => (
                    <div key={location} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">{formatLocation(location)}</span>
                      <span className={`font-bold ${getStatusColor(temp, 'temperature')}`}>
                        {temp.toFixed(1)}°C
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Humidity */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Humidity (%)</h3>
                <div className="space-y-3">
                  {Object.entries(sensorData.humidity || {}).map(([location, humidity]) => (
                    <div key={location} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">{formatLocation(location)}</span>
                      <span className={`font-bold ${getStatusColor(humidity, 'humidity')}`}>
                        {humidity.toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Occupancy */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FaUsers className="text-blue-500" />
                Real-time Occupancy
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(sensorData.occupancy || {}).map(([location, count]) => (
                  <div key={location} className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-600 mb-1">{formatLocation(location)}</p>
                    <p className="text-2xl font-bold text-blue-600">{count}</p>
                    <p className="text-xs text-gray-500">people</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts & Notifications */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaBell className="text-orange-500" />
              System Alerts
            </h2>

            <div className="space-y-4">
              {alerts.map((alert) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-4 rounded-lg border-l-4 ${
                    alert.type === 'error' ? 'bg-red-50 border-red-500' :
                    alert.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                    'bg-blue-50 border-blue-500'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`text-lg ${
                      alert.type === 'error' ? 'text-red-500' :
                      alert.type === 'warning' ? 'text-yellow-500' :
                      'text-blue-500'
                    }`}>
                      {alert.type === 'error' ? <FaExclamationTriangle /> :
                       alert.type === 'warning' ? <FaExclamationTriangle /> :
                       <FaCheckCircle />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">{alert.message}</p>
                      <p className="text-xs text-gray-600 mt-1">{alert.location}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {alert.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Security Status */}
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FaShieldAlt className="text-green-500" />
                Security Overview
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 flex items-center gap-2">
                    <FaCamera className="text-gray-400" />
                    Cameras
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    {securityStatus.cameras?.active}/{securityStatus.cameras?.total}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 flex items-center gap-2">
                    <FaDoorOpen className="text-gray-400" />
                    Doors Locked
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    {securityStatus.doors?.locked}/{securityStatus.doors?.total}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 flex items-center gap-2">
                    <FaWifi className="text-gray-400" />
                    Access Points
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    {securityStatus.accessPoints?.secure}/{securityStatus.accessPoints?.total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Energy Management */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaBolt className="text-yellow-500" />
            Smart Energy Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Total Consumption</h3>
              <p className="text-2xl font-bold">{energyData.totalConsumption?.toFixed(0)} kW</p>
              <p className="text-sm opacity-90">Current Usage</p>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Solar Generation</h3>
              <p className="text-2xl font-bold">{energyData.solarGeneration?.toFixed(0)} kW</p>
              <p className="text-sm opacity-90">Clean Energy</p>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Grid Usage</h3>
              <p className="text-2xl font-bold">{energyData.gridUsage?.toFixed(0)} kW</p>
              <p className="text-sm opacity-90">From Grid</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Efficiency</h3>
              <p className="text-2xl font-bold">{energyData.efficiency?.toFixed(1)}%</p>
              <p className="text-sm opacity-90">Overall Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTDashboard;