import React from 'react';

const Messages = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 p-2 rounded-md">
          <p className="text-sm">Message content...</p>
        </div>
        <div className="bg-gray-100 p-2 rounded-md">
          <p className="text-sm">Message content...</p>
        </div>
        {/* Add more messages as needed */}
      </div>
    </div>
  );
};

export default Messages;
