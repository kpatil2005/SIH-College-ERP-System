import React, { useState } from "react";
import { FaBed, FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa";

const HostelPage = () => {
  const hostels = [
    { name: "Sunrise Hostel", totalRooms: 100, occupied: 65, bedsPerRoom: 4 },
    { name: "Moonlight Hostel", totalRooms: 100, occupied: 80, bedsPerRoom: 4 },
    { name: "Starview Hostel", totalRooms: 100, occupied: 50, bedsPerRoom: 4 },
    { name: "Greenfield Hostel", totalRooms: 100, occupied: 70, bedsPerRoom: 4 },
  ];

  const [selectedHostelIndex, setSelectedHostelIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null); // Room clicked

  const selectedHostel = hostels[selectedHostelIndex];

  // Generate rooms
  const rooms = Array.from({ length: selectedHostel.totalRooms }, (_, i) => ({
    roomNumber: i + 1,
    status: i < selectedHostel.occupied ? "Occupied" : "Available",
  }));

  // Handle room click
  const handleRoomClick = (room) => {
    // Generate beds for this room
    const beds = Array.from({ length: selectedHostel.bedsPerRoom }, (_, i) => ({
      bedNumber: i + 1,
      status: i < (room.status === "Occupied" ? selectedHostel.bedsPerRoom : 0) ? "Occupied" : "Available",
    }));
    setSelectedRoom({ ...room, beds });
  };

  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
      {/* Hostel Selector */}
      <div className="flex space-x-4 mb-6">
        {hostels.map((hostel, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-2xl font-semibold transition-colors ${
              index === selectedHostelIndex
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => setSelectedHostelIndex(index)}
          >
            {hostel.name}
          </button>
        ))}
      </div>

      {/* Hostel Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#003566] mb-2">
          {selectedHostel.name} Management
        </h1>
        <p className="text-gray-700 mb-4">
          Click a room to see bed occupancy.
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 font-semibold">Total Rooms</h2>
              <p className="text-2xl font-bold text-blue-500">{selectedHostel.totalRooms}</p>
            </div>
            <FaBed className="text-3xl text-blue-500" />
          </div>

          <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 font-semibold">Occupied</h2>
              <p className="text-2xl font-bold text-green-500">{selectedHostel.occupied}</p>
            </div>
            <FaCheckCircle className="text-3xl text-green-500" />
          </div>

          <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 font-semibold">Available</h2>
              <p className="text-2xl font-bold text-red-500">
                {selectedHostel.totalRooms - selectedHostel.occupied}
              </p>
            </div>
            <FaTimesCircle className="text-3xl text-red-500" />
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-10 gap-2 overflow-y-auto max-h-[60vh]">
        {rooms.map((room) => (
          <div
            key={room.roomNumber}
            className={`p-2 rounded-lg shadow text-center text-xs font-semibold transition-transform hover:scale-105 cursor-pointer ${
              room.status === "Occupied" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleRoomClick(room)}
          >
            <p>R{room.roomNumber}</p>
            <p className="text-[9px] mt-1">{room.status}</p>
          </div>
        ))}
      </div>

      {/* Modal for Bed Details */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-3xl w-96 max-h-[80vh] overflow-y-auto relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedRoom(null)}
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">Room {selectedRoom.roomNumber} Beds</h2>
            <div className="grid grid-cols-2 gap-3">
              {selectedRoom.beds.map((bed) => (
                <div
                  key={bed.bedNumber}
                  className={`p-3 rounded-xl shadow text-center text-sm font-semibold ${
                    bed.status === "Occupied" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <p>Bed {bed.bedNumber}</p>
                  <p className="text-xs mt-1">{bed.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HostelPage;
