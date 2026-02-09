import React, { useState } from "react";
import { FaSave, FaEdit } from "react-icons/fa";

const GradeEntryPage = ({ facultySubject = "OOP" }) => {
  // Sample students and grades data
  const [grades, setGrades] = useState([
    { id: 1, student: "John Doe", branch: "CSE", semester: "3rd", assignment: "Lab 1", grade: "", status: "Pending" },
    { id: 2, student: "Jane Smith", branch: "CSE", semester: "3rd", assignment: "Lab 2", grade: "A", status: "Completed" },
    { id: 3, student: "Mark Lee", branch: "CSE", semester: "3rd", assignment: "Theory Assignment", grade: "", status: "Pending" },
  ]);

  const [newEntry, setNewEntry] = useState({ student: "", branch: "CSE", semester: "3rd", assignment: "", grade: "" });

  // Add new grade entry
  const addGradeEntry = () => {
    if (newEntry.student && newEntry.assignment && newEntry.grade) {
      setGrades([...grades, { ...newEntry, id: Date.now(), status: "Completed" }]);
      setNewEntry({ student: "", branch: "CSE", semester: "3rd", assignment: "", grade: "" });
    }
  };

  // Update grade
  const updateGrade = (id, newGrade) => {
    setGrades(grades.map(g => g.id === id ? { ...g, grade: newGrade, status: newGrade ? "Completed" : "Pending" } : g));
  };

  // Filter grades based on faculty subject (optional, if assignments have subject)
  const facultyGrades = grades.filter(g => g.assignment.includes(facultySubject));

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      {/* Header / Stats */}
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{facultySubject} Grade Entry</h2>
          <p className="text-gray-600 mt-1">Input and update grades for {facultySubject} assignments and exams</p>
        </div>

        <div className="flex gap-6">
          <div className="bg-white rounded-lg shadow p-4 text-center min-w-[140px]">
            <p className="text-gray-500">Pending Entries</p>
            <p className="text-xl font-bold text-[#ffc300]">{facultyGrades.filter(g => g.status === "Pending").length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center min-w-[140px]">
            <p className="text-gray-500">Last Updated</p>
            <p className="text-xl font-bold text-[#003566]">
              {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </div>

      {/* Add / Edit Grade Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-4xl">
        <h3 className="text-lg font-semibold mb-4">Enter New Grade</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Student Name"
            value={newEntry.student}
            onChange={(e) => setNewEntry({ ...newEntry, student: e.target.value })}
            className="p-3 border rounded-lg outline-none w-full"
          />
          <select
            value={newEntry.branch}
            onChange={(e) => setNewEntry({ ...newEntry, branch: e.target.value })}
            className="p-3 border rounded-lg w-full"
          >
            <option value="CSE">CSE</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical">Electrical</option>
          </select>
          <select
            value={newEntry.semester}
            onChange={(e) => setNewEntry({ ...newEntry, semester: e.target.value })}
            className="p-3 border rounded-lg w-full"
          >
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
          </select>
          <input
            type="text"
            placeholder="Assignment / Exam"
            value={newEntry.assignment}
            onChange={(e) => setNewEntry({ ...newEntry, assignment: e.target.value })}
            className="p-3 border rounded-lg outline-none w-full"
          />
          <input
            type="text"
            placeholder="Grade"
            value={newEntry.grade}
            onChange={(e) => setNewEntry({ ...newEntry, grade: e.target.value })}
            className="p-3 border rounded-lg outline-none w-full"
          />
        </div>
        <button
          onClick={addGradeEntry}
          className="mt-4 bg-[#003566] text-white px-6 py-2 rounded-lg hover:bg-[#ffc300] hover:text-black transition-colors flex items-center gap-2"
        >
          <FaSave /> Save Grade
        </button>
      </div>

      {/* Grade Table */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-6xl">
        <h3 className="text-lg font-semibold mb-4">{facultySubject} Grade Entries</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Student</th>
                <th className="py-2 px-4 border-b">Branch</th>
                <th className="py-2 px-4 border-b">Semester</th>
                <th className="py-2 px-4 border-b">Assignment / Exam</th>
                <th className="py-2 px-4 border-b">Grade</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {facultyGrades.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-2 px-4 border-b">{entry.student}</td>
                  <td className="py-2 px-4 border-b">{entry.branch}</td>
                  <td className="py-2 px-4 border-b">{entry.semester}</td>
                  <td className="py-2 px-4 border-b">{entry.assignment}</td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="text"
                      value={entry.grade}
                      onChange={(e) => updateGrade(entry.id, e.target.value)}
                      className="p-1 border rounded w-20"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">{entry.status}</td>
                  <td className="py-2 px-4 border-b flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                  </td>
                </tr>
              ))}
              {facultyGrades.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No grade entries for {facultySubject}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GradeEntryPage;
