// src/components/TeacherCard.js
import React from 'react';

const TeacherCard = ({ name, subject }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <div className="bg-gray-300 h-24 w-24 rounded-full mx-auto mb-4"></div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{subject}</p>
      <div className="flex justify-center space-x-2 mt-2">
        <button className="bg-blue-500 text-white p-2 rounded-full">i</button>
        <button className="bg-green-500 text-white p-2 rounded-full">E</button>
        <button className="bg-red-500 text-white p-2 rounded-full">D</button>
      </div>
    </div>
  );
};

export default TeacherCard;
