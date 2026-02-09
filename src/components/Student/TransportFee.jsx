import React from "react";
import { FaBus } from "react-icons/fa";

const transportSchedule = [
  {
    busNumber: "Bus #12",
    route: "North Campus Route",
    pickUp: "Station A, Station B, Station C",
    time: "07:00 AM - 08:00 AM",
  },
  {
    busNumber: "Bus #18",
    route: "East Campus Route",
    pickUp: "Station D, Station E, Station F",
    time: "08:15 AM - 09:15 AM",
  },
  {
    busNumber: "Bus #21",
    route: "West Campus Route",
    pickUp: "Station G, Station H, Station I",
    time: "06:45 AM - 07:45 AM",
  },
];

const TransportFee = () => {
  return (
    <div className="space-y-8">
      {/* Fee Payment Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-[#003566] mb-4">
          Transport Fee Payment
        </h2>
        <p className="text-gray-600 mb-6">
          Manage your transport fee payments before the due date.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-yellow-50 border rounded-lg p-6">
          <div>
            <p className="text-gray-700">Current Transport Fee</p>
            <p className="text-3xl font-bold text-yellow-600">$500</p>
            <p className="text-sm text-gray-500">Due: 2024-01-18</p>
          </div>
          <button className="mt-4 md:mt-0 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-all">
            Pay Now
          </button>
        </div>
      </div>

      {/* Bus Schedule Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-[#003566] mb-4">
          Bus Schedule
        </h2>
        <p className="text-gray-600 mb-4">
          Check the bus timing and pick-up points for your route.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-[#003566] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Bus Number</th>
                <th className="py-3 px-4 text-left">Route</th>
                <th className="py-3 px-4 text-left">Pick-Up Points</th>
                <th className="py-3 px-4 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {transportSchedule.map((bus, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 font-semibold">{bus.busNumber}</td>
                  <td className="py-3 px-4">{bus.route}</td>
                  <td className="py-3 px-4">{bus.pickUp}</td>
                  <td className="py-3 px-4">{bus.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransportFee;
