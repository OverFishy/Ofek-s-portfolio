import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let apple = getRandomApplePosition()
let score = 0;
let appleAnimation = document.createElement('div');
let appleElement;

const EXPANSION_RATE = 1;
const boardAnimation = document.getElementById('board-animation');

function appleAnimations() {
  if (appleAnimation.style.gridColumnStart == apple.x &&
      appleAnimation.style.gridRowStart == apple.y) {
        return }
  boardAnimation.innerHTML = '';
  appleAnimation = document.createElement('div');
  appleAnimation.classList.add('apple-animation');
  appleAnimation.style.gridColumnStart = apple.x;
  appleAnimation.style.gridRowStart = apple.y;
  console.log(appleAnimation.style);
  boardAnimation.appendChild(appleAnimation);
}

export function update() {
  if (onSnake(apple)) {
    expandSnake(EXPANSION_RATE);
    apple = getRandomApplePosition()
    score ++
    console.log(score);
    document.getElementById('score').innerHTML = `Score: ${score}`
  }
}

export function render(gameBoard) {
  appleElement = document.createElement('div');
  appleElement.style.gridColumnStart = apple.x;
  appleElement.style.gridRowStart = apple.y;
  appleElement.classList.add('apple');
  gameBoard.appendChild(appleElement);
  appleAnimations()
}

function getRandomApplePosition() {
  let newApplePosition
  while (newApplePosition == null || onSnake(newApplePosition)) {
    newApplePosition = randomGridPosition(1, 21)
  }
  return newApplePosition
}
