import React from 'react';

import SideBar from './components/SideBar'


import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import EmployeeProfile from './components/EmployeeProfile';
import Attendence from './components/Attendance';
import Application from './components/Application';
import TaskManager from './components/TaskManager';
import Invoices from './components/Invoices';
// import Notification from './components/Notification';
import Holidays from './components/Holidays';
// import reactDom from 'react-dom';
import TeamAnalysis from './components/TeamAnalysis';
// import PrimarySearchAppBar from './components/NavBar';




function App() {
  return (
 <>
    <div  className='AdminDivMain'  >

       <SideBar/>
       {/* <PrimarySearchAppBar/> */}


      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route path="/EmployeeProfile" element={<EmployeeProfile/>}/>
        <Route path="/Attendence" element={<Attendence/>}/>
        <Route path="/TaskManager" element={<TaskManager/>}/>
        <Route path="/Application" element={<Application/>}/>
        <Route path="/invoices" element={<Invoices/>}/>
        {/* <Route path="/notification" element={<Notification/>}/> */}
        <Route path="/holidays" element={<Holidays/>}/>
        <Route path="/TeamAnalysis" element={<TeamAnalysis/>}/>



      </Routes>
      </div>


 </>

  );
}

export default App;
