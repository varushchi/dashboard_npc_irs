import React from 'react'
import './SideBar.css'

export default function SideBar(props) {
  return (
    <div className='SideBar'>
      <button id='Overview' onClick={props.handleCurrentPage}>Overview</button>
      <button id='Table' onClick={props.handleCurrentPage}>Employees</button>
      <button id='Tasks' onClick={props.handleCurrentPage}>Tasks</button>
      <button id='Option 4' onClick={props.handleCurrentPage}>Option 4</button>
    </div>
  )
}
