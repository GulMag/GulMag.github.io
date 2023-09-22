const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let velocityX=0, velocityY=0;


const changeFoodPosition = ()  => {
    // Passing a random 1-30 value as food position
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}

const changeDirection = e => {
    // Changing velocity value based on key press
    if(e.key === "ArrowUp" && velocityY!=1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY!=-1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX!=1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX!=-1) {
        velocityX = 1;
        velocityY = 0;
    }
}

const initGame = () => {
    let htmlMarkup = `<div class = "food" style = "grid-area: ${foodY} / ${foodX}"></div>`;

    //Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;
   
    htmlMarkup += `<div class = "head" style = "grid-area: ${snakeY} / ${snakeX}"></div>`;
    playBoard.innerHTML = htmlMarkup; 


}
changeFoodPosition();
//initGame();
getInterval(initGame(), 125); //head moves after 125 milliseconds
document.addEventListener("keydown", changeDirection); 