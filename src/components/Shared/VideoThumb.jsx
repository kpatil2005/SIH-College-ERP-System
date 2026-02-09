import React, { useState } from "react";
import { motion } from "framer-motion";
import thumbnail from "../../assets/images/bg1.png"; // Thumbnail image
import videoFile from "../../assets/images/videothumb.mp4"; // Video file

const VideoThumb = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);

  return (
    <motion.div
      className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
          To Have Live Experience
        </h1>
      </header>

      {/* Video / Thumbnail */}
      <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        {isPlaying ? (
          <video
            src={videoFile}
            controls
            autoPlay
            className="w-full h-auto object-cover rounded-lg"
          />
        ) : (
          <motion.div
            className="relative w-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={handlePlay}
          >
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300"
            />
            {/* Animated Play Button */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center"
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: [0.7, 1, 0.9] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default VideoThumb;
