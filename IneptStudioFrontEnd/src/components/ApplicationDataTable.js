import React from 'react';
import MaterialTable from 'material-table';

export default function ApplicationDataTable() {
    return (
        <div style={{ width: '120%' }}>
          <MaterialTable
            columns={[
              { title: 'Name', field: 'name'},
              { title: 'Department', field: 'Department'  },
              { title: 'Subject', field: 'Subject' },
              { title: 'Reason', field: 'Reason'},
              { title: 'From Date', field: 'FromDate', type: 'date' },
              { title: 'To Date', field: 'ToDate', type: 'date' },
              { title: 'Remarks', field: 'Remarks' },



            
            ]}
            data={[{ name: 'Pankaj Rawat', Department: 'Web Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' },
            { name: 'Harsh', Department: 'App Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' },
            { name: 'Ankit', Department: 'App Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' },
            { name: 'Sahil', Department: 'Web Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' },
            { name: 'Ansh', Department: 'Web Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' },
            { name: 'Priyanka', Department: 'Web Development', Subject: '2 days leave', Reason: 'Urgent work at home' , FromDate: '2022-01-21' , ToDate: '2022-01-22 ' }
        ]}


            title="Leave Applications"
          />
        </div>
      )
}
