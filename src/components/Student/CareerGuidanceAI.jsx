import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaBriefcase,
  FaChartLine,
  FaGraduationCap,
  FaCode,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaShieldAlt,
  FaStar,
  FaMapMarkerAlt,
  FaDollarSign,
  FaCalendarAlt,
  FaUsers,
  FaLightbulb,
  FaBullseye
} from 'react-icons/fa';

const CareerGuidanceAI = () => {
  const [careerProfile, setCareerProfile] = useState({});
  const [jobRecommendations, setJobRecommendations] = useState([]);
  const [skillGaps, setSkillGaps] = useState([]);
  const [marketTrends, setMarketTrends] = useState([]);
  const [selectedCareerPath, setSelectedCareerPath] = useState(null);

  useEffect(() => {
    // Simulate AI career analysis
    generateCareerProfile();
    generateJobRecommendations();
    generateSkillGaps();
    generateMarketTrends();
  }, []);

  const generateCareerProfile = () => {
    setCareerProfile({
      strengths: ['Problem Solving', 'Analytical Thinking', 'Programming', 'Team Collaboration'],
      interests: ['Technology', 'Innovation', 'Data Science', 'Web Development'],
      personality: 'Analytical Innovator',
      careerFit: 92,
      topCareerPaths: [
        { name: 'Software Engineer', match: 95, icon: <FaCode />, growth: '+22%' },
        { name: 'Data Scientist', match: 88, icon: <FaDatabase />, growth: '+31%' },
        { name: 'AI/ML Engineer', match: 91, icon: <FaRobot />, growth: '+40%' },
        { name: 'Cloud Architect', match: 85, icon: <FaCloud />, growth: '+28%' },
        { name: 'Cybersecurity Analyst', match: 82, icon: <FaShieldAlt />, growth: '+18%' }
      ]
    });
  };

  const generateJobRecommendations = () => {
    setJobRecommendations([
      {
        id: 1,
        title: 'Junior Software Developer',
        company: 'TechCorp India',
        location: 'Bangalore',
        salary: '₹6-8 LPA',
        match: 94,
        skills: ['React', 'Node.js', 'MongoDB'],
        type: 'Full-time',
        experience: 'Fresher',
        posted: '2 days ago',
        applicants: 45
      },
      {
        id: 2,
        title: 'Data Analyst Intern',
        company: 'DataFlow Solutions',
        location: 'Pune',
        salary: '₹4-5 LPA',
        match: 89,
        skills: ['Python', 'SQL', 'Tableau'],
        type: 'Internship',
        experience: 'Fresher',
        posted: '1 day ago',
        applicants: 23
      },
      {
        id: 3,
        title: 'AI Research Assistant',
        company: 'Innovation Labs',
        location: 'Hyderabad',
        salary: '₹7-9 LPA',
        match: 92,
        skills: ['Python', 'TensorFlow', 'Machine Learning'],
        type: 'Full-time',
        experience: '0-1 years',
        posted: '3 days ago',
        applicants: 67
      }
    ]);
  };

  const generateSkillGaps = () => {
    setSkillGaps([
      {
        skill: 'Advanced React',
        currentLevel: 60,
        requiredLevel: 85,
        priority: 'High',
        timeToLearn: '2-3 months',
        resources: ['React Documentation', 'Advanced React Course', 'Practice Projects']
      },
      {
        skill: 'System Design',
        currentLevel: 30,
        requiredLevel: 75,
        priority: 'Medium',
        timeToLearn: '4-6 months',
        resources: ['System Design Primer', 'Design Patterns', 'Architecture Courses']
      },
      {
        skill: 'Cloud Computing (AWS)',
        currentLevel: 25,
        requiredLevel: 70,
        priority: 'High',
        timeToLearn: '3-4 months',
        resources: ['AWS Certification', 'Cloud Practitioner', 'Hands-on Labs']
      }
    ]);
  };

  const generateMarketTrends = () => {
    setMarketTrends([
      {
        trend: 'AI/ML Engineering',
        growth: '+40%',
        demand: 'Very High',
        avgSalary: '₹12-25 LPA',
        description: 'Highest growth in tech sector with increasing AI adoption'
      },
      {
        trend: 'Cloud Computing',
        growth: '+28%',
        demand: 'High',
        avgSalary: '₹8-18 LPA',
        description: 'Digital transformation driving cloud migration needs'
      },
      {
        trend: 'Cybersecurity',
        growth: '+18%',
        demand: 'High',
        avgSalary: '₹7-15 LPA',
        description: 'Growing security threats increase demand for experts'
      }
    ]);
  };

  const getMatchColor = (match) => {
    if (match >= 90) return 'text-green-600 bg-green-50';
    if (match >= 80) return 'text-blue-600 bg-blue-50';
    return 'text-orange-600 bg-orange-50';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-orange-600 bg-orange-50';
      default: return 'text-green-600 bg-green-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaRocket className="text-4xl text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-800">AI Career Guidance</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Personalized career recommendations powered by AI analysis of your skills, interests, and market trends
          </p>
        </div>

        {/* Career Profile Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaBullseye className="text-purple-600 text-2xl" />
            <h2 className="text-xl font-bold text-gray-800">Your Career Profile</h2>
            <span className="ml-auto bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              {careerProfile.careerFit}% Match
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Top Strengths</h3>
              <div className="space-y-2">
                {careerProfile.strengths?.map((strength, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaStar className="text-yellow-500 text-sm" />
                    <span className="text-sm text-gray-700">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Key Interests</h3>
              <div className="flex flex-wrap gap-2">
                {careerProfile.interests?.map((interest, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Personality Type</h3>
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="font-medium text-purple-800">{careerProfile.personality}</p>
                <p className="text-xs text-purple-600 mt-1">Ideal for innovation-driven roles</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Career Path Recommendations */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaBriefcase className="text-blue-600" />
                Recommended Career Paths
              </h2>

              <div className="space-y-4">
                {careerProfile.topCareerPaths?.map((path, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedCareerPath(path)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl text-blue-600">{path.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{path.name}</h3>
                          <p className="text-sm text-gray-600">Growth: {path.growth} annually</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(path.match)}`}>
                          {path.match}% Match
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Job Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaChartLine className="text-green-600" />
                Personalized Job Matches
              </h2>

              <div className="space-y-4">
                {jobRecommendations.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">{job.title}</h3>
                        <p className="text-blue-600 font-medium">{job.company}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaDollarSign /> {job.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt /> {job.posted}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(job.match)}`}>
                        {job.match}% Match
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{job.type}</span>
                        <span>{job.experience}</span>
                        <span className="flex items-center gap-1">
                          <FaUsers /> {job.applicants} applicants
                        </span>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Development & Market Trends */}
          <div className="space-y-8">
            {/* Skill Gap Analysis */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaLightbulb className="text-yellow-600" />
                Skill Development
              </h2>

              <div className="space-y-4">
                {skillGaps.map((skill, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-800">{skill.skill}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(skill.priority)}`}>
                        {skill.priority}
                      </span>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Current: {skill.currentLevel}%</span>
                        <span>Target: {skill.requiredLevel}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${skill.currentLevel}%` }}
                        ></div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 mb-2">Time to learn: {skill.timeToLearn}</p>
                    
                    <div className="space-y-1">
                      {skill.resources.slice(0, 2).map((resource, idx) => (
                        <button key={idx} className="block text-xs text-blue-600 hover:underline">
                          📚 {resource}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Trends */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaChartLine className="text-purple-600" />
                Market Trends
              </h2>

              <div className="space-y-4">
                {marketTrends.map((trend, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-800">{trend.trend}</h3>
                      <span className="text-green-600 font-bold">{trend.growth}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-2 text-sm">
                      <span className="text-blue-600">Demand: {trend.demand}</span>
                      <span className="text-green-600">Avg: {trend.avgSalary}</span>
                    </div>
                    <p className="text-xs text-gray-600">{trend.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidanceAI;