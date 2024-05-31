import React from 'react';
import Dashboard from './DashBoard/DashBoard';
import Sidebar from './DashBoard/Sidebar';
import Students from './Students/Students';
import AuthForm from './SignIn/AuthForm';


const App = () => {
  return (
    <div>
      {/* <Dashboard/> */}
      {/* <Students/> */}
      <AuthForm/>
    </div>
  );
};

export default App;
