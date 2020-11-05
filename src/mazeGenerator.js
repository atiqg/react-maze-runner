import React, { useState } from 'react';
import food_img from './assets/food.svg';
import mario_img from './assets/mario.svg';

export default function Maze(props) {

    const renderBlock = (i)=> {
      if(props.foodLoc.indexOf(i) !== -1){
        return <Block value={i} image={`url(${food_img})`} />;
      }else if(props.marioLoc === i){
        return <Block value={i} image={`url(${mario_img})`} />;
      }else{
        return <Block value={i} image={'none'} />;
      }
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
  const [image, setImage] = useState(props.image);

  const handleClick = () => {
    alert(props.value);
  }

  var blockStyle = {
    backgroundSize: "20px",
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: image
  };
  
  return <button style={ blockStyle } className="block" id={"block_" + props.value} onClick={handleClick} >
  </button>;
}