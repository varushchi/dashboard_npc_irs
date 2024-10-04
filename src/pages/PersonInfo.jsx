import React from 'react'

export default function PersonInfo(props) {
  return (
    <div className='PersonInfo' id = {props.person.id} key = {props.person.id}>
      <p>{props.person.name}</p>
      <p>{props.person.gender}</p>
      <p>{props.person.age}</p>
      <p>{props.person.company}</p>
      <p>{props.person.email}</p>
      <p>{props.person.phone}</p>
      <p>{props.person.address}</p>
      <p>{props.person.about}</p>
      {props.person.kids.map(elem => <p key = {elem.id}>{elem.name}</p>)}
      <button onClick={props.hanldeClick}>back</button>
    </div>
  )
}
