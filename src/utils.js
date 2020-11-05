
export function getInput(){
    let input = {};

    input['x'] = prompt("Please enter border width (min:5 max:15)");
    input['y'] = prompt("Please enter border height (min:5 max:15)");

    if(!parseInt(input.x, 10) || !parseInt(input.y, 10)){
      console.log(input.x, input.y);
      input['x'] = 10;
      input['y'] = 10;
    }

    if(input.x<3 || input.x>15 || input.y<3 || input.y>15){
      input['x'] = 10;
      input['y'] = 10;
    }
  
    return input;
}

export function randomPositions(inputX, inputY) {
  let randoms = [], requiredCentre;
  const requiredFoods = Math.floor((inputX+inputY)/2);


  if(inputX*inputY%2 === 1){
    requiredCentre = Math.ceil((inputX*inputY)/2);
  }else{
    requiredCentre = Math.ceil((inputX*inputY)/2) - Math.ceil(inputX/2);
  }

  while(randoms.length < requiredFoods){
      let x = Math.floor(Math.random() * (inputX*inputY)) + 1;
      if(randoms.indexOf(x) === -1 && !(requiredCentre === x)) randoms.push(x);
  }

  return [randoms, requiredCentre];
}