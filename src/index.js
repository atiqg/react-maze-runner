import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import './index.css';
import { getInput, randomPositions } from './utils';
import Maze from './mazeGenerator';

//import mario_img from './assets/mario.svg';
//import food_img from './assets/food.svg';

let input = getInput();

const [randomFoods, centreMario] = randomPositions(parseInt(input.x), parseInt(input.y));

function Game() {
  return (
    <div className="game">
      <div className="game-maze">
        <Maze x={input.x} y={input.y} foodLoc={randomFoods} marioLoc={centreMario} />
      </div>
      <div className="game-info">
        <div id='exp'>{/* status */}</div>
        <ol>{/* TODO */}</ol>
        
      </div>
    </div>
  );
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

//setSprites();