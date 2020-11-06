import React, { useContext, useLayoutEffect } from 'react';
import { MazeState } from './globalStates';


export default function Controller() {
    const [mazeData, setMazeData] = useContext(MazeState);

    const eatFood = (i) => {
        const found = mazeData.randomFoods.indexOf(mazeData.marioLoc + i);
        if(found !== -1){
            const updatedFood = mazeData.randomFoods.filter((item) => item!== (mazeData.marioLoc + i));
            
            setMazeData(prev => ({
                ...prev,
                randomFoods: updatedFood
            }));
        }
    }

    const moveRight = () => {
        eatFood(1);
        setMazeData(prev => ({
            ...prev,
            marioLoc: prev.marioLoc + 1
        }));
    }
  
    const moveLeft = () => {
        eatFood(-1);
        setMazeData(prev => ({
            ...prev,
            marioLoc: prev.marioLoc - 1
        }));
    }

    const moveUp = () => {
        eatFood(-mazeData.inputX);
        setMazeData(prev => ({
            ...prev,
            marioLoc: prev.marioLoc - prev.inputX
        }));
    }

    const moveDown = () => {
        eatFood(mazeData.inputX);
        setMazeData(prev => ({
            ...prev,
            marioLoc: prev.marioLoc + prev.inputX
        }));
    }

    document.onkeydown = function(event) { 
        switch (event.key) {  
            case 'ArrowUp':
                if(mazeData.marioLoc - mazeData.inputX > 0){
                    moveUp();
                }
                break; 
            case 'ArrowLeft': 
                moveLeft();
                break;
            case 'ArrowRight':
                moveRight(); 
                break; 
            case 'ArrowDown':
                if((mazeData.marioLoc + mazeData.inputX) < mazeData.inputX*mazeData.inputY){
                    moveDown();
                } 
                break; 
        }
    };

    return (
      <div className="controller"></div>
    );
}