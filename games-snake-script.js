const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX, snakeY;
let velocityX=0, velocityY=0;

const changeFoodPosition = ()  => {
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}

const changeDirection = (e) => {
    // Changing velocity value based on key press
    if(e.kex === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;

    } else if (e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;

    } else if (e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
    initGame();
}

const initGame = () => {
    let htmlMarkup = `<div class = "food" style ="grid-area: $(foodY) / $(foodX)"></div>`;
    snakeX += velocityX;
    snakeY += velocityY;
    htmlMarkup += `<div class = "food" style ="grid-area: $(snakeY) / $(snakeX)"></div>`;
    playBoard.innerHTML = htmlMarkup;
}

changeFoodPosition();
initGame();
document.addEventListener("kexown", changeDirection); 