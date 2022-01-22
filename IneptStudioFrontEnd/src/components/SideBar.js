import React from 'react'
import { Link } from 'react-router-dom'
import image from './AdminImg.jpg';
import power from './power.jpg';

export default function SideBar() {
    return (
    
        <div className='sideBar'>
        <br/>
        <h1 className='Admin'>Hello Admin</h1>
     
    {/* <img src={image} className='AdminImg' alt='Img'  /> */}
     
     <hr/>
     <br/>
     
     <div>
     <Link  to="/" style={{textDecoration : "none"}}  >  <h3  className='feature'>Dashboard</h3> </Link>
     </div> 

     <div>
     <Link  style={{textDecoration : "none"}} to="/EmployeeProfile">  <h3  className='feature'>Employees Profile</h3> </Link>
     </div> 
     
     <div>
      <Link  style={{textDecoration : "none"}} to="/Attendence" > <h3  className='feature'>Attendance</h3> </Link>
     </div>
     
     <div>
     <Link  style={{textDecoration : "none"}} to="/TaskManager"> <h3  className='feature'>Task Manager</h3> </Link>
     </div>
     
     <div>
     <Link  style={{textDecoration : "none"}} to="/Application"> <h3  className='feature'>Applications</h3> </Link>
     </div>
     
     <div>
     <Link  style={{textDecoration : "none"}} to="/invoices"> <h3 className='feature'>Invoices</h3> </Link>
     </div>
     
     <div>
     <Link  style={{textDecoration : "none"}} to="/notification">   <h3  className='feature'>Notifications</h3> </Link>
     </div>

     <div>
     <Link  style={{textDecoration : "none"}} to="/holidays">   <h3  className='feature'>Holidays</h3> </Link>
     </div>

     <div className='logOut' >
       <h5> Log Out </h5>
       <img src={power} className='power' alt='Img'  />
       </div>
     
       



     
      </div>
   
    )
}
