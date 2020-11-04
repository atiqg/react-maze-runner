

export default function Maze(props) {

    const renderBlock = (i)=> {
      return <Block value={i} />;
    }
  
    const addColumn = (row) => {
      let column = [];
      for(let i=0; i<props.x; i++ ){
        column.push(renderBlock(props.x*row + (i + 1)));
      }
      return column;
    }
  
    const addRows = () =>{
      let rows = [];
      for(let i=0; i<props.y; i++){
        rows.push(<div className="maze-row">{addColumn(i)}</div>);
      }
      return rows;
    }
    
    const status = 'MAZE RUNNER';
  
    return (
      <div>
        <div className="status">{status}</div>
        {addRows()}
      </div>
    );
}

function Block(props) {
    const handleClick = () => {
      alert(props.value);
    }
  
    return <button className="block" id={"block" + props.value} onClick={handleClick} >
      {props.value}
    </button>;
}