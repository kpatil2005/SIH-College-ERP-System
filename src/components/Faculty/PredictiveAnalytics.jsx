import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaChartLine,
  FaBrain,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowUp,
  FaArrowDown,
  FaUsers,
  FaGraduationCap,
  FaLightbulb,
  FaBullseye,
  FaCalendarAlt,
  FaBookOpen,
  FaUserGraduate,
  FaAward
} from 'react-icons/fa';

const PredictiveAnalytics = () => {
  const [selectedClass, setSelectedClass] = useState('CS301');
  const [timeframe, setTimeframe] = useState('semester');
  const [predictions, setPredictions] = useState({});
  const [riskStudents, setRiskStudents] = useState([]);
  const [performanceMetrics, setPerformanceMetrics] = useState({});

  const classes = [
    { id: 'CS301', name: 'Data Structures', students: 45 },
    { id: 'CS302', name: 'Database Management', students: 42 },
    { id: 'CS303', name: 'Computer Networks', students: 38 },
    { id: 'CS304', name: 'Software Engineering', students: 40 }
  ];

  useEffect(() => {
    // Simulate AI predictions
    generatePredictions();
    identifyRiskStudents();
    calculatePerformanceMetrics();
  }, [selectedClass, timeframe]);

  const generatePredictions = () => {
    setPredictions({
      classAverage: {
        current: 7.2,
        predicted: 7.6,
        confidence: 87,
        trend: 'improving'
      },
      passRate: {
        current: 82,
        predicted: 89,
        confidence: 91,
        trend: 'improving'
      },
      dropoutRisk: {
        current: 8,
        predicted: 5,
        confidence: 78,
        trend: 'improving'
      },
      topPerformers: {
        current: 12,
        predicted: 16,
        confidence: 85,
        trend: 'improving'
      }
    });
  };

  const identifyRiskStudents = () => {
    setRiskStudents([
      {
        id: 'ST001',
        name: 'Rahul Sharma',
        currentGrade: 5.2,
        predictedGrade: 4.8,
        riskLevel: 'high',
        factors: ['Low attendance (65%)', 'Missing assignments', 'Poor quiz performance'],
        recommendations: ['Schedule one-on-one session', 'Provide additional resources', 'Monitor closely']
      },
      {
        id: 'ST002',
        name: 'Priya Patel',
        currentGrade: 6.1,
        predictedGrade: 5.9,
        riskLevel: 'medium',
        factors: ['Inconsistent performance', 'Struggling with concepts'],
        recommendations: ['Group study sessions', 'Concept reinforcement']
      },
      {
        id: 'ST003',
        name: 'Amit Kumar',
        currentGrade: 6.8,
        predictedGrade: 6.5,
        riskLevel: 'medium',
        factors: ['Recent decline in performance', 'Attendance issues'],
        recommendations: ['Check for personal issues', 'Motivational counseling']
      },
      {
        id: 'ST004',
        name: 'Sneha Singh',
        currentGrade: 5.8,
        predictedGrade: 5.4,
        riskLevel: 'high',
        factors: ['Weak foundation', 'Low engagement', 'Missing labs'],
        recommendations: ['Remedial classes', 'Peer mentoring', 'Lab makeup sessions']
      }
    ]);
  };

  const calculatePerformanceMetrics = () => {
    setPerformanceMetrics({
      engagement: {
        score: 73,
        trend: 'stable',
        factors: ['Class participation', 'Assignment submission', 'Lab attendance']
      },
      comprehension: {
        score: 68,
        trend: 'improving',
        factors: ['Quiz scores', 'Concept clarity', 'Problem solving']
      },
      retention: {
        score: 81,
        trend: 'improving',
        factors: ['Knowledge retention', 'Application skills', 'Long-term memory']
      },
      collaboration: {
        score: 76,
        trend: 'stable',
        factors: ['Group projects', 'Peer interaction', 'Team work']
      }
    });
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTrendIcon = (trend) => {
    return trend === 'improving' ? 
      <FaArrowUp className="text-green-500" /> : 
      <FaArrowDown className="text-red-500" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <FaBrain className="text-purple-600" />
              Predictive Analytics
            </h1>
            <p className="text-gray-600">AI-powered insights for academic performance prediction</p>
          </div>
          
          <div className="flex gap-4">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            >
              {classes.map(cls => (
                <option key={cls.id} value={cls.id}>{cls.name}</option>
              ))}
            </select>
            
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            >
              <option value="semester">This Semester</option>
              <option value="month">This Month</option>
              <option value="week">This Week</option>
            </select>
          </div>
        </div>

        {/* Prediction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaChartLine className="text-blue-500" />
                <h3 className="font-semibold text-gray-800">Class Average</h3>
              </div>
              {getTrendIcon(predictions.classAverage?.trend)}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Current:</span>
                <span className="font-bold text-gray-800">{predictions.classAverage?.current}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Predicted:</span>
                <span className="font-bold text-blue-600">{predictions.classAverage?.predicted}</span>
              </div>
              <div className="text-xs text-gray-500">
                Confidence: {predictions.classAverage?.confidence}%
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-green-500" />
                <h3 className="font-semibold text-gray-800">Pass Rate</h3>
              </div>
              {getTrendIcon(predictions.passRate?.trend)}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Current:</span>
                <span className="font-bold text-gray-800">{predictions.passRate?.current}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Predicted:</span>
                <span className="font-bold text-green-600">{predictions.passRate?.predicted}%</span>
              </div>
              <div className="text-xs text-gray-500">
                Confidence: {predictions.passRate?.confidence}%
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaExclamationTriangle className="text-red-500" />
                <h3 className="font-semibold text-gray-800">At Risk</h3>
              </div>
              {getTrendIcon(predictions.dropoutRisk?.trend)}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Current:</span>
                <span className="font-bold text-gray-800">{predictions.dropoutRisk?.current}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Predicted:</span>
                <span className="font-bold text-green-600">{predictions.dropoutRisk?.predicted}</span>
              </div>
              <div className="text-xs text-gray-500">
                Confidence: {predictions.dropoutRisk?.confidence}%
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaAward className="text-yellow-500" />
                <h3 className="font-semibold text-gray-800">Top Performers</h3>
              </div>
              {getTrendIcon(predictions.topPerformers?.trend)}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Current:</span>
                <span className="font-bold text-gray-800">{predictions.topPerformers?.current}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Predicted:</span>
                <span className="font-bold text-yellow-600">{predictions.topPerformers?.predicted}</span>
              </div>
              <div className="text-xs text-gray-500">
                Confidence: {predictions.topPerformers?.confidence}%
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* At-Risk Students */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaUsers className="text-red-500" />
              Students Requiring Attention
            </h2>

            <div className="space-y-4">
              {riskStudents.map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border ${getRiskColor(student.riskLevel)}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-800">{student.name}</h3>
                      <p className="text-sm text-gray-600">ID: {student.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Current: {student.currentGrade}</p>
                      <p className="text-sm font-medium">Predicted: {student.predictedGrade}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        student.riskLevel === 'high' ? 'bg-red-100 text-red-800' :
                        student.riskLevel === 'medium' ? 'bg-orange-100 text-orange-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {student.riskLevel.toUpperCase()} RISK
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Risk Factors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {student.factors.map((factor, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Recommendations:</h4>
                    <div className="space-y-1">
                      {student.recommendations.map((rec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <FaLightbulb className="text-yellow-500 text-xs" />
                          {rec}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaBullseye className="text-purple-500" />
              Performance Metrics
            </h2>

            <div className="space-y-6">
              {Object.entries(performanceMetrics).map(([metric, data]) => (
                <div key={metric} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-700 capitalize">{metric}</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-800">{data.score}%</span>
                      {getTrendIcon(data.trend)}
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        data.score >= 80 ? 'bg-green-500' :
                        data.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${data.score}%` }}
                    ></div>
                  </div>

                  <div className="text-xs text-gray-600">
                    <p className="font-medium mb-1">Key Factors:</p>
                    {data.factors.map((factor, idx) => (
                      <p key={idx} className="ml-2">• {factor}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insights */}
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FaBrain className="text-purple-500" />
                AI Insights
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Pattern Detected:</strong> Students with attendance below 75% show 40% higher risk of poor performance.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Recommendation:</strong> Implement early intervention for students missing more than 3 consecutive classes.
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Trend Alert:</strong> Lab performance strongly correlates with final grades (r=0.87).
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

export default PredictiveAnalytics;