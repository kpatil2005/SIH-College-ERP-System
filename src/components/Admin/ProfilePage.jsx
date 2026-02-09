import React from "react";
import { FaUserCog, FaUserShield, FaCheckCircle } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-[#003566] mb-2">Profile & Role Management</h1>
        <p className="text-gray-700 text-lg">
          Customize your profile and manage roles easily.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Admin Profile Card */}
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:scale-105 transform transition-transform duration-300">
          <div className="flex items-center mb-4">
            <FaUserCog className="text-[#003566] text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Admin Profile</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Update your personal info, change avatar, and customize your account settings.
          </p>
          <div className="flex items-center justify-between">
            <button className="bg-[#003566] text-white px-5 py-2 rounded-xl hover:bg-[#00509e] transition-colors">
              Edit Profile
            </button>
            <span className="text-green-500 font-semibold flex items-center">
              <FaCheckCircle className="mr-1" /> Active
            </span>
          </div>
        </div>

        {/* Role Management Card */}
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:scale-105 transform transition-transform duration-300">
          <div className="flex items-center mb-4">
            <FaUserShield className="text-[#003566] text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Role Management</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Assign roles to students or staff. Control permissions with ease.
          </p>
          <button className="bg-[#003566] text-white px-5 py-2 rounded-xl hover:bg-[#00509e] transition-colors">
            Manage Roles
          </button>
        </div>

        {/* Progress / Status Card */}
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:scale-105 transform transition-transform duration-300">
          <div className="flex items-center mb-4">
            <FaCheckCircle className="text-green-500 text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Profile Completion</h2>
          </div>
          <p className="text-gray-600 mb-4">Keep your profile updated to unlock all features.</p>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div className="bg-[#003566] h-4 rounded-full w-3/4 transition-all duration-500"></div>
          </div>
          <p className="mt-2 text-right text-gray-600 font-semibold">75% Completed</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
