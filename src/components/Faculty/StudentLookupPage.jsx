import React, { useState } from "react";

// Sample student data (you can replace with dynamic data later)
const studentsList = [
  { id: 1, name: "John Doe", branch: "CSE", semester: "3rd" },
  { id: 2, name: "Jane Smith", branch: "CSE", semester: "3rd" },
  { id: 3, name: "Mark Lee", branch: "CSE", semester: "3rd" },
  { id: 4, name: "Emily Davis", branch: "CSE", semester: "3rd" },
  { id: 5, name: "Alex Johnson", branch: "CSE", semester: "3rd" },
  { id: 6, name: "Michael Brown", branch: "CSE", semester: "3rd" },
  { id: 7, name: "Sarah Wilson", branch: "CSE", semester: "3rd" },
  { id: 8, name: "David Miller", branch: "CSE", semester: "3rd" },
  { id: 9, name: "Olivia Taylor", branch: "CSE", semester: "3rd" },
  { id: 10, name: "Daniel Anderson", branch: "CSE", semester: "3rd" },
  { id: 11, name: "Sophia Thomas", branch: "CSE", semester: "3rd" },
  { id: 12, name: "James Martinez", branch: "CSE", semester: "3rd" },
  { id: 13, name: "Mia Hernandez", branch: "CSE", semester: "3rd" },
  { id: 14, name: "William Moore", branch: "CSE", semester: "3rd" },
  { id: 15, name: "Isabella Jackson", branch: "CSE", semester: "3rd" },
  { id: 16, name: "Benjamin White", branch: "CSE", semester: "3rd" },
  { id: 17, name: "Charlotte Harris", branch: "CSE", semester: "3rd" },
  { id: 18, name: "Henry Clark", branch: "CSE", semester: "3rd" },
  { id: 19, name: "Amelia Lewis", branch: "CSE", semester: "3rd" },
  { id: 20, name: "Ethan Robinson", branch: "CSE", semester: "3rd" },
];

const StudentLookupPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = studentsList.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-700">
            S
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-800">Student Lookup</h2>
            <p className="text-gray-500">Search and view student details</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex items-center space-x-2 mb-6">
          <input
            type="text"
            placeholder="Search by Name or Roll Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#003566]"
          />
          <button className="bg-[#003566] text-white px-4 py-2 rounded hover:bg-[#ffc300] hover:text-black transition-colors">
            Search
          </button>
        </div>

        {/* Student List */}
        {filteredStudents.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-[#003566] text-white">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Roll Number</th>
                  <th className="py-2 px-4 text-left">Branch</th>
                  <th className="py-2 px-4 text-left">Semester</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b hover:bg-gray-100 transition-colors"
                  >
                    <td className="py-2 px-4">{student.name}</td>
                    <td className="py-2 px-4">{student.roll}</td>
                    <td className="py-2 px-4">{student.branch}</td>
                    <td className="py-2 px-4">{student.semester}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">
            No students found for "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentLookupPage;
