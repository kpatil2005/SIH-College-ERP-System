import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  FaUser,
  FaHome,
  FaUniversity,
  FaMoneyBill,
  FaHotel,
  FaUsersCog,
  FaSignOutAlt,
  FaWifi,
  FaLeaf,
  FaGraduationCap,
} from "react-icons/fa";

const AdminMain = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navItems = [
    { to: "dashboard", icon: <FaHome />, label: "Dashboard" },
    { to: "profile", icon: <FaUser />, label: "Profile" },
    { to: "admissions", icon: <FaUniversity />, label: "Admissions" },
    { to: "admission-management", icon: <FaGraduationCap />, label: "Admission Apps" },
    { to: "finance", icon: <FaMoneyBill />, label: "Finance" },
    { to: "hostel", icon: <FaHotel />, label: "Hostel" },
    { to: "access", icon: <FaUsersCog />, label: "Access Control" },
    { to: "iot", icon: <FaWifi />, label: "IoT Dashboard" },
    { to: "sustainability", icon: <FaLeaf />, label: "Sustainability" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-[#1d3557] text-white flex flex-col justify-between ${
          sidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300`}
      >
        <div>
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            {sidebarOpen && <h2 className="text-xl font-bold">Admin Portal</h2>}
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? "<" : ">"}
            </button>
          </div>

          {/* Nav Items */}
          <nav className="mt-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded hover:bg-[#ffc300] hover:text-black ${
                    isActive ? "bg-[#ffc300] text-black font-bold" : ""
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && <span className="ml-3">{item.label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-3 rounded bg-red-600 hover:bg-red-700 text-white font-semibold"
          >
            <FaSignOutAlt className="text-lg" />
            {sidebarOpen && <span className="ml-3">Back to Login</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet /> {/* <- Nested admin pages render here */}
      </div>
    </div>
  );
};

export default AdminMain;
