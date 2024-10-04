import React from 'react'
import './PersonRow.css'

export default function PersonRow(props) {

  return (
    <div className='PersonRow' key = {props.id}>
      <p>{props.index + 1}</p>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.company}</p>
        <button id = {props.id} onClick={props.handleClick}>Show more</button>
    </div>
  )
}
