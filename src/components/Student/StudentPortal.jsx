import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaClipboardList,
  FaBell,
  FaUserGraduate,
  FaFileAlt,
  FaLaptop,
} from "react-icons/fa";

const StudentPortal = () => {
  const features = [
    { icon: <FaBook size={30} />, title: "Subjects & Syllabus", text: "Access all subjects, syllabus, and study material in one place.", color: "bg-indigo-100 text-indigo-600" },
    { icon: <FaChalkboardTeacher size={30} />, title: "Teacher Interaction", text: "Message teachers for queries or guidance.", color: "bg-green-100 text-green-600" },
    { icon: <FaCalendarAlt size={30} />, title: "Attendance", text: "View daily attendance and track absences.", color: "bg-teal-100 text-teal-600" },
    { icon: <FaClipboardList size={30} />, title: "Assignments", text: "Check, submit, and track assignments efficiently.", color: "bg-pink-100 text-pink-600" },
    { icon: <FaBell size={30} />, title: "Notifications", text: "Receive alerts for exams, events, and announcements.", color: "bg-red-100 text-red-600" },
    { icon: <FaUserGraduate size={30} />, title: "Grades & Report", text: "Track your performance and view report cards.", color: "bg-purple-100 text-purple-600" },
    { icon: <FaFileAlt size={30} />, title: "Exams & Results", text: "Access exam schedules and results directly.", color: "bg-yellow-100 text-yellow-600" },
    { icon: <FaLaptop size={30} />, title: "Online Learning", text: "Attend online classes and access virtual labs.", color: "bg-blue-100 text-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => {
          // slide from left for even, right for odd
          const direction = index % 2 === 0 ? -50 : 50;

          return (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300 transition-transform duration-500"
              initial={{ opacity: 0, x: direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${item.color} transition-all duration-500 hover:bg-opacity-80`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#003566] mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentPortal;
