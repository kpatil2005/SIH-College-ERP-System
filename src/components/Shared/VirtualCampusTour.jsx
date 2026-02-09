import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaVrCardboard,
  FaCamera,
  FaExpand,
  FaCompass,
  FaMapMarkerAlt,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaInfoCircle,
  FaArrowLeft,
  FaArrowRight,
  FaHome,
  FaGraduationCap,
  FaFlask,
  FaBook,
  FaCoffee,
  FaParking
} from 'react-icons/fa';

const VirtualCampusTour = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isVRMode, setIsVRMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const campusLocations = [
    {
      id: 1,
      name: 'Main Entrance & Reception',
      icon: <FaHome />,
      description: 'Welcome to our beautiful campus! The main entrance features modern architecture and a welcoming reception area.',
      videoUrl: '/videos/entrance.mp4',
      imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
      hotspots: [
        { x: 30, y: 40, info: 'Reception Desk - Get visitor passes and information' },
        { x: 70, y: 60, info: 'Campus Map Display - Interactive campus navigation' }
      ],
      audioGuide: 'Welcome to XYZ Engineering College. This is our main entrance where thousands of students begin their journey every day.'
    },
    {
      id: 2,
      name: 'Academic Block A',
      icon: <FaGraduationCap />,
      description: 'State-of-the-art classrooms equipped with smart boards and modern teaching facilities.',
      videoUrl: '/videos/academic-block.mp4',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800',
      hotspots: [
        { x: 25, y: 35, info: 'Smart Classroom - Interactive learning environment' },
        { x: 60, y: 50, info: 'Faculty Lounge - Teacher collaboration space' },
        { x: 80, y: 70, info: 'Student Study Area - Quiet study zones' }
      ],
      audioGuide: 'Academic Block A houses our computer science and engineering departments with 50 modern classrooms.'
    },
    {
      id: 3,
      name: 'Research Laboratory',
      icon: <FaFlask />,
      description: 'Advanced research facilities with cutting-edge equipment for innovation and discovery.',
      videoUrl: '/videos/lab.mp4',
      imageUrl: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800',
      hotspots: [
        { x: 40, y: 30, info: 'AI Research Lab - Machine learning projects' },
        { x: 65, y: 45, info: 'Robotics Lab - Autonomous systems development' },
        { x: 20, y: 70, info: 'IoT Lab - Internet of Things experiments' }
      ],
      audioGuide: 'Our research laboratories are equipped with the latest technology for groundbreaking research in AI, robotics, and IoT.'
    },
    {
      id: 4,
      name: 'Central Library',
      icon: <FaBook />,
      description: 'A vast collection of books, digital resources, and quiet study spaces for academic excellence.',
      videoUrl: '/videos/library.mp4',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      hotspots: [
        { x: 35, y: 25, info: 'Digital Section - E-books and online resources' },
        { x: 55, y: 40, info: 'Reading Hall - Silent study area' },
        { x: 75, y: 65, info: 'Group Study Rooms - Collaborative learning' }
      ],
      audioGuide: 'The central library houses over 100,000 books and provides 24/7 digital access to academic resources.'
    },
    {
      id: 5,
      name: 'Student Cafeteria',
      icon: <FaCoffee />,
      description: 'Modern dining facility serving healthy and delicious meals for the entire campus community.',
      videoUrl: '/videos/cafeteria.mp4',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
      hotspots: [
        { x: 30, y: 40, info: 'Food Court - Multiple cuisine options' },
        { x: 70, y: 30, info: 'Seating Area - Comfortable dining space' },
        { x: 50, y: 70, info: 'Outdoor Terrace - Al fresco dining' }
      ],
      audioGuide: 'Our cafeteria serves over 3000 students daily with healthy, affordable meals and a variety of cuisines.'
    },
    {
      id: 6,
      name: 'Sports Complex',
      icon: <FaParking />,
      description: 'Complete sports facilities including gymnasium, courts, and outdoor fields for physical fitness.',
      videoUrl: '/videos/sports.mp4',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      hotspots: [
        { x: 25, y: 35, info: 'Gymnasium - Modern fitness equipment' },
        { x: 60, y: 25, info: 'Basketball Court - Indoor sports facility' },
        { x: 80, y: 60, info: 'Swimming Pool - Olympic size pool' }
      ],
      audioGuide: 'The sports complex promotes physical wellness with state-of-the-art facilities for various indoor and outdoor sports.'
    }
  ];

  const currentLoc = campusLocations[currentLocation];

  useEffect(() => {
    // Simulate audio guide
    if (isPlaying && !isMuted) {
      console.log('Playing audio:', currentLoc.audioGuide);
    }
  }, [currentLocation, isPlaying, isMuted]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const toggleVRMode = () => {
    setIsVRMode(!isVRMode);
    // In real implementation, this would initialize WebXR
  };

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % campusLocations.length);
  };

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + campusLocations.length) % campusLocations.length);
  };

  const speakAudioGuide = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Main Tour Interface */}
      <div className="relative w-full h-screen">
        {/* 360° View Container */}
        <div className={`relative w-full h-full ${isVRMode ? 'vr-mode' : ''}`}>
          <img
            src={currentLoc.imageUrl}
            alt={currentLoc.name}
            className="w-full h-full object-cover"
          />
          
          {/* Interactive Hotspots */}
          {currentLoc.hotspots.map((hotspot, index) => (
            <motion.div
              key={index}
              className="absolute w-6 h-6 bg-blue-500 rounded-full cursor-pointer shadow-lg"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => alert(hotspot.info)}
            >
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              <div className="relative w-full h-full bg-blue-600 rounded-full flex items-center justify-center">
                <FaInfoCircle className="text-white text-xs" />
              </div>
            </motion.div>
          ))}

          {/* VR Mode Overlay */}
          {isVRMode && (
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="text-white text-center">
                <FaVrCardboard className="text-6xl mb-4 mx-auto" />
                <p className="text-xl">VR Mode Active</p>
                <p className="text-sm opacity-75">Use your VR headset to explore</p>
              </div>
            </div>
          )}
        </div>

        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleVRMode}
              className={`p-3 rounded-full ${isVRMode ? 'bg-blue-600' : 'bg-black bg-opacity-50'} text-white hover:bg-opacity-75 transition-colors`}
            >
              <FaVrCardboard size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleFullscreen}
              className="p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
            >
              <FaExpand size={20} />
            </motion.button>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setIsPlaying(!isPlaying);
                if (!isPlaying) speakAudioGuide(currentLoc.audioGuide);
              }}
              className="p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
            >
              {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Location Info Panel */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-80 text-white rounded-2xl p-6 z-20"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl text-blue-400">{currentLoc.icon}</div>
              <div>
                <h2 className="text-xl font-bold">{currentLoc.name}</h2>
                <p className="text-sm opacity-75">Location {currentLocation + 1} of {campusLocations.length}</p>
              </div>
            </div>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaInfoCircle />
            </button>
          </div>

          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4"
              >
                <p className="text-sm opacity-90">{currentLoc.description}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevLocation}
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
              >
                <FaArrowLeft />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextLocation}
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
              >
                <FaArrowRight />
              </motion.button>
            </div>

            {/* Location Navigation */}
            <div className="flex gap-2">
              {campusLocations.map((loc, index) => (
                <button
                  key={loc.id}
                  onClick={() => setCurrentLocation(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentLocation ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mini Map */}
        <div className="absolute top-4 right-4 w-48 h-32 bg-black bg-opacity-80 rounded-lg p-3 z-20">
          <div className="flex items-center gap-2 mb-2">
            <FaCompass className="text-blue-400" />
            <span className="text-white text-sm font-medium">Campus Map</span>
          </div>
          <div className="relative w-full h-20 bg-gray-800 rounded">
            {campusLocations.map((loc, index) => (
              <div
                key={loc.id}
                className={`absolute w-2 h-2 rounded-full ${
                  index === currentLocation ? 'bg-blue-500' : 'bg-gray-500'
                }`}
                style={{
                  left: `${(index % 3) * 33 + 10}%`,
                  top: `${Math.floor(index / 3) * 40 + 20}%`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Location Quick Access */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
        <div className="bg-black bg-opacity-80 rounded-2xl p-3 space-y-2">
          {campusLocations.map((loc, index) => (
            <motion.button
              key={loc.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentLocation(index)}
              className={`p-3 rounded-xl transition-colors ${
                index === currentLocation 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              title={loc.name}
            >
              {loc.icon}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualCampusTour;