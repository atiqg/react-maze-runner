export function getInput(){
    let input = {};
    input['x'] = prompt("Please enter width in number");
    input['y'] = prompt("Please enter height in number");
  
    if(!input.x || !input.y){
      input['x'] = 10;
      input['y'] = 10;
    }
  
    return input;
}