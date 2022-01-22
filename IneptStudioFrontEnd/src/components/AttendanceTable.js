import React from 'react';
import MaterialTable from 'material-table';


export default function AttendanceTable() {
    return (
        <div style={{ width: '120%' , marginTop: '100px' }}>
          <MaterialTable
            columns={[
              { title: 'Id', field: 'id' },
              { title: 'Name', field: 'name' },
              { title: 'Department', field: 'department' },
              { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
            ]}
            data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
            title="Attendance"
          />
        </div>
      )
            
        };

