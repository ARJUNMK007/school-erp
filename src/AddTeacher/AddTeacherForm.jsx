// src/components/AddTeacherForm.js
import React from 'react';
import Sidebar from '../DashBoard/Sidebar';

const AddTeacherForm = () => {
  return (
    <div className="flex">
      <aside className="bg-blue-800 w-64 min-h-screen p-4">
        {/* <div className="text-white text-2xl font-bold mb-10">Logo</div>
        <ul className="text-white space-y-4">
          <li>Dashboard</li>
          <li>Students</li>
          <li>Teachers</li>
          <li>Event</li>
          <li>Finance</li>
          <li>User</li>
          <li>Chat</li>
          <li>Latest Activity</li>
        </ul> */}
        <Sidebar/>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Add New Teacher</h2>
          <form>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">First Name *</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="First Name" />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name *</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Last Name" />
                </div>
                <div>
                  <label className="block text-gray-700">Email *</label>
                  <input type="email" className="w-full p-2 border rounded-md" placeholder="Email" />
                </div>
                <div>
                  <label className="block text-gray-700">Phone *</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Phone" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700">Address *</label>
                  <textarea className="w-full p-2 border rounded-md" rows="3" placeholder="Address"></textarea>
                </div>
                <div>
                  <label className="block text-gray-700">Date of Birth *</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700">Place of Birth *</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Place of Birth" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700">Photo</label>
                  <div className="border-dashed border-2 p-4 rounded-md text-center">
                    Drag and drop a file here or click
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">University *</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="University" />
                </div>
                <div>
                  <label className="block text-gray-700">Degree *</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Degree" />
                </div>
                <div>
                  <label className="block text-gray-700">Start & End Date *</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Start & End Date" />
                </div>
                <div>
                  <label className="block text-gray-700">City *</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="City" />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-4">Save as Draft</button>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddTeacherForm;
