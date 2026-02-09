import React from "react";
import { FaBookOpen, FaClock, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const assignments = [
  {
    title: "Data Structures – Linked List",
    dueDate: "15 Sep 2025",
    status: "Pending",
  },
  {
    title: "Operating Systems – CPU Scheduling",
    dueDate: "10 Sep 2025",
    status: "Completed",
  },
  {
    title: "Database – ER Diagram",
    dueDate: "20 Sep 2025",
    status: "Overdue",
  },
];

const Assignment = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] min-h-screen rounded-xl">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaBookOpen className="text-[#003566] text-3xl" />
          <h3 className="text-2xl font-bold text-[#003566]">Assignments</h3>
        </div>
        <button className="px-4 py-2 bg-[#ffc300] text-black font-semibold rounded-lg shadow hover:bg-[#ffb700] transition">
          + Add Assignment
        </button>
      </div>

      {/* Assignment List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map((assignment, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <h4 className="text-lg font-semibold text-[#003566] mb-2">
              {assignment.title}
            </h4>
            <p className="text-sm text-gray-600 flex items-center gap-2 mb-3">
              <FaClock className="text-gray-500" /> Due: {assignment.dueDate}
            </p>

            {/* Status Badge */}
            <div>
              {assignment.status === "Completed" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                  <FaCheckCircle /> Completed
                </span>
              )}
              {assignment.status === "Pending" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full">
                  <FaClock /> Pending
                </span>
              )}
              {assignment.status === "Overdue" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-red-700 bg-red-100 rounded-full">
                  <FaExclamationCircle /> Overdue
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignment;
