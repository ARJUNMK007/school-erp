// Install necessary packages
// npm install react-icons

import React from 'react';
import { FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-indigo-50 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-800">dynamic value</h1>
      <div className="flex items-center space-x-4">
        <FaBell className="text-xl text-gray-500" />
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Nestle A.</span>
          <span className="text-gray-400">Admin</span>
        </div>
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      </div>
    </header>
  );
}

export default Header;
