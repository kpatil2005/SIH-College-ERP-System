import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaBrain,
  FaChartLine,
  FaRobot,
  FaLightbulb,
  FaExclamationTriangle,
  FaArrowUp,
  FaUsers,
  FaGraduationCap
} from 'react-icons/fa';

const AIAnalytics = ({ userRole = 'student' }) => {
  const [insights, setInsights] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI processing
    setTimeout(() => {
      generateAIInsights();
      setLoading(false);
    }, 2000);
  }, [userRole]);

  const generateAIInsights = () => {
    const studentInsights = [
      {
        type: 'performance',
        title: 'Performance Prediction',
        message: 'Based on current trends, you\'re likely to achieve 8.5+ CGPA this semester',
        confidence: 87,
        icon: <FaArrowUp />,
        color: 'text-green-600',
        bgColor: 'bg-green-50'
      },
      {
        type: 'attendance',
        title: 'Attendance Alert',
        message: 'Your Physics attendance is at 73%. Attend next 3 classes to stay above 75%',
        confidence: 95,
        icon: <FaExclamationTriangle />,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
      },
      {
        type: 'study',
        title: 'Study Recommendation',
        message: 'Focus on Data Structures - your weakest subject. Recommended study time: 2hrs/day',
        confidence: 82,
        icon: <FaLightbulb />,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      }
    ];

    const adminInsights = [
      {
        type: 'enrollment',
        title: 'Enrollment Prediction',
        message: 'Expected 15% increase in admissions for next academic year',
        confidence: 91,
        icon: <FaUsers />,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
      },
      {
        type: 'performance',
        title: 'Department Analysis',
        message: 'Computer Science dept showing 12% improvement in overall performance',
        confidence: 88,
        icon: <FaChartLine />,
        color: 'text-green-600',
        bgColor: 'bg-green-50'
      }
    ];

    setInsights(userRole === 'student' ? studentInsights : adminInsights);
    
    setPredictions([
      { metric: 'Final CGPA', predicted: '8.7', current: '8.4' },
      { metric: 'Placement Probability', predicted: '92%', current: '87%' },
      { metric: 'Semester Rank', predicted: '15', current: '18' }
    ]);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <FaBrain className="text-purple-600 text-2xl animate-pulse" />
          <h3 className="text-xl font-bold text-gray-800">AI Analytics Processing...</h3>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <FaBrain className="text-purple-600 text-2xl" />
        <h3 className="text-xl font-bold text-gray-800">AI-Powered Insights</h3>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
          BETA
        </span>
      </div>

      {/* AI Insights */}
      <div className="space-y-4 mb-6">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`${insight.bgColor} rounded-lg p-4 border-l-4 border-purple-500`}
          >
            <div className="flex items-start gap-3">
              <div className={`${insight.color} text-xl mt-1`}>
                {insight.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">{insight.title}</h4>
                <p className="text-gray-700 text-sm mb-2">{insight.message}</p>
                <div className="flex items-center gap-2">
                  <div className="bg-white rounded-full px-2 py-1">
                    <span className="text-xs font-medium text-gray-600">
                      Confidence: {insight.confidence}%
                    </span>
                  </div>
                  <FaRobot className="text-purple-500 text-sm" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Predictions */}
      {userRole === 'student' && (
        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaGraduationCap className="text-blue-600" />
            AI Predictions
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {predictions.map((pred, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-600 mb-1">{pred.metric}</p>
                <p className="font-bold text-lg text-blue-600">{pred.predicted}</p>
                <p className="text-xs text-gray-500">Current: {pred.current}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAnalytics;