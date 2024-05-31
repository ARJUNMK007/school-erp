import React from 'react';

const RecentStudents = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Students</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
          <span>John Doe</span>
          <span>Grade 10</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
          <span>Jane Smith</span>
          <span>Grade 11</span>
        </div>
        {/* Add more students as needed */}
      </div>
    </div>
  );
};

export default RecentStudents;
