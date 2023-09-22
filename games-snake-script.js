const playBoard = document.querySelector(".play-board");

let foodX=13, foodY=10;
let snakeX = 5, snakeY = 5;

const changeFoodPosition = ()  => {
    // Passing a random 1-30 value as food position
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}

const initGame = () => {
    let htmlMarkup = `<div class = "food" style = "grid-area: ${foodY} / ${foodX}"></div>`;
    playBoard.innerHTML = htmlMarkup; 
}
changeFoodPosition();
initGame(); 