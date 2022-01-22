import React from 'react'
import AttendanceTable from './AttendanceTable';


export default function Attendance() {
    return (
<>

        <div className='AttendanceDiv'>
            <h1 className='AttendenceHead' > Attendence Page </h1>
        </div>

        <div  className='AttendanceTable' >
            <AttendanceTable/>
        </div>

        </>
    )
}
