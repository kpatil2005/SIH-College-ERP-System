import React from "react";
import { FaUser, FaLock, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/login.jpg";  // ✅ Update if your path differs

// Navbar Component
const Navbar = () => {
  const handleBack = () => window.history.back();

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#003566] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center space-x-4">
        <button
          onClick={handleBack}
          className="text-white hover:text-yellow-400 transition"
          aria-label="Go Back"
        >
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-white text-2xl font-bold select-none">SmartERP</h1>
      </div>
    </nav>
  );
};

// Faculty Login Component
const FacultyLogin = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/FacultyProfile");  // 🔁 Change this route as needed
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-200 pt-20">
        <div className="bg-white flex w-full max-w-6xl rounded-xl overflow-hidden shadow-lg">

          {/* Left Panel */}
          <div className="w-2/5 bg-white flex flex-col justify-center items-center p-6">
            <img
              src={logo}
              alt="Faculty Logo"
              className="w-[400px] h-[400px] object-contain mb-6"
            />
          </div>

          {/* Right Panel */}
          <div className="w-3/5 bg-gray-100 p-8 flex items-center justify-center">
            <div className="w-full bg-white bg-opacity-95 p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-[#003566]">
                Sign In to your account:{" "}
                <span className="font-semibold text-red-600">Faculty Login</span>
              </h2>

              {/* UI Form Only */}
              <div className="space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-10 py-3 rounded border border-gray-300"
                  />
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-10 py-3 rounded border border-gray-300"
                  />
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* CAPTCHA UI */}
                <div className="flex items-center mt-4">
                  <label className="relative flex items-center cursor-pointer select-none">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-7 h-7 flex items-center justify-center rounded-md border-2 border-gray-400 
                      peer-checked:border-[#003566] peer-checked:bg-[#003566] 
                      peer-focus:ring-2 peer-focus:ring-[#003566] transition-all duration-300 
                      hover:border-[#003566] shadow-sm">
                      <svg
                        className="w-5 h-5 text-white opacity-0 scale-90 peer-checked:opacity-100 peer-checked:scale-100 transform transition-all duration-300 ease-out"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700 peer-checked:text-[#003566] font-semibold">
                      I'm not a robot
                    </span>
                  </label>
                </div>

                {/* Sign In Button */}
                <button
                  onClick={handleSignIn}
                  className="w-full text-white font-bold py-3 rounded transition"
                  style={{ backgroundColor: "#003566" }}
                >
                  SIGN IN
                </button>

                {/* Forgot Password */}
                <div className="text-center">
                  <a href="#" className="text-sm hover:underline text-red-600">
                    Forgot your password?
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FacultyLogin;
