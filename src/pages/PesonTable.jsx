import PersonRow from '../components/PersonRow';

function PersonTable(props) {

  const personRowElem = props.data.slice(props.showPersonOnPage.start, props.showPersonOnPage.end).map(elem => {
    return(
      <PersonRow 
        id = {elem.id}
        key = {elem.id}
        index = {elem.index}
        name = {elem.name}
        age = {elem.age}
        company = {elem.company}
        handleClick = {props.handleClick}
      />
    )
  })

  return (
    <div className="PersonTable">
      <div className='table-header'>
        <h3>Index</h3>
        <h3>Name</h3>
        <h3>Age</h3>
        <h3>Company</h3>
      </div>
      {personRowElem}
      <div className='page-navigation'>
        {props.showPersonOnPage.start > 0 && <button onClick={props.handlePrevPage}>&#60;</button>}
        {props.showPersonOnPage.end < props.data.length && <button onClick={props.handleNextPage} style={{marginLeft: props.showPersonOnPage.start > 0 ? '0' : '30px'}}>&gt;</button>}
      </div>
    </div>
  );
}

export default PersonTable;