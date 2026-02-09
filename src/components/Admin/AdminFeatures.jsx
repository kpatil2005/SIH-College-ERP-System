import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaUsersCog,
  FaFileAlt,
  FaShieldAlt,
  FaBell,
  FaCogs,
} from "react-icons/fa";

const AdminFeatures = () => {
  const features = [
    {
      icon: <FaChartLine size={30} />,
      title: "Analytics Dashboard",
      text: "Real-time insights on performance & growth trends.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <FaUsersCog size={30} />,
      title: "Staff Management",
      text: "Easily manage staff roles, attendance & payroll.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaFileAlt size={30} />,
      title: "Reports & Compliance",
      text: "Generate instant reports & ensure compliance.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "Data Security",
      text: "Role-based access with end-to-end encryption.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <FaBell size={30} />,
      title: "Smart Notifications",
      text: "Stay updated with instant alerts & reminders.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FaCogs size={30} />,
      title: "System Settings",
      text: "Configure & customize the entire ERP system.",
      color: "bg-teal-100 text-teal-600",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-12 px-6 md:px-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.08, y: -5 }}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${item.color} transition-colors duration-300 group`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#003566] mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminFeatures;
