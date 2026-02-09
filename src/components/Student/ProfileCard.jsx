import React, { useState } from "react";
import {
  FaUserGraduate,
  FaBook,
  FaCalendarAlt,
  FaFileAlt,
  FaMoneyBill,
} from "react-icons/fa";

// Example profile image URL (replace with your own)
const profileImage = "https://i.pravatar.cc/150?img=12";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("Academics");

  const tabs = [
    { name: "Academics", icon: <FaBook /> },
    { name: "Attendance", icon: <FaCalendarAlt /> },
    { name: "Exams", icon: <FaUserGraduate /> },
    { name: "Documents", icon: <FaFileAlt /> },
    { name: "Fees", icon: <FaMoneyBill /> },
  ];

  return (
    <div className="min-h-screen bg-[#d9d9d9] p-6 font-sans">
      {/* Header / Profile Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex flex-col md:flex-row md:items-center md:space-x-6">
        {/* Profile Photo */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-28 h-28 rounded-full mb-4 md:mb-0 border-4 border-[#003566]"
        />
        {/* Student Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#003566] mb-2">
            PATIL PRANAY PRASHANT
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold">PRN No</p>
              <p>230105131009</p>
            </div>
            <div>
              <p className="font-semibold">Admission Type</p>
              <p>First Year (2023-24)</p>
            </div>
            <div>
              <p className="font-semibold">Course</p>
              <p>B.Tech in Computer Science and Engineering (BTCOS)</p>
            </div>
            <div>
              <p className="font-semibold">Year</p>
              <p>Third Year (2025-26)</p>
            </div>
            <div>
              <p className="font-semibold">Semester</p>
              <p>5</p>
            </div>
            <div>
              <p className="font-semibold">Admission Cycle</p>
              <p>2023</p>
            </div>
            <div>
              <p className="font-semibold">Transfer Case</p>
              <p>No</p>
            </div>
            <div>
              <p className="font-semibold">ABC Id</p>
              <p>582-883-872-294</p>
            </div>
            <div>
              <p className="font-semibold">Package</p>
              <p>No</p>
            </div>
            <div>
              <p className="font-semibold">Cancellation Status</p>
              <p>No</p>
            </div>
          </div>
        </div>
      </div>

      {/* Removed Academic Summary Cards */}
      {/* Personal Information */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-[#003566] mb-4">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Gender</p>
            <p>Male</p>
          </div>
          <div>
            <p className="font-semibold">Aadhaar Card No</p>
            <p>529862244808</p>
          </div>
          <div>
            <p className="font-semibold">Date of Birth</p>
            <p>09-08-2005</p>
          </div>
          <div>
            <p className="font-semibold">Place of Birth</p>
            <p>KASODA</p>
          </div>
          <div className="md:col-span-2">
            <p className="font-semibold">Local Address</p>
            <p>
              AT/POST- NAMRATA NAGAR, ERANDOL, Jalgaon, MAHARASHTRA, 425110
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="font-semibold">Permanent Address</p>
            <p>
              AT/POST- NAMRATA NAGAR, ERANDOL, Jalgaon, MAHARASHTRA, 425110
            </p>
          </div>
          <div>
            <p className="font-semibold">Nationality</p>
            <p>Indian</p>
          </div>
          <div>
            <p className="font-semibold">Domicile</p>
            <p>MS</p>
          </div>
          <div>
            <p className="font-semibold">Category</p>
            <p>OBC</p>
          </div>
          <div>
            <p className="font-semibold">Blood Group</p>
            <p>A-</p>
          </div>
        </div>
      </div>

      {/* Tabbed Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex space-x-4 border-b border-gray-300 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`flex items-center space-x-2 px-3 py-2 font-medium ${
                activeTab === tab.name
                  ? "text-[#003566] border-b-2 border-[#ffc300]"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Placeholder */}
        <div className="p-4 text-gray-700">
          <p>{activeTab} content will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
