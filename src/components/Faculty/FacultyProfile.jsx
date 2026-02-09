import React, { useState } from "react";
import {
  FaUserCircle,
  FaCalendarCheck,
  FaBook,
  FaRegCalendarAlt,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const SidebarItem = ({ icon: Icon, label, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200
      ${
        isActive
          ? "bg-[#ffc300] text-[#003566]"
          : "text-white hover:bg-[#ffc300] hover:text-[#003566]"
      }`}
  >
    <Icon className="text-lg" />
    <span className="font-medium">{label}</span>
  </div>
);

const FacultyProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <>
            <h1 className="text-3xl font-bold text-[#003566] mb-4">
              Welcome, Faculty!
            </h1>
            <p className="text-gray-600">This is your profile dashboard.</p>
          </>
        );
      case "Add Attendance":
        return (
          <>
            <h1 className="text-2xl font-bold text-[#003566] mb-4">Add Attendance</h1>
            <p className="text-gray-600">Feature coming soon...</p>
          </>
        );
      case "Upload Notes":
        return (
          <>
            <h1 className="text-2xl font-bold text-[#003566] mb-4">Upload Notes</h1>
            <p className="text-gray-600">Feature coming soon...</p>
          </>
        );
      case "View Schedule":
        return (
          <>
            <h1 className="text-2xl font-bold text-[#003566] mb-4">Your Schedule</h1>
            <p className="text-gray-600">Feature coming soon...</p>
          </>
        );
      case "Settings":
        return (
          <>
            <h1 className="text-2xl font-bold text-[#003566] mb-4">Settings</h1>
            <p className="text-gray-600">Feature coming soon...</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-[#003566] shadow-lg fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center py-6 border-b border-[#ffc300]">
          <FaUserCircle className="text-4xl text-white" />
          <span className="ml-3 font-bold text-lg text-white">Faculty</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <SidebarItem
            icon={FaUserCircle}
            label="Profile"
            isActive={activeTab === "Profile"}
            onClick={() => setActiveTab("Profile")}
          />
          <SidebarItem
            icon={FaCalendarCheck}
            label="Add Attendance"
            isActive={activeTab === "Add Attendance"}
            onClick={() => setActiveTab("Add Attendance")}
          />
          <SidebarItem
            icon={FaBook}
            label="Upload Notes"
            isActive={activeTab === "Upload Notes"}
            onClick={() => setActiveTab("Upload Notes")}
          />
          <SidebarItem
            icon={FaRegCalendarAlt}
            label="View Schedule"
            isActive={activeTab === "View Schedule"}
            onClick={() => setActiveTab("View Schedule")}
          />
          <SidebarItem
            icon={FaCog}
            label="Settings"
            isActive={activeTab === "Settings"}
            onClick={() => setActiveTab("Settings")}
          />
        </nav>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
            onClick={() => {
              if (window.confirm("Are you sure you want to logout?")) {
                window.location.href = "/faculty/login";
              }
            }}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Toggle Button for Mobile */}
      <button
        className="absolute top-4 left-4 md:hidden z-50 bg-white p-2 rounded shadow"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars className="text-[#003566]" />
      </button>

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64 mt-10 md:mt-0">
        <div className="bg-white p-8 rounded shadow overflow-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default FacultyProfile;
