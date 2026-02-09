import React from "react";
import { FaDollarSign, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const FinancePage = () => {
  const students = [
    { name: "John Doe", course: "Computer Engineering", feeStatus: "Paid", amount: 50000 },
    { name: "Jane Smith", course: "Mechanical Engineering", feeStatus: "Pending", amount: 45000 },
    { name: "Alex Johnson", course: "Electrical Engineering", feeStatus: "Paid", amount: 48000 },
    { name: "Mary Williams", course: "Civil Engineering", feeStatus: "Pending", amount: 47000 },
    { name: "Michael Brown", course: "Computer Engineering", feeStatus: "Paid", amount: 50000 },
    { name: "Emily Davis", course: "Mechanical Engineering", feeStatus: "Pending", amount: 45000 },
  ];

  const totalCollected = students
    .filter(s => s.feeStatus === "Paid")
    .reduce((sum, s) => sum + s.amount, 0);

  const totalPending = students
    .filter(s => s.feeStatus === "Pending")
    .reduce((sum, s) => sum + s.amount, 0);

  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#003566] mb-4">Finance Reports</h1>
      <p className="text-gray-700 mb-6">
        Track fees collected, pending dues, and generate financial reports.
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Total Collected</h2>
            <p className="text-2xl font-bold text-green-500">₹{totalCollected}</p>
          </div>
          <FaDollarSign className="text-4xl text-green-500" />
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Total Pending</h2>
            <p className="text-2xl font-bold text-red-500">₹{totalPending}</p>
          </div>
          <FaDollarSign className="text-4xl text-red-500" />
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Total Students</h2>
            <p className="text-2xl font-bold text-blue-500">{students.length}</p>
          </div>
          <FaDollarSign className="text-4xl text-blue-500" />
        </div>
      </div>

      {/* Students Fee List */}
      <div className="bg-white rounded-3xl shadow-xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200 rounded-t-3xl">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Name</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Course</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Fee Status</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.course}</td>
                <td className="px-6 py-4 flex items-center">
                  {student.feeStatus === "Paid" ? (
                    <FaCheckCircle className="text-green-500 mr-2" />
                  ) : (
                    <FaTimesCircle className="text-red-500 mr-2" />
                  )}
                  {student.feeStatus}
                </td>
                <td className="px-6 py-4">₹{student.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancePage;
