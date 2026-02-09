import React, { useState } from "react";
import { FaCheck, FaUndo } from "react-icons/fa";

const AttendancePage = ({ facultySubject = "Operating Systems" }) => {
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


  const [attendance, setAttendance] = useState(
    studentsList.map(student => ({ ...student, present: false }))
  );

  const toggleAttendance = (id) => {
    setAttendance(attendance.map(s => s.id === id ? { ...s, present: !s.present } : s));
  };

  const presentCount = attendance.filter(s => s.present).length;
  const absentCount = attendance.length - presentCount;

  const resetAttendance = () => {
    setAttendance(attendance.map(s => ({ ...s, present: false })));
  };

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      {/* Header / Stats */}
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{facultySubject} Attendance</h2>
          <p className="text-gray-600 mt-1">Take and update student attendance for your class</p>
        </div>

        <div className="flex gap-6">
          <div className="bg-white rounded-lg shadow p-4 text-center min-w-[140px]">
            <p className="text-gray-500">Total Students</p>
            <p className="text-xl font-bold text-[#003566]">{attendance.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center min-w-[140px]">
            <p className="text-gray-500">Present</p>
            <p className="text-xl font-bold text-[#00b894]">{presentCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center min-w-[140px]">
            <p className="text-gray-500">Absent</p>
            <p className="text-xl font-bold text-[#d63031]">{absentCount}</p>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl">
        <h3 className="text-lg font-semibold mb-4">Attendance List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Student Name</th>
                <th className="py-2 px-4 border-b">Branch</th>
                <th className="py-2 px-4 border-b">Semester</th>
                <th className="py-2 px-4 border-b">Present</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map(student => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-2 px-4 border-b">{student.name}</td>
                  <td className="py-2 px-4 border-b">{student.branch}</td>
                  <td className="py-2 px-4 border-b">{student.semester}</td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="checkbox"
                      checked={student.present}
                      onChange={() => toggleAttendance(student.id)}
                      className="w-5 h-5 text-[#003566]"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-4">
          <button
            className="bg-[#003566] text-white px-6 py-2 rounded-lg hover:bg-[#ffc300] hover:text-black transition-colors flex items-center gap-2"
            onClick={() => alert("Attendance Submitted!")}
          >
            <FaCheck /> Submit Attendance
          </button>
          <button
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            onClick={resetAttendance}
          >
            <FaUndo /> Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
