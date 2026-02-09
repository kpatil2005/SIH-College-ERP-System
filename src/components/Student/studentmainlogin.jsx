import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "./Sidebar"; // ✅ Ensure correct import path

const Studentmainlogin = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <StudentSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div
        className={`flex-1 min-h-screen transition-all duration-300 bg-gray-100 p-6 ${
          isOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Nested Routes Render Here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Studentmainlogin;
