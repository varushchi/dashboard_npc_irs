import React from 'react'
import './PersonInfo.css'

export default function PersonInfo(props) {
  return (
    <div className='PersonInfo' id = {props.person.id} key = {props.person.id}>
      <div className='personal'>
        <h3>{props.person.name}</h3>
        <div className='age-gender'>
          <p>{props.person.gender === 'male' ? 'Male' : 'Female'},</p>
          <p>{props.person.age}</p>
        </div>
      </div>

      <div className='about-work-flex'>
        <div className='about-div'>
          <h3>About</h3>
          <p className='about-p'>{props.person.about}</p>
        </div>
        <div className='work'>
          <h3>{props.person.company}</h3>
          <div className='contact'>
            <p><span>Email: </span>{props.person.email}</p>
            <p><span>Phone: </span>{props.person.phone}</p>
            <p><span>Address: </span>{props.person.address}</p>
          </div>
        </div>
      </div>
      {props.person.kids.length > 0 && <div className='kids'>
        <h3>Kids</h3>
        {props.person.kids.map(elem => <p key = {elem.id}>{elem.name}</p>)}
      </div>}
      <button onClick={props.hanldeClick} className='back-button'>Back</button>
    </div>
  )
}
