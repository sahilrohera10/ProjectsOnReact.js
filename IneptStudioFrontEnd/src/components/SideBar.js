import React from 'react'
import { Link } from 'react-router-dom'
import image from './AdminImg.jpg';
import power from './power.jpg';
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ArticleIcon from '@mui/icons-material/Article';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';

export default function SideBar() {
    return (
    
        <div className='sideBar'>
        <br/>
        <h1 className='Admin'>Hello Admin</h1>
     
    {/* <img src={image} className='AdminImg' alt='Img'  /> */}
     
     <hr/>
     <br/>

     
     
     <div style={{display : 'flex'}} >

       <GridViewIcon  style={{marginTop: '26px' , marginLeft: '26px'}} />
       
     <Link  to="/" style={{textDecoration : "none"}}  > 
 <h3  className='feature'>Dashboard</h3> </Link>
     </div> 

     <div  style={{display : 'flex'}}   >
       <PeopleIcon  style={{marginTop: '26px' , marginLeft: '26px'}}/>
     <Link  style={{textDecoration : "none"}} to="/EmployeeProfile">  <h3  className='feature'>Employees</h3> </Link>
     </div> 
     
     <div  style={{display : 'flex'}}  >
       <AccountBoxIcon  style={{marginTop: '26px' , marginLeft: '26px'}}/>
      <Link  style={{textDecoration : "none"}} to="/Attendence" > <h3  className='feature'>Attendance</h3> </Link>
     </div>
     
     <div  style={{display : 'flex'}}>
       <TaskAltIcon style={{marginTop: '26px' , marginLeft: '26px'}}/>
     <Link  style={{textDecoration : "none"}} to="/TaskManager"> <h3  className='feature'>Task Manager</h3> </Link>
     </div>
     
     <div   style={{display : 'flex'}}>
       <ArticleIcon  style={{marginTop: '26px' , marginLeft: '26px'}}/>
     <Link  style={{textDecoration : "none"}} to="/Application"> <h3  className='feature'>Applications</h3> </Link>
     </div>
     
     <div  style={{display : 'flex'}}>
       <ReceiptIcon style={{marginTop: '26px' , marginLeft: '26px'}}/>
     <Link  style={{textDecoration : "none"}} to="/invoices"> <h3 className='feature'>Invoices</h3> </Link>
     </div>
     
     {/* <div  style={{display : 'flex'}}>
       <NotificationsActiveIcon  style={{marginTop: '26px' , marginLeft: '26px'}}/>
     <Link  style={{textDecoration : "none"}} to="/notification">   <h3  className='feature'>Notifications</h3> </Link>
     </div> */}

     <div  style={{display : 'flex'}}>
       <HolidayVillageIcon  style={{marginTop: '26px' , marginLeft: '26px'}}/>
     <Link  style={{textDecoration : "none"}} to="/holidays">   <h3  className='feature'>Holidays</h3> </Link>
     </div>

     <div className='logOut' style={{display: 'flex'}} >
       <SettingsPowerIcon style={{margin: '20px'}}/>
       <h5> Log Out </h5>
       {/* <img src={power} className='power' alt='Img'  /> */}
       </div>
     
       



     
      </div>
   
    )
}
