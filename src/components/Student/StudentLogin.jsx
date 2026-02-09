import React, { useState } from "react";
import { FaUser, FaLock, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/login.jpg"; // Make sure this path is correct

// Navbar
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

const StudentLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.username) errors.username = "Username is required.";
    if (!formData.password) errors.password = "Password is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
     navigate(""); // ✅ Redirect on successful login simulation
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-200 pt-20">
        <div className="bg-white flex w-full max-w-6xl rounded-xl overflow-hidden shadow-lg">
          {/* Left Panel */}
          <div className="w-2/5 bg-white flex flex-col justify-center items-center p-6">
            <img src={logo} alt="Logo" className="w-[400px] h-[400px] object-contain mb-6" />
          </div>

          {/* Right Panel */}
          <div className="w-3/5 bg-gray-100 p-8 flex items-center justify-center">
            <div className="w-full bg-white bg-opacity-95 p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#003566" }}>
                Sign In to your account:{" "}
                <span className="font-semibold text-red-600">Student Login</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Username */}
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`w-full px-10 py-3 rounded border ${
                      errors.username ? "border-red-400 bg-red-50" : "border-gray-300"
                    }`}
                  />
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  {errors.username && (
                    <p className="text-sm text-red-500 mt-1">{errors.username}</p>
                  )}
                </div>

                {/* Password */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-10 py-3 rounded border ${
                      errors.password ? "border-red-400 bg-red-50" : "border-gray-300"
                    }`}
                  />
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 cursor-pointer select-none"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                  {errors.password && (
                    <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                  )}
                </div>

                {/* CAPTCHA (fake) */}
                <div className="flex items-center mt-4">
                  <label className="relative flex items-center cursor-pointer select-none">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-7 h-7 rounded-md border-2 border-gray-400 
                      peer-checked:border-[#003566] peer-checked:bg-[#003566] 
                      peer-focus:ring-2 peer-focus:ring-[#003566] transition-all duration-300 
                      hover:border-[#003566] shadow-sm flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white opacity-0 scale-90 peer-checked:opacity-100 peer-checked:scale-100"
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

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full text-white font-bold py-3 rounded transition"
                  style={{ backgroundColor: "#003566" }}
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "SIGN IN"}
                </button>

                <div className="text-center">
                  <a href="#" className="text-sm hover:underline text-red-600">
                    Forgot your password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
