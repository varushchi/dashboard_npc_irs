import { useState } from 'react';
import data from '../data/personData.json'
import PersonTable from './PesonTable';
import PersonInfo from './PersonInfo';
import './Table.css'

function Table() {
  const showOnPage = 10
  const [clickedPersonId, setClickedPersonId] = useState(null)
  const [showPersonOnPage, setShowPersonOnPage] = useState({start: 0, end: showOnPage})
  const [personData, setPersonData] = useState([...data])
  const [sortNameState, setSortNameState] = useState('acc')
  const [sortAgeState, setSortAgeState] = useState('acc')
  const [sortCompState, setSortCompState] = useState('acc')

  function sortName(){
    switch(sortNameState){
      case 'acc':
        setPersonData(personData.sort((a, b) => a.name.split(' ')[1].localeCompare(b.name.split(' ')[1])))
        break
      case 'dec':
        setPersonData(personData.sort((a, b) => b.name.split(' ')[1].localeCompare(a.name.split(' ')[1])))
        break
      case 'none':
        setPersonData([...data])
        break
      default:
        setPersonData([...data])
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
        setPersonData([...data])
        break
      default:
        setPersonData([...data])
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
        setPersonData([...data])
        break
      default:
        setPersonData([...data])
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
  }

  return (
    <div className="Table">
      <h1>Employees</h1>
      {(clickedPersonId === null) &&
      <div>
        <div className='filter-div'>
          <div></div>
          <button onClick={sortName} className='sort-name'>Sort Name</button>
          <button onClick={sortAge} className='sort-age'>Sort Age</button>
          <button onClick={sortComp} className='sort-comp'>Sort Company</button>
        </div>
        <PersonTable
          data={personData}
          handleClick = {(e) => setClickedPersonId(e.target.id)}
          showPersonOnPage = {showPersonOnPage}
          handleNextPage = {() => setShowPersonOnPage({
            start: showPersonOnPage.end,
            end: showOnPage + showPersonOnPage.end
          })}
          handlePrevPage = {() => setShowPersonOnPage({
            start: showPersonOnPage.start - showOnPage >= 0 ? showPersonOnPage.start - showOnPage : 0,
            end: showPersonOnPage.start < showOnPage ? showOnPage : showPersonOnPage.start
          })}
        />
      </div>}
      {clickedPersonId !== null &&
      <PersonInfo
        hanldeClick = {() => setClickedPersonId(null)}
        person = {data.find(elem => elem.id === clickedPersonId)}
      />}
    </div>
  );
}

export default Table;
