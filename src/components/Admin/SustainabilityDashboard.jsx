import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaLeaf,
  FaSolarPanel,
  FaRecycle,
  FaWater,
  FaTree,
  FaCar,
  FaLightbulb,
  FaThermometerHalf,
  FaWind,
  FaChartLine,
  FaTrophy,
  FaUsers,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';

const SustainabilityDashboard = () => {
  const [sustainabilityMetrics, setSustainabilityMetrics] = useState({});
  const [carbonFootprint, setCarbonFootprint] = useState({});
  const [greenInitiatives, setGreenInitiatives] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Initialize sustainability data
    initializeSustainabilityData();
    
    // Update metrics every 10 seconds
    const interval = setInterval(() => {
      updateRealTimeMetrics();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const initializeSustainabilityData = () => {
    setSustainabilityMetrics({
      energyEfficiency: 87,
      waterConservation: 92,
      wasteReduction: 78,
      carbonNeutral: 65,
      renewableEnergy: 45,
      greenSpaces: 88,
      sustainabilityScore: 79
    });

    setCarbonFootprint({
      totalEmissions: 2450, // tons CO2/year
      reduction: 18, // % reduction from last year
      solarGeneration: 1200, // kWh/day
      energySaved: 35, // % energy saved
      treesPlanted: 1250,
      wasteRecycled: 89 // % waste recycled
    });

    setGreenInitiatives([
      {
        id: 1,
        title: 'Solar Panel Installation',
        description: 'Installing 500kW solar panels across campus rooftops',
        progress: 75,
        impact: '30% reduction in grid dependency',
        startDate: '2024-01-15',
        endDate: '2024-06-30',
        status: 'In Progress',
        category: 'Energy'
      },
      {
        id: 2,
        title: 'Rainwater Harvesting',
        description: 'Campus-wide rainwater collection and storage system',
        progress: 90,
        impact: '40% reduction in water consumption',
        startDate: '2023-08-01',
        endDate: '2024-02-28',
        status: 'Near Completion',
        category: 'Water'
      },
      {
        id: 3,
        title: 'Waste Segregation Program',
        description: 'AI-powered waste sorting and recycling initiative',
        progress: 60,
        impact: '50% increase in recycling rate',
        startDate: '2024-02-01',
        endDate: '2024-08-31',
        status: 'In Progress',
        category: 'Waste'
      },
      {
        id: 4,
        title: 'Green Transportation',
        description: 'Electric shuttle buses and bike-sharing program',
        progress: 40,
        impact: '25% reduction in campus emissions',
        startDate: '2024-03-01',
        endDate: '2024-12-31',
        status: 'Planning',
        category: 'Transport'
      }
    ]);

    setAchievements([
      {
        title: 'Carbon Neutral Certification',
        description: 'Achieved carbon neutral status for academic buildings',
        date: '2024-01-15',
        impact: '2000 tons CO2 reduced annually',
        icon: <FaLeaf />
      },
      {
        title: 'Water Conservation Award',
        description: 'State-level recognition for water management',
        date: '2023-12-10',
        impact: '50% water consumption reduction',
        icon: <FaWater />
      },
      {
        title: 'Green Campus Certification',
        description: 'GRIHA 5-star rating for sustainable campus',
        date: '2023-11-20',
        impact: 'Top 10 green campuses in India',
        icon: <FaTrophy />
      }
    ]);

    setAlerts([
      {
        type: 'warning',
        message: 'Energy consumption 15% above target this month',
        action: 'Review HVAC settings and lighting schedules',
        priority: 'Medium'
      },
      {
        type: 'success',
        message: 'Water recycling target exceeded by 12%',
        action: 'Continue current conservation practices',
        priority: 'Low'
      },
      {
        type: 'info',
        message: 'New sustainability grant opportunity available',
        action: 'Submit application for green technology funding',
        priority: 'High'
      }
    ]);
  };

  const updateRealTimeMetrics = () => {
    // Simulate real-time updates
    setSustainabilityMetrics(prev => ({
      ...prev,
      energyEfficiency: Math.max(80, Math.min(95, prev.energyEfficiency + (Math.random() - 0.5) * 2)),
      waterConservation: Math.max(85, Math.min(98, prev.waterConservation + (Math.random() - 0.5) * 1)),
      wasteReduction: Math.max(70, Math.min(90, prev.wasteReduction + (Math.random() - 0.5) * 3))
    }));

    setCarbonFootprint(prev => ({
      ...prev,
      solarGeneration: Math.max(1000, Math.min(1500, prev.solarGeneration + (Math.random() - 0.5) * 100))
    }));
  };

  const getMetricColor = (value, thresholds = { good: 80, fair: 60 }) => {
    if (value >= thresholds.good) return 'text-green-600 bg-green-50';
    if (value >= thresholds.fair) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Near Completion': return 'bg-purple-100 text-purple-800';
      case 'Planning': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Energy': return <FaSolarPanel className="text-yellow-600" />;
      case 'Water': return <FaWater className="text-blue-600" />;
      case 'Waste': return <FaRecycle className="text-green-600" />;
      case 'Transport': return <FaCar className="text-purple-600" />;
      default: return <FaLeaf className="text-green-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaLeaf className="text-4xl text-green-600" />
            <h1 className="text-3xl font-bold text-gray-800">Sustainability Dashboard</h1>
          </div>
          <p className="text-gray-600">Smart environmental monitoring and green campus initiatives</p>
        </div>

        {/* Sustainability Score */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center">
          <div className="flex items-center justify-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-8 border-green-200 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">{sustainabilityMetrics.sustainabilityScore}</p>
                  <p className="text-sm text-gray-600">Score</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-600 animate-spin" style={{ animationDuration: '3s' }}></div>
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Campus Sustainability Score</h2>
              <p className="text-gray-600 mb-4">Overall environmental performance rating</p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-green-600">
                  <FaArrowUp /> +5% from last month
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Excellent
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {Object.entries(sustainabilityMetrics).filter(([key]) => key !== 'sustainabilityScore').map(([key, value]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${getMetricColor(value)}`}>
                {key === 'energyEfficiency' && <FaLightbulb className="text-2xl" />}
                {key === 'waterConservation' && <FaWater className="text-2xl" />}
                {key === 'wasteReduction' && <FaRecycle className="text-2xl" />}
                {key === 'carbonNeutral' && <FaLeaf className="text-2xl" />}
                {key === 'renewableEnergy' && <FaSolarPanel className="text-2xl" />}
                {key === 'greenSpaces' && <FaTree className="text-2xl" />}
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-1">{value.toFixed(0)}%</p>
              <p className="text-sm text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carbon Footprint */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaChartLine className="text-blue-600" />
                Carbon Footprint Analysis
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Emissions</p>
                        <p className="text-2xl font-bold text-red-600">{carbonFootprint.totalEmissions}</p>
                        <p className="text-xs text-gray-500">tons CO2/year</p>
                      </div>
                      <div className="text-red-600 text-2xl">
                        <FaArrowDown />
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-green-600 text-sm font-medium">
                        ↓ {carbonFootprint.reduction}% from last year
                      </span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Solar Generation</p>
                        <p className="text-2xl font-bold text-yellow-600">{carbonFootprint.solarGeneration}</p>
                        <p className="text-xs text-gray-500">kWh/day</p>
                      </div>
                      <FaSolarPanel className="text-yellow-600 text-2xl" />
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Energy Saved</p>
                        <p className="text-2xl font-bold text-blue-600">{carbonFootprint.energySaved}%</p>
                        <p className="text-xs text-gray-500">vs baseline</p>
                      </div>
                      <FaLightbulb className="text-blue-600 text-2xl" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Trees Planted</p>
                        <p className="text-2xl font-bold text-green-600">{carbonFootprint.treesPlanted}</p>
                        <p className="text-xs text-gray-500">this year</p>
                      </div>
                      <FaTree className="text-green-600 text-2xl" />
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Waste Recycled</p>
                        <p className="text-2xl font-bold text-purple-600">{carbonFootprint.wasteRecycled}%</p>
                        <p className="text-xs text-gray-500">of total waste</p>
                      </div>
                      <FaRecycle className="text-purple-600 text-2xl" />
                    </div>
                  </div>

                  <div className="bg-cyan-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Water Saved</p>
                        <p className="text-2xl font-bold text-cyan-600">45%</p>
                        <p className="text-xs text-gray-500">through conservation</p>
                      </div>
                      <FaWater className="text-cyan-600 text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Green Initiatives */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaLeaf className="text-green-600" />
                Active Green Initiatives
              </h2>

              <div className="space-y-6">
                {greenInitiatives.map((initiative) => (
                  <div key={initiative.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">
                          {getCategoryIcon(initiative.category)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{initiative.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{initiative.description}</p>
                          <p className="text-sm text-green-600 font-medium">{initiative.impact}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(initiative.status)}`}>
                        {initiative.status}
                      </span>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{initiative.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${initiative.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {initiative.startDate} - {initiative.endDate}
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{initiative.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements & Alerts */}
          <div className="space-y-8">
            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaTrophy className="text-yellow-600" />
                Achievements
              </h2>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-yellow-50 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-yellow-600 text-xl mt-1">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        <p className="text-sm text-green-600 font-medium mb-1">{achievement.impact}</p>
                        <p className="text-xs text-gray-500">{achievement.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Alerts & Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaExclamationTriangle className="text-orange-600" />
                Alerts & Actions
              </h2>

              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      alert.type === 'warning' ? 'bg-orange-50 border-orange-500' :
                      alert.type === 'success' ? 'bg-green-50 border-green-500' :
                      'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className={`text-lg ${
                        alert.type === 'warning' ? 'text-orange-600' :
                        alert.type === 'success' ? 'text-green-600' :
                        'text-blue-600'
                      }`}>
                        {alert.type === 'warning' ? <FaExclamationTriangle /> :
                         alert.type === 'success' ? <FaCheckCircle /> :
                         <FaLightbulb />}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.priority === 'High' ? 'bg-red-100 text-red-800' :
                        alert.priority === 'Medium' ? 'bg-orange-100 text-orange-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {alert.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-800 mb-2">{alert.message}</p>
                    <p className="text-xs text-gray-600">{alert.action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaUsers className="text-purple-600" />
                Community Impact
              </h2>

              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">15,000+</p>
                  <p className="text-sm text-gray-600">Students engaged in sustainability</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">500+</p>
                  <p className="text-sm text-gray-600">Green projects completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">₹2.5Cr</p>
                  <p className="text-sm text-gray-600">Annual savings from green initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityDashboard;