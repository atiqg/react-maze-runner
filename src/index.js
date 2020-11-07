import ReactDOM from 'react-dom';
import './index.css';
import React, { useState, useLayoutEffect} from 'react';
//UTILITY FUNCTIONS SCRIPT
import { getInput, randomPositions } from './utils';
//MAZE GENERATOR COMPONENT
import Maze from './mazeGenerator';
//CHARACTER CONTROLLER COMPONENT
import Controller from './characterController';
//GLOBAL CONTEXT / STATE
import { MazeState } from './globalStates';


/**
 * get user input for maze size
 * @returns {x: number, y: number} 
 */ 
let input = getInput();

/**
 * generate a ~center location for character and 
 * random locations for food.
 * @returns [array of numbers], number 
 */
const [randomFoods, centreMario] = randomPositions(parseInt(input.x), parseInt(input.y));


/**
 * Main Game Component
 * This component:
 * 1. initialize global state
 * 2. wrap that global state on maze and controller
 * 3. serve main page html
 * @component
 * @example
 * <Game />
 */
function Game() {

  /**
   * Global state to initialize.
   * @const
   */
  const [mazeData, setMazeData] = useState({});

  /**
   * Game's useEffect 
   * This initialize all global state variables
   * @public
   */
  useLayoutEffect(() => {
    setMazeData(mazeData => ({
      ...mazeData, 
      randomFoods: randomFoods,
      marioLoc: centreMario,
      inputX: parseInt(input.x),
      inputY: parseInt(input.y),
      currentDirection: null,
      score: 0
    }));

  }, []);

  //check if player location is generated
  let maze, score = mazeData.score;
  if(mazeData.marioLoc){
    //set maze and controller component with required props
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
      <div className="separator"></div>
      <div className="game-info">
        <div className="score">
          <p className="score-text">Score: {score}</p>
        </div>
        <div className="play-info">
          <h3>Controls and Info: </h3>
          <p>* Use ←↕→ Arrow Keys on keyboard to move.</p>
          <p>* Lesser <b>score</b> is better.</p>
        </div>
        <div className="tag-line">Run Like the Wind !!!</div>
      </div>
    </div>
  );
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);