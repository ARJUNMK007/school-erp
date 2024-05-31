import React from 'react';
import Sidebar from '../DashBoard/Sidebar';


const studentsData = [
  { name: 'Samanta William', id: '#123456789', date: 'March 29, 2023', parent: 'Marc William', city: 'Jakarta', contact: 'phone', grade: 'VII A', action: '...' },
  { name: 'Tony Soap', id: '#123456789', date: 'March 29, 2023', parent: 'James Soap', city: 'Jakarta', contact: 'phone', grade: 'VIII B', action: '...' },
  { name: 'Karen Hope', id: '#123456789', date: 'March 29, 2023', parent: 'Justin Hope', city: 'Jakarta', contact: 'phone', grade: 'VII C', action: '...' },
  { name: 'Jordon Nico', id: '#123456789', date: 'March 29, 2023', parent: 'Amanda Nico', city: 'Jakarta', contact: 'phone', grade: 'IX B', action: '...' },
  { name: 'Nodila Adja', id: '#123456789', date: 'March 29, 2023', parent: 'Jack Adja', city: 'Jakarta', contact: 'phone', grade: 'VII A', action: '...' },
  { name: 'Johnny Ahmad', id: '#123456789', date: 'March 29, 2023', parent: 'Danny Ahmad', city: 'Jakarta', contact: 'phone', grade: 'VIII A', action: '...' },
];

const Students = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Students</h1>
          <div className="flex items-center">
            <select className="bg-white border border-gray-300 rounded-md py-2 px-4 mr-4">
              <option>Class VII</option>
              <option>Class VIII</option>
              <option>Class IX</option>
            </select>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">+ New Student</button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600 h-5 w-5 mr-4"
            />
            <input
              type="text"
              className="border border-gray-300 rounded-md py-2 px-4 flex-grow"
              placeholder="Search here..."
            />
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="p-4">Name</th>
                <th className="p-4">ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Parent Name</th>
                <th className="p-4">City</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Grade</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentsData.map((student, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600 h-5 w-5 mr-4" />
                    {student.name}
                  </td>
                  <td className="p-4">{student.id}</td>
                  <td className="p-4">{student.date}</td>
                  <td className="p-4">{student.parent}</td>
                  <td className="p-4">{student.city}</td>
                  <td className="p-4">
                    <button className="bg-gray-200 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h1M7 10h1M15 10h1M19 10h1M12 6v6m-6 4v.01M18 16v.01M5 19h14M5 8v.01M19 8v.01M9 16v.01M15 16v.01"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-white ${student.grade === 'VII A' ? 'bg-orange-500' : student.grade === 'VIII B' ? 'bg-yellow-500' : 'bg-blue-500'}`}>
                      {student.grade}
                    </span>
                  </td>
                  <td className="p-4">{student.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <span>Showing 1-5 from 100 data</span>
            <div className="flex items-center">
              <button className="px-4 py-2 bg-gray-200 rounded-l-md">&lt;</button>
              <button className="px-4 py-2 bg-blue-600 text-white">1</button>
              <button className="px-4 py-2 bg-gray-200">2</button>
              <button className="px-4 py-2 bg-gray-200 rounded-r-md">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
