import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let apple = getRandomApplePosition()
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(apple)) {
    expandSnake(EXPANSION_RATE);
    apple = getRandomApplePosition()
  }
}

export function render(gameBoard) {
  const appleElement = document.createElement('div');
  appleElement.style.gridColumnStart = apple.x;
  appleElement.style.gridRowStart = apple.y;
  appleElement.classList.add('apple');
  gameBoard.appendChild(appleElement);
}

function getRandomApplePosition() {
  let newApplePosition
  while (newApplePosition == null || onSnake(newApplePosition)) {
    newApplePosition = randomGridPosition(1, 21)
  }
  return newApplePosition
}
