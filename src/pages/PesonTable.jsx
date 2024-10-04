import PersonRow from '../components/PersonRow';

function PersonTable(props) {

  const personRowElem = props.data.slice(props.showOnPage.start, props.showOnPage.end).map(elem => {
    return(
      <PersonRow 
        id = {elem.id}
        key = {elem.id}
        name = {elem.name}
        age = {elem.age}
        company = {elem.company}
        handleClick = {props.handleClick}
      />
    )
  })

  return (
    <div className="PersonTable" id='66ffa931d5c507f96596bfa0'>
      {personRowElem}
      {props.showOnPage.start > 0 && <button onClick={props.handlePrevPage}>&#60;</button>}
      
      {props.showOnPage.end < props.data.length && <button onClick={props.handleNextPage}>&gt;</button>}
      
    </div>
  );
}

export default PersonTable;