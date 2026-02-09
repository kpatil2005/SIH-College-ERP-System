import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  FaUser,
  FaFileInvoice,
  FaHome,
  FaBus,
  FaHistory,
  FaTasks,
  FaCalendar,
  FaChartBar,
  FaEye,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaSignOutAlt,
} from "react-icons/fa";

const StudentSidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { logout, user } = useAuth();

  const navItems = [
    { to: "/student/dashboard", icon: <FaChartBar />, label: "Dashboard" },
    { to: "/student/assignment", icon: <FaTasks />, label: "Assignment" },
    { to: "/student/attendance", icon: <FaChartBar />, label: "Attendance" },
    { to: "/student/academic-fee", icon: <FaFileInvoice />, label: "Academic Fee" },
    { to: "/student/timetable", icon: <FaCalendar />, label: "Timetable" },
    { to: "/student/result", icon: <FaChartBar />, label: "Result" },
    { to: "/student/hostel-fee", icon: <FaHome />, label: "Hostel Fee" },
    { to: "/student/transport-fee", icon: <FaBus />, label: "Transport Fee" },
    { to: "/student/payment-history", icon: <FaHistory />, label: "Payment History" },
    { to: "/student/view-documents", icon: <FaEye />, label: "View Documents" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const SidebarContent = ({ collapsed }) => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        {!collapsed && (
          <div className="flex items-center">
            <FaGraduationCap className="text-2xl mr-2 text-[#ffc300]" />
            <h2 className="text-xl font-bold text-[#ffc300]">University ERP</h2>
          </div>
        )}
        <button
          onClick={() =>
            window.innerWidth < 768 ? setMobileOpen(false) : setIsOpen(!isOpen)
          }
          className="text-[#d9d9d9] hover:text-[#ffc300] transition-colors"
        >
          {window.innerWidth < 768 ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-2 overflow-y-auto mt-2">
        {navItems.map((item, index) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-xl transition-all duration-200 shadow-sm ${
                isActive
                  ? "bg-[#ffc300] text-[#003566] font-semibold shadow-md"
                  : "text-[#d9d9d9] hover:bg-[#ffc300] hover:text-[#003566]"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 mt-auto border-t border-gray-600">
          <p className="text-sm text-[#d9d9d9]">{user?.name || 'Student'}</p>
          <p className="text-xs text-gray-400">{user?.role || 'Student'}</p>
          <button
            onClick={handleLogout}
            className="mt-3 flex items-center w-full p-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold justify-center"
          >
            <FaSignOutAlt className="text-lg" />
            <span className="ml-2">Logout</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex h-screen fixed transition-all duration-300 bg-[#003566] shadow-xl z-30 ${
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

export default StudentSidebar;
