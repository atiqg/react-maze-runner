import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import './index.css';
import { getInput } from './utils';
import Maze from './mazeGenerator';

const input = getInput();
  
function Game() {
  return (
    <div className="game">
      <div className="game-maze">
        <Maze x={input.x} y={input.y} />
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