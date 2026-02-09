import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaUsers, FaUserGraduate, FaChalkboardTeacher, FaUniversity, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Footer from "./Footer";

const AllLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 text-white hover:text-yellow-400 transition"
          aria-label="Go Back"
        >
          <FaArrowLeft />
          Go Back
        </button>
        <FaUniversity className="text-2xl" />
        <span className="text-xl font-bold">Quick Campus</span>
      </div>

      <div className="flex-grow flex items-start justify-center py-12 px-6">
        <div className="max-w-6xl w-full">
          <header className="text-center mb-12">
            <div className="mx-auto w-20 h-20 rounded-full bg-yellow-400 shadow-md flex items-center justify-center -mt-8">
              <FaUniversity className="text-3xl text-blue-900" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mt-6">Welcome to TechUniversity</h1>
            <p className="text-lg text-blue-700 mt-2">Educational Resource Platform</p>
            <p className="text-sm text-blue-500 mt-1">Select your role to continue</p>
          </header>

          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <RoleCard
              title="Administrator"
              description="Access system settings, user management, and administrative tools"
              buttonText="Login as Admin"
              icon={<FaUserShield className="text-3xl text-blue-900" />}
              onClick={() => navigate("/admin")}  // Navigate to /admin page
            />
            <RoleCard
              title="Parent"
              description="Access parent portal, student resources, and communication tools"
              buttonText="Login as Parent"
              icon={<FaUsers className="text-3xl text-blue-900" />}
              onClick={() => navigate("/parent")}
            />
            <RoleCard
              title="Student"
              description="Access student portal, courses, grades, and academic resources"
              buttonText="Login as Student"
              icon={<FaUserGraduate className="text-3xl text-blue-900" />}
              onClick={() => navigate("/student")}
            />
            <RoleCard
              title="Faculty"
              description="Access teaching tools, course management, and academic administration"
              buttonText="Login as Faculty"
              icon={<FaChalkboardTeacher className="text-3xl text-blue-900" />}
              onClick={() => navigate("/faculty")}
            />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

function RoleCard({ title, description, buttonText, icon, onClick }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-blue-800 shadow-sm p-6 flex flex-col items-center text-center">
      <div className="rounded-full bg-yellow-400 w-20 h-20 flex items-center justify-center shadow-md -mt-10 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-sm text-blue-600 mb-6">{description}</p>
      <button
        onClick={onClick}
        className="mt-auto w-full max-w-xs bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium py-3 rounded-lg shadow-inner flex items-center justify-center gap-2"
      >
        <span>{buttonText}</span>
        <FaArrowRight className="text-lg" />
      </button>
    </div>
  );
}

export default AllLogin;
