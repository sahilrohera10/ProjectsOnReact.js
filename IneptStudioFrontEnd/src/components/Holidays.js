import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';


export default function Holidays() {
    return (
        <>
        <div className='heading'>
          <h1>HOLIDAYS</h1>
         </div>
         <div class="HolidayMain">
          
        <ScheduleComponent currentView="Month" selectedDate={new Date(2022,0,21)}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  
         </ScheduleComponent>
         </div> 
         </>   
    )
}
