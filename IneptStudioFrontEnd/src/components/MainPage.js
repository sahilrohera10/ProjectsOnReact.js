import React from 'react'
import FlexItem from './FlexItem'
import SimpleLineChart from './SimpleLineChart'



export default function MainPage() {
    return (
        <main className='mainSection'>

 <h1  className='welcome' > WELCOME TO INEPT STUDIO </h1>


<div className='flexContainer'> 
 
<FlexItem  title = "Total Employees" numbers = "30+"/>

<FlexItem  title = "Full Time Employees" numbers = "20+"  />

<FlexItem  title = "Interns" numbers = "10+"  />

</div>
<br/>
<br/>

<SimpleLineChart/>


</main>
    )
}
