import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCamera,
  FaUserCheck,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaQrcode,
  FaBluetooth,
  FaWifi,
  FaShieldAlt,
  FaHistory,
  FaCalendarAlt,
  FaChartLine
} from 'react-icons/fa';

const SmartAttendance = () => {
  const [attendanceMode, setAttendanceMode] = useState('face'); // face, qr, beacon, geo
  const [isScanning, setIsScanning] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [todayAttendance, setTodayAttendance] = useState([]);
  const [weeklyStats, setWeeklyStats] = useState({});
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Simulate getting current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
      });
    }

    // Load today's attendance
    setTodayAttendance([
      { subject: 'Data Structures', time: '09:00 AM', status: 'Present', method: 'Face Recognition' },
      { subject: 'Database Management', time: '11:00 AM', status: 'Present', method: 'QR Code' },
      { subject: 'Computer Networks', time: '02:00 PM', status: 'Pending', method: '-' },
      { subject: 'Software Engineering', time: '04:00 PM', status: 'Pending', method: '-' }
    ]);

    setWeeklyStats({
      totalClasses: 25,
      attended: 22,
      percentage: 88,
      trend: '+2%'
    });
  }, []);

  const startFaceRecognition = async () => {
    setIsScanning(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      // Simulate face recognition process
      setTimeout(() => {
        setAttendanceStatus({
          type: 'success',
          message: 'Face recognized successfully! Attendance marked.',
          student: 'Patil Pranay Prashant',
          confidence: 97.5,
          timestamp: new Date().toLocaleTimeString()
        });
        setIsScanning(false);
        
        // Stop camera
        stream.getTracks().forEach(track => track.stop());
      }, 3000);

    } catch (error) {
      setAttendanceStatus({
        type: 'error',
        message: 'Camera access denied or not available.',
        timestamp: new Date().toLocaleTimeString()
      });
      setIsScanning(false);
    }
  };

  const scanQRCode = () => {
    setIsScanning(true);
    // Simulate QR code scanning
    setTimeout(() => {
      setAttendanceStatus({
        type: 'success',
        message: 'QR Code scanned successfully! Attendance marked.',
        qrData: 'CS301_DB_ROOM_A101_20240115',
        timestamp: new Date().toLocaleTimeString()
      });
      setIsScanning(false);
    }, 2000);
  };

  const checkBeaconAttendance = () => {
    setIsScanning(true);
    // Simulate Bluetooth beacon detection
    setTimeout(() => {
      setAttendanceStatus({
        type: 'success',
        message: 'Bluetooth beacon detected! Attendance marked automatically.',
        beacon: 'ROOM_A101_BEACON',
        signal: '-45 dBm',
        timestamp: new Date().toLocaleTimeString()
      });
      setIsScanning(false);
    }, 1500);
  };

  const checkGeoAttendance = () => {
    setIsScanning(true);
    // Simulate geo-fencing check
    setTimeout(() => {
      if (currentLocation) {
        setAttendanceStatus({
          type: 'success',
          message: 'Location verified! You are within the classroom boundary.',
          location: `${currentLocation.lat.toFixed(6)}, ${currentLocation.lng.toFixed(6)}`,
          accuracy: `±${currentLocation.accuracy}m`,
          timestamp: new Date().toLocaleTimeString()
        });
      } else {
        setAttendanceStatus({
          type: 'error',
          message: 'Location access required for geo-attendance.',
          timestamp: new Date().toLocaleTimeString()
        });
      }
      setIsScanning(false);
    }, 2000);
  };

  const attendanceMethods = [
    {
      id: 'face',
      name: 'Face Recognition',
      icon: <FaCamera />,
      description: 'AI-powered facial recognition for secure attendance',
      action: startFaceRecognition,
      color: 'bg-blue-500'
    },
    {
      id: 'qr',
      name: 'QR Code',
      icon: <FaQrcode />,
      description: 'Scan classroom QR code for quick attendance',
      action: scanQRCode,
      color: 'bg-green-500'
    },
    {
      id: 'beacon',
      name: 'Bluetooth Beacon',
      icon: <FaBluetooth />,
      description: 'Automatic detection via Bluetooth beacons',
      action: checkBeaconAttendance,
      color: 'bg-purple-500'
    },
    {
      id: 'geo',
      name: 'Geo-fencing',
      icon: <FaMapMarkerAlt />,
      description: 'Location-based attendance verification',
      action: checkGeoAttendance,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Smart Attendance System</h1>
          <p className="text-gray-600">Multiple ways to mark your attendance with advanced technology</p>
        </div>

        {/* Weekly Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Classes</p>
                <p className="text-2xl font-bold text-gray-800">{weeklyStats.totalClasses}</p>
              </div>
              <FaCalendarAlt className="text-blue-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Attended</p>
                <p className="text-2xl font-bold text-green-600">{weeklyStats.attended}</p>
              </div>
              <FaUserCheck className="text-green-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Percentage</p>
                <p className="text-2xl font-bold text-blue-600">{weeklyStats.percentage}%</p>
              </div>
              <FaChartLine className="text-blue-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Trend</p>
                <p className="text-2xl font-bold text-green-600">{weeklyStats.trend}</p>
              </div>
              <FaCheckCircle className="text-green-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Attendance Methods */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Mark Attendance</h2>
            
            {/* Method Selection */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {attendanceMethods.map((method) => (
                <motion.button
                  key={method.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setAttendanceMode(method.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    attendanceMode === method.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white mb-3 mx-auto`}>
                    {method.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">{method.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{method.description}</p>
                </motion.button>
              ))}
            </div>

            {/* Active Method Interface */}
            <div className="border-t pt-6">
              {attendanceMode === 'face' && (
                <div className="text-center">
                  <div className="relative w-64 h-48 mx-auto mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                    />
                    <canvas ref={canvasRef} className="hidden" />
                    {isScanning && (
                      <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                        <div className="text-white">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                          <p className="text-sm">Recognizing face...</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startFaceRecognition}
                    disabled={isScanning}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {isScanning ? 'Scanning...' : 'Start Face Recognition'}
                  </motion.button>
                </div>
              )}

              {attendanceMode === 'qr' && (
                <div className="text-center">
                  <div className="w-64 h-48 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    {isScanning ? (
                      <div className="text-center">
                        <div className="animate-pulse">
                          <FaQrcode className="text-6xl text-gray-400 mb-2" />
                        </div>
                        <p className="text-sm text-gray-600">Scanning QR Code...</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <FaQrcode className="text-6xl text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Ready to scan</p>
                      </div>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scanQRCode}
                    disabled={isScanning}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {isScanning ? 'Scanning...' : 'Scan QR Code'}
                  </motion.button>
                </div>
              )}

              {attendanceMode === 'beacon' && (
                <div className="text-center">
                  <div className="w-64 h-48 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FaBluetooth className={`text-6xl mb-2 ${isScanning ? 'text-purple-500 animate-pulse' : 'text-gray-400'}`} />
                      <p className="text-sm text-gray-600">
                        {isScanning ? 'Detecting beacon...' : 'Ready to detect'}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={checkBeaconAttendance}
                    disabled={isScanning}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                  >
                    {isScanning ? 'Detecting...' : 'Check Beacon'}
                  </motion.button>
                </div>
              )}

              {attendanceMode === 'geo' && (
                <div className="text-center">
                  <div className="w-64 h-48 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FaMapMarkerAlt className={`text-6xl mb-2 ${isScanning ? 'text-orange-500 animate-pulse' : 'text-gray-400'}`} />
                      <p className="text-sm text-gray-600">
                        {isScanning ? 'Verifying location...' : 'Ready to verify'}
                      </p>
                      {currentLocation && (
                        <p className="text-xs text-gray-500 mt-1">
                          Accuracy: ±{currentLocation.accuracy}m
                        </p>
                      )}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={checkGeoAttendance}
                    disabled={isScanning}
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50"
                  >
                    {isScanning ? 'Verifying...' : 'Verify Location'}
                  </motion.button>
                </div>
              )}
            </div>

            {/* Attendance Status */}
            <AnimatePresence>
              {attendanceStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`mt-6 p-4 rounded-lg ${
                    attendanceStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {attendanceStatus.type === 'success' ? (
                      <FaCheckCircle className="text-green-600 text-xl mt-1" />
                    ) : (
                      <FaExclamationTriangle className="text-red-600 text-xl mt-1" />
                    )}
                    <div className="flex-1">
                      <p className={`font-medium ${
                        attendanceStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {attendanceStatus.message}
                      </p>
                      <div className="mt-2 text-sm text-gray-600">
                        {attendanceStatus.student && (
                          <p>Student: {attendanceStatus.student}</p>
                        )}
                        {attendanceStatus.confidence && (
                          <p>Confidence: {attendanceStatus.confidence}%</p>
                        )}
                        {attendanceStatus.qrData && (
                          <p>QR Data: {attendanceStatus.qrData}</p>
                        )}
                        {attendanceStatus.beacon && (
                          <p>Beacon: {attendanceStatus.beacon} ({attendanceStatus.signal})</p>
                        )}
                        {attendanceStatus.location && (
                          <p>Location: {attendanceStatus.location} ({attendanceStatus.accuracy})</p>
                        )}
                        <p>Time: {attendanceStatus.timestamp}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Today's Schedule</h2>
              <FaHistory className="text-gray-400" />
            </div>

            <div className="space-y-4">
              {todayAttendance.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'Present' ? 'bg-green-500' :
                      item.status === 'Absent' ? 'bg-red-500' : 'bg-gray-400'
                    }`}></div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.subject}</h3>
                      <p className="text-sm text-gray-600">{item.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Present' ? 'bg-green-100 text-green-800' :
                      item.status === 'Absent' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status}
                    </span>
                    {item.method !== '-' && (
                      <p className="text-xs text-gray-500 mt-1">{item.method}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <FaShieldAlt className="text-blue-600 text-lg mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-800">Security & Privacy</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    All biometric data is encrypted and stored securely. Face recognition data is processed locally and not stored on servers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAttendance;