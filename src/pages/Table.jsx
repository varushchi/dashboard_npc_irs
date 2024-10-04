import { useState } from 'react';
import personData from '../data/personData.json'
import PersonTable from './PesonTable';
import PersonInfo from './PersonInfo';
import './Table.css'

function Table() {
  const showOnPage = 10
  const [clickedPersonId, setClickedPersonId] = useState(null)
  const [showPersonOnPage, setShowPersonOnPage] = useState({start: 0, end: showOnPage})
  return (
    <div className="Table">
      {clickedPersonId === null &&
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
      />}
      {clickedPersonId !== null &&
      <PersonInfo
        hanldeClick = {() => setClickedPersonId(null)}
        person = {personData.find(elem => elem.id === clickedPersonId)}
      />}
    </div>
  );
}

export default Table;
