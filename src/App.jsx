import { useState } from 'react';
import './App.css';
import Table from './pages/Table';
import SideBar from './pages/SideBar';
import Overview from './pages/Overview';


function App() {

  const [currentPageOption, setCurrentPageOption] = useState('Table')

  function switchCurrentPage(option){
    switch(option){
      case 'Table':
        return <Table />
      case 'Overview':
        return <Overview />
      default:
        return <Table />
    }
  }

  const currentPage = switchCurrentPage(currentPageOption)

  return (
    <div className="App">
      <SideBar handleCurrentPage = {(e) => setCurrentPageOption(e.target.id)}/>
      {currentPage}
    </div>
  );
}

export default App;
