import React from 'react'
import {ResponsiveContainer , LineChart , Line , XAxis , YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, BarChart, Bar} from 'recharts'

const pdata = [
    {
      name: 'Python',
      student: 13,
      fees: 10
    },
    {
      name: 'Javascript',
      student: 15,
      fees: 12
    },
    {
      name: 'PHP',
      student: 5,
      fees: 10
    },
    {
      name: 'Java',
      student: 10,
      fees: 5
    },
    {
      name: 'C#',
      student: 9,
      fees: 4
    },
    {
      name: 'C++',
      student: 10,
      fees: 8
    },
  ];



export default function SimpleLineChart() {

    return (
      <>
  <div style={{textAlign: "center" , marginLeft : "190px"}} >
{/* <div  style={{display : "flex"}} > */}
        <ResponsiveContainer width="100%" aspect={3}  >
        <LineChart data={pdata} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'grey' }} />
          <Legend />
          <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <br/>
<br/>
<br/>
<br/>


      <ResponsiveContainer width="85%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>


      {/* </div> */}
      
<br/>
<br/>
<br/>
<br/>


      <ResponsiveContainer width="75%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

      </div>

      <br/>
      <br/>
      <br/>
      <br/>


      </>
    )
}
