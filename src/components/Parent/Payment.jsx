import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaDownload, FaCreditCard } from "react-icons/fa";

const Payment = () => {
  const [payments, setPayments] = useState([
    { id: 1, month: "January 2025", amount: 500, status: "Paid", date: "05-Jan-2025" },
    { id: 2, month: "February 2025", amount: 500, status: "Paid", date: "05-Feb-2025" },
    { id: 3, month: "March 2025", amount: 500, status: "Pending", date: "-" },
    { id: 4, month: "April 2025", amount: 500, status: "Pending", date: "-" },
  ]);

  const totalPaid = payments.filter(p => p.status === "Paid").reduce((acc, p) => acc + p.amount, 0);
  const totalDue = payments.filter(p => p.status === "Pending").reduce((acc, p) => acc + p.amount, 0);

  const handlePayment = (month) => {
    alert(`Redirecting to payment gateway for ${month}`);
    // Here you can integrate Stripe, Razorpay, PayPal, etc.
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <h1 className="text-3xl font-bold text-[#003566] mb-6">Fee Payment</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaMoneyBillWave className="text-yellow-500 text-4xl mb-3" />
          <h2 className="text-xl font-semibold">Total Paid</h2>
          <p className="text-gray-700 text-lg font-bold">${totalPaid}</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-2xl shadow flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FaMoneyBillWave className="text-red-500 text-4xl mb-3" />
          <h2 className="text-xl font-semibold">Total Due</h2>
          <p className="text-gray-700 text-lg font-bold">${totalDue}</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-2xl shadow flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FaDownload className="text-blue-500 text-4xl mb-3" />
          <h2 className="text-xl font-semibold">Download Invoices</h2>
          <button className="mt-2 px-4 py-2 bg-[#003566] text-white rounded hover:bg-[#0052a3] transition">
            Download All
          </button>
        </motion.div>
      </div>

      {/* Payment Table */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#003566] text-white">
            <tr>
              <th className="px-6 py-3 text-left">Month</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{payment.month}</td>
                <td className="px-6 py-4">${payment.amount}</td>
                <td className={`px-6 py-4 font-semibold ${payment.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                  {payment.status}
                </td>
                <td className="px-6 py-4">{payment.date}</td>
                <td className="px-6 py-4">
                  {payment.status === "Pending" && (
                    <button
                      onClick={() => handlePayment(payment.month)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#003566] text-white rounded hover:bg-[#0052a3] transition"
                    >
                      <FaCreditCard /> Pay Now
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
