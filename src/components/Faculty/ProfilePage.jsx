import React from "react";
import { FaUser, FaEnvelope, FaBuilding, FaIdBadge, FaPhone, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const ProfilePage = () => {
  // Example profile data
  const profileData = [
    { icon: <FaUser />, label: "Username", value: "alex_smith" },
    { icon: <FaEnvelope />, label: "Email", value: "alex.smith@university.edu" },
    { icon: <FaBuilding />, label: "Department", value: "Computer Science" },
    { icon: <FaIdBadge />, label: "Role", value: "Faculty Member" },
    { icon: <FaPhone />, label: "Phone", value: "+1 234 567 890" },
    { icon: <FaMapMarkerAlt />, label: "Address", value: "123 Main Street, City, Country" },
    { icon: <FaCalendarAlt />, label: "Joining Date", value: "01-Jan-2020" },
    { icon: <FaIdBadge />, label: "Status", value: "Active" },
  ];

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-8">
        {/* Header with photo and basic info */}
        <div className="flex items-center space-x-6 border-b border-gray-200 pb-6">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-[#003566]"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Alex Smith</h2>
            <p className="text-gray-500 mt-1 text-lg">Faculty Member - Computer Science</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileData.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[#003566] text-xl">{item.icon}</div>
              <div className="ml-3">
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="text-gray-900 font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Profile Button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-[#003566] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#ffc300] hover:text-black transition-colors shadow-md">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
