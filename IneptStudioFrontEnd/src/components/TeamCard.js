import React from 'react'
import { Link } from 'react-router-dom'

export default function TeamCard(props) {
    return (
      
            <div className='team'  >
            <Link to="/TeamAnalysis" style={{textDecoration : "none"}}   >  <h2   className='TeamNames'  > {props.teamName} </h2> </Link>
            </div>
           
      
    )
}
