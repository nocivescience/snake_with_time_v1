let gameStartd=false;
let startTimestamp=undefined;
let lastTimestamp=undefined;
let stepsTaken;
let snakePosition;
let constrast;
let constrastIncrease=0.5;
let fadeExponential=1.0214;
let fadeSpeed=5000;
let score;
let scoreEl=document.querySelector('.score');
const tiles=document.querySelectorAll('.tile');
const containerEl=document.querySelector('.container');
const width=15;
const height=15;
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
      if(stepsTaken==stepsShouldHaveTaken){   //voler a colocar el !==
        stepAndTransition(percentageOfStep);
        const headPosition=snakePosition[snakePosition.length-1];
        if(headPosition===171){
          score++;
          scoreEl.innerHTML=`tu puntaje: ${score}`;
          addNewApple();
          constrast=Math.min(1,constrast+constrastIncrease);
          console.log(`Constrast Increase by ${constrastIncrease*100}%`);
          console.log('New fade speed(from 100% to 0% in ms)', Math.pow(fadeExponential,2)*fadeSpeed);
        }
        stepsTaken++;
      }else{
        transition(percentageOfStep);
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
function addNewApple(){
  let newPosition;
  do{
    newPosition=Math.floor(Math.random()*(width*height));
  }while(
    snakePosition.includes(newPosition)
  );
  setTile(tiles[0],{
    'background-color':'red',
    'border-radius':'50%',
  });
};
function setTile(element, overrides={}){
  const defaults={
    width:'100%',
    height:'100%',
    top:'auto',
    right:'auto',
    bottom:'auto',
    left:'auto',
    'background-color':'transparent',
  };
}
function transition(percentageOfStep){
  console.log(percentageOfStep);
}