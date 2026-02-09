import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const hostelFeeData = [
  {
    semester: "Semester 1",
    amount: "$1,200",
    dueDate: "2024-01-20",
    status: "Pending",
  },
  {
    semester: "Semester 2",
    amount: "$1,100",
    dueDate: "2023-07-10",
    status: "Paid",
  },
];

const HostelFee = () => {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold text-[#003566]">Hostel Fee Payment</h2>
      <p className="text-gray-600">View and manage your hostel fee payments</p>

      <div className="grid gap-6">
        {hostelFeeData.map((fee, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center transition-transform hover:scale-105"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#003566]">
                {fee.semester}
              </h3>
              <p className="text-gray-700">
                Amount: <span className="font-bold">{fee.amount}</span>
              </p>
              <p className="text-gray-500 text-sm">Due Date: {fee.dueDate}</p>
            </div>
            <div className="flex items-center gap-4">
              {fee.status === "Paid" ? (
                <span className="flex items-center gap-1 text-green-600 font-semibold">
                  <FaCheckCircle /> {fee.status}
                </span>
              ) : (
                <span className="flex items-center gap-1 text-orange-500 font-semibold">
                  <FaExclamationCircle /> {fee.status}
                </span>
              )}
              {fee.status === "Pending" && (
                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostelFee;
