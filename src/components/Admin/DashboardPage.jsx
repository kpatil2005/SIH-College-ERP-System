import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaClipboardList, FaClock, FaBell, FaBook, FaPenFancy } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardPage = () => {
  const metrics = [
    { title: "Total Students", value: 120, icon: <FaUserGraduate size={28} /> },
    { title: "Total Faculty", value: 15, icon: <FaChalkboardTeacher size={28} /> },
    { title: "Attendance Today", value: "95%", icon: <FaClock size={28} /> },
    { title: "Assignments Pending", value: 8, icon: <FaClipboardList size={28} /> },
  ];

  const recentActivities = [
    "5 new student registrations today",
    "3 assignments uploaded by faculty",
    "95% attendance submissions completed",
    "Grades updated for 2 subjects",
  ];

  const quickLinks = ["Timetable", "Library", "Exams", "Clubs"];

  const attendanceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Attendance %",
        data: [90, 95, 92, 96, 95],
        borderColor: "#2563EB",
        backgroundColor: "rgba(37, 99, 235, 0.1)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="relative">
          <FaBell size={24} className="text-gray-600 cursor-pointer" />
          <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-xl shadow-md bg-white flex items-center gap-4 border-l-4 border-blue-600"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
          >
            <div className="p-3 bg-blue-50 rounded-full text-blue-600">{metric.icon}</div>
            <div>
              <h2 className="text-lg font-medium text-gray-700">{metric.title}</h2>
              <motion.p
                className="text-2xl font-bold mt-1 text-gray-900"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                {metric.value}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {recentActivities.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h2>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link, i) => (
              <button
                key={i}
                className="text-gray-800 hover:bg-gray-100 transition-colors rounded-lg p-3 font-medium text-left flex items-center gap-2"
              >
                <FaBook /> {link}
              </button>
            ))}
          </div>
        </div>

        {/* To-Do / Assignments */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Assignments To-Do</h2>
          <ul className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Math Assignment 1 - Due Tomorrow</li>
            <li>Physics Lab Report - Due in 2 days</li>
            <li>CS Project Submission - Due Friday</li>
          </ul>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2 px-4 w-full flex items-center justify-center gap-2">
            <FaPenFancy /> Add New Task
          </button>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-10 lg:col-span-2">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Attendance Overview</h2>
        <Line data={attendanceData} />
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Engineering College Dashboard. All rights reserved.
      </div>
    </div>
  );
};

export default DashboardPage;
