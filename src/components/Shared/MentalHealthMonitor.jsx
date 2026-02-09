import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaHeart,
  FaBrain,
  FaSmile,
  FaFrown,
  FaMeh,
  FaExclamationTriangle,
  FaPhone,
  FaComments,
  FaLeaf,
  FaRunning,
  FaMoon,
  FaMusic
} from 'react-icons/fa';

const MentalHealthMonitor = () => {
  const [moodData, setMoodData] = useState({});
  const [stressLevel, setStressLevel] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const [emergencyMode, setEmergencyMode] = useState(false);

  useEffect(() => {
    // Simulate AI mood analysis from various data points
    const analyzeMentalHealth = () => {
      const currentHour = new Date().getHours();
      const isExamPeriod = Math.random() > 0.7; // Simulate exam stress
      const socialInteraction = Math.random() * 100;
      const sleepQuality = Math.random() * 100;
      
      const calculatedStress = isExamPeriod ? 70 + Math.random() * 30 : Math.random() * 60;
      setStressLevel(calculatedStress);

      setMoodData({
        happiness: 85 - (calculatedStress * 0.5),
        anxiety: calculatedStress,
        energy: sleepQuality,
        social: socialInteraction,
        focus: 90 - calculatedStress,
        sleep: sleepQuality
      });

      // Generate AI recommendations
      const recs = [];
      if (calculatedStress > 70) {
        recs.push({
          type: 'urgent',
          icon: <FaExclamationTriangle />,
          title: 'High Stress Detected',
          message: 'Consider taking a 10-minute meditation break',
          action: 'Start Guided Meditation'
        });
      }
      if (sleepQuality < 50) {
        recs.push({
          type: 'warning',
          icon: <FaMoon />,
          title: 'Poor Sleep Pattern',
          message: 'Your sleep quality affects academic performance',
          action: 'Sleep Improvement Tips'
        });
      }
      if (socialInteraction < 30) {
        recs.push({
          type: 'info',
          icon: <FaComments />,
          title: 'Low Social Interaction',
          message: 'Connect with friends or join study groups',
          action: 'Find Study Groups'
        });
      }
      
      setRecommendations(recs);
      setEmergencyMode(calculatedStress > 85);
    };

    analyzeMentalHealth();
    const interval = setInterval(analyzeMentalHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  const moodIcons = {
    happy: <FaSmile className="text-green-500" />,
    neutral: <FaMeh className="text-yellow-500" />,
    sad: <FaFrown className="text-red-500" />
  };

  const getCurrentMood = () => {
    if (moodData.happiness > 70) return 'happy';
    if (moodData.happiness > 40) return 'neutral';
    return 'sad';
  };

  const getStressColor = (level) => {
    if (level > 70) return 'text-red-600 bg-red-50';
    if (level > 40) return 'text-orange-600 bg-orange-50';
    return 'text-green-600 bg-green-50';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Emergency Alert */}
      {emergencyMode && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <FaExclamationTriangle className="text-red-500 text-xl" />
            <div className="flex-1">
              <h4 className="font-semibold text-red-800">High Stress Alert</h4>
              <p className="text-red-700 text-sm">Your stress levels are concerning. Consider reaching out for support.</p>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              <FaPhone className="inline mr-2" />
              Emergency Help
            </button>
          </div>
        </motion.div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaBrain className="text-purple-600 text-2xl" />
        <div>
          <h3 className="text-xl font-bold text-gray-800">Mental Wellness Monitor</h3>
          <p className="text-gray-600 text-sm">AI-powered mental health insights</p>
        </div>
        <div className="ml-auto text-3xl">
          {moodIcons[getCurrentMood()]}
        </div>
      </div>

      {/* Stress Level Indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Current Stress Level</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStressColor(stressLevel)}`}>
            {stressLevel.toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-500 ${
              stressLevel > 70 ? 'bg-red-500' :
              stressLevel > 40 ? 'bg-orange-500' : 'bg-green-500'
            }`}
            style={{ width: `${stressLevel}%` }}
          ></div>
        </div>
      </div>

      {/* Mental Health Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {Object.entries(moodData).map(([key, value]) => (
          <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600 capitalize mb-1">{key}</p>
            <p className="text-lg font-bold text-gray-800">{value?.toFixed(0)}%</p>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
              <div
                className={`h-1 rounded-full ${
                  value > 70 ? 'bg-green-500' :
                  value > 40 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendations */}
      <div className="space-y-3 mb-6">
        <h4 className="font-semibold text-gray-800">AI Recommendations</h4>
        {recommendations.map((rec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 rounded-lg border-l-4 ${
              rec.type === 'urgent' ? 'bg-red-50 border-red-500' :
              rec.type === 'warning' ? 'bg-orange-50 border-orange-500' :
              'bg-blue-50 border-blue-500'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`text-lg ${
                rec.type === 'urgent' ? 'text-red-500' :
                rec.type === 'warning' ? 'text-orange-500' :
                'text-blue-500'
              }`}>
                {rec.icon}
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-gray-800">{rec.title}</h5>
                <p className="text-sm text-gray-600 mb-2">{rec.message}</p>
                <button className="text-xs bg-white px-3 py-1 rounded-full border hover:bg-gray-50 transition-colors">
                  {rec.action}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button className="flex flex-col items-center gap-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
          <FaLeaf className="text-green-600 text-xl" />
          <span className="text-xs font-medium text-green-800">Meditate</span>
        </button>
        <button className="flex flex-col items-center gap-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <FaRunning className="text-blue-600 text-xl" />
          <span className="text-xs font-medium text-blue-800">Exercise</span>
        </button>
        <button className="flex flex-col items-center gap-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
          <FaMusic className="text-purple-600 text-xl" />
          <span className="text-xs font-medium text-purple-800">Relax</span>
        </button>
        <button className="flex flex-col items-center gap-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
          <FaComments className="text-orange-600 text-xl" />
          <span className="text-xs font-medium text-orange-800">Talk</span>
        </button>
      </div>

      {/* Emergency Contacts */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h5 className="font-medium text-gray-800 mb-2">Need Help?</h5>
        <div className="flex gap-4 text-sm">
          <button className="text-blue-600 hover:underline">Campus Counselor</button>
          <button className="text-blue-600 hover:underline">Peer Support</button>
          <button className="text-red-600 hover:underline">Crisis Helpline</button>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthMonitor;