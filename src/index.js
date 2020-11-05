import ReactDOM from 'react-dom';
import './index.css';
import { getInput, randomPositions } from './utils';
import Maze from './mazeGenerator';

let input = getInput();

const [randomFoods, centreMario] = randomPositions(parseInt(input.x), parseInt(input.y));

function Game() {
  return (
    <div className="game">
      <div className="game-maze">
        <Maze x={input.x} y={input.y} foodLoc={randomFoods} marioLoc={centreMario} />
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