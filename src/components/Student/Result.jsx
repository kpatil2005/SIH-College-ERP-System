import React from "react";
import { FaDownload } from "react-icons/fa";

const resultsData = [
  {
    semester: "Semester 1",
    gpa: "8.5",
    subjects: [
      { name: "Mathematics I", marks: "90" },
      { name: "Physics I", marks: "85" },
      { name: "Programming Basics", marks: "92" },
    ],
  },
  {
    semester: "Semester 2",
    gpa: "8.8",
    subjects: [
      { name: "Mathematics II", marks: "88" },
      { name: "Physics II", marks: "90" },
      { name: "Data Structures", marks: "89" },
    ],
  },
  {
    semester: "Semester 3",
    gpa: "9.0",
    subjects: [
      { name: "Mathematics III", marks: "92" },
      { name: "Computer Networks", marks: "88" },
      { name: "Electronics", marks: "91" },
    ],
  },
];

const Result = () => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold text-[#003566] mb-6">Results</h2>
      
      {resultsData.map((semesterData, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg mb-6 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-[#003566]">
              {semesterData.semester} - GPA: {semesterData.gpa}
            </h3>
            <button className="flex items-center gap-2 bg-[#ffc300] hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded">
              <FaDownload />
              Download
            </button>
          </div>
          
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Subject</th>
                <th className="py-2 px-4 text-left">Marks</th>
              </tr>
            </thead>
            <tbody>
              {semesterData.subjects.map((subj, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}>
                  <td className="py-2 px-4">{subj.name}</td>
                  <td className="py-2 px-4">{subj.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Result;
