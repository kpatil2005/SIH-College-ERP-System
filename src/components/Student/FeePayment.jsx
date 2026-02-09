import React from "react";
import { FaMoneyBillWave, FaReceipt } from "react-icons/fa";

const FeePayment = () => {
  const currentSemester = {
    name: "Semester 5 (2025-26)",
    amount: 2500,
    dueDate: "2025-12-15",
    status: "Pending",
  };

  const previousSemester = {
    name: "Semester 4 (2024-25)",
    amount: 2500,
    paidDate: "2025-06-10",
    status: "Paid",
  };

  return (
    <div className="min-h-screen p-8 bg-[#f5f6fa]">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#003566] mb-2">Academic Fee Dashboard</h1>
          <p className="text-gray-600">View and manage your semester fee payments efficiently.</p>
        </div>
      </div>

      {/* Current Semester Payment Card */}
      <div className="bg-gradient-to-r from-[#ffc300] to-[#ffd54f] rounded-2xl shadow-xl p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-6 hover:scale-[1.02] transition-transform duration-300">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{currentSemester.name}</h2>
          <p className="text-4xl font-bold text-gray-900 mt-1">${currentSemester.amount}</p>
          <p className="text-sm text-gray-800 mt-1">Due Date: {currentSemester.dueDate}</p>
          <span
            className={`mt-3 inline-block px-4 py-1 rounded-full font-semibold text-sm ${
              currentSemester.status === "Paid"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {currentSemester.status}
          </span>
        </div>
        <div className="flex gap-4">
          <button className="bg-[#003566] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#00509e] flex items-center gap-2 transition">
            <FaMoneyBillWave /> Pay Now
          </button>
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 flex items-center gap-2 transition">
            <FaReceipt /> View Receipt
          </button>
        </div>
      </div>

      {/* Previous Semester Payment Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-2xl transition-shadow">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{previousSemester.name}</h2>
          <p className="text-2xl font-bold text-gray-900 mt-1">${previousSemester.amount}</p>
          <p className="text-sm text-gray-700 mt-1">Paid on: {previousSemester.paidDate}</p>
          <span className="mt-3 inline-block px-4 py-1 rounded-full font-semibold text-sm bg-green-100 text-green-800">
            {previousSemester.status}
          </span>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 flex items-center gap-2 transition">
            <FaReceipt /> View Receipt
          </button>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-2xl shadow-lg flex items-center gap-3 hover:scale-[1.02] transition-transform">
          <span className="text-green-700 font-bold text-lg">✔ Previous Semester Paid</span>
        </div>
        <div className="bg-red-50 p-6 rounded-2xl shadow-lg flex items-center gap-3 hover:scale-[1.02] transition-transform">
          <span className="text-red-700 font-bold text-lg">⏳ Current Semester Pending</span>
        </div>
      </div>
    </div>
  );
};

export default FeePayment;
