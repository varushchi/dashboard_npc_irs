import PersonRow from '../components/PersonRow';
import { useState } from 'react';

function PersonTable(props) {

  const [personData, setPersonData] = useState([...props.data])
  const [sortNameState, setSortNameState] = useState('acc')
  const [sortAgeState, setSortAgeState] = useState('acc')
  const [sortCompState, setSortCompState] = useState('acc')

  const sortIcon = (option) => {
    switch(option){
      case 'acc':
        return 'Sort'
      case 'dec':
        return <span>&uarr;</span>
      case 'none':
        return <span>&darr;</span>
      default:
        return 'Sort'
    }
  }

  const sortNameIcon = sortIcon(sortNameState)
  const sortAgeIcon = sortIcon(sortAgeState)
  const sortCompIcon = sortIcon(sortCompState)

  function sortName(){
    switch(sortNameState){
      case 'acc':
        setPersonData(personData.sort((a, b) => a.name.split(' ')[1].localeCompare(b.name.split(' ')[1])))
        break
      case 'dec':
        setPersonData(personData.sort((a, b) => b.name.split(' ')[1].localeCompare(a.name.split(' ')[1])))
        break
      case 'none':
        setPersonData([...props.data])
        break
      default:
        setPersonData([...props.data])
        break
    }
    setSortNameState(() => {
      switch(sortNameState){
        case 'acc':
          return 'dec'
        case 'dec':
          return 'none'
        case 'none':
          return 'acc'
        default:
          return 'none'
      }
    })
    setSortAgeState('acc')
    setSortCompState('acc')
  }

  function sortAge(){
    switch(sortAgeState){
      case 'acc':
        setPersonData(personData.sort((a, b) => a.age - b.age))
        break
      case 'dec':
        setPersonData(personData.sort((a, b) => b.age - a.age))
        break
      case 'none':
        setPersonData([...props.data])
        break
      default:
        setPersonData([...props.data])
        break
    }
    setSortAgeState(() => {
      switch(sortAgeState){
        case 'acc':
          return 'dec'
        case 'dec':
          return 'none'
        case 'none':
          return 'acc'
        default:
          return 'none'
      }
    })
    setSortNameState('acc')
    setSortCompState('acc')
  }

  function sortComp(){
    switch(sortCompState){
      case 'acc':
        setPersonData(personData.sort((a, b) => a.company.localeCompare(b.company)))
        break
      case 'dec':
        setPersonData(personData.sort((a, b) => b.company.localeCompare(a.company)))
        break
      case 'none':
        setPersonData([...props.data])
        break
      default:
        setPersonData([...props.data])
        break
    }
    setSortCompState(() => {
      switch(sortCompState){
        case 'acc':
          return 'dec'
        case 'dec':
          return 'none'
        case 'none':
          return 'acc'
        default:
          return 'none'
      }
    })
    setSortNameState('acc')
    setSortAgeState('acc')
  }

  const personRowElem = personData.map((elem, index) => {
    return(
      <PersonRow 
        id = {elem.id}
        key = {elem.id}
        index = {index}
        name = {elem.name}
        age = {elem.age}
        company = {elem.company}
        handleClick = {props.handleClick}
      />
    )
  }).slice(props.showPersonOnPage.start, props.showPersonOnPage.end)

  return (
    <div className="PersonTable">
      <div className='table-header'>
        <h3>Index</h3>
        <h3>Name <button onClick={sortName} className='sort-name'>{sortNameIcon}</button></h3>
        <h3>Age <button onClick={sortAge} className='sort-age'>{sortAgeIcon}</button></h3>
        <h3>Company <button onClick={sortComp} className='sort-comp'>{sortCompIcon}</button></h3>
        <h3>Amount {props.data.length}</h3>
      </div>
      {personRowElem}
      <div className='page-navigation'>
        {props.showPersonOnPage.start > 0 && <button onClick={props.handlePrevPage}>&larr;</button>}
        {props.showPersonOnPage.end < props.data.length && <button onClick={props.handleNextPage} style={{marginLeft: props.showPersonOnPage.start > 0 ? '0' : '30px'}}>&rarr;</button>}
      </div>
    </div>
  );
}

export default PersonTable;