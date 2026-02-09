import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const AssignmentsPage = ({ facultySubject = "OOP" }) => {
  // Sample assignment data
  const [assignments, setAssignments] = useState([
    { id: 1, title: "OOP Lab 1", branch: "CSE", semester: "3rd", type: "Lab", dueDate: "2025-09-20", subject: "OOP", status: "Pending" },
    { id: 2, title: "OOP Theory Assignment", branch: "CSE", semester: "3rd", type: "Theory", dueDate: "2025-09-22", subject: "OOP", status: "Pending" },
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    branch: "CSE",
    semester: "3rd",
    type: "Theory",
    dueDate: ""
  });

  // Add new assignment
  const addAssignment = () => {
    if (newAssignment.title && newAssignment.branch && newAssignment.semester && newAssignment.dueDate) {
      setAssignments([
        ...assignments,
        { ...newAssignment, id: Date.now(), subject: facultySubject, status: "Pending" }
      ]);
      setNewAssignment({ title: "", branch: "CSE", semester: "3rd", type: "Theory", dueDate: "" });
    }
  };

  // Delete assignment
  const deleteAssignment = (id) => {
    setAssignments(assignments.filter(a => a.id !== id));
  };

  // Filter assignments for the faculty's subject
  const facultyAssignments = assignments.filter(a => a.subject === facultySubject);

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      {/* Header / Stats */}
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{facultySubject} Assignments</h2>
          <p className="text-gray-600 mt-1">Assign tasks to engineering students by branch and semester</p>
        </div>

        <div className="flex gap-6">
          <div className="bg-white rounded-lg shadow p-4 text-center min-w-[140px]">
            <p className="text-gray-500">Total Assignments</p>
            <p className="text-xl font-bold text-[#003566]">{facultyAssignments.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center min-w-[140px]">
            <p className="text-gray-500">Pending Grading</p>
            <p className="text-xl font-bold text-[#ffc300]">{facultyAssignments.filter(a => a.status === "Pending").length}</p>
          </div>
        </div>
      </div>

      {/* Add Assignment Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-4xl">
        <h3 className="text-lg font-semibold mb-4">Assign New {facultySubject} Assignment</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Assignment Title"
            value={newAssignment.title}
            onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            className="p-3 border rounded-lg outline-none w-full"
          />
          <select
            value={newAssignment.branch}
            onChange={(e) => setNewAssignment({ ...newAssignment, branch: e.target.value })}
            className="p-3 border rounded-lg w-full"
          >
            <option value="CSE">CSE</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical">Electrical</option>
          </select>
          <select
            value={newAssignment.semester}
            onChange={(e) => setNewAssignment({ ...newAssignment, semester: e.target.value })}
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
          <select
            value={newAssignment.type}
            onChange={(e) => setNewAssignment({ ...newAssignment, type: e.target.value })}
            className="p-3 border rounded-lg w-full"
          >
            <option value="Theory">Theory</option>
            <option value="Lab">Lab</option>
            <option value="Project">Project</option>
          </select>
          <input
            type="date"
            value={newAssignment.dueDate}
            onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <button
          onClick={addAssignment}
          className="mt-4 bg-[#003566] text-white px-6 py-2 rounded-lg hover:bg-[#ffc300] hover:text-black transition-colors flex items-center gap-2"
        >
          <FaPlus /> Add Assignment
        </button>
      </div>

      {/* Assignment List */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-6xl">
        <h3 className="text-lg font-semibold mb-4">{facultySubject} Assignment List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Branch</th>
                <th className="py-2 px-4 border-b">Semester</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Due Date</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {facultyAssignments.map((assignment) => (
                <tr key={assignment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-2 px-4 border-b">{assignment.title}</td>
                  <td className="py-2 px-4 border-b">{assignment.branch}</td>
                  <td className="py-2 px-4 border-b">{assignment.semester}</td>
                  <td className="py-2 px-4 border-b">{assignment.type}</td>
                  <td className="py-2 px-4 border-b">{assignment.dueDate}</td>
                  <td className="py-2 px-4 border-b">{assignment.status}</td>
                  <td className="py-2 px-4 border-b flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                    <button onClick={() => deleteAssignment(assignment.id)} className="text-red-600 hover:text-red-800"><FaTrash /></button>
                  </td>
                </tr>
              ))}
              {facultyAssignments.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No assignments available for {facultySubject}
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

export default AssignmentsPage;
