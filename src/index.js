import ReactDOM from 'react-dom';
import './index.css';
import React, { useState, useLayoutEffect } from 'react';
//import { getInput, randomPositions } from './utils';
import Maze from './mazeGenerator';
import Controller from './characterController';

import { MazeState } from './globalStates';

//let input = getInput();
let input = {'x':10, 'y':10};

//const [randomFoods, centreMario] = randomPositions(parseInt(input.x), parseInt(input.y));
const randomFoods = [95, 82, 67, 62, 93, 9, 11, 63, 42, 76];
const centreMario = 45;


function Game() {
  const [mazeData, setMazeData] = useState({});

  useLayoutEffect(() => {
    setMazeData(mazeData => ({
      ...mazeData, 
      randomFoods: randomFoods,
      marioLoc: centreMario,
      inputX: input.x,
      inputY: input.y,
      currentDirection: null
    }));

  }, []);



  let maze;
  if(mazeData.marioLoc){
    maze =(
      <MazeState.Provider value={[mazeData, setMazeData]}>
        <Maze x={input.x} y={input.y} foodLoc={mazeData.randomFoods} marioLoc={mazeData.marioLoc} />
        <Controller />
      </MazeState.Provider>
    );
  }else{
    maze = <p>Loading</p>
  }

  return (
    <div className="game">
      <div className="game-maze">
        {maze}
      </div>
      <div className="game-info">
      </div>
    </div>
  );
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);