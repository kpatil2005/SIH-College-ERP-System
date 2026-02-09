import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  FaUser,
  FaMoneyBillWave,
  FaBed,
  FaClipboardList,
  FaCheckCircle,
  FaChartLine,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

const ParentSidebar = ({ isOpen, setIsOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navItems = [
    { to: "/parent/profile", icon: <FaUser />, label: "ParentDashboard" },
    { to: "/parent/payments", icon: <FaMoneyBillWave />, label: "Payment History" },
    { to: "/parent/hostel", icon: <FaBed />, label: "Hostel Status" },
    { to: "/parent/results", icon: <FaClipboardList />, label: "Examination Results" },
    { to: "/parent/attendance", icon: <FaCheckCircle />, label: "Attendance Record" },
    { to: "/parent/progress", icon: <FaChartLine />, label: "Student Progress" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const SidebarContent = ({ collapsed }) => (
    <div className="flex flex-col h-full text-white relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <h2 className="text-xl font-bold">Parent Portal</h2>}
        <button onClick={() => window.innerWidth < 768 ? setMobileOpen(false) : setIsOpen(!isOpen)}>
          {window.innerWidth < 768 ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-2 overflow-y-auto">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all duration-200 ${
                isActive ? "bg-[#ffc300] text-black font-bold shadow-md" : "text-white hover:bg-[#ffc300] hover:text-black"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button - Always at bottom */}
      <div className="p-4 absolute bottom-0 w-full">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full p-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all duration-200"
        >
          <FaSignOutAlt className="mr-2 text-lg" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className={`hidden md:flex h-screen fixed transition-all duration-300 bg-[#003566] ${isOpen ? "w-64" : "w-20"}`}>
        <SidebarContent collapsed={!isOpen} />
      </div>
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(true)} className="m-4 text-2xl fixed z-40 text-white">
          <FaBars />
        </button>
        {mobileOpen && <div onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}
        <div className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 bg-[#003566] ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <SidebarContent collapsed={false} />
        </div>
      </div>
    </>
  );
};

export default ParentSidebar;
