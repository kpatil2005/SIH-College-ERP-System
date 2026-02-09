import React from "react";

const Timetable = () => {
  const timetable = [
    {
      day: "Monday",
      lectures: [
        { time: "9:00 AM - 10:00 AM", subject: "Mathematics III", teacher: "Prof. Sharma", room: "101" },
        { time: "10:15 AM - 11:15 AM", subject: "Physics II", teacher: "Prof. Reddy", room: "102" },
        { time: "11:30 AM - 12:30 PM", subject: "Computer Programming", teacher: "Prof. Patel", room: "Lab 3" },
        { time: "1:30 PM - 3:30 PM", subject: "Physics Lab", teacher: "Prof. Reddy", room: "Lab 2" },
      ],
    },
    {
      day: "Tuesday",
      lectures: [
        { time: "9:00 AM - 10:00 AM", subject: "Engineering Mechanics", teacher: "Prof. Verma", room: "104" },
        { time: "10:15 AM - 11:15 AM", subject: "Electrical Engineering", teacher: "Prof. Mehta", room: "105" },
        { time: "11:30 AM - 12:30 PM", subject: "Maths Tutorial", teacher: "Prof. Sharma", room: "101" },
        { time: "1:30 PM - 3:30 PM", subject: "Computer Lab", teacher: "Prof. Patel", room: "Lab 3" },
      ],
    },
    {
      day: "Wednesday",
      lectures: [
        { time: "9:00 AM - 10:00 AM", subject: "Physics II", teacher: "Prof. Reddy", room: "102" },
        { time: "10:15 AM - 11:15 AM", subject: "Engineering Mechanics", teacher: "Prof. Verma", room: "104" },
        { time: "11:30 AM - 12:30 PM", subject: "Electrical Lab", teacher: "Prof. Mehta", room: "Lab 1" },
        { time: "1:30 PM - 2:30 PM", subject: "Soft Skills", teacher: "Prof. Joshi", room: "103" },
      ],
    },
    {
      day: "Thursday",
      lectures: [
        { time: "9:00 AM - 10:00 AM", subject: "Mathematics III", teacher: "Prof. Sharma", room: "101" },
        { time: "10:15 AM - 11:15 AM", subject: "Computer Programming", teacher: "Prof. Patel", room: "Lab 3" },
        { time: "11:30 AM - 12:30 PM", subject: "Physics II", teacher: "Prof. Reddy", room: "102" },
        { time: "1:30 PM - 3:30 PM", subject: "Electrical Lab", teacher: "Prof. Mehta", room: "Lab 1" },
      ],
    },
    {
      day: "Friday",
      lectures: [
        { time: "9:00 AM - 10:00 AM", subject: "Engineering Mechanics", teacher: "Prof. Verma", room: "104" },
        { time: "10:15 AM - 11:15 AM", subject: "Mathematics III", teacher: "Prof. Sharma", room: "101" },
        { time: "11:30 AM - 12:30 PM", subject: "Computer Lab", teacher: "Prof. Patel", room: "Lab 3" },
        { time: "1:30 PM - 2:30 PM", subject: "Electrical Engineering", teacher: "Prof. Mehta", room: "105" },
      ],
    },
  ];

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold text-[#003566] mb-6">Weekly Timetable</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-[#003566] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Day</th>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Subject</th>
              <th className="py-3 px-4 text-left">Teacher</th>
              <th className="py-3 px-4 text-left">Room</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((dayItem) =>
              dayItem.lectures.map((lec, index) => (
                <tr
                  key={`${dayItem.day}-${index}`}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  }`}
                >
                  <td className="py-3 px-4 font-semibold">{index === 0 ? dayItem.day : ""}</td>
                  <td className="py-3 px-4">{lec.time}</td>
                  <td className="py-3 px-4">{lec.subject}</td>
                  <td className="py-3 px-4">{lec.teacher}</td>
                  <td className="py-3 px-4">{lec.room}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
