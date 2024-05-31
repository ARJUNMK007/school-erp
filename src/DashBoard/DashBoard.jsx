import React from 'react';
import Sidebar from './Sidebar';
import SchoolPerformance from './SchoolPerformance';
import SchoolCalendar from './SchoolCalender';
import SchoolFinance from './SchoolFinance';
import UnpaidStudents from './UpaidStudents';
import RecentStudents from './RecentStudents';
import Messages from './Messages';


const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow-md">
            <SchoolPerformance />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <SchoolCalendar />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <SchoolFinance />
          </div>
          <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow-md">
            <UnpaidStudents />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <RecentStudents />
          </div>
          <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow-md">
            <Messages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
