import React from 'react'
import ApplicationDataTable from './ApplicationDataTable'

export default function Application() {
    return (
        <div className='ApplicationPage' >
            <h1 className='ApplicationHead' >Applications</h1>
           <div className='ApplicationTable'>

           <ApplicationDataTable/>

            </div> 
        

        </div>
    )
}
