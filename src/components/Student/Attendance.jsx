import React from "react";
import { FaUserCheck, FaCalendarAlt } from "react-icons/fa";

const subjects = [
  { name: "Data Structures", attended: 42, total: 50 },
  { name: "Operating Systems", attended: 38, total: 50 },
  { name: "Database Management", attended: 45, total: 50 },
  { name: "Computer Networks", attended: 40, total: 50 },
  { name: "Artificial Intelligence", attended: 47, total: 50 },
];

const Attendance = () => {
  const overallAttended = subjects.reduce((acc, s) => acc + s.attended, 0);
  const overallTotal = subjects.reduce((acc, s) => acc + s.total, 0);
  const overallPercentage = ((overallAttended / overallTotal) * 100).toFixed(1);

  return (
    <div className="p-6 bg-gradient-to-br from-[#f5f7fa] to-[#e3eaf5] min-h-screen rounded-xl">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaUserCheck className="text-[#003566] text-3xl" />
          <h3 className="text-2xl font-bold text-[#003566]">Attendance</h3>
        </div>
        <span className="flex items-center gap-2 text-gray-600 font-medium">
          <FaCalendarAlt /> Semester: 2025-26 (Odd)
        </span>
      </div>

      {/* Overall Attendance */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Overall Attendance</h4>
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full">
              <circle
                className="text-gray-200"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50%"
                cy="50%"
              />
              <circle
                className={`${
                  overallPercentage >= 75 ? "text-green-500" : "text-red-500"
                }`}
                strokeWidth="8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50%"
                cy="50%"
                strokeDasharray={2 * Math.PI * 40}
                strokeDashoffset={
                  2 * Math.PI * 40 - (overallPercentage / 100) * (2 * Math.PI * 40)
                }
                transform="rotate(-90 50 50)"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-bold text-gray-700">
              {overallPercentage}%
            </span>
          </div>
          <div>
            <p className="text-gray-700">
              Attended <span className="font-bold">{overallAttended}</span> out of{" "}
              <span className="font-bold">{overallTotal}</span> lectures.
            </p>
            <p
              className={`mt-2 font-medium ${
                overallPercentage >= 75 ? "text-green-600" : "text-red-600"
              }`}
            >
              {overallPercentage >= 75
                ? "Good attendance! ✅"
                : "Low attendance! ❌ Maintain above 75%"}
            </p>
          </div>
        </div>
      </div>

      {/* Subject-wise Attendance */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Subject-wise Attendance</h4>
        <div className="space-y-4">
          {subjects.map((subject, idx) => {
            const percentage = ((subject.attended / subject.total) * 100).toFixed(1);
            return (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-800">{subject.name}</span>
                  <span
                    className={`font-semibold ${
                      percentage >= 75 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      percentage >= 75 ? "bg-green-500" : "bg-red-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
