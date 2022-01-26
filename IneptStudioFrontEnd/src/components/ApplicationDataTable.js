import React from 'react';
import MaterialTable from 'material-table';

import Button from '@mui/material/Button';



export default function ApplicationDataTable() {
  const { useState,useEffect } = React;
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3600/getLeaveApp')
      .then(resp => resp.json())
      .then(resp => {
        console.log("resp", resp) 
        setData(resp)
      })
  }, [])

    return (
        <div style={{ width: '120%' }}>
          <MaterialTable
            columns={[
              { title: 'Name', field: 'name'},
              { title: 'Department', field: 'depart'  },
              { title: 'Subject', field: 'sub' },
              { title: 'Reason', field: 'reason'},
              { title: 'From Date', field: 'fromDate', type: 'date' },
              { title: 'To Date', field: 'toDate', type: 'date' },
              { title: 'Remarks', render : rowData => <div className='Buttons' >   <Button variant="contained" color="success">
              Accept
              </Button>
              <Button variant="outlined" color="error">
        Reject
      </Button>
  </div>

            },



            
            ]}
   data = {data.data}

        //     data={[{ name: 'Pankaj Rawat', Department: 'Web Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' },
        //     { name: 'Harsh', Department: 'App Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' },
        //     { name: 'Ankit', Department: 'App Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' },
        //     { name: 'Sahil', Department: 'Web Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' },
        //     { name: 'Ansh', Department: 'Web Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' },
        //     { name: 'Priyanka', Department: 'Web Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' }
        // ]}


            title="Leave Applications"
          />
        </div>
      )
}
