import React, { useState } from 'react'
import './NewTask.css'

export default function NewTask(props) {

  const [inputValue, setInputValue] = useState('')

  function handleSave(){
    props.handleNewData(inputValue)
    props.handleAddNew()
  }

  return (
    <div className='NewTask'>
        <input value={inputValue} placeholder='Add new task' onChange={(e) => setInputValue(e.target.value)}/>
        {inputValue && <button onClick={() => handleSave()}>Save</button>}
        <button onClick={props.handleAddNew}>Back</button>
    </div>
  )
}
