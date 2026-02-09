import React from "react";

const HostelStatus = () => {
  // Example hostel data
  const hostelInfo = {
    hostelName: "Greenwood Hostel",
    roomNumber: "B-203",
    bedType: "Single",
    wing: "North Wing",
    messAllocated: "Mess A",
    feeStatus: "Paid",
    emergencyContact: "9876543210",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#003566] mb-2">Hostel Status</h1>
      <p className="text-gray-600 mb-6">
        Overview of your child’s hostel allocation and accommodation details.
      </p>

      {/* Hostel Details Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-left border-collapse">
          <tbody>
            <tr className="bg-gray-100">
              <th className="p-4 w-1/3 text-gray-700">Hostel Name</th>
              <td className="p-4 text-gray-900">{hostelInfo.hostelName}</td>
            </tr>
            <tr>
              <th className="p-4 bg-gray-100 text-gray-700">Room Number</th>
              <td className="p-4 text-gray-900">{hostelInfo.roomNumber}</td>
            </tr>
            <tr>
              <th className="p-4 bg-gray-100 text-gray-700">Bed Type</th>
              <td className="p-4 text-gray-900">{hostelInfo.bedType}</td>
            </tr>
            <tr>
              <th className="p-4 bg-gray-100 text-gray-700">Wing</th>
              <td className="p-4 text-gray-900">{hostelInfo.wing}</td>
            </tr>
            <tr>
              <th className="p-4 bg-gray-100 text-gray-700">Mess Allocated</th>
              <td className="p-4 text-gray-900">{hostelInfo.messAllocated}</td>
            </tr>
            <tr>
              <th className="p-4 bg-gray-100 text-gray-700">Fee Status</th>
              <td className={`p-4 font-semibold ${hostelInfo.feeStatus === "Paid" ? "text-green-600" : "text-red-600"}`}>
                {hostelInfo.feeStatus}
              </td>
            </tr>
            <tr>
              <th className="p-4 bg-gray-100 text-gray-700">Emergency Contact</th>
              <td className="p-4 text-gray-900">{hostelInfo.emergencyContact}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Optional Actions */}
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          View Mess Menu
        </button>
        <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500 transition">
          Contact Hostel Warden
        </button>
      </div>
    </div>
  );
};

export default HostelStatus;
