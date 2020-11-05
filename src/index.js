import ReactDOM from 'react-dom';
import './index.css';
import React, { useState, useLayoutEffect } from 'react';
import { getInput, randomPositions } from './utils';
import Maze from './mazeGenerator';

import GlobalState from './globalMazeData';

//let input = getInput();
let input = {'x':10, 'y':10};

const [randomFoods, centreMario] = randomPositions(parseInt(input.x), parseInt(input.y));

function Game() {
  const [mazeData, setMazeData] = useState({});

  useLayoutEffect(() => {
    setMazeData(mazeData => ({...mazeData, test: "passed"}));
  }, []);

  return (
    <div className="game">
      <div className="game-maze">
        <GlobalState.Provider value={[mazeData, setMazeData]}>
          <Maze x={input.x} y={input.y} foodLoc={randomFoods} marioLoc={centreMario} />
        </GlobalState.Provider>
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