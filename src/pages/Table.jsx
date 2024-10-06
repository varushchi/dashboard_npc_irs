import { useState } from 'react';
import data from '../data/personData.json'
import PersonTable from './PesonTable';
import PersonInfo from './PersonInfo';
import './Table.css'

function Table() {
  const showOnPage = 10
  const [clickedPersonId, setClickedPersonId] = useState(null)
  const [showPersonOnPage, setShowPersonOnPage] = useState({start: 0, end: showOnPage})

  return (
    <div className="Table">
      <h1>Employees</h1>
      {(clickedPersonId === null) &&
      <div>
        <PersonTable
          data={data}
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
