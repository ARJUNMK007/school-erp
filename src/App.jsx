import React from 'react';
import Dashboard from './DashBoard/DashBoard';
import Sidebar from './DashBoard/Sidebar';
import Students from './Students/Students';
import AuthForm from './SignIn/AuthForm';
import Teachers from './Teacher/Teachers';
import AddTeacherForm from './AddTeacher/AddTeacherForm';


const App = () => {
  return (
    <div>
      {/* <Dashboard/> */}
      {/* <Students/> */}
      {/* <AuthForm/> */}
      {/* <Teachers/> */}
      <AddTeacherForm/>
    </div>
  );
};

export default App;
