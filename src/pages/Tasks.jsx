import React, { useState } from 'react'
import data from '../data/taskData.json'
import TasksTable from '../components/TasksTable'
import NewTask from '../components/NewTask'

export default function Tasks() {

  const [addNew, setAddNew] = useState(false)
  const [tasks, setTasks] = useState([...data])

  function handleDelete(e){
    setTasks(() => tasks.filter(elem => elem.id !== e.target.id))
  }

  function handleAddNew(){
    setAddNew(!addNew)
  }

  function handleNewData(data){
    setTasks(()=>{
      const today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear()
      return(
        [...tasks,
          {
            id: String(Math.random().toFixed(10)),
            index: tasks.length,
            about: data,
            registered: yyyy + '/' + mm + '/' + dd
          }
        ]
      )
    })
    console.log(tasks)
  }

  return (
    <div className='Tasks'>
      <h1>Tasks</h1>
      {!addNew && <TasksTable data = {[...tasks]} handleAddNew={handleAddNew} handleDelete={(e) => handleDelete(e)}/>}
      {addNew && <NewTask handleAddNew={handleAddNew} handleNewData={data => handleNewData(data)}/>}
    </div>
  )
}
