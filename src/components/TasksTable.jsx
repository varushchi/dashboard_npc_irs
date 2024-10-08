import React, { useState }from 'react'
import './TasksTable.css'

export default function TasksTable(props) {

  const showOnPage = 10
  const [showTaskOnPage, setShowTaskOnPage] = useState({start: 0, end: showOnPage})

  const newData = props.data.map(elem => {
    return(
      { ...elem,
        registered: elem.registered.split('T')[0].split('-').join('/')
      }
    )
  })

  const tasksElem = newData.sort((a,b) => {
    return(
      new Date(a.registered.split('/').join('-')) - new Date(b.registered.split('/').join('-'))
    )
  }).map((elem, index) => {
    return(
      <div className='task' key={elem.id}>
        <p>{index + 1}</p>
        <p>{elem.about}</p>
        <p>{elem.registered}</p>
        <button id={elem.id} onClick={(e) => props.handleDelete(e)}>Delete</button>
      </div>
    )
  }).slice(showTaskOnPage.start, showTaskOnPage.end)

  function handleNextPage(){
    setShowTaskOnPage({
      start: showTaskOnPage.end,
      end: showOnPage + showTaskOnPage.end
    })
  }

  function handlePrevPage(){
    setShowTaskOnPage({
      start: showTaskOnPage.start - showOnPage >= 0 ? showTaskOnPage.start - showOnPage : 0,
      end: showTaskOnPage.start < showOnPage ? showOnPage : showTaskOnPage.start
    })
  }

  return (
    <div className='Tasks'>
      <div className='headers'>
        <h3>Index</h3>
        <h3>Task</h3>
        <h3>Time</h3>
        <h3>Amount {props.data.length}</h3>
      </div>
      {tasksElem}
      <div className='page-navigation-tasks'>
        {showTaskOnPage.start > 0 && <button onClick={handlePrevPage}>&larr;</button>}
        {showTaskOnPage.end < props.data.length && <button onClick={handleNextPage} style={{marginLeft: showTaskOnPage.start > 0 ? '0' : '50px'}}>&rarr;</button>}
      </div>
      <button onClick={props.handleAddNew}>Add new</button>
    </div>
  )
}
