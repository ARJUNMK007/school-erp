import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-blue-900 text-white w-64 min-h-screen p-4">
      <div className="text-2xl font-semibold mb-10">Dashboard</div>
      <ul>
        <li className="mb-6">Dashboard</li>
        <li className="mb-6">Students</li>
        <li className="mb-6">Teachers</li>
        <li className="mb-6">Classes</li>
        <li className="mb-6">Finance</li>
        <li className="mb-6">Calendar</li>
        <li className="mb-6">Feedback</li>
        <li className="mb-6">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
