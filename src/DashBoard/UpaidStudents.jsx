import React from 'react';

const UnpaidStudents = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Unpaid Student Intuition</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
          <span>Samantha Wilson</span>
          <span>$1500</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
          <span>Tony Song</span>
          <span>$1200</span>
        </div>
        {/* Add more students as needed */}
      </div>
    </div>
  );
};

export default UnpaidStudents;
