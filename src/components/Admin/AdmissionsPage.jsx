import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AdmissionsPage = () => {
  const applications = [
    { name: "John Doe", course: "Computer Engineering", status: "Pending" },
    { name: "Jane Smith", course: "Mechanical Engineering", status: "Approved" },
    { name: "Alex Johnson", course: "Electrical Engineering", status: "Rejected" },
    { name: "Mary Williams", course: "Civil Engineering", status: "Pending" },
    { name: "Michael Brown", course: "Computer Engineering", status: "Approved" },
    { name: "Emily Davis", course: "Mechanical Engineering", status: "Pending" },
    { name: "David Wilson", course: "Electrical Engineering", status: "Approved" },
    { name: "Sarah Miller", course: "Civil Engineering", status: "Rejected" },
    { name: "Daniel Anderson", course: "Computer Engineering", status: "Pending" },
    { name: "Laura Thomas", course: "Mechanical Engineering", status: "Approved" },
    { name: "James Jackson", course: "Electrical Engineering", status: "Pending" },
    { name: "Olivia White", course: "Civil Engineering", status: "Approved" },
    { name: "Christopher Harris", course: "Computer Engineering", status: "Rejected" },
    { name: "Sophia Martin", course: "Mechanical Engineering", status: "Pending" },
    { name: "Matthew Thompson", course: "Electrical Engineering", status: "Approved" },
    { name: "Isabella Garcia", course: "Civil Engineering", status: "Pending" },
    { name: "Anthony Martinez", course: "Computer Engineering", status: "Approved" },
    { name: "Mia Robinson", course: "Mechanical Engineering", status: "Rejected" },
    { name: "Joshua Clark", course: "Electrical Engineering", status: "Pending" },
    { name: "Chloe Lewis", course: "Civil Engineering", status: "Approved" },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#003566] mb-6">Admissions Management</h1>
      <p className="text-gray-700 mb-6">
        Review and manage student applications quickly and efficiently.
      </p>

      {/* List Header */}
      <div className="hidden md:grid grid-cols-4 gap-4 bg-gray-200 p-3 rounded-t-xl font-semibold text-gray-700">
        <div>Name</div>
        <div>Course</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      {/* List Items */}
      <div className="divide-y divide-gray-200">
        {applications.map((app, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-white p-4 rounded-xl mb-2 shadow hover:shadow-lg transition-shadow"
          >
            <div className="font-medium text-gray-800">{app.name}</div>
            <div className="text-gray-600">{app.course}</div>
            <div className={`flex items-center font-semibold ${
              app.status === "Approved" ? "text-green-500" : app.status === "Rejected" ? "text-red-500" : "text-yellow-500"
            }`}>
              {app.status === "Approved" && <FaCheckCircle className="mr-1"/>}
              {app.status === "Rejected" && <FaTimesCircle className="mr-1"/>}
              {app.status}
            </div>
            <div className="flex space-x-2">
              {app.status === "Pending" && (
                <>
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors">
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">
                    Reject
                  </button>
                </>
              )}
              {app.status !== "Pending" && (
                <span className="text-gray-500">No actions</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionsPage;
