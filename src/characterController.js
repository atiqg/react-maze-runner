import React, { useContext, useEffect, useState } from 'react';
import { MazeState } from './globalStates';


export default function Controller() {
    const [mazeData, setMazeData] = useContext(MazeState);
    const [control, setControl] = useState({
        gameInterval: null
    });

    useEffect(() => {
        const found = mazeData.randomFoods.indexOf(mazeData.marioLoc);
        if(found !==-1){
            const updatedFood = mazeData.randomFoods.filter((item) => item!== (mazeData.marioLoc));
            setMazeData(prev => ({
                ...prev,
                randomFoods: updatedFood
            }));
        }
        isBoundary();
    
    }, [mazeData, setMazeData]); 

    const moveRight = () => {
        setMazeData(prev => ({
            ...prev,
            marioLoc: prev.marioLoc + 1,
            currentDirection: 'right'
        }));
    }
  
    const moveLeft = () => {
        setMazeData(prev => ({
            ...prev,
            marioLoc: prev.marioLoc - 1,
            currentDirection: 'left'
        }));
    }

    const moveUp = () => {
        setMazeData(prev => ({
            ...prev,
            marioLoc: prev.marioLoc - prev.inputX,
            currentDirection: 'up'
        }));
    }

    const moveDown = () => {
        setMazeData(prev => ({
            ...prev,
            marioLoc: prev.marioLoc + prev.inputX,
            currentDirection: 'down'
        }));
    }

    document.onkeydown = function(event) { 
        switch (event.key) {  
            case 'ArrowUp':
                gameLoop(moveUp);
                break; 
            case 'ArrowLeft': 
                gameLoop(moveLeft);
                break;
            case 'ArrowRight':
                gameLoop(moveRight);
                break; 
            case 'ArrowDown':
                gameLoop(moveDown);
                break; 
            default:
                console.log("invalid key");
        }
    };

    const isBoundary = () => {
        if(mazeData.marioLoc + mazeData.inputX > mazeData.inputX * mazeData.inputY && mazeData.currentDirection==='down'){
            gameLoop(moveUp);    
            return;
        }else if(mazeData.marioLoc - mazeData.inputX < 0 && mazeData.currentDirection==='up'){
            gameLoop(moveDown);    
            return;
        }else if((mazeData.marioLoc - 1)%mazeData.inputX === 0 && mazeData.currentDirection==='left'){
            gameLoop(moveRight);    
            return;
        }else if((mazeData.marioLoc)%mazeData.inputX === 0 && mazeData.currentDirection==='right'){
            gameLoop(moveLeft);    
            return;
        }
    }

    const gameLoop = (moveFunction) => {

        if(control.gameInterval !== null){
            clearInterval(control.gameInterval);
        }

        let tempInterval = setInterval(() => {
            moveFunction();
        }, 375);

        setControl(prev => ({
            ...prev,
            gameInterval: tempInterval
        }));
    }

    return (
      <div className="controller"></div>
    );
}