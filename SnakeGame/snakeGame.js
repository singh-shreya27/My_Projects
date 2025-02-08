//Game constants and variable
let inputDir={x:0 ,y:0};
const foodSound=new Audio('snakeGamefood.mp3');
const gameOverSound=new Audio('snakeGamegameOver.mp3');
const moveSound=new Audio('snakeGamemove.mp3');
const musicSound=new Audio('snakeGamebgmusic.mp3');
let speed=5;
let score=0;
let lastPaintTime=0;
let snakeArr=[
    {x:13, y:15}     //here origin is at top left[IMPORTANT] +x is on left, +y is down
]
food ={x:6,y:7};
//Game functions

//ctime->current time
function main(ctime){
           window.requestAnimationFrame(main);
        //    console.log(ctime);
           //to control FPS , time is in ms so / by 1000
           if((ctime -lastPaintTime)/1000<1/speed){
            return ;
           }
           lastPaintTime=ctime;
           gameEngine();
   
}

function isCollide(snake){
   //If you bump into yourself:
   for(let i=1;i<snakeArr.length;i++){
       if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
        return true;
       }
    }
    //If you bump into the wall
       if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
        return true;
       }
   return false;
}
function gameEngine(){
    //Part 1:Updating the snake array[locations of body parts] and food.
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir={x:0,y:0};
        alert("Game Over.Press any key to play again.");
        snakeArr=[{x:13,y:15}];
        musicSound.play();
        score=0;
    }

    //If you have eaten the food, increment the score and regenerate the food.
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        foodSound.play();
        score+=1;
        if(score>highScoreVal){
            highScoreVal=score;
            localStorage.setItem("High Score:",JSON.stringify(highScoreVal));
            highscoreBox.innerHTML="High Score:"+highScoreVal;

        }
        scoreBox.innerHTML="Score:"+score;
        snakeArr.unshift({x:snakeArr[0].x +inputDir.x,y:snakeArr[0].y+inputDir.y});
       //generate random number between a to b(from 0 to 1 converted to a to b)
       let a=2;
       let b=16; //grid is from 0 to 18 , but to make game linient we have  taken 2 to 16
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }
    
    //Moving the snake:
    //starting:last second element
    for(let i=snakeArr.length-2;i>=0;i--){
      snakeArr[i+1]={...snakeArr[i]}; //[IMPORTANT]where will index 0 go? , so apply destructuring.This is an altogether new object in which only snakeArr[i] is present.
    }
   
    snakeArr[0].x+=inputDir.x;
    snakeArr[0].y+=inputDir.y;

    //Part 2:Display the snake and food.
    //Display snake:
    board.innerHTML = "";  //board clear
    //e->element
    snakeArr.forEach((e,index)=>{
     snakeElement=document.createElement('div');
     snakeElement.style.gridRowStart=e.y; //y->row
     snakeElement.style.gridColumnStart=e.x;  //x->column
     if(index===0){
     snakeElement.classList.add('head');   
     }
     else{
     snakeElement.classList.add('snake');
     }
     board.appendChild(snakeElement);
    });
   //Display food:
     foodElement=document.createElement('div');
     foodElement.style.gridRowStart=food.y; //y->row
     foodElement.style.gridColumnStart=food.x;  //x->column
     foodElement.classList.add('food');
     board.appendChild(foodElement);
}

//Main logic starts here.
//A very important thing for any game is GAME LOOP.
musicSound.play();
let highScore=localStorage.getItem("High Score:");
if(highScore===null){
    highScoreVal=0;
    localStorage.setItem("High Score:",JSON.stringify(highScoreVal));
}
else{
    highScoreVal=JSON.parse(highScore);
    highscoreBox.innerHTML="High Score:"+highScore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir ={x:0,y:1} //start the game
    moveSound.play();
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            break;
        default:
            break;
    }

});