import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUserCog,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaBed,
  FaChartLine,
  FaUsersCog,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { to: "/admin/profile", icon: <FaUserCog />, label: "Profile & Roles" },
    { to: "/admin/admissions", icon: <FaClipboardCheck />, label: "Admissions" },
    { to: "/admin/finance", icon: <FaMoneyBillWave />, label: "Finance Reports" },
    { to: "/admin/hostel", icon: <FaBed />, label: "Hostel Manager" },
    { to: "/admin/dashboard", icon: <FaChartLine />, label: "Analytics" },
    { to: "/admin/access", icon: <FaUsersCog />, label: "Access Control" },
  ];

  const handleLogout = () => {
    navigate("/alllogin"); // back to login page
  };

  const SidebarContent = ({ collapsed }) => (
    <div className="flex flex-col h-full text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        {!collapsed && (
          <h2 className="text-lg font-extrabold tracking-wide uppercase">
            Admin Portal
          </h2>
        )}
        <button
          onClick={() =>
            window.innerWidth < 768 ? setMobileOpen(false) : setIsOpen(!isOpen)
          }
          className="text-gray-200 hover:text-white"
        >
          {window.innerWidth < 768 ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-[#ffc300] to-[#ffb703] text-black font-semibold shadow-lg"
                  : "text-gray-200 hover:bg-[#ffc300] hover:text-black"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {!collapsed && (
              <span className="ml-3 text-sm tracking-wide">{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-3 rounded-lg bg-red-600 hover:bg-red-700 transition-all font-semibold"
        >
          <FaSignOutAlt className="text-lg" />
          {!collapsed && <span className="ml-3">Back to Login</span>}
        </button>
        {!collapsed && (
          <p className="mt-3 text-xs text-gray-400 text-center">
            System Admin • Secure Access
          </p>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex h-screen fixed transition-all duration-300 z-30 bg-[#003566] shadow-lg ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <SidebarContent collapsed={!isOpen} />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="m-4 text-2xl fixed z-40 text-[#003566]"
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
          className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 bg-[#003566] shadow-xl ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent collapsed={false} />
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
