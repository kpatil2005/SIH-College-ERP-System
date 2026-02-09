import React from "react";
import { FaDownload } from "react-icons/fa";

const paymentHistory = [
  {
    date: "2023-08-15",
    description: "Semester Fee",
    amount: "$2,500",
    status: "Paid",
    receipt: true,
  },
  {
    date: "2023-08-10",
    description: "Hostel Fee",
    amount: "$1,200",
    status: "Paid",
    receipt: true,
  },
  {
    date: "2024-01-05",
    description: "Transport Fee",
    amount: "$500",
    status: "Pending",
    receipt: false,
  },
];

const PaymentHistory = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-[#003566] mb-6">
          Payment History
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead className="bg-[#003566] text-white">
              <tr>
                <th className="py-3 px-4 text-left rounded-tl-xl">Date</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left rounded-tr-xl">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment, index) => (
                <tr
                  key={index}
                  className={`transition-all hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-4">{payment.date}</td>
                  <td className="p-4">{payment.description}</td>
                  <td className="p-4 font-semibold">{payment.amount}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        payment.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : payment.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {payment.receipt ? (
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                        <FaDownload /> Download
                      </button>
                    ) : (
                      <span className="text-gray-400">Not Available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Info */}
        <p className="text-gray-500 text-sm mt-4">
          Showing last {paymentHistory.length} transactions.
        </p>
      </div>
    </div>
  );
};

export default PaymentHistory;
