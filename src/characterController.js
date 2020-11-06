import React, { useContext, useLayoutEffect } from 'react';
import { MazeState } from './globalStates';


export default function Controller() {
    const [mazeData, setMazeData] = useContext(MazeState);

    const moveRight = () => {
        setMazeData(prev => ({
            ...prev,
            centreMario: prev.centreMario + 1
        }));
    }
  
    const moveLeft = () => {
        setMazeData(prev => ({
            ...prev,
            centreMario: prev.centreMario - 1
        }));
    }

    document.onkeydown = function(event) { 
        switch (event.key) {  
            case 'ArrowUp': 
                console.log('Up Key pressed!'); 
                break; 
            case 'ArrowLeft': 
                moveLeft();
                console.log('Left Key pressed!');
                break;
            case 'ArrowRight':
                moveRight(); 
                console.log('Right Key pressed!'); 
                break; 
            case 'ArrowDown': 
                console.log('Down Key pressed!'); 
                break; 
        }
    };

    return (
      <div className="controller"></div>
    );
}