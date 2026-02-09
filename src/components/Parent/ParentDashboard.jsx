import React from "react";
import { FaCalendarAlt, FaWallet, FaBook, FaChartLine, FaEnvelope } from "react-icons/fa";

const ParentDashboard = () => {
  const studentStats = {
    attendance: "92%",
    feeDue: "$500",
    examsTaken: 5,
    progressScore: "88%",
  };

  const upcomingEvents = [
    { date: "2025-09-14", event: "Math Assignment Submission" },
    { date: "2025-09-16", event: "Physics Lab Exam" },
    { date: "2025-09-18", event: "Fee Due Reminder" },
  ];

  const recentMessages = [
    { date: "2025-09-12", from: "Math Teacher", message: "Homework feedback uploaded." },
    { date: "2025-09-10", from: "Principal", message: "School maintenance on Friday." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#003566]">Welcome, Parent!</h1>
        <p className="text-gray-600 mt-2">Here’s the latest academic overview of your child.</p>
      </header>

      {/* Stats Inline */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-gray-700">
        <div className="flex items-center gap-3 border-b-2 border-blue-600 pb-2">
          <FaCalendarAlt className="text-blue-600" size={24} />
          <div>
            <p className="font-semibold">Attendance</p>
            <p className="text-lg">{studentStats.attendance}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 border-b-2 border-yellow-500 pb-2">
          <FaWallet className="text-yellow-500" size={24} />
          <div>
            <p className="font-semibold">Fee Due</p>
            <p className="text-lg">{studentStats.feeDue}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 border-b-2 border-pink-500 pb-2">
          <FaBook className="text-pink-500" size={24} />
          <div>
            <p className="font-semibold">Exams Taken</p>
            <p className="text-lg">{studentStats.examsTaken}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 border-b-2 border-indigo-500 pb-2">
          <FaChartLine className="text-indigo-500" size={24} />
          <div>
            <p className="font-semibold">Progress Score</p>
            <p className="text-lg">{studentStats.progressScore}</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#003566] mb-4">Upcoming Events</h2>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-[#003566] text-white">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Event</th>
            </tr>
          </thead>
          <tbody>
            {upcomingEvents.map((event, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="p-3">{event.date}</td>
                <td className="p-3">{event.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Recent Messages */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#003566] mb-4">Recent Messages</h2>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">From</th>
              <th className="p-3 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {recentMessages.map((msg, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="p-3">{msg.date}</td>
                <td className="p-3">{msg.from}</td>
                <td className="p-3">{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 mt-12">
        &copy; 2025 University ERP System. All Rights Reserved.
      </footer>
    </div>
  );
};

export default ParentDashboard;
