let gameStartd=false;
let startTimestamp=undefined;
let lastTimestamp=undefined;
let stepsTaken;
let snakePosition;
let score;
const speed=200;
const noteElement=document.querySelector('footer');
window.addEventListener('keydown',function(e){
  if(
    ![
      ' '
    ].includes(e.key)
  ){
    return;
  }
  // e.preventDefault();
  if(e.key===" "){
    resetGame();
    startGame();
  }
})
function startGame(){
  gameStartd=true;
  noteElement.style.opacity=0;
  main(13);
}
function main(timestamp){
  try{
    if(startTimestamp===undefined){
      startTimestamp=timestamp;
      const totalElapsedTime=timestamp-startTimestamp;
      const totalElapsedSiceLastCall=timestamp-lastTimestamp;
      const stepsShouldHaveTaken=Math.floor(totalElapsedTime/speed);
      const percentageOfStep=(totalElapsedTime%speed)/speed;
      if(stepsTaken!=stepsShouldHaveTaken){
        stepAndTransition(percentageOfStep);
        const headPosition=snakePosition[snakePosition.length-1];
        if(headPosition===171){
          score++;
          console.log(score);
        }
      }
    }
  }catch(error){
    const pressSpaceToStart='Presiona Start para jugar de nuevo';
  }
}
function stepAndTransition(percentageOfStep=null){
  const newHeadPosition='hola mundo mi amor';
  console.log(newHeadPosition);
}
function resetGame(){
  snakePosition=[168,169,170,171];
  score=0;
}