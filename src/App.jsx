import { useState } from 'react';
import './App.css';
import personData from './data/personData.json'
import PersonTable from './pages/PesonTable';
import PersonInfo from './pages/PersonInfo';

function App() {

  const [clickedPersonId, setClickedPersonId] = useState(null)
  const [showPersonOnPage, setShowPersonOnPage] = useState({start: 0, end: 10})
  return (
    <div className="App">
      {clickedPersonId === null &&
      <PersonTable 
        data={personData}
        handleClick = {(e) => setClickedPersonId(e.target.id)}
        showOnPage = {showPersonOnPage}
        handleNextPage = {() => setShowPersonOnPage({
          start: showPersonOnPage.end,
          end: 10+showPersonOnPage.end
        })}
        handlePrevPage = {() => setShowPersonOnPage({
          start: showPersonOnPage.start - 10 >= 0 ? showPersonOnPage.start - 10 : 0,
          end: showPersonOnPage.start
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

export default App;
