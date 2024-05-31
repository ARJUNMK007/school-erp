// src/components/Sidebar.js
import React from 'react';
import { FaHome, FaUser, FaUsers, FaBook, FaDollarSign, FaCog, FaChartLine } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-blue-800 h-screen p-4">
      <div className="text-white text-2xl font-bold mb-10">Logo</div>
      <ul className="text-white space-y-4">
        <li><FaHome className="inline-block mr-2" /> Dashboard</li>
        <li><FaUser className="inline-block mr-2" /> Students</li>
        <li><FaUsers className="inline-block mr-2" /> Teachers</li>
        <li><FaBook className="inline-block mr-2" /> Class</li>
        <li><FaDollarSign className="inline-block mr-2" /> Finance</li>
        <li><FaCog className="inline-block mr-2" /> User</li>
        <li><FaChartLine className="inline-block mr-2" /> Latest Activity</li>
      </ul>
    </div>
  );
};

export default Sidebar;
