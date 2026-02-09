import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";

const SuccessSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const features = [
    "One ERP, Many Roles: Students, Faculty, Admins, Parents",
    "Single Source of Truth: Real-time cloud database",
    "Online Admissions, Fee Payments & Receipts",
    "Smart Hostel Tracking: Live occupancy updates",
    "Dashboards: Instant insights for administrators",
    "Automation: Receipts, reports, updates generated automatically",
    "Secure by Design: Role-based access and cloud backups",
    "Affordable: Cloud-first, low-cost, suitable for public colleges",
  ];

  const teamImages = [team1, team2, team3];

  return (
    <section className="bg-[#1b325a] min-h-screen px-6 md:px-20 py-16 text-white flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* Left Side - Text Content */}
      <motion.div
        className="lg:w-1/2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-[#ffc300]"
          variants={fadeInUp}
        >
          Why Quick Campus School Management System?
        </motion.h2>

        <motion.p className="text-lg text-gray-200 mb-6" variants={fadeInUp}>
          Quick Campus is the most preferred ERP in India because it combines
          cutting-edge technology with user-friendly design to streamline
          educational management.
        </motion.p>

        <motion.ul className="space-y-4 mb-8" variants={fadeInUp}>
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-[#ffc300] mt-1 flex-shrink-0" />
              <span className="text-gray-100 text-lg">{feature}</span>
            </li>
          ))}
        </motion.ul>

        <motion.button
          className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right Side - Images Side by Side */}
      <motion.div
        className="lg:w-1/2 flex justify-between items-start gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {teamImages.map((img, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 flex-1"
            variants={fadeInUp}
          >
            <img
              src={img}
              alt={`team-${index + 1}`}
              className="w-full h-96 md:h-[32rem] object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SuccessSection;
