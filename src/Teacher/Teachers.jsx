// src/App.js
import React from 'react';
import Sidebar from '../DashBoard/Sidebar';
import TeacherCard from './TeachersCard';


const teachers = [
  { name: 'Dimitres Viga', subject: 'Mathematics' },
  { name: 'Tom Housenburg', subject: 'Science' },
  { name: 'Dana Benevista', subject: 'Art' },
  { name: 'Salvadore Morbeau', subject: 'Biology' },
  { name: 'Maria Historia', subject: 'History' },
  { name: 'Jack Sally', subject: 'Physics' },
  { name: 'Lula Beatrice', subject: 'Algorithm' },
  { name: 'Nella Vita', subject: 'English' },
  { name: 'Nadia Laravela', subject: 'Programming' },
  { name: 'Dakota Farral', subject: 'Science' },
  { name: 'Miranda Adlia', subject: 'Art' },
  { name: 'Indiana Barker', subject: 'Biology' },
];

const Teachers = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Teachers</h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">+ New Student</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} name={teacher.name} subject={teacher.subject} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Teachers;
