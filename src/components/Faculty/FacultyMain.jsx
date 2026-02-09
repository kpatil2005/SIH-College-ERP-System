import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  FaUser,
  FaChalkboardTeacher,
  FaEdit,
  FaCheckSquare,
  FaSearch,
  FaSignOutAlt,
  FaAngleLeft,
  FaAngleRight,
  FaBars,
  FaTimes,
  FaBrain,
} from "react-icons/fa";

const FacultyMain = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navItems = [
    { to: "profile", icon: <FaUser />, label: "Profile" },
    { to: "assignments", icon: <FaChalkboardTeacher />, label: "Assignments" },
    { to: "grades", icon: <FaEdit />, label: "Grade Entry" },
    { to: "attendance", icon: <FaCheckSquare />, label: "Attendance" },
    { to: "students", icon: <FaSearch />, label: "Student Lookup" },
    { to: "analytics", icon: <FaBrain />, label: "AI Analytics" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const SidebarContent = ({ collapsed }) => (
    <div className="flex flex-col h-full justify-between text-white">
      <div>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          {!collapsed && <h2 className="text-xl font-bold">Faculty Portal</h2>}
          <button
            onClick={() =>
              window.innerWidth < 768
                ? setMobileOpen(false)
                : setSidebarOpen(!sidebarOpen)
            }
            className="text-white text-lg"
          >
            {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="mt-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center p-3 rounded hover:bg-[#ffc300] hover:text-black transition-all ${
                  isActive ? "bg-[#ffc300] text-black font-bold" : ""
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span className="ml-3">{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-3 rounded bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
        >
          <FaSignOutAlt className="text-lg" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex bg-[#003566] fixed h-screen z-30 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <SidebarContent collapsed={!sidebarOpen} />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="m-4 text-2xl fixed z-40 text-white"
        >
          <FaBars />
        </button>

        {mobileOpen && (
          <div
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 bg-[#003566] ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent collapsed={false} />
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-6 bg-gray-100 transition-all duration-300 ${
          sidebarOpen ? "md:ml-64 ml-0" : "md:ml-20 ml-0"
        }`}
      >
        <Outlet /> {/* Nested routes render here */}
      </div>
    </div>
  );
};

export default FacultyMain;
