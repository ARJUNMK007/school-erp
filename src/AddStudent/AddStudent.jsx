// Install necessary packages
// npm install react-icons

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../Header/Header';
import Sidebar from '../DashBoard/Sidebar';

const AddStudent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
     
      <Sidebar/>

      <div className="flex-1 p-6">
     <Header/>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Student Details</h2>
          <form>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">Photo</label>
                <div className="border-dashed border-2 border-gray-300 p-4 flex justify-center items-center h-32">
                  <span className="text-gray-400">Drag and drop or click to select</span>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">First Name *</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">Last Name *</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">Date & Place of Birth *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="25/December/1997" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">Parent Name *</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">Email *</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">Phone *</label>
                <input type="tel" className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">Address *</label>
                <textarea className="w-full p-2 border rounded"></textarea>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Parent Details</h2>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">First Name *</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">Last Name *</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">Email *</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700">Phone *</label>
                <input type="tel" className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">Address *</label>
                <textarea className="w-full p-2 border rounded"></textarea>
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">Payments *</label>
                <div className="flex items-center">
                  <input type="radio" id="cash" name="payment" value="cash" className="mr-2" />
                  <label htmlFor="cash" className="mr-6">Cash</label>
                  <input type="radio" id="debit" name="payment" value="debit" className="mr-2" />
                  <label htmlFor="debit">Debit</label>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Save as Draft</button>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AddStudent;
