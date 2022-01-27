import React from 'react'
import TeamCard from './TeamCard'
// import AllEmp from '../components/Tables/AllEmp'
export default function EmployeeProfile() {
    return (
        <div className='MainDiv' >
       <h1 className='WorkingTeams'  >Working Teams</h1>
     <div className='HavingTeam' >
         <TeamCard  teamName = "Web/App Dev Team"  />
         <TeamCard  teamName = "Game Dev Team"  />
         <TeamCard  teamName = "2D/3D Graphics Team"  />
     </div>
     {/* <AllEmp/> */}


        </div>
    )
}
