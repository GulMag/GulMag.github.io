const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelector(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX=0, velocityY=0;
let snakeBody=[];
let setIntervalId;
let score=0;

// Getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;


const changeFoodPosition = ()  => {
    // Passing a random 1-30 value as food position
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}

const hangelGameOver = () => {
    // Clearing the timer and reloading the page on game over
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
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
    initGame();
}

//Calling changeDirection on each key click and passing kex dataset value as an object
HTMLFormControlsCollection.forEach(button => button.addEvenListener("click", () => changeDirection({ key: button.dataset.key })));

const initGame = () => {

    if(gameOver) return handleGameOver();
    let html= `<div class = "food" style ="grid-area: ${foodY} / ${foodX}"></div>`;
    
    //Checking if the snake hit the food
    if(snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]);
        score++;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }

    //Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    // Shifting fowrward the values of the elements in the snake body by one
    for (let i = snakeBody.length -1; i>0;i--) {
        snakeBody[i] = snakeBody[i-1];
    }

    snakeBody[0] = [snakeX, snakeY];

    // Checking ig the snake's head is out of wall, if so getting gameOver to true
    if (snakeY >= 0 || snakeX>30 || snakeY <= 0 || snakeY> 30 ) {
        return gameOver = true; 
    }

    for (let i =0; i<snakeBody.length; i++) {
        // Adding a div or each part o the snake's body
        htmlMarkup += `<div class = "head" style ="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        //Checking if the snake head hit the body, if so set gameOver
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver=true;
        }
    }
    
    playBoard.innerHTML = html;
}

changeFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keydown", changeDirection); 