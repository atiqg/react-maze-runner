import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import './index.css';

function Block(props) {
  return <button className="block" onClick={function() { alert('click');}} >
    {props.value}
  </button>;
}


function Maze(props) {

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
  
function Game() {
  return (
    <div className="game">
      <div className="game-maze">
        <Maze x={3} y={3} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);